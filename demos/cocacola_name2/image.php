<?php

/*** set the header for the image ***/
header("Content-type: image/jpeg");

$text = 'CocaCola$WOW';
if (isset($_GET['param'])) {
   $text = $_GET['param'];
}

/*** specify an image and text ***/
$text1 = "CocaCola";
/*if (isset($_GET['text'])) {
   $text1 = $_GET['text'];
}*/

$text_emoji = "WOW";
/*if (isset($_GET['text_emoji'])) {
   $text_emoji = $_GET['text_emoji'];
}*/

$t = explode('$', $text);
$text1 = $t[0];
$text1 = substr($text1, 0, 10);
$text_emoji = $t[1];

$im = writeToImage('coca_banner.png', $text1);

$text_color = imagecolorallocate($im, 255, 255, 255);

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

$emojiImg = @imagecreatefrompng($emojies[$text_emoji]);

$diff = 550 - 130;
$sizeEmoji = imagettfbbox(35, 90, 'you_font.ttf', $text_emoji); 
$y = 130 + $diff/2 + abs($sizeEmoji[3]/2); 

/*echo "<pre>";
print_r($sizeEmoji);
print_r($x);
echo "</pre>";*/
    
imagettftext($im, 35, 90, 295, $y, $text_color, 'you_font.ttf', $text_emoji);

$emojiImg = imagerotate($emojiImg, 90, 0);
imagecopy($im, $emojiImg, 140, 300, 0, 0, 55, 62);

/*** spit the image out the other end ***/
imagepng($im);

function writeToImage($imagefile, $text){
/*** make sure the file exists ***/
if(file_exists($imagefile))
    {    
    /*** create image ***/
    $im = @imagecreatefrompng($imagefile); //imagecreatefromjpeg

    $text_color = imagecolorallocate($im, 255, 255, 255);

    $diff = 670 - 330;
    $size = imagettfbbox(44, 0, 'you_font.ttf', $text); 
    $x = 330 + ($diff / 2 - abs($size[2]/2));   
    
    imagettftext($im, 44, 0, $x, 400, $text_color, 'you_font.ttf', $text);
    }
else
    {
    /*** if the file does not exist we will create our own image ***/
    /*** Create a black image ***/
    $im  = imagecreatetruecolor(150, 30); /* Create a black image */

    /*** the background color ***/
    $bgc = imagecolorallocate($im, 255, 255, 255);

    /*** the text color ***/
    $tc  = imagecolorallocate($im, 0, 0, 0);

    /*** a little rectangle ***/
    imagefilledrectangle($im, 0, 0, 150, 30, $bgc);

    /*** output and error message ***/
    imagestring($im, 1, 5, 5, "Error loading $imagefile", $tc);
    }
return $im;
}

?>