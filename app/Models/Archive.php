<?php

namespace App\Models;

class Archive
{
    protected $table = "ml_archive";

    protected $db;

    /**
     * Archive constructor.
     * @param $db
     */
    public function __construct($db)
    {
        $this->db = $db;
    }

    /**
     * @return mixed
     */
    public function getAllArchive()
    {
        $stmt = $this->db->query("SELECT * FROM `" . $this->table . "` ORDER BY `updated_at` DESC");
        return $stmt->fetchAll();
    }

    /**
     * @param $id
     * @return mixed
     */
    public function bookArchive($id)
    {
        $stmt = $this->db->prepare("SELECT * FROM `" . $this->table . "` WHERE `book_id` = :id ORDER BY `updated_at` DESC");
        $stmt->bindParam(':id', $id, \PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    /**
     * @param $id
     * @return mixed
     */
    public function clientArchive($id)
    {
        $stmt = $this->db->prepare("SELECT * FROM `" . $this->table . "` WHERE `client_id` = :id ORDER BY `updated_at` DESC");
        $stmt->bindParam(':id', $id, \PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    /**
     * @param $data
     */
    public function addEvent($data)
    {
        $stmt = $this->db->prepare("INSERT INTO `" . $this->table . "` (`book_id`, `book`, `client_id`, `client`, `event`, `created_at`) VALUES (?,?,?,?,?, NOW())");
        $arr = array($data['book_id'],
            $data['book'],
            $data['client_id'],
            $data['client'],
            $data['event']);
        $stmt->execute($arr);
    }
}