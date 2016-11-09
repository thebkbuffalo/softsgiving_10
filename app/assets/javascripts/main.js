$(document).ready(function(){
  $('.clickable').on('click', function(){
    var info = $(this).find('.more_info');
    if(info.css('display') == 'none'){
      info.slideDown('fast', function(){});
      info.css('color', '#EB712F');
      info.parent().css('color', '#EB712F');
    }else{
      info.slideUp('fast', function(){});
      info.css('color', 'black');
      info.parent().css('color', 'black');
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
    $('.no_name').hide();
    $('.u_n').css('color', 'black');
    $('.u_n_f').css('border', 'none')
  });

  $('.search_it').on('change', function(){
    $.each($('.more_info'), function(i, v){
      $(this).css('display', 'none');
      $(this).css('color', 'black');
      $(this).parent().css('color', 'black');
    });
    id = '#' + $(this).val();
    $('html, body').animate({scrollTop: $(id).offset().top - 100}, 800);
    $(id).trigger('click');
  });

  $('.sort_it').on('change', function(){
    params = $(this).val();
    window.location = '/?sort=' + params
  });
});
