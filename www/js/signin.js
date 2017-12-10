function signin()
{
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  $.ajax({
   url: "http://xybdev.000webhostapp.com/nanaadjoa/signin.php?username="+username+"&password="+password,
   data: {
      format: 'json'
   },
   error: function() {
      alert('Failed');
   },
   dataType: 'json',
   contentType: 'application/json',
   success: function(data) {
     if(data == true)
     {
    alert('success');
    window.location.href = '../pages/landingpage.html';
  }
   },
   type: 'GET'
});
}
