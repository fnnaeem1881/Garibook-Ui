
// Reset Password

$('#reset_new_password_open_eye').hide();
$('#reset_confirm_password_open_eye').hide();


$('#reset_new_password_close_eye').on('click', function(){
  $('#reset_new_password_open_eye').show();
  $('#reset_new_password_close_eye').hide();
});
$('#reset_new_password_open_eye').on('click', function(){
  $('#reset_new_password_open_eye').hide();
  $('#reset_new_password_close_eye').show();
});

$('#reset_confirm_password_close_eye').on('click', function(){
  $('#reset_confirm_password_open_eye').show();
  $('#reset_confirm_password_close_eye').hide();
});
$('#reset_confirm_password_open_eye').on('click', function(){
  $('#reset_confirm_password_open_eye').hide();
  $('#reset_confirm_password_close_eye').show();
});

// Profile Upload File Show


const filesInput = document.getElementById("profile_img");
filesInput.addEventListener("change", function (event) {
  const files = event.target.files; 
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (!file.type.match("image")) continue;
    const picReader = new FileReader();
    picReader.addEventListener("load", function (event) {
      const picFile = event.target;
      $('.profile_image_main'). attr("src",picFile.result);
    });
    picReader.readAsDataURL(file);
  }
});


// password Show

function newPassword() {
  var newPassword = document.getElementById("newPassword");
  if (newPassword.type === "password") {
    newPassword.type = "text";
  } else {
    newPassword.type = "password";
  }
}
function confirm_password() {
  var confirm_password = document.getElementById("confirm_password");
  if (confirm_password.type === "password") {
    confirm_password.type = "text";
  } else {
    confirm_password.type = "password";
  }
}

$('#new_password_open_eye').hide();
$('#confirm_password_open_eye').hide();


$('#new_password_close_eye').on('click', function(){
  $('#new_password_open_eye').show();
  $('#new_password_close_eye').hide();
});
$('#new_password_open_eye').on('click', function(){
  $('#new_password_open_eye').hide();
  $('#new_password_close_eye').show();
});

$('#confirm_password_close_eye').on('click', function(){
  $('#confirm_password_open_eye').show();
  $('#confirm_password_close_eye').hide();
});
$('#confirm_password_open_eye').on('click', function(){
  $('#confirm_password_open_eye').hide();
  $('#confirm_password_close_eye').show();
});