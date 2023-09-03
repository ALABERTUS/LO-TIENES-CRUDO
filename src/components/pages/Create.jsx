import React, { useState } from "react";
import axios from "axios";
import './Create.css';

const url = "http://localhost:8083/api/v1/consultas";

export const Create = () => {
  const [formData, setFormData] = useState({
    fecha: "",
    tecnologia: "",
    desarrollador: "",
    localizacion: "",
    comentario: "",
  });

  const [submitStatus, setSubmitStatus] = useState(null); // Track submit status

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formattedDate = new Date(formData.fecha).toISOString();
      const response = await axios.post(url, {
        fecha: formattedDate, // Convert selected date to timestamp
        tecnologia: formData.tecnologia,
        desarrollador: formData.desarrollador,
        localizacion: formData.localizacion,
        comentario: formData.comentario,

      });
      console.log("Form submitted successfully:", response);
      setSubmitStatus("success"); // Update submit status
      setFormData({
        // Reset form data after successful submission
        fecha: "",
        tecnologia: "",
        desarrollador: "Developer",
        localizacion: "",
        comentario: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error"); // Update submit status
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    // Implement your cancel logic here
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <h1>Create a Form</h1>
      <div className="create-form" >
        <div className="form-contenedor" >
          <br />
          <form onSubmit={handleSubmit}>
            <label htmlFor="date">Select a date:</label>
            <input
              type="datetime-local"
              id="date"
              name="fecha"
              required
              onChange={handleChange}
              value={formData.fecha}
            />
            <br />
            <br />
            <label htmlFor="tech">Select an IT technology:</label>
            <select
              id="tech"
              name="tecnologia"
              onChange={handleChange}
              value={formData.tecnologia}
              required
            > 
              <option value="" disabled>Please choose an option</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
            </select>
            <br />
            <br />
            <label htmlFor="role">Select a role:</label>
            <select
              id="role"
              name="desarrollador"
              onChange={handleChange}
              value={formData.desarrollador}
              required
            > 
              <option value="" disabled>Please choose an option</option>
              <option value="desarrollador">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Tester">Tester</option>
            </select>
            <br />
            <br />
            <label htmlFor="state">Select a state in Spain:</label>
            <select
              id="state"
              name="localizacion"
              onChange={handleChange}
              value={formData.localizacion}
              required
            >
              <option value="" disabled>Please choose an option</option>
              <option value="Madrid">Madrid</option>
              <option value="Barcelona">Barcelona</option>
              <option value="Valencia">Valencia</option>
            </select>
            <br />
            <br />
            <label htmlFor="comments">Comments:</label>

            <textarea
              id="comments"
              name="comentario"
              rows={4}
              cols={50}
              onChange={handleChange}
              
              defaultValue="Please write your comment here"
            />
            <br />
            <br />
            <button type="submit" onClick={handleSubmit}>Submit</button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>

          </form><br />
        </div>

        {submitStatus === "success" && <p>Form submitted successfully!</p>}
        {submitStatus === "error" && (
          <p>There was an error submitting the form.</p>
        )}
      </div>
    </div>
  );
};
