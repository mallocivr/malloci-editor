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
  
  const data1 = [
    {
      key: '1',
      markdown: '> Block quote',
      rendered: '​This text will become a painting on the wall',
    },
    {
        key: '2',
        markdown: '> Multi line\n> block quote',
        rendered: '​This text will become a painting on the wall',
      },
  ];

const markdownguidetableblock = () => (
    <Table id="panelstyle"
    // showHeader={false}
      columns={columns}
      dataSource={data1}
      bordered
      pagination={false}
    // title={() => 'Header'}
    // footer={() => 'Footer'}
  />
);

export default markdownguidetableblock