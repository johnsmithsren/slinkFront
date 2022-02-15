import { useState, useEffect } from 'react';
import { Button, Card, Form, Space } from 'antd';
import { Observer } from 'mobx-react-lite';
import { CommonTable } from 'platform-base';
import './index.less';
const Dashboard = () => {
  const shortLinkColumn = [
    {
      title: '短链信息',
      dataIndex: 'shortLinkInfo',
      key: 'shortLinkInfo',
    },
    {
      title: '短链接网址',
      dataIndex: 'shortAddress',
      key: 'shortAddress',
    },
    {
      title: '访问次数',
      dataIndex: '',
      key: 'OrderSign',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: '操作',
    },
  ];
  useEffect(() => {}, []);
  return (
    <Observer>
      {() => (
        <>
          <Card>
            <div className="create-dashboard-button">
              <Space>
                <Button shape="round" type="primary" ghost>
                  批量创建
                </Button>
                <Button
                  shape="round"
                  type="primary"
                  htmlType="submit"
                  className="signin-form-button"
                >
                  创建短链
                </Button>
              </Space>
            </div>
          </Card>
          <CommonTable
            data={[]}
            currentPage={1}
            pageTotal={1}
            columns={shortLinkColumn}
            //   tableChangeFunction={handleTableChange}
            rowKey="platformOrderID"
          />
        </>
      )}
    </Observer>
  );
};

export default Dashboard;
