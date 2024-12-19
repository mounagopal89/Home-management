import React, { useState } from 'react';


const KidsNutritionChart = () => {
  const [nutritionItems, setNutritionItems] = useState([
    {
      category: 'Vegetables',
      dailyPortion: '1–1.5 cups (ages 4–8); 2–3 cups (ages 9–12)',
      examples: 'Carrots, spinach, broccoli, sweet potatoes, bell peppers',
      tips: 'Include colorful vegetables at every meal. Opt for steamed, roasted, or raw with dips like hummus.'
    },
    {
      category: 'Fruits',
      dailyPortion: '1–1.5 cups (ages 4–8); 1.5–2 cups (ages 9–12)',
      examples: 'Apples, bananas, oranges, berries, mangoes',
      tips: 'Offer whole fruits instead of juices to boost fiber intake. Make fruit snacks fun with fruit kabobs or smoothies.'
    },
    // Add other initial items here...
  ]);

  const [newItem, setNewItem] = useState({
    category: '',
    dailyPortion: '',
    examples: '',
    tips: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNutritionItems([...nutritionItems, newItem]);
    setNewItem({ category: '', dailyPortion: '', examples: '', tips: '' });
  };

  return (
    <div>
      <h1>Kids Nutrition Chart</h1>
      <ul>
        {nutritionItems.map((item, index) => (
          <li key={index}>
            <h2>{item.category}</h2>
            <p><strong>Daily Portion:</strong> {item.dailyPortion}</p>
            <p><strong>Examples:</strong> {item.examples}</p>
            <p><strong>Tips:</strong> {item.tips}</p>
          </li>
        ))}
      </ul>
      <h2>Add New Nutrition Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Category:</label>
          <input type="text" name="category" value={newItem.category} onChange={handleChange} required />
        </div>
        <div>
          <label>Daily Portion:</label>
          <input type="text" name="dailyPortion" value={newItem.dailyPortion} onChange={handleChange} required />
        </div>
        <div>
          <label>Examples:</label>
          <input type="text" name="examples" value={newItem.examples} onChange={handleChange} required />
        </div>
        <div>
          <label>Tips:</label>
          <input type="text" name="tips" value={newItem.tips} onChange={handleChange} required />
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default KidsNutritionChart;