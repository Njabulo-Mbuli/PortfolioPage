    <?php
        $to='admin@njabulombuli.co.za';
        $header = "From: info@".$_SERVER["SERVER_NAME"]."\n";
        $header .= "Content-Type: text/html; charset=iso-8859-1\n";

        $sender=$_POST['name'];
        $email=$_POST['email'];
        $cmt=$_POST['message'];
        $phno=$_POST['telephone'];

        $subject='Message Subject';

        $body='<table width="90%" border="0">
        <tr>
        <td><b>Sender:</b></td> <td>'.$sender.'</td>
        </tr>
        <tr>
        <td><b>Email:</b></td> <td>'.$email.'</td>
        </tr>
        <tr>
        <td><b>Phone No:</b></td> <td>'.$phno.'</td>
        </tr>
        <tr>
        <td><b>Comment:</b></td> <td>'.$cmt.'</td>
        </tr>
        <tr></table>';



        mail($to,$subject,$body,$header);
       header('location:index.html');



    ?>
