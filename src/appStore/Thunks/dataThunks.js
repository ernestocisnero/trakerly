import { loadingData, setData } from "../Slices/dataSlice"


export const getData = ()=>{
    return async ( dispatch )=>{

        dispatch( loadingData( true ) )
    }
}