function signin()
{
  $.ajax({
   url: 'http://picasaweb.google.com/data/entry/api/user/adjoacash@gmail.com?alt=json',
   data: {
      format: 'json'
   },
   error: function() {
      alert('dID NIT ');
   },
   dataType: 'jsonp',
   success: function(data) {
    alert('success');
    
   },
   type: 'GET'
});
}
