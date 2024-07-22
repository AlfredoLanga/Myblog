import { Link, useNavigate } from "react-router-dom";
import './Navbar.scss';
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import profile from '/images/20201106_225150.jpg';
import loginFetch from '../../assets/axios/config';
import { logout } from "../../redux/reducers/UserSlice";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const response = await loginFetch.get('/user/logout');
    dispatch(logout());
    if (response) {
      console.log(response);
      navigate('/login');
    }
  };

  const { name } = useSelector((state) => state.user.user);
  const { role_id } = useSelector((state) => state.user.user);

  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const [dropMenu, setDropMenu] = useState(false);
  const toggleDropMenu = () => {
    setDropMenu(!dropMenu);
  };

  return (
    <div className="navbar-container">
      <nav>
        <h2>BLOG</h2>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <button>About</button>
        </ul>
        <div className="user" onClick={toggleDropMenu}>
          <img src={profile} alt="Profile" />
          {name ? (
            <span>
              {name}
              <ul className={dropMenu ? 'active' : 'hidden'}>
                <li><Link to="/profile">Profile</Link></li>
                <li onClick={handleLogout}>Logout</li>
                {role_id === 1 && <li><Link to="/admin">Admin</Link></li>}
              </ul>
            </span>
          ) : (
            <li style={{ listStyle: 'none' }}>
              <Link to="/login" style={{ textDecoration: 'none', fontSize: '20px', fontWeight: '500' }}>Login</Link>
            </li>
          )}
        </div>
        <button className="menu-btn" onClick={toggleMenu}>
          {openMenu ? "x" : '/'}
        </button>
      </nav>
      <div className={`${openMenu ? "mobile" : "hidden"}`}>
        <ul className="mobile-nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/register">Register</Link></li>
          <button className="btn-about">About</button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
