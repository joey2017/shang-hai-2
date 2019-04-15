<?php
// header("Access-Control-Allow-Origin: *");
// if ('aliyuncs.com' === getOrigin()) {
//      # code...
//     header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']);
// }
//需要测试或显示哪个视频就写哪个视频,例如'0','1','2','3'

if (!isset($_POST['getLIstvido'])) {
    header('Content-Type: application/json');
    include 'pp.php';
}

$imgName = getRandChar(rand(20, 35));

// 需要带的线路域名
$pointline = 'jgzrwz46492'; //2

$min = date("h:i");

// 随机转换广告
$rand = array(
    array(
        'link'  => 'cash=nk',
        'title' => '男人！学会一次坚持50分以上,真有用！别不好意思...',
        'img'   => 'http://wx3.sinaimg.cn/small/00771FgCgy1frq56ugyruj307i07aq4p.jpg',
    ),
    array(
        'link'  => 'cash=pointline&host=' . $pointline,
        'title' => '🔥农村小伙救了女总裁一命, 流落街头女总裁开着宝马找他报恩, 三年后...',
        'img'   => 'https://wx2.sinaimg.cn/mw690/005SSfhzgy1fu9lmblu6tj30lf0gd18l.jpg',
    ),
);

//固定转化标题
$slink   = 'cash=nk'; //
$stitle  = '的男子,真实讲述一晚让3女达到巅峰的秘密!别不好意思看...';
$simgurl = 'https://qqpublic.qpic.cn/qq_public/0/0-3102621442-9CF9F9361B8471CEFE86CA0F67B33968/0';

