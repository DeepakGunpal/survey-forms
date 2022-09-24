import React, { Fragment, useState } from 'react'
import { Divider, Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import ArticleIcon from '@mui/icons-material/Article';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import './TempDrawer.css'

const TemporaryDrawer = () => {
    const [state, setState] = useState({ left: false });

    const toggleDrawer = (anchor, open) => (event) => {
        setState({ ...state, [anchor]: open });
    };

    const styles = { marginLeft: '20px', fontSize: '16px', fontWeight: '500', color: 'grey' };
    const spanStyle = { fontWeight: '500', fontSize: '22px', fontFamily: "'Product Sans',Arial, sans-serif" };

    const list = (anchor) => {
        return <div style={{ width: '250px' }} role='presentation'>
            <Divider />
            <List>
                <ListItem>
                    <ListItemText style={{ fontSize: '48px', marginLeft: '5px' }}>
                        <span style={{ color: 'blue', fontWeight: '700', fontSize: '22px', fontFamily: "'Product Sans',Arial, sans-serif" }}>S</span>
                        <span style={{ color: 'red', ...spanStyle }}>U</span>
                        <span style={{ color: 'orange', ...spanStyle }}>R</span>
                        <span style={{ color: 'blue', ...spanStyle }}>V</span>
                        <span style={{ color: 'green', ...spanStyle }}>E</span>
                        <span style={{ color: 'red', ...spanStyle }}>Y</span>
                        <span style={{ color: '#5f6368', fontWeight: '500', fontSize: '22px', marginLeft: '10px', fontFamily: "'Product Sans',Arial, sans-serif" }}>Forms</span>
                    </ListItemText>
                </ListItem>
            </List>
            <Divider />
            <List style={{ margin: '15px 8px 0 8px' }}>
                <ListItem className='list_item'>
                    <ArticleIcon style={{ color: 'blue', height: '30px', width: '30px' }} />
                    <div style={styles}>Docs</div>
                </ListItem>
                <ListItem className='list_item'>
                    <ArticleIcon style={{ color: 'green', height: '30px', width: '30px' }} />
                    <div style={styles}>Sheets</div>
                </ListItem>
                <ListItem className='list_item'>
                    <ArticleIcon style={{ color: 'orange', height: '30px', width: '30px' }} />
                    <div style={styles}>Slides</div>
                </ListItem>
                <ListItem className='list_item'>
                    <ArticleIcon style={{ color: 'purple', height: '30px', width: '30px' }} />
                    <div style={styles}>Forms</div>
                </ListItem>
            </List>
            <Divider />
            <List style={{ margin: '15px 8px 0 8px' }}>
                <ListItem className='list_item'>
                    <SettingsIcon style={{ color: 'grey', height: '30px', width: '30px' }} />
                    <div style={styles}>Settings</div>
                </ListItem>
                <ListItem className='list_item'>
                    <HelpIcon style={{ color: 'grey', height: '30px', width: '30px' }} />
                    <div style={styles}>Help & Feedback</div>
                </ListItem>
            </List>
            <Divider />
            <List style={{ margin: '15px 8px 0 8px' }}>
                <ListItem className='list_item'>
                    <AddToDriveIcon style={{ color: 'green', height: '30px', width: '30px' }} />
                    <div style={styles}>Drive</div>
                </ListItem>
            </List>
            <Divider />
        </div >
    }

    return (
        <div>
            <Fragment>
                <IconButton onClick={toggleDrawer('left', true)}>
                    <MenuIcon />
                </IconButton>
                <Drawer open={state['left']} onClose={toggleDrawer('left', false)} anchor={'left'}>
                    {list('left')}
                </Drawer>
            </Fragment>
        </div>
    )
}

export default TemporaryDrawer