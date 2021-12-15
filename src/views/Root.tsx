import GlobalStyle from "assets/styles/globalStyle";
import ThemesProvider from "providers/ThemesProvider";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";

function Root() {
  return (
    <div className="App">
      <ThemesProvider>
        <GlobalStyle />
        <MainTemplate>
          <h1>It's working</h1>
        </MainTemplate>
      </ThemesProvider>
    </div>
  );
}

export default Root;
