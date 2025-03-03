import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectsList from "../../pure/projects/ProjectsList";
import { useProject } from "../../../context/useContext";

function ProjectGetList (){
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();
    const { setProjectId } = useProject();
    useEffect(() =>{
        fetch("http://localhost:8000/index.php?endpoint=getProjects") 
        .then(response => response.json())
        .then(data => setProjects(data))
        .catch(error => console.error('Error: ', error));
    }, []);
    console.log(projects)
    const redirect = (id) =>{
        setProjectId(id);
        navigate('/getProjects');
    };

    return <ProjectsList projects={projects} redirect={redirect} />

}

export default ProjectGetList;