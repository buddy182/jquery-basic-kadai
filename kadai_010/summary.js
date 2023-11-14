$(function(){
  //　ボタンを押すと文字色が変化
  $('#change-color').on('click', function(){
    $('#hello').css('color', 'red');
  });

  //文字内容が変化
  $('#change-text').on('click', function(){
    $('#hello').text('Hello!');
  });

  //フェードアウトで文字が消える
  $('#fade-out').on('click', function(){
    $('#hello').fadeOut();
  });


  //フェードインで文字が現れる
  $('#fade-in').on('click', function(){
    $('#hello').fadeIn();
  });

});