import React from 'react';

const Task = ({ task }) => {
  return (
    <li>
      <h2>{task.name}</h2>
      <p>{task.description}</p>
    </li>
  );
};

export default Task;