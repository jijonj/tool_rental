<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <meta content="width=device-width,initial-scale=1" name="viewport">
    <title>Thekkekara Power Tools - Library Management System</title>
    <link rel="shortcut icon" href="favicon.ico">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/font-awesome.min.css" rel="stylesheet">
    <link href="css/daterangepicker.css" rel="stylesheet">
    <link href="css/animated.min.css" rel="stylesheet">
    <link href="css/select2.min.css" rel="stylesheet">
    <link href="css/select2-bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <script src="js/libs/nprogress.js"></script>
</head>

<body>
<div class="loader-container">
    <div class="app-loader">
        <img src="img/logo.png" alt="Thekkekara Power Tools logo">
        <h3>Thekkekara Power Tools</h3>
        <div class="loader"></div>
    </div>
</div>

<header></header>

<main class="main">
    <div class="container-fluid">
        <div class="row">
            <div id="content"></div>
        </div>
    </div>
</main>

<?php include "partials/header.html"; ?>
<?php include "partials/pagination.html"; ?>
<?php include "partials/overview.html"; ?>
<?php include "partials/books.html"; ?>
<?php include "partials/clients.html"; ?>
<?php include "partials/history.html"; ?>
<?php include "partials/settings.html"; ?>

<script>
    NProgress.configure({
        showSpinner: false,
        parent: '.loader'
    });
    NProgress.start();
</script>
<script data-main="js/main" src="js/libs/require.js"></script>

</body>
</html>