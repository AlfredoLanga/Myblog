import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import loginFetch from '../../assets/axios/config';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

function  PostsAdmin() {
  const handleDelete = async (id) => {
    try {
      await loginFetch.delete(`/post/post${id}`);
      setposts(posts.filter(post => post.id !== id));
    } catch (e) {
      console.error('Erro ao deletar usuário:', e);
      setError('Erro ao deletar usuário. Por favor, tente novamente.');
    }
  };

  const [posts, setposts] = useState([]);
  const [error, setError] = useState(null);

  const getposts = async () => {
    try {
      const response = await loginFetch.get('/post/index');
      const data = response.data;
      setposts(data);
    } catch (e) {
      console.error('Erro ao buscar usuários:', e);
      setError('Erro ao buscar usuários. Por favor, tente novamente mais tarde.');
    }
  };

  useEffect(() => {
    getposts();
  }, []);

  return (
    <div className="flex mt-4">
      <AdminSidebar />
      <div className="flex-1 p-4  mt-10">
        <h1 className="text-2xl font-bold mb-4 text-slate-950">Posts</h1>
        <button  className='py-2 mb-2 px-4 border-b rounded bg-blue-800'> <Link to={'/'}>Adicionar Postagem</Link></button>
       
        {error && <div className="bg-red-500 text-white p-2 mb-4">{error}</div>}
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-blue-800">Id</th>
              <th className="py-2 px-4 border-b text-blue-800">Title</th>
              <th className="py-2 px-4 border-b text-blue-800">Content</th>
              <th className="py-2 px-4 border-b text-blue-800">postID</th>
              <th className="py-2 px-4 border-b text-blue-800">Ação</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b text-zinc-950 text-center">{post.id}</td>
                <td className="py-2 px-4 border-b text-zinc-950 text-center">{post.title}</td>
                <td className="py-2 px-4 border-b text-zinc-950 text-center">{post.content}</td>
                <td className="py-2 px-4 border-b text-zinc-950 text-center">{post.post_id}</td>

                <td className="py-2 px-4 border-b text-zinc-950  text-center space-x-2">
                  <button
                    className="bg-red-500 text-white py-1 px-3 rounded"
                    onClick={() => handleDelete(post.id)}
                  >
                    Deletar
                  </button>
                  <Link
                    to={`/update ${post.id}`}
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

export default  PostsAdmin;

