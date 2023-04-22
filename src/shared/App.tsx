import React, {FC, useEffect, useState} from "react";
import "../main.global.css";
import {hot} from "react-hot-loader/root";
import {Header} from "./Header/Header";
import {Layout} from "./Layout/Layout";
import Content from "./Content/Content";
import CardsList from "./CardsList/CardsList";
import {Provider} from 'react-redux'
import store from "../redux/store";
import {
  BrowserRouter as Router, Route
} from "react-router-dom";
import Post from "./CardsList/Post/Post";
import {Routes, Navigate} from "react-router-dom";

const AppComponent: FC = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  
  
  return (
    <Provider store={store}>
      {mounted && (<Router>
        <Layout>
          <Header/>
          <Content>
            <Routes>
              <Route path='/posts' element={<CardsList/>}/>
              <Route path='/posts/:id' element={<Post/>}/>
              <Route path="/" element={<Navigate to="/posts" replace/>} />
              <Route path="/auth" element={<Navigate to="/posts" replace/>}/>
              <Route path="*" element={<div style={{textAlign: 'center'}}>Страница не найдена!</div>}/>
            </Routes>
          </Content>
        </Layout>
      </Router>)}
    </Provider>
  );
};

export const App: React.ComponentType = hot(() => <AppComponent/>);

