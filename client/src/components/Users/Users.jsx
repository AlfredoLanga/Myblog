import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import loginFetch from '../../assets/axios/config';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

function Users() {
  const handleDelete = async (id) => {
    try {
      await loginFetch.delete(`/user/user${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (e) {
      console.error('Erro ao deletar usuário:', e);
      setError('Erro ao deletar usuário. Por favor, tente novamente.');
    }
  };

  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const getUsers = async () => {
    try {
      const response = await loginFetch.get('/user/index');
      const data = response.data;
      setUsers(data);
    } catch (e) {
      console.error('Erro ao buscar usuários:', e);
      setError('Erro ao buscar usuários. Por favor, tente novamente mais tarde.');
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="flex mt-4">
      <AdminSidebar />
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Usuários</h1>
        {error && <div className="bg-red-500 text-white p-2 mb-4">{error}</div>}
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-blue-800">Id</th>
              <th className="py-2 px-4 border-b text-blue-800">Nome</th>
              <th className="py-2 px-4 border-b text-blue-800">Email</th>
              <th className="py-2 px-4 border-b text-blue-800">Ação</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b text-zinc-950">{user.id}</td>
                <td className="py-2 px-4 border-b text-zinc-950">{user.name}</td>
                <td className="py-2 px-4 border-b text-zinc-950">{user.email}</td>
                <td className="py-2 px-4 border-b text-zinc-950 space-x-2">
                  <button
                    className="bg-red-500 text-white py-1 px-3 rounded"
                    onClick={() => handleDelete(user.id)}
                  >
                    Deletar
                  </button>
                  <Link
                    to={`/update/ ${user.id}`}
                    className="bg-blue-500 text-white py-1 px-3 rounded"
                  >
                    Editar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
