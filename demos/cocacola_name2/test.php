<?php

?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title></title>
    </head>
    <body>

<?php 
$name = "Testname";
$emojies = array("COOL"=>"Emojis/COOL.png", 
    "ENJOY"=>"Emojis/ENJOY.png",
    "FUNKY"=>"Emojis/FUNKY.png",
          "HI"=>"Emojis/HI.png",
          "LET'S PARTY"=>"Emojis/LETS_PARTY.png",
          "NIAJE"=>"Emojis/NIAJE.png",
          "ON FLEEK"=>"Emojis/ON_FLEEK.png",
          "POA"=>"Emojis/POA.png",
          "SEMA"=>"Emojis/SEMA.png",
          "WOW"=>"Emojis/WOW.png");
?>

        <table>
            <thead>
                <tr>
                    <th>EMOJIE</th>
                    <th>Name</th>
                    <th>Image link</th>
                    <th>image</th>
                </tr>
            </thead>
            <?php
                foreach ($emojies as $key => $val) {
            ?>
        <tr>
            <td><?php echo $key; ?></td>
            <td><?php echo $name; ?></td>
            <td>
                <?php
                    $path = "http://demo.probtn.com/button_example2/cocacola_name2/image.php?param=".$name."$".$key;
                ?>
                <a href="<?php echo $path; ?>"><?php echo $path; ?></a>
            </td>
            <td><img alt="<?php echo $path; ?>" src="<?php echo $path; ?>"/></td>
        </tr>
            <?php
                }
            ?>
        </table>
    </body>
</html>
