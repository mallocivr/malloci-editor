import React from "react"

import { Collapse } from 'antd';
import MarkdownGuideTableRooms from './markdownguidetablerooms';
import MarkdownGuideTableArtifact from './markdownguidetableartifact';



const { Panel } = Collapse;

const markdownguide = () => (
    <div className="markdown-container">
    <Collapse defaultActiveKey={['']}>
        <Panel header="VR Markdown syntax guide" id="headerstyle" key="1">
            <div className="syntax-guide">
            <p>Basic Syntax:</p>
            <MarkdownGuideTableRooms />
            <p>Extended Syntax:</p>
            <MarkdownGuideTableArtifact />
            </div>
        </Panel>
  </Collapse>
    </div>
);

export default markdownguide  