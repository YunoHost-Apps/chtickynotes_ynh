<?php
$text=file_get_contents('php://input');
if ($text!="") {
  file_put_contents('allnotes.json', $text);
  header("Cache-Control: no-cache, must-revalidate");
  header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
  header("Content-Type: application/json; charset=utf-8");
  echo($text);
}
?>