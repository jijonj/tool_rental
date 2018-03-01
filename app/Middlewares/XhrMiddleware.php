<?php

namespace App\Middlewares;

class XhrMiddleware extends Middleware
{
    public function __invoke($request, $response, $next)
    {
        if (!$request->isXhr()) {
            return $response->withStatus(401);
        }

        $response = $next($request, $response);
        return $response;
    }
}