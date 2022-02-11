import React from "react";
import { hot } from "react-hot-loader/root";
import { Header } from "./Header";
import { Layout } from "./Layout/Layout";

const AppComponent = () => {
  return (
    <Layout>
        <Header />
    </Layout>
  );
};

export const App = hot(AppComponent);
