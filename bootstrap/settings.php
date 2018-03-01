<?php
return [
    'settings' => [
        'displayErrorDetails' => false, // set to false in production
        'addContentLengthHeader' => false, // Allow the web server to send the content-length header

        // Renderer settings
        'renderer' => [
            'template_path' => './templates/',
        ],

        //Database
        'db' => [
            'host' => 'localhost',
            'user' => 'root',
            'pass' => '',
            'dbname' => 'rms',
        ],
    ],
];