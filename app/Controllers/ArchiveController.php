<?php

namespace App\Controllers;

use App\Models\Archive;
use Respect\Validation\Validator as val;

class ArchiveController extends MainController
{
    protected $db;

    /**
     * ArchiveController constructor.
     * @param $container
     */
    public function __construct($container)
    {
        parent::__construct($container);
        $this->db = new Archive($this->container->db);
    }

    /**
     * @param $request
     * @param $response
     * @param $args
     * @return mixed
     */
    public function getArchive($request, $response)
    {
        $type = $request->getParam('type');
        $id = $request->getParam('id');
        if ($type == 'book') {
            $history = $this->db->bookArchive($id);
        } else {
            $history = $this->db->clientArchive($id);
        }
        return $response->withJson($history);
    }
}