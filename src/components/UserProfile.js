import React from 'react';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h1>Профиль пользователя</h1>
      <p>Имя: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Возраст: {user.age}</p>
    </div>
  );
};

export default UserProfile;