import React, {FC} from "react";
import "../main.global.css";
import {hot} from "react-hot-loader/root";
import {Header} from "./Header/Header";
import {Layout} from "./Layout/Layout";
import Content from "./Content/Content";
import CardsList from "./CardsList/CardsList";
import {Provider} from 'react-redux'
import store from "../redux/store";

const AppComponent: FC = () => {
  return (
    <Provider store={store}>
          <Layout>
            <Header/>
            <Content>
                <CardsList/>
            </Content>
          </Layout>
    </Provider>
  );
};

export const App: React.ComponentType = hot(() => <AppComponent/>);

