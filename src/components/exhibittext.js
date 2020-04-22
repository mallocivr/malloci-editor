import React from "react"

import { Tabs } from 'antd';
import { Input } from 'antd';
import MarkdownGuide from "./markdownguide";

const { TextArea } = Input;

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const exhibittext = () => (
    <div className="card-container">
        <Tabs onChange={callback} type="card">
            <TabPane  tab="Markdown" key="1">
                <MarkdownGuide />

                <TextArea id="editor" placeholder="Markdown content to generate the VR exhibit goes here."></TextArea>
            </TabPane>
    </Tabs>
    </div>
)

export default exhibittext  