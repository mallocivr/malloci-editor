import React from "react"

import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const props = {
    name: 'file',
    multiple: true,
    customRequest(data) {
      let reader = new FileReader();      
      reader.readAsBinaryString(data.file);
      reader.onload = function(e) {
          let bits = e.target.result; 

          let src = `${data.file.name}`

          sessionStorage.setItem(src, bits)
      }
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    }
  };
  
const ImageFiles = () => (
    <Upload {...props}>
      <Button>
        <UploadOutlined /> Upload
      </Button>
    </Upload>
  )

export default ImageFiles
