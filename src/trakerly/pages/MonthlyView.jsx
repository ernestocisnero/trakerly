import { DataBarChart, DataLineChart, DataPieChart, DataRadarChart } from "../components";
import { TrakerlyLayout } from "../layout/TrakerlyLayout";




export const MonthlyView = () => {

  
  return (
    <TrakerlyLayout>
      <DataLineChart />
      <DataBarChart />
      <DataPieChart />
      <DataRadarChart />
    </TrakerlyLayout>
  )
}
