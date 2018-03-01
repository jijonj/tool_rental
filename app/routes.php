<?php

// Routes

use \App\Middlewares\AuthMiddleware;
use \App\Middlewares\ValidationMiddleware;
use \App\Middlewares\XhrMiddleware;

$app->get('/login', 'AuthController:getSignIn')->setName('login')
    ->add($container->csrf)
    ->add(new ValidationMiddleware($container));
$app->post('/login', 'AuthController:postSignIn')->add($container->csrf);
$app->get('/logout', 'AuthController:signOut')->setName('logout');

$app->group('', function () {

    $this->get('/', function ($request, $response) {
        $response = $this->view->render($response, "index.php", ['router' => $this->router]);
        return $response;
    })->setName('home');

    $this->group('', function () {

        $this->get('/rentals', 'RentalsController:getRentals');
        $this->get('/rental/{id:[0-9]+}', 'RentalsController:getRental');
        $this->post('/rental', 'RentalsController:saveRental');
        $this->put('/rental/{id:[0-9]+}', 'RentalsController:saveRental');
        $this->delete('/rental/{id:[0-9]+}', 'RentalsController:deleteRental');

        $this->get('/books', 'BooksController:getBooks');
        $this->get('/books/search', 'BooksController:searchBook');
        $this->get('/book/{id:[0-9]+}', 'BooksController:getBook');
        $this->post('/book/save', 'BooksController:saveBook');
        $this->delete('/books/{id:[0-9]+}', 'BooksController:deleteBook');

        $this->get('/clients', 'ClientsController:getClients');
        $this->get('/clients/search', 'ClientsController:searchClient');
        $this->get('/client/{id:[0-9]+}', 'ClientsController:getClient');
        $this->post('/client', 'ClientsController:saveClient');
        $this->put('/client/{id:[0-9]+}', 'ClientsController:saveClient');
        $this->delete('/client/{id:[0-9]+}', 'ClientsController:deleteClient');

        $this->get('/archive', 'ArchiveController:getArchive');

        $this->group('/settings', function () {

            $this->get('/staff', 'SettingsController:getAllUsers');
            $this->get('/staff/{id:[0-9]+}', 'SettingsController:getUser');
            $this->post('/staff', 'SettingsController:saveUser');
            $this->put('/staff/{id:[0-9]+}', 'SettingsController:saveUser');
            $this->delete('/staff/{id:[0-9]+}', 'SettingsController:deleteUser');

        });

    })->add(new XhrMiddleware($this));

})->add(new AuthMiddleware($container));