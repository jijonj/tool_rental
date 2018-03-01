<?php

namespace App\Controllers;

class MainController
{
    protected $container;

    public function __construct($container)
    {
        $this->container = $container;
    }
}