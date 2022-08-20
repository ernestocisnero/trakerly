import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { Google } from "@mui/icons-material";
import { Box, Button, CircularProgress, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { LogInUserWithEmailPassword } from "../../appStore/Thunks/authThunks";


export const LoginPage = () => {

  const dispatch = useDispatch();
  const { status } = useSelector( state=> state.auth );

  const { register, handleSubmit, formState:{ errors } } = useForm({ criteriaMode: "all" });

  const validateLength = (value)=>{ 
    if( value.length < 6 ) return "Password should be at least 6 characters length";
  }


  const onSubmit = ( data )=>{
    dispatch(LogInUserWithEmailPassword( data ));
  }

  const handleGoogle = ( event )=>{
    event.preventDefault();
    console.log("Submitted Google");
  }

  return (
    <AuthLayout>
      <Box
        onSubmit={ handleSubmit( onSubmit ) }
        component="form"
        autoComplete="off"
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              {...register('email', { required: true })}
              label='email'
              type='email'
              placeholder='example@email.com'
              fullWidth
            />
            {errors.email && <Typography sx={{ color:'error.main' }}>Email is required.</Typography>}
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              {...register('password', { required: 'Password is required', validate: validateLength  })}
              label='password'
              type='password'
              placeholder='password'
              fullWidth
            />
            {errors.password  && (<Typography sx={{ color:'error.main' }}>{ errors.password.types.required }</Typography>)}
            {errors.password  && (<Typography sx={{ color:'error.main' }}>{ errors.password.types.validate }</Typography>)}
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button 
              type="submit" 
              variant="contained" 
              sx={{ backgroundColor:'primary.main' }}
              fullWidth>
                { status === 'checking'? <CircularProgress />: <Typography>Login</Typography> }
                
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
