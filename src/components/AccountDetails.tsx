import * as React from 'react';
import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import VerificationModal from './VerificationModal';
import { Badge } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import { PropaneSharp } from '@mui/icons-material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

// const card = (
//   <React.Fragment>
//     <CardContent>
//       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//         Account Details
//       </Typography>
//       <Typography variant="h5" component="div">
//         {props.user}
//       </Typography>
//       <Typography sx={{ mb: 1.5 }} color="text.secondary">
//         jdoe
//       </Typography>
//       <Typography variant="body2">
//         Last Password set : 
//         <br />
//         Password expires : 
//         <br />
//       </Typography>
//       <Typography variant="body2">
//     Account status:  <Chip label="Healthy" color="success" variant="outlined" />
//       </Typography>
//     </CardContent>


//     <CardActions>
//       <Button size="small">Verify Your ID</Button>
//     </CardActions>
//   </React.Fragment>
// );
export interface Details {
    campusid: number|undefined;
    email_address: string |undefined;
    epanther: string|undefined;
    first_name: string|undefined;
    last_name: string|undefined;
    password_lastset: string|undefined;
    password_expired: string|undefined;
  } 

export default function AccountDetails(props:Details) {
  return (
    <Box sx={{ minWidth: 275 }}>
        <React.Fragment>
            <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Account Details
            </Typography>
            <Typography variant="h5" component="div">
                Name : {props?.first_name} {props?.last_name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                ePanther ID : {props?.epanther}
            </Typography>
            <Typography variant="body2">
                Last Password set : {props?.password_lastset}
                <br />
                Password expires : {props?.password_expired}
                <br />
            </Typography>
            <Typography variant="body2">
            Account status:  <Chip label="Healthy" color="success" variant="outlined" />
            </Typography>
            </CardContent>
            <VerificationModal/>

        </React.Fragment>
    </Box>
  );
}
