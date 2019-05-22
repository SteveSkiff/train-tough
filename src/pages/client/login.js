import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import LargeLogo from '../../components/largelogo'
import LargeBtn from '../../components/largebtn'
import LoginForm from '../../components/loginform'

const LoginLanding = styled.section`
    margin: 0;
    padding: 0;
    height: 100vh;
    display: grid;
    grid-template-columns: 15px auto 15px;
    grid-template-rows: 55% 20% 25%;
`
const LoginTitle = styled.h1`
    font-size: 24px;
    grid-row-start: 1;
    grid-column-start: 2;
    margin:0;
    align-self: end;
`



const Login = () => (
    <LoginLanding>
        <LargeLogo />
        <LoginTitle>Welcome, Client</LoginTitle>
        <LoginForm />
        <LargeBtn to='/client/dashboard/' color={"green"}>Login</LargeBtn>
    </LoginLanding>
)

export default Login