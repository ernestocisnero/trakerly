import { collection, getDocs, query, where } from "firebase/firestore";
import { firebaseDB } from "../../firebase/config";
import { loadingData, setExpenseData, setIncomeData } from "../Slices/dataSlice"

export const getData = ()=>{
    return async ( dispatch, getState )=>{
        const IncomeData = [];
        const ExpenseData = [];
        const userID = getState().auth.uid; 

        dispatch( loadingData( true ) );

        try {
            const qIncome = query(collection(firebaseDB, `${userID}`), where("input", "==", "income"));
            const qExpense = query(collection(firebaseDB, `${userID}`), where("input", "==", "expense"));
            const qIncomeSnapshot = await getDocs(qIncome);
            const qExpenseSnapshot = await getDocs(qExpense);

            qIncomeSnapshot.forEach((doc) => {
                IncomeData.push({
                    category: doc.data().category,
                    input: doc.data().input,
                    income: doc.data().income,
                }) 
            })
            
            qExpenseSnapshot.forEach((doc) => {
                ExpenseData.push({
                    category: doc.data().category,
                    input: doc.data().input,
                    expense: doc.data().expense,
                })
            })
        } catch (error) {
            console.log('ERROR!', error);
        }

        dispatch(setIncomeData(IncomeData));
        dispatch(setExpenseData(ExpenseData));

        dispatch( loadingData( false ) );
    }
}