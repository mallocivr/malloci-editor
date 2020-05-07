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
      markdown: '# Museum Title\n## Section Title\n### Subsection Title\n...',
      rendered: 'Create rooms in your museum.',
    },
    {
      key: '3',
      markdown: '$[walls](img.jpg) \n$[ceiling](img.jpg) \n$[floor](img.jpg)',
      rendered: 'set the textures of the walls, floor, or the ceiling'
    }
  ];

const markdownguidetablerooms = () => (
  <div>
    <Table id="panelstyle"
    // showHeader={false}
      columns={columns}
      dataSource={data1}
      bordered
      pagination={false}
    // title={() => 'Header'}
    // footer={() => 'Footer'}
  />
  <p id="panelstyle">While uploading and using image textures for the walls, ceiling and floor, it is recommended that you crop your textures so that the dimensions are powers of 2 for performance reasons.</p>
  </div>
);

export default markdownguidetablerooms