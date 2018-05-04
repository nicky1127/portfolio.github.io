<!doctype html>
<html>
<head>
	<meta charset='utf-8'>
	<title>Profile</title>
	<style>
	table,tr,td {border-collapse:collapse; border:1px solid black; padding:5px;} 
    table {margin:30px auto;}
</style>
</head>
<body>
	First Name : <?php echo $_POST[firstname];?><br/>
	Last name : <?php echo $_POST[lastname];?><br/>
	Email : <?php echo $_POST[email];?><br/>
	Phone : <?php echo $_POST[phone];?><br/>
	Message : <?php echo $_POST[message];?><br/><br/>
	<span style='font-size:1.5em;font-weight:bold; color:red'>Message sent!</span>
</body>
</html>