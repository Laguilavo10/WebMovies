import { useNavigate } from "react-router-dom"


export const RedirectMovie = (title, info)=>{
  let navigate = useNavigate()
  navigate(`/movie?movie=${title}`, {state: info})
  return (
    null
  )
}