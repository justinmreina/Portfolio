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

$to      = 'justinmreina@gmail.com';
$subject = $subj;
$message = "Form Reply:\r\nName: $name\r\nEmail: $email\r\nType: $cont\r\n\r\n$body";
$headers = 'From: admin@justinreina.com'       . "\r\n" .
  		   'Reply-To: admin@justinreina.com' . "\r\n" .
		   'X-Mailer: PHP/' . phpversion();

//Send Email
mail($to, $subject, $message, $headers);

//Send Receipt
$message = "Subject:$subject\r\n\r\nForm Reply:\r\nName: $name\r\nEmail: $email\r\nType: $cont\r\n\r\n$body";
$subject = "Email Receipt from justinreina.com";

mail($email, $subject, $message, $headers);

function_alert("Message recorded w/receipt, thank you!");

?>