import React from 'react';
import {
    MeterWrappper
} from './MeterStyled';

export const Meter = ({numbers}) => {
    var digits = numbers.toString().split('');
    if (digits.length<5){
        let padZeros = 5-digits.length;
        digits = Array(padZeros).fill(0).concat(digits);
    }
    return (
      <MeterWrappper>
            <div className="flex-style">
              <h4>$</h4>
              {digits.map((number,i) => {
                  return <span key={i}>{number}</span>
              })}
            </div>
            <p>Total annual estimated savings</p>
              
      </MeterWrappper>
    
    );
};
