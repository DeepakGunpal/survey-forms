import { Paper, Tab, Tabs } from '@mui/material'
import React from 'react'

const tab = {
    fontSize: 14,
    color: '#5f6368',
    textTransform: 'capitalize',
    height: '10px',
    fontWeight: '600',
    fontFamily: 'Google Sans,Roboto,Arial,sans-serif',
}

const FormTabs = () => {
    return (
        <Paper style={{ flexGrow: 1 }}>
            <Tabs
                textColor='primary'
                indicateColor='primary'
                centered
                style={{ height: '10px' }}
            >
                <Tab style={tab} label="Questions"></Tab>
                <Tab style={tab} label="Responses"></Tab>
                <Tab style={tab} label="Settings"></Tab>
            </Tabs>
        </Paper>
    )
}

export default FormTabs