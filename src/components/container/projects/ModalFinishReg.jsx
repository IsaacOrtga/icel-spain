import React, { useState } from "react";
import ModalComponent from "../../pure/projects/register/ModalComponent";

const ModalFinishReg = ({
  showModal,
  handleClose,
  projectData
}) => {
  const [selectInitDate, setSelectInitDate] = useState(new Date());
  const [selectFinDate, setSelectFinDate] = useState(new Date());
    const [checkInit, setCheckInit] = useState(false);
    const [checkFinish, setCheckFinish] = useState(false);
  
    const controlCheckInit = (e) => {
      const isInitChecked = e.target.checked;
      setCheckInit(isInitChecked);
    };
  
    const controlCheckFinish = (e) => {
      const isFinishChecked = e.target.checked;
      setCheckFinish(isFinishChecked);
    };
  
    
  const setProjectDates = () => {
    console.log(projectData)
    let updatedProjectData = {
      name: projectData[0][0]?.name,
      address: projectData[0][0]?.address,
      town: projectData[0][0]?.town,
      postal_code: projectData[0][0]?.postal_code,
      province: projectData[0][0]?.province,
      init_date: selectInitDate, 
      finish_date: selectFinDate,
      picture: projectData[0][0]?.picture,
  };
    console.log('PROJECTDATA AHORA FINAL: ', updatedProjectData)
    fetch("http://localhost:8000/api/index.php?endpoint=saveProject", {
        method: 'POST', 
        header: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedProjectData),
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error', error));
  };
  
  return (
    <>
      <ModalComponent
        showModal={showModal}
        handleClose={handleClose}
        setSelectInitDate={setSelectInitDate}
        setSelectFinDate={setSelectFinDate}
        selectInitDate={selectInitDate}
        selectFinDate={selectFinDate}
        setProjectDates={setProjectDates}
        checkInit={checkInit}
        checkFinish={checkFinish}
        controlCheckInit={controlCheckInit}
        controlCheckFinish={controlCheckFinish}
      />
    </>
  );
};

export default ModalFinishReg;
