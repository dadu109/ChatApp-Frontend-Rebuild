import React , { useState,useEffect } from 'react'
import styled from 'styled-components';
import Banner from '../components/Banner'
import ShortInput from '../components/ShortInput'
import CTAButton from '../components/CTAButton'
import img from '../assets/chatting.svg'
import bigimg from '../assets/bigimg.svg'

const Divider = styled.div`
    @media (min-width: ${props => props.theme.breakpoint.desktop}) {
        height:300px;
        width:2px;
        background-color: ${props => props.theme.color.dark};
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
    }
`

const Container = styled.div`
    position:relative;
    @media (min-width: ${props => props.theme.breakpoint.desktop}) {
        display:flex;
        align-items:center;
        justify-content:centerl
    }
`
const Img = styled.img`
    display:none;
    width:35%;
    padding:0 5%;
    background-color:${props => props.theme.color.light};
    @media (min-width: ${props => props.theme.breakpoint.desktop}) {
        display:block;
    }
`

const Wrapper = styled.div`
    margin:0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color: ${props => props.theme.color.light};
    height:85vh;
    overflow:hidden;
    padding:0 20%;
    @media (min-width: ${props => props.theme.breakpoint.desktop}) {
        width:50%;
        height:70vh;
        padding:0 10%;
    }
`

const Login = () => {
    const [login,changeLogin] = useState()
    const [password,changePassword] = useState()

    useEffect(()=>{
        console.log({login,password})
    },[login,password])

    return (
        <div>
            <Banner 
                heading='Witaj ponownie!'
                underHeading='Zaloguj się!'
                img={img}
            />
            <Container>
                <Divider/>
                <Img src={bigimg}/>
                <Wrapper>
                    <ShortInput stateValue={login} handler={changeLogin}>Nazwa użytkownika</ShortInput>
                    <ShortInput stateValue={password} handler={changePassword} type='password'>Hasło</ShortInput>
                    <CTAButton>Zaloguj się</CTAButton>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Login;
