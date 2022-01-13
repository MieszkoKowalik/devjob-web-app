import React, { ReactNode } from "react";
import { ModalWrapper, Overlay } from "./Modal.styles";
import { ContentWrapper } from "components/molecules/ContentWrapper/ContentWrapper";
interface Props {
  isOpen: boolean;
  children: ReactNode;
  closeModal: () => void;
}

const Modal = ({ isOpen, closeModal, children }: Props) => {
  return (
    <ModalWrapper
      overlayElement={(props, contentElement) => (
        <Overlay {...props}>{contentElement}</Overlay>
      )}
      appElement={document.getElementById("root")!}
      isOpen={isOpen}
      onRequestClose={closeModal}
    >
      <ContentWrapper padding="24px">{children}</ContentWrapper>
    </ModalWrapper>
  );
};

export default Modal;
