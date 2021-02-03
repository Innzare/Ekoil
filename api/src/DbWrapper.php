<?php

declare(strict_type=1);

class DbWrapper 
{
   private static $__instance;

   public static function getDb(): DbWrapper 
   {
      if (!self::$__instance) self::$__instance = new self;

      return self::$__instance;
   }

   private mysqli $connect;

   private function __construct() 
   {
         $this->connect = new mysqli('127.0.0.1');
   }
}