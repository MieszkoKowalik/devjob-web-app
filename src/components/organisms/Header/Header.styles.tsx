import styled from "styled-components";

import { ViewWrapper } from "components/molecules/ViewWrapper/ViewWrapper";
import HeaderMoblieBg from "assets/images/mobile/bg-pattern-header.svg";
import HeaderTabletBg from "assets/images/tablet/bg-pattern-header.svg";
import HeaderDesktopBg from "assets/images/desktop/bg-pattern-header.svg";

export const StyledContentWrapper = styled(ViewWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const StyledHeader = styled.header`
  background-image: ${`url(${HeaderMoblieBg})`};
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding-top: 32px;
  height: 136px;

  @media ${({ theme }) => theme.breakpoints.m} {
    height: 160px;
  }
  display: flex;
  justify-content: center;
  @media ${({ theme }) => theme.breakpoints.m} {
    background-image: ${`url(${HeaderTabletBg})`};
    padding-top: 42px;
  }
  @media ${({ theme }) => theme.breakpoints.xl} {
    background-image: ${`url(${HeaderDesktopBg})`};
    padding-top: 45px;
  }
`;
