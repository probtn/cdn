<?php 
//var_dump($_POST);
$url = "https://api.qlean.ru/api/promo/v1/phone";

$balconies = "balconies";

$data = '{"phone": "'.$_POST['tel'].'", "source": "partner", "offer_data": { "partner_name": "probtn_windows" } }';
if (isset($_POST['additional'])) {
	if ($_POST['additional'] === "on") {
		$data = '{"phone": "'.$_POST['tel'].'", "balconies": "'.$balconies.'", "source": "partner", "offer_data": { "partner_name": "probtn_windows_'.$balconies.'" } }';
	}
}


//echo $data."<br/>";
//var_dump(json_encode( $data ));
//echo"<br/>";

$options = array(
  'http' => array(
    'method'  => 'POST',
    'content' => $data,
    'header'=>  "Content-Type: application/json\r\n" .
                "Accept: application/json\r\n"
    )
);

error_reporting(E_ALL);
$context = stream_context_create( $options );
$result = file_get_contents($url, false, $context); //, false, $context 

$response = json_decode( $result);
//var_dump($result);
//var_dump($response);
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title></title>
        <script src="https://code.jquery.com/jquery-1.11.1.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

        <!-- Optional theme -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

        <!-- Latest compiled and minified JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        <style>
            html, body {
                margin: 0px;
                padding: 0px;
                width: 100%;
                height: 100%;
                background: transparent !important;
            }    
            #send {
                background: #13A14F;
                color: white;
                width:  100%;
            }     
        </style>
    </head>
    <body>
        <form action="GET">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="col-md-12">
                            <center>
                                <img src="images/logo.png" style="margin-top: 20px;"/>
                                <h4>Помоем все окна в<br/>
                                квартире раз 990 рублей
                                </h4>
                                <p>Не важно, сколько их: 5, 7 или 10</p>
                            </center>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <br/>
                        <?php if (isset($response->errors)) {
                        	if (isset($response->errors->phone) && $response->errors->phone[1]==="invalid") {
                        		?>
                        		<h4>Произошла ошибка - телефон <?php echo $response->errors->phone[0]; ?>. Попробуйте заполнить <a href="#" onclick="history.back();">форму еше раз</a></h4>
                        		<?php
                        	} else {
                        	?>
                        	<h4>Произошла ошибка! Попробуйте заполнить <a href="#" onclick="history.back();">форму еше раз</a></h4>
                        	<?php 
							}							
                        } else {
                        	if (isset($response->lead)) { ?>
                        	<h4>Ваша заявка #<?php echo $response->lead->id;?> отправлена!</h4>
                        	<?php } else { ?>
                        	   <h4>Ваша заявка отправлена!</h4> 
                            <?php	
							} 
                        } ?>                        
                    </div>
                </div>
            </div>

        </form>
    </body>
</html>
