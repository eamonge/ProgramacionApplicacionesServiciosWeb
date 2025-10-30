import React, { useState } from 'react'
import sampleData from '../utils/sampleData.json';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../styles/items.css';

const Items = () => {
    const [productosMedicina, setProductosMedicina] = useState(sampleData.productosMedicina);

    const [isAdded, setIsAdded] = useState({}); // Revisa si se agregó el ítem


    const handleClick = (id) => {
        setIsAdded(prev => ({ ...prev, [id]: true }));

        // Elimina el ítem una vez haya transcurrido el efecto css translateX
        setTimeout(() => {
            setProductosMedicina(prev => prev.filter(item => item.id !== id));
        }, 400); // Hace la duración de 400 MS
    };


    return (
        <div className='tableDiv'>
            {
                productosMedicina.length > 0 ? (
                    productosMedicina.map((items) =>
                        <div className={`cardWrapper ${isAdded[items.id] ? 'removedItem' : ''}`}>
                            <div className="cardMain">
                                <Card
                                    key={items.id}
                                    // className={isAdded[items.id] ? 'cardMain removedItem' : 'cardMain'}
                                >
                                    <CardMedia
                                        sx={{ height: 140 }}
                                        image={items.img}
                                        title="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {items.product_name}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            Fecha: {items.date}, Cantidad: {items.cantidad}, Monto: {items.monto_producto}, Sucursal: {items.sucursal}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                            size="small"
                                            onClick={() => handleClick(items.id)} // Ejecuta el efecto translateX
                                        >
                                            Agregar Ítem
                                        </Button>
                                    </CardActions>
                                </Card>
                            </div>
                        </div>
                    )

                ) : "No hay data"
            }
        </div>
    )
}

export default Items