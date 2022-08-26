import { Navigate } from "react-router-dom"

export const ProtectedAuthRoute = ({ status, children }) => {

    if( status === 'authenticated' ) return <Navigate to="/trakerly/overview" replace />

    return children
}
