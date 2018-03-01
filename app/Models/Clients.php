<?php

namespace App\Models;

class Clients
{
    protected $table = "ml_clients";

    protected $db;

    /**
     * Clients constructor.
     * @param $db
     */
    public function __construct($db)
    {
        $this->db = $db;
    }

    /**
     * @return mixed
     */
    public function getAllClients()
    {
        $stmt = $this->db->query("SELECT * FROM `" . $this->table . "` ORDER BY `updated_at` DESC");
        return $stmt->fetchAll();
    }

    /**
     * @param $id
     * @return mixed
     */
    public function getClient($id)
    {
        $stmt = $this->db->prepare("SELECT * FROM `" . $this->table . "` WHERE `id` = :id");
        $stmt->bindParam(':id', $id, \PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    /**
     * @param $data
     */
    public function addClient($data)
    {
        $stmt = $this->db->prepare("INSERT INTO `" . $this->table . "` (`name`, `country`, `city`, `address`, `phone`, `email`, `created_at`) VALUES (?,?,?,?,?,?, NOW())");
        $arr = array($data['name'],
            $data['country'],
            $data['city'],
            $data['address'],
            $data['phone'],
            $data['email']);
        $stmt->execute($arr);
    }

    /**
     * @param $data
     */
    public function updateClient($data)
    {
        $stmt = $this->db->prepare("UPDATE `" . $this->table . "` SET `name` = ?, `country` = ?, `city` = ?, `address` = ?, `phone` = ?, `email` = ?, `updated_at` = NOW() WHERE `id` = ?");
        $arr = array($data['name'],
            $data['country'],
            $data['city'],
            $data['address'],
            $data['phone'],
            $data['email'],
            $data['id']);
        $stmt->execute($arr);
    }

    /**
     * @param $id
     */
    public function deleteClient($id)
    {
        $stmt = $this->db->prepare("DELETE FROM `" . $this->table . "` WHERE `id` = :id");
        $stmt->bindParam(':id', $id, \PDO::PARAM_INT);
        $stmt->execute();
    }

    /**
     * @param $term
     * @return mixed
     */
    public function searchClient($term)
    {
        $stmt = $this->db->prepare("SELECT * FROM `" . $this->table . "` WHERE `name` LIKE :term LIMIT 20");
        $term = '%' . $term . '%';
        $stmt->bindParam(':term', $term, \PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->fetchAll();
    }
}