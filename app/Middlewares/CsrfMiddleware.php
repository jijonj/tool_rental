<?php

namespace App\Middlewares;

class CsrfMiddleware extends Middleware
{
    public function __invoke($request, $response, $next)
    {
        $nameKey = $this->container->csrf->getTokenNameKey();
        $valueKey = $this->container->csrf->getTokenValueKey();
        $name = $request->getAttribute($nameKey);
        $value = $request->getAttribute($valueKey);

        $tokenArray = [
            'csrf_name' => $name,
            'csrf_value' => $value
        ];

        $this->container->view->setAttributes($tokenArray);

        $response = $next($request, $response);
        return $response;
    }
}