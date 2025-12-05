import React, { useState } from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import '../styles/popupModal.css';

const AgergarItem = (props) => {
    const [formData, setFormData] = useState({
        product_name: "",
        date: "",
        monto_producto: "",
        cantidad: "",
        sucursal: ""
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

        props.onAddItem(formData);
        setFormData({
            product_name: "",
            date: "",
            monto_producto: "",
            cantidad: "",
            sucursal: ""
        }); // Elimina datos una vez agregados
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

    return (props.trigger) ? (

        <div className='popupModal'>
            <div className="contentModal">
                <button
                    className='btnClose'
                    onClick={() => props.setTrigger(false)}
                >
                    <CancelIcon />
                </button>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="product_name"
                        placeholder="Nombre"
                        value={formData.product_name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text" // Se cambio el type a text para aplicar la lógica del regex numérico
                        name="monto_producto"
                        placeholder="Monto"
                        value={formData.monto_producto}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text" // Se cambio el type a text para aplicar la lógica del regex numérico
                        name="cantidad"
                        placeholder="Cantidad"
                        value={formData.cantidad}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="sucursal"
                        placeholder="Sucursal"
                        value={formData.sucursal}
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
        </div>
    ) : "";
}

export default AgergarItem