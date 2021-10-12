import React, { useState } from 'react';
import {
    RangeSliderWrappper
} from './RangeSliderStyled';
import {theme} from '../../../theme';
import { Range, getTrackBackground } from "react-range";
import {useFormikContext } from 'formik';
export const RangeSlider = ({headtext,current, min,max,step,after='',before='', name,customHandle, options}) => {

    const [values ,setvalues] = useState([current]);
    const { setFieldValue} = useFormikContext();
    const valuesOnChange = (values) => {
      setvalues(values);
      setFieldValue(name, options? options[values[0]].value : values[0] ?? '');
      if(customHandle) {customHandle(values[0])
      };
    };
    return (
      <RangeSliderWrappper>
           <p>{headtext}</p>
           <div
                style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                margin: ""
                }}
            >
            <Range
              name={name}
              values={values}
              step={step}
              min={min}
              max={max}
              onChange={valuesOnChange}
              renderTrack={({ props, children }) => (
                <div
                  onMouseDown={props.onMouseDown}
                  onTouchStart={props.onTouchStart}
                  style={{
                    ...props.style,
                    height: "36px",
                    display: "flex",
                    width: "100%"
                  }}
                >
                  <div
                    ref={props.ref}
                    style={{
                      height: "10px",
                      width: "100%",
                      background: getTrackBackground({
                        values: values,
                        colors: [theme.colors.easiblue, "#ccc"],
                        min: min,
                        max: max
                      }),
                      alignSelf: "center"
                    }}
                  >
                    {children}
                  </div>
                </div>
              )}
              renderThumb={({ props, isDragged }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "30px",
                    width: "30px",
                    borderRadius: "35px",
                    backgroundColor: "#FFF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 2px 6px #AAA",
                    outline:'none',
                    cursor:'pointer'
                  }}
                >
                </div>
              )}
            />
          </div>
          <h3>{before+" "+(options? options[values[0]].label.toLocaleString('en-US') : values[0].toLocaleString('en-US'))+" "+after}</h3>
      </RangeSliderWrappper>
    
    );
};
