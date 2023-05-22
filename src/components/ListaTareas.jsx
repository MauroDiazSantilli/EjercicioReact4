import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({conjuntoTareas}) => {
    return (
        <div>
            <ListGroup>
                {conjuntoTareas.map((tarea, index) => (<ItemTarea key = {index} tarea = {tarea} />))}
                
            </ListGroup>
        </div>
    );
};

export default ListaTareas;