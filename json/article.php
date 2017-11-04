<?php
  $db = new mysqli("localhost", "root", "root", "Articles");
  if(mysqli_connect_error){
    echo mysqli_connect_error();
  }
 ?>
