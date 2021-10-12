import React from 'react';
import {theme} from '../../../theme';
import styled from 'styled-components/macro';

export const LabelStyled = styled.label`
    color: ${props => props.theme.colors.easiblue};
    font-family:${theme.fonts.Replica_bold};
    ${({ insideField }) => insideField && `
        position:absolute;
        top:6px;
        left:12px;
        font-size:10px;
        z-index:1;
    `}
`;

export const Label = (props) => {
    return (
        <LabelStyled as={props.as} htmlFor={props.for} insideField={props.insideField}>
            {props.text}
        </LabelStyled>
    );
};
