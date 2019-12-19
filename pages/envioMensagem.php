<?php
    $email = $_POST["email"];
    $titulo = $_POST["titulo"];
    $mensagem = $_POST["mensagem"];

    require 'PHPMailer-master/src/PHPMailer.php';
    require 'PHPMailer-master/src/SMTP.php';
    require 'PHPMailer-master/src/Exception.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    $mail = new PHPMailer();
    $mail->isSMTP();
    $mail->SMTPAuth = "true";
    $mail->SMTPSecure = "tls";
    $mail->Host = "smtp.gmail.com";
    $mail->Port = "587";
    $mail->isHTML();
    $mail->Username = "matheus271200.ms@gmail.com";
    $mail->Password = "17196569";
    $mail->setFrom("matheus271200.ms@gmail.com");
    $mail->Subject = $titulo;
    $mail->Body = $mensagem;
    $mail->addAddress($email);
 
    $mail->Send(); 
    

    if( $mail->Send() )
    {
        $resultado = array("resultado" => "send");
    }
    else $resultado = array("resultado" => "erro!");

    print json_encode($resultado);
?>