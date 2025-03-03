import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import MyDropzone from "./Dropzone";
import TakePicture from "./TakePicture";
import Delete from "../../../assets/icons/delete_temp.svg";

function UploadPictureContainer({ preview, setPreview, deleteImg }) {
  return (
    <Card className="h-75 w-75">
      <Card.Title>Subir Foto</Card.Title>
      <div className="col-12 mb-3 mt-3 p-3 border rounded h-75">
        <div className="row">
          <div className="col-12">
            <div
              className="mb-5 mt-3"
              style={{ display: preview ? "none" : "block" }}
            >
              <label className="mb-3" htmlFor="takePicture">
                Escoger de galería
              </label>
              <MyDropzone setPreview={setPreview} />
            </div>
            <div style={{ display: preview ? "none" : "block" }}>
              <label className="mb-3" htmlFor="takePicture">
                Tomar foto
              </label>
              <TakePicture />
            </div>
            {preview && (
              <div className="mt-2 d-flex justify-content-center align-items-center">
                {preview && (
                  <img
                    src={preview}
                    alt="Vista previa"
                    style={{ maxWidth: "200px", marginTop: "10PX" }}
                  />
                )}
              </div>
            )}
            {preview && (
              <div className="mt-5 d-flex flex-column justify-content-center align-items-center" onClick={deleteImg}>
                <img 
                src={Delete} 
                alt="delete_img"
                style={{ maxWidth: "150px" }} />
                <label htmlFor="delete_img">Eliminar</label>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="col-12">
        <Button variant="warning" type="submit" className="me-2">
          Omitir
        </Button>
        <Button variant="dark" type="submit">
          Guardar
        </Button>
      </div>
    </Card>
  );
}

export default UploadPictureContainer;
