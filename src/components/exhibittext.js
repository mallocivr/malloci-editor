import React, { useState } from "react"

import { Tabs } from 'antd';
import { Input } from 'antd';
import MarkdownGuide from "./markdownguide";
import SimpleMDEReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const { TextArea } = Input;

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const styles = {display: "none"};


function ExhibitText() {
    const [value, setValue] = useState("# Hello world! \n\n> Welcome to the world! \n\n## Hello continent \n\nThis is a starter exhibit. Hit build to view it in VR. The name of the museum is Hello world!. There is one room, Hello Continent. There's some wall art about baby elephants and a picture of a baby elephant in a bucket. \n\n> Baby elephants are endangered \n\n![baby elephants are endangered!](https://i.imgur.com/SnolApK.jpg)");
    const handleChange = (event) => {        
        setValue(event);
    };

    return (
        <div className="card-container">
            <Tabs onChange={callback} type="card">
                <TabPane tab="Markdown" key="1">
                    {/* <p className="description">
                        Create your exhibit in this panel; there's a guide detailing the markdown syntax you should use below. There are basic basic buttons to help you with the markdown syntax. You can click on the H icon to add a header, the link icon to link images, the blockquote icon to add a quote, and so on. In the event that you're using images from the internet in your exhibit via links, make sure that you're using images which are marked for reuse (they'll be blocked by your browser and won't show up, otherwise).
                </p> */}
                <div id="editorheight">
                    <MarkdownGuide />
                    <SimpleMDEReact
                        id="editor3"
                        label="Markdown Editor"
                        value={value}
                        // onChange={event => handleChange(textValue, event.target.value)}
                        // onChange = {e => setValue(e.target.value)}
                        onChange={handleChange}
                        options={{
                            insertTexts: {
                                horizontalRule: ["", "\n\n-----\n\n"],
                                image: ["\n\n![a caption describing your image](image-name", ".jpg)\n\n"],
                                link: ["[", "](http://)"],
                                table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
                            },
                        }}
                    />
                    <TextArea id="editor"
                        value={value}
                        style={styles}>
                    </TextArea>
                    </div>
                </TabPane>
            </Tabs>
        </div>

    )
};

export default ExhibitText