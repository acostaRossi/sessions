<?php

session_start();

/*
 *
 * session_destroy()
 * Destroys all data registered to a session
 *
 */
$res = session_destroy();

$responseData = ["success" => true, "msg" => "Session destroyed"];

header("Content-Type: application/json");
echo json_encode($responseData);
