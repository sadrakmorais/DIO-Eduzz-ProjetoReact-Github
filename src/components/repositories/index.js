import React, { useEffect, useState } from "react";
import RepositoryItem from "../repository-item";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";

const Repositories = () => {
  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSearch, setHasUserForSearch] = useState(false);

  useEffect(() => {
    if (!!githubState.user.login) {
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
    setHasUserForSearch(!!githubState.repositories);
  }, [githubState.user.login]);

  return (
    <>
      {hasUserForSearch ? (
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
              {githubState.repositories.map((e) => (
                <RepositoryItem
                  key={e.id}
                  name={e.name}
                  linkToRepo={e.html_url}
                />
              ))}
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
              {githubState.starred.map((e) => (
                <RepositoryItem
                  key={e.id}
                  name={e.name}
                  linkToRepo={e.html_url}
                  author={e.owner.login}
                  authorLink={e.owner.html_url}
                />
              ))}
            </S.WrapperTabPanel>
          </S.WrapperTabList>
        </S.WrapperTabs>
      ) : (
        <></>
      )}
    </>
  );
};

export default Repositories;
