import * as React from 'react';
import { useRef } from 'react';
import clsx from 'clsx';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Badge } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import axios from "axios";



export default function VerificationModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [dob, setDOB] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
  const [epanther, setePanther] = React.useState<string>();
  const [ssn, setSSN] = React.useState<any>();
  const [address, setAddress] = React.useState<string>();
  const [verify, setVerify] = React.useState(false);
  

  const getverified = (value: any) => {
    const DOB = dob?.toDate();
    const baseURL = "http://127.0.0.1:5000/verify?epanther=" + epanther + "&ssn=" + ssn + "&address=" + address + "&dob=" + DOB  ;
    
    axios.get(baseURL).then((response) => {
      console.log(response.data);
      if(response.data.status == "Healthy") {
        setVerify(true);
        setOpen(false);
      }
      else if(response.data.status == "Unhealthy, recheck entered data"){
        setVerify(false);
        setOpen(false);
      }
      else{
        setVerify(false);
        setOpen(false);
      }  
    }
    )
  };
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

  return (
    <div>
    <p>Verification status:
        {verify ? <span>{'\t'}Success <VerifiedIcon color="success"/></span> : <span>{'\t'}pending <MoreHorizIcon/></span> } 
    </p>
    <CardActions>
        <Button size="small" onClick={handleOpen}>
            Verify Your ID
        </Button>
    </CardActions>


      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
      >
        <ModalContent sx={{ width: 400 }}>
          <h2 id="unstyled-modal-title" className="modal-title">
            Verify you ID
          </h2>
          <TextField
          required
          id="outlined-required"
          label="ePanther"
          onChange={e => setePanther(e.target.value)}
          />
        <TextField
          id="outlined-password-input"
          label="Last 4 digits of SSN"
          type="password"
          onChange={e => setSSN(e.target.value)}
        />
        <TextField required
          id="outlined-multiline-static"
          label="Home Address"
          multiline
          rows={4}
          onChange={e => setAddress(e.target.value)}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker 
        label="Date of Birth"
        value={dob}
        onChange={(newValue: any) => setDOB(newValue)}
        />
    </LocalizationProvider>
  

  
    <Button variant="contained" onClick={(e: React.MouseEvent<HTMLElement>) => getverified(e.target)}>Submit</Button>
        </ModalContent>
      </Modal>
    </div>
  );
}

export function Verification(){
  return VerificationModal;
}

const Backdrop = React.forwardRef<
  HTMLDivElement,
  { open?: boolean; className: string }
>((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ 'MuiBackdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  );
});


const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const ModalContent = styled('div')(
  ({ theme }) => css`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0 4px 12px
      ${theme.palette.mode === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
    padding: 24px;
    color: ${theme.palette.mode === 'dark' ? grey[50] : grey[900]};

    & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${theme.palette.mode === 'dark' ? grey[400] : grey[800]};
      margin-bottom: 4px;
    }
  `,
);

