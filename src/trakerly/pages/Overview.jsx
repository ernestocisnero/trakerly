import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getData } from "../../appStore/Thunks/dataThunks"
import { DataPieChart, DataRadarChart } from "../components"
import { TrakerlyLayout } from "../layout/TrakerlyLayout"

export const Overview = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch( getData() );
  },[])
  
  const { income, expense } = useSelector(state => state.data);
  console.log(income);
  console.log(expense);
  return (
    <TrakerlyLayout>
      <DataRadarChart />
      <DataPieChart />
    </TrakerlyLayout>
  )
}