//视频数组
$vido = array(

    '0' => array(
        'title'     => '上市集团董事长扮穷回乡看望未婚妻被一家人嘲讽还要讹八十万，结果...',//标题
        'listtitle' => '上市集团董事长扮穷回乡看望未婚妻被一家人嘲讽还要讹八十万，结果...',//列表标题
        'img'       => 'http://wx2.sinaimg.cn/small/006tptJAgy1g0ivyan63rj30a20aqtd9.jpg',//列表顯示圖片
        'sp_id'     => 'f07531cxoyb',
        'stopshare' => '675',
        'quntitle'  => '上市集团董事长扮穷回乡看望未婚妻被一家人嘲讽还要讹八十万，结果...',//群标题
        'qunimg'    => 'http://' . $_SERVER['HTTP_HOST'] . '/img/xiche.jpg',//群分享图片
        'quantitle' => '上市集团董事长扮穷回乡看望未婚妻被一家人嘲讽还要讹八十万，结果...',//朋友圈标题
        'quanimg'   => 'http://' . $_SERVER['HTTP_HOST'] . '/img/xiche.jpg',//朋友圈分享图片
        'des'       => '都市报道',//描述
        //  'color'=>'red',//飘红
        'baidu'     => '452a6f1cc0d1522f482016eba9bd6f06',
        'youmeng'   => '1276197517',
        'type'      => '',
        'domain'    => '',
    ),

    '1' => array(
        'title'     => '小伙调戏跑车美女，第二天面试发现对方是自己公司的总裁 结果..',//标题
        'listtitle' => '小伙调戏跑车美女，第二天面试发现对方是自己公司的总裁 结果..',//列表标题
        'img'       => 'https://251img.oss-cn-shanghai.aliyuncs.com/sp3/static/upload/video/1550547712.png',//列表顯示圖片
        'sp_id'     => 'f0328830dcw',
        'stopshare' => '303',
        'quntitle'  => '小伙调戏跑车美女，第二天面试发现对方是自己公司的总裁 结果..',//群标题
        'qunimg'    => 'https://251img.oss-cn-shanghai.aliyuncs.com/sp3/static/upload/video/1550547712.png',//群分享图片
        'quantitle' => '小伙调戏跑车美女，第二天面试发现对方是自己公司的总裁 结果..',//朋友圈标题
        'quanimg'   => 'https://251img.oss-cn-shanghai.aliyuncs.com/sp3/static/upload/video/1550547712.png',//朋友圈分享图片
        'des'       => '都市报道',//描述
        // 'color'=>'red',//飘红
        'baidu'     => '452a6f1cc0d1522f482016eba9bd6f06',
        'youmeng'   => '1276197517',
        'type'      => '',
        'domain'    => '',
    ),

    '2' => array(
        'title'     => '人快看！@女大学生被网友骗进会所被迫陪**，最后...',//标题
        'listtitle' => '人快看！百W人转了！女大学生被骗进KTV陪酒...',//列表标题
        'img'       => 'http://wx2.sinaimg.cn/mw690/006tptJAgy1fz0iw23ygnj30u00u00u0.jpg',//列表顯示圖片
        'sp_id'     => 'g0840px03z7',
        'stopshare' => '538',
        'quntitle'  => '人快看！@女大学生被网友骗进会所被迫陪**，看后百W人转了...',//群标题
        'qunimg'    => 'http://wx2.sinaimg.cn/mw690/006tptJAgy1fz0iw23ygnj30u00u00u0.jpg',//群分享图片
        'quantitle' => '人快看！@女大学生被网友骗进会所被迫陪**，看后百W人转了...',//朋友圈标题
        'quanimg'   => 'http://wx2.sinaimg.cn/mw690/006tptJAgy1fz0iw23ygnj30u00u00u0.jpg',//朋友圈分享图片
        'des'       => '都市报道',//描述
        'baidu'     => '452a6f1cc0d1522f482016eba9bd6f06',
        'youmeng'   => '1276197517',
        'color'     => 'red',//飘红
        'type'      => '',
        'domain'    => '',
    ),

    '3' => array(
        'title'     => '南征董事长体验做代驾，偶遇前女友遭辱骂殴咑，最后...',//标题
        'listtitle' => '南征董事长体验做代驾，偶遇前女友遭辱骂殴咑，最后...',//列表标题
        'img'       => 'http://wx3.sinaimg.cn/small/006tptJAgy1ft76jvk3rbj308c08c0tb.jpg',//列表顯示圖片
        'sp_id'     => 'h08119qmj1m',
        'stopshare' => '762',
        'quntitle'  => '南征董事长体验做代驾，偶遇前女友遭辱骂殴咑，最后...',//群标题
        'qunimg'    => 'http://wx3.sinaimg.cn/small/006tptJAgy1ft76jvk3rbj308c08c0tb.jpg',//群分享图片
        'quantitle' => '南征董事长体验做代驾，偶遇前女友遭辱骂殴咑，最后...',//朋友圈标题
        'quanimg'   => 'http://wx3.sinaimg.cn/small/006tptJAgy1ft76jvk3rbj308c08c0tb.jpg',//朋友圈分享图片
        'des'       => '都市报道',//描述
        //  'color'=>'red',//飘红
        'baidu'     => '452a6f1cc0d1522f482016eba9bd6f06',
        'youmeng'   => '1276197517',
        'type'      => '',
        'domain'    => '',
    ),
);

//防止
if (!$_POST['vsd']) {
    $_POST['vsd'] = 0;
}
$applink = '/' . $des->authcode('act=flth&vsd=' . $_POST['vsd'] . '&isshare=1', '', $key);

$timelink = '/' . $des->authcode('act=flth&vsd=' . $_POST['vsd'] . '&isshare=2', '', $key);
//当TTimes圈次数不是0时就开启广告
if ('0' !== $_POST['TTimes']) {
    $ztitle  = $stitle;
    $zimgurl = $simgurl;
    $zlink   = '/' . $des->authcode('act=flth&' . $slink, '', $key);
} else {
    $ztitle  = $title;
    $zimgurl = $imgurl;
    $zlink   = $applink;
}

//当ATimes群次数是第5次时就开启广告或视频
if ('0' !== $_POST['ATimes']) {

    //1zhong gg
    $gtitle  = $stitle;
    $gimgurl = $simgurl;
    $glink   = '/' . $des->authcode('act=flth&' . $slink, '', $key);

    //2zhong gg
    $sptitle  = $sptitle;
    $spimgurl = $spimgurl;
    $splink   = '/' . $des->authcode('act=flth&' . $splink, '', $key);

} else {
    $gtitle  = $title;
    $gimgurl = $imgurl;
    $glink   = $timelink;
}

