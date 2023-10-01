import React from 'react'
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload, Card } from 'antd';
import CardTitle from './CardTitle';

const { Dragger } = Upload;

const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
};

export const Image = () => {
  return (
    <div>
        <Card title={[<CardTitle title='Upload cover image'/>]} bordered={false}
            style={{width: 600, backgroundColor: 'rgba(255, 255, 255, 0.0)', marginBottom: '50px'}}
            headStyle={{backgroundColor: '#D0F7FA'}}
        >
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <UploadOutlined />
                </p>
                <p className="ant-upload-text">Upload cover image</p>
                <p className="ant-upload-hint">
                    16:9 ratio is recommended. Max image size 1mb
                </p>
            </Dragger>
        </Card>
    </div>
  )
}
