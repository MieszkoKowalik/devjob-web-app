import styled from "styled-components";

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  cursor: pointer;
  span {
    width: 48px;
    height: 24px;
    padding: 5px;
    background-color: white;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: left;
    ::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 14px;
      height: 14px;
      transition: transform 0.2s ease-in-out, background-color 0.2s;
      transform: ${({ theme }) =>
        theme.mode === "light"
          ? "translateX(0%)"
          : "translateX(calc(200% - 5px))"};
      background-color: ${({ theme }) => theme.colors.bg.accentDark};
    }
    &:hover {
      &::after {
        background-color: ${({ theme }) => theme.colors.bg.accent};
      }
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
  input:focus-visible ~ span::after {
    background-color: ${({ theme }) => theme.colors.bg.accent};
  }
`;
