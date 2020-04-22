import React from "react"

import { Collapse } from 'antd';
import MarkdownGuideTableRooms from './markdownguidetablerooms';
import MarkdownGuideTableArtifact from './markdownguidetableartifact';



const { Panel } = Collapse;

const markdownguide = () => (
    <div className="markdown-container">
    <Collapse defaultActiveKey={['1']}>
        <Panel header="Extended Markdown syntax guide" id="headerstyle" key="1">
            Creating and formatting rooms in the museum:
            <MarkdownGuideTableRooms />
            Populating the room with artifacts:
            <MarkdownGuideTableArtifact />
            {/* Populating the room with word art using <code>></code>:
            <MarkdownGuideTableBlock />
            Adding code blocks using <code>```</code>:
            <MarkdownGuideTableCode /> */}
        </Panel>
  </Collapse>
    </div>
);

export default markdownguide  