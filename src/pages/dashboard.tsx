import { useState, useEffect } from 'react';
import { Button, Card, Form } from 'antd';
import { Observer } from 'mobx-react-lite';
const Dashboard = () => {
  useEffect(() => {}, []);
  return (
    <Observer>
      {() => (
        <Card>
          <Button
            type="primary"
            htmlType="submit"
            className="signin-form-button"
          >
            修改
          </Button>
        </Card>
      )}
    </Observer>
  );
};

export default Dashboard;
