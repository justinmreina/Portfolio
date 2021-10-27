<?php
// PHP program to pop an alert message box on the screen

// Display the alert box
function function_alert($message) {	
	echo "<script>alert('$message');</script>";
}

$name  = htmlspecialchars($_POST['fname']);
$email = htmlspecialchars($_POST['femail']);
$subj  = htmlspecialchars($_POST['fsubj']);
$body  = htmlspecialchars($_POST['fbody']);
$cont  = htmlspecialchars($_POST['fcontact']);

function_alert("In Progress! Ok, lets send a message from $name at $email:  [$cont]$subj - $body");
?>