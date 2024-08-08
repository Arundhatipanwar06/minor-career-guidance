<?php
// Database credentials
$servername = "localhost";
$username = "sonali salve";
$password = "987654321";
$dbname = "projectdata";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$email = $_POST['emailId'];
$password = $_POST['passWord'];

// Hash the password (optional but recommended)
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// SQL query to insert data into the database
$sql = "INSERT INTO users (email, password) VALUES ('$email', '$hashed_password')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
?>
