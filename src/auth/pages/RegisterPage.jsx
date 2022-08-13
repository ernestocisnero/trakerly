import { AuthLayout } from "../layout/AuthLayout";
import { Box, Button, Grid, TextField } from "@mui/material";
import { Link } from "react-router-dom";


export const RegisterPage = () => {

  const handleSubmit = ( event )=>{
    event.preventDefault();
    console.log("Submitted");
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
              label='name'
              type='text'
              placeholder='John Doe'
              fullWidth
            />
          </Grid>
          
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='email'
              type='email'
              placeholder='example@email.com'
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='password'
              type='password'
              placeholder='password'
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button 
              type="submit" 
              variant="contained" 
              sx={{ backgroundColor:'primary.main' }}
              fullWidth>
                Create account
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>Already have an account?&nbsp;  
            <Link component={Link} color='inherit' to='/auth' sx={{ ml: 1 }}>
            Login.
            </Link>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  )
}
