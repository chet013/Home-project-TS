import { Layout } from 'antd';
import { Header } from './componets/Header/Header'
import { BuildPage } from './componets/MainPages/MainPages';
import './index.css'

const { Footer, Content } = Layout;

function App() {
  return (
    <Layout className='layout'>
      <Header />
      <Content className='content'>
        <BuildPage />
      </Content>
      <Footer className='footer'>Footer</Footer>
    </Layout>

  );
}

export default App;