<?php
    $name = $_POST['name'];
    $phone = $_POST['tel'];
    $email = $_POST['email'];
    $date = $_POST['date'];

    $name = htmlspecialchars($name);
    $phone = htmlspecialchars($phone);
    $email = htmlspecialchars($email);
    $date = htmlspecialchars($date);
    
    if (!empty($date)) {
        $date = date('d.m.Y', strtotime($date));
    } 

    $to = "";
    $subject = 'Заявка с сайта';
    $message = '
    <html>
        <head>
            <title>Заявка с сайта</title>
        </head>
        <body>
            <p>Имя: '.$name.'</p>
            <p>Телефон: '.$phone.'</p>
            <p>E-mail: '.$email.'</p>
            <p>Дата записи: '.$date.'</p>
        </body>
    </html>';

    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";  

    mail($to, $subject, $message, $headers)   
    
?>