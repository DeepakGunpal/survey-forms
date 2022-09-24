import React from 'react';
import Template from '../template/Template';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import StorageIcon from '@mui/icons-material/Storage';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './HomePage.css';
import { IconButton } from '@mui/material';
import docImage from '../../assets/doc_image.png';
import Header from '../header/Header';

const HomePage = () => {
    return (
        <div>
            <Header />
            <Template />
            <div className='main_body'>
                <div className='main_body_top'>
                    <div className='main_body_top_left' style={{ fontSize: '16px', fontWeight: '500' }}>
                        Recent Forms
                    </div>
                    <div className='main_body_top_right'>
                        <div className='main_body_top_center' style={{ fontSize: '16px', marginRight: '125px' }}>Owned By Anyone <ArrowDropDownIcon /></div>
                        <IconButton>
                            <StorageIcon style={{ fontSize: '16px', color: 'black' }} />
                        </IconButton>
                        <IconButton>
                            <FolderOpenIcon style={{ fontSize: '16px', color: 'black' }} />
                        </IconButton>
                    </div>
                </div>
                <div className='main_body_docs'>
                    <div className='doc_card'>
                        <img src={docImage} alt='doc' className='doc_image' />
                        <div className='doc_card_content'>
                            <h5>untitled form</h5>
                            <div className='doc_content' style={{ fontSize: '12px', color: 'grey' }}>
                                <div className='doc_content_left'>
                                    <StorageIcon style={{ fontSize: '14px', color: 'white', backgroundColor: '#6E2594', padding: '3px', marginRight: '6px', borderRadius: '2px' }} />
                                </div>
                                <p>Opened {new Date(Date.now()).toDateString()}</p>
                                <IconButton>
                                    <MoreVertIcon style={{ fontSize: '16px', color: 'grey' }} />
                                </IconButton>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage