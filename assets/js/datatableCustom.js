$(document).ready(function () {
      $('#AllBookingTable').DataTable();
      $('#DraftBookingTable').DataTable();
      $('#DepositList').DataTable();
      $('#MyEearning').DataTable();
});
$('.draftBookingTableWrap').hide();

$(".draft_booking_button").click(function(){
      $(".draftBookingTableWrap").show();
      $('.allBookingTableWrap').hide();
      $('.draft_booking_button').addClass('active_menu');
      $('.my_booking_button').removeClass('active_menu');
});
 
$(".my_booking_button ").click(function(){
      $(".draftBookingTableWrap").hide();
      $('.allBookingTableWrap').show();
      $('.my_booking_button').addClass('active_menu');
      $('.draft_booking_button').removeClass('active_menu');
});
 