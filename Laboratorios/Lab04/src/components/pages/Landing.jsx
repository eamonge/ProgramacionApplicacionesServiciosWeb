import React, { use, useState } from 'react'
// usa data pre-establecida de un json externo para popular la tabla de la página principal
import sampleData from '../utils/sampleData.json';
import AgergarItem from './AgergarItem';
import '../styles/table.css'

const Landing = () => {
    // const { productosMedicina } = sampleData;
    const [popup, setPopUp] = useState(false);
    const [productosMedicina, setProductosMedicina] = useState(sampleData.productosMedicina);

    // Agregar ítem y manejo de ID
    const addItem = (newItem) => {
        const lastId = productosMedicina.length > 0 ? parseInt(productosMedicina[productosMedicina.length - 1].id, 10) : 0; 

        // Punto 04: Se agrega al array de sampleData.json externo y se agrega valores a la lista pre-existente
        const itemWithId =  {
            ...newItem,
            id: (lastId + 1).toString() // Obtiene el último valor de la lista y le agrega un +1 (si es 11, el nuevo ingreso es 12)
        };
        setProductosMedicina((prev) => [...prev, itemWithId]);
    }

    return (
        <div className='tableDiv'>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Fecha</th>
                        <th>Nombre</th>
                        <th>Monto</th>
                        <th>Cantidad</th>
                        <th>Sucursal</th>
                    </tr>
                </thead>
                <tbody>
                    {productosMedicina.length > 0 ? (
                        productosMedicina.map((items) =>
                            <tr key={items.id}>
                                <th>{items.id}</th>
                                <td>{items.product_name}</td>
                                <td>{items.date}</td>
                                <td>{items.monto_producto}</td>
                                <td>{items.cantidad}</td>
                                <td>{items.sucursal}</td>
                            </tr>
                        )
                    ) : "No hay data"}
                </tbody>
            </table>
            <br />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Fecha</th>
                        <th>Nombre</th>
                        <th>Monto</th>
                        <th>Cantidad</th>
                        <th>Sucursal</th>
                    </tr>
                </thead>
                <tbody>
                    {productosMedicina.length > 0 ? (
                        productosMedicina.map((items) =>
                            <tr key={items.id}>
                                <th>{items.id}</th>
                                <td>{items.product_name}</td>
                                <td>{items.date}</td>
                                <td>{items.monto_producto}</td>
                                <td>{items.cantidad}</td>
                                <td>{items.sucursal}</td>
                            </tr>
                        )
                    ) : "No hay data"}
                </tbody>
            </table>
            <br />
            <button 
                onClick={() => setPopUp(true)}
                className='btnAddItem'
            >
                Agregar ítem
            </button>
            <AgergarItem
                trigger={popup}
                setTrigger={setPopUp}
                onAddItem={addItem}
            />
        </div>
    )
}

export default Landing