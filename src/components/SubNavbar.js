import React from 'react'
import './SubNavbar.css'
import { Link } from 'react-router-dom';

function SubNavbar() {
    return (
        <>
      <nav className='sub-navbar'>
        <div className='sub-navbar-container'>

          <ul>
            <li className='sub-nav-item'>
              <Link to='/myprofile' className='sub-nav-links'>
                My Profile
              </Link>
            </li>

            <li className='sub-nav-item'>
              <Link
                to='/messages'
                className='sub-nav-links'
              >
                Messages
              </Link>
            </li>

            <li>
              <Link
                to='/Gigs'
                className='sub-nav-links'
              >
                Gigs
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
    )
}

export default SubNavbar
