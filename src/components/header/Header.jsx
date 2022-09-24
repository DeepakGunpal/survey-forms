import React from 'react'
import './Header.css'
import IconButton from '@mui/material/IconButton';
import FeedIcon from '@mui/icons-material/Feed';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import avatarImg from '../../assets/avatar.jpg';
import TemporaryDrawer from '../drawer/TemporaryDrawer';

const Header = () => {
    return (
        <div className='header'>
            <div className='header_info'>
                <IconButton>
                    <TemporaryDrawer />
                </IconButton>
                <FeedIcon style={{ fontSize: '50px', color: 'purple' }} />
                <div className='info'>Forms</div>
            </div>
            <div className='header_search'>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input type="text" name="search" placeholder='Search' />
            </div>
            <div className='header_right'>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <Avatar src={avatarImg} />
                </IconButton>
            </div>

        </div>
    )
}

export default Header