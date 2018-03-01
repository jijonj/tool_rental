<?php

namespace App\Models;

class Books
{
    protected $table = 'ml_books';

    protected $db;

    /**
     * Books constructor.
     * @param $db
     */
    public function __construct($db)
    {
        $this->db = $db;
    }

    /**
     * @return mixed
     */
    public function getAllBooks()
    {
        $stmt = $this->db->query("SELECT * FROM `" . $this->table . "` ORDER BY `created_at` ASC");
        return $stmt->fetchAll();
    }

    /**
     * @param $id
     * @return mixed
     */
    public function getBook($id)
    {
        $stmt = $this->db->prepare("SELECT * FROM `" . $this->table . "` WHERE `id` = :id");
        $stmt->bindParam(':id', $id, \PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    /**
     * @param $data
     */
    public function addBook($data)
    {
        $stmt = $this->db->prepare("INSERT INTO `" . $this->table . "` (`title`, `author`, `editor`, `publisher`, `published_on`, `country`, `language`, `edition`, `isbn`, `pages`, `quantity`, `status`, `price`, `cover`, `created_at`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?, NOW())");
        $arr = array($data['title'],
            $data['author'],
            $data['editor'],
            $data['publisher'],
            $data['published_on'],
            $data['country'],
            $data['language'],
            $data['edition'],
            $data['isbn'],
            $data['pages'],
            $data['quantity'],
            $data['status'],
            $data['price'],
            $data['cover']);
        $stmt->execute($arr);
    }

    /**
     * @param $data
     */
    public function updateBook($data)
    {
        $stmt = $this->db->prepare("UPDATE `" . $this->table . "` SET `title` = ?, `author` = ?, `editor` = ?, `publisher` = ?, `published_on` = ?, `country` = ?, `language` = ?, `edition` = ?, `isbn` = ?, `pages` = ?, `quantity` = ?, `status` = ?, `price` = ?, `cover` = ?, `updated_at` = NOW() WHERE `id` = ?");
        $arr = array($data['title'],
            $data['author'],
            $data['editor'],
            $data['publisher'],
            $data['published_on'],
            $data['country'],
            $data['language'],
            $data['edition'],
            $data['isbn'],
            $data['pages'],
            $data['quantity'],
            $data['status'],
            $data['price'],
            $data['cover'],
            $data['id']);
        $stmt->execute($arr);
    }

    /**
     * @param $id
     */
    public function deleteBook($id)
    {
        $stmt = $this->db->prepare("DELETE FROM `" . $this->table . "` WHERE `id` = :id");
        $stmt->bindParam(':id', $id, \PDO::PARAM_INT);
        $stmt->execute();
    }

    /**
     * @param $term
     * @return mixed
     */
    public function searchBook($term)
    {
        $stmt = $this->db->prepare("SELECT `id`, `title`, `status` FROM `" . $this->table . "` WHERE `title` LIKE :term LIMIT 20");
        $term = '%'.$term.'%';
        $stmt->bindParam(':term', $term, \PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->fetchAll();
    }
}