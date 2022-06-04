/* @refresh reload */
import { Component } from "solid-js";
import { render } from "solid-js/web";

// import { Router, useRoutes, hashIntegration } from "solid-app-router";

const App: Component = () => {

  return (
    <p>Currently in development ! Come back later...</p>
  );
};

render(
  () => <App />,
  document.getElementById("root") as HTMLDivElement
);
