import { Link } from 'react-router-dom';
import { history } from 'umi';
import { Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';

const PageSideMenu = () => {
  const handleMenuClick = ({ key }: any) => {
    if (key === '/home') {
      history.push(key);
    }

    // if (key === 'logout') {
    //   CommonStore.logout();
    // }
  };

  const defaultSelectedKey = '/home';
  let themeType: any = 'light';

  return (
    <Menu
      defaultSelectedKeys={[defaultSelectedKey]}
      mode="inline"
      theme={themeType}
      onClick={handleMenuClick}
    >
      <Menu.Item key="/home">
        <Link to="/home">首页</Link>
      </Menu.Item>
      <SubMenu key="shortLink" title="短链接">
        <Menu.Item key="/dashboard">
          <Link to="/dashboard">我的短链</Link>
        </Menu.Item>
        <Menu.Item key="/openApi">
          <Link to="/openApi">开放API接口</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="operation" title="活码">
        <Menu.Item key="/operation/userDetail">
          <Link to="/operation/userDetail">我的活码</Link>
        </Menu.Item>
        <Menu.Item key="/operation/announcement">
          <Link to="/operation/announcement">模板配置</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="management" title="个人中心">
        <Menu.Item key="/management/account">
          <Link to="/management/account">账号设置</Link>
        </Menu.Item>
        <Menu.Item key="/management/permission">
          <Link to="/management/permission">我的订单</Link>
        </Menu.Item>
        <Menu.Item key="/management/log">
          <Link to="/management/log">发票管理</Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default PageSideMenu;
