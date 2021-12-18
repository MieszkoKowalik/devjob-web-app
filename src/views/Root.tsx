import GlobalStyle from "assets/styles/globalStyle";
import ThemesProvider from "providers/ThemesProvider";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobsList from "./JobsList";

function Root() {
  return (
    <BrowserRouter>
      <ThemesProvider>
        <GlobalStyle />
        <MainTemplate>
          <Routes>
            <Route path="/" element={<JobsList />} />
          </Routes>
        </MainTemplate>
      </ThemesProvider>
    </BrowserRouter>
  );
}

export default Root;
