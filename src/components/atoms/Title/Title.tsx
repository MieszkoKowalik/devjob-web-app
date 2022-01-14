import styled, { css } from "styled-components";

interface ITitle {
  isResponsive?: boolean;
}

export const Title = styled.h1<ITitle>`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.25rem;

  ${({ isResponsive }) =>
    isResponsive &&
    css`
      @media ${({ theme }) => theme.breakpoints.m} {
        font-size: 1.75rem;
      }
    `}
`;
