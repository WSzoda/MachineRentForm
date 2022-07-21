<?php

if (isset($_POST['submit'])){
    $machineName = $_POST["machineName"];
    $range = $_POST['range'];
    $weight = $_POST['weight'];
    $dateStart = $_POST['dateStart'];
    $dateEnd = $_POST['dateEnd'];
    $street = $_POST['street'];
    $zipcode = $_POST['zipcode'];
    $city = $_POST['city'];
    $country = $_POST['country'];
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $company = $_POST['company'];
    $nip = $_POST['nip'];
    $message = $_POST['message'];

    $headers = "From: Formularz maszyn";
    $txt = "Wybrana Maszyna: ".$machineName."\n".
        "Zakres Pracy: ".$range."\n".
        "Obciążenie: ".$weight."\n".
        "Data Startu: ".$dateStart."\n".
        "Data Końca".$dateEnd."\n\n".
        "DANE KLIENTA \n".
        "Ulica: ".$street."\n".
        "Kod Pocztowy: ".$zipcode."\n".
        "Miasto: ".$city."\n".
        "Państwo: ".$country."\n".
        "Imię: ".$name."\n".
        "Nazwisko: ".$surname."\n".
        "Email: ".$email."\n".
        "Numer Telefonu: ".$phone."\n".
        "Firma: ".$company."\n".
        "NIP: ".$nip."\n".
        "Wiadomość: \n\n".$message."\n";

    mail("wojciechszoda@icloud.com", "Formularz maszyn", $txt, $headers);
}