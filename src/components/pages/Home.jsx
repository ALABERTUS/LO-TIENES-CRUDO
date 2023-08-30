import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';
import './Home.css';

const url = "http://localhost:8083/api/v1/lo_tienes_crudo";
export const Home = () => {
  const [consultas, setConsultas] = useState([]);

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

  return (
    <>
    <br></br>
    <br></br>
    <br></br>
        <h1>Message</h1>
      
      <div className="box" style={{ backgroundColor: "#0353A4" }}>
        {consultas.map((consulta) => (
          <div className="contenedor" key={consulta.id}>
              <div className="contenedor-data" 
                    style={{
                      border:'1px solid black',
                      width:'300px',
                      textAlign:'center',
                      verticalAlign:'middle'}}>
                    <p>fecha: {consulta.fecha}</p>
                    <p>tecnologia: {consulta.tecnologia}</p>
                    <p>localizacion: {consulta.localizacion}</p>
                    <p>comentario: {consulta.comentario}</p>
                <button>Edit</button>
                <button>Delete</button>
                </div>
                
                </div>
            ))}
     
      </div>
      </>
  );
};
