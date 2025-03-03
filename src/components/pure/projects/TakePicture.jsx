import Camera from "../../../assets/icons/camera.svg";

function TakePicture() {
  return (
    <>
      <div
        className="col-12 cursor-pointer"
        id="camera-content"
      >
        <img src={Camera} alt="camera" />
      </div>
    </>
  );
}

export default TakePicture;