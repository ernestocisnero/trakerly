import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { login, logout } from '../appStore/Slices/authSlice';
import { LoadingProgress } from '../auth/components/LoadingProgress';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { firebaseAuth } from '../firebase/config';
import { LandingPage } from '../pages/LandingPage';
import { NotFound } from '../pages/NotFound';
import { TrakerlyRoutes } from '../trakerly/routes/TrakerlyRoutes';
import { ProtectedAuthRoute } from './components/ProtectedAuthRoute';
import { ProtectedRoute } from './components/ProtectedRoute';

export const AppRouter = () => {

  const { status } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, user =>{

      if(!user) return dispatch( logout() );
      const { email, displayName, photoURL, uid } = user;
      dispatch( login( { email, displayName, photoURL, uid } ) )
    })
  },[])
  
  if( status === 'checking' ) return <LoadingProgress />

  return (
    <Routes>
        <Route path='trakerly/*' element={ <ProtectedRoute status={ status }> <TrakerlyRoutes /> </ProtectedRoute>  }/>
        <Route path='auth/*' element={  <ProtectedAuthRoute status={ status } > <AuthRoutes /> </ProtectedAuthRoute> }/>  
        <Route path='/' element={  <ProtectedAuthRoute status={ status } > <LandingPage /> </ProtectedAuthRoute> }/>
        <Route path='/*' element={ <NotFound /> }/>
    </Routes>
  )
}
