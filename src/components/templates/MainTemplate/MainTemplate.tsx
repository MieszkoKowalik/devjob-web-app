import React, { ReactNode } from "react";
import Header from "components/organisms/Header/Header";
import { ContentWrapper } from "components/molecules/ContentWrapper/ContentWrapper";
import { Wrapper } from "./MainTemplate.styles";

interface Props {
  children?: ReactNode;
}

const MainTemplate = ({ children }: Props) => {
  return (
    <Wrapper>
      <Header></Header>
      <main>
        <ContentWrapper>{children}</ContentWrapper>
      </main>
    </Wrapper>
  );
};

export default MainTemplate;
