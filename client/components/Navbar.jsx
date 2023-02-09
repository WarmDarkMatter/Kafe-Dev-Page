import React from 'react';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import logo from '../assets/Logo2.png';

const btnStyle = {minWidth: 150,
  margin: '0px',
  textAlign:'right',
  textTransform: 'unset',
  color: 'palette.primary.dark',
  fontSize: 18,
};

function Navbar(){

  return(
    <Grid container sx={{ marginLeft: 5, marginTop: 4}}>

      <Stack  direction="row" spacing={8} >
        <Grid>
          <Button
            sx= {{
              minHeight: 30,
              minWidth: 70,
              marginBottom: 0 }}
            style= {{backgroundImage:`url(${logo})`}}>
          </Button></Grid>
        <Button variant="text" size="large" sx={btnStyle}>Features</Button>
        <Button variant="text" size="large" sx={btnStyle}>Docs</Button>
        <Button variant="text" size="large" sx={btnStyle}>Team</Button>
        <Button variant="text" size="large" href="https://github.com/oslabs-beta/Kafe" startIcon={<GitHubIcon />}></Button>
        <Button variant="text" size="large" startIcon={<EmailIcon />}></Button>

      </Stack>
    </Grid>
  );
}

export default Navbar;
