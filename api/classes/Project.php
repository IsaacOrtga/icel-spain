<?php
require_once "database/Database.php";

class Project {
    private $db;
    private $table = "project"; // La tabla de proyectos

    public function __construct() {
        $this->db = (new Database())->getConnection(); // Conectar a la base de datos
    }

    // Método para agregar un nuevo proyecto
    public function addProject($name, $address, $town, $postal_code, $province, $init_date = null, $finish_date = null, $picture = null) {
        try {
            // Iniciar transacción para asegurar que tanto el proyecto como la imagen (si hay) se guarden correctamente
            $this->db->beginTransaction();

            // Insertar el proyecto en la base de datos
            $stmt = $this->db->prepare("INSERT INTO $this->table (name, start_date, end_date, address, town, postal_code, province, updated_at) VALUES (:name, :addres, :town, :postal_code, :province, :init_date, :finish_date, :updated_at)");
            $stmt->bindParam(':name', $name);
            $stmt->bindParam(':address', $address);
            $stmt->bindParam(':town', $town);
            $stmt->bindParam(':postal_code', $postal_code);
            $stmt->bindParam(':province', $province);
            if($init_date) $stmt->bindParam(':init_date', $init_date);
            if($finish_date) $stmt->bindParam(':finish_date', $finish_date);
            $stmt->execute();
            $projectId = $this->db->lastInsertId(); // Obtener el ID del proyecto recién insertado

            // Si se ha proporcionado una imagen, insertarla en la tabla de imágenes
            if ($picture) {
                $this->saveImage($projectId, $picture);
            }

            // Confirmar la transacción
            $this->db->commit();
            return ["message" => "Project added successfully"];
        } catch (PDOException $e) {
            $this->db->rollBack(); // Si algo falla, revertir la transacción
            return ["error" => "Error: " . $e->getMessage()];
        }
    }

    // Método para obtener todos los proyectos
    public function getAllProjects() {
        $stmt = $this->db->prepare("SELECT id, name, start_date, end_date FROM $this->table WHERE deleted_at IS NULL");
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Método para obtener un proyecto por su ID
    public function getProjectById($id) {
        $stmt = $this->db->prepare("SELECT * FROM $this->table WHERE id = :id AND deleted_at IS NULL");
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    // Método para eliminar un proyecto (soft delete, poniendo deleted_at)
    public function deleteProject($id) {
        $stmt = $this->db->prepare("UPDATE $this->table SET deleted_at = NOW() WHERE id = :id");
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        return ["message" => "Project deleted successfully"];
    }

    // Método para actualizar un proyecto
    public function updateProject($id, $name, $start_date, $end_date) {
        $stmt = $this->db->prepare("UPDATE $this->table SET name = :name, start_date = :start_date, end_date = :end_date, updated_at = NOW() WHERE id = :id");
        $stmt->bindParam(':id', $id);
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':start_date', $start_date);
        $stmt->bindParam(':end_date', $end_date);
        $stmt->execute();
        return ["message" => "Project updated successfully"];
    }

    // Método para manejar la imagen asociada al proyecto (guardarla en la base de datos)
    private function saveImage($projectId, $picture) {
        $stmt = $this->db->prepare("INSERT INTO project_images (project_id, image_data) VALUES (:project_id, :image)");
        $stmt->bindParam(':project_id', $projectId);
        $stmt->bindParam(':picture', $picture, PDO::PARAM_LOB); // Si es binario (BLOB)
        $stmt->execute();
    }

    // Método para obtener la imagen asociada a un proyecto
    public function getImageByProjectId($projectId) {
        $stmt = $this->db->prepare("SELECT image_data FROM project_images WHERE project_id = :project_id");
        $stmt->bindParam(':project_id', $projectId);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
}
