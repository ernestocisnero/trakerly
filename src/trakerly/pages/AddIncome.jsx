import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material"
import { addIncome } from "../../appStore/Thunks/inputsThunks"
import { TrakerlyLayout } from "../layout/TrakerlyLayout"


const categories = [
  {
    value: 'Salary'
  },
  {
    value: 'Gift'
  },
  {
    value: 'Investment'
  },
  {
    value: 'Other'
  },
];


export const AddIncome = () => {
  const { loading } = useSelector( state => state.inputs);
  const dispatch = useDispatch();

  const [category, setCategpry] = useState('');
  const [ errorNegAmount, setErrorNegAmount ] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({ criteriaMode: "all" });

  const handleChangeCategory = (event) => {
    setCategpry(event.target.value);
  };

  const onSubmit = (incomeData) => {
    setErrorNegAmount(false);
    if(incomeData.income <= 0) return setErrorNegAmount(true);
    dispatch( addIncome( incomeData ) );
  }

  return (
    <TrakerlyLayout>
      <Typography
          variant='h5'
          component='h1'
          sx={{ color: 'primary.main', mb: 3 }}> Enter new income
        </Typography>

      <Box sx={{ display: 'flex', justifyContent:'center' }}>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display:'flex',
            flexDirection:'column',
            mb: 3,
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            {...register('income', { required: true })}
            id="outlined-required"
            label="income amount"
            type='number'
            fullWidth
          />
          {errors.income && <Typography sx={{ color: 'error.main' }}>Please enter an income amount.</Typography>}
          {errorNegAmount && <Typography sx={{ color: 'error.main' }}>Your amount should be greater than 0.</Typography>}

          <TextField
            {...register('category', { required: true })}
            id="outlined-select-currency"
            select
            label="Select"
            value={category}
            onChange={handleChangeCategory}
            fullWidth
          >
            {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
          {errors.category && <Typography sx={{ color: 'error.main' }}>Please select a category.</Typography>}

          <Button
            variant="contained"
            type='submit'
            disabled ={ loading }
            sx={{
              width: '20%',
              color: '#8D8CC0',
              my:5,
              mx: 8,
              backgroundColor: '#D9D9D9',
              ":hover": { backgroundColor: '#D9D9D9' }
            }}
          >Done
          </Button>
        </Box>
      </Box>

    </TrakerlyLayout>
  )
}
