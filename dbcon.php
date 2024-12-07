<?php
// Default values for localhost (XAMPP) setup
$servername = "localhost";  // Localhost for both XAMPP and cPanel
$username = "root";         // Default XAMPP username (root). Update for cPanel if necessary.
$password = "";             // Default XAMPP password (empty). Update for cPanel as needed.
$dbname = "capstone";       // Your database name

// Check if we are running on XAMPP or cPanel
$socket = "/opt/lampp/var/mysql/mysql.sock";  // Path to MySQL socket for XAMPP

// Check if the socket file exists (for XAMPP only)
if (file_exists($socket)) {
    // XAMPP specific settings (using socket)
    $conn = new mysqli($servername, $username, $password, $dbname, null, $socket);
} else {
    // cPanel specific settings (no socket for cPanel)
    $conn = new mysqli($servername, $username, $password, $dbname);
}

// Check for successful connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "Connected successfully";
?>
