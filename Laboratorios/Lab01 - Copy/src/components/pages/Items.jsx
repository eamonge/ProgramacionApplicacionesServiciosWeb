import React, { useState } from 'react'
import sampleData from '../utils/sampleData.json';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Items = () => {
    const [productosMedicina, setProductosMedicina] = useState(sampleData.productosMedicina);
    return (
        <div className='tableDiv'>
            {
                productosMedicina.length > 0 ? (
                    productosMedicina.map((items) =>
                        <Card sx={{ maxWidth: 345 }}>
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
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    )

                ) : "No hay data"
            }
        </div>
    )
}

export default Items