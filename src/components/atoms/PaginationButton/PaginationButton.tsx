import styled, { css } from "styled-components";

interface IButton {
  isActive?: boolean;
  hasIcon?: boolean;
}

export const PaginationButton = styled.button<IButton>`
  display: inline-block;
  width: 32px;
  height: 32px;
  border: 2px solid ${({ theme }) => theme.colors.bg.accent};
  border-radius: 5px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text.neutral};
  font-weight: 700;
  font-size: 1rem;
  transition: 0.2s color, 0.2s background-color, 0.2s border-color;
  text-decoration: none;
  cursor: pointer;

  svg {
    fill: ${({ theme }) => theme.colors.text.neutral};
  }

  &:focus {
    outline: none;
  }
  &:not(:disabled):hover,
  &:not(:disabled):focus-visible {
    border-color: ${({ theme }) => theme.colors.bg.accentDark};
    color: ${({ theme }) => theme.colors.text.primary};
    svg {
      fill: ${({ theme }) => theme.colors.text.primary};
    }
  }

  ${({ hasIcon }) =>
    hasIcon &&
    css`
      font-size: 0;
    `}

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.colors.text.neutralLight};
      border-color: ${({ theme }) => theme.colors.bg.accentDark};
      background-color: ${({ theme }) => theme.colors.bg.accentDark};

      &:not(:disabled):hover,
      &:not(:disabled):focus-visible {
        color: ${({ theme }) => theme.colors.text.neutralLight};
      }
    `}
`;
