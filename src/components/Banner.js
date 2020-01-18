import React from 'react';
import styled from 'styled-components';

const BackgroundBox = styled.div`
    width:78px;
    height:78px;
    display:inline-block;
    position:absolute;
    &::before{
        content:'';
        width:100%;
        height:100%;
        top:0;
        left:0;
        position:absolute;
    }
`
const BB1 = styled(BackgroundBox)`
    background-color: ${props => props.theme.color.light};
    &::before{
        border-bottom-left-radius:100%;
        background-color: ${props => props.theme.color.primary};
    }
`
const BB2 = styled(BackgroundBox)`
    background-color: ${props => props.theme.color.primary};
    &::before{
        border-top-right-radius:100%;
        background-color: ${props => props.theme.color.light};
    }
`

const Background = styled.div`
    height:185px;
    background-color: ${props => props.theme.color.primary};
    position: relative;
    ${BB1}{ bottom:0; left:0; };
    ${BB2}{ right:0; top:100%; };
`
const Heading = styled.h1`
    position:absolute;
    color: ${props => props.theme.color.light};
    font-size: ${props => props.theme.fontsize.m};
    margin:44px 44px 0;
    z-index:10;
`
const UnderHeading = styled.h2`
    position:absolute;
    color: ${props => props.theme.color.light};
    font-size: ${props => props.theme.fontsize.m};
    top: ${props => props.theme.fontsize.m};
    font-weight:lighter;
    margin:44px;
    z-index:10;
`

const Banner = ({heading,underHeading,img}) => {
    return (
        <Background>
            <Heading>{heading}</Heading>
            <UnderHeading>{underHeading}</UnderHeading>
            <BB1/>
            <BB2/>
        </Background>
    )
}

export default Banner;