if ('0' !== $_POST['Timeline']) {
    $share_info = array(
        'a0'       => '<div style="font-size:6vw;margin:auto;line-height:120%"><b style="font-size:7vw;color: #007500">分享成功<img style="width: 6.5vw;height: 6.5vw;position: relative;top: 1vw;left:0.8vw;opacity:0.9;" src="/img/icon-right.png"/></b><br/><br><span tyle="font-size:5vw">您仅需分享到</span><span style="font-size:7vw;color: #f5294c">3</span>个微信群<br/><b style="color:#ff0000;font-size:7vw">即可继续观看</b></div>',
        'a1'       => '<div style="font-size:4.8vw;margin:auto;line-height:140%"><b style="color:#007500;font-size:6vw;">分享成功<img style="width: 6.5vw;height: 6.5vw;position: relative;top: 1vw;left:0.8vw;opacity:0.9;" src="/img/icon-right.png"/></b><br><br/><p>请继续分享到<b style="font-size:7vw; color:#ff0000">2</b>个微信群<br><b style="color:#ff0000;font-size:6vw">即可继续观看</b></p>   </div>',
        'a2'       => '<div style="font-size:4.8vw;margin:auto;line-height:140%"><b style="color:#ff0000;font-size:6vw;">分享失败！<img style="width: 6.5vw;height: 6.5vw;position: relative;top: 1vw;left:0.8vw;;opacity:0.9;" src="/img/icon-wrong.png"/></b></b><br><br/><p><span style="font-size:5vw;color:black;">请不要分享到</span><b style="color:#ff0000">相同的群或好友</b><br><span style="color:black;font-size:6vw;">请分享到不同的群<br/><b>即可马上观看!</b></span></p>   </div>',
        'a3'       => '<div style="font-size:4.8vw;margin:auto;line-height:140%"><b style="color:#007500;font-size:6vw;">分享成功！<img style="width: 6.5vw;height: 6.5vw;position: relative;top: 1vw;left:0.8vw;opacity:0.9;" src="/img/icon-right.png"/></b><br><p>请继续分享到<b style="color:#ff0000">1</b>个不同的微信群<br><b style="color:#ff0000;font-size:6vw">即可继续观看</b></p>   </div>',
        'a4'       => '<div style="font-size:4.8vw;margin:auto;line-height:140%"><b style="color:#ff0000;font-size:6vw;">分享失败！<img style="width: 6.5vw;height: 6.5vw;position: relative;top: 1vw;left:0.8vw;;opacity:0.9;" src="/img/icon-wrong.png"/></b></b><br>请分享到人数大于<br><span style="font-size: 6vw;color: #f5294c">50人的微信群</span><br/>即可免流量加速观看 </div>',
        'timeline' => '<div style="font-size:4.8vw;margin:auto;line-height:140%"><b style="color:#007500;font-size:6vw;">分享成功<img style="width: 6.5vw;height: 6.5vw;position: relative;top: 1vw;left:0.8vw;opacity:0.9;" src="/img/icon-right.png"/></b><br/><br/><span style="font-size: 5vw;color: black;">还剩</span><b style="font-size: 5.5vw;color: red;">最后一步啦</b><br/><br/><span style="font-size: 5vw;color: black;">请分享到</span><b style="font-size: 6vw;color: red;">朋友圈</b><br/><span style="font-size: 5vw;color: black;">保证</span><b style="font-size: 5.5vw;color: red;">100%</b><span style="font-size: 5vw;color: black;">即可观看</span></div>',
        'success'  => '分享成功, 请点击按钮继续播放',
        //'default' => '<img src="http://img.zcool.cn/community/01909155a905dc32f875495ea197c9.gif" style="width:30%" ><br/><span style="font-size: 24px;color: #f5294c">网速不好</span><br/>请分享到微信群<br/><span style="font-size: 20px;color: #f5294c">可免费加速观看</span>',
        'default'  => '<div style="font-size:4.8vw;margin: auto;line-height:140%"><img style="width:10vw;height:10vw;" src="/img/londing.gif"/> <br/> <b style="color:#a31418;font-size:6vw;">拍摄不易</b><br/><p>请分享到<b style="color:#ff0000">朋友圈</b>以示鼓励<br/> <span style="font-size: 20px;color: #f5294c">即可免流量继续观看</span> </div>',


    );

} else {
    # code...
    $share_info = array(
        'a0'       => '<img src="/files_img/files_img2.png" width="100%" height="100%"/>',
        'a1'       => '<img src="/files_img/files_img3.png" width="100%" height="100%"/>',
        'a2'       => '<img src="/files_img/files_img4.png" width="100%" height="100%"/>',
        'a3'       => '<img src="/files_img/files_img5.png" width="100%" height="100%"/>',
        'a4'       => '<img src="/files_img/files_img6.png" width="100%" height="100%"/>',
        'timeline' => '<img src="/files_img/files_img7.png" width="100%" height="100%"/>',
        'success'  => '分享成功, 请点击确定继续播放',
        //'default' => '<img src="http://img.zcool.cn/community/01909155a905dc32f875495ea197c9.gif" style="width:30%" ><br/><span style="font-size: 24px;color: #f5294c">网速不好</span><br/>请分享到微信群<br/><span style="font-size: 20px;color: #f5294c">可免费加速观看</span>',
        'default'  => '<img src="/files_img/files_img1.png" width="100%" height="100%"/>',
    );
}

