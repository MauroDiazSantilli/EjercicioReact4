import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = () => {
    return (
        <div>
            <ListGroup.Item className="d-flex justify-content-between">
                Elemento agregado
                <Button variant="danger">Borrar</Button>
            </ListGroup.Item>
        </div>
    );
};

export default ItemTarea;