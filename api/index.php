<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *"); // Acceso desde cualquier origen (cambiar cuando no esté en desarrollo)

require_once "controllers/ProjectController.php";

$request = $_GET['endpoint'] ?? null;

switch ($request) {
    case 'saveProject':
        $controller = new ProjectController();
        $controller->saveProject();
        break;
    case 'getProjects':
        $controller = new ProjectController();
        $controller->getAllProjects();
        break;
    case 'getProject':
        $id = $_GET['id'] ?? null;
        if ($id) {
            $controller = new ProjectController();
            $controller->getProjectById($id);
        } else {
            echo json_encode(["error" => "Missing project ID"]);
        }
        break;
    case 'deleteProject':
        $id = $_GET['id'] ?? null;
        if ($id) {
            $controller = new ProjectController();
            $controller->deleteProject($id);
        } else {
            echo json_encode(["error" => "Missing project ID"]);
        }
        break;
    case 'updateProject':
        $id = $_GET['id'] ?? null;
        if ($id) {
            $controller = new ProjectController();
            $controller->updateProject($id);
        } else {
            echo json_encode(["error" => "Missing project ID"]);
        }
        break;
    default:
        echo json_encode(["error" => "Endpoint not found"]);
        break;
}
