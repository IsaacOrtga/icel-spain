import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";

function RegProject ({ newProject, handleChange }) {
  const navigate = useNavigate();
  const redirectToSavePicture = (e) => {
    e.preventDefault(e);
    navigate("/uploadPicture", { state: { projectData: newProject }});
  };
  return (
    <Card>
      <Card.Title>Registro de nuevo proyecto</Card.Title>
      <Card.Body>
        <Form>
          {newProject.map((project, index) => (
            <div key={index}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre del proyecto"
                  name="name"
                  value={project.name}
                  onChange={(e) => handleChange(index, e)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Línea 1 dirección"
                  name="address"
                  value={project.adress}
                  onChange={(e) => handleChange(index, e)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Población</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Introduzca población"
                  name="town"
                  value={project.town}
                  onChange={(e) => handleChange(index, e)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>C.P.</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Código Postal"
                  name="postal_code"
                  value={project.postal_code}
                  onChange={(e) => handleChange(index, e)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Provincia</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Introduzca provincia"
                  name="province"
                  value={project.province}
                  onChange={(e) => handleChange(index, e)}
                />
              </Form.Group>
            </div>
          ))}
        </Form>
        <Button variant="dark" type="submit" onClick={redirectToSavePicture}>
          Siguiente
        </Button>
      </Card.Body>
    </Card>
  );
};

export default RegProject;
