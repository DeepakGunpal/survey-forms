import React, { useState } from 'react';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import ShortTextOutlinedIcon from '@mui/icons-material/ShortTextOutlined';
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import './QuestionForm.css';
import { Accordion, AccordionDetails, AccordionSummary, Button, FormControlLabel, IconButton, MenuItem, Select, Switch, Typography } from '@mui/material';


const QuestionForm = () => {

    const [questions, setQuestions] = useState([
        {
            questionText: "which is the capital city of Rajasthan?",
            questionType: 'radio',
            options: [
                { optionText: 'Jodhpur' },
                { optionText: 'Jaipur' },
                { optionText: 'Udaipur' },
                { optionText: 'Ajmer' }
            ],
            open: true,
            required: false
        }
    ])

    const questionsUI = () => {
        return questions.map((ques, i) => (
            <div>
                <Accordion expanded={questions[i].open} className={questions[i].open ? 'add_border' : ""}>
                    <AccordionSummary
                        aria-controls='panelia-content'
                        id='panelia-header'
                        elevation={1} style={{ width: '100' }}>
                        {questions[i].open ? (
                            <div className='saved_questions'>
                                <Typography style={{ fontSize: '15px', fontWeight: '400', letterSpacing: '0.1px', lineHeight: '24px', paddingBottom: '8px' }}>
                                    {i + 1}. {questions[i].questionText}
                                </Typography>

                                {ques.options.map((op, j) => (
                                    <div key={j}>
                                        <div style={{ display: 'flex' }}>
                                            <FormControlLabel
                                                style={{ marginLeft: '5px', marginBottom: '5px' }} disabled control={<input type={ques.questionType} color='primary' style={{ marginRight: '3px' }} required={ques.type} />}
                                                label={
                                                    <Typography
                                                        style={{
                                                            fontFamily: 'Roboto,Arial,sans-serif',
                                                            fontSize: '13px',
                                                            fontWeight: '400',
                                                            letterSpacing: '0.2px', lineHeight: '20px', color: '#202124'
                                                        }}>
                                                        {ques.options[j].optionText}
                                                    </Typography>
                                                } />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : ''}
                    </AccordionSummary>
                    <div className='question_boxes'>
                        <AccordionDetails className='add_question'>
                            <div className='add_question_top'>
                                <input type='text' className='question' placeholder='Question' value={ques.questionText} />
                                <CropOriginalIcon style={{ color: '#5f6368' }} />
                                <Select className='select' style={{ color: '#5f6368', fontSize: '13px' }}>
                                    <MenuItem id='text' className='menu_item' value='Text'><SubjectOutlinedIcon style={{ marginRight: '10px' }} />Paragraph </MenuItem>
                                    <MenuItem id='checkbox' className='menu_item' value='Checkbox'><CheckBoxOutlinedIcon style={{ marginRight: '10px', color: '#70757a' }} checked />Checkboxes </MenuItem>
                                    <MenuItem id='radio' className='menu_item' value='Radio'><RadioButtonCheckedOutlinedIcon style={{ marginRight: '10px', color: '#70757a' }} />Multiple Choice </MenuItem>

                                </Select>
                            </div>
                            {
                                ques.options.map((op, j) => (
                                    <div className='add_question_body' key={j}>
                                        {
                                            (ques.questionType != 'text') ?
                                                <input type={ques.questionType} style={{ marginRight: '10px' }} /> :
                                                <ShortTextOutlinedIcon style={{ marginRight: '10px' }} />
                                        }
                                        <div>
                                            <input type='text' className='text_input' placeholder='option' value={ques.options[j].optionText} />
                                        </div>
                                        <CropOriginalIcon style={{ color: '#5f6368' }} />

                                        <IconButton aria-label='delete'>
                                            <CloseIcon />
                                        </IconButton>
                                    </div>
                                ))
                            }
                            <div className="add_footer">
                                <div className="add_question_bottom_left">
                                    <Button size="small" style={{ textTransform: 'none', color: '#4285f4', fontSize: '13px' }}>
                                        <ArrowOutwardIcon style={{ border: '2px solid #4285f4', padding: '2px', marginRight: '8px' }} /> Answer Key</Button>
                                </div>
                                <div className="add_question_bottom">
                                    <IconButton aria-label='copy'>
                                        <ContentCopyIcon />
                                    </IconButton>
                                    <IconButton aria-label='delete'>
                                        <DeleteIcon />
                                    </IconButton>
                                    <span style={{ color: '#5f6368', fontSize: '13px' }}>
                                        <Switch name='checkedA' color='primary' /> Required</span>
                                    <IconButton>
                                        <MoreVertIcon />
                                    </IconButton>
                                </div>
                            </div>

                        </AccordionDetails>
                    </div>
                </Accordion>
            </div>
        ))
    }

    return (
        <div className='question_form'>
            <br />
            <div className='section'>
                <div className='question_title_section'>
                    <div className='question_form_top'>
                        <input type='text' className='question_form_top_name' style={{ color: 'black' }} placeholder='Untitled document' />
                        <input type='text' className='question_form_top_desc' style={{ color: 'black' }} placeholder='Form Description' />
                    </div>
                </div>
                {questionsUI()}

            </div>
        </div>
    )
}

export default QuestionForm