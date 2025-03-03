<?php
require_once '../database/Database.php';

class Migration {
    private $db;

    public function __construct() {
        // Crear una instancia de la clase Database
        $this->db = new Database();
    }

    // Ejecutar un archivo SQL de migración
    public function executeMigration($filePath) {
        $pdo = $this->db->getConnection();
        
        // Verificar si el archivo SQL existe
        if (!file_exists($filePath)) {
            return json_encode(["error" => "Migration file not found."]);
        }

        // Leer el archivo SQL
        $sql = file_get_contents($filePath);

        try {
            // Ejecutar la migración
            $pdo->exec($sql);
            return json_encode(["message" => "Migration executed successfully."]);
        } catch (PDOException $e) {
            return json_encode(["error" => "Migration failed: " . $e->getMessage()]);
        }
    }
}
?>
