import React from "react";
import arrowRight from "../../../assets/icons/arrowRight.svg";
import ListGroup from "react-bootstrap/ListGroup";

function ProjectsList ({ projects = [], redirect }) {

  console.log(projects)
  return (
    <div className="projectsList-container">
      <ListGroup>
        {projects.map((project, index) => (
          <ListGroup.Item key={index}>
            <div className="row" onClick={() => redirect(project.id)}>
              <div className="col-3 projectImg-content">
                {project.imagen && (
                  <img src={project.imagen} alt={project.nombre} />
                )}
              </div>
              <div className="col-9">
                <div className="row">
                  <div className="d-flex flex-row align-items-center">
                    <div className="col-11 d-flex flex-column">
                      <div className="fw-bold d-flex justify-content-start">
                        {project.name}
                      </div>
                      <div className="d-flex flex-row justify-content-start dateInitProject-content">
                        Fecha Inicio:{" "}
                        <div className="fst-italic ms-2">{project.start_date}</div>
                      </div>
                    </div>
                    <div className="col-1">
                      <img
                        src={arrowRight}
                        alt="arrow icon"
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default ProjectsList;
