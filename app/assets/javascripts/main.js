$(document).ready(function(){
  $('.clickable').on('click', function(){
    var info = $(this).find('.more_info');
    if(info.css('display') == 'none'){
      info.slideDown('fast', function(){});
    }else{
      info.slideUp('fast', function(){});
    }
  });
});
