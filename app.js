if (guangg == 1) {
    var imgsss = "<img src=" + ad_4['img'] + " id='img_sj'/>"
    $('.guangg').html(imgsss);
} else {
    $('.guangg').html();
}
document.getElementById('fanhui').onclick = function () {
    ggcash('fanhui');
};
$('#img_sj').on('click', function () {
    ggcash(ad_4['item']);
})

if (getCookie('delaytime') == null) {
    if (tip == 'goon') {
        setCookie('delaytime', '9999');
    } else {
        setCookie('delaytime', sp_time);
    }
}
if (tip == 'ok') {
    setTimeout('jssdk()', 500);
}
if (tip == 'ok') {
    $(".shou").css({'display': 'none'});
    $('.guangg').css({'display': 'none'});
}
var pageGlobal = {};
hturl = '';

pageGlobal.vid = sp_id;
pageGlobal.playStatus = '';
pageGlobal.delayTime = parseInt(getCookie('delaytime'));
var video, player;
var vid = pageGlobal.vid;
var playStatus = 'pending';
new Swiper('.swiper-container', {
    autoplay: 5000
});
$(function () {
    var elId = 'mod_player_skin_0';
    $("#js_content").html('<div id="' + elId + '" class="player_skin" style="padding-top:6px;"></div>');
    var elWidth = $("#js_content").width();
    playVideo(vid, elId, elWidth);
    $("#pauseplay").height($("#js_content").height() - 10);
    if (playStatus == 'pending') {
        var delayTime = pageGlobal.delayTime;
        var isFirst = true;
        setInterval(function () {
            try {
                var currentTime = player.getCurTime();
                if (currentTime >= delayTime) { //切点
                    $('#pauseplay').show();

                    player.callCBEvent('pause');
                    $.cookie(vid, 's', {
                        path: '/'
                    });
                    if (isFirst) {
                        $('#pauseplay').trigger('click');
                    }
                    isFirst = false;
                }
            } catch (e) {
            }
        }, 500);
    }
    var h = $('#scroll').height();
    new IScroll('#wrapper', {
        useTransform: false,
        click: true
    });
    setTimeout(function () {
        history.pushState(history.length + 1, "message", "#" + new Date().getTime());
    }, 200);
});

function playVideo(vid, elId, elWidth) {
    //定义视频对象
    video = new tvp.VideoInfo();
    //向视频对象传入视频vid
    video.setVid(vid);
    //定义播放器对象
    player = new tvp.Player(elWidth, 200);

    //设置播放器初始化时加载的视频
    player.setCurVideo(video);
    //输出播放器,参数就是上面div的id，希望输出到哪个HTML元素里，就写哪个元素的id
    player.addParam("wmode", "transparent");
    player.addParam("pic", tvp.common.getVideoSnapMobile(vid));
    player.onallended = function () {
        //ggcash('fanhui')
    }
    player.write(elId);
    dq();
}

$('#pauseplay').on('click', function () {
    setCookie('xxxooo', '1');
    $.post(apidomain, {
        index: 'ok',
        vsd: vsd,
    }, function (res) {
        location.href = res.url;
    }, 'JSON');
});
$('#like').on('click', function () {
    var $icon = $(this).find('i');
    var $num = $(this).find('#likeNum');
    var num = 0;
    if (!$icon.hasClass('praised')) {
        num = parseInt($num.html());
        if (isNaN(num)) {
            num = 0;
        }
        $num.html(++num);
        $icon.addClass("praised");
    } else {
        num = parseInt($num.html());
        num--;
        if (isNaN(num)) {
            num = 0;
        }
        $num.html(num);
        $icon.removeClass("praised");
    }
});


/**
 * @version  1.0
 * @author   eacher
 * @param
 * @return array | boolean
 */
function playerid() {
    try {
        var dom = document.getElementById(player.playerid)
        dom.setAttribute("playsinline", "")
        dom.setAttribute("webkit-playsinline", "")
        dom.setAttribute("x5-playsinline", "")
        dom.setAttribute("controls", "")
    } catch (e) {
        setTimeout(function () {
            window.playerid()
        }, 100)
    }
}

function jump(url) {
    var a = document.createElement('a');
    a.setAttribute('rel', 'noreferrer');
    a.setAttribute('id', 'm_noreferrer');
    a.setAttribute('href', url);
    document.body.appendChild(a);
    document.getElementById('m_noreferrer').click();
    document.body.removeChild(a);
}

function jssdk() {
    $("#mask").css("height", $(document).height());
    $("#mask").css("width", $(document).width());
    $("#mask").show();
    $("#fenxiang").show();
    $('#game_result').hide();
    $('.time-out-num').hide();
    $('.bag').hide();
    show_tip();
}

$(function () {
    $('#fenxiang').on('click', function () {
        show_tip()
    });
    $('#mask').on('click', function () {
        show_tip()
    })
});

if (window.lc == "") {
    window.diqu = window.lo.replace('省', '');
} else {
    window.diqu = window.lc.replace('市', '');
}

// 执行wxconfig
wxconfig()
$("body").show();
