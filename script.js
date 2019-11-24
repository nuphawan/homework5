$(document).ready(function(){
    let dailyPlan = false;
    let action = moment().format("MMMM Do YYYY");
    let time24 = moment().format("H");
    let time12 = moment().format("h");
    
    if (dailyPlan) {
        time24 = 13;
        time12 = 1;
    }
  
    let $dateHeading = $(".navbar");
    $dateHeading.text(action);

    let storedPlans = JSON.parse(localStorage.getItem("storedPlans"));
  
    if (dailyPlan) { console.log(storedPlans); }
  
    if (storedPlans !== null) {
      planTextArr = storedPlans;
    } else {

      planTextArr = new Array(9);
      planTextArr[4] = "breakfast lunch shopping dinner";
    }
  
    if (dailyPlan) { console.log("full array of plned text",planTextArr); }
  

    let $plannerDiv = $(".form-inline");

    $plannerDiv.empty();
  
    if (dailyPlan) { console.log("current time",time12); }

    for (let hour = 9; hour <= 17; hour++) {

      let index = hour - 9;
      let $rowDiv = $("<div>");
      $rowDiv.addClass("row");
      $rowDiv.addClass("form-inline");
      $rowDiv.attr("hour-index",hour);

      let $col2TimeDiv = $("<div>");
      $col2TimeDiv.addClass("form-control mr-sm-2");
    

      const $timeBox = $("<span>");

      $timeBox.attr("class","timeBox");
      let displayHour = 0;
      let ampm = "";
      if (hour > 12) { 
        displayHour = hour - 12;
        ampm = "pm";
      } else {
        displayHour = hour;
        ampm = "am";
      }

      $timeBox.text("${displayHour} ${ampm}");
  

      $rowDiv.append($col2TimeDiv);
      $col2TimeDiv.append($timeBox);

      let $dailyPlanSpn = $("<input>");
  
      $dailyPlanSpn.attr("id","input-${index}");
      $dailyPlanSpn.attr("hour-index",index);
      $dailyPlanSpn.attr("type","text");
      $dailyPlanSpn.attr("class","dailyPlan");
      $dailyPlanSpn.val( planTextArr[index] );
    
      let $col9IptDiv = $("<div>");
      $col9IptDiv.addClass("col-md-9");

      $rowDiv.append($col9IptDiv);
      $col9IptDiv.append($dailyPlanSpn);
      let $col1SaveDiv = $("<div>");
      $col1SaveDiv.addClass("col-md-1");
  
      let $saveBtn = $("<i>");
      $saveBtn.attr("id","saveid-${index}");
      $saveBtn.attr("save-id",index);
      $saveBtn.attr("class","btn btn-outline-success my-2 my-sm-0");

      $rowDiv.append($col1SaveDiv);
      $col1SaveDiv.append($saveBtn);

 
      updateRowColor($rowDiv, hour);
      

      $plannerDiv.append($rowDiv);
    };
  

    function updateRowColor ($hourRow,hour) { 
  
      if (dailyPlan) { console.log("rowColor ",time24, hour); }
  
      if ( hour<time24) {
        if (dailyPlan) { console.log("lessThan"); }
        $hourRow.css("background-color","lightgrey")
      } else if ( hour > nowHour24) {
        if (dailyPlan) { console.log("greaterthan"); }
        $hourRow.css("background-color","lightgreen")
      } else {
        if (dailyPlan) { console.log("eqaul"); }
        $hourRow.css("background-color","tomato")
      }
    };

    $(document).on("click","i", function(event) {
      event.preventDefault();  
  
      if (dailyPlan) { console.log("click pta before"+ planTextArr); }
  
      let $index = $(this).attr("save-id");
  
      let inputId = ("#input")-+$index;
      let $value = $(inputId).val();
  
      planTextArr[$index] = $value;
  
  
      if (dailyPlan) { console.log("value ", $value); }
      if (dailyPlan) { console.log("index ", $index); }
      if (dailyPlan) { console.log("click pta after"+ planTextArr); }
  

      $("#saveid-${$index}").removeClass("shadowPulse");
      localStorage.setItem("storedPlans", JSON.stringify(planTextArr));
    });  

    $(document).on("change","input", function(event) {
      event.preventDefault();  
      if (dailyPlan) { console.log("onChange"); }
      if (dailyPlan)) { console.log("id", $(this).attr("hour-index")); }
   
      let i = $(this).attr("hour-index");
      $("#saveid-${i}").addClass("shadowPulse");
    });
  });

function workDaily() {
    var dailyWorkt =$(".form-inline");
    var clickSave = $(".button");
    var MesDaily =$(".daily");

    console.log(dailyWorkt);
    console.log(clickSave);
    console.log(MesDaily)

    $(".button").on("click", function(){
        if (var i=0; i< MesDaily; i++) {
            
        }   
    })
}