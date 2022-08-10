import { Routes, Route } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { TrakerlyRoutes } from '../trakerly/routes/TrakerlyRoutes';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={ <TrakerlyRoutes /> }/>
        <Route path='auth' element={ <AuthRoutes /> }/>
    </Routes>
  )
}
