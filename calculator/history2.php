<?php
include_once ("calculation.php");
error_reporting(E_ALL);
ini_set("display_errors",1);
ini_set("display_startup_errors",1);
echo $hello;
$fetch = $queryHistory;
$history = array();
test($conn);
while($fetchHistory = mysqli_fetch_assoc($fetch)){
    $history[] = $fetchHistory;
}
echo json_encode($history);
?>