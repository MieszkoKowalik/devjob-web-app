import styled from "styled-components";

interface IText {
  isSecondary?: boolean;
}
export const Text = styled.p<IText>`
  font-size: 1rem;
  line-height: 1.625;
  color: ${({ theme, isSecondary }) =>
    isSecondary ? theme.colors.text.neutral : theme.colors.text.neutralDark};
`;
