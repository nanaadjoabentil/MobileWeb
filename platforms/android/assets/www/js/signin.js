function signin()
{
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  $.ajax({
   url: "http://xybdev.000webhostapp.com/nanaadjoa/xib.php",
   //async:false,
    type: 'GET',
   data: {
      username : username,
      password : password
   },
   error: function() {
      alert('Failed');
   },
   dataType: 'json',
   //contentType: 'application/json',
   success: function(data) {
     //if(data.status_code ===200)
    // {
    alert('success');
    window.location.href = '../pages/landingpage.html';
//  }
   }

});
}
