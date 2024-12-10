import axios from 'axios';

const API_URL = 'http://localhost:3000/tasks';
export const getTasks = async () => {
    const response = await axios.get('http://localhost:3000/tasks');
    return response.data;
    };

export const createTask = async (task) => {
    const response = await axios.post(API_URL, task);
    return response.data;
    };

export const updateTask = async (task) => {
    const response = await axios.put(`${API_URL}/${task.id}`, task);
    return response.data;
    };

export const deleteTask = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
    };  

    