/* import axios from "axios";
import { useState, useEffect } from "react";

    const url = "http://localhost:8080/api/v1/consultas";

const UpdateQueries = ({ queriesId }) => { 
    const [updatedQueries, setUpdatedQueries] = useState({}); 
    const [newTecnologia, setNewTecnologia] = useState("");
    const [newDesarrollador, setNewDesarrollador] = useState("");
    const [newLocalizacion, setNewLocalizacion] = useState("");
    const [newComentario, setNewComentario] = useState("");



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${url}/${queriesId}`);
                setUpdatedQueries(response.data); 
                setNewTecnologia(response.data.tecnologia);
                setNewDesarrollador(response.data.desarrollador);
                setNewLocalizacion(response.data.localizacion);
                setNewComentario(response.data.comentario);
            } catch (error) {
                console.error("Error al obtener los detalles de la consulta", error);
            }
        };
        fetchData();
    }, [queriesId]); 

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${url}/${queriesId}`, {
                tecnologia: newTecnologia,
                desarrollador: newDesarrollador,
                localizacion: newLocalizacion,
                comentario: newComentario
            });
           
        } catch (error) {
            console.error("Error al actualizar la consulta", error);
        }
    };

    return (
        <div className="container">
            
            <h2>Actualizar consulta</h2>
            <form onSubmit={handleUpdate}>
                <div>
                    <label>Nueva Tecnología</label>
                    <input type="text" value={newTecnologia} onChange={(e) => setNewTecnologia(e.target.value)} />
                </div>
                <div>
                    <label>Nuevo Desarrollador</label>
                    <input type="text" value={newDesarrollador} onChange={(e) => setNewDesarrollador(e.target.value)} />
                </div>
                <div>
                    <label>Nueva Localización</label>
                    <input type="text" value={newLocalizacion} onChange={(e) => setNewLocalizacion(e.target.value)} />
                </div>
                <div>
                    <label>Nuevo Comentario</label>
                    <textarea value={newComentario} onChange={(e) => setNewComentario(e.target.value)}></textarea>
                </div>
                <button type="submit">Actualizar consulta</button>
            </form>
        </div>
    );
}

export default UpdateQueries;  */


import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:8080/api/v1/consultas";

const UpdateQueries = ({ queriesId }) => {

 const [fecha, setFecha] = useState("")
 const [tecnologia, setTecnologia] = useState("")
 const [desarrollador, setDesarrollador] = useState("")
 const [localizacion, setLocalizacion] = useState("")
 const [comentario, setComentario] = useState("")

  const [updatedQueries, setUpdatedQueries] = useState({});
  const [newTecnologia, setNewTecnologia] = useState("");
  const [newDesarrollador, setNewDesarrollador] = useState("");
  const [newLocalizacion, setNewLocalizacion] = useState("");
  const [newComentario, setNewComentario] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/${queriesId}`);
        setUpdatedQueries(response.data);
        setNewTecnologia(response.data.tecnologia);
        setNewDesarrollador(response.data.desarrollador);
        setNewLocalizacion(response.data.localizacion);
        setNewComentario(response.data.comentario);
      } catch (error) {
        console.error("Error al obtener los detalles de la consulta", error);
      }
    };
    fetchData();
  }, [queriesId]);


  const navigate =useNavigate()

  const store = async (e) => {
      e.preventDefault()
      await axios.post(url, { fecha:fecha, tecnologia: tecnologia, desarrollador: desarrollador, localizacion: localizacion, comentario: comentario })
      
      navigate("/")
  }

  return (
    <div className="container">
      <h2>Actualizar consulta</h2>

      <form onSubmit={store}>

        <div>

        <button onClick={(e) => {e.preventDefault(); setNewTecnologia(!newTecnologia)}}>Nueva Tecnología</button>
                {newTecnologia &&(
                    <select value={tecnologia} onChange={(e) => setTecnologia(e.target.value)}>
                        <option value="java">Java</option>
                        <option value="javascript">JavaScript</option>
                        <option value="react">React</option> 
                    </select>
                )}

        </div>
        <div>
        <button onClick={(e) => {e.preventDefault(); setNewDesarrollador(!newDesarrollador)}}>Nuevo Desarrollador</button>
                {newDesarrollador &&(
                    <select value={desarrollador} onChange={(e) => setDesarrollador(e.target.value)}>
                        <option value="Albert">Albert</option>
                        <option value="Tue">Yue</option>
                        <option value="Ana">Ana</option> 
                    </select>
                )}
        </div>
        <div>
        <button onClick={(e) => {e.preventDefault(); setNewLocalizacion(!newLocalizacion)}}>Nueva Localización</button>
                {newLocalizacion &&(
                    <select value={localizacion} onChange={(e) => setLocalizacion(e.target.value)}>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Bilbao">Bilbao</option>
                        <option value="San Sebastian">San Sebastian</option> 
                    </select>
                )}
        </div>
        <div>
        <button onClick={(e) => {e.preventDefault(); setNewComentario(!newComentario)}}>Nuevo Comentario</button>
                {newComentario &&(
                    <textarea name="" id="" cols="20" rows="10" value={comentario} onChange={(e) => setComentario(e.target.value)}></textarea>
                )}
        </div>
        <button type="submit">Actualizar consulta</button>
      </form>
    </div>
  );
};

export default UpdateQueries;

