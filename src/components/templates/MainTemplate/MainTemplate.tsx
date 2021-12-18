import React, { ReactNode } from "react";
import Header from "components/organisms/Header/Header";
import { ViewWrapper } from "components/molecules/ViewWrapper/ViewWrapper";
import { Wrapper } from "./MainTemplate.styles";

interface Props {
  children?: ReactNode;
}

const MainTemplate = ({ children }: Props) => {
  return (
    <Wrapper>
      <Header></Header>
      <main>
        <ViewWrapper>{children}</ViewWrapper>
      </main>
    </Wrapper>
  );
};

export default MainTemplate;
