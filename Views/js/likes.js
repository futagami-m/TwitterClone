///////////////////////////////////////
// 同感！用のJavaScript
///////////////////////////////////////
 
$(function () {
    // 同感！がクリックされたとき
    $('.js-like').click(function () {
        const this_obj = $(this);
        const like_id = $(this).data('like-id');
        const like_count_obj = $(this).parent().find('.js-like-count');
        let like_count = Number(like_count_obj.html());
 
        if (like_id) {
            // 同感！取り消し
            // 同感！カウントを減らす
            like_count--;
            like_count_obj.html(like_count);
            this_obj.data('like-id', null);
 
            // 同感！ボタンの色をグレーに変更
            $(this).find('img').attr('src', '../Views/img/icon-heart.svg');
        } else {
            // 同感！付与
            // 同感！カウントを増やす
            like_count++;
            like_count_obj.html(like_count);
            this_obj.data('like-id', true);
 
            // 同感！ボタンの色を青に変更
            $(this).find('img').attr('src', '../Views/img/icon-heart-twitterblue.svg');
        }
    });
})