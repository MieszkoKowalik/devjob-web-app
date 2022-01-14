import styled from "styled-components";
import { ViewWrapper } from "components/molecules/ViewWrapper/ViewWrapper";
import { Text } from "components/atoms/Text/Text";

export const StyledSpan = styled.span`
  display: block;
  font-size: clamp(5rem, 25vw, 20rem);
  line-height: 1;
  color: ${({ theme }) => theme.colors.text.accent};
`;
export const StyledViewWrapper = styled(ViewWrapper)`
  align-self: center;
  text-align: center;
`;

export const StyledText = styled(Text)`
  margin: 20px 0;
`;
