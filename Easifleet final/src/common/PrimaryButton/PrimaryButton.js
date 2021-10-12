import React from 'react';
import { Button } from './PrimaryButtonstyled';

export const PrimaryButton = ({btnText,className, handleOnclick,lg,md, fullWidth,isSubmitting,bg, type, margin})=> {
    
    const handleclick = () =>{
        if (handleOnclick){
            handleOnclick();
        }
    }

    return(

        <Button
            margin={margin}
            bg={bg}
            type={type}
            disabled ={isSubmitting}
            onClick={handleclick} 
            lg={lg}
            md ={md}
            fullWidth = {fullWidth}
            className={className}>{btnText}
            
        </Button>
    );



};
