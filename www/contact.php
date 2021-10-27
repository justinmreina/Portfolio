<html>
<head>
	<script>
	label, input {
		display: block;
	}

	label {
		margin-bottom: 20px;
	}
</script>
</head>

<body>
	<center><p style="color:white"><b>Get in Touch</b></p></center>
	
	<p style="color:white">&nbsp; &nbsp; &nbsp; @note &nbsp; &nbsp; &nbsp; &nbsp; WIP! Contact me directly for now @ <i>justinmreina@gmail.com</i></p>
	
	<br>

	<form name="form1" method="post" action="" style="color:white">
		<label for="fname">Name:</label><br>
		<input type="text" id="fname" name="fname" size="50"><br><br>

		<label for="femail">Email:</label><br>
		<input type="text" id="femail" name="femail" size="50"><br><br>

		<label for="femail">Contact:</label><br>
		<select name="fcontact" style="margin-bottom: 20px;">
			<option value="general">General	</option>
			<option value="thingiverse">Thingiverse Part Design Request</option>
			<option value="embedded">Embedded Q/A</option>
			<option value="work">Portfolio or Work</option>
			<option value="ideas">Ideation</option>
			<option value="dreams">Tinkering or Dreams</option>
			<option value="misc">Misc./Feedback</option>
		</select><br>

		<label for="fsubj">Subj:</label><br>
		<input type="text" id="fsubj" name="fsubj" size="50"><br><br>

		<label for="fbody">Message:</label><br>
		<textarea rows = "5" cols = "60" size = "50" name = "fbody">
		</textarea><br>	

		
		<input type="submit" style="position: relative;	top: 40px; left: 300px;">

	</form>

	<center>
		<a href="https://www.linkedin.com/in/justin-reina" style="color:white">LinkedIn</a> | <a href="https://join.skype.com/invite/I1RuN9BV8jjQ" style="color:white">Skype</a> | <a href="javascript:alert(\"Drop me a line - justinmreina@gmail.com\")" style="color:white">Google</a> | <a href="https://www.facebook.com/justinmreina" style="color:white">Facebook</a> | <a href="mailto:justinmreina@gmail.com" style="color:white">Email</a> | 
	<center>
 
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $_POST['search'];
  include 'contact-resp.php';
}
?>
    
</body>
</html> 