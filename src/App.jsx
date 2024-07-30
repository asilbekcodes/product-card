import React, { useState } from 'react';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './pages/Card';

const App = () => {
  const [card, setCard] = useState([]);
  function addToCard({ item }) {
    setCard([...card, item]);
  }

  return (
    <React.Fragment>
      <Header length={card.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCard={addToCard} />} />
        <Route path="/card" element={<Card card={card}/>} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default App;




