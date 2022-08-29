import { collection, addDoc } from "firebase/firestore";
import { firebaseDB } from "../../firebase/config";
import { income, loading } from "../Slices/inputsSlice";


export const addIncome = (incomeData) => {
    return async (dispatch, getState) => {

        dispatch( loading() );

        const userID = getState().auth.uid;
        incomeData.input = 'income';
        incomeData.date = new Date().getTime();

        try {
            const docRef = await addDoc(collection(firebaseDB, `${userID}/input/incomes`), incomeData);
            console.log("Document written with ID: ", docRef.id);    
            dispatch(income(incomeData));
        } catch (e) {
            console.error("Error adding document: ", e);
        }

        

    }
}