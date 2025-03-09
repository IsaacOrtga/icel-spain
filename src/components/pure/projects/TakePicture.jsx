import Camera from "../../../../public/icons/camera.svg";

function TakePicture ({ onClick }) {
  return (
    <>
      <div
        className="col-12 cursor-pointer"
        id="camera-content"
      >
        <img src={Camera} alt="camera" onClick={onClick}/>
      </div>
    </>
  );
}

export default TakePicture;