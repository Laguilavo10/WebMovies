import { useNavigate } from "react-router-dom"


export const useRedirectMovie = (title, info) => {
  let navigate = useNavigate();
  return () => navigate(`/movie?movie=${title}`, { state: info });
};