<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <meta content="width=device-width,initial-scale=1" name="viewport">
    <title>Thekkekara Power Tools - Login</title>
    <link rel="shortcut icon" href="favicon.ico">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/font-awesome.min.css" rel="stylesheet">
    <link href="css/animated.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
</head>

<body class="login">

<main class="main">
    <div class="container-fluid">
        <div class="row">
            <div id="content">
                <div class="login-container">
                    <div class="login-form">
                        <img src="img/logo.png" alt="Thekkekara Power Tools logo">
                        <h3>Thekkekara Power Tools</h3>
                        <form action="<?= $router->pathFor('login'); ?>" method="post">
                            <?php if(isset($errors) && count($errors) > 0){ ?>
                                <div class="alert alert-danger" role="alert"><?= $errors ?></div>
                            <?php } ?>
                            <div class="form-group">
                                <input name="name" type="text" class="form-control round-input" id="inputUsername"
                                       placeholder="Username">
                            </div>
                            <div class="form-group">
                                <input name="password" type="password" class="form-control round-input"
                                       id="inputPassword" placeholder="Password">
                            </div>
                            <input type="hidden" name="csrf_name" value="<?= $csrf_name ?>">
                            <input type="hidden" name="csrf_value" value="<?= $csrf_value ?>">
                            <div class="form-group">
                                <button type="submit" class="btn btn-raised btn-default col-xs-12">Log In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

</body>
</html>