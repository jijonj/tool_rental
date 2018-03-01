<?php
return [
    'archive' => "CREATE TABLE IF NOT EXISTS `ml_archive` (
                  `id` INT(255) NOT NULL AUTO_INCREMENT,
                  `book_id` INT(255) NOT NULL,
                  `book` VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
                  `client_id` INT(255) NOT NULL,
                  `client` VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
                  `event` INT(10) NOT NULL,
                  `created_at` DATETIME NOT NULL,
                  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
				  PRIMARY KEY (id)
                ) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci",
    'books' => "CREATE TABLE IF NOT EXISTS `ml_books` (
                  `id` INT(255) NOT NULL AUTO_INCREMENT,
                  `title` VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
                  `author` VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
                  `editor` VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
                  `publisher` VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
                  `published_on` YEAR(4) NOT NULL,
                  `country` VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
                  `language` VARCHAR(100) COLLATE utf8_unicode_ci NOT NULL,
                  `edition` VARCHAR(50) COLLATE utf8_unicode_ci NOT NULL,
                  `isbn` INT(20) UNSIGNED ZEROFILL NOT NULL,
                  `pages` INT(20) NOT NULL,
                  `quantity` INT(10) NOT NULL DEFAULT '1',
                  `status` INT(10) NOT NULL DEFAULT '0',
                  `price` VARCHAR(10) COLLATE utf8_unicode_ci NOT NULL,
                  `cover` VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
                  `created_at` DATETIME NOT NULL,
                  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
				  PRIMARY KEY (id)
                ) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci",
    'clients' => "CREATE TABLE IF NOT EXISTS `ml_clients` (
                  `id` INT(11) NOT NULL AUTO_INCREMENT,
                  `name` VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
                  `country` VARCHAR(50) COLLATE utf8_unicode_ci NOT NULL,
                  `city` VARCHAR(50) COLLATE utf8_unicode_ci NOT NULL,
                  `address` VARCHAR(100) COLLATE utf8_unicode_ci NOT NULL,
                  `phone` VARCHAR(20) COLLATE utf8_unicode_ci NOT NULL,
                  `email` VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
                  `created_at` DATETIME NOT NULL,
                  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
				  PRIMARY KEY (id)
                ) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci",
    'rentals' => "CREATE TABLE IF NOT EXISTS `ml_rentals` (
                  `id` INT(11) NOT NULL AUTO_INCREMENT,
                  `client_id` INT(255) NOT NULL,
                  `client` VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
                  `book_id` INT(255) NOT NULL,
                  `book` VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
                  `return_date` DATE NOT NULL,
                  `created_at` DATETIME NOT NULL,
                  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
				  PRIMARY KEY (id)
                ) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci",
    'users' => "CREATE TABLE IF NOT EXISTS `ml_users` (
                  `id` INT(11) NOT NULL AUTO_INCREMENT,
                  `name` VARCHAR(100) COLLATE utf8_unicode_ci NOT NULL,
                  `email` VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
                  `password` VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
                  `address` VARCHAR(255) COLLATE utf8_unicode_ci NOT NULL,
                  `phone` VARCHAR(100) COLLATE utf8_unicode_ci NOT NULL,
                  `created_at` DATETIME NOT NULL,
                  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
				  PRIMARY KEY (id)
                ) DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci"
];