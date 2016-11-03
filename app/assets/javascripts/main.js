$(document).ready(function(){
  $('.clickable').on('click', function(){
    var info = $(this).find('.more_info');
    if(info.css('display') == 'none'){
      info.slideDown('fast', function(){});
    }else{
      info.slideUp('fast', function(){});
    }
  });

  $('.user_submit').on('click', function(){
    $('.no_name').hide();
    if($('#user_name').val() == ""){
      $('.no_name').fadeIn('medium', function(){});
      $('.u_n').css('color', '#8A0707');
      $('.u_n_f').css('border', '2px solid #8A0707')
      return false;
    }
  });

  $('#new_user_modal').on("hidden.bs.modal", function(){
    debugger
    $('.no_name').hide();
    $('.u_n').css('color', 'black');
    $('.u_n_f').css('border', 'none')
  });
});
