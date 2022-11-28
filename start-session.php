<?php

/*
 *
 * session_start()
 * Start new or resume existing session
 *
 */
session_start();

$_SESSION['logged-in'] = true;
$_SESSION['username'] = $_POST['username'];
$_SESSION['password'] = $_POST['password'];

$responseData = [
    "success" => true,
    "msg" => "Login succesfully with session_id = " . session_id()
];

header("Content-Type: application/json");
echo json_encode($responseData);
