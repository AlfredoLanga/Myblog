import { useState } from 'react'
import  './MobileNavbar.scss'
import { Link } from 'react-router-dom'
function MobileNavbar() {
  const[openMenu, setOpenMenu] = useState(false);
  const toggleMenu =()=>{
    setOpenMenu(!openMenu);
  }
  return (
    <div className='MobileNavbar-container'>
        <nav>
          <h2>Alfredo Langa</h2>
            <ul>
                <li><Link to={`/home`}>Home</Link></li>
                <li><Link to={`/contact`}>Contact</Link></li>
                <li><Link to={`/user`}>User</Link></li>
                <button>sobre</button>
            </ul>

        </nav>
        <button className='menu-btn' onClick={toggleMenu} >
          {openMenu ? 'menu':'close'}
        </button>
    </div>
  
  )
}

export default MobileNavbar