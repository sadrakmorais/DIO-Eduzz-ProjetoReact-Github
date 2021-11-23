import React from "react";
import * as S from "./styled";

const RepositoryItem = ({ name, author, linkToRepo, authorLink }) => {
  return (
    <S.Wrapper>
      <h2>Nome: {name}</h2>
      {!!authorLink ? (
        <a href={authorLink} target="_blank" rel="noreferrer">
          Autor: {author}
        </a>
      ) : (
        <></>
      )}
      <a href={linkToRepo} target="_blank" rel="noreferrer">
        ABRIR REPOSITÓRIO
      </a>
    </S.Wrapper>
  );
};

export default RepositoryItem;
