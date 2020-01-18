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
    @media (min-width: ${props => props.theme.breakpoint.tablet}) {
        width:178px;
        height:178px;
    }
`
const BB1 = styled(BackgroundBox)`
    background-color: ${props => props.theme.color.light};
    &::before{
        border-bottom-left-radius:100%;
        background-color: ${props => props.theme.color.primary};
    }
    @media (min-width: ${props => props.theme.breakpoint.desktop}) {
        display:none;
    }
`
const BB2 = styled(BackgroundBox)`
    background-color: ${props => props.theme.color.primary};
    &::before{
        border-top-right-radius:100%;
        background-color: ${props => props.theme.color.light};
    }
`
const Img = styled.img`
    display:none;
    position:absolute;
    width:286px;
    height:209px;
    right: 90px;
    top: 160px;
    @media (min-width: ${props => props.theme.breakpoint.tablet}) {
        display:block;
    }
    @media (min-width: ${props => props.theme.breakpoint.desktop}) {
        display:block;
        right: 200px;
        top: 80px;
    }
    
`

const Background = styled.div`
    height:185px;
    background-color: ${props => props.theme.color.primary};
    position: relative;
    z-index:100;
    ${BB1}{ bottom:0; left:0; };
    ${BB2}{ right:0; top:100%; };
    @media (min-width: ${props => props.theme.breakpoint.tablet}) {
        height:395px;
    }
    @media (min-width: ${props => props.theme.breakpoint.desktop}) {
        height:310px;
    }
`
const Heading = styled.h1`
    position:absolute;
    color: ${props => props.theme.color.light};
    font-size: ${props => props.theme.fontsize.m};
    margin:44px 0 0 44px;
    z-index:10;
    @media (min-width: ${props => props.theme.breakpoint.tablet}) {
        margin:60px;
        font-size: ${props => props.theme.fontsize.xxl}
    }
    @media (max-width: ${props => props.theme.breakpoint.smallmobile}) {
        margin:40px 0 0 25px;
        font-size: ${props => props.theme.fontsize.m}
    }
`
const UnderHeading = styled.h2`
    position:absolute;
    color: ${props => props.theme.color.light};
    font-size: ${props => props.theme.fontsize.m};
    top: ${props => props.theme.fontsize.m};
    font-weight:lighter;
    margin:44px;
    z-index:10;
    @media (min-width: ${props => props.theme.breakpoint.tablet}) {
        margin:calc(${props => props.theme.fontsize.xl} + 60px) 60px ;
        font-size: ${props => props.theme.fontsize.xl}
    }
    @media (max-width: ${props => props.theme.breakpoint.smallmobile}) {
        margin:40px 25px;
        font-size: ${props => props.theme.fontsize.m}
    }
`


const Banner = ({heading,underHeading,img}) => {
    return (
        <Background>
            <Heading>{heading}</Heading>
            <UnderHeading>{underHeading}</UnderHeading>
            <Img src={img}/>
            <BB1/>
            <BB2/>
        </Background>
    )
}

export default Banner;