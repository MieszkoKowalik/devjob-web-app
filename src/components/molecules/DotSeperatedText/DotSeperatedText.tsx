import { Text } from "components/atoms/Text/Text";
import styled from "styled-components";

export const StyledText = styled(Text)`
  display: flex;
  align-items: center;
  gap: 12px;
  span {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${({ theme, isSecondary }) =>
      isSecondary ? theme.colors.text.neutral : theme.colors.text.neutralDark};
  }
`;

interface Props {
  before: string;
  after: string;
  isSecondary?: boolean;
}

const DotSeperatedText = ({ before, after, isSecondary }: Props) => {
  return (
    <StyledText isSecondary={isSecondary}>
      {before}
      <span></span>
      {after}
    </StyledText>
  );
};

export default DotSeperatedText;
