import { API_ENDPOINTS } from "../utils/API"
import { useEffect, useState } from "react"

export const useFetch = ({endpoint, queryParameters = ''})=>{
  
  const [state, setState] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API_ENDPOINTS[endpoint]}${queryParameters}`)
      .then((res) => res.json())
      .then((data) => {
        setState(data)
        setLoading(false)
      })
  }, [queryParameters])
  return ({state, loading, setState, setLoading})
}