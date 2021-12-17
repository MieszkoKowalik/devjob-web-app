import styled, { css } from "styled-components";

interface IButton {
  isSecondary?: boolean;
}

export const Button = styled.button<IButton>`
  padding: 14px 20px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.bg.accentDark};
  color: ${({ theme }) => theme.colors.text.neutralLight};
  font-weight: 700;
  font-size: 1rem;
  transition: 0.2s color, 0.2s background-color;
  cursor: pointer;

  &:hover {
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
