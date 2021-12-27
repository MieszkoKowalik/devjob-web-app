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
  cache: new InMemoryCache(),
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
