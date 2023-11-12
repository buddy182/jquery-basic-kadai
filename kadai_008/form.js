$(function() { 
  //ボタンをクリックしたら
  $('button').on('click', function() {
    //クリックされましたとテキストボックスに表示
    $('.text-box').val('クリックされました!');
  });
});