import React, { useState, useEffect } from "react"

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

const styles = { display: "none" };


function ExhibitText(props) {
    const [value, setValue] = useState(props.value);
    const handleChange = (event) => {
        setValue(event);
    };

    useEffect(function () {
        setValue(props.value)
    }, [props.value])

    return (
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


    )
};

export default ExhibitText