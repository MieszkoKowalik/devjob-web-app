import styled from "styled-components";
import { ContentWrapper } from "components/molecules/ContentWrapper/ContentWrapper";
import { Title } from "components/atoms/Title/Title";
import { Text } from "components/atoms/Text/Text";

export const StyledContentWrapper = styled(ContentWrapper)`
  margin-top: 32px;
  margin-bottom: 128px;
  padding: 40px 24px;
  @media ${({ theme }) => theme.breakpoints.m} {
    padding: 48px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  @media ${({ theme }) => theme.breakpoints.m} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const MainTitle = styled(Title)`
  margin-top: 8px;
  margin-bottom: 12px;
  @media ${({ theme }) => theme.breakpoints.m} {
    font-size: 1.75rem;
  }
`;

export const SectionWrapper = styled.div`
  margin-top: 40px;
  ${Text} {
    margin-top: 28px;
    margin-bottom: 32px;
  }
  ol {
    counter-reset: item;
    list-style-type: none;
    li:before {
      content: counter(item) "  ";
      counter-increment: item;
      background-color: transparent;
      flex-basis: 36px;
    }
  }
  li::before {
    color: ${({ theme }) => theme.colors.text.accent};
    font-weight: 700;
    line-height: 26px;
    flex-shrink: 0;
    content: " ";
    background-color: ${({ theme }) => theme.colors.text.accent};
  }
  ul {
    list-style-type: none;
    li::before {
      display: inline-block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      transform: translateY(-3px);
      background-color: ${({ theme }) => theme.colors.text.accent};
      margin-right: 32px;
    }
  }
  li {
    color: ${({ theme }) => theme.colors.text.neutralDark};
    line-height: 1.625;
    display: flex;
    align-items: baseline;
  }
  li:not(:last-child) {
    margin-bottom: 8px;
  }
`;
