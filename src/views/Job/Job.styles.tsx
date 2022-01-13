import { ViewWrapper } from "components/molecules/ViewWrapper/ViewWrapper";
import Loader from "components/molecules/Loader/Loader";
import styled from "styled-components";

export const StyledViewWrapper = styled(ViewWrapper)`
  display: grid;
  grid-template-rows: 1fr;
`;

export const CenteredLoader = styled(Loader)`
  align-self: center;
`;
