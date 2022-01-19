import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "assets/styles/globalStyle";
import ThemesProvider from "providers/ThemesProvider";
import { ReactNode } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

interface Props {
  children: ReactNode;
}

const client = new ApolloClient({
  uri: "/.netlify/functions/fetchDatoCMS",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          allJobs: {
            read(existing, { args }) {
              return (
                existing && existing.slice(args!.skip, args!.skip + args!.first)
              );
            },
            keyArgs: ["jobPosition", "location", "contract"],
            merge(existing = [], incoming, { args }) {
              const merged = existing ? existing.slice(0) : [];
              for (let i = 0; i < incoming.length; ++i) {
                merged[args!.skip + i] = incoming[i];
              }
              return merged;
            },
          },
        },
      },
    },
  }),
});

const AppProviders = ({ children }: Props) => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <ThemesProvider>
          <GlobalStyle />
          {children}
        </ThemesProvider>
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default AppProviders;
