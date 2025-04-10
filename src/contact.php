<?php
$ini = parse_ini_file("/home/eleverch/.php-env");
$captcha_verify_url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
$data = [
  'response' => $_POST["cf-turnstile-response"],
  'secret' => $ini["CAPTCHA_SECRET"],
  'remoteip' => $_SERVER['REMOTE_ADDR'],
  'sitekey' => '0x4AAAAAAA5i8vg6cCYjfUzh'
];
$options = [
  'http' => [
    'header' => "Content-type: application/x-www-form-urlencoded\r\n",
    'method' => 'POST',
    'content' => http_build_query($data),
  ],
];
$context = stream_context_create($options);
$response = file_get_contents($captcha_verify_url, false, $context);
$responseJson = json_decode($response);
$success = $responseJson->{'success'};

if (!$success) {
  http_response_code(400);
  echo "THIS DID NOT WORK. Please try again.";
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
$fromUser = 'noreply@elever.io';
$to = 'th@altusforge.com';
$subject = 'New Contact from elever.ch';
$headers = [];
$headers[] = "From: $fromUser <$fromUser>";
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-type: text/html; charset=UTF-8";

$mailSuccess = mail($to, $subject, implode("<br/>", $emailMessage), implode("\n", $headers));

// SEND SLACK MESSAGE
$slackWebhookUrl = $ini["SLACK_WEBHOOK"];
$slackMessage = "New Contact Form Submission:\n";
$slackMessage .= "Name: $name\n";
$slackMessage .= "Email: $email\n";
$slackMessage .= "Phone: $phone\n";
$slackMessage .= "Company: $company\n";
$slackMessage .= "Message: $message";

$slackData = [
  'text' => $slackMessage,
];

$slackOptions = [
  'http' => [
    'header' => "Content-type: application/json\r\n",
    'method' => 'POST',
    'content' => json_encode($slackData),
  ],
];

$slackContext = stream_context_create($slackOptions);
$slackResponse = file_get_contents($slackWebhookUrl, false, $slackContext);

$slackSuccess = ($slackResponse !== false); // Check if the request was successful

if (!$mailSuccess || !$slackSuccess) {
  http_response_code(400);
}
?>

<html>

<body>
<div>
  <?php if ($mailSuccess && $slackSuccess): ?>
      <p>Thank you for contacting us</p>
  <?php else: ?>
      <p>That didn't work. Please try again.</p>
  <?php endif ?>
</div>
</body>

</html>