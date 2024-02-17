import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AccountDetails from './AccountDetails';
import { useState } from "react";
import axios from "axios";


export default function CIDForm() {
  const [campus, setCampus] = useState<string>();
  const [userDetails, setUserDetails] = useState<any>("");

  const getdetails = (value: any) => {
    const baseURL = "http://127.0.0.1:5000/get?campusid=" + campus;
    
    axios.get(baseURL).then((response) => {
      console.log(response.data[0]);
      setUserDetails(response.data[0]);
    }
    )
  };
  return (
    <div>
    <Box
      component="form"
      sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}noValidate>

      <TextField
        required
        id="outlined-required"
        label="9 digit Campus ID number"
        onChange={e => setCampus(e.target.value)}
      />

    </Box>
    <Button sx={{ m: 1, minWidth: 100 }} variant="outlined" onClick={(e: React.MouseEvent<HTMLElement>) => getdetails(e.target)}>Submit</Button>
    <div className='detailscard'> <AccountDetails campusid={userDetails.campusid} email_address={userDetails.email_address} epanther={userDetails.epanther} first_name={userDetails.first_name} last_name={userDetails.last_name} password_lastset={userDetails.password_lastset} password_expired={userDetails.password_expired}/> </div>
    </div>
  );
}
