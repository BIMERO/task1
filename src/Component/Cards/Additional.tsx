import React from 'react'
import { Button, Card, Divider } from 'antd'
import { PlusIcon } from '../Icons/Plus'
import CardTitle from './CardTitle'
import { PlusOutlined } from '@ant-design/icons';
import {
    Form,
    Input,
    Radio,
    Switch,
} from 'antd';
import FormLabel from './FormLabel';


export const Additional = () => {
  return (
    <div>
        <Card title={[<CardTitle title='Additional questions'/>]} bordered={false}
            style={{width: 600, backgroundColor: 'rgba(255, 255, 255, 0.0)', marginBottom: '50px'}}
            headStyle={{backgroundColor: '#D0F7FA'}}
        >

            <Form
                labelCol={{ span: 12 }}
                wrapperCol={{ span: 14 }}
                layout="vertical"
            >
                <Form.Item label={[<FormLabel title='First Name'/>]}>
                    <Input />
                </Form.Item>

                <Form.Item label={[<FormLabel title='Last Name'/>]}>
                    <Input />
                </Form.Item>

                <Form.Item label={[<FormLabel title='Email'/>]}>
                    <Input/>
                </Form.Item>

                <Form.Item label={[<FormLabel title='Phone' span='(without dial code)'/>]} style={{display: 'flex', alignItems: 'center'}} labelCol={{ span: 24 }}
                    wrapperCol={{ span: 30 }}> 
                    <div className='flex items-center justify-between'>
                        <Radio value="apple"> Internal </Radio>
                        <div className='flex items-center'>
                            <Switch defaultChecked/> 
                            <p>Hide</p>
                        </div>
                    </div>
                    <Divider/>
                </Form.Item>   
                

                <Form.Item>
                    <Button
                        icon="+"
                        block
                        size="large"
                        style={{
                        display: 'flex',
                        justifyContent: 'left',
                        alignItems: 'center',
                        fontWeight: 700,
                        fontSize: '18px'
                        }}
                    >
                        Add another contact
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    </div>
  )
}
