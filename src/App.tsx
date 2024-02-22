import React from 'react';
import { Layout } from 'antd';
import { Header } from './componets/Header/Header'
import { Page } from './componets/Page/Page'
import { PostType } from './types'
import './index.css'

const { Footer, Content } = Layout;


function App(posts: PostType[]) {
  return (
    <Layout className='layout'>
      <Header />
      <Content className='content'>
        <Page posts={posts} />
      </Content>
      <Footer className='footer'>Footer</Footer>
    </Layout>
  );
}

export default App;