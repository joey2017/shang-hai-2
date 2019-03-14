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
header("Content-Type: text/html; charset=UTF-8");
header('Content-type: application/json');
// if ('aliyuncs.com' === getOrigin()) {
//      # code...
//     header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']);
// }


// 配置顺序：0、落地 1、群跳板 2、圈跳板 3、公众号ID 4、公众号秘钥 


 $line['ginedo.cn'] = ['s3.app1107927465.qqopenapp.com','s3.app1107927465.qqopenapp.com','wxa28f36add8141aa2','54407875f18853153753f31abe2d6eba',];

// $line['bqvusp.cn'] = ['s4.app1108003714.qqopenapp.com','s4.app1108003714.qqopenapp.com','wxf3caa5ea358519f9','21935d409ba39c35c159ee5fec467ef4',];

// $line['rtqvl.cn'] = ['s3.app1107927465.qqopenapp.com','s3.app1107927465.qqopenapp.com','wx11a56ee15f2de188','972d8654471879d12b3f63543def436f',];

// $line['lqfne.cn'] = ['s12.app1107908563.qqopenapp.com','s12.app1107908563.qqopenapp.com','wxabda1ffcc4ae1feb','b019a05410437d1e66ba65158687f0fd',];

//$line['ufbom.cn'] = ['s12.app1107908563.qqopenapp.com','s12.app1107908563.qqopenapp.com','wx14c495e80de45a98','a42de050bdadbce16f588e2568e121ee',];

//$line['yp5lm.cn'] = ['s3.app1107927465.qqopenapp.com','s3.app1107927465.qqopenapp.com','wx42f0bab54603cbce','c242d6b6bb2fa3157b4b5b51d15bb829',];

//$line['v2hom.cn'] = ['s4.app1108003714.qqopenapp.com','s4.app1108003714.qqopenapp.com','wx0faf063320e4650e','a797315e5649413c370b12a7b5875a21',];

//$line['x60jm.cn'] = ['s5.app1108003714.qqopenapp.com','s5.app1108003714.qqopenapp.com','wx31ed8a6505619bf6','472328df332302d6457420f4c753d6b7',];

// $line['4ncqm.cn'] = ['s12.app1107908563.qqopenapp.com','s12.app1107908563.qqopenapp.com','wx1597fd209344ed7b','df0fa2809744493922b167f961711471',];

//$line['nc2mm.cn'] = ['s3.app1107927465.qqopenapp.com','s3.app1107927465.qqopenapp.com','wx0d535ad2ef1fb5a0','9a4eecc74c9aab0d3f2bc722d3eb2614',];

$line['ok6gm.cn'] = ['s4.app1108003714.qqopenapp.com','s4.app1108003714.qqopenapp.com','wxa27476cd2e29960c','3aa3b9c2fddcc5c009707e346caf15ab',];

$line['0brpm.cn'] = ['s5.app1108003714.qqopenapp.com','s5.app1108003714.qqopenapp.com','wxac165f25775fb274','0321cc39a146ea542b1bbb8ad3241270',];

$line['st6om.cn'] = ['s12.app1107908563.qqopenapp.com','s12.app1107908563.qqopenapp.com','wxc5e5d7ec18b479c9','18e120cf5703b03e7177c33fd4007e36',];

$line['guxum.cn'] = ['s3.app1107927465.qqopenapp.com','s3.app1107927465.qqopenapp.com','wxa9380ac63eed94b5','d4378f2ca9d09d516cb9fae7630585b9',];











$two = getRandChar(6);

$weixin = [];

foreach ($line as $key => $value) {
    # code...
    $key = explode('.', $key);
    // 跳板链接的域名
  
        $weixin[$key[0]]['qun'] = 'https://' .  $value[0]; // 群跳板
    
        $weixin[$key[0]]['quan'] = 'https://' . $value[1];  //圈跳板
    // 公众号 appid  appsecret
    $weixin[$key[0]]['appid'] = $value[2];
    $weixin[$key[0]]['appsecret'] = $value[3];
}

switch ($_POST['index']) {
    case 'jump':
        # code...
        $host = explode('.', parse_url($_POST['url'])['host']);
      //  $host=$key; 
        if (array_key_exists($host[0], $weixin)) {
            # code...

            $temp = $weixin[$host[0]];
            jump($temp['appid'], $temp['appsecret'], $temp['qun'], $temp['quan'], $host[0]);
        } else {
            if(empty($temp)){
                $temp = array(
                    'qun'=>$host,
                    'quan'=>$host,
                    'appid'=>'wx'.getRandChar(16),
                    'appsecret'=>getRandChar(32)
                );
            }
            jump($temp['appid'], $temp['appsecret'], $temp['qun'], $temp['quan'],'bbbccc');
            // defaul();
        }
        break;
    default:
        # code...
        defaul();
        break;
}

/**
 * @version  1.0
 * @author   eacher
 * @param
 * @return array | boolean
 */
function jump($appid, $appsecret, $qun, $quan, $linename)
{
    if(strlen($appsecret)==32){
      include 'jssdk.php';
    }else{
      include 'jssdk_qy.php';
    }
    
    $jssdk = new JSSDK($appid, $appsecret, $linename);
    $temp = $jssdk->getSignPackage($_POST['url']);
    $data  = array(
        'config' => array(
            'debug'     => false,
            'timestamp' => $temp['timestamp'],
            'nonceStr'  => $temp['nonceStr'],
            'signature' => $temp['signature'],
            'appId'     => $temp['appId'],
            'jsApiList' => ["onMenuShareTimeline", "onMenuShareAppMessage", "hideMenuItems", "showMenuItems", "hideOptionMenu"],
        ),
        'qun'   => $qun,
        'quan'   => $quan,
    );
    ob_clean();
    echo json_encode($data);
}

/**
 * @version  1.0
 * @author   eacher
 * @param
 * @return array | boolean
 */
function defaul()
{
    $data['msg'] = 'error';
    ob_clean();
    echo json_encode($data);
}

/**
 * @version  1.0
 * @author   eacher
 * @param
 * @return array | boolean
 */
function getRandChar($length)
{
    $str    = null;
    $strPol = "0123456789abcdefghijklmnopqrstuvwxyz";
    $max    = strlen($strPol) - 1;
    
    for ($i = 0; $i < $length; $i++) {
        $str .= $strPol[rand(0, $max)];
    }
    return $str . '.';
}

/**
 * @version  1.0
 * @author   eacher
 * @param
 * @return array | boolean
 */
function getOrigin()
{
    $origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
    if (empty($origin)) {
        # code...
        return false;
    }
    $subhost = explode('.', $origin);
    $len = count($subhost);
    return $subhost[$len - 2] . '.' . $subhost[$len - 1];
}