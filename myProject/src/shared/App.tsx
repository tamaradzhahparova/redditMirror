import React from "react";
import "../main.global.css";
import {hot} from "react-hot-loader/root";
import {Header} from "./Header/Header";
import {Layout} from "./Layout/Layout";
import Content from "./Content/Content";
import CardsList from "./CardsList/CardsList";

const AppComponent = () => {
  return (
    <Layout>
      <Header/>
      <Content>
        <CardsList/>
      </Content>
    </Layout>
  );
};

export const App = hot(AppComponent);

