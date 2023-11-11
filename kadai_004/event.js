
  /*loadイベントはHTMLを読み込む処理なのでfunctionは使用しない
  　アロー関数だとうまく表示されないので標準関数を使う*/
  $(window).on('load scroll', function(e) {

    //loadした時
    if(e.type === 'load'){
      console.log('loadイベントが発生しました');
    }
    
    //scrollした時
    if(e.type === 'scroll'){
      console.log('scrollイベントが発生しました');
    }
  });