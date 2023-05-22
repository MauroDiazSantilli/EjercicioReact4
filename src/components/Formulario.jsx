import {Button,Form} from 'react-bootstrap';
import ListaTareas from './ListaTareas';
import React, { useState } from 'react';

const Formulario = () => {
    const [tarea, setTarea] = useState('');
    const [conjuntoTareas, setConjuntoTareas] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault()
    
    if (tarea.trim() !== ""){
    
        setConjuntoTareas([...conjuntoTareas, tarea])
        setTarea("")
    }
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 d-flex" controlId="tarea">
                    <Form.Control type="text" placeholder="Ingrese una tarea" 
                    onChange={(e) => setTarea(e.target.value)}
                    value={tarea}
                    />
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form.Group>
            </Form>
            <ListaTareas conjuntoTareas = {conjuntoTareas}/>
        </div>
    );
};


export default Formulario;