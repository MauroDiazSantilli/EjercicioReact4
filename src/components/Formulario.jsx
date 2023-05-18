import {Button,Form} from 'react-bootstrap';
import ListaTareas from './ListaTareas';
import React, { useState } from 'react';

const Formulario = () => {
    const [tarea, setTarea] = useState('');
    const [tareas, setTareas] = useState([]);
    return (
        <div>
            <Form onClick={tareaEnviar}>
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
            <ListaTareas></ListaTareas>
        </div>
    );
};

const tareaEnviar = (e) => {
    e.preventdDefault()

if (tarea.trim() !== ""){

    setTareas([...tareas, tarea])
    setTarea("")
}
}
export default Formulario;