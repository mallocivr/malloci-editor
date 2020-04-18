import React from "react"

import { Tabs } from 'antd';
import { Input } from 'antd';

const { TextArea } = Input;

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const exhibittext = () => (
    <div className="card-container">
        <Tabs onChange={callback} type="card">
            <TabPane tab="Markdown" key="1">
                <TextArea id="textareaheight" placeholder="Markdown content to generate the VR exhibit goes here."></TextArea>
            </TabPane>
        
    </Tabs>

    </div>
)

export default exhibittext