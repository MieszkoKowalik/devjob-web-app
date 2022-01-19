import styled from "styled-components";
import { ReactComponent as ChevronLeftIcon } from "assets/images/chevron-left.svg";

export const StyledChevronLeftIcon = styled(ChevronLeftIcon)`
  height: 10px;
`;
export const StyledChevronRightIcon = styled(StyledChevronLeftIcon)`
  transform: rotate(180deg);
`;

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 32px 0 62px;
  list-style: none;
  justify-content: center;
`;
