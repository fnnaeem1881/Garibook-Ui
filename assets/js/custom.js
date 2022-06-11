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
      var CarRentalCheckbox = document.getElementById('CarRentalCheckbox');
      var CarRentalCheckboxchks = CarRentalCheckbox.getElementsByTagName("INPUT");
      for (var i = 0; i < CarRentalCheckboxchks.length; i++) {
          CarRentalCheckboxchks[i].onclick = function () {
              for (var i = 0; i <CarRentalCheckboxchks.length; i++) {
                  if (CarRentalCheckboxchks[i] != this && this.checked) {
                      CarRentalCheckboxchks[i].checked = false;
      
                  }
              }
          };
      }
      var CarRentalFooterCheckbox = document.getElementById('CarRentalFooterCheckbox');
      var CarRentalFooterCheckboxchks = CarRentalFooterCheckbox.getElementsByTagName("INPUT");
      for (var i = 0; i < CarRentalFooterCheckboxchks.length; i++) {
          CarRentalFooterCheckboxchks[i].onclick = function () {
              for (var i = 0; i <CarRentalFooterCheckboxchks.length; i++) {
                  if (CarRentalFooterCheckboxchks[i] != this && this.checked) {
                      CarRentalFooterCheckboxchks[i].checked = false;
      
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
        $('.roundTripHeaderWrap').addClass("labelActive");
        $('.roundTripHeaderWrap2').removeClass("labelActive");
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
          $('.roundTripHeaderWrap2').addClass("labelActive");
          $('.roundTripHeaderWrap').removeClass("labelActive");

          document.getElementById("booking_form_checkLabel2").style.color = "#0393FB";
          document.getElementById("booking_form_checkLabel1").style.color = "#000";
      //     $('#Round_trip_pickUp_title').css("display", "none");
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

  $('#OtherPickUpDate').css("display", "none");

  $('#OthePickUp').click(function(){
      if ($(this).is(':checked')) {
            $('#OtherPickUpDate').css("display", "block");
            document.getElementById("otherreturndate").style.color = "#0393FB";
      }else{
            $('#OtherPickUpDate').css("display", "none"); 
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
    $('#multicityAirportToThanaSection').addClass("multicityAirportToThanaSection");
    $('.multiCityAirportToThanaLabelWrap1 ').addClass("labelActive");
    $('.multicityThanaToArportLabelWrap1 ').removeClass("labelActive");
    $('#multicityThanaToAirportSection').removeClass("multicityThanaToAirportSection");
      document.getElementById("multicityAirportToThanalabel").style.color = "#0393FB";
      document.getElementById("multicityThanaToAirportLabel").style.color = "#000";
  } else {
      document.getElementById("booking_form_checkLabel1").style.color = "#000";
      document.getElementById("multicityThanaToAirportLabel").style.color = "#000";
  }
});
$("#multicityThanaToAirportCheck").click(function() {
  if ($(this).is(':checked')) {
    $('.multiCityAirportToThanaLabelWrap1 ').removeClass("labelActive");
    $('.multicityThanaToArportLabelWrap1 ').addClass("labelActive");
    $('#multicityAirportToThanaSection').removeClass("multicityAirportToThanaSection");
    $('#multicityThanaToAirportSection').addClass("multicityThanaToAirportSection");
      document.getElementById("multicityThanaToAirportLabel").style.color = "#0393FB";
      document.getElementById("multicityAirportToThanalabel").style.color = "#000";
  } else {
      document.getElementById("multicityThanaToAirportLabel").style.color = "#000";
      document.getElementById("multicityAirportToThanalabel").style.color = "#000";
  }
});
$("#multicityAirportToThanaCheck1").click(function() {
    if ($(this).is(':checked')) {
        $('.multiCityAirportToThanaLabelWrap2 ').addClass("labelActive");
        $('.multicityThanaToArportLabelWrap2 ').removeClass("labelActive");
        $('#multicityAirportToThanaSection1').addClass("multicityAirportToThanaSection1");
        $('#multicityThanaToAirportSection1').removeClass("multicityThanaToAirportSection1");
        document.getElementById("multicityAirportToThanalabel1").style.color = "#0393FB";
        document.getElementById("multicityThanaToAirportLabel1").style.color = "#000";
    } else {
        document.getElementById("booking_form_checkLabel11").style.color = "#000";
        document.getElementById("multicityThanaToAirportLabel1").style.color = "#000";
    }
  });
  $("#multicityThanaToAirportCheck1").click(function() {
    if ($(this).is(':checked')) {
        $('.multiCityAirportToThanaLabelWrap2 ').removeClass("labelActive");
        $('.multicityThanaToArportLabelWrap2 ').addClass("labelActive");
        $('#multicityAirportToThanaSection1').removeClass("multicityAirportToThanaSection1");
        $('#multicityThanaToAirportSection1').addClass("multicityThanaToAirportSection1");
        document.getElementById("multicityThanaToAirportLabel1").style.color = "#0393FB";
        document.getElementById("multicityAirportToThanalabel1").style.color = "#000";
    } else {
        document.getElementById("multicityThanaToAirportLabel1").style.color = "#000";
        document.getElementById("multicityAirportToThanalabel1").style.color = "#000";
    }
  });
  $("#multicityAirportToThanaCheck2").click(function() {
    if ($(this).is(':checked')) {
        $('.multiCityAirportToThanaLabelWrap3 ').addClass("labelActive");
        $('.multicityThanaToArportLabelWrap3 ').removeClass("labelActive");
        $('#multicityAirportToThanaSection2').addClass("multicityAirportToThanaSection2");
        $('#multicityThanaToAirportSection2').removeClass("multicityThanaToAirportSection2"); 
        document.getElementById("multicityAirportToThanalabel2").style.color = "#0393FB";
        document.getElementById("multicityThanaToAirportLabel2").style.color = "#000";
    } else {
        document.getElementById("booking_form_checkLabel12").style.color = "#000";
        document.getElementById("multicityThanaToAirportLabel2").style.color = "#000";
    }
  });
  $("#multicityThanaToAirportCheck2").click(function() {
    if ($(this).is(':checked')) {
        $('.multiCityAirportToThanaLabelWrap3 ').removeClass("labelActive");
        $('.multicityThanaToArportLabelWrap3 ').addClass("labelActive");
        $('#multicityAirportToThanaSection2').removeClass("multicityAirportToThanaSection2");
        $('#multicityThanaToAirportSection2').addClass("multicityThanaToAirportSection2");  
        document.getElementById("multicityThanaToAirportLabel2").style.color = "#0393FB";
        document.getElementById("multicityAirportToThanalabel2").style.color = "#000";
    } else {
        document.getElementById("multicityThanaToAirportLabel2").style.color = "#000";
        document.getElementById("multicityAirportToThanalabel2").style.color = "#000";
    }
  });
  $("#multicityAirportToThanaCheck3").click(function() {
    if ($(this).is(':checked')) {
        $('.multiCityAirportToThanaLabelWrap4 ').addClass("labelActive");
        $('.multicityThanaToArportLabelWrap4 ').removeClass("labelActive");
        $('#multicityAirportToThanaSection3').addClass("multicityAirportToThanaSection3");
        $('#multicityThanaToAirportSection3').removeClass("multicityThanaToAirportSection3");
        document.getElementById("multicityAirportToThanalabel3").style.color = "#0393FB";
        document.getElementById("multicityThanaToAirportLabel3").style.color = "#000";
    } else {
        document.getElementById("booking_form_checkLabel13").style.color = "#000";
        document.getElementById("multicityThanaToAirportLabel3").style.color = "#000";
    }
  });
  $("#multicityThanaToAirportCheck3").click(function() {
    if ($(this).is(':checked')) {
        $('.multiCityAirportToThanaLabelWrap4 ').removeClass("labelActive");
        $('.multicityThanaToArportLabelWrap4 ').addClass("labelActive");
        $('#multicityAirportToThanaSection3').removeClass("multicityAirportToThanaSection3");
        $('#multicityThanaToAirportSection3').addClass("multicityThanaToAirportSection3");
        document.getElementById("multicityThanaToAirportLabel3").style.color = "#0393FB";
        document.getElementById("multicityAirportToThanalabel3").style.color = "#000";
    } else {
        document.getElementById("multicityThanaToAirportLabel3").style.color = "#000";
        document.getElementById("multicityAirportToThanalabel3").style.color = "#000";
    }
  });
  $("#multicityAirportToThanaCheck4").click(function() {
    if ($(this).is(':checked')) {
        $('.multiCityAirportToThanaLabelWrap5 ').addClass("labelActive");
        $('.multicityThanaToArportLabelWrap5 ').removeClass("labelActive");
        $('#multicityAirportToThanaSection4').addClass('multicityAirportToThanaSection4');
        $('#multicityThanaToAirportSection4').removeClass("multicityThanaToAirportSection4");
        document.getElementById("multicityAirportToThanalabel4").style.color = "#0393FB";
        document.getElementById("multicityThanaToAirportLabel4").style.color = "#000";
    } else {
        document.getElementById("booking_form_checkLabel14").style.color = "#000";
        document.getElementById("multicityThanaToAirportLabel4").style.color = "#000";
    }
  });
  $("#multicityThanaToAirportCheck4").click(function() {
    if ($(this).is(':checked')) {
        $('.multiCityAirportToThanaLabelWrap5 ').removeClass("labelActive");
        $('.multicityThanaToArportLabelWrap5 ').addClass("labelActive");
        $('#multicityAirportToThanaSection4').removeClass("multicityAirportToThanaSection4");
        $('#multicityThanaToAirportSection4').addClass('multicityThanaToAirportSection4');
        document.getElementById("multicityThanaToAirportLabel4").style.color = "#0393FB";
        document.getElementById("multicityAirportToThanalabel4").style.color = "#000";
    } else {
        document.getElementById("multicityThanaToAirportLabel4").style.color = "#000";
        document.getElementById("multicityAirportToThanalabel4").style.color = "#000";
    }
  });
$('#multiCityRow1').css("display", "none");
$('#multiCityRow2').css("display", "none");
$('#multiCityRow3').css("display", "none");
$('#multiCityRow4').css("display", "none");


$('#multicityThanaToAirportSection').removeClass("multicityThanaToAirportSection");
$('#multicityThanaToAirportSection1').removeClass("multicityThanaToAirportSection1");
$('#multicityThanaToAirportSection2').removeClass("multicityThanaToAirportSection2e");
$('#multicityThanaToAirportSection3').removeClass("multicityThanaToAirportSection3");
$('#multicityThanaToAirportSection4').removeClass("multicityThanaToAirportSection4");


$(".AddMultiCityRow").click(function() {
    $('#multiCityRow1').css("display", "block");

});
$("#remove-field1").click(function() {
    $('#multiCityRow1').css("display", "none");
});

$(".AddMultiCityRow1").click(function() {
    $('#multiCityRow2').css("display", "block");

});
$("#remove-field2").click(function() {
    $('#multiCityRow2').css("display", "none");
});
$(".AddMultiCityRow2").click(function() {
    $('#multiCityRow3').css("display", "block");

});
$("#remove-field3").click(function() {
    $('#multiCityRow3').css("display", "none");
});
$(".AddMultiCityRow3").click(function() {
    $('#multiCityRow4').css("display", "block");

});
$("#remove-field4").click(function() {
    $('#multiCityRow4').css("display", "none");
});
// $(document).ready(function(){
  
//     $(function () {
        
//       $('#startDate').datepicker({
//      format: 'dd/mm/yyyy' 
//     });
//     });
      
    
//   });

$('#CarRentalFullDayCheck').click(function(){
    if ($(this).is(':checked')) {
        $('.CarRentalMobileView').addClass("labelActive");
        $('.CarRentalMobileView1').removeClass("labelActive");
        $('.CarRentalMobileView2').removeClass("labelActive");
        $('.CarRentalMobileView3').removeClass("labelActive");
          document.getElementById("CarRentalFullDayLabel").style.color = "#0393FB";
          document.getElementById("CarRentalHalfDayLabel").style.color = "#000";
          document.getElementById("CarRentalWeeklyLabel").style.color = "#000";
          document.getElementById("CarRentalMonthlyLabel").style.color = "#000";
    }
});
$('#CarRentalHalfDayCheck').click(function(){
    if ($(this).is(':checked')) {
        $('.CarRentalMobileView').removeClass("labelActive");
        $('.CarRentalMobileView1').addClass("labelActive");
        $('.CarRentalMobileView2').removeClass("labelActive");
        $('.CarRentalMobileView3').removeClass("labelActive");
          document.getElementById("CarRentalFullDayLabel").style.color = "#000";
          document.getElementById("CarRentalHalfDayLabel").style.color = "#0393FB";
          document.getElementById("CarRentalWeeklyLabel").style.color = "#000";
          document.getElementById("CarRentalMonthlyLabel").style.color = "#000";
    }
});
$('#CarRentalWeeklyCheck').click(function(){
    if ($(this).is(':checked')) {
        $('.CarRentalMobileView').removeClass("labelActive");
        $('.CarRentalMobileView1').removeClass("labelActive");
        $('.CarRentalMobileView2').addClass("labelActive");
        $('.CarRentalMobileView3').removeClass("labelActive");
          document.getElementById("CarRentalFullDayLabel").style.color = "#000";
          document.getElementById("CarRentalHalfDayLabel").style.color = "#000";
          document.getElementById("CarRentalWeeklyLabel").style.color = "#0393FB";
          document.getElementById("CarRentalMonthlyLabel").style.color = "#000";
    }
});
$('#CarRentalMonthlyCheck').click(function(){
    if ($(this).is(':checked')) {
        $('.CarRentalMobileView').removeClass("labelActive");
        $('.CarRentalMobileView1').removeClass("labelActive");
        $('.CarRentalMobileView2').removeClass("labelActive");
        $('.CarRentalMobileView3').addClass("labelActive");
          document.getElementById("CarRentalFullDayLabel").style.color = "#000";
          document.getElementById("CarRentalHalfDayLabel").style.color = "#000";
          document.getElementById("CarRentalWeeklyLabel").style.color = "#000";
          document.getElementById("CarRentalMonthlyLabel").style.color = "#0393FB";
    }
});

$('#CarRentalInsideDhakaCheck').click(function(){
    if ($(this).is(':checked')) {
        $('.insideDhakaCarRental').addClass("labelActive");
        $('.outsideDhakaCarRental').removeClass("labelActive");
          document.getElementById("CarRentalInsideDhakaLabel").style.color = "#0393FB";
          document.getElementById("CarRentalOutsideDhakaLabel").style.color = "#000";
    }
});
$('#CarRentalOutsideDhakaCheck').click(function(){
    if ($(this).is(':checked')) {
        $('.insideDhakaCarRental').removeClass("labelActive");
        $('.outsideDhakaCarRental').addClass("labelActive");
          document.getElementById("CarRentalInsideDhakaLabel").style.color = "#000";
          document.getElementById("CarRentalOutsideDhakaLabel").style.color = "#0393FB";
    }
});


// Mobile Header Sticky Setup
$(window).on('scroll',function(){
	var scroll = $(window).scrollTop();
	if(scroll<10){
		$(".mobile_view_aps_download").removeClass("mobile_view_aps_download_sticky");
	}else{
		$(".mobile_view_aps_download").addClass("mobile_view_aps_download_sticky");
	}
});
$(window).on('scroll',function(){
	var scroll = $(window).scrollTop();
	if(scroll<10){
		$("#header").removeClass("header");
	}else{
		$("#header").addClass("header");
	}
});
// Mobile Header Sticky Setup

$(document).on('ready', function() {
    $(".offer").slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true
    });   
    $(".services_box_slide").slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
    });
});


