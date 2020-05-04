import React from "react"
import {storage} from "../firebase/firebase"

import FileDict from '../firebase/FileDictionary'

import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const props = {
    name: 'file',
    multiple: true,
    customRequest(data) {
      const uploadTask = storage.ref(`/images/${data.file.name}`).put(data.file)

      uploadTask.on('state_changed', 
      (snapShot) => {
        //takes a snap shot of the process as it is happening
        console.log(snapShot)
      }, (err) => {
        //catches the errors
        console.log(err)
      }, () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage.ref('images').child(data.file.name).getDownloadURL()
        .then(fireBaseUrl => {
          FileDict[data.file.name] = fireBaseUrl
        })
      })
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
  
const ImageFiles = () => {

  return(
    <Upload {...props}>
      <Button>
        <UploadOutlined /> Upload
      </Button>
    </Upload>
  )}

export default ImageFiles
