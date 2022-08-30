import { DataBarChart, DataLineChart } from "../components";
import { TrakerlyLayout } from "../layout/TrakerlyLayout";


export const MonthlyView = () => {

  return (
    <TrakerlyLayout>
      <DataLineChart />
      <DataBarChart />
    </TrakerlyLayout>
  )
}
