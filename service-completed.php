<!-- STAR PHP CODE -->
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the rating value from the form
    $rating = $_POST['rating'];

    // Sanitize and validate the rating value
    $rating = filter_var($rating, FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);

    if ($rating && $rating >= 0 && $rating <= 5) {
        // Store or process the rating value (e.g., save to a database)
        // For example, using PDO to insert into a MySQL database
        /*
        $dsn = 'mysql:host=your_host;dbname=your_database';
        $pdo = new PDO($dsn, 'username', 'password');
        $sql = "INSERT INTO ratings (user_rating) VALUES (:rating)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':rating', $rating);
        $stmt->execute();
        */

        echo "Rating saved: " . $rating;
    } else {
        echo "Invalid rating.";
    }
}
?>