import { Route, Routes } from "react-router-dom"
import { TemporalPage } from "../pages/TemporalPage"

export const TrakerlyRoutes = () => {
  return (
    <Routes>
      <Route path="temporalPage" element={ <TemporalPage /> } />
    </Routes>
  )
}
