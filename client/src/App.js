import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './components/Home';
import HomeManagement from './components/HomeManagement';
import KidsFoodMenu from './components/KidsFoodMenu';
import KidsNutritionChart from './components/KidsNutritionChart';
import About from './components/About';
import Contact from './components/Contact';
import FamilyContacts from './components/FamilyContacts';
import './App.css'; // Import the CSS file

const quotes = [
  "A place for everything, everything in its place.",
  "Home is where the heart is.",
  "Family is not an important thing, it's everything.",
  "The love of a family is life's greatest blessing.",
  "Home is the starting place of love, hope, and dreams.",
  "Family: where life begins and love never ends.",
  "The best thing to hold onto in life is each other.",
  "Together is our favorite place to be.",
  "Family is the heart of a home.",
  "Home is not a place, it's a feeling."
];

const getDailyQuote = () => {
  const date = new Date();
  const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  return quotes[dayOfYear % quotes.length];
};

const App = () => {
  const dailyQuote = getDailyQuote();

  return (
    <Router>
      <div>
        <header className="header">
          <div className="header-content">
            <div className="header-text">
              <h1>Our Family Hub</h1>
              <p className="quote">{dailyQuote}</p>
              <nav className="nav-tabs">
                <Link to="/" className="nav-tab">Home</Link>
                <Link to="/about" className="nav-tab">About</Link>
                <Link to="/contact" className="nav-tab">Contact</Link>
              </nav>
            </div>
          </div>
        </header>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home-management" element={<HomeManagement />} />
            <Route path="/kids-food-menu" element={<KidsFoodMenu />} />
            <Route path="/kids-nutrition-chart" element={<KidsNutritionChart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/family-contacts" element={<FamilyContacts />} />
            <Route path="*" element={<Navigate to="/" />} /> {/* Redirect to home page on refresh */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;