import React, { useEffect, useState } from 'react'
import '../styles/agregarDocs.css';

const AgregarDoctor = ({ onAddDoc}) => {
    const [formData, setFormData] = useState({
        cedula: "",
        primer_nombre: "",
        Apellido: "",
        profesion: "",
        origen_titulo: "",
        experiencia: "",
        especialidad: ""
    });

    //Manejo de text inputs
    const handleChange = (e) => {
        const { name, value } = e.target;

        // Lógica para limitar los inputs que solo requieren valores numéricos
        const numericFields = ["monto_producto", "cantidad"]; // Limita la lógica a los inputs de valores numéricos
        let newValue = value;

        // Lógica punto #2
        if (numericFields.includes(name)) {
            const regex = /[^0-9]/g;
            newValue = value.replace(regex, "");
        }
        setFormData((prev) => ({ ...prev, [name]: newValue }));
    }

    // Manejo de submit del form
    const handleSubmit = (e) => {
        e.preventDefault();
        onAddDoc(formData);
        setFormData({
            cedula: "",
            primer_nombre: "",
            Apellido: "",
            profesion: "",
            origen_titulo: "",
            experiencia: "",
            especialidad: ""
        });
    };

    // Eliminación de inputs de texto
    const handleCancel = () => {
        setFormData({
            product_name: "",
            date: "",
            monto_producto: "",
            cantidad: "",
            sucursal: ""
        });
    }

    return (
        <div className='agregarDoctores-Div'>
            <form
                onSubmit={handleSubmit}
                // style={{backgroundColor: 'pink'}}
            
            >
                <input
                    type="text"
                    name="cedula"
                    placeholder="Cédula"
                    value={formData.cedula}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="primer_nombre"
                    placeholder="Primer Nombre"
                    value={formData.primer_nombre}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="Apellido"
                    placeholder="Apellido"
                    value={formData.Apellido}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="profesion"
                    placeholder="Profesión"
                    value={formData.profesion}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="experiencia"
                    placeholder="Años de experiencia"
                    value={formData.experiencia}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="especialidad"
                    placeholder="Especialidad"
                    value={formData.especialidad}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="origen_titulo"
                    placeholder="Universidad del título"
                    value={formData.origen_titulo}
                    onChange={handleChange}
                    required
                />
                <br />
                <button
                    type="submit"
                    className='btnSubmit'
                >
                    Agregar
                </button>
                <br />
                <br />
                <button
                    type="submit"
                    className='btnSubmit btnCancel'
                    onClick={handleCancel}
                >
                    Cancelar
                </button>
            </form>
        </div>
    )
}

export default AgregarDoctor