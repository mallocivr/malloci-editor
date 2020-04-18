import React from "react"

import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const props = {
    name: 'file',
    action: 'https://www.google.com',
    headers: {
      authorization: 'authorization-text',
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
    },
    // previewFile(file) {
    //     console.log('Your upload file:', file);
    //     // Your process logic. Here we just mock to the same file
    //     return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
    //       method: 'POST',
    //       body: file,
    //     })
    //       .then(res => res.json())
    //       .then(({ thumbnail }) => thumbnail);
    //   },
  };
  
const ImageFiles = () => (
    <Upload {...props}>
      <Button>
        <UploadOutlined /> Upload
      </Button>
    </Upload>
  )

export default ImageFiles
