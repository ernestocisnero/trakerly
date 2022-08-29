import { useDispatch } from 'react-redux';
import { Button } from "@mui/material"
import { addIncome } from "../../appStore/Thunks/inputsThunks"
import { TrakerlyLayout } from "../layout/TrakerlyLayout"

export const AddIncome = () => {

  const dispatch = useDispatch();

  const handleClick = ()=>{
    dispatch( addIncome() );
  }

  return (
    <TrakerlyLayout>
        <Button 
                        variant="contained" 
                        sx={{ color:'#8D8CC0', mx:8, backgroundColor:'#D9D9D9', ":hover":{ backgroundColor:'#D9D9D9' } }}
                        onClick={ handleClick }
                    >
                        Register new income
                    </Button>
    </TrakerlyLayout>
  )
}
