import React from 'react'
import FormHeader from './formHeader/FormHeader'
import './FormPage.css'
import QuestionForm from './questionForm.js/QuestionForm'
import FormTabs from './tabs/FormTabs'

const FormPage = () => {
    return (
        <div>
            <FormHeader />
            <FormTabs />
            <QuestionForm />
        </div>
    )
}

export default FormPage