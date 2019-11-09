import React, { PureComponent } from 'react';
import { Table, Card } from 'antd';
import styles from './List.less';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
class List extends PureComponent {
  dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];

  columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  render() {
    return (
      <PageHeaderWrapper title="用户列表">
        <Card>
          <Table dataSource={this.dataSource} columns={this.columns} />
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default List;
