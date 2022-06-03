import React from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
function Navbar() {
  return (
    <div className='nav-container'>
        <div className="wrapper">
            <div className="left">
                <span className="language">
                    EN
                </span>
                <div className="search-container">
                    <input type="text" className='input' />
                    <SearchIcon style={{color:"gray", fontSize:"16px"}} />
                </div>
            </div>

            <div className="center">
                <h1 className="logo">LAMA.</h1>
            </div>

            <div className="right"> 
                <div className="menu-item">REGISTER</div>
                <div className="menu-item">SIGN IN</div>
                <div className="menu-item">
                <Badge badgeContent={4} color="secondary">
                    <ShoppingCartOutlinedIcon color="action" />
                </Badge>
                </div> 
            </div>
        </div>
    </div> 
  ) 
}

export default Navbar