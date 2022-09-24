import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import Avatar from '@mui/material/Avatar';
import avatarImg from '../../../assets/avatar.jpg';
import FeedIcon from '@mui/icons-material/Feed';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RedoIcon from '@mui/icons-material/Redo';
import UndoIcon from '@mui/icons-material/Undo';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Button, IconButton } from '@mui/material';
import './FormHeader.css'

const FormHeader = () => {
    return (
        <div className='form_header'>
            <div className='form_header_left'>
                <FeedIcon style={{ fontSize: '50px', color: 'purple' }} />
                <input type="text" placeholder='Untitled form' className='form_name' />
                <StarBorderIcon className='form_header_icon' style={{ marginRight: '10px' }} />
                <span style={{ fontSize: '14px', fontWeight: '600' }}>All Changes Saved in Drive</span>
            </div>
            <div className='form_header_right'>
                <IconButton>
                    <ColorLensIcon />
                </IconButton>
                <IconButton>
                    <VisibilityIcon />
                </IconButton>
                <IconButton>
                    <UndoIcon />
                </IconButton>
                <IconButton>
                    <RedoIcon />
                </IconButton>
                <Button variant='contained' color='primary' href='#contained-buttons'>Send</Button>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
                <IconButton>
                    <Avatar src={avatarImg} />
                </IconButton>
            </div>
        </div>
    )
}

export default FormHeader