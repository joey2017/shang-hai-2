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

/**
 * 
 */
class Log
{
    private static $path = null;
    private static $file = null;
    private $tagName = null;
    private $nodeObj = null;
    private $nodeName = null;
    private $prefix = 'pr_';


    /**
     * @version  1.0
     * @author   eacher   
     * @param  
     * @return array | boolean
     */
    public static function init()
    {
        self::$file = './log/' . date('Ym') . '/' . date('md') . '.log';

        self::$path = dirname(self::$file);
        !is_dir(self::$path) && mkdir(self::$path, 0755, true);
    }



    /**
     * @version  1.0
     * @author   eacher   
     * @param  
     * @return array | boolean
     */
    public static function write($message)
    {
    	if (is_null(self::$file)) {
    		# code...
    		return false;
    	}
        $now     = date(' c ');
        $method  = isset($_SERVER['REQUEST_METHOD']) ? $_SERVER['REQUEST_METHOD'] : 'CLI';
        $uri     = isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : '';
        $message = "\r\n---------------------------------------------------------------\r\n[{$now}] {$method} {$uri}\r\n" . $message;
        error_log($message, 3, self::$file);
    }
}