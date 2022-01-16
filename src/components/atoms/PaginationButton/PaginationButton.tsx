import styled, { css } from "styled-components";

interface IButton {
  isActive?: boolean;
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

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.bg.accentDark};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.colors.text.neutralLight};
      border-color: ${({ theme }) => theme.colors.bg.accentDark};
      background-color: ${({ theme }) => theme.colors.bg.accentDark};

      &:hover,
      &:focus-visible {
        color: ${({ theme }) => theme.colors.text.neutralLight};
      }
    `}
`;
