import React, { useState } from 'react'
import RegProject from '../../pure/projects/RegProject';

function RegProgectContainer () {
    const [ newProject, setNewProject ] = useState([{
        name: '',
        address: '',
        town: '',
        postal_code: '',
        province: '',
        picture: '',
    }]);

    const handleChange = (index, e) =>{
        const { name, value } = e.target;
        setNewProject((prevProjects) =>{
            const updatedProjects = [...prevProjects];
            updatedProjects[index] = { ...updatedProjects[index], [name]: value};
            return updatedProjects;
        })
    };
    console.log(newProject)
  return (
    <>
     < RegProject newProject={newProject} handleChange={handleChange}/> 
    </>
  )
}

export default RegProgectContainer
