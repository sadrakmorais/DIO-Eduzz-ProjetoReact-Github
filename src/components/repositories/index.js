import React from "react";
import RepositoryItem from "../repository-item";
import * as S from "./styled";

const Repositories = () => {
  return (
    <S.WrapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabList>
      <S.WrapperTabList>
        <S.WrapperTabPanel>
          <RepositoryItem
            name="AnimaisFantasticos"
            linkToRepo="https://github.com/sadrakmorais/AnimaisFantasticos-OrigamidProject"
            fullName="sadrakmorais/AnimaisFantasticos-OrigamidProject"
          />
        </S.WrapperTabPanel>
        <S.WrapperTabPanel>
          <RepositoryItem
            name="backEndMossoroMais"
            linkToRepo="https://github.com/sadrakmorais/backEndMossoroMais"
            fullName="sadrakmorais/backEndMossoroMais"
          />
        </S.WrapperTabPanel>
      </S.WrapperTabList>
    </S.WrapperTabs>
  );
};

export default Repositories;
