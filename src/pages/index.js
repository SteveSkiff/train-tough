import React from "react"
import styled from 'styled-components'
import LargeBtn from "../components/largebtn"
import LargeLogo from '../components/largelogo'

const LoginLanding = styled.section`
    margin: 0;
    padding: 0;
    height: 100vh;
    display: grid;
    grid-template-columns: 15px auto 15px;
    grid-template-rows: 55% 5% 40%;
`

const LoginBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  grid-row-start: 3;
  grid-column-start: 2;
`

const WelcomeText = styled.p`
  font-size: 22px;
  margin: 0;
  padding: 0;
  grid-column-start: 2;
  grid-row-start: 2;
  justify-self: center;
`

const Login = () => (
    <LoginLanding>
        <LargeLogo />
        <WelcomeText>Welcome to Train Tough</WelcomeText>
        <LoginBtnContainer>
          <LargeBtn to='/client/login' color={'green'}>I'm a Client</LargeBtn>
          <LargeBtn to="/trainer/login" color={'blue'}>I'm a Trainer</LargeBtn>
        </LoginBtnContainer>
    </LoginLanding>
)

export default Login