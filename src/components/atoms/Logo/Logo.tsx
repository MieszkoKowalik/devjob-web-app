import styled from "styled-components";

interface ILogo {
  backgroundColor: string;
  source?: string;
}

export const Logo = styled.div<ILogo>`
  width: 50px;
  height: 50px;
  background-color: ${({ backgroundColor }) => backgroundColor || "#ccc"};
  border-radius: 15px;
  background-image: ${({ source }) => `url(${source})`};
  background-position: center;
  background-repeat: no-repeat;
`;
