<?php
  $env = parse_ini_file("~/.php-env");
  $hcaptcha_verify_url = 'https://api.hcaptcha.com/siteverify'
  $data = [
    'response' => $_POST["h-captcha-response"],
    'secret' => $env["HCAPTCHA_SECRET"],
    'remoteip' => $_SERVER['REMOTE_ADDR'],
    'sitekey' => 'f1a24450-5f46-43b6-93f8-a6dec6746c76'
  ]
  $options = [
      'http' => [
          'header' => "Content-type: application/x-www-form-urlencoded\r\n",
          'method' => 'POST',
          'content' => http_build_query($data),
      ],
  ];
  $context = stream_context_create($options);
  $success = json_decode(file_get_contents($hcaptcha_verify_url, false, $context)['success'];
  if (!$success) {
      return
  }

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
  $to = 'jb@altusforge.com';
  $subject = 'New Contact from elever.ch';
  $headers = [];
  $headers[] = "From: $fromUser <$fromUser>";
  $headers[] = "MIME-Version: 1.0";
  $headers[] = "Content-type: text/html; charset=UTF-8";

  $success = mail($to, $subject, implode("<br/>", $emailMessage), implode("\n", $headers));
?>

<html>
  <body>
  <?php
    if ($success) {
      echo "Thank you for your message"
    } else {
      echo "That didn't work. Please try again."
    }
  ?>
  </body>
</html>
