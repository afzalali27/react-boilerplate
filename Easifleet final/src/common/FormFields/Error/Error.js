import React from 'react';
import styled from 'styled-components/macro';

export const ErrorStyled = styled.p`
    color: ${(props) => props.theme.colors.red} !important;
    font-weight: 500;
    margin: 0;
    font-size: ${(props) => props.theme.fontSizes.xs} !important;
    position: absolute;
    bottom:4px;
    right: ${(props) => (props.leftAlign ? 'auto' : '0')};
    padding: 0 !important;
`;

export const ErrorText = ({ text, ...props }) => {
    return <ErrorStyled {...props}>{text}</ErrorStyled>;
};

export const Error = ({ meta, text, leftAlign, ...props }) => {
    if ((meta.touched && meta.error) || text) {
        return (
            <ErrorText
                text={text || (Array.isArray(meta.error) ? meta.error[0] : meta.error)}
                leftAlign={leftAlign}
                {...props}
            />
        );
    } else {
        return null;
    }
};
