var boat_position = $("#my_image").offset();

$("#myMessage").mouseover(function() {
  document.getElementById('myMessage').innerHTML = " ";
});

function gimmeBoatPosition(){
var image_position = $("#my_image").offset();
boat_position=image_position.left;
  return boat_position;
}

function isBoatFull(){
  if( $("#wolf_boat").is(":visible") == true || $("#goat_boat").is(":visible") == true || $("#cabbage_boat").is(":visible") == true){
         var boat_full=1;
  }
  else { var boat_full=0; }
  return boat_full;
}

function didYouWin(){
// hide the hoverlays
if( $("#wolf_delivered").is(":visible") == true && $("#goat_delivered").is(":visible") == true && $("#cabbage_delivered").is(":visible") == true){
  /*You won*/
    $('.you-won').addClass('visible');
     console.log("You won");
  	$('.characters').hide();
  }
};

function startGame(){
// hide the hoverlays
   	$('.characters').show();

		$('.game-over').removeClass('visible');
    $('.you-won').removeClass('visible');
 		$('#goat').css('display','block');
 		$('#wolf').css('display','block');
 		$('#cabbage').css('display','block');
    $('#goat_boat').css('left','900px');
 		$('#wolf_boat').css('left','900px');
 		$('#cabbage_boat').css('left','900px');
 		$('#goat_boat').css('display','none');
 		$('#wolf_boat').css('display','none');
 		$('#cabbage_boat').css('display','none');
 		$('#goat_delivered').css('display','none');
 		$('#wolf_delivered').css('display','none');
 		$('#cabbage_delivered').css('display','none');
 		$('#my_image').css('left','900px');
    var startPosition = $("#my_image").offset();
    console.log(startPosition);

/* 		$('#my_image').css('display','block'); */

};

function restartGame() {
  		startGame();
};

function followKeys() {
  $("body").keydown(function(e) {
    var max = $('body').width();
    var min = 0;
    var move_amt = 15;
    var position = $("#my_image").offset();
    if(e.which == 37 && position.left > 200) { // left
      var new_left = ((position.left-move_amt < min) ? min : position.left-move_amt);
      $("#my_image").offset({ left: new_left});
      $("#goat_boat").offset({ left: new_left});
      $("#wolf_boat").offset({ left: new_left});
      $("#cabbage_boat").offset({ left: new_left});
    }
    else if(e.which == 39 && position.left <= 900){ // right and less than 900pixels from the left edge
      var new_left = ((position.left+move_amt > max) ? max : position.left+move_amt);
      $("#my_image").offset({ left: new_left});
      $("#goat_boat").offset({ left: new_left});
      $("#wolf_boat").offset({ left: new_left});
      $("#cabbage_boat").offset({ left: new_left});
    }
    $('#displayPosition').html(position.left);
    console.log(position);
    console.log(position.left);
    boat_position=position.left;
    console.log(boat_position);

    if( boat_position < 850) {
      if (boat_position>500){
        if ($("#wolf_delivered").is(":visible") == true){
           		$('#wolf_delivered').css('transform','scaleX(-1)');
              $('#wolf_boat').css('transform','scaleX(-1)');
        }
        if ($("#goat_delivered").is(":visible") == true){
           		$('#goat_delivered').css('transform','scaleX(-1)');
           		$('#goat_boat').css('transform','scaleX(-1)');
        }
      }
      else {
      if ($("#wolf").is(":visible") == true && $("#goat").is(":visible") == true && $("#goat").is(":visible") == true)
      {  
       /*    alert("wolf eats the goat and goat ate your cabbage!!");      */
        document.getElementById('submessage').innerHTML = "Your goat had a bite of your cabbage--then your wolf ate your goat!";
        $('.game-over').addClass('visible');
        $('.characters').hide();
      }  
      else if ($("#wolf").is(":visible") == true && $("#goat").is(":visible") == true)
      {  
       /*    alert("wolf eats the goat!!");      */
        document.getElementById('submessage').innerHTML = "Your wolf ate your goat!";
        $('.game-over').addClass('visible');
        $('.characters').hide();
      }  
      else if($("#goat").is(":visible") == true && $("#cabbage").is(":visible") == true)
      {  
       /*    alert("goat ate cabbage!!");      */
        document.getElementById('submessage').innerHTML = "Your goat ate your cabbage!";
        $('.game-over').addClass('visible');
        $('.characters').hide();
      }  
      if ($("#wolf_delivered").is(":visible") == true && $("#goat_delivered").is(":visible") == true)
      {  
       /*    alert("wolf eats the goat!!");      */
        document.getElementById('submessage').innerHTML = "Your wolf ate your goat!";
        $('.game-over').addClass('visible');
        $('.characters').hide();
      }  
      else if($("#goat_delivered").is(":visible") == true && $("#cabbage_delivered").is(":visible") == true)
      {  
       /*    alert("goat ate cabbage!!");      */
        document.getElementById('submessage').innerHTML = "Your goat ate your cabbage!";
        $('.game-over').addClass('visible');
        $('.characters').hide();
      }  
      }     
    }
    
    });


	$(".restart-game").click(function () {
		restartGame();
	});

  
  
}

