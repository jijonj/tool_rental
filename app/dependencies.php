<?php

use Respect\Validation\Validator as val;

$container = $app->getContainer();

$container['view'] = function ($container) {
    $settings = $container['settings']['renderer'];
    return new \Slim\Views\PhpRenderer($settings['template_path']);
};

$container['db'] = function ($container) {
    $db = $container['settings']['db'];
    $pdo = new PDO("mysql:host=" . $db['host'] . ";dbname=" . $db['dbname'], $db['user'], $db['pass']);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    return $pdo;
};

// Authentication controller
$container['auth'] = function ($container) {
    return new \App\Authentication\Auth($container);
};

// CSRF protection controller
$container['csrf'] = function () {
    return new \Slim\Csrf\Guard;
};

// Validation controller
$container['validator'] = function ($container) {
    return new \App\Validation\Validator($container);
};

// Rentals controller
$container['RentalsController'] = function ($container) {
    return new \App\Controllers\RentalsController($container);
};

// Books controller
$container['BooksController'] = function ($container) {
    return new \App\Controllers\BooksController($container);
};

// Clients controller
$container['ClientsController'] = function ($container) {
    return new \App\Controllers\ClientsController($container);
};

// Archive controller
$container['ArchiveController'] = function ($container) {
    return new \App\Controllers\ArchiveController($container);
};

// Settings controller
$container['SettingsController'] = function ($container) {
    return new \App\Controllers\SettingsController($container);
};

// Sign in page controller
$container['AuthController'] = function ($container) {
    return new \App\Controllers\AuthController($container);
};

val::with('App\\Validation\\Rules\\');