import React, { useState } from 'react'
// import ''

import sampleData from '../utils/sampleData.json';
import AgergarItem from './AgergarItem';

const Landing = () => {
    const { productosMedicina } = sampleData;
    const [popup, setPopUp] = useState(false);

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
            <button onClick={() => setPopUp(true)}>Agregar ítem</button>
            <AgergarItem trigger={popup} setTrigger={setPopUp}/>
        </div>
    )
}

export default Landing