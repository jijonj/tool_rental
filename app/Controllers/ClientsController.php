<?php

namespace App\Controllers;

use App\Models\Clients;
use Respect\Validation\Validator as val;

class ClientsController extends MainController
{
    protected $db;

    /**
     * ClientsController constructor.
     * @param $container
     */
    public function __construct($container)
    {
        parent::__construct($container);
        $this->db = new Clients($this->container->db);
    }

    /**
     * @param $request
     * @param $response
     * @param $args
     * @return mixed
     */
    public function getClients($request, $response)
    {
        return $response->withJson($this->db->getAllClients());
    }

    /**
     * @param $request
     * @param $response
     * @param $args
     * @return mixed
     */
    public function getClient($request, $response)
    {
        $id = $request->getAttribute('id');
        return $response->withJson($this->db->getClient($id));
    }

    /**
     * @param $request
     * @param $response
     * @param $args
     * @return mixed
     */
    public function saveClient($request, $response)
    {
        $validation = $this->container->validator->validate($request, [
            'name' => val::notEmpty()->stringType(),
            'country' => val::stringType()->length(null, 50),
            'city' => val::stringType()->length(null, 50),
            'address' => val::notEmpty()->stringType()->length(null, 100),
            'phone' => val::notEmpty()->phone()->length(null, 20),
            'email' => val::when(val::notEmpty(), val::email(), val::alwaysValid()),
        ]);

        if ($validation->failed()) {
            return $response->withJson($_SESSION['errors'], 400);
        }

        $data = array();
        foreach ($request->getParams() as $param => $value) {
            $data[$param] = trim(strip_tags($value));
        }

        $id = $request->getParam('id');
        if (val::notEmpty()->noWhitespace()->digit()->validate($id)) {
            $data['id'] = $id;
            $this->db->updateClient($data);
        } else {
            $this->db->addClient($data);
            $data['id'] = $this->container->db->lastInsertId();
        }

        return $response->withJson($data);
    }

    /**
     * @param $request
     * @param $response
     * @param $args
     * @return mixed
     */
    public function deleteClient($request, $response)
    {
        $id = $request->getAttribute('id');
        $this->db->deleteClient($id);

        return $response->withJson([]);
    }

    public function searchClient($request, $response)
    {
        $term = $request->getParam('q');
        return $response->withJson($this->db->searchClient($term));
    }
}