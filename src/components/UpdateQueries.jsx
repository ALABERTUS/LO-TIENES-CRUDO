import axios from "axios";
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

export default UpdateQueries; 
