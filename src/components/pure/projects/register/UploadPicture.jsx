import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import MyDropzone from "../Dropzone";
import TakePicture from "../TakePicture";
import Delete from "../../../../../public/icons/delete_temp.svg";
import CameraCapture from "../Camera";
import ModalFinishReg from "../../../container/projects/ModalFinishReg";

function UploadPicture({ preview, setPreview, deleteImg, setDBImage,  projectData, showModal, handleShowModal, handleCloseModal, newProject, setNewProject }) {
  const [showCamera, setShowCamera] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Card className="h-75 w-75">
        <Card.Title>Subir Foto</Card.Title>
        <div className="d-flex flex-column col-12 mb-3 mt-3 p-3 flex-grow-1 border rounded h-75">
          <div className="row">
            <div className="col-12">
              {!preview && !showCamera && (
                <>
                  <div
                    className="mb-5 mt-3"
                    style={{ display: preview ? "none" : "block" }}
                  >
                    <label className="mb-3" htmlFor="takePicture">
                      Escoger de galería
                    </label>
                    <MyDropzone setPreview={setPreview} setDBImage={setDBImage}/>
                  </div>
                  <div style={{ display: preview ? "none" : "block" }}>
                    <label className="mb-3" htmlFor="takePicture">
                      Tomar foto
                    </label>
                    <TakePicture onClick={() => setShowCamera(true)} />
                  </div>
                </>
              )}
              {showCamera && (
                <CameraCapture
                  setPreview={setPreview}
                  setShowCamera={setShowCamera}
                />
              )}
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
                <div
                  className="mt-5 d-flex flex-column justify-content-center align-items-center"
                  onClick={deleteImg}
                >
                  <img
                    src={Delete}
                    alt="delete_img"
                    style={{ maxWidth: "150px" }}
                  />
                  <label htmlFor="delete_img">Eliminar</label>
                </div>
              )}
            </div>
          </div>
          <div className="row mt-auto">
            <div className="col-12 d-flex justify-content-start flex-column lh-1">
              <div className="d-flex flex-row">
                <label className="fw-bold me-1">Nombre:</label>
                <p className="text-truncate">{projectData[0]?.name}</p>
              </div>
              <div className="d-flex flex-row">
                <label className="fw-bold me-1">Dirección:</label>
                <p className="text-truncate">{projectData[0]?.address}</p>
              </div>
              <div className="d-flex flex-row">
                <label className="fw-bold me-1">Código Postal:</label>
                <p>{projectData[0]?.postal_code}</p>
              </div>
              <div className="d-flex flex-row">
                <label className="fw-bold me-1">Provincia:</label>
                <p className="text-truncate">{projectData[0]?.province}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex flex-row gap-2">
            <Button
              variant="secondary"
              type="button"
              className="flex-grow-1"
              onClick={() => navigate("/newProject")}
            >
              Atrás
            </Button>
            <Button 
            variant="dark" 
            type="button" 
            className="flex-grow-1" 
            onClick={handleShowModal}>
              Finalizar
            </Button>
          </div>
        </div>
      </Card>
      <ModalFinishReg showModal={showModal} handleClose={handleCloseModal} projectData={projectData} />
    </>
  );
}

export default UploadPicture;
