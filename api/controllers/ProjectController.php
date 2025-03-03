<?php
require_once __DIR__ . '/../classes/Project.php';


class ProjectController {

    // Guardar un nuevo proyecto (con o sin imagen)
    public function saveProject() {
        $data = json_decode(file_get_contents("php://input"), true); // Obtener datos del cuerpo de la solicitud

        if (isset($data['name']) && isset($data['start_date']) && isset($data['end_date'])) {
            $project = new Project();
            $response = $project->addProject($data['name'], $data['start_date'], $data['end_date'], $data['image'] ?? null);
            echo json_encode($response);
        } else {
            echo json_encode(["error" => "Missing required fields"]);
        }
    }

    // Obtener todos los proyectos
    public function getAllProjects() {
        $project = new Project();
        $projects = $project->getAllProjects();
        echo json_encode($projects);
    }

    // Obtener un proyecto por ID
    public function getProjectById($id) {
        $project = new Project();
        $projectData = $project->getProjectById($id);
        echo json_encode($projectData);
    }

    // Eliminar un proyecto
    public function deleteProject($id) {
        $project = new Project();
        $response = $project->deleteProject($id);
        echo json_encode($response);
    }

    // Actualizar un proyecto
    public function updateProject($id) {
        $data = json_decode(file_get_contents("php://input"), true);
        if (isset($data['name']) && isset($data['start_date']) && isset($data['end_date'])) {
            $project = new Project();
            $response = $project->updateProject($id, $data['name'], $data['start_date'], $data['end_date']);
            echo json_encode($response);
        } else {
            echo json_encode(["error" => "Missing required fields"]);
        }
    }
}
