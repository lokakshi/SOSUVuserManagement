
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Modal } from 'antd';
import { Form, Input, Button, Upload, Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import fire from '../../fire';
import './AdminDashboard.css'


const AdminDashboard = () => {
  const [visible, setVisible] = useState(false);
  const [users, setUsers] = useState([]);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchData = async () => {
      const db = fire.database();
      const data = await db.ref('users').once('value');
      setUsers(data.val());
    };
    fetchData();
  }, []);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = async () => {
    const values = await form.validateFields();
    const db = fire.database();
    // await db.ref('users').push(values);
    await db.ref('users').push(values).catch(error => {
      console.log(error);
    });
    form.resetFields();
    setVisible(false);
    const data = await db.ref('users').once('value');
    setUsers(data.val());
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Employee ID',
      dataIndex: 'employeeId',
    },
    {
      title: 'Client Name',
      dataIndex: 'clientName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Profile Photo',
      dataIndex: 'profilePhoto',
      render: (text, record) => (
        <img src={record.profilePhoto} alt={record.name} width="100" />
      ),
    },
  ];

  return (
    <>
  
      
      <Button type="primary" onClick={showModal} className='btn-create-user'>
        <PlusOutlined /> Create User
      </Button>
     
     
      <Modal
        title="Create User"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        
      >
        <Form form={form} className='user-form'>
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Employee ID"
            name="employeeId"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Client Name"
            name="clientName"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ type: 'email', required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Profile Photo" name="profilePhoto">
          <Upload>
          <Button>Upload</Button>
          </Upload>
          </Form.Item>
          </Form>
          </Modal>
        
          <Table columns={columns} dataSource={users} className='user-table'/>
          
          
          </>

          
          );
          };
          
export default AdminDashboard;
