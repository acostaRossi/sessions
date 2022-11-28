<?php

session_start();

$msg = "";

foreach ($_SESSION as $key => $value) {

    $msg .= $key;
    $msg .= "=";
    $msg .= $value;
    $msg .= "\n";
}

$responseData = [
    "success" => true,
    "msg" => "Session Id= " . session_id() .
        "\nSession data = " . $msg
];

header("Content-Type: application/json");
echo json_encode($responseData);
