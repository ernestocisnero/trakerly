import { Google } from "@mui/icons-material";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";


export const LoginPage = () => {

  const handleSubmit = ( event )=>{
    event.preventDefault();
    console.log("Submitted");
    
    
  }

  const handleGoogle = ( event )=>{
    event.preventDefault();
    console.log("Submitted Google");
  }


  return (
    <AuthLayout>
      <Box
        onSubmit={ handleSubmit }
        component="form"
        autoComplete="off"
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              name="email"
              label='email'
              type='email'
              placeholder='example@email.com'
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              name="password"
              label='password'
              type='password'
              placeholder='password'
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button 
              type="submit" 
              variant="contained" 
              sx={{ backgroundColor:'primary.main' }}
              fullWidth>
                Login
              </Button>
            </Grid>

            <Grid item xs={12} sm={6} >
              <Button 
              variant="contained" 
              sx={{ backgroundColor:'primary.main' }}
              onClick={ handleGoogle }
              fullWidth 
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end' sx={{ color:'primary.main' }}> Don't have an account?&nbsp; 
            <Link color='inherit' to='/auth/register'>
            <Typography sx={{ color:'primary.main'}}>
              Create a new one.
            </Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  )
}
