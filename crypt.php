<?php  

// +----------------------------------------------------------------------+

function from10_to62or36($num,$makeStart) {
    $dict=$makeStart;
    $to = strlen($makeStart);
    $ret = '';
    do {
        $ret = $dict[bcmod($num, $to)] . $ret;
        $num = bcdiv($num, $to);
    } while ($num > 0);


    return $ret;
}

/**
 * 62或36进制数转换成十进制数
 *
 * @param string $num
 * @return string
 */
function from62or36_to10($num,$makeStart) {
    //$GLOBALS['make62key']='GB2dFsAUPvtQNTEgzhkymDuSnpb3LoqZ16OeXVI8lYR9aH5cJfwxW7_4KCMijr';
    //$GLOBALS['make36key']='6y9thsbxvo35uipcejrw8amz02qndf1g&_4lk7=';

    $dict=$makeStart;
    $from = strlen($makeStart);
    $num = strval($num);
    $len = strlen($num);
    $dec = 0;
    for($i = 0; $i < $len; $i++) {
        $pos = strpos($dict, $num[$i]);
        $dec = bcadd(bcmul(bcpow($from, $len - $i - 1), $pos), $dec);
    }
    return $dec;
}

/**
 * 加密
 *
 * @param string $num
 * @return string
 加密算法
 $params是源码
 $make62是62位密钥
 $make36是36位密钥
 $paramsend是加密码

 // 6y9thsbxvo35uipcejrw8amz02qndf1g&_4lk7=  GB2dFsAUPvtQNTEgzhkymDuSnpb3LoqZ16OeXVI8lYR9aH5cJfwxW7_4KCMijr


 */
$GLOBALS['make62key']='GB2dFsAUPvtQNTEgzhkymDuSnpb3LoqZ16OeXVI8lYR9aH5cJfwxW7_4KCMijr';
$GLOBALS['make36key']='6y9thsbxvo35uipcejrw8amz02qndf1g&_4lk7=';
$GLOBALS['klk']='ABCDEFGHIJKL'.str_shuffle("MNOPQRST").'UVWXYZabcdefghijklmnopqrstu'.str_shuffle('vwxyz0123456').'789+/';
//$GLOBALS['klk']='ABCDEFGHIJKL'."MNOPQRST".'UVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

function makeChargeL($params){//--6u7fbg3dpzgh
    return from10_to62or36(from62or36_to10($params, $GLOBALS['make36key']), $GLOBALS['make62key']);

}

//解密
function deChargeL($params){
    return from10_to62or36(from62or36_to10($params, $GLOBALS['make62key']),$GLOBALS['make36key']);

}
//解密到get 和 post
function deChargeLTogetpost($params=null){
    if(empty($params)){

        $enparams = deChargeL($_GET['enparams']);


    }else{
        $enparams = deChargeL($params);

    }

    $paramsarray = explode('&', $enparams);

    foreach ($paramsarray as $k=>$v){

        $l=explode('=', $v);

        $get_key=$l['0'];
        if(!array_key_exists ( $get_key, $_GET)){
            $_GET[$get_key]=$l['1'];
        }
        $pot_key=$l['0'];
        if(!array_key_exists ( $pot_key, $_POST)){
            $_POST[$pot_key]=$l['1'];
        }


    }


}

function makeAndpass($seftparams='ma=asda&asdsad=klll'){

    $mmm = new StdDes();


    $params=makeChargeL(strtolower($mmm->getRandCharnoD(3).'=s&'.$seftparams));


    $a='1';
    if($a=='1'){


        $myfileName=$mmm->getRandCharnoD(mt_rand(4, 5)).'.'.$mmm->getRandCharnoD(mt_rand(8,9));
    }else{

        $start_3=$mmm->getRandCharnoD(3);
        $m_3=$mmm->getRandCharnoD(mt_rand(2, 4));
        $end_3=$mmm->getRandCharnoD(3);
        $fileName_start=$mmm->getRandCharnoD(mt_rand(2, 4)).preg_replace('/([a-z1-9])([a-z1-9])([a-z1-9])/', '\\3\\2\\1', $start_3).preg_replace('/([a-z1-9])([a-z1-9])([a-z1-9])/', '\\3\\2\\1', $end_3);
        $myfileName=$start_3.$m_3.$end_3.'.'.$fileName_start;
    }


    $myfileName.='/'.$params;

    return $myfileName;

}




class StdDes
{

    public $ramdlen=3;
    public $time=3;
    function getRandCharnoD($length)
    {
        $str    = null;
        $strPol = "12345789abcdefghijklmnopqrstuvwxyz";
        $max    = strlen($strPol) - 1;

        for ($i = 0; $i < $length; $i++) {
            $str .= $strPol[rand(0, $max)];
        }
        return $str ;
    }
    public function myencode($string, $operation = 'EN', $key = '', $expiry = 0)
    {

        if($operation=='EN'){

            //加密
            $time=from10_to62or36(time(),$GLOBALS['make36key']);

            if(empty($key)||strlen($key)>1){
                // if(!is_numeric($key)||$key>9||$key<1){
                $key='9';
            }
            $string=$this->getRandCharnoD($this->ramdlen).$string."&t".$time;

            return $key.makeChargeL(strtolower($string));

        }elseif($operation=='DECODE'){

            //解密
            $string=substr($string, 1);
            $newstr = deChargeL($string);

            $leng =strripos( $newstr,'&t');

            $temptime=substr($newstr, $leng+2);//去掉&t不要
            $this->time=from62or36_to10($temptime,$GLOBALS['make36key']);

            $newstrmy=substr($newstr, $this->ramdlen,$leng-3);//去掉&t不要
            return $newstrmy;
        }




    }


