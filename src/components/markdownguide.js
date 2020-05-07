import React from "react"

import { Collapse } from 'antd';
import MarkdownGuideTableRooms from './markdownguidetablerooms';
import MarkdownGuideTableArtifact from './markdownguidetableartifact';



const { Panel } = Collapse;

const markdownguide = () => (
    <div className="markdown-container">
    <Collapse defaultActiveKey={['']}>
        <Panel className="syntax-guide" header="Extended Markdown syntax guide" id="headerstyle" key="1">
            <p>Creating and formatting rooms in the museum:</p>
            <MarkdownGuideTableRooms />
            <p>Populating the room with artifacts:</p>
            <MarkdownGuideTableArtifact />
        </Panel>
  </Collapse>
    </div>
);

export default markdownguide  