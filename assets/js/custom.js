// Booking Form Javascript Code//
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Booking Form Javascript Code//

$('.SingleTripSort').click(function(event) {
      /* Act on the event */
        var myThis = $(this);
        var item = $('.sortingDiv');
        var itemSort = $('.sort_item', item);

        itemSort.sort(function(a, b){

            var checkA = $(a).text();
            var checkB = $(b).text();

          //Covert to lowercase for checking letters.

            lowerCaseA = checkA.toLowerCase();
            lowerCaseB = checkB.toLowerCase();

          //Check what button was clicked
          
          if(myThis.hasClass('ac')){
           
           return (lowerCaseA > lowerCaseB) ? 1 : (lowerCaseA < lowerCaseB) ? -1 : 0; // ascending sort

          }else if(myThis.hasClass('dec')){ 

           return (lowerCaseA < lowerCaseB) ? 1 :  (lowerCaseA > lowerCaseB) ? -1 : 0; // descending sort

          }else{

            return Math.random()*10 > 5 ? 1 : -1; // random sort
          }
      
        });
        //loop through items
        $.each(itemSort, function(index, val){

            $(item).append(val);
    
        });

      //   e.preventDefault();
  });
$(document).ready(function(){
      $(".SingleTripSort").click(function(){
            var className = $('.SingleTripSort').attr('class');
           // alert(className);
            if(className == "SingleTripSort ac"){
                  $(".SingleTripSort").removeClass("ac");
                  $(".SingleTripSort").addClass("dec");
            }else{
                  $(".SingleTripSort").removeClass("dec");
                  $(".SingleTripSort").addClass("ac");
            }
      });
});

window.onload = function () {
      var booking_form_label_option = document.getElementById('booking_form_label_option');
      var chkss = booking_form_label_option.getElementsByTagName("INPUT");
      for (var i = 0; i < chkss.length; i++) {
          chkss[i].onclick = function () {
              for (var i = 0; i < chkss.length; i++) {
                  if (chkss[i] != this && this.checked) {
                      chkss[i].checked = false;
                  }
              }
          };
      }
      var booking_form_label_option_multi_city = document.getElementById('booking_form_label_option_multi_city');
      var chks = booking_form_label_option_multi_city.getElementsByTagName("INPUT");
      for (var i = 0; i < chks.length; i++) {
          chks[i].onclick = function () {
              for (var i = 0; i < chks.length; i++) {
                  if (chks[i] != this && this.checked) {
                      chks[i].checked = false;
  
                  }
              }
          };
      }
      var booking_form_label_option_multi_city1 = document.getElementById('booking_form_label_option_multi_city1');
      var booking_form_label_option_multi_city1chks = booking_form_label_option_multi_city1.getElementsByTagName("INPUT");
      for (var i = 0; i < booking_form_label_option_multi_city1chks.length; i++) {
          booking_form_label_option_multi_city1chks[i].onclick = function () {
              for (var i = 0; i < booking_form_label_option_multi_city1chks.length; i++) {
                  if (booking_form_label_option_multi_city1chks[i] != this && this.checked) {
                      booking_form_label_option_multi_city1chks[i].checked = false;
  
                  }
              }
          };
      }
      var booking_form_label_option_multi_city2 = document.getElementById('booking_form_label_option_multi_city2');
      var booking_form_label_option_multi_city2chks = booking_form_label_option_multi_city2.getElementsByTagName("INPUT");
      for (var i = 0; i < booking_form_label_option_multi_city2chks.length; i++) {
          booking_form_label_option_multi_city2chks[i].onclick = function () {
              for (var i = 0; i < booking_form_label_option_multi_city2chks.length; i++) {
                  if (booking_form_label_option_multi_city2chks[i] != this && this.checked) {
                      booking_form_label_option_multi_city2chks[i].checked = false;
  
                  }
              }
          };
      }
      var booking_form_label_option_multi_city3 = document.getElementById('booking_form_label_option_multi_city3');
      var booking_form_label_option_multi_city3chks = booking_form_label_option_multi_city3.getElementsByTagName("INPUT");
      for (var i = 0; i < booking_form_label_option_multi_city3chks.length; i++) {
          booking_form_label_option_multi_city3chks[i].onclick = function () {
              for (var i = 0; i < booking_form_label_option_multi_city3chks.length; i++) {
                  if (booking_form_label_option_multi_city3chks[i] != this && this.checked) {
                      booking_form_label_option_multi_city3chks[i].checked = false;
  
                  }
              }
          };
      }
      var booking_form_label_option_multi_city4 = document.getElementById('booking_form_label_option_multi_city4');
      var booking_form_label_option_multi_city4chks = booking_form_label_option_multi_city4.getElementsByTagName("INPUT");
      for (var i = 0; i < booking_form_label_option_multi_city4chks.length; i++) {
          booking_form_label_option_multi_city4chks[i].onclick = function () {
              for (var i = 0; i < booking_form_label_option_multi_city4chks.length; i++) {
                  if (booking_form_label_option_multi_city4chks[i] != this && this.checked) {
                      booking_form_label_option_multi_city4chks[i].checked = false;
      
                  }
              }
          };
      }
  };
  
