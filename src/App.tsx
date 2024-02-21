import React from 'react';
import { Layout } from 'antd';
import { Header } from './componets/Header/Header'
import UserCard from './componets/UserCard/UserCard';
import './index.css'

const { Footer, Content } = Layout;

function App() {
  return (
    <Layout className='layout'>
      <Header />
      <Content className='content'>
        <UserCard />
        <UserCard />
        <UserCard />
      </Content>
      <Footer className='footer'>Footer</Footer>
    </Layout>
  );
}

export default App;