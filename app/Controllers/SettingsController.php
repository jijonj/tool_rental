<?php

namespace App\Controllers;

use App\Models\Users;
use Respect\Validation\Validator as val;

class SettingsController extends MainController
{
    protected $db;

    /**
     * SettingsController constructor.
     * @param $container
     */
    public function __construct($container)
    {
        parent::__construct($container);
        $this->db = new Users($this->container->db);
    }

    /**
     * @param $request
     * @param $response
     * @param $args
     * @return mixed
     */
    public function getAllUsers($request, $response)
    {
        return $response->withJson($this->db->getAllUsers());
    }

    /**
     * @param $request
     * @param $response
     * @param $args
     * @return mixed
     */
    public function getUser($request, $response)
    {
        $name = $request->getAttribute('name');
        return $response->withJson($this->db->getUser($name));
    }

    /**
     * @param $request
     * @param $response
     * @param $args
     * @return mixed
     */
    public function saveUser($request, $response)
    {
        $validation = $this->container->validator->validate($request, [
            'name' => val::notEmpty()->stringType(),
            'address' => val::stringType(),
            'phone' => val::when(val::notEmpty(), val::phone(), val::alwaysValid()),
            'email' => val::notEmpty()->email(),
        ]);

        if ($validation->failed()) {
            return $response->withJson($_SESSION['errors'], 400);
        }

        $data = array();
        foreach ($request->getParams() as $param => $value) {
            $data[$param] = trim(strip_tags($value));
        }

        $id = $request->getParam('id');
        $pass = $request->getParam('password');
        $validation = $this->container->validator->validate($request, [
            'password' => val::notEmpty()->noWhitespace()->min(8, true),
        ]);
        $user = $this->db->getUser($data['name']);

        if (val::notEmpty()->noWhitespace()->digit()->validate($id)) {
            if (count($user) !== 0 && $id != $user[0]['id']) {
                return $response->withJson(['Name is already used.'], 400);
            }
            if (val::notEmpty()->noWhitespace()->validate($pass)) {
                $data['new_password'] = password_hash($pass, PASSWORD_DEFAULT);
            }
            $data['id'] = $id;
            $this->db->updateUser($data);
        } else {
            if (count($user) !== 0) {
                return $response->withJson(['Name is already used.'], 400);
            }
            if ($validation->failed()) {
                return $response->withJson($_SESSION['errors'], 400);
            }
            $data['new_password'] = password_hash($pass, PASSWORD_DEFAULT);
            $this->db->addUser($data);
            $data['id'] = $this->container->db->lastInsertId();
        }
        unset($data['new_password'], $data['password']);

        return $response->withJson($data);
    }

    /**
     * @param $request
     * @param $response
     * @param $args
     * @return mixed
     */
    public function deleteUser($request, $response)
    {
        $id = $request->getAttribute('id');
        $this->db->deleteUser($id);

        return $response->withJson([]);
    }
}