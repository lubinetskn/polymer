<?
if (array_key_exists('clientmessage', $_POST)) {
   $to = 'lubinetskn@gmail.com';
   $subject = 'Заполнена контактная форма с '.$_SERVER['HTTP_REFERER'];
   $subject = "=?utf-8?b?". base64_encode($subject) ."?=";
   $message = "Имя: ".$_POST['clientname']."\nEmail: ".$_POST['clientemail']."Т: ".$_POST['clientphone']."\nIP: ".$_SERVER['REMOTE_ADDR']."\nСообщение: ".$_POST['clientmessage'];
   $headers = 'Content-type: text/plain; charset="utf-8"';
   $headers .= "MIME-Version: 1.0\r\n";
   $headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";
   mail($to, $subject, $message, $headers);
   echo $_POST['clientname'];
}
?>

			