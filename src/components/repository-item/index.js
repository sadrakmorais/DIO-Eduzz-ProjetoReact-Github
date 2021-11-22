import React from "react";

const RepositoryItem = ({ name, fullName, linkToRepo }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h4>{fullName}</h4>
      <span>{linkToRepo}</span>
    </div>
  );
};

export default RepositoryItem;
