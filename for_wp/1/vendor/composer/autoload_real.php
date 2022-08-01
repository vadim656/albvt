<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInit1579d55aee24d7a6e3f7bea53e381b7a
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        require __DIR__ . '/platform_check.php';

        spl_autoload_register(array('ComposerAutoloaderInit1579d55aee24d7a6e3f7bea53e381b7a', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInit1579d55aee24d7a6e3f7bea53e381b7a', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInit1579d55aee24d7a6e3f7bea53e381b7a::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
