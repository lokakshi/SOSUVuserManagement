import React, { useState } from 'react';
import './TodoTable.css'
function TodoTable() {
    const [tasks, setTasks] = useState([
        { 
          id: 1, 
          date: '2022-01-01',
          day: 'Monday',
          jiraNumber: 'ABC-123',
          description: 'Work on project XYZ',
          storyPoints: 8,
          expectedCompletionDate: '2022-01-15',
          actualCompletionDate: ''
        },
        { 
            id: 2, 
            date: '2022-01-02',
            day: 'Tuesday',
            jiraNumber: 'DEF-456',
            description: 'Meeting with team',
            storyPoints: 2,
            expectedCompletionDate: '2022-01-02',
            actualCompletionDate: '2022-01-02'
          },
        ]);

        const [editing, setEditing] = useState(false);
        const initialFormState = {
          id: null, 
          date: '',
          day: '',
          jiraNumber: '',
          description: '',
          storyPoints: '',
          expectedCompletionDate: '',
          actualCompletionDate: ''
        };
        const [currentTask, setCurrentTask] = useState(initialFormState);

        const editRow = task => {
            setEditing(true);
            setCurrentTask({ 
              id: task.id, 
              date: task.date,
              day: task.day,
              jiraNumber: task.jiraNumber,
              description: task.description,
              storyPoints: task.storyPoints,
              expectedCompletionDate: task.expectedCompletionDate,
              actualCompletionDate: task.actualCompletionDate
            });
          };    
          const updateTask = (id, updatedTask) => {
            setEditing(false);
            setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
          };
          
          const addTask = task => {
            task.id = tasks.length + 1;
            setTasks([...tasks, task]);
          };
          
          const [newTask, setNewTask] = useState({
            date: '',
            day: '',
            jiraNumber: '',
            description: '',
            storyPoints: '',
            expectedCompletionDate: '',
            actualCompletionDate: ''
          });

  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Day</th>
          <th>Jira #</th>
          <th>Description</th>
          <th>Story Points</th>
          <th>Expected Completion Date</th>
          <th>Actual Completion Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => (
          <tr key={task.id}>
            <td>{task.date}</td>
            <td>{task.day}</td>
            <td>{task.jiraNumber}</td>
            <td>{task.description}</td>
            <td>{task.storyPoints}</td>
            <td>{task.expectedCompletionDate}</td>
            <td>{task.actualCompletionDate}</td>
            <td>
              <button onClick={() => editRow(task)}>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <h2>Add Task</h2>
      <form onSubmit={e => {
        e.preventDefault();
        addTask(newTask);
        setNewTask({
          date: '',
          day: '',
          jiraNumber: '',
          description: '',
          storyPoints: '',
          expectedCompletionDate: '',
          actualCompletionDate: ''
        });
      }}>
        <label>
          Date:
          <input type="date" name="date" value={newTask.date} onChange={e => setNewTask({ ...newTask, date: e.target.value })} />
        </label>
        <label>
          Day:
          <input type="text" name="day" value={newTask.day} onChange={e => setNewTask({ ...newTask, day: e.target.value })} />
        </label>
        <label>
          Jira #:
          <input type="text" name="jiraNumber" value={newTask.jiraNumber} onChange={e => setNewTask({ ...newTask, jiraNumber: e.target.value })} />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={newTask.description} onChange={e => setNewTask({ ...newTask, description: e.target.value })} />
        </label>
        <label>
          Story Points:
          <input type="number" name="storyPoints" value={newTask.storyPoints} onChange={e => setNewTask({ ...newTask, storyPoints: e.target.value })} />
        </label>
        <label>
          Expected Completion Date:
          <input type="date" name="expectedCompletionDate" value={newTask.expectedCompletionDate} onChange={e => setNewTask({ ...newTask, expectedCompletionDate: e.target.value })} />
        </label>
        <label>
          Actual Completion Date:
        <input type="date" name="actualCompletionDate" value={newTask.actualCompletionDate} onChange={e => setNewTask({ ...newTask, actualCompletionDate: e.target.value })} />
        </label>
        <button type="submit">Add task</button>
        </form>

    {editing && (
      <div>
        <form className='edit-task-form'>
          <label>
            Date:
            <input type="date" name="date" value={currentTask.date} onChange={e => setCurrentTask({ ...currentTask, date: e.target.value })} />
          </label>
          <label>
            Day:
            <input type="text" name="day" value={currentTask.day} onChange={e => setCurrentTask({ ...currentTask, day: e.target.value })} />
          </label>
          <label>
            Jira #:
            <input type="text" name="jiraNumber" value={currentTask.jiraNumber} onChange={e => setCurrentTask({ ...currentTask, jiraNumber: e.target.value })} />
          </label>
          <label>
            Description:
            <input type="text" name="description" value={currentTask.description} onChange={e => setCurrentTask({ ...currentTask, description: e.target.value })} />
          </label>
          <label>
            Story Points:
            <input type="number" name="storyPoints" value={currentTask.storyPoints} onChange={e => setCurrentTask({ ...currentTask, storyPoints: e.target.value })} />
          </label>
          <label>
            Expected Completion Date:
            <input type="date" name="expectedCompletionDate" value={currentTask.expectedCompletionDate} onChange={e => setCurrentTask({ ...currentTask, expectedCompletionDate: e.target.value })} />
          </label>
          <label>
            Actual Completion Date:
            <input type="date" name="actualCompletionDate" value={currentTask.actualCompletionDate} onChange={e => setCurrentTask({ ...currentTask, actualCompletionDate: e.target.value })} />
          </label>

            <button onClick={e => {
              e.preventDefault();
              updateTask(currentTask.id, currentTask);
            }}>Save</button>
          </form>
          

        </div>
      )}
      
    
    </div>
  );
}

export default TodoTable;
