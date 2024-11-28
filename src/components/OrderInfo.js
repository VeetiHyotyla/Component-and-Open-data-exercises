import React from 'react';

const OrderInfo = ({ order }) => {
  return (
    <div className="order-info">
      <h2>Order Information</h2>
      {order.quantity > 0 && (
        <ul>
          <li>
            {order.product}: €{order.price} x {order.quantity} = €{order.price}
          </li>
        </ul>
      )}
      <p>Total Price: €{order.price}</p>
    </div>
  );
};

export default OrderInfo;
