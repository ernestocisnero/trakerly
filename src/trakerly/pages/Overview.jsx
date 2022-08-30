import { DataPieChart, DataRadarChart } from "../components"
import { TrakerlyLayout } from "../layout/TrakerlyLayout"

export const Overview = () => {
  return (
    <TrakerlyLayout>
      <DataRadarChart />
      <DataPieChart />
    </TrakerlyLayout>
  )
}
