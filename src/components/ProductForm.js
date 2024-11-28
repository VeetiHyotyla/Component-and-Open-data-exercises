import React, { useState } from 'react';

const ProductForm = ({ onOrderChange }) => {
  const [selectedProduct, setSelectedProduct] = useState('CPU');
  const [quantity, setQuantity] = useState(0);

  const handleChange = (e) => {
    setSelectedProduct(e.target.value);
  };

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity - 1);

  const products = ['CPU', 'GPU', 'RAM', 'Motherboard', 'Power Supply'];
  const prices = [250, 500, 150, 200, 100];

  const handleOrderChange = () => {
    const price = prices[products.indexOf(selectedProduct)] * quantity;
    onOrderChange({ product: selectedProduct, price, quantity });
  };

  return (
    <div className="product-form">
      <label>
        Product:
        <select value={selectedProduct} onChange={handleChange}>
          {products.map((product, index) => (
            <option key={index} value={product}>
              {product}
            </option>
          ))}
        </select>
      </label>

      <div className="quantity">
        <button type="button" onClick={decreaseQuantity}>
          -
        </button>
        <span>{quantity}</span>
        <button type="button" onClick={increaseQuantity}>
          +
        </button>
      </div>

      <button onClick={handleOrderChange}>Update Order</button>
    </div>
  );
};

export default ProductForm;
