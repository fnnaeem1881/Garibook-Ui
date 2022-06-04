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
      var chks = booking_form_label_option.getElementsByTagName("INPUT");
      for (var i = 0; i < chks.length; i++) {
          chks[i].onclick = function () {
              for (var i = 0; i < chks.length; i++) {
                  if (chks[i] != this && this.checked) {
                      chks[i].checked = false;
                  }
              }
          };
      }
      
  };
//   window.onload = function () {
//       var booking_form_label_option = document.getElementById('booking_form_label_option2');
//       var chks = booking_form_label_option.getElementsByTagName("INPUT");
//       for (var i = 0; i < chks.length; i++) {
//           chks[i].onclick = function () {
//               for (var i = 0; i < chks.length; i++) {
//                   if (chks[i] != this && this.checked) {
//                       chks[i].checked = false;
//                   }
//               }
//           };
//       }
      
//   };


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
          $('input[type=checkbox]').prop('checked', false);
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

