import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    color: ${props => props.theme.color.light};
    background-color: ${props => props.theme.color.secondary};
    border:none;
    border-radius:50px;
    width:100%;
    height:6vh;
    margin-bottom:30px;
    font-weight:bold;
    font-size:${props => props.theme.fontsize.s};
    @media (min-width: ${props => props.theme.breakpoint.tablet}) {
        font-size: ${props => props.theme.fontsize.l};
    }
    @media (max-width: ${props => props.theme.breakpoint.smallmobile}) {
        font-size: ${props => props.theme.fontsize.xs};
    }
`

const CTAButton = ({children}) => {
    return (
    <Button>{children}</Button>
    )
}

export default CTAButton;