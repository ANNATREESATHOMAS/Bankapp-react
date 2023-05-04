import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Form from 'react-bootstrap/Form';

const theme = createTheme();

const Transfer = () => {
  return (
<div className="main">
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <h4 className='text-center mt-5'>ABC Bank</h4>
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor:"white",
            with:550,
            p:4,
            borderRadius:'4px',
            border:"1px solid #e6e8eb"
            
          }}
        >

          <Form sx>
            <h5 className="border-bottom border-1-solid">Transfer Money</h5>
            <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
              <Form.Label style={{ fontWeight: 'bold' }}>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3 mt-4" controlId="formBasicAmount">
              <Form.Label style={{ fontWeight: 'bold' }}>Amount</Form.Label>
              <Form.Control type="number" placeholder="Enter amount to transfer" />
            </Form.Group>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, textTransform: "none" }}
            >
              Transfer
            </Button>
          </Form>


        </Box>
      </Container>
    </ThemeProvider>
    </div>    )
}

export default Transfer