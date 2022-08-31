import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getData } from "../../appStore/Thunks/dataThunks"
import { TrakerlyLayout } from "../layout/TrakerlyLayout"

export const Overview = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( getData() );
  },[])
  
  return (
    <TrakerlyLayout>
      
    </TrakerlyLayout>
  )
}