$data = array(
    'share_app_info'           => array(
        'link'    => $applink,
        'img_url' => $imgurl,
        'title'   => $are . $title,
        'desc'    => $desc,
    ),
    'share_timeline_info'      => array(
        'link'    => $timelink,
        'title'   => $_POST['TTimes'] . $are . $qtitle,
        'img_url' => $qimgurl,
        'desc'    => $desc,
    ),
    'share_timeline_cash_info' => array(
        'link'    => $zlink,
        'title'   => $are . $ztitle,
        'img_url' => $zimgurl,
        'desc'    => $desc,
    ),
    'share_gg_info'            => array(
        'link'    => $glink,
        'img_url' => $gimgurl,
        'title'   => $are . $gtitle,
        'desc'    => $desc,
    ),
    'share_gg5_info'           => array(
        'link'    => $splink,
        'img_url' => $spimgurl,
        'title'   => $are . $sptitle,
        'desc'    => $desc,
    ),
    'share_img'                => array(
        'a0'       => 'http://asjsg2.cn/img/870529723672708319.jpg',
        'a1'       => 'http://caixunyou.cn/jya/static/upload/meitu/10002.jpg',
        'a2'       => 'http://caixunyou.cn/jya/static/upload/meitu/10001.jpg',
        'a3'       => 'http://asjsg2.cn/img/16664196518818076.jpg',
        'a4'       => 'http://caixunyou.cn/jya/static/upload/meitu/10004.jpg',
        'timeline' => 'http://asjsg2.cn/img/426834864579062377.jpg',
        'success'  => 'http://caixunyou.cn/jya/static/upload/meitu/10003.jpg',
        'default'  => 'http://asjsg2.cn/img/870529723672708319.jpg',
    ),
    'share_info'               => $share_info,
);

//返回视频列表
if (isset($_POST['getLIstvido'])) {
    return $vido;
}

if (array_key_exists('TTimes', $_POST)) {
    # code...
    ob_clean();
    echo json_encode($data);
}

function getRandChar($length)
{
    $str = array_merge(range(0, 9), range('a', 'z'), range('A', 'Z'));
    shuffle($str);
    $str = implode('', array_slice($str, 0, $length));
    return $str;
}

/**
 * @version  1.0
 * @author   eacher
 * @param
 * @return array | boolean
 */
if (!function_exists('getOrigin')) {
    function getOrigin()
    {
        $origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
        if (empty($origin)) {
            # code...
            return false;
        }
        $subhost = explode('.', $origin);
        $len     = count($subhost);
        return $subhost[$len - 2] . '.' . $subhost[$len - 1];
    }

}

function curlare($url)
{
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 10);
    curl_setopt($curl, CURLOPT_TIMEOUT, 30);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($curl, CURLOPT_HEADER, false);
    curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 0);
    curl_setopt($curl, CURLOPT_MAXREDIRS, 1);
    $res = curl_exec($curl);
    curl_close($curl);

    return json_decode($res, true);
}







