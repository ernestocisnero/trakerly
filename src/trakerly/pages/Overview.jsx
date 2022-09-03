import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../appStore/Thunks/dataThunks";
import { ListData } from "../components";
import { TrakerlyLayout } from "../layout/TrakerlyLayout";


export const Overview = () => {
  const dispatch = useDispatch();
  const { income, expense } = useSelector(state => state.data);
  console.log(expense);
  useEffect(() => {
    dispatch(getData());
  }, [])

  return (
    <TrakerlyLayout>
      <Box sx={{ display: 'flex', mx: 5 }}>
        <ListData data={income} type="Incomes" />
        <ListData data={expense} type="Expenses"/>
      </Box>

    </TrakerlyLayout>
  )
}