$('.sortBtn').click(function(event) {
      var myThis = $(this);
      var item = $('.sortingDivRoundTrip');
      var itemSort = $('.sort_item_round_trip', item);

      itemSort.sort(function(a, b){

      var checkA = $(a).text();
      var checkB = $(b).text();

      //Covert to lowercase for checking letters.

      lowerCaseA = checkA.toLowerCase();
      lowerCaseB = checkB.toLowerCase();

      //Check what button was clicked
      
      if(myThis.hasClass('ac')){
      
      return (lowerCaseA > lowerCaseB) ? 1 : (lowerCaseA < lowerCaseB) ? -1 : 0; // ascending sort

      }else if(myThis.hasClass('dec')){ 

      return (lowerCaseA < lowerCaseB) ? 1 :  (lowerCaseA > lowerCaseB) ? -1 : 0; // descending sort

      }else{

      return Math.random()*10 > 5 ? 1 : -1; // random sort
      }

      });
      //loop through items
      $.each(itemSort, function(index, val){

      $(item).append(val);

      });
});
$("#booking_form_check1").click(function() {
      if ($(this).is(':checked')) {
          //alert('asd');
          //$('input[type=checkbox]').prop('checked', true);
          document.getElementById("booking_form_checkLabel1").style.color = "#0393FB";
          document.getElementById("booking_form_checkLabel2").style.color = "#000";
          document.getElementById("Round_trip_pickUp_titleDivision").innerHTML = "Division";
          document.getElementById("Round_trip_pickUp_titleDistrict").innerHTML = "District";
          document.getElementById("Round_trip_pickUp_titleThana").innerHTML = "Thana";
          document.getElementById("Round_trip_pickUp_titleAirport").innerHTML = "Via Destinations Airport";
  
         
  
      } else {
         //alert('uncheck');
        //   $('input[type=checkbox]').prop('checked', false);
          document.getElementById("booking_form_checkLabel1").style.color = "#000";
          document.getElementById("booking_form_checkLabel2").style.color = "#000";
  
  
      }
  });

$("#booking_form_check2").click(function() {
      if ($(this).is(':checked')) {
          //alert('asd');
          //$('input[type=checkbox]').prop('checked', true);
          document.getElementById("booking_form_checkLabel2").style.color = "#0393FB";
          document.getElementById("booking_form_checkLabel1").style.color = "#000";
      //     $('#Round_trip_pickUp_title').hide();
            //alert(conceptName);
            document.getElementById("Round_trip_pickUp_titleDivision").innerHTML = "Division";
            document.getElementById("Round_trip_pickUp_titleDistrict").innerHTML = "District";
            document.getElementById("Round_trip_pickUp_titleThana").innerHTML = "Thana";
            document.getElementById("Round_trip_pickUp_titleAirport").innerHTML = "Pick-UP Airport";


      } else {
         //alert('uncheck');
         // $('input[type=checkbox]').prop('checked', false);
          document.getElementById("booking_form_checkLabel2").style.color = "#000";
          document.getElementById("booking_form_checkLabel1").style.color = "#000";

      }
  });

  $('#OtherPickUpDate').hide();

  $('#OthePickUp').click(function(){
      if ($(this).is(':checked')) {
            $('#OtherPickUpDate').show();
            document.getElementById("otherreturndate").style.color = "#0393FB";
      }else{
            $('#OtherPickUpDate').hide(); 
            document.getElementById("otherreturndate").style.color = "#000";
  
      }
  });
  $('#retureSameasdateCheck').click(function(){
      if ($(this).is(':checked')) {
            document.getElementById("retureSameasdate").style.color = "#0393FB";
      }else{
            document.getElementById("retureSameasdate").style.color = "#000";
  
      }
  });

// Multi City Add Row 

//   $('.multi-field-wrapper').each(function() {
//     var $wrapper = $('.multi-fields', this);
//     $(".AddMultiCityRoww", $(this)).click(function(e) {
//         document.getElementById("remove-field").style.display = "block";

//         $('.multi-field:first-child', $wrapper).clone(true).appendTo($wrapper).find('input').val('').focus();
       
//     });
    
//     $("body").on("click",".remove-field",function(e){
  
//         if ($('.multi-field', $wrapper).length > 1){
//                 $(this).parents('.multi-field').remove();
//             }
//             if ($('.multi-field', $wrapper).length > 1){
//             }else{
//                 $(".remove-field").css({"display": "none"});
    
//             }
//         });
//          $(".remove-field").css({"display": "none"});
// });

// window.onload = function () {
 
// };
// var $wrapper = $('.multi-fields', this);
//     if ($('.multi-field', $wrapper).length > 1){
//         alert('asd');
//     }else{
//       alert('a');

