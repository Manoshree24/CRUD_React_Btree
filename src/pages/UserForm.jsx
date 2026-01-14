import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const UserForm = ({ addUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '', department: '', email: '', mobile: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(formData);
    alert("Submitted successfully");
    navigate('/table');
  };

  return (
    <div>
      <h2>User Registration Form</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px' }}>
        <input type="text" placeholder="Name" required onChange={(e) => setFormData({...formData, name: e.target.value})} />
        <input type="text" placeholder="Department" required onChange={(e) => setFormData({...formData, department: e.target.value})} />
        <input type="email" placeholder="Email" required onChange={(e) => setFormData({...formData, email: e.target.value})} />
        <input type="number" placeholder="Mobile Number" required onChange={(e) => setFormData({...formData, mobile: e.target.value})} />
        
        <button type="submit" style={{ backgroundColor: 'green', color: 'white' }}>Submit</button>
        <Link to="/table"><button type="button" style={{ width: '100%' }}>Data Table</button></Link>
      </form>
    </div>
  );
};

export default UserForm;