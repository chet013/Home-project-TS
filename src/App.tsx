import React from 'react';
import { Layout } from 'antd';
import { Header } from './componets/Header/Header'
import { ListingPageContainer } from './pages/ListingPage/ListingPageContainer'
import { PostPageContainer } from './pages/PostPage/PostPageContainer'
import './index.css'

const { Footer, Content } = Layout;

function App() {

  return (
    <Layout className='layout'>
      <Header />
      <Content className='content'>
        {/* <ListingPageContainer /> */}
        <PostPageContainer />
      </Content>
      <Footer className='footer'>Footer</Footer>
    </Layout>
  );
}

export default App;