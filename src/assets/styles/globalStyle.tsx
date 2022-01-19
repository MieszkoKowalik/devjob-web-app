import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html {
  scroll-behavior: smooth;
}
	
	*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

input,
button,
textarea,
select {
  font: inherit;
}

	body{
	font-family: 'Kumbh Sans', sans-serif;
  min-height:100vh;
  background-color: ${({ theme }) => theme.colors.bg.primary}
}
`;

export default GlobalStyle;
