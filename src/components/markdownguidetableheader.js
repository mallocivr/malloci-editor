import React from "react"

import { Table } from 'antd';

const columns = [
    {
      title: 'Markdown',
      className: 'markdown',
      dataIndex: 'markdown',
    },
    {
      title: 'Rendered',
      className: 'rendered',
      dataIndex: 'rendered',
    },
  ];
  

const markdownguidetableheader = () => (
    <Table id="panelstyle"
      columns={columns}
      bordered
      pagination={false}
    // title={() => 'Header'}
    // footer={() => 'Footer'}
  />
);

export default markdownguidetableheader