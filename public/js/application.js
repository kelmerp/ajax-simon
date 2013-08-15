$(document).ready(function(){
  $('.container').on('click','#get_color', function(event){
    event.preventDefault();
    $.post('/color', function(response){
      color = response.color;
      cell = response.cell;
      console.log('ul li:nth-child('+cell+')');
    $('ul li:nth-child('+cell+')').css('background-color', color);
    }, "json");
  });
});

