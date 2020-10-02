-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 02, 2020 at 05:32 PM
-- Server version: 8.0.21-0ubuntu0.20.04.4
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `teknikal-test`
--

-- --------------------------------------------------------

--
-- Table structure for table `code`
--

CREATE TABLE `code` (
  `id` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `code` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `code`
--

INSERT INTO `code` (`id`, `email`, `code`, `created_at`) VALUES
(2, 'abi.vardhana@outlook.com', 185525, '2020-10-02 10:00:27');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `is_active` int NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `phone`, `password`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'abi', 'yasa', 'abi@mail.com', '12345678', '$2b$10$c7K1IQMRx7ha2uUXTwS/neC/ZE9VeSLSVoaieMWMSN5xsKjhKfQ2i', 0, '2020-10-02 08:35:09', NULL),
(12, 'abi', 'yasa', 'abi.vardhana@outlook.com', '12345678', '$2b$10$TtLcyY3NpVoUs/Qwvk9Fm.BxaUB9ag2wDfCcmXbZYYeYOfO7kuAFG', 0, '2020-10-02 10:00:27', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `code`
--
ALTER TABLE `code`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `code`
--
ALTER TABLE `code`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
