import styled from 'styled-components'
import React from "react"
import Input from '../components/input'

const LForm = styled.form`
    margin: 0;
    padding: 0;
    grid-column-start: 2;
    grid-row-start: 2;
    display: flex;
    flex-direction: column;
`

const LFormLabel = styled.label`
    margin: 0;
    padding: 0;
    margin-top: 10px;
`

const LoginForm = () => (

    <LForm>
        <LFormLabel for='username'>Username</LFormLabel>
        <Input inputSize="lg" type="text" id='username' value="TestLogin" />
        <LFormLabel for='password'>Password</LFormLabel>
        <Input inputSize="lg" type="text" id='password' value='********' />
    </LForm>
)

export default LoginForm
