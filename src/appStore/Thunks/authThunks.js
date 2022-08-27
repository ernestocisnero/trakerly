import { LogOut, registerWithEmailPassword, SignInGoogle, SigninUserEmailPassword } from "../../firebase/providers";
import { authenticating, login, logout } from "../Slices/authSlice"




export const RegisterNewUser = ( { name, email, password } )=>{
    return async ( dispatch )=>{
        dispatch( authenticating() );

        const response = await registerWithEmailPassword( name, email, password );

        if( !response.ok ) return dispatch( logout( response ) );
        
        dispatch( login( response ) )

    }
}

export const LogInUserWithEmailPassword = ( { email, password } )=>{
    
    return async (dispatch)=>{

        dispatch( authenticating() );
        
        const response = await SigninUserEmailPassword( email, password );

        if( !response.ok ) return dispatch( logout( response ) );
        
        dispatch( login( response ) )
    }
}

export const SignInWithGoogle = ()=>{

    return async ( dispatch )=>{
        dispatch( authenticating() );

        const response = await SignInGoogle();
        
        if( !response.ok ) return dispatch( logout( response ) );
        
        dispatch( login( response ) )
        
    }
}

export const UserLogOut = ()=>{
    return async ( dispatch )=>{
        const result = await LogOut();

        if(!result.ok) return console.log('An error has occured at sign-out', result.error);

        dispatch( logout() );
    }
}