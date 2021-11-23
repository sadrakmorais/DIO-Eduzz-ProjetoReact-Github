import React, { useState } from "react";
import useGithub from "../../hooks/github-hooks";

import * as S from "./styled";

const Header = () => {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState(undefined);

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };
  return (
    <S.Wrapper>
      <input
        type="text"
        placeholder="Digite um username para pesquisa"
        onChange={(event) => setUsernameForSearch(event.target.value)}
      ></input>
      <button onClick={submitGetUser}>BUSCAR</button>
    </S.Wrapper>
  );
};

export default Header;
