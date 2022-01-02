import { ContentWrapper } from "components/molecules/ContentWrapper/ContentWrapper";
import { ViewWrapper } from "components/molecules/ViewWrapper/ViewWrapper";
import { Button } from "components/atoms/Button/Button";
import styled from "styled-components";
export const StyledContentWrapper = styled(ContentWrapper)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 96px;
  padding-top: unset;
  padding-bottom: unset;
  display: flex;
`;
export const StyledViewWrapper = styled(ViewWrapper)`
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StyledButton = styled(Button)`
  flex-grow: 1;
  @media ${({ theme }) => theme.breakpoints.m} {
    flex-grow: 0;
  }
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
