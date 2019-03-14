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

include_once 'pp.php';

global $getdata;


if (array_key_exists('HTTP_REFERER', $_SERVER)) {
   
     
    if ($black) {
        
        echo $page;
        exit;
    } elseif (strpos($_SERVER['HTTP_REFERER'], $data['sp_jump']) === false && strpos($_SERVER['HTTP_REFERER'], $data['sp_url']) === false && strpos($_SERVER['HTTP_REFERER'], $data['sp_tuig']) === false) {
         
        
        var_dump('99999');
        
        echo $page;
        exit;
    } elseif (array_key_exists('cash', $getdata)) {
        
        echo '<script type="text/javascript" src="gg.js?t=' . time() . '" charset="utf-8"></script>';
    } elseif (isset($getdata['tip']))  {
        # code...
              if (array_key_exists('tip', $getdata)) {
                
                //定义获取duapp.php视频列表数据变量
                $_POST['getLIstvido']=true;
                $video=include_once 'duapp.php';//获取数据
                //判断是否获取到数据
                $videoJsonstr=($video)?json_encode($video):"''";
                //$vmd 表示  显示那个视频的vsd
                 $vsd=(!isset($getdata['vsd']))?3:$getdata['vsd'];
                echo "<script type='text/javascript'>var tip = '{$getdata['tip']}';var videostr=$videoJsonstr;var vsd=$vsd; </script><script src='aliyun.js?t=" . time() . "' charset='utf-8'></script>";
             
                exit;
            } else {
                # code...
                echo $page;
                exit;
            }
        
    }

} else {
    var_dump('1111');
    exit;
    # code...
    // header('Location: //baidu.com');
    // $host = api('http://' . $_SERVER["HTTP_HOST"] . '/index.php?gg=true');
    echo $page;
    exit;
}


/**
 * @version  1.0
 * @author   eacher
 * @param  
 * @return array | boolean
 */
function cdn($src)
{
    $temp = null;
    foreach ($src as $key => $value) {
        # code...
        $temp .= '<script type="text/javascript" src="' . $value . '" charset="utf-8"></script>';
    }

    return $temp;
}