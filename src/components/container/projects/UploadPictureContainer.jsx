import React, { useState, useEffect } from "react";
import UploadPicture from "../../pure/projects/UploadPicture";

const UploadPicture = () => {
  const [preview, setPreview] = useState(null);

  const deleteImg = () => {
    setPreview(null);
  };
  return (
    <UploadPicture
      preview={preview}
      setPreview={setPreview}
      deleteImg={deleteImg}
    />
  );
}

export default UploadPicture;
