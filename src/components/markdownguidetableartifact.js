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
      markdown: '![caption text](path/to/file.jpg)',
      rendered: '​This image will become a painting on the wall in the VR museum',
    },
    {
      key: '2',
      markdown: '~ \n![caption text](path/to/file.jpg) \n~',
      rendered: 'This image will be visible in the VR museum, but not in the document view',
    },
    {
      key: '3',
      markdown: '![this image has audio attached](path/to/file.jpg) \n^(audio-file.m4a)',
      rendered: 'This audio file will be placed in the VR exhibit and the document, attached to the image or blockquote on the line above it'
    },
    {
      key: '4',
      markdown: '> Block quote',
      rendered: '​This text will become a painting on the wall',
    },
    {
        key: '5',
        markdown: '> Multi line\n> block quote',
        rendered: '​This text will become a painting on the wall',
      },
    {
      key: '6',
      markdown: '```var s = "JavaScript syntax highlighting" \n alert(s);```',
      rendered: <code>var s = "JavaScript syntax highlighting" <br /> alert(s)</code>,
    },
  ];

const markdownguidetableartifact = () => (
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

export default markdownguidetableartifact