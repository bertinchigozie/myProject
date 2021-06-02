import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';


const Header = () => {
    return (
        <div className='header'>
            <div className="header-left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY3hb80oyT0WFXbyzL8smEXuvJOwHuXsYlKIx-DS61_6WS5p798O33Hp8UjdRaDY1EWQE&usqp=CAU" height="80px" alt="" />
            </div>
            <div className="header-middle">
                <SearchIcon />
                    <input type="text" placeholder="Search mail" />
                <ArrowDropDownIcon className="header-inputCarat" />
            </div>
            <div className="header-right">
                <IconButton>
                    <AppsIcon />
                </IconButton> 
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar />
            </div>
            
        </div>
    );
}

export default Header;
