import styled, { keyframes, DefaultTheme } from "styled-components";

const changeSize = (theme: DefaultTheme) => keyframes`
from{
	transform: scale(0.6);
	background-color: ${theme.colors.bg.accent};
}
`;

export const LoaderWrapper = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  height: 100%;
  align-items: center;

  span {
    width: 40px;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.bg.accentDark};
    border-radius: 50%;
    animation: ${({ theme }) => changeSize(theme)} 0.6s ease-in-out alternate
      infinite;
    flex-shrink: 0;
  }
  span:first-of-type {
    animation-delay: -0.2s;
  }
  span:last-of-type {
    animation-delay: 0.2s;
  }
`;
