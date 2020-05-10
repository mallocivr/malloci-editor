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
      markdown: '$[walls](img.jpg) \n$[ceiling](img.jpg) \n$[floor](img.jpg)\n$[frames](img.jpg)\n$[sky](255, 255, 255)',
      rendered: 'set the textures of the walls,\nceiling,\nfloor,\nframes,\nor color of the sky (hex code or rgb).'
    },
    {
      key: '2',
      markdown: '![caption text](img.jpg) \n^[audio](audio-file.m4a)',
      rendered: 'This audio file will be attached to the artifact on the line above it'
    },
    {
      key: '3',
      markdown: '> block quote\n> with cutom frame \n^[frame](img.jpg)',
      rendered: 'This will define a custom frame texture for the artifact on the line above it'
    },
    {
      key: '4',
      markdown: '![caption text](img.jpg) \n^[frame](img.jpg)\n^[audio](audio-file.m4a)',
      rendered: 'An artifact with a custom frame and audio description.'
    },
    {
      key: '5',
      markdown: '~ \n![These artifacts](img.jpg) \n\n> Will be hidden\n> from the article\n> but will be visible\n> in the exhibit!\n~',
      rendered: 'These artifacts will be visible in the VR museum, but not in the document view',
    }
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