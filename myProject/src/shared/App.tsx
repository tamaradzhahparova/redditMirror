import React, {FC} from "react";
import "../main.global.css";
import {hot} from "react-hot-loader/root";
import {Header} from "./Header/Header";
import {Layout} from "./Layout/Layout";
import Content from "./Content/Content";
import CardsList from "./CardsList/CardsList";
import {useToken} from "../hooks/useToken";
import {tokenContext} from "./context/tokenContext";
import {UserContextProvider} from "./context/userContext";
import {PostsContextProvider} from "./context/postsContext";

const AppComponent: FC = () => {
  const [token] = useToken()

  return (
    <tokenContext.Provider value={token}>
      <UserContextProvider>
        <Layout>
          <Header/>
          <Content>
            <PostsContextProvider>
              <CardsList/>
            </PostsContextProvider>
          </Content>
        </Layout>
      </UserContextProvider>
    </tokenContext.Provider>
  );
};

export const App = hot(() => <AppComponent/>);

