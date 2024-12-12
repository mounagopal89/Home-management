import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Task from './Task';

const TaskManagement = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('/api/tasks');
                setTasks(response.data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasks();
    }, []);

    return (
        <div>
            <h1>Task Management</h1>
            <ul>
                {tasks.map(task => (
                    <Task key={task.id} task={task} />
                ))}
            </ul>
        </div>
    );
};

export default TaskManagement;


            