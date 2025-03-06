import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function ModalComponent({ showModal, handleClose }) {
  const [startDate, setStartDate] = useState(new Date());
  console.log(showModal);
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Guardar Proyecto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Si lo desea, puede guardar fecha de inicio, fin, o las dos</h5>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Fecha inicio</Form.Label>
            <DatePicker
              showIcon
              toggleCalendarOnIconClick
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Fecha fin</Form.Label>
            <DatePicker
              showIcon
              toggleCalendarOnIconClick
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
        <Button variant="primary">Guardar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;