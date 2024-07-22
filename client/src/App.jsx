
import './App.css'
import Admin from './pages/Admin/Admin';
import Home from './pages/home/Home'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from './components/Users/Users';
import AdminSidebar from './components/AdminSidebar/AdminSidebar';
import PostsAdmin from './components/PostsAdmin/PostsAdmin';
import UpdateUser from './pages/Update/UpdateUser';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/update/:id" element={<UpdateUser />} />
        <Route path='/admin/users' element={<Users/>}/>
        <Route path='/admin/posts' element={<PostsAdmin/>}/>
        <Route path='/admin/' element={<AdminSidebar/>}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
        
    </BrowserRouter>
    
  )
}

export default App
