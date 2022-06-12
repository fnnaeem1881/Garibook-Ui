
 $('#Regular').on('click', function(){
    $('#Regular').addClass('PackageActive');
    $('#Standard').removeClass('PackageActive');
    $('#Premium').removeClass('PackageActive');
 });
 $('#Standard').on('click', function(){
    $('#Regular').removeClass('PackageActive');
    $('#Standard').addClass('PackageActive');
    $('#Premium').removeClass('PackageActive');
 });
 $('#Premium').on('click', function(){
    $('#Regular').removeClass('PackageActive');
    $('#Standard').removeClass('PackageActive');
    $('#Premium').addClass('PackageActive');
 });

//  Other Date Active

var otherBookingdate = document.getElementById("otherBookingdate");
var otherBookingdatebtns = otherBookingdate.getElementsByTagName("li");
for (var i = 0; i < otherBookingdatebtns.length; i++) {
    otherBookingdatebtns[i].addEventListener("click", function() {
  var otherBookingdatecurrent = document.getElementsByClassName("DateActive");
  otherBookingdatecurrent[0].className = otherBookingdatecurrent[0].className.replace("DateActive", "");
  this.className += "DateActive";
  });
}

//  Car Select

var carDetailsWrap = document.getElementById("carDetailsWrap");
var carDetailsWrapbtns = carDetailsWrap.getElementsByTagName("label");
for (var i = 0; i < carDetailsWrapbtns.length; i++) {
    carDetailsWrapbtns[i].addEventListener("click", function() {
  var carDetailsWrapcurrent = document.getElementsByClassName("carSelected");
  carDetailsWrapcurrent[0].className = carDetailsWrapcurrent[0].className.replace("carSelected", "");
  this.className += "carSelected";
  });
}