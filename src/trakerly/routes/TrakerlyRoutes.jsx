import { Route, Routes } from "react-router-dom"
import { Overview, AddIncome, AddOutcome, MonthlyView } from "../pages"


export const TrakerlyRoutes = () => {
  return (
    <Routes>
      <Route path="/overview" element={ <Overview /> } />
      <Route path="/addIncome" element={ <AddIncome /> } />
      <Route path="/addOutcome" element={ <AddOutcome /> } />
      <Route path="/monthlyView" element={ <MonthlyView /> } />
    </Routes>
  )
}