//     }
$("#multicityAirportToThanaCheck").click(function() {
  if ($(this).is(':checked')) {
      document.getElementById("multicityAirportToThanalabel").style.color = "#0393FB";
      document.getElementById("multicityThanaToAirportLabel").style.color = "#000";
  } else {
      document.getElementById("booking_form_checkLabel1").style.color = "#000";
      document.getElementById("multicityThanaToAirportLabel").style.color = "#000";
  }
});
$("#multicityThanaToAirportCheck").click(function() {
  if ($(this).is(':checked')) {
      document.getElementById("multicityThanaToAirportLabel").style.color = "#0393FB";
      document.getElementById("multicityAirportToThanalabel").style.color = "#000";
  } else {
      document.getElementById("multicityThanaToAirportLabel").style.color = "#000";
      document.getElementById("multicityAirportToThanalabel").style.color = "#000";
  }
});
$("#multicityAirportToThanaCheck1").click(function() {
    if ($(this).is(':checked')) {
        document.getElementById("multicityAirportToThanalabel1").style.color = "#0393FB";
        document.getElementById("multicityThanaToAirportLabel1").style.color = "#000";
    } else {
        document.getElementById("booking_form_checkLabel11").style.color = "#000";
        document.getElementById("multicityThanaToAirportLabel1").style.color = "#000";
    }
  });
  $("#multicityThanaToAirportCheck1").click(function() {
    if ($(this).is(':checked')) {
        document.getElementById("multicityThanaToAirportLabel1").style.color = "#0393FB";
        document.getElementById("multicityAirportToThanalabel1").style.color = "#000";
    } else {
        document.getElementById("multicityThanaToAirportLabel1").style.color = "#000";
        document.getElementById("multicityAirportToThanalabel1").style.color = "#000";
    }
  });
  $("#multicityAirportToThanaCheck2").click(function() {
    if ($(this).is(':checked')) {
        document.getElementById("multicityAirportToThanalabel2").style.color = "#0393FB";
        document.getElementById("multicityThanaToAirportLabel2").style.color = "#000";
    } else {
        document.getElementById("booking_form_checkLabel12").style.color = "#000";
        document.getElementById("multicityThanaToAirportLabel2").style.color = "#000";
    }
  });
  $("#multicityThanaToAirportCheck2").click(function() {
    if ($(this).is(':checked')) {
        document.getElementById("multicityThanaToAirportLabel2").style.color = "#0393FB";
        document.getElementById("multicityAirportToThanalabel2").style.color = "#000";
    } else {
        document.getElementById("multicityThanaToAirportLabel2").style.color = "#000";
        document.getElementById("multicityAirportToThanalabel2").style.color = "#000";
    }
  });
  $("#multicityAirportToThanaCheck3").click(function() {
    if ($(this).is(':checked')) {
        document.getElementById("multicityAirportToThanalabel3").style.color = "#0393FB";
        document.getElementById("multicityThanaToAirportLabel3").style.color = "#000";
    } else {
        document.getElementById("booking_form_checkLabel13").style.color = "#000";
        document.getElementById("multicityThanaToAirportLabel3").style.color = "#000";
    }
  });
  $("#multicityThanaToAirportCheck3").click(function() {
    if ($(this).is(':checked')) {
        document.getElementById("multicityThanaToAirportLabel3").style.color = "#0393FB";
        document.getElementById("multicityAirportToThanalabel3").style.color = "#000";
    } else {
        document.getElementById("multicityThanaToAirportLabel3").style.color = "#000";
        document.getElementById("multicityAirportToThanalabel3").style.color = "#000";
    }
  });
  $("#multicityAirportToThanaCheck4").click(function() {
    if ($(this).is(':checked')) {
        document.getElementById("multicityAirportToThanalabel4").style.color = "#0393FB";
        document.getElementById("multicityThanaToAirportLabel4").style.color = "#000";
    } else {
        document.getElementById("booking_form_checkLabel14").style.color = "#000";
        document.getElementById("multicityThanaToAirportLabel4").style.color = "#000";
    }
  });
  $("#multicityThanaToAirportCheck4").click(function() {
    if ($(this).is(':checked')) {
        document.getElementById("multicityThanaToAirportLabel4").style.color = "#0393FB";
        document.getElementById("multicityAirportToThanalabel4").style.color = "#000";
    } else {
        document.getElementById("multicityThanaToAirportLabel4").style.color = "#000";
        document.getElementById("multicityAirportToThanalabel4").style.color = "#000";
    }
  });
$('#multiCityRow1').hide();
$('#multiCityRow2').hide();
$('#multiCityRow3').hide();
$('#multiCityRow4').hide();

$(".AddMultiCityRow").click(function() {
    $('#multiCityRow1').show();

});
$("#remove-field1").click(function() {
    $('#multiCityRow1').hide();
});

$(".AddMultiCityRow1").click(function() {
    $('#multiCityRow2').show();

});
$("#remove-field2").click(function() {
    $('#multiCityRow2').hide();
});
$(".AddMultiCityRow2").click(function() {
    $('#multiCityRow3').show();

});
$("#remove-field3").click(function() {
    $('#multiCityRow3').hide();
});
$(".AddMultiCityRow3").click(function() {
    $('#multiCityRow4').show();

});
$("#remove-field4").click(function() {
    $('#multiCityRow4').hide();
});
// $(document).ready(function(){
  
//     $(function () {
        
//       $('#startDate').datepicker({
//      format: 'dd/mm/yyyy' 
//     });
//     });
      
    
//   });

