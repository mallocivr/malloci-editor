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
      key: '2',
      markdown: '![caption text](img.jpg)',
      rendered: '​The image will be framed and hung on the wall in the exhibit',
    },
    {
      key: '3',
      markdown: '> Block quote\n\n> Multi line\n> block quote',
      rendered: '​This text will become a descriptive panel, adding context to your exhibit',
    },
    {
      key: '4',
      markdown: '```\n// This code will be rendered\n// as text art\nvar s = "JavaScript syntax highlighting" \n alert(s);\n```',
      rendered: <code>// This code will be rendered<br/>// as text art<br/>var s = "JavaScript syntax highlighting"<br />alert(s)</code>,
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
  </div>
);

export default markdownguidetablerooms