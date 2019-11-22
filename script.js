$(document).ready(function(){
var daily = $(".from-inline");
var saveDaily =$(".button");
var MesDaily =$(".daily");

function saveWork() {
$(".button").on("click", function(){
var Message = saveDaily;
if (Message) {
    MesDaily = $(this).daily();
    $(".daily").text(MesDaily);
}

});

saveWork(); 