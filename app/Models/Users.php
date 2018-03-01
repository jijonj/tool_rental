<?php

namespace App\Models;

class Users
{
    protected $table = 'ml_users';

    protected $db;

    /**
     * Users constructor.
     * @param $db
     */
    public function __construct($db)
    {
        $this->db = $db;
    }

    /**
     * @return mixed
     */
    public function getAllUsers()
    {
        $stmt = $this->db->query("SELECT `id`,`name`,`email`,`address`,`phone` FROM `" . $this->table . "` ORDER BY `updated_at` DESC");
        return $stmt->fetchAll();
    }

    /**
     * @param $id
     * @return mixed
     */
    public function getUser($name)
    {
        $stmt = $this->db->prepare("SELECT * FROM `" . $this->table . "` WHERE `name` = :name");
        $stmt->bindParam(':name', $name, \PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    /**
     * @param $data
     */
    public function addUser($data)
    {
        $stmt = $this->db->prepare("INSERT INTO `" . $this->table . "` (`name`, `email`, `password`, `address`, `phone`, `created_at`) VALUES (?,?,?,?,?, NOW())");
        $arr = array($data['name'],
            $data['email'],
            $data['new_password'],
            $data['address'],
            $data['phone']);
        $stmt->execute($arr);
    }

    /**
     * @param $data
     */
    public function updateUser($data)
    {
        $arr = array($data['name'],
            $data['email'],
            $data['address'],
            $data['phone'],
            $data['id']);
        $query = "UPDATE `" . $this->table . "` SET `name` = ?, `email` = ?, `address` = ?, `phone` = ?, `updated_at` = NOW() WHERE `id` = ?";
        if (isset($data['new_password'])) {
            $query = "UPDATE `" . $this->table . "` SET `name` = ?, `email` = ?, `password` = ?, `address` = ?, `phone` = ?, `updated_at` = NOW() WHERE `id` = ?";
            $add = array($data['new_password']);
            array_splice($arr, 2, 0, $add);
        }
        $stmt = $this->db->prepare($query);
        $stmt->execute($arr);
    }

    /**
     * @param $id
     */
    public function deleteUser($id)
    {
        $stmt = $this->db->prepare("DELETE FROM `" . $this->table . "` WHERE `id` = :id");
        $stmt->bindParam(':id', $id, \PDO::PARAM_INT);
        $stmt->execute();
    }
}