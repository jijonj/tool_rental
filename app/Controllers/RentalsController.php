<?php

namespace App\Controllers;

use App\Models\Rentals;
use App\Models\Books;
use App\Models\Clients;
use App\Models\Archive;
use Respect\Validation\Validator as val;

class RentalsController extends MainController
{
    protected $db;

    /**
     * RentalsController constructor.
     * @param $container
     */
    public function __construct($container)
    {
        parent::__construct($container);
        $this->db = new Rentals($this->container->db);
    }

    /**
     * @param $request
     * @param $response
     * @param $args
     * @return mixed
     */
    public function getRentals($request, $response)
    {
        return $response->withJson($this->db->getAllRentals());
    }

    /**
     * @param $request
     * @param $response
     * @param $args
     * @return mixed
     */
    public function getRental($request, $response)
    {
        $id = $request->getAttribute('id');
        return $response->withJson($this->db->getRental($id));
    }

    /**
     * @param $request
     * @param $response
     * @param $args
     * @return mixed
     */
    public function saveRental($request, $response)
    {
        $validation = $this->container->validator->validate($request, [
            'book_id' => val::notEmpty()->noWhitespace(),
            'renter_id' => val::notEmpty()->noWhitespace(),
            'return_date' => val::notEmpty()->date(),
        ]);

        if ($validation->failed()) {
            return $response->withJson($_SESSION['errors'], 400);
        }

        $data = array();

        $book = new Books($this->container->db);
        $book = $book->getBook($request->getParam('book_id'));
        $data['book_id'] = $book[0]['id'];
        $data['book'] = $book[0]['title'];
        if ($book[0]['status'] > 0){ //check if the book is available
            return $response->withStatus(400);
        }

        $client = new Clients($this->container->db);
        $client = $client->getClient($request->getParam('renter_id'));
        $data['client_id'] = $client[0]['id'];
        $data['client'] = $client[0]['name'];
        $data['return_date'] = $request->getParam('return_date');

        $id = $request->getParam('id');
        if (val::notEmpty()->noWhitespace()->digit()->validate($id)) {
            $data['id'] = $id;
            $this->db->updateRental($data);
        } else {
            $this->db->addRental($data);
            $data['id'] = $this->container->db->lastInsertId();
        }

        if (isset($data['id'])) {
            $data['event'] = 0;
            $archive = new Archive($this->container->db);
            $archive->addEvent($data);
        }

        return $response->withJson($data);
    }

    /**
     * @param $request
     * @param $response
     * @param $args
     * @return mixed
     */
    public function deleteRental($request, $response)
    {
        $id = $request->getAttribute('id');
        $this->db->deleteRental($id);

        return $response->withJson([]);
    }
}