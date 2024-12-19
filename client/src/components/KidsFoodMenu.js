import React, { useEffect, useState } from 'react';
import axios from 'axios';

const KidsFoodMenu = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get('/api/foods');
        setFoods(response.data);
      } catch (error) {
        console.error('Error fetching foods:', error);
      }
    };

    fetchFoods();
  }, []);

  return (
    <div>
      <h1>Kids Food Menu</h1>
      <ul>
        {foods.map(food => (
          <li key={food.id}>
            <h2>{food.name}</h2>
            <p>{food.description}</p>
            <p>Nutritional Facts: {food.nutritionalFacts}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KidsFoodMenu;