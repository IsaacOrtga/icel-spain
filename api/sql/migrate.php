<?php
require_once '../classes/Migration.php';

// Crear una instancia de la clase Migration
$migration = new Migration();

// Ejecutar la migración
echo $migration->executeMigration("create_tables.sql");
