<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'mailer/src/Exception.php';
require 'mailer/src/PHPMailer.php';
require 'mailer/src/SMTP.php';
  $email=$_POST["email"]??"";

  $mailcontent= '<div style="width: 100%;background: #f9f9f9;padding: 25px;box-sizing: border-box;"> <div style=" text-align: center;"> </div><div style=" background: white; padding: 15px;"> <div style=" text-align: center; font-size: 24px; font-weight: 700; padding-left: 15px; padding-right: 15px; padding-bottom: 12px; padding-top: 15px;"> HIRING </div><b>Email :</b> ' .$email .'</div></div>' ;


 $mail = new PHPMailer(true);

 try {
        //Server settings
        $mail->SMTPDebug = 0;
        $mail->isSMTP();
        $mail->SMTPAuth   = true;
        $mail->SMTPSecure = "tls";                                            //Send using SMTP
        $mail->Host       = "smtp.gmail.com";                                      //Enable SMTP authentication
        $mail->Username   = 'eiwanoreply@gmail.com';                     //SMTP username
        $mail->Password   = 'bjiawistgypugnsv';                         //Enable implicit TLS encryption
        $mail->Port       = 587;                                     //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

         //Recipients
         $mail->setFrom('eiwanoreply@gmail.com', 'EIWAA HIRING');
         $mail->addAddress("devops@marcamonaci.com");  

     
         //Content
         $mail->isHTML(true);                                  //Set email format to HTML
         $mail->Subject = "EIWAA HIRING";
         $mail->Body   =$mailcontent;
         $mail->send();
         return true;
} catch (Exception $e) {
    echo $e;
 return false;
}
?>