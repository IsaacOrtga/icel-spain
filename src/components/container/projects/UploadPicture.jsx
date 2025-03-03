import React, { useState, useEffect } from "react";
import UploadPictureContainer from "../../pure/projects/UploadPictureContainer";

function UploadPicture() {
  const [preview, setPreview] = useState(null);
  const deleteImg = () => {
    setPreview(null);
  };
  return (
    <UploadPictureContainer
      preview={preview}
      setPreview={setPreview}
      deleteImg={deleteImg}
    />
  );
}

export default UploadPicture;
