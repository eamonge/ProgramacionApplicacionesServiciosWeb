import React, { useState, useEffect } from 'react'
import { getItems } from '../api/doctoresAPI';
import sampleDoctores from '../utils/sampleDoctores.json';
import AgregarDoctor from './AgregarDoctor';

const CreaciónDoctores = () => {
    const [doctores, setDoctores] = useState(sampleDoctores.doctores); // Llamado al JSON ejemplo

    const [loading, setLoading] = useState(true);

    const handleAgregarDoctor = (nuevoDoctor) => {
        setDoctores(prev => [
            ...prev,
            { id: prev.length + 1, ...nuevoDoctor }
        ]);
    }

    useEffect(() => {
        setTimeout(() => {
            setDoctores(sampleDoctores.doctores);
            setLoading(false);
        }, 3000); // Simula el llamado y carga a un API
    });

    return (
        <div className="tableDiv">
            {loading ? (
                <p>Cargando doctores...</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Cédula</th>
                            <th>Profesión</th>
                            <th>Orígen del título</th>
                            <th>Años de experiencia</th>
                            <th>Especialidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctores.length > 0 ? (
                            doctores.map((docs) =>
                                <tr key={docs.id}>
                                    <th>{docs.id}</th>
                                    <td>{docs.primer_nombre} {docs.Apellido}</td>
                                    <td>{docs.cedula}</td>
                                    <td>{docs.profesion}</td>
                                    <td>{docs.origen_titulo}</td>
                                    <td>{docs.experiencia}</td>
                                    <td>{docs.especialidad}</td>
                                </tr>
                            )
                        ) : "No hay data"}
                    </tbody>
                </table>
            )}
            <br />
            <AgregarDoctor onAddDoc={handleAgregarDoctor} />
        </div>
    )
}

export default CreaciónDoctores