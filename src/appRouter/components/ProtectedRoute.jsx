import { Navigate } from "react-router-dom"


export const ProtectedRoute = ( { status, children } ) => {

    if( status !== 'authenticated' ) return <Navigate to="/" replace />
    return children
}
