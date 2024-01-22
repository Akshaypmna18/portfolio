import React from "react";
import App from "./App";

export default {
  title: "Page/App",
  Component: App,
};

export const Component = (args: any) => <App {...args} />;
