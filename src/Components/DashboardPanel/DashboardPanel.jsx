import React, { useState } from 'react';
import { Table, Input, Button, Space } from 'antd';

const DashboardPanel = () => {
  const [data, setData] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [newData, setNewData] = useState({
    date: '',
    dayOfWeek: '',
    ticketNumber: '',
    description: '',
    storyPoints: '',
    expectedCompletionDate: '',
    actualCompletionDate: '',
  });
  const [editingKey, setEditingKey] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  const isEditing = (record) => record.key === editingKey;

  const edit = (key) => {
    setEditingKey(key);
  };


const save = (key) => {
    const updatedData = data.map((item) => {
        if (item.key === key) {
            return {
                ...item,
                date: newData.date || item.date,
                dayOfWeek: newData.dayOfWeek || item.dayOfWeek,
                ticketNumber: newData.ticketNumber || item.ticketNumber,
                description: newData.description || item.description,
                storyPoints: newData.storyPoints || item.storyPoints,
                expectedCompletionDate: newData.expectedCompletionDate || item.expectedCompletionDate,
                actualCompletionDate: newData.actualCompletionDate || item.actualCompletionDate,
            }
        }
        return item
    });
    setData(updatedData);
    setDataSource(updatedData);
    setEditingKey('');
    setNewData({
        date: '',
        dayOfWeek: '',
        ticketNumber: '',
        description: '',
        storyPoints: '',
        expectedCompletionDate: '',
        actualCompletionDate: '',
    });
};

  const cancel = () => {
    setEditingKey('');
  };

  const handleAdd = () => {
    const newKey = data.length + 1;
    const newRecord = { ...newData, key: newKey };
    setData((prevData) => {
        setDataSource([...prevData, newRecord])
        return [...prevData, newRecord]
    });
    setNewData({
        date: '',
        dayOfWeek: '',
        ticketNumber: '',
        description: '',
        storyPoints: '',
        expectedCompletionDate: '',
        actualCompletionDate: '',
    });
};


  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      editable: true,
    },
    {
      title: 'Day of the week',
      dataIndex: 'dayOfWeek',
      key: 'dayOfWeek',
      editable: true,
    },
    {
      title: 'Jira/Ticket #',
      dataIndex: 'ticketNumber',
      key: 'ticketNumber',
      editable: true,
    },
    {
      title: 'Brief Discription of the Work',
      dataIndex: 'description',
      key: 'description',
      editable: true,
    },
    {
      title: 'Story Points (1SP=1 man hour)',
      dataIndex: 'storyPoints',
      key: 'storyPoints',
      editable: true,
    },
    {
      title: 'Expected Completion Date',
      dataIndex: 'expectedCompletionDate',
      key: 'expectedCompletionDate',
      editable: true,
    },
    {
      title: 'Actual Completion Date',
      dataIndex: 'actualCompletionDate',
      key: 'actualCompletionDate',
      editable: true,
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a onClick={() => save(record.key)}>Save</a>
            <a onClick={() => cancel()}>Cancel</a>
          </span>
        ) : (
          <a onClick={() => edit(record.key)}>Edit</a>
        );
      },
    },
  ];

  const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    return (
      <td {...restProps}>
        {editing ? (
          <Input
            type={inputType}
            name={dataIndex}
            value={record[dataIndex]}
            onChange={handleChange}
          />
        ) : (
          children
        )}
      </td>
    );
  };

  const handleSave = (row) => {
    const newData = [...data];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    setData(newData);
    setDataSource(newData);
    setEditingKey('');
  };

  const components = {
    body: {
      cell: EditableCell,
    },
  };

  const columns2 = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <div>
      <Space style={{ marginBottom: 20 }}>
        <Input
          placeholder="Date"
          name="date"
          type='date'
          value={newData.date}
          onChange={handleChange}
          />
          <Input
            placeholder="Day of the week"
            name="dayOfWeek"
            value={newData.dayOfWeek}
            onChange={handleChange}
          />
          <Input
            placeholder="Jira/Ticket #"
            name="ticketNumber"
            value={newData.ticketNumber}
            onChange={handleChange}
          />
          <Input
            placeholder="Brief Discription of the Work"
            name="description"
            value={newData.description}
            onChange={handleChange}
          />
          <Input
            placeholder="Story Points (1SP=1 man hour)"
            name="storyPoints"
            value={newData.storyPoints}
            onChange={handleChange}
          />
          <Input
            placeholder="Expected Completion Date"
            name="expectedCompletionDate"
            type='date'
            value={newData.expectedCompletionDate}
            onChange={handleChange}
          />
          <Input
            placeholder="Actual Completion Date"
            name="actualCompletionDate"
            type='date'
            value={newData.actualCompletionDate}
            onChange={handleChange}
          />
          <Button onClick={handleAdd} type="primary">
            Add
          </Button>
        </Space>
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns2}
          rowKey={(record) => record.key}
        />
      </div>
    );
  };
  
  export default DashboardPanel;
  

