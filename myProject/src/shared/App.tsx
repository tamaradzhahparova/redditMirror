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
import {PostsContextProvider} from "./context/postsContext";
import {commentContext} from "./context/commentContext";

const AppComponent: FC = () => {
  const [token] = useToken()
  const [commentValue, setCommentValue] = useState('')

  const CommentProvider = commentContext.Provider

  return (
    <CommentProvider value={{
      value: commentValue,
      setValue: setCommentValue
    }}>
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
    </CommentProvider>
  );
};

export const App = hot(() => <AppComponent/>);

