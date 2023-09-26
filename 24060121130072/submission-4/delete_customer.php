<?php 
// File         : delete_customer.php
// Deskripsi    : untuk menghapus customer tertentu

require_once('../bookorama/lib/db_login.php');

$id = $_GET['id'];
$query = "DELETE FROM customers WHERE customerid='".$id."' ";

$result = $db->query($query);
if (!$result){
    die("Could not query the database: <br />".$db->error."<br>Query: ".$query);
} else {
    $db->close();
}

// Redirect ke halaman view_customer.php
header('Location: view_customer.php');

?>
