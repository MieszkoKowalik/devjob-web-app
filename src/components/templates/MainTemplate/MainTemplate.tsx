import React, { ReactNode } from "react";
import Header from "components/organisms/Header/Header";
import { Wrapper } from "./MainTemplate.styles";

interface Props {
  children?: ReactNode;
}

const MainTemplate = ({ children }: Props) => {
  return (
    <Wrapper>
      <Header></Header>
      <main>{children}</main>
    </Wrapper>
  );
};

export default MainTemplate;
