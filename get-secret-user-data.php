<?php

session_start();

if(!isset($_SESSION['logged-in']) || $_SESSION['logged-in'] === false) {
    http_response_code(401);
    die();
}

$msg = "Your secret data is " . md5($_SESSION["username"]);

$responseData = [
    "success" => true,
    "msg" => $msg,
];

header("Content-Type: application/json");
echo json_encode($responseData);
