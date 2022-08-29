import { collection, addDoc } from "firebase/firestore";
import { firebaseDB } from "../../firebase/config";


export const addIncome = () => {
    return async (dispatch, getState) => {
        const userID = getState().auth.uid;
        

        try {
            const docRef = await addDoc(collection(firebaseDB, `${userID}/input/incomes`), {
                income: 1500,
                category: "Salary",
                date: new Date().getTime() 
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }
}