import { Button } from "components/atoms/Button/Button";
import styled from "styled-components";

export const ListWrapper = styled.div`
  margin-top: calc(32px + 25px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 10px;
  row-gap: calc(24px + 25px);
  @media ${({ theme }) => theme.breakpoints.m} {
    margin-top: calc(45px + 25px);
    row-gap: calc(40px + 25px);
  }
  @media ${({ theme }) => theme.breakpoints.xl} {
    margin-top: calc(80px + 25px);
    column-gap: 30px;
  }
`;

export const StyledButton = styled(Button)`
  margin: 32px auto 62px;
  display: block;
  @media ${({ theme }) => theme.breakpoints.m} {
    margin-top: 56px;
    margin-bottom: 61px;
  }
`;
