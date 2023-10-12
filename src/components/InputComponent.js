import { FilledInput, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, dividerClasses } from '@mui/material'
import React from 'react'
import {ImUser} from "react-icons/im"
const InputComponent = ({name,icon,type}) => {
  return (
    <div className='col-span-12 md:col-span-6  p-2 bg-white m-3'>
    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-name"  required style={{
           "&.MuiFormControl-root &.MuiFormLabel-asterisk":{
            backgroundColor:"red"
           }
          }}>{name}</InputLabel>
          <OutlinedInput
            id="outlined-adornment-name"
            type={type}
            endAdornment={
              <InputAdornment position="start">
                 {icon}
              </InputAdornment>
            }
            label={name}
          />
        </FormControl>
        </div>
  )
}

export default InputComponent