import styled from "styled-components";

interface IContentWrapper {
  padding?: string;
  className?: string;
}

export const ContentWrapper = styled.div<IContentWrapper>`
  background-color: ${({ theme }) => theme.colors.bg.neutral};
  padding: ${({ padding }) => padding || "32px"};
  border-radius: 6px;
`;
