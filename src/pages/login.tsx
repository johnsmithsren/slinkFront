import { useHistory } from 'react-router-dom';
import { Input, Button, Form, Divider } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import './index.less';

const LoginPage = () => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.validateFields().then(async (values) => {});
  };
  return (
    <div className="container">
      <div className="content">
        <div className="top">
          <div className="login-header">
            <span className="login-title">短链接</span>
          </div>
        </div>
        <div className="login-page">
          <Form form={form} onFinish={handleSubmit} className="login-form">
            <Form.Item
              label="用户名"
              name="userName"
              rules={[{ required: true, message: '请输入用户名!' }]}
            >
              <Input
                prefix={
                  <UserOutlined
                    className="mail"
                    translate={undefined}
                    onAuxClick={undefined}
                    onAuxClickCapture={undefined}
                  />
                }
                placeholder="用户名"
              />
            </Form.Item>
            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '请输入密码!' }]}
            >
              <Input
                autoComplete="on"
                prefix={
                  <LockOutlined
                    className="mail"
                    translate={undefined}
                    onAuxClick={undefined}
                    onAuxClickCapture={undefined}
                  />
                }
                type="password"
                placeholder="密码"
              />
            </Form.Item>
            <Divider />
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
