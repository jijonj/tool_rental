<?php
function msg($type, $msg)
{
    if ($type == 'error') {
        $icon = 'times';
        $alert = 'danger';
    } else {
        $icon = 'check';
        $alert = 'success';
    }
    return '<p class="text-' . $alert . '" role="alert"><i class="fa fa-' . $icon . '" aria-hidden="true"></i> ' . $msg . '</p>';
}

$settings = require('../bootstrap/settings.php');
$tables = require('tables.php');
$db = $settings['settings']['db'];
$db_errors = array();
$req_errors = array();
$user_errors = array();

if (version_compare(phpversion(), '5.6', '<')) {
    $req_errors[] = msg('error', 'This app requires PHP >= 5.6');
} else {
    $req_errors[] = msg('ok', 'PHP version meets the requirements !');
}

if (extension_loaded('pdo')) {
    $req_errors[] = msg('ok', 'PHP PDO extension installed !');
} else {
    $req_errors[] = msg('error', 'This app requires PHP PDO extension');
}

try {
    $pdo = new PDO("mysql:host=" . $db['host'] . ";dbname=" . $db['dbname'], $db['user'], $db['pass']);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    $db_errors[] = msg('ok', 'Connection with database established !');
    foreach ($tables as $table => $stm) {
        if ($pdo->query($stm)) {
            $db_errors[] = msg('ok', 'Table ' . $table . ' successfully created !');
        }
    }
    if (isset($_POST['username']) && isset($_POST['password'])) {
        if (strlen($_POST['password']) > 8) {
            $stmt = $pdo->prepare("INSERT INTO `ml_users` (`name`, `email`, `password`, `created_at`) VALUES (?,?,?, NOW())");
            $arr = array($_POST['username'],
                $_POST['email'],
                password_hash($_POST['password'], PASSWORD_DEFAULT));
            $stmt->execute($arr);
			$user_errors[] = msg('ok', 'New user successfully created !');
        } else {
            $user_errors[] = msg('error', 'Password must be 8 or more characters long!');
        }
    }
} catch (PDOException $e) {
    $db_errors[] = msg('error', $e->getMessage());
}
?>

<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <meta content="width=device-width,initial-scale=1" name="viewport">
    <title>Thekkekara Power Tools - Install Wizard</title>
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <link href="../css/font-awesome.min.css" rel="stylesheet">
    <link href="../css/style.css" rel="stylesheet">
</head>

<body class="login">

<main class="main">
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2 well well-lg">
                <div class="text-center">
                    <img src="../img/logo-small.png" alt="Thekkekara Power Tools Logo" class="img-thumbnail">
                    <h3>Installation - -C-O-D-E-L-I-S-T-.-C-C-</h3>
                </div>
                <hr>
                <form action="index.php" method="post" class="form-horizontal">
                    <h4>Requirements</h4>
                    <hr>
                    <?php
                    if (count($req_errors) > 0) {
                        foreach ($req_errors as $error) {
                            echo $error;
                        }
                    }
                    ?>
                    <hr>
                    <h4>Database</h4>
                    <hr>
                    <?php
                    if (count($db_errors) > 0) {
                        foreach ($db_errors as $error) {
                            echo $error;
                        }
                    }
                    ?>
                    <hr>
                    <h4>Create new user</h4>
                    <hr>
                    <div class="form-group">
                        <label for="username" class="col-sm-2 control-label">Username</label>
                        <div class="col-sm-10">
                            <div class="form-group">
                                <input name="username" type="text" class="form-control" id="username" placeholder="User"
                                       required>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="email" class="col-sm-2 control-label">Email</label>
                        <div class="col-sm-10">
                            <div class="form-group">
                                <input name="email" type="email" class="form-control" id="email" placeholder="Email"
                                       required>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="password" class="col-sm-2 control-label">Password</label>
                        <div class="col-sm-10">
                            <div class="form-group">
                                <input name="password" type="password" class="form-control" id="password"
                                       placeholder="Password" required>
                            </div>
                        </div>
                    </div>
                    <?php
                    if (count($user_errors) > 0) {
                        foreach ($user_errors as $error) {
                            echo $error;
                        }
                    }
                    ?>
                    <div class="form-group text-right">
                        <button type="submit" class="btn btn-primary">Submit</button>
                        <button type="reset" class="btn btn-default">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</main>

<script src="../js/libs/jquery.js"></script>
<script src="../js/libs/bootstrap.min.js"></script>

</body>
</html>