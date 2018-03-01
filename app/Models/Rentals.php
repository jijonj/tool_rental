<?php

namespace App\Models;

class Rentals
{
    protected $table = "ml_rentals";

    protected $db;

    /**
     * Rentals constructor.
     * @param $db
     */
    public function __construct($db)
    {
        $this->db = $db;
    }

    /**
     * @return mixed
     */
    public function getAllRentals()
    {
        $stmt = $this->db->query("SELECT * FROM `" . $this->table . "` ORDER BY `updated_at` ASC");
        return $stmt->fetchAll();
    }

    /**
     * @param $id
     * @return mixed
     */
    public function getRental($id)
    {
        $stmt = $this->db->prepare("SELECT * FROM `" . $this->table . "` WHERE `id` = :id");
        $stmt->bindParam(':id', $id, \PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    /**
     * @param $data
     */
    public function addRental($data)
    {
        $stmt = $this->db->prepare("INSERT INTO `" . $this->table . "` (`book_id`, `book`, `client_id`, `client`, `return_date`, `created_at`) VALUES (?,?,?,?,?, NOW())");
        $arr = array($data['book_id'],
            $data['book'],
            $data['client_id'],
            $data['client'],
            $data['return_date']);
        $stmt->execute($arr);
    }

    /**
     * @param $data
     */
    public function updateRental($data)
    {
        $stmt = $this->db->prepare("UPDATE `" . $this->table . "` SET `book_id` = ?, `book` = ?, `client_id` = ?, `client` = ?, `return_date` = ?, `updated_at` = NOW() WHERE `id` = ?");
        $arr = array($data['book_id'],
            $data['book'],
            $data['client_id'],
            $data['client'],
            $data['return_date'],
            $data['id']);
        $stmt->execute($arr);
    }

    /**
     * @param $id
     */
    public function deleteRental($id)
    {
        $stmt = $this->db->prepare("DELETE FROM `" . $this->table . "` WHERE `id` = :id");
        $stmt->bindParam(':id', $id, \PDO::PARAM_INT);
        $stmt->execute();
    }
}