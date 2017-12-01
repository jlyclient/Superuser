$(function () {
    var bigbox = $(".NotiveMessage-box").find('ul').eq(0);
    if(bigbox.find('li').length>10){
        var t = setInterval(function () {
            bigbox.animate({top: '-70px'}, 1000, function () {
                var old = bigbox.find('li').eq(0);
                bigbox.append(old);
                bigbox.css({top: 0});
            });
        }, 1500);
        bigbox.hover(function () {
            clearInterval(t);
        },function () {
            t = setInterval(function () {
                bigbox.animate({top: '-70px'}, 1000, function () {
                    var old = bigbox.find('li').eq(0);
                    bigbox.append(old);
                    bigbox.css({top: 0});
                });
            }, 1500);
        })
    }

})
