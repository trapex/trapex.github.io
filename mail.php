<?php
$recepient = "tanya.pmk@pmk.com"; //Почта на которую будут уходить заявки
$sitename = "TrendTales"; //Название сайта
//
//
$name = trim($_POST["name"]); //Создаем переменную $name и помещаем в неё значения из поля формы 'name'
$mail = trim($_POST["email"]); //Создаем переменную $mail и помещаем в неё значения из поля формы 'email'
$text = trim($_POST["text"]); //Создаем переменную $mail и помещаем в неё значения из поля формы 'email'
//Если надо добавить ещё поля в форму, нужно добавить переменную по примеру 8-й строки и 
//её же в выражение на 12-й строке
//
$message = "\Name: $name \nEmail: $mail\Message: $text"; //Создаем шаблон письма
$pagetitle = "Новая заявка с сайта \"$sitename\""; //Задаем тему письма
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
if($message){
    header("https://trendtales.webflow.io/contact/contact");  //В случае успешной отправки перенаправляем пользователя на заранее созданную страницу с благодарностью
  }else{  //В случае ошибки выводим такое сообщение:
    echo "Oops! Something went wrong while submitting the form";
  }
?>