import React from 'react';
import './Template.css';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import uuid from 'react-uuid';

import blank from '../../assets/blank.png'
import party from '../../assets/party.png'
import contact from '../../assets/contact.png'
import { useNavigate } from "react-router-dom";

const Template = () => {

    const navigate = useNavigate();

    const createForm = () => {
        const id = uuid();
        navigate('/form/' + id);
    }

    return (
        <div className='template_section'>
            <div className='template_top'>
                <div className='template_left'>
                    <span style={{ fontSize: '16px', color: '#202124' }}>Start New Form</span>
                </div>
                <div className='template_right'>
                    <div className='gallery_button'>
                        Template gallery
                        <UnfoldMoreIcon fontSize='small' />
                    </div>
                    <IconButton>
                        <MoreVertIcon fontSize='small' />
                    </IconButton>
                </div>
            </div>
            <div className='template_body'>
                <div className='card' onClick={createForm}>
                    <img src={blank} alt='blank' className='card_image' />
                    <p className='card_title'> Blank</p>
                </div>
                <div className='card'>
                    <img src={party} alt='party' className='card_image' />
                    <p className='card_title'> Party</p>
                </div>
                <div className='card'>
                    <img src={contact} alt='contact' className='card_image' />
                    <p className='card_title'> Contact</p>
                </div>
            </div>
        </div>
    )
}

export default Template