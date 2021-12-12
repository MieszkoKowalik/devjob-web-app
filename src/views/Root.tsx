import React from "react";
import GlobalStyle from "assets/styles/globalStyle";
import ThemesProvider from "providers/ThemesProvider";
function Root() {
  return (
    <div className="App">
      <ThemesProvider>
        <GlobalStyle />
        <h1>It's working</h1>
      </ThemesProvider>
    </div>
  );
}

export default Root;
