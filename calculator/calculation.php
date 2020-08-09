<?php
include_once "connection.php";
error_reporting(E_ALL);
ini_set("display_errors",1);
ini_set("display_startup_errors",1);
$inputs = file_get_contents("php://input");
$values = json_decode($inputs);
$SelectSql = "SELECT * FROM calculations where id = 2";
$QuerySql = mysqli_query($conn, $SelectSql);
$FetchSql = mysqli_fetch_assoc($QuerySql);
$result = $FetchSql['results'];
$operator = substr($values, -1);
$number = rtrim($values, $operator);
$operatorCheck = array("+", "-");
$hello = "DOG";
if (in_array($operator, $operatorCheck)){
        if($operator == "+"){
            $result = $result + $number; 
            $hello = "dog";
        }else{
            $result = $result - $number;
            $hello = "cat";
        }
        
}else{
    return '';
}
$data = array();
$UpdateSqL = "UPDATE calculations SET results = '$result' WHERE id = 2";
$QueryUpdate = mysqli_query($conn, $UpdateSqL);
$insertSql = "INSERT INTO history(value, operator) VALUES ('$result', '$operator')";
$queryInsert = mysqli_query($conn, $insertSql);
function test($connection){
    $historySelect = "SELECT * FROM history";
    $queryHistory = mysqli_query($connection, $historySelect);
    return $queryHistory;
};

$data= array("submission"=> $result);
  
  echo json_encode($data);

?>