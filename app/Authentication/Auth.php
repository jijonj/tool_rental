<?php

namespace App\Authentication;

use App\Models\Users;

class Auth
{
    protected $db;

    /**
     * Auth constructor.
     * @param $container
     */
    public function __construct($container)
    {
        $this->db = new Users($container->db);
    }

    /**
     * @return bool
     */
    public function user()
    {
        if (!isset($_SESSION['user'])) {
            return false;
        }

        return $this->db->getUser($_SESSION['user'])[0];
    }

    /**
     * @return bool
     */
    public function check()
    {
        return isset($_SESSION['user']);
    }

    /**
     * @param $name
     * @param $password
     * @return bool
     */
    public function attempt($name, $password)
    {
        $user = $this->db->getUser($name)[0];

        if (!$user) {
            return false;
        }

        if (password_verify($password, $user['password'])) {
            $_SESSION['user'] = $user['id'];
            return true;
        }

        return false;
    }

    /**
     *
     */
    public function logout()
    {
        unset($_SESSION['user']);
    }
}