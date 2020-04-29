import React, {useEffect} from "react"
import ReactMarkdown from "react-markdown"
import hljs from "highlight.js"

const Exhibitdocument = (props) => {


    
    useEffect(()=>{
        document.getElementById("doc-preview").querySelectorAll("pre code").forEach(block => {
          hljs.highlightBlock(block);
        });
      },[props.md])
  
      function flatten(text, child) {
        return typeof child === 'string'
          ? text + child
          : React.Children.toArray(child.props.children).reduce(flatten, text)
      }
      
      function HeadingRenderer(props) {
        let children = React.Children.toArray(props.children)
        let text = children.reduce(flatten, '')
        let slug = text.toLowerCase().replace(/[!"#$%&'()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\W/g, '-')
        return React.createElement('h' + props.level, {id: slug}, props.children)
      }
    
    return(
    <div id="doc-preview">
        <ReactMarkdown source={props.md} renderers={{heading: HeadingRenderer}}/>
    </div>
)}

export default Exhibitdocument