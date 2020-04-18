import React from "react"

import { Tabs } from 'antd';

import ExhibitDocument from "./exhibitdocument"
import Exhibit from "./exhibit"

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const exhibitmaster = () => (
    <div className="card-container">
        <Tabs onChange={callback} type="card">
            <TabPane tab="Exhibit" key="1">
                <ExhibitDocument />
            </TabPane>
    
            <TabPane tab="Document" key="2">
                <Exhibit />
            </TabPane>
        
    </Tabs>
    </div>
)

export default exhibitmaster