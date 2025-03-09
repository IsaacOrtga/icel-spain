import React, { useEffect, useState } from "react";
import DatepickerComponent from "../../datepicker/DatepickerComponent";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function ModalComponent({ showModal, handleClose, setSelectInitDate, setSelectFinDate, selectInitDate, selectFinDate, setProjectDates, checkInit, checkFinish,  controlCheckInit, controlCheckFinish }) {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Guardar Proyecto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <div className="mt-3 d-flex flex-column">
              <Form.Group className="mb-3" controlId="formIniDateCheckBox">
                <Form.Check
                  type="checkbox"
                  label="Definir fecha de inicio"
                  onClick={controlCheckInit}
                />
              </Form.Group>
              <div className="datepickerRegInitProject">
                {checkInit ? (
                  <Form.Group
                    className="mb-3 d-flex flex-column"
                    controlId="formBasicInitialDate"
                  >
                    <Form.Label>Fecha inicio</Form.Label>
                    <DatepickerComponent
                      selected={selectInitDate}
                      onChange={(date) => setSelectInitDate(date)}
                    />
                  </Form.Group>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="mt-3 pt-3 d-flex flex-column">
              <Form.Group className="mb-3" controlId="formFinDateCheckBox">
                <Form.Check
                  type="checkbox"
                  label="Definir fecha prevista de fin"
                  onClick={controlCheckFinish}
                />
              </Form.Group>
              {checkFinish ? (
                <Form.Group
                  className="mb-3 d-flex flex-column"
                  controlId="formBasicFinishDate"
                >
                  <Form.Label>Fecha fin</Form.Label>
                  <DatepickerComponent
                    selected={selectFinDate}
                    onChange={(date) => setSelectFinDate(date)}
                  />
                </Form.Group>
              ) : (
                ''
                )}
            </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button 
        variant="primary"
        onClick={setProjectDates}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
