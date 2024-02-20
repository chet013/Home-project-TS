import React from 'react';
import { Layout } from 'antd';
import { AppHeader } from './componets/Header/AppHeader'
import './index.css'

const { Footer, Content } = Layout;

function App() {
  return (
    <Layout className='layoutStyle'>
      <AppHeader />
      <Content className='contentStyle'>Content</Content>
      <Footer className='footerStyle'>Footer</Footer>
    </Layout>
  );
}

export default App;