import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import UserProfile from './components/UserProfile';
import EditUserForm from './components/EditUserForm';
import ContactList from './components/ContactList';
import OrderHistory from './components/OrderHistory';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <nav className="navbar">
            <Link to="/">Главная</Link>
            <Link to="/edit">Редактировать профиль</Link>
            <Link to="/contacts">Контакты</Link>
            <Link to="/orders">История заказов</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/edit" element={<EditUserForm />} />
            <Route path="/contacts" element={<ContactList />} />
            <Route path="/orders" element={<OrderHistory />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Главная страница</h1>
      <UserProfile />
    </div>
  );
};

export default App;