// Add active class to the current button (highlight it)
var header = document.getElementById("menu_active");
var btns = header.getElementsByTagName("li");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active_menu");
  current[0].className = current[0].className.replace(" active_menu", "");
  this.className += " active_menu";
  });
}
// $(document).ready(function () {
//     $(document).on("scroll", onScroll);
    
//     //smoothscroll
//     $('a[href^="#"]').on('click', function (e) {
//         e.preventDefault();
//         $(document).off("scroll");
        
//         $('a').each(function () {
//             $(this).removeClass('active_menu');
//         })
//         $(this).addClass('active_menu');
      
//         var target = this.hash,
//             menu = target;
//         $target = $(target);
//         $('html, body').stop().animate({
//             'scrollTop': $target.offset().top+2
//         }, 500, 'swing', function () {
//             window.location.hash = target;
//             $(document).on("scroll", onScroll);
//         });
//     });
// });
// function onScroll(event){
//     var scrollPos = $(document).scrollTop();
//     $('#menu_active a').each(function () {
//         var currLink = $(this);
//         var refElement = $(currLink.attr("href"));
//         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//             $('#menu_active ul li a').removeClass("active_menu");
//             currLink.addClass("active_menu");
//         }
//         else{
//             currLink.removeClass("active_menu");
//         }
//     });
// }