followKeys()


function selectAnimal() {

$("#goat").click(function(e){
  gimmeBoatPosition()
  full_flag=isBoatFull();
  if (full_flag == 0 && boat_position>850){
      $("#goat_boat").toggle();
      $("#goat").toggle();
  }
  else {document.getElementById('myMessage').innerHTML = "Your boat can carry 1 belonging at a time. Be close enough to the shore!";}
});
$("#goat_boat").click(function(e){
  if (boat_position<200){
    $("#goat_delivered").toggle();
    $("#goat_boat").toggle();
  }
  else if (boat_position>850) {$("#goat").toggle();
  $("#goat_boat").toggle();}
  else {document.getElementById('myMessage').innerHTML = "Get closer to the shore before unloading your boat";}
  didYouWin();
});  
$("#goat_delivered").click(function(e){
  if (boat_position<200){ $("#goat_boat").toggle();
  $("#goat_delivered").toggle();}
}); 

$("#wolf").click(function(e){
  gimmeBoatPosition()
  full_flag=isBoatFull();
  if (full_flag == 0 && boat_position>850){
      $("#wolf_boat").toggle();
      $("#wolf").toggle();
  } 
  else {document.getElementById('myMessage').innerHTML = "Your boat can carry 1 belonging at a time. Be close enough to the shore!";}
});  
$("#wolf_boat").click(function(e){
  if (boat_position<200){
    $("#wolf_delivered").toggle();
    $("#wolf_boat").toggle();
  }
  else if (boat_position>850) {$("#wolf").toggle();
  $("#wolf_boat").toggle();}
  else {document.getElementById('myMessage').innerHTML = "Get closer to the shore before unloading your boat";}
  didYouWin();
});   
$("#wolf_delivered").click(function(e){
  if (boat_position<200){ $("#wolf_boat").toggle();
  $("#wolf_delivered").toggle();}
});   

$("#cabbage").click(function(e){
  gimmeBoatPosition()
  full_flag=isBoatFull();
  if (full_flag == 0 && boat_position>850){
      $("#cabbage_boat").toggle();
      $("#cabbage").toggle();
  }
  else {document.getElementById('myMessage').innerHTML = "Your boat can carry 1 belonging at a time. Be close enough to the shore!";}
});  
$("#cabbage_boat").click(function(e){
  if (boat_position<200){
    $("#cabbage_delivered").toggle();
    $("#cabbage_boat").toggle();
  }
  else if (boat_position>850) {$("#cabbage").toggle();
  $("#cabbage_boat").toggle();}
  else {document.getElementById('myMessage').innerHTML = "Get closer to the shore before unloading your boat";}
  didYouWin();
});   
$("#cabbage_delivered").click(function(e){
  if (boat_position<850){ $("#cabbage_boat").toggle();
  $("#cabbage_delivered").toggle();}
});    

}

selectAnimal()