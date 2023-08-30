import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const url = "http://localhost:8083/api/v1/lo_tienes_crudo";

const App = () => {
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
        <div>
            {consultas.map((consulta) => (
              <div>
                    <p>fecha: {consulta.fecha}</p>
                    <p>tecnologia: {consulta.tecnologia}</p>
                    <p>localizacion: {consulta.localizacion}</p>
                    <p>comentario: {consulta.comentario}</p>
                </div>
            ))}
        </div>
    );
};
export default App