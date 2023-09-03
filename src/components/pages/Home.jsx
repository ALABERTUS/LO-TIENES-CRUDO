import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { formatDate } from './DateUtils';
import './Home.css';

const url = "http://localhost:8083/api/v1/consultas";
export const Home = () => {
  const [consultas, setConsultas] = useState([]);
  const [selectedConsulta, setSelectedConsulta] = useState(null);
  const [updatedFecha, setUpdatedFecha] = useState('');
  const [updatedTecnologia, setUpdatedTecnologia] = useState('');
  const [updatedDesarrollador, setUpdatedDesarrollador] = useState('');
  const [updatedLocalizacion, setUpdatedLocalizacion] = useState('');
  const [updatedComentario, setUpdatedComentario] = useState('');

  const [showDetails, setShowDetails] = useState(false);


  useEffect(() => {
    getAllConsultas();
  }, []);

  const getAllConsultas = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;
   
      setConsultas(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (consulta) => {
    setSelectedConsulta(consulta);
    setUpdatedFecha(consulta.fecha)
    setUpdatedTecnologia(consulta.tecnologia);
    setUpdatedDesarrollador(consulta.desarrollador);
    setUpdatedLocalizacion(consulta.localizacion);
    setUpdatedComentario(consulta.comentario);
  };

  const handleEditFormSubmit = async (e) => {
    e.preventDefault();
    const updatedConsulta = {
      ...selectedConsulta,
      fecha: updatedFecha,
      tecnologia: updatedTecnologia,
      desarrollador: updatedDesarrollador,
      localizacion: updatedLocalizacion,
      comentario: updatedComentario,
    };

    try {
      await axios.put(`${url}/${selectedConsulta.id}`, updatedConsulta);


      setConsultas((prevConsultas) =>
        prevConsultas.map((consulta) =>
          consulta.id === selectedConsulta.id ? updatedConsulta : consulta
        )
      );

      closeEditForm();
      console.log('Consulta updated:', selectedConsulta.id);
    } catch (error) {
      console.log(error);
    }
  };

  const closeEditForm = () => {
    setSelectedConsulta(null);
    setUpdatedFecha('');
    setUpdatedTecnologia('');
    setUpdatedDesarrollador('');
    setUpdatedLocalizacion('');
    setUpdatedComentario('');
  };

  const handleDelete = async (consultaId) => {
    try {
      await axios.delete(`${url}/${consultaId}`);
      setConsultas((prevConsultas) =>
        prevConsultas.filter((consulta) => consulta.id !== consultaId)
      );
      console.log('Consulta deleted:', consultaId);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (

    <div>
      <br />
      <br />
      <br />
      <h1 style={{color:'#061A40'}}>Message</h1>
      <div className="box" style={{ backgroundColor: '#0353A4' }}>
        {consultas.map((consulta) => (
          <div className="contenedor" key={consulta.id}>
            <div  className='fecha'>
              {formatDate(consulta.fecha)}
            </div>
            <div className='message'>
              <span>{consulta.tecnologia}</span> 
              <span> {consulta.desarrollador}</span>
              <span>{consulta.localizacion}</span>
              {showDetails && (
    <div className="comentario">{consulta.comentario}</div>
  )}
            </div>
            <div className='edit-delete-detail'>
              <button onClick={toggleDetails}>{showDetails ? 'Hide' : 'Details'}</button>
              <FaEdit onClick={() => handleUpdate(consulta)} size={30} style={{ color: '#061A40' }} />
              <FaTrash onClick={() => handleDelete(consulta.id)} size={30} style={{ color: '#2c8a0a' }} />
            </div>
          </div>
        ))}
      </div>
      {selectedConsulta && (
        <div className="edit-form">
          <h3>Update Consulta</h3>
          <form onSubmit={handleEditFormSubmit}>
            <label>Fecha</label>
            <input
              type="datetime-local"
              value={updatedFecha}
              onChange={(e) => setUpdatedFecha(e.target.value)}
            />
            <label>Tecnologia:</label>
            <input
              type="text"
              value={updatedTecnologia}
              onChange={(e) => setUpdatedTecnologia(e.target.value)}
            />
            <label>Desarrollador:</label>
            <input
              type="text"
              value={updatedDesarrollador}
              onChange={(e) => setUpdatedDesarrollador(e.target.value)}
            />
            <label>Localizacion:</label>
            <input
              type="text"
              value={updatedLocalizacion}
              onChange={(e) => setUpdatedLocalizacion(e.target.value)}
            />
            <label>Comentario:</label>
            <textarea
              value={updatedComentario}
              onChange={(e) => setUpdatedComentario(e.target.value)}
            ></textarea>
            <div>
              <button type="submit">Save</button>
              <button onClick={closeEditForm}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};