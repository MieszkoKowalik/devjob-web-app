import styled from "styled-components";
import { ContentWrapper } from "components/molecules/ContentWrapper/ContentWrapper";
import { ReactComponent as SearchIcon } from "assets/images/desktop/icon-search.svg";
import { Button } from "components/atoms/Button/Button";
import InputWithIcon from "components/molecules/InputWithIcon/InputWithIcon";
import { ReactComponent as FilterIcon } from "assets/images/mobile/icon-filter.svg";

export const SearchBarWrapper = styled(ContentWrapper)`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const SearchBarInput = styled(InputWithIcon)`
  flex: 1 1;
  @media ${({ theme }) => theme.breakpoints.m} {
    &::after {
      content: "";
      width: 1px;
      height: calc(100% + 16px * 2);
      background-color: ${({ theme }) => theme.colors.text.neutral};
      opacity: 20%;
    }
  }
`;

export const SearchButton = styled(Button)`
  padding: 14px;
  font-size: 0;
  @media ${({ theme }) => theme.breakpoints.m} {
    font-size: 1rem;
  }
  @media ${({ theme }) => theme.breakpoints.l} {
    padding: 14px 35px;
  }
`;

interface IIcon {
  $isAccented?: boolean;
  $isBig?: boolean;
}
export const StyledSearchIcon = styled(SearchIcon)<IIcon>`
  fill: ${({ $isAccented, theme }) =>
    $isAccented ? theme.colors.text.accent : theme.colors.text.neutralLight};
  width: ${({ $isBig }) => ($isBig ? "24px" : "20px")};
  height: ${({ $isBig }) => ($isBig ? "24px" : "20px")};
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ModalInput = styled(InputWithIcon)`
  position: relative;
  padding-bottom: 24px;
  &::after {
    position: absolute;
    bottom: 0px;
    left: -24px;
    content: "";
    width: calc(100% + (2 * 24px));
    height: 1px;
    background-color: ${({ theme }) => theme.colors.text.neutral};
    opacity: 20%;
  }
`;
export const FilterButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export const StyledFilterIcon = styled(FilterIcon)`
  fill: ${({ theme }) => theme.colors.text.neutral};
`;
