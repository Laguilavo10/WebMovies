import {useEffect, useState} from "react"
import "../../styles/Recent.css"
import {API_ENDPOINTS} from "../../utils/API";


export function Recent() {
  let uwu = [1, 2, 3, 4, 5]


  const [loading, setLoading] = useState(true);
  const [trending, setTrending] = useState(null);

  useEffect(() => {
    fetch(API_ENDPOINTS.genre)
      .then((res)=>res.json())
      .then((data)=>console.log(data))
  }, []);
  
  
  
  
  return (
    <>
      <section className="recent-container">
        <h2>Nuevos Lanzamientos</h2>
        <div className="recent-poster--container">
          {uwu.map((poster, id) => (
            <div className="recent-poster" key={id}>
              <img
                src="https://img.wattpad.com/cover/226102453-352-k45923.jpg"
                alt={poster}
              />
              <div className="shadow-poster"></div>
              <p>Pelicula</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
