import React from "react"
import {storage} from "../firebase/firebase"

import FileDict from '../firebase/FileDictionary'

import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const audioFileTypes = ['m4a', 'mp3', 'wav']

const props = {
    name: 'file',
    multiple: true,
    customRequest({
      data,
      file,
      onError,
      onProgress,
      onSuccess,
    }) {
      let uploadTask = null
      if(audioFileTypes.includes(file.name.split('.').pop()))
      {
        uploadTask = storage.ref(`/audio/${file.name}`).put(file)
      }
      else
      {
        uploadTask = storage.ref(`/images/${file.name}`).put(file)

      }

      uploadTask.on('state_changed', 
      (snapShot) => {
        //takes a snap shot of the process as it is happening
        console.log(snapShot)
      }, (err) => {
        //catches the errors
        console.log(err)
        onError(err, file)
      }, (resp) => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        if(audioFileTypes.includes(file.name.split('.').pop()))
        {
          storage.ref('audio').child(file.name).getDownloadURL()
            .then(fireBaseUrl => {
              FileDict[file.name] = fireBaseUrl
            })
        }
        else
        {
          storage.ref('images').child(file.name).getDownloadURL()
            .then(fireBaseUrl => {
              FileDict[file.name] = fireBaseUrl
            })
        }
        
        onSuccess(resp, file);
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
