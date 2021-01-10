-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 10, 2018 at 12:04 AM
-- Server version: 5.7.21-0ubuntu0.16.04.1
-- PHP Version: 7.0.28-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node_ejs_passport`
--

-- --------------------------------------------------------

--
-- Table structure for table `content_master`
--

CREATE TABLE `content_master` (
  `content_id` int(3) NOT NULL,
  `type` varchar(22) NOT NULL,
  `content` text NOT NULL,
  `content_top` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `content_master`
--

INSERT INTO `content_master` (`content_id`, `type`, `content`, `content_top`) VALUES
(1, 'home', '<p style="box-sizing: border-box; margin: 0px 0px 10px; font-size: 17.68px; line-height: 35px; font-family: second; color: #333333; text-align: center;">The majority of people at any gym are missing out on a vital part of every workout: THE TEMPO. Knowing how long to lower the weight, how long to pause, how long to raise the weight, and how long to pause before repeating, along with the rest interval between sets will make the difference between going through the motions and making huge gains.</p>\n<p style="box-sizing: border-box; margin: 0px 0px 10px; font-size: 17.68px; line-height: 35px; font-family: second; color: #333333; text-align: center;">OK - I\'m going to be honest. I work out to not only feel good mentally and have physical capability, but also to look good. There I said it. I like how I look better when I\'m in shape. The opposite sex does too. This program is the quick way to build quality muscle fast. The same methods Hollywood A-listers use to gain ridiculous muscle for their movies is made simple to follow in our program. Our solution not only includes a full workout guide utilizing hypertrophic principles established by the world\'s leaders in strength training, but also an app (Android and iPhone) that will tell you what the exercise is, when to raise, when to lower, when to pause, and when to rest. But who wants to hear a pre-recorded coach with some cheesy music you\'ve never heard? We don\'t either.</p>\n<p style="box-sizing: border-box; margin: 0px 0px 10px; font-size: 17.68px; line-height: 35px; font-family: second; color: #333333; text-align: center;">Our app will play simultaneously with Spotify, Pandora, etc., so you can choose the music you like. If you can only do 6 reps instead of 8, you easily skip to the rest interval - no problem.</p>\n<p style="box-sizing: border-box; margin: 0px 0px 10px; font-size: 17.68px; line-height: 35px; font-family: second; color: #333333; text-align: center;">Our goal is for you to have a guided, muscle blasting workout in less than an hour to help you achieve the max gains for any body type. If you aren\'t satisfied after 90 days, we will provide you a FULL refund - no questions asked. We are that confident in this program.</p>\n<p style="box-sizing: border-box; margin: 0px 0px 10px; font-size: 17.68px; line-height: 35px; font-family: second; color: #333333; text-align: center;">The quick bown fox jumps over the lazy dog.</p>\n<h1 style="box-sizing: border-box; margin: 20px 0px 10px; font-size: 41.99px; font-family: first; font-weight: 500; line-height: 1.1; color: #373737; text-align: center;">About Tension Tempo</h1>\n<p style="box-sizing: border-box; margin: 0px 0px 10px; font-size: 17.68px; line-height: 35px; font-family: second; color: #333333; text-align: center;">With over 25 years of experience and certification from the Poliquin Group on Hypertrophic program design, the group at Tension Tempo rely on science created through real human effort. Using additional knowledge from programs used by celebrities to gain muscle fast, we have incorporated tried and proven hypertrophic principles throughout the program. Tension Tempo provides you with the tool to make it easy for you to fully benefit from time under tension principles by guiding you with the correct Tempo and Rest on your lifts through your own headphones - all while listening to your own music! Backed by a 100% money back guarantee after 90 days of use, you have nothing to lose and only muscle to gain.</p>\n<p style="box-sizing: border-box; margin: 0px 0px 10px; font-size: 17.68px; line-height: 35px; font-family: second; color: #333333; text-align: center;">To take advantage of our bonus offer, please send your before and after pictures, before and after weight, name, order date,<br style="box-sizing: border-box;" />and any comments to<a style="box-sizing: border-box; color: #337ab7; text-decoration: none; background-color: transparent;" href="mailto:results@tensiontempo.com">&nbsp;results@tensiontempo.com</a>&nbsp;By submitting, you fully authorize Tension Tempo LLC to publish your pictures,<br style="box-sizing: border-box;" />First name and last initial, comments and before and after bodyweight on our website for testimonial purposes.<br style="box-sizing: border-box;" />To reach us for any other purpose, including our guarantee, please contact us at&nbsp;<a style="box-sizing: border-box; color: #337ab7; text-decoration: none; background-color: transparent;" href="mailto:contact@tensiontempo.com">contact@tensiontempo.com</a></p>\n<p style="box-sizing: border-box; margin: 0px 0px 10px; font-size: 17.68px; line-height: 35px; font-family: second; color: #333333; text-align: center;">&nbsp;</p>\n<p style="box-sizing: border-box; margin: 0px 0px 10px; font-size: 17.68px; line-height: 35px; font-family: second; color: #333333; text-align: center;">&nbsp;</p>', '');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('7ZgkdaH0ENHTkpAj5wugSgvDF8LW5nPu', 1516563302, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"}}'),
('GXHl_DoS1B0X3ZezvVGBnI0B-BQGXnPi', 1523385242, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"passport":{"user":65}}'),
('Iy2NO53r34g03ooK_MiGQI3_g_EM4Q8d', 1516564966, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"}}'),
('O8aytHmyq1aooBaUoaTW8QL2uvhiIp_x', 1523385259, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"}}'),
('Qbvr2Z6iOgmTuon4bpmlkanBM-VqCy0Q', 1516565820, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"}}'),
('u1vFj7bh0C-9N82jszz23jD1Il5C-wwv', 1516567842, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"}}'),
('y3xkalrqcUUv2XOVv0xEWRKA3vgRvwoz', 1516565713, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"}}');

-- --------------------------------------------------------

--
-- Table structure for table `user_master`
--

CREATE TABLE `user_master` (
  `user_id` int(11) NOT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `profile_status` varchar(500) DEFAULT NULL,
  `token` varchar(20) NOT NULL,
  `forgotToken` varchar(20) DEFAULT NULL,
  `user_type` tinyint(2) NOT NULL COMMENT '1:normal;2:admin',
  `status` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `content_master`
--
ALTER TABLE `content_master`
  ADD PRIMARY KEY (`content_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `user_master`
--
ALTER TABLE `user_master`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `content_master`
--
ALTER TABLE `content_master`
  MODIFY `content_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `user_master`
--
ALTER TABLE `user_master`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
