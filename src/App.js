import React, { useState } from 'react';
import Header from './components/Header';
import ProductForm from './components/ProductForm';
import OrderInfo from './components/OrderInfo';
import './App.css';

const App = () => {
  const [order, setOrder] = useState({ product: '', price: 0, quantity: 0 });

  return (
    <div className="App">
      <Header />
      <ProductForm onOrderChange={setOrder} />
      <OrderInfo order={order} />
    </div>
  );
};

export default App;
