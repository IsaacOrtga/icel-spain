import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import UploadPicture from "../../pure/projects/register/UploadPicture";

const UploadPictureContainer = () => {
  const [preview, setPreview] = useState(null);
  const [dbImage, setDBImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  const location = useLocation();
  const { projectData } = location.state || {};
  const handleShowModal = () =>{
    setShowModal(true); 
    const updatedData = { ...projectData, picture: dbImage };
    projectData[0] = updatedData;
  }

  const handleCloseModal = () => setShowModal(false);
  const deleteImg = () => {
    setPreview(null);
  };
  return (
    <UploadPicture
      preview={preview}
      setPreview={setPreview}
      deleteImg={deleteImg}
      setDBImage={setDBImage}
      projectData={projectData}
      showModal={showModal}
      handleShowModal={handleShowModal}
      handleCloseModal={handleCloseModal}
    />
  );
}

export default UploadPictureContainer;
