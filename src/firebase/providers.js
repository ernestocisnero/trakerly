import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { firebaseAuth } from "./config";



const provider = new GoogleAuthProvider();

//Register new user with email and password on firebase
export const registerWithEmailPassword = async ( name, email, password )=>{
    try {
        const { user } = await createUserWithEmailAndPassword(firebaseAuth, email, password);
        await updateProfile( firebaseAuth.currentUser, {displayName: name} );
        
        return {
            ok:true,
            displayName: user.displayName,
            email: user.email,
            uid: user.uid,
            photoURL: user.photoURL,
            errorMessage: null
        }

    } catch (error) {
        return {
            ok:false,
            displayName: null,
            email: null,
            uid: null,
            photoURL: null,
            errorMessage: error.message
        }
    }
}

//Login user with email and password on firebase
export const SigninUserEmailPassword = async ( email, password )=>{

    try {
        const { user } = await signInWithEmailAndPassword(firebaseAuth, email, password);
        
        return {
            ok:true,
            displayName: user.displayName,
            email: user.email,
            uid: user.uid,
            photoURL: user.photoURL,
            errorMessage: null
        }

    } catch (error) {
        
        return {
            ok:false,
            displayName: null,
            email: null,
            uid: null,
            photoURL: null,
            errorMessage: error.message
        }
        
    }
}


export const SignInGoogle = async ()=>{

    try {
        const { user } = await signInWithPopup(firebaseAuth, provider);
        return {
            ok:true,
            displayName: user.displayName,
            email: user.email,
            uid: user.uid,
            photoURL: user.photoURL,
            errorMessage: null
        }
    } catch (error) {
        return {
            ok:false,
            displayName: null,
            email: null,
            uid: null,
            photoURL: null,
            errorMessage: error.message
        }
    }

}