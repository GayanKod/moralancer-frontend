import React, { useState, useEffect } from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import './navbar.css';
import Dropdown from '../Dropdown';
import logo from '../../assets/img/logo.png'
import { signout } from '../../helpers/auth';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

function NavbarSO() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const history = useHistory();

  const [user,setUser] = useState(localStorage.getItem("user"))
    console.log(typeof(JSON.parse(user)))
  
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const [dropdown,setDropdown]=useState(false)
  
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
     
        <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={logo} />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'
             onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}>

              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
            </li>


            <li className='nav-item'>
              <Link
                to='/aboutus'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
        <li>
                        <button onClick={() => {
                            signout(() => {
                                history.push('/');
                                toast.success('Signout Successfully');
                            });
            }} className="nav-links-mobile">Sign Out</button>
        </li>
         </ul>
         
         {button && <Button onClick={() => {
                    signout(() => {
                      toast.error('Signout Successfully');
                      history.push('/');
                    });
                  }} buttonStyle='btn--outline'>SIGN OUT</Button>}
         
        </div>
      </nav>
    </>
  );
}

export default NavbarSO;
