console.log("test");

$(function() {
    var $clickable = $('.ripple');

    /* mousedownだと直ぐに発動し、clickだとマウスボタンを離した時に発動する */
    $clickable.on('mousedown', function(e) {
        var _self   = this;
        var x       = e.offsetX;
        var y       = e.offsetY;

        var $effect = $(_self).find('.ripple__effect');
        var w       = $effect.width();
        var h       = $effect.height();

        /* クリックした座標を中心とする */
        $effect.css({
            left: x - w / 2,
            top: y - h / 2
        });

        /* jsではclassの付け替えをするだけ */
        if (!$effect.hasClass('is-show')) {
            $effect.addClass('is-show');

            /*
             * エフェクトアニメーションが終わったらclassを削除する
             * ここでは、単純にcssで設定するdurationと時間を合わせているだけですが
             * keyframes終了のイベント(AnimationEnd)が取れるかと思うので、それで対応した方が良いかも
             */
            setTimeout(function() {
                $effect.removeClass('is-show');
            }, 750);
        }
        return false;
    });

});