import styled from "styled-components";

interface IViewWrapper {
  isNarrow?: boolean;
}

export const ViewWrapper = styled.div<IViewWrapper>`
  width: 100%;
  max-width: ${({ isNarrow }) => (isNarrow ? "736px" : "1110px")};
  margin-left: 24px;
  margin-right: 24px;
`;
