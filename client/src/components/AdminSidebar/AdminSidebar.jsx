import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../redux/reducers/UserSlice'
import loginFecth from '../../assets/axios/config'
import Users from '../Users/Users'

function AdminSidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogout = async () => {
    const response = await loginFecth.get('/user/logout')
    dispatch(logout())
    if (response) {
      console.log(response)
      navigate('/login');
    }
  }

  const { name } = useSelector((state) => state.user.user)

  return (
    <div className="flex h-screen bg-gray-800 text-white">
      <nav className="flex  items-center justify-between p-3 bg-gray-900">
        <h1 className="text-2xl font-bold">LOGO</h1>
        <ul className="flex items-center space-x-4">
          <li>{name}</li>
        </ul>
      </nav>
      
      <div className="flex flex-col gap-y-6 mt-14 basis-40 p-4 space-y-4 bg-gray-900">
        <span className="text-xl  ">
          <Link to={'/'} className="hover:underline">Home</Link>
        </span>
        <span className="text-xl">
          <Link to={'/admin/users'} className="hover:underline">Users</Link>
        </span>
        <span className="text-xl">
          <Link to={'/admin/posts'} className="hover:underline">Posts</Link>
        </span>
        <span className="text-xl">
          <Link to={'/admin/comments'} className="hover:underline">Comments</Link>
        </span>
        <span className="text-xl">
          <Link onClick={handleLogout} className="hover:underline">Logout</Link>
        </span>
      </div>
   
     
    </div>
  )
}

export default AdminSidebar
