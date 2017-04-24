<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>Document sans titre</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<meta http-equiv="refresh" content="0; URL=index.html#contact">
</head>
<?php
$nom = $_POST['name'];
    
$message = $_POST['message'];
 
$to = 'leo.massy@orange.fr';
$objet = "test"
 
/* En-têtes de l'e-mail */
$headers = "From: $nom \r\n\r\n";
  
/* Envoi de l'e-mail */
mail($to, $objet, $message, $headers)
 
?>