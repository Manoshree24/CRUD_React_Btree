import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const UserTable = ({ users, deleteUser, updateUser }) => {
  const navigate = useNavigate();
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});

  const handleEditClick = (user) => {
    setEditId(user.id);
    setEditData(user);
  };

  const handleSave = () => {
    updateUser(editData);
    setEditId(null);
  };

  return (
    <div>
      <h2>User Data Table</h2>
      <button onClick={() => navigate('/')} style={{ marginBottom: '10px' }}>+ Add New Record</button>
      
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Serial No</th>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.id}</td>
              <td>
                {editId === user.id ? 
                  <input value={editData.name} onChange={e => setEditData({...editData, name: e.target.value})} /> 
                  : user.name}
              </td>
              <td>
                {editId === user.id ? 
                  <input value={editData.department} onChange={e => setEditData({...editData, department: e.target.value})} /> 
                  : user.department}
              </td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>
                {editId === user.id ? (
                  <button onClick={handleSave}>Save</button>
                ) : (
                  <>
                    <button onClick={() => handleEditClick(user)}>Edit</button>
                    <button onClick={() => deleteUser(user.id)} style={{ color: 'red' }}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => navigate('/')}>Register (Back to Form)</button>
      </div>
    </div>
  );
};

export default UserTable;