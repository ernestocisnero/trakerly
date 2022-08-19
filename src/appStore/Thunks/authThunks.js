import { registerWithEmailPassword } from "../../firebase/providers";
import { authenticating, login, logout } from "../Slices/authSlice"

export const RegisterNewUser = ( { name, email, password } )=>{
    return async ( dispatch )=>{
        dispatch( authenticating() );

        const response = await registerWithEmailPassword( name, email, password );

        if( !response.ok ) return dispatch( logout( response ) );
        
        dispatch( login( response ) )

    }
}