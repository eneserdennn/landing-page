import React from 'react';

import '../styles/navbar.styles.scss';

import { FaOpencart, FaSearch } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className='navs'>
            <div className="navbar__logo">
                <h1>abc</h1>
            </div>
            <div className="navbar__links">
                <ul>
                    <li><Link>Home</Link></li>
                    <li><Link>Shop</Link></li>
                    <li><Link>Cotton Our</Link></li>
                    <li><Link>Story Our</Link></li>
                </ul>
            </div>
            <div className="navbar__icons">
                <ul>
                <li>
                    <HiOutlineSearch />
                  
                  </li>
                    <li>
                        <FaOpencart />
                    </li>
                    <li>0 Items</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar