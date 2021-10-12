import React from 'react';
import { Button } from './OutlineButtonstyled';

export const OutlineButton = ({btnText,className,handleOnclick,isActive,round,danger,lg,sm,type})=> {
    const handleclick = () =>{
        if (handleOnclick){
          handleOnclick();
        }
      }
    return(

        <Button 
          isActive={isActive} 
          onClick={handleclick}
          type={type}
          round={round}
          danger={danger}
          lg={lg} 
          sm={sm}
          className={className}
          >
          {btnText}
        </Button>
    );



};
