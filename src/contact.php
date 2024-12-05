<?php
  $name = $_POST["name"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  $company = $_POST["company"];
  $message = $_POST["message"];


  $emailMessage = [];
  $emailMessage[] = "Name: $name";
  $emailMessage[] = "E-mail: $email";
  $emailMessage[] = "Phone: $phone";
  $emailMessage[] = "Company: $company";
  $emailMessage[] = "Message: $message";

  // SEND MAIL
  $fromUser = 'system@altusforge.com';
  $to = 'th@altusforge.com';
  $subject = 'New Contact from elever.ch';
  $headers = [];
  $headers[] = "From: $fromUser <$fromUser>";
  $headers[] = "MIME-Version: 1.0";
  $headers[] = "Content-type: text/html; charset=UTF-8";

  mail($to, $subject, implode("<br/>", $emailMessage), implode("\n", $headers));
?>
