import {React} from 'react';
import {
    DropdownWrappper
} from './DropdownStyled';
import Select from 'react-select';
import { Label } from '../Label';
import { theme } from '../../../theme'; 
import {useField, useFormikContext } from 'formik';
import { Error } from '../Error';

export const Dropdown = ({label,options,name,innerLable, placeholder,customHandle, fullWidth,value, noOptionsMessage}) => {
  const { setFieldValue} = useFormikContext();
  const meta = useField(name)[1];
  const customStyles = {
    control: (provided) => ({
      ...provided,
      height: '45px',
      border:'1px solid #D5D5E5',
    }),
    dropdownIndicator: base => ({
      ...base,
      color: "red" // Custom colour
    }),
    placeholder: (provided) => ({
      ...provided,
      marginRight:'6px',
      marginTop:'6px',
      color: theme.colors.darkGray
    }),
    singleValue: (provided) => ({
        ...provided,
        color: theme.colors.darkGray,
        marginLeft:'3px',
        marginTop: '8px'
    }),
    menu: (provided, state) => ({
      ...provided,
      color: state.selectProps.menuColor,
      borderRadius: '2px',
      background: 'white',
      zIndex: '100',
      textAlign: 'left'
  })
  };
  const handleOnChange = (option) => {
    setFieldValue(name, option ? option.value : '');
    if(customHandle) 
        {customHandle(option.value)
          
    };
  
  };

  if (value) {
    value = options
        ? options.find((item) => {
              return item.value === value;
          })
        : {};
    }  
    return (
      <DropdownWrappper
        fullWidth={fullWidth}
      >
        <Label
          for={name}
          text={label}
          insideField={innerLable}
        />
        <Select 
          name={name}
          value={value}
          placeholder={placeholder || "Select Option"}
          styles={customStyles}
          components={{IndicatorSeparator:() => null }}
          options={options}
          onChange={handleOnChange}
          noOptionsMessage={() => {
            return noOptionsMessage ? noOptionsMessage : 'No options available';
          }}
          />
          <Error meta={meta} />
      </DropdownWrappper>
    
    );
};
