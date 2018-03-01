<?php

namespace App\Middlewares;

class ValidationMiddleware extends Middleware
{
    public function __invoke($request, $response, $next)
    {
        if(isset($_SESSION['errors'])){
            $this->container->view->addAttribute('errors', $_SESSION['errors']);
            unset($_SESSION['errors']);
        }

        $response = $next($request, $response);
        return $response;
    }
}