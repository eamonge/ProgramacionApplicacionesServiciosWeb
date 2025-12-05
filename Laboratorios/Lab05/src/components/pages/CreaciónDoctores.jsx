import React, { useState, useEffect } from 'react'
import { getItems } from '../api/doctoresAPI';
import sampleDoctores from '../utils/sampleDoctores.json'; // El uso de un JSON ya estuvo existente en la aplicación desde Lab04
import AgregarDoctor from './AgregarDoctor';
// El effecto drag & drop utiliza la librería @dnd-kit 
// debido a que la librería llama de un API externo y es mejor manera la tabla desde ahí
import { DndContext, closestCenter } from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    useSortable,
    verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// ---- Uso de la librería que hace que los <tr> sean arrastrables (filas de la tabla) ---- //
const SortableRow = ({ doctor }) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: doctor.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        cursor: "grab"
    };

    return (
        <tr ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <th>{doctor.id}</th>
            <td>{doctor.primer_nombre} {doctor.Apellido}</td>
            <td>{doctor.cedula}</td>
            <td>{doctor.profesion}</td>
            <td>{doctor.origen_titulo}</td>
            <td>{doctor.experiencia}</td>
            <td>{doctor.especialidad}</td>
        </tr>
    );
};

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

    // Una vez un elemento <tr> haya sido arrastrado, "rerender" el array
    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (!over || active.id === over.id) return;

        const oldIndex = doctores.findIndex(d => d.id === active.id);
        const newIndex = doctores.findIndex(d => d.id === over.id);

        setDoctores(arrayMove(doctores, oldIndex, newIndex));
    };

    return (
        <div className="tableDiv">
            {loading ? (
                <p>Cargando doctores...</p>
            ) : (
                <DndContext
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                >
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
                            {/* Nuevo código con el efecto drag and drop */}
                            <SortableContext
                                items={doctores.map(d => d.id)}
                                strategy={verticalListSortingStrategy}
                            >
                                <tbody>
                                    {doctores.map(docs => (
                                        <SortableRow key={docs.id} doctor={docs} />
                                    ))}
                                </tbody>
                            </SortableContext>
                    </table>

                    {/* Viejo código sin el drag and drop */}
                    {/* 
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
                    
                    */}
                </DndContext>
            )}
            <br />
            <AgregarDoctor onAddDoc={handleAgregarDoctor} />
        </div>
    )
}

export default CreaciónDoctores