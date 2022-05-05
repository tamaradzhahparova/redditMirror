import React, {FC} from "react";
import "../main.global.css";
import {hot} from "react-hot-loader/root";
import {Header} from "./Header/Header";
import {Layout} from "./Layout/Layout";
import Content from "./Content/Content";
import CardsList from "./CardsList/CardsList";
import {UserContextProvider} from "./context/userContext";
import {Provider} from 'react-redux'
import store from "../redux/store";

const AppComponent: FC = () => {
  return (
    <Provider store={store}>
        <UserContextProvider>
          <Layout>
            <Header/>
            <Content>
                <CardsList/>
            </Content>
          </Layout>
        </UserContextProvider>
    </Provider>
  );
};

export const App: React.ComponentType = hot(() => <AppComponent/>);

