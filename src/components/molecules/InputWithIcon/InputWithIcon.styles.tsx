import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  input {
    padding: 8px;
    background-color: transparent;
    border: none;
    width: 100%;
    flex: 1 1;
    color: ${({ theme }) => theme.colors.text.primary};
    caret-color: ${({ theme }) => theme.colors.text.accent};
  }
  input::placeholder {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text.neutral};
  }
`;
