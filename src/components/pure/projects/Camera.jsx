import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import Button from "react-bootstrap/Button";


function CameraCapture ({ setPreview, setShowCamera }) {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    setPreview(imageSrc); 
    setShowCamera(false)
  };
  console.log(setPreview); // Verifica que la función está siendo pasada

  return (
    <div className="d-flex align-items-center justify-content-center flex-column gap-4">
      <Webcam
      className="w-100"
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={{ facingMode: "enviroment" }} // user (frontal), environment (trasera)
      />
      <Button variant="warning" onClick={capture}>Tomar Foto</Button>
      {capturedImage && <img src={capturedImage} alt="Captura" />}
    </div>
  );
}

export default CameraCapture;
