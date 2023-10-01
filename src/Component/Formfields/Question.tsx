import { Button, Form, Input } from 'antd';
import React from 'react'



export const Question = () => {

  return (
    <div >
      <Form
        name="exampleForm"
        initialValues={{ remember: true }}
      >
        {/* Add your form fields here */}
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button">
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
