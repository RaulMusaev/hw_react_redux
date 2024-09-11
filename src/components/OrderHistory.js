import React from 'react';

const OrderHistory = () => {
  const orders = [
    { id: '001', product: 'Ноутбук', date: '2024-08-10', status: 'Доставлен' },
    { id: '002', product: 'Смартфон', date: '2024-08-15', status: 'В пути' },
    { id: '003', product: 'Наушники', date: '2024-08-20', status: 'Ожидает доставки' }
  ];

  return (
    <div className="order-history">
      <h2>История заказов</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <strong>Заказ №{order.id}</strong>: {order.product} - {order.date} - <span className={`status ${order.status.replace(/\s+/g, '-').toLowerCase()}`}>{order.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;