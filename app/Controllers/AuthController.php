<?php

namespace App\Controllers;

class AuthController extends MainController
{
    /**
     * @param $request
     * @param $response
     * @return mixed
     */
    public function getSignIn($request, $response)
    {
        if ($this->container->auth->check()) {
            return $response->withRedirect($this->container->router->pathFor('home'));
        }

        $nameKey = $this->container->csrf->getTokenNameKey();
        $valueKey = $this->container->csrf->getTokenValueKey();
        $name = $request->getAttribute($nameKey);
        $value = $request->getAttribute($valueKey);

        return $this->container->view->render($response, 'login.php', [
            'router' => $this->container->router,
            'csrf_name' => $name,
            'csrf_value' => $value
        ]);
    }

    /**
     * @param $request
     * @param $response
     * @return mixed
     */
    public function postSignIn($request, $response)
    {
        $auth = $this->container->auth->attempt(
            $request->getParam('name'),
            $request->getParam('password')
        );

        if (!$auth) {
            $_SESSION['errors'] = 'Invalid login credentials.';
            return $response->withRedirect($this->container->router->pathFor('login'));
        }

        return $response->withRedirect($this->container->router->pathFor('home'));
    }

    /**
     * @param $request
     * @param $response
     * @return mixed
     */
    public function signOut($request, $response)
    {
        $this->container->auth->logout();
        return $response->withRedirect($this->container->router->pathFor('login'));
    }
}