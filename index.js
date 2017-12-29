import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Layout, Menu, Breadcrumb, Calendar } from 'antd';
const { Header, Content, Footer } = Layout;



class App extends React.Component {
  constructor(props) {
    super(props);

    this.dateCellRender = this.dateCellRender.bind(this);
  }


  dateCellRender(moment) {

    let currentDay = moment.date();

    return(
      <h1>{currentDay}</h1>

    );
  }


  render() {
    return(
      <Layout>
      <Header style={{ position: 'fixed', width: '100%' }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">Canlendar</Menu.Item>
          <Menu.Item key="2">Profile</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '24px 50px', marginTop: 64 }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          <Calendar dateCellRender={this.dateCellRender}/>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2016 Created by Ant UED
      </Footer>
    </Layout>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
