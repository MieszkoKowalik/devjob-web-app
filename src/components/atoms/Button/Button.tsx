import styled, { css } from "styled-components";

interface IButton {
  isSecondary?: boolean;
  isWide?: boolean;
}

export const Button = styled.button<IButton>`
  padding: ${({ isWide }) => (isWide ? "14px 28px" : "14px 20px")};
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.bg.accentDark};
  color: ${({ theme }) => theme.colors.text.neutralLight};
  font-weight: 700;
  font-size: 1rem;
  transition: 0.2s color, 0.2s background-color;
  text-decoration: none;
  cursor: pointer;

  &:hover,
  &:focus-visible {
    background-color: ${({ theme }) => theme.colors.bg.accent};
  }

  ${({ isSecondary }) =>
    isSecondary &&
    css`
      background-color: ${({ theme }) => theme.colors.bg.accentVeryLight};
      color: ${({ theme }) => theme.colors.text.accentDark};

      &:hover {
        background-color: ${({ theme }) => theme.colors.bg.accentLight};
      }
    `}
`;
