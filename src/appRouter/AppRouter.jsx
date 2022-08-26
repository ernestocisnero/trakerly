import { Routes, Route } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { LandingPage } from '../pages/LandingPage';
import { TrakerlyRoutes } from '../trakerly/routes/TrakerlyRoutes';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='trakerly/*' element={ <TrakerlyRoutes /> }/>
        <Route path='auth/*' element={ <AuthRoutes /> }/>  
      <Route path='/*' element={ <LandingPage /> }/>
    </Routes>
  )
}
