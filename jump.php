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


if (array_key_exists('PHPSESSID', $_COOKIE)) {
	# code...
	session_id($_COOKIE['PHPSESSID']);
	session_start();
} else {
	echo "error5";
	exit;
}


if ($_SESSION['iswx'] && !empty($_SESSION['host'])) {
    # code...
	$temp = '';
	foreach ($_SESSION as $key => $value) {
		# code...
		if ('host' === $key) {
			# code...
			$url = $value . '?';
		} elseif ('iswx' === $key) {
			# code...
		} elseif ('domain' === $key) {
			# code...
		} else {
			# code...
			$temp .= $key . '=' . $value . '&';
		}
	}
	$url .= $temp;
	echo '<script type="text/javascript">location.href="//' . $url . '"</script>';
} elseif ($_SESSION['iswx']) {
	# code...
	echo '<script type="text/javascript">location.href="' . $_SESSION['sp_url'] . '"</script>';
} else {
	# code...
    echo '<script type="text/javascript">location.href="' . $_SESSION['gg_url'] . '?cash=noshare"</script>';
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
