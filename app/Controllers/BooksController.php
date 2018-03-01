<?php

namespace App\Controllers;

use App\Models\Books;
use Respect\Validation\Validator as val;
use Respect\Validation\Exceptions\ValidationException;

class BooksController extends MainController
{
    protected $db;

    /**
     * BooksController constructor.
     * @param $container
     */
    public function __construct($container)
    {
        parent::__construct($container);
        $this->db = new Books($this->container->db);
    }

    /**
     * @param $request
     * @param $response
     * @param $args
     * @return mixed
     */
    public function getBooks($request, $response)
    {
        return $response->withJson($this->db->getAllBooks());
    }

    /**
     * @param $request
     * @param $response
     * @param $args
     * @return mixed
     */
    public function getBook($request, $response)
    {
        $id = $request->getAttribute('id');
        return $response->withJson($this->db->getBook($id));
    }

    /**
     * @param $request
     * @param $response
     * @param $args
     * @return mixed
     */
    public function saveBook($request, $response)
    {
        $validation = $this->container->validator->validate($request, [
            'title' => val::notEmpty()->stringType(),
            'author' => val::notEmpty()->stringType(),
            'published_on' => val::noWhitespace()->date('Y'),
            'editor' => val::stringType(),
            'publisher' => val::stringType(),
            'country' => val::stringType(),
            'language' => val::stringType(),
            'edition' => val::stringType(),
            'isbn' => val::noWhitespace()->digit()->length(null, 20),
            'pages' => val::noWhitespace()->digit()->length(null, 20),
            'quantity' => val::noWhitespace()->digit()->length(null, 10),
            'status' => val::noWhitespace()->digit()->length(null, 5),
            'price' => val::noWhitespace()->length(null, 10),
        ]);

        if ($validation->failed()) {
            return $response->withJson($_SESSION['errors'], 400);
        }

        $data = array();
        $data['cover'] = '';
        foreach ($request->getParams() as $param => $value) {
            $data[$param] = trim(strip_tags($value));
        }

        if (val::notEmpty()->noWhitespace()->validate($request->getParam('old_cover'))) {
            $data['cover'] = $request->getParam('old_cover');
        }

        if (isset($_FILES['cover']) && is_uploaded_file($_FILES['cover']['tmp_name'])) {
            try {
                val::notEmpty()->extension('jpg')->check($_FILES['cover']['name']);
                $pattern = array('/\s/', '/[^[:alnum:] _]/');
                $replace = array('_', '');
                $data['cover'] = trim(strtolower(preg_replace($pattern, $replace, $request->getParam('title'))));
                move_uploaded_file($_FILES['cover']['tmp_name'], "img/books/" . $data['cover'] . ".jpg");
            } catch (ValidationException $exception) {
                return $response->withJson(array($exception->getMainMessage()));
            }
        }

        $id = $request->getParam('id');
        if (val::notEmpty()->noWhitespace()->digit()->validate($id)) {
            $data['id'] = $id;
            $this->db->updateBook($data);
        } else {
            $this->db->addBook($data);
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
    public function deleteBook($request, $response)
    {
        $id = $request->getAttribute('id');
        $book = $this->db->getBook($id);
        $this->db->deleteBook($book[0]['id']);
        if ($book) {
            $path = "img/books/" . $book[0]['cover'] . ".jpg";
            if (val::file()->validate($path)) {
                unlink($path);
            }
        }

        return $response->withJson([]);
    }

    /**
     * @param $request
     * @param $response
     * @param $args
     * @return mixed
     */
    public function searchBook($request, $response)
    {
        $term = $request->getParam('q');
        return $response->withJson($this->db->searchBook($term));
    }
}