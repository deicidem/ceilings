<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

// Instantiation and passing `true` enables exceptions
// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);


try {
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  //Server settings
  $mail->SMTPDebug = 2;                                       // Enable verbose debug output
  $mail->isSMTP();                                            // Set mailer to use SMTP // Specify main and backup SMTP servers
  $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
  $mail->Host = "ssl://smtp.gmail.com";
  $mail->Port = 465;
  $mail->Username = "tolevelhost@gmail.com";
  $mail->Password = "543bf72a1";                            // SMTP password
  $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
  $mail->setFrom('tolevelhost@gmail.com', 'xxx');
  $mail->addAddress('
nikolai.u.rogozin@gmail.com', 'Николай');     // Add a recipient

  // Content
  $mail->isHTML(true);                                  // Set email format to HTML
  $mail->Subject = 'Заказ услуги с сайта xxx';

  // Тело письма
  $body = 'Пользователь хочет бесплатные светильники <br>
      Имя: ' . $name . ', <br>
      Телефон: ' . $phone . ' ';
  $mail->msgHTML($body);
  $mail->send();
  return true;
} catch (Exception $e) {
  return false;
}
