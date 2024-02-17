import * as React from 'react';
import Box from '@mui/material/Box';
import { useState } from "react";
import NameForm from './NameForm';
import CIDForm from './CIDFrom';
import EPantherForm from './EPantherForm';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


export default function SelectForm() {
    const [select, setSelect] = useState<string>("name");

    const handleOnChange = (e: SelectChangeEvent): void => {
        setSelect(e.target.value);
    };

    const renderForm = () => {
        switch (select) {
            case "name":
                return <NameForm />;
            case "campusID":
                return <CIDForm />;
            case "ePanther":
                return <EPantherForm/>;
            default:
                return null;
        }
    };

    return (
        <div>
            <h2>Find Your Account</h2>
            <p>Enter the details in the form to find your account and get connected to Pounce Chat! 
                <br></br>Select the drop down info based on your knowledge</p>
 <Box  sx={{ m: 1, minWidth: 80 }}>
      <FormControl  sx={{ m: 0, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Info</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={select}
          label="Select form"
          onChange={handleOnChange}
        >
          <MenuItem value={"name"}>Name</MenuItem>
          <MenuItem value={"campusID"}>Campus ID</MenuItem>
          <MenuItem value={"ePanther"}>ePanther</MenuItem>
        </Select>
        
      </FormControl>
      
    </Box>
            {renderForm()}
        </div>
    );
}
