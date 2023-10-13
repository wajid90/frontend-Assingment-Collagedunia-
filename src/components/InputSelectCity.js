import { useTheme } from '@emotion/react';
import { FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, useThemeProps } from '@mui/material'
import React from 'react'
import { ImCross } from 'react-icons/im';

const InputSelectCity = ({onBlur,onChange,value}) => {
    const [personName, setPersonName] = React.useState("");
    const theme = useTheme();
    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
      ];
      
      function getStyles(name, personName, theme) {
        return {
          fontWeight:
            personName.indexOf(name) === -1
              ? theme.typography.fontWeightRegular
              : theme.typography.fontWeightMedium,
        };
      }

  return (
    <div className='col-span-12 md:col-span-6  p-2 bg-white m-3'>
    <FormControl sx={{ m: 1, width: "100%" }}>
    <InputLabel id="demo-multiple-name-label" required  style={{
           "&.MuiFormControl-root &.MuiFormLabel-asterisk":{
            backgroundColor:"red"
           }
          }}>City You live In</InputLabel>
    <Select
      labelId="demo-multiple-city-label"
      id="demo-single-city"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      defaultValue={value}
    //   onChange={handleChange}
      input={<OutlinedInput label="City You live In"   endAdornment={
        <InputAdornment position="end">
          <ImCross/>
        </InputAdornment>
      } />}
    //   MenuProps={MenuProps}
    >
      {names.map((name) => (
        <MenuItem
          key={name}
          value={name}
          style={getStyles(name, personName, theme)}
        >
          {name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
  </div>
  )
}

export default InputSelectCity