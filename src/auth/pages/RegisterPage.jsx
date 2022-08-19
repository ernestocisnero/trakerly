import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthLayout } from "../layout/AuthLayout";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

export const RegisterPage = () => {
  
  const { register, handleSubmit, formState:{ errors } } = useForm({ criteriaMode: "all" });

  const validateLength = (value)=>{ 
    if( value.length < 6 ) return "Password should be at least 6 characters length";
  }

  const onSubmit = ( data )=>{
    const { name, email, password } = data;
    console.log(name, email, password);
  }


  return (
    <AuthLayout>
      <Box
        onSubmit={ handleSubmit(onSubmit) }
        component="form"
        autoComplete="off"
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              {...register('name', { required: true })}
              label='name'
              type='text'
              placeholder='John Doe'
              fullWidth
              />
              {errors.name && <Typography sx={{ color:'error.main' }}>Name is required.</Typography>}
          </Grid>
          
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

          <Grid container direction='row' justifyContent='end' sx={{ color:'primary.main' }}>Already have an account?&nbsp;  
            <Link  color='inherit' to='/auth'>
              <Typography sx={{ color:'primary.main'}}>
                Login.
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  )
}
