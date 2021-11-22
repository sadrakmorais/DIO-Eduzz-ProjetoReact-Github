import React from "react";
import App from "./App";
import { ResetCss } from "./global/resetcss";
import GithubProvider from "./providers/github-providr";

const Providers = () => {
  return (
    <main>
      <GithubProvider>
        <ResetCss />
        <App />
      </GithubProvider>
    </main>
  );
};

export default Providers;
