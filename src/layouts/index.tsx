import React from 'react';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

import styles from './index.less';

function BasicLayout(props: any) {
  return (
    <div>
      <Layout>
        <Header>
          <div className={styles.logo}>王者荣耀资料库</div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">英雄</Menu.Item>
            <Menu.Item key="2">局内道具</Menu.Item>
            <Menu.Item key="3">召唤师技能</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Umi 入门</Footer>
      </Layout>
    </div>
  );
}

export default BasicLayout;
