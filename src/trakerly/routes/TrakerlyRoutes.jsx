import { Route, Routes } from "react-router-dom"
import { Overview, AddIncome, MyAccount, AddExpense } from "../pages"


export const TrakerlyRoutes = () => {
  return (
    <Routes>
      <Route path="/overview" element={ <Overview /> } />
      <Route path="/addIncome" element={ <AddIncome /> } />
      <Route path="/addExpense" element={ <AddExpense /> } />
      <Route path="/myaccount" element={ <MyAccount /> } />
    </Routes>
  )
}
