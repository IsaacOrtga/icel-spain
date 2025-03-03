import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";

function RegProject() {
  const navigate = useNavigate();
  const redirectToSavePicture = () => {
    navigate('/uploadPicture');
  };
  return (
    <Card>
      <Card.Title>Registro de nuevo proyecto</Card.Title>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Nombre del proyecto" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Dirección</Form.Label>
            <Form.Control type="text" placeholder="Línea 1 dirección" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Población</Form.Label>
            <Form.Control type="text" placeholder="Introduzca población" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>C.P.</Form.Label>
            <Form.Control type="text" placeholder="Código Postal" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Provincia</Form.Label>
            <Form.Control type="text" placeholder="Introduzca provincia" />
          </Form.Group>

          <Button variant="dark" type="submit" onClick={redirectToSavePicture}>
            Siguiente
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default RegProject;
