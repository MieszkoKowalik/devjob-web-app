import styled from "styled-components";
import ReactModal from "react-modal";

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalWrapper = styled(ReactModal).attrs({
  overlayClassName: "ReactModal__Overlay",
})`
  flex-basis: 100%;
  margin: 0 24px;
  max-width: 768px;
  border-radius: 15px;
  &:focus {
    outline: none;
  }
`;
