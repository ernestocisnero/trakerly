import { useDispatch } from 'react-redux';
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material"
import { addIncome } from "../../appStore/Thunks/inputsThunks"
import { TrakerlyLayout } from "../layout/TrakerlyLayout"
import { useState } from 'react';


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

  const dispatch = useDispatch();

  const [category, setCategpry] = useState('');

  const handleChangeCategory = (event) => {
    setCategpry(event.target.value);
  };

  const handleClick = () => {
    //dispatch( addIncome() );
  }

  return (
    <TrakerlyLayout>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'space-around' }}>
        <Typography
          variant='h5'
          component='h1'
          sx={{ color: 'primary.main', mb: 3 }}> Enter new income
        </Typography>

        <Box
          component="form"
          sx={{
            mb:3,
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'space-around',
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
            <TextField
              required
              id="outlined-required"
              label="income amount"
              type='number'
              helperText="Please select one category"
            />

            <TextField
              required
              id="outlined-select-currency"
              select
              label="Select"
              value={category}
              onChange={handleChangeCategory}
              helperText="Please select one category"
            >
              {categories.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
        </Box>

        <Button
          variant="contained"
          sx={{
            width: '20%',
            color: '#8D8CC0',
            mx: 8,
            backgroundColor: '#D9D9D9',
            ":hover": { backgroundColor: '#D9D9D9' }
          }}
          onClick={handleClick}
        >Done
        </Button>
      </Box>

    </TrakerlyLayout>
  )
}
