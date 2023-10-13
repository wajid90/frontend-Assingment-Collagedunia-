import {
  FilledInput,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  dividerClasses,
} from "@mui/material";
import { ErrorMessage } from "formik";
import React from "react";
import { ImUser } from "react-icons/im";
const InputComponent = ({
  name,
  icon,
  type,
  fullName,
  onBlur,
  onFocus,
  onChange,
  touched,
  errors,
}) => {
  return (
    <div className="col-span-12 md:col-span-6  p-2 bg-white m-3">
     <div className="flex items-center gap-2">
       <div className="shadow p-4">{icon}</div>
     <TextField
     required
    //    helperText={touched ? errors :"" }
       error={touched && Boolean(errors)}
        id="outlined-basic"
        type={type}
        label={name}
        name={fullName}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />

     </div>
     <FormHelperText ><span className="text-red-500">{ (errors && touched) && errors}</span></FormHelperText>

    </div>
  );
};

export default InputComponent;
