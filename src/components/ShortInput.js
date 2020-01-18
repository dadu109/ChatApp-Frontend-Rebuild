import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    width:100%;
    background-color: ${props => props.theme.color.light};
    border: none;
    border-bottom: 1px solid ${props => props.theme.color.dark};
    margin-bottom:85px;
    ::placeholder{
        color: ${props => props.theme.color.primary}
    }
    :focus {
        border-color: ${props => props.theme.color.primary};
        outline: none;
    }
    @media (min-width: ${props => props.theme.breakpoint.tablet}) {
        font-size: ${props => props.theme.fontsize.l};
        ::placeholder{
            font-size: ${props => props.theme.fontsize.l};
        }
    }
    @media (max-width: ${props => props.theme.breakpoint.smallmobile}) {
        font-size: ${props => props.theme.fontsize.xs};
        ::placeholder{
            font-size: ${props => props.theme.fontsize.xs};
        }
    }
`

const ShortInput = ({children,type,stateValue,handler}) => {
    return (
        <Input 
            onChange={(e)=>handler(e.target.value)} 
            type='text' 
            type={type}
            placeholder={children}
            value={stateValue}
        />
    )
}

export default ShortInput;