import React, {FC, useState} from "react";
import "../main.global.css";
import {hot} from "react-hot-loader/root";
import {Header} from "./Header/Header";
import {Layout} from "./Layout/Layout";
import Content from "./Content/Content";
import CardsList from "./CardsList/CardsList";
import {useToken} from "../hooks/useToken";
import {tokenContext} from "./context/tokenContext";
import {UserContextProvider} from "./context/userContext";

const AppComponent: FC = () => {
  const [token] = useToken()
  
  return (
    <tokenContext.Provider value={token}>
      <UserContextProvider>
        <Layout>
          <Header/>
          <Content>
            <CardsList/>
          </Content>
        </Layout>
      </UserContextProvider>
    </tokenContext.Provider>
  );
};

export const App = hot(() => <AppComponent/>);

