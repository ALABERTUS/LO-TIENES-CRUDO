import axios from "axios"
import { useEffect, useState } from "react"
import "./ShowQueries.css"
import { useNavigate } from "react-router-dom"
import "./estilos.css"


const url = "http://localhost:8080/api/v1/consultas"

const ShowQueries = () => {

    const [queries, setQueries] = useState([])
    useEffect( () =>{
        getAllQueries()
    }, [])

    const Navigate = useNavigate()

    const getAllQueries = async () => {
      try {
          const response = await axios.get(url);
          console.log(response.data)
          setQueries(response.data);
      } catch (error) {
          console.error("Error al obtener las consultas", error);
      }
  }

    const handleDelete = async (id)  => {
      try {
        await axios.delete(`${url}/${id}`);
        getAllQueries();
      } catch (error) {
        console.error("Error al eliminar la consulta", error)
      }
    }



  return (
    <>   
    <h1>Los problemas modernos requieren soluciones modernas</h1>
       {
                queries.map(queries =>(
                   <div className="contenedor" key={queries.id}>
                        <div className="cel">
                          <input type="datetime-local" defaultValue={queries.fecha} />
                        </div>
                        <div className="cel">
                          <h3>{queries.tecnologia}</h3>
                          <h3> {queries.desarrollador} </h3>
                          <h3> {queries.localizacion} </h3>
                        </div>
                        <div className="cel">
                          <p> {queries.comentario} </p>
                        </div>
                        <div className="cel">
                          <button onClick={() => handleDelete(queries.id)}>Eliminar</button>
                          <button onClick={() => (queries.id)}>Actualizar</button>
                        </div>
                        
                    </div> 
                    
                ))
            }
        <button onClick={() => Navigate("/create")}>Crear otra consulta</button>
    </>
  )
}

export default ShowQueries