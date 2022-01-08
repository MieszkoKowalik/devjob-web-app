import styled from "styled-components";
import CheckedIcon from "assets/images/desktop/icon-check.svg";

export const StyledLabel = styled.label`
  font-weight: 700;
  display: flex;
  color: ${({ theme }) => theme.colors.text.primary};
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;

  &:hover {
    div {
      background-color: ${({ theme }) => theme.colors.bg.accentLight};
    }
  }

  input {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  input:focus-visible + div {
    background-color: ${({ theme }) => theme.colors.bg.accentLight};
    position: relative;
  }
  input:checked + div::after {
    content: ${() => `url(${CheckedIcon})`};
    display: block;
    position: absolute;
  }
  input:checked + div {
    background-color: ${({ theme }) => theme.colors.bg.accentDark};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.colors.bg.neutralDark};
    transition: background-color 0.2s;
  }
`;
