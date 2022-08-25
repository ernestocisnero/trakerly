import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { login, logout } from '../appStore/Slices/authSlice';
import { LoadingProgress } from '../auth/components/LoadingProgress';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { firebaseAuth } from '../firebase/config';
import { LandingPage } from '../pages/LandingPage';
import { TrakerlyRoutes } from '../trakerly/routes/TrakerlyRoutes';

export const AppRouter = () => {

  // const dispatch = useDispatch();
  //const { status } = useSelector( state => state.auth );

  // useEffect(() => {
  //   onAuthStateChanged(firebaseAuth, user =>{
  //     if(!user) return dispatch( logout() );

  //     dispatch( login( user ) );
  //   })
  // },[])
  
  //if( status === 'checking' ) return <LoadingProgress />
  return (
    <Routes>
        <Route path='trakerly/*' element={ <TrakerlyRoutes /> }/>
        <Route path='auth/*' element={ <AuthRoutes /> }/>
        <Route path='/' element={ <LandingPage /> }/>
    </Routes>
  )
}
