import React from "react";
import * as S from "./styled";
import Header from "../header";
import useGithub from "../../hooks/github-hooks";

const Layout = ({ children }) => {
  const { githubState } = useGithub();
  return (
    <S.WrapperLayout>
      <Header />
      {children}
    </S.WrapperLayout>
  );
};

export default Layout;
