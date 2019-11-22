$(document).ready(function(){

var daily = $(".from-inline");
var saveDaily =$(".button");
var MesDaily =$(".daily");

function saveWork() {
MesDaily ="";
$(".daily").empty();
var Message = saveDaily;

$(".button").on("click", function(){
    
if (Message ==="") {
    MesDaily = $(this).daily();
    $(".daily").text(MesDaily.text());
}


});

saveWork();