<?php
class Database {
    private $host = 'localhost';
    private $dbname = 'proscon';
    private $username = 'root';
    private $password = 'root';
    private $pdo;

    public function __construct() {
        $this->connect();
    }

    // Establecer la conexión a la base de datos
    private function connect() {
        try {
            $this->pdo = new PDO("mysql:host=$this->host;dbname=$this->dbname;charset=utf8", 
                                 $this->username, 
                                 $this->password);
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            die(json_encode(["error" => "Database connection failed: " . $e->getMessage()]));
        }
    }

    // Obtener la conexión PDO
    public function getConnection() {
        return $this->pdo;
    }
}
?>
