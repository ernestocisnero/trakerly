import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { firebaseAuth } from "./config";

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