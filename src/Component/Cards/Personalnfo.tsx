import React, { useState } from 'react'
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
import { Question } from '../Formfields/Question';


export const Personalnfo = () => {

    const [formBList, setFormBList] = useState([]);

    const handleAddFormB = () => {
        setFormBList([...formBList, {}]); // Add a new empty object to the list
    };

    const handleCancelFormB = (index) => {
        const updatedList = [...formBList];
        updatedList.splice(index, 1); // Remove the FormB at the specified index
        setFormBList(updatedList);
    };

  return (
    <div>
        <Card title={[<CardTitle title='Personal Information'/>]} bordered={false}
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
                
                {formBInstances.map((formB, index) => (
                    <div key={index}>
                        <Question onCancel={() => handleCancel(index)} />
                    </div>
                ))}

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
                        onClick={onButtonClick}
                    >
                        Add another contact
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    </div>
  )
}
