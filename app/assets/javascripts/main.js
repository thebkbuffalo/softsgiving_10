$(document).ready(function(){
  $('.clickable').on('click', function(){
    var info = $(this).find('.more_info');
    if(info.css('display') == 'none'){
      info.slideDown('medium', function(){});
    }else{
      info.slideUp('medium', function(){});
    }
  });
});
