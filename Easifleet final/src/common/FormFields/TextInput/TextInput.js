import React from 'react';
import {TextInputWrappper, InputWrappper} from './TextInputStyled';
import { useField } from 'formik';
import {FiSearch} from 'react-icons/fi';
import { Error } from '../Error';

export const TextInput = ({placeholder,icon,fullWidth , handleChange, name, ...props}) => {
    const meta = useField(name)[1];

    return (
        <TextInputWrappper fullWidth={fullWidth}>
            <InputWrappper
            >
                { icon && 
                <span><FiSearch/></span>
                }
                <input 
                type="text" 
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
                />
            </InputWrappper>
            <Error meta={meta} />
        </TextInputWrappper>
    );
};
