<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

$data = json_decode(file_get_contents("php://input"), true);

$name = $data["name"] ?? "";
$email = $data["email"] ?? "";
$phone = $data["phone"] ?? "";
$subject = $data["subject"] ?? "General Enquiry"; // <-- add default
$message = $data["message"] ?? "";

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'mail.amrlegacy.in';
    $mail->SMTPAuth = true;
    $mail->Username = 'sales@amrlegacy.in';
    $mail->Password = 'Sales@2024'; 
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom('sales@amrlegacy.in', 'AMR Legacy');
    $mail->addAddress('sales@amrlegacy.in');

    $mail->isHTML(true);
    $mail->Subject = "New Enquiry - $name";
    $mail->Body = "
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Subject:</strong> $subject</p>
        <p><strong>Message:</strong><br>$message</p>
    ";

    $mail->send();
    echo json_encode(["status" => "success"]);
} catch (Exception $e) {
    echo json_encode(["status" => "error", "message" => $mail->ErrorInfo]);
}
?>