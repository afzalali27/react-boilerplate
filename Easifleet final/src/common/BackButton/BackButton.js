import styled from 'styled-components';
import React from 'react';
import { navigate } from '@reach/router';

const BackIcon = styled.img`
    height: 40px;
    cursor:pointer;
    padding:5px;
   
`


export const BackButton = ({className})=>{
    return (
        <BackIcon 
            src='/Images/left-arrow.png' 
            alt='back-btn' 
            className={className}
            onClick={()=>navigate(-1)}
        />
    )
}