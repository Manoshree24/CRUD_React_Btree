import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserForm from './pages/UserForm';
import UserTable from './pages/UserTable';

function App() {
  // 1. Initialize state by checking LocalStorage first
  const [users, setUsers] = useState(() => {
    const savedData = localStorage.getItem('crud_users');
    return savedData ? JSON.parse(savedData) : [];
  });

  // 2. Automatically save to LocalStorage whenever 'users' state changes
  useEffect(() => {
    localStorage.setItem('crud_users', JSON.stringify(users));
  }, [users]);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now() }]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u));
  };

  return (
    <BrowserRouter>
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <Routes>
          <Route path="/" element={<UserForm addUser={addUser} />} />
          <Route 
            path="/table" 
            element={<UserTable users={users} deleteUser={deleteUser} updateUser={updateUser} />} 
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;