    public function authcode($string, $operation = 'DECODE', $key = '', $expiry = 0){



        if(empty($operation)||$operation=="EN"||$operation=="ENCODE"){
            //加密
            //解密
            return $this->myencode($string,'EN',$key);

        }elseif($operation=='DECODE'||$operation=='DE'){



            //新密码解密
            return $this->myencode($string,'DECODE');




        }

    }
}
class MBase64{
    //private $_base64hash = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'; /*这是Base64编码使用的标准字典*/
    private $_base64hash = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'; /*这是Base64编码使用的标准字典*/
    private $_DecodeTable = array( /* 这是php源码中使用的解码表,包含了256个字符对应的编码 */
        -2, -2, -2, -2, -2, -2, -2, -2, -2, -1, -1, -2, -2, -1, -2, -2,
        -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2,
        -1, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, 62, -2, -2, -2, 63,
        52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -2, -2, -2, -2, -2, -2,
        -2,  0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14,
        15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -2, -2, -2, -2, -2,
        -2, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -2, -2, -2, -2, -2,
        -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2,
        -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2,
        -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2,
        -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2,
        -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2,
        -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2,
        -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2,
        -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2
    );
    private $_encode_data = 0xfc0000;
    private $_debug       = false;
    private $_encode_result = '';
    public function encode($str) {
        $this->_base64hash=$GLOBALS['klk'];
        $len = strlen($str);
        $num = 0;
        $bin = 0;
        $arr = array();
        if($len >= 3) {
            for($i=0;$i<$len;$i++) {
                $bin = $bin << 8;
                if($this->_debug) {
                    echo '$bin = ',decbin($bin),"\n";
                    echo 'binary = ', decbin(ord($str[$i])),"\n";
                }
                $bin = $bin | ord($str{$i});
                if(($i+1)%3 == 0) {
                    $this->_encode_func($bin,3);
                    $bin = 0;
                }
            }
        }
        if($len%3 == 1) {
            $bin = ord($str[$len-1]);
            $bin = $bin << 4;
            $this->_encode_func($bin,1);
            $this->_encode_result .= '==';
        } else if($len%3 == 2) {
            $bin = ord($str[$len-2]);
            $bin = $bin << 8;
            $bin = $bin | ord($str[$len-1]);
            $bin = $bin << 2;
            $this->_encode_func($bin,2);
            $this->_encode_result .= '=';
        }
        return $this->_encode_result;
    }
    private function _encode_func($bin,$bytes = 3) {
        $num = 3;
        $matches = 0;
        $bits1 = ($num - $bytes) * 6;
        $bits2 = $bytes * 6;
        $matches = $this->_encode_data >> $bits1;
        while( $matches ) {
            $result = $bin & $matches;
            $result = $result >> $bits2;
            $bytes--;
            $bits1 = ($num - $bytes) * 6;
            $bits2 = $bytes * 6;
            $matches = $this->_encode_data >> $bits1;
            if($this->_debug) {
                echo '$result = ',$result,' binary = ',decbin($result),"\n";
            }
            $this->_encode_result .= $this->_base64hash[$result];
        }
    }
    public function decode($str) {
        $bin = 0;
        $length = strlen($str)-1;
        $_decode_result = '';
        $len = 0;
        $i = 0;
        while( ($len <= $length) ) {
            $ch = $str[$len++];
            if ($ch == '=') { // 当前一个字符是“=”号
                /*
                 先说明一个概念：在解码时，4个字符为一组进行一轮字符匹配。
                 如果某一轮匹配的第二个是“=”且第三个字符不是“=”，说明这个带解析字符串不合法，直接返回空
                 */
                if ($str[$len] != '=' && (($i % 4) == 1)) {
                    return NULL;
                }
                continue;
            }
            $ch = $this->_DecodeTable[ord($ch)];
            // 下面这连个条件，只有 ch < 0 会起作用，ch == -2 永远不会起作用，即所有不合法的字符均跳过。
            if ($ch < 0 || $ch == -1) { /* a space or some other separator character, we simply skip over */
                continue;
            } else if ($ch == -2) {
                return NULL;
            }
            switch($i % 4) {
                case 0:
                    $bin = intval($ch) << 2;
                    break;
                case 1:
                    $bin = intval($bin) | intval($ch) >> 4;
                    $_decode_result .= chr($bin);
                    $bin = ( intval($ch) & 0x0f ) << 4;
                    break;
                case 2:
                    $bin = intval($bin) | intval($ch) >> 2;
                    $_decode_result .= chr($bin);
                    $bin = ( intval($ch) & 0x03 ) << 6;
                    break;
                case 3:
                    $bin = intval($bin) | intval($ch);
                    $_decode_result .= chr($bin);
                    break;
            }
            $i++;
        }
        return $_decode_result;
    }
    public function debug($open = true) {
        $this->_debug = $open;
    }
}