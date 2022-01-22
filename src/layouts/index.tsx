import { UserOutlined } from '@ant-design/icons';
import { Layout, Dropdown, Menu, Divider, Avatar, Button, Space } from 'antd';
import { Header, Content, Footer } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import PageSideMenu from './sideMenu';
import Store from '../utils/Store';
import { ReactChild, ReactFragment, ReactPortal, useState } from 'react';
import './styles.less';
import { Link } from 'umi';
const PageLayout = (props: {
  children: boolean | ReactChild | ReactFragment | ReactPortal;
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const handleMenuClick = ({ key }: any) => {
    if (key === 'logout') {
      //   CommonStore.logout();
    }
  };
  return (
    <Layout>
      <Sider
        theme="light"
        trigger={null}
        collapsible
        width={200}
        collapsed={collapsed}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="layout-logo">
          <h1>短链接</h1>
        </div>
        <PageSideMenu />
      </Sider>
      <Layout>
        <Header className="layout-header">
          <div className="layout-header-right">
            <Dropdown
              overlay={
                <Space>
                  <Button type="link">我的套餐</Button>
                  <Button type="link">已创建短链</Button>
                  <Button type="link">累计可创建上限</Button>
                  <Button type="link">短链累计访问上限</Button>
                </Space>
              }
            >
              <span className="member">普通会员</span>
            </Dropdown>
            <Divider type="vertical" />
            <Dropdown
              overlay={
                <Menu
                  className="user-menu"
                  selectedKeys={[]}
                  onClick={handleMenuClick}
                >
                  <Menu.Item key="account">
                    <Link to="/account">账号设置</Link>
                  </Menu.Item>
                  <Menu.Item key="myOrder">
                    <Link to="/myOrder">我的订单</Link>
                  </Menu.Item>
                  <Menu.Item key="invoiceManage">
                    <Link to="/invoiceManage">发票管理</Link>
                  </Menu.Item>
                  <Menu.Item key="homePage">
                    <Link to="/homePage">网站首页</Link>
                  </Menu.Item>
                  <Menu.Item key="logout">退出登录</Menu.Item>
                </Menu>
              }
            >
              <Avatar shape="circle" size={60} icon={<UserOutlined />} />
            </Dropdown>
          </div>
        </Header>
        <Content className="layout-content">{props.children}</Content>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
