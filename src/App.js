import React, { Component, Suspense } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./Routes"
import Loader from "./globals/Loader/Loader";
import './App.scss';

const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Content className="contents">
            <Router>
              <Suspense fallback={<Loader />}>
                <Routes />
              </Suspense>
            </Router>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App