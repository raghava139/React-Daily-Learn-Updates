import { Button, Form, Input, Select } from 'antd';
import React from 'react';
const {Option} = Select;

const AntDForm = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('finish', values)
    }
    const onFinishFailed = (values) => {
        console.log('OnFails', values)
    }
    return (
        <>
            <h1>Antd Form</h1>
            <Form
                name="basic"
                style={{
                    maxWidth: 600,
                }}
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item name='Username' label='username' rules={[{ required: true, message: 'Please Enter Username !' }]}>
                    <Input/>
                </Form.Item>

                <Form.Item name='Password' label='Password' rules={[{ required: true, message: 'Please Enter Password !' }]}>
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Dropdown"
                    name="dropdown"
                    rules={[{ required: true, message: 'Please select an option!' }]}
                    >
                    {/* <Select status='error'> */}
                    <Select status='error'>
                        <Option value="option1">Option 1</Option>
                        <Option value="option2">Option 2</Option>
                        <Option value="option3">Option 3</Option>
                    </Select>
                    </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}
export default AntDForm;