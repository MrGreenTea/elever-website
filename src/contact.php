<?php
$ini = parse_ini_file("/home/eleverch/.php-env");
$hcaptcha_verify_url = 'https://api.hcaptcha.com/siteverify';
$data = [
  'response' => $_POST["h-captcha-response"],
  'secret' => $ini["HCAPTCHA_SECRET"],
  'remoteip' => $_SERVER['REMOTE_ADDR'],
  'sitekey' => 'f1a24450-5f46-43b6-93f8-a6dec6746c76'
];
$options = [
  'http' => [
    'header' => "Content-type: application/x-www-form-urlencoded\r\n",
    'method' => 'POST',
    'content' => http_build_query($data),
  ],
];
$context = stream_context_create($options);
$response = file_get_contents($hcaptcha_verify_url, false, $context);
$responseJson = json_decode($response);
$success = $responseJson->{'success'};

if (!$success) {
  error_log(print_r($ini, true));
  error_log(print_r($_POST, true));
  error_log(print_r($data, true));
  error_log($response);
  echo "THIS DID NOT WORK";
  return;
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
  <div>
    <?php if ($success): ?>
      <p>Thank you for contacting us</p>
    <?php else: ?>
      <p>That didn't work. Please try again.</p>
    <?php endif ?>
  </div>
</body>

</html>
