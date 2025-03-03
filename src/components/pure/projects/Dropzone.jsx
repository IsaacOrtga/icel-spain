import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "react-bootstrap";

function MyDropzone({ setPreview }) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        setPreview(URL.createObjectURL(file));
      }
    },
    [setPreview]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="dropZone-content">
      <div {...getRootProps()} id="dropzone-button">
        <input {...getInputProps()} />
        <div>
          <Button variant="secondary" size="sm">
            Seleccionar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MyDropzone;
