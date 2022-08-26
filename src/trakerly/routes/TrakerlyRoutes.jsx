import { Route, Routes } from "react-router-dom"
import { Overview } from "../pages/Overview"

export const TrakerlyRoutes = () => {
  return (
    <Routes>
      <Route path="/overview" element={ <Overview /> } />
    </Routes>
  )
}
