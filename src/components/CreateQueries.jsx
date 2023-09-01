import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./CreateQueries.css"
import "./estilos.css"

const url = "http://localhost:8080/api/v1/consultas"


const CreateQueries = () => {

    const [fecha, setFecha] = useState("")
    const [tecnologia, setTecnologia] = useState("")
    const [desarrollador, setDesarrollador] = useState("")
    const [localizacion, setLocalizacion] = useState("")
    const [comentario, setComentario] = useState("")

    const [tecnologiaDespleg, setTecnologiaDespleg] = useState("")
    const [desarrolladorDespleg, setDesarrolladorDespleg] = useState(false)
    const [localizacionDespleg, setLocalizacionDespleg] = useState(false)
    

    const navigate =useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(url, { fecha:fecha, tecnologia: tecnologia, desarrollador: desarrollador, localizacion: localizacion, comentario: comentario })
        
        navigate("/")
    }

  return (
    <>
    <div className="crear-cita">
       <h2> crear cita</h2>

        <form onSubmit={store}>
            <div>
                <label>Seleccionar fecha y hora</label>
                <input type="datetime-local" value={fecha} onChange={(e) => setFecha(e.target.value)}/>

            </div>
            <div>
                {/* <label>Tecnología</label> */}
                {/* <input type="text" value={tecnologia} onChange={(e) => setTecnologia(e.target.value)}/> */}
                <button onClick={(e) => {e.preventDefault(); setTecnologiaDespleg(!tecnologiaDespleg)}}>Selecciona tecnología</button>
                {tecnologiaDespleg &&(
                    <select value={tecnologia} onChange={(e) => setTecnologia(e.target.value)}>
                        <option value="java">Java</option>
                        <option value="javascript">JavaScript</option>
                        <option value="react">React</option> 
                    </select>
                )}
                
            </div>
            <div>
                {/* <label>Desarrollador</label>
                <input type="text" value={desarrollador} onChange={(e) => setDesarrollador(e.target.value)}/> */}

                <button onClick={(e) => {e.preventDefault(); setDesarrolladorDespleg(!desarrolladorDespleg)}}>Selecciona desarrollador</button>
                {desarrolladorDespleg && (
                    <select value={desarrollador} onChange={(e) => setDesarrollador(e.target.value)}>
                        <option value="albert">Albert</option>
                        <option value="yue">Yue</option>
                        <option value="ana">Ana</option>
                    </select>
                )}
                
            </div>
            <div>
                {/* <label>Localizacín</label>
                <input type="text" value={localizacion} onChange={(e) => setLocalizacion(e.target.value)}/> */}
                <button onClick={(e) => {e.preventDefault(); setLocalizacionDespleg(!localizacionDespleg)}}>Selecciona localización</button>
                {localizacionDespleg && (
                    <select value={localizacion} onChange={(e) => setLocalizacion(e.target.value)}>
                        <option value="barcelona">Barcelona</option>
                        <option value="bilbao">Bilbao</option>
                        <option value="sansebastian">San Sebasian</option>   
                    </select>
                )}
                
            </div>
            <div>
                <label>Comentario</label>
                <textarea name="" id="" cols="30" rows="10" value={comentario} onChange={(e) => setComentario(e.target.value)}></textarea>
            </div>
            <button type="submit">Crear consulta</button>
            

        </form> 
    </div>
        
        
    </>
  )
}

export default CreateQueries