-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-06-2020 a las 17:24:19
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `alquiler_coches`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `coche`
--

CREATE TABLE `coche` (
  `idCoche` int(255) NOT NULL,
  `tipoCarroceria` varchar(100) DEFAULT NULL,
  `marca` varchar(100) DEFAULT NULL,
  `modelo` varchar(255) DEFAULT NULL,
  `stockModelo` int(11) DEFAULT NULL,
  `km` double DEFAULT NULL,
  `motor` varchar(100) DEFAULT NULL,
  `anio` int(11) DEFAULT NULL,
  `precio` double DEFAULT NULL,
  `CV` int(11) DEFAULT NULL,
  `plazas` int(11) DEFAULT NULL,
  `imagen` longblob DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `coche`
--

INSERT INTO `coche` (`idCoche`, `tipoCarroceria`, `marca`, `modelo`, `stockModelo`, `km`, `motor`, `anio`, `precio`, `CV`, `plazas`, `imagen`) VALUES
(1, 'coupe', 'honda', NULL, 500, 130, '1.8 gasolina', 2006, 100, 140, 5, NULL),
(3, 'coupe', 'Ford Fiesta', NULL, 100, 190, '1.2 gasolina', 2015, 50, 80, 5, NULL),
(4, 'cabrio', 'honda s2000', NULL, 30, 200, '2.2 gasolina', 1999, 80, 220, 2, NULL),
(14, 'coupe', 'toyota supra', NULL, 48, 97, '2.2 gasolina', 2016, 100, 200, NULL, NULL),
(21, 'coupe', 'mazda mx5', NULL, 300, 200, '2.6 gasolina', 2016, 20, 130, 2, NULL),
(32, 'familiar', 'peugeot', NULL, 199, 15, '1.6 diesel', 2015, 50, 100, 5, NULL),
(46, 'coupe', 'honda', 'civic sport', 99, 20, '1.5 gasolina', 2015, 100, 120, 5, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentario`
--

CREATE TABLE `comentario` (
  `idComentario` int(11) NOT NULL,
  `fkCocheCm` int(11) DEFAULT NULL,
  `fkUsuarioCm` int(11) DEFAULT NULL,
  `contenido` varchar(255) DEFAULT NULL,
  `puntuacion` int(11) DEFAULT NULL,
  `pregunta` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comentario`
--

INSERT INTO `comentario` (`idComentario`, `fkCocheCm`, `fkUsuarioCm`, `contenido`, `puntuacion`, `pregunta`) VALUES
(1, NULL, 1, 'este coche es muy bueno', 5, NULL),
(4, NULL, NULL, NULL, NULL, NULL),
(8, NULL, NULL, NULL, NULL, NULL),
(9, NULL, NULL, NULL, NULL, NULL),
(10, NULL, 1, 'buen coche', 4, NULL),
(11, NULL, 1, 'buen coche', 4, NULL),
(12, NULL, 1, 'buen coche', 4, NULL),
(15, 3, 1, 'es muy buen coche me encanta', 0, NULL),
(16, 3, 1, 'sdfsdfsfsd', 0, NULL),
(17, 3, 1, 'sfdssdf', 0, NULL),
(18, 3, 1, 'adasd', 0, NULL),
(19, 14, 1, 'its a supraaaaa????', 0, NULL),
(20, 1, 1, 'dfgdfg', 0, NULL),
(21, 1, 1, 'jkljkl', 0, NULL),
(22, 1, 1, 'ghjgh', 0, NULL),
(23, 1, 1, 'fghfg', 0, NULL),
(24, 1, 1, 'hjkhj', 3, NULL),
(25, 1, 1, 'sdfsddf', 4, NULL),
(26, 4, 1, 'coche muy comodo', 4, NULL),
(27, 4, 1, 'msdfgsd', 0, NULL),
(28, 4, 1, 'asdas', 0, NULL),
(29, 4, 1, 'cochaso', 5, NULL),
(30, 4, 1, 'rtyrty', 4, NULL),
(31, 4, 1, 'me lo dices o me lo cuentas?', 5, 29),
(32, 4, 1, 'dfgdfgdfgdfg', 4, NULL),
(33, 4, 1, 'hfghfgh', 3, NULL),
(34, 4, 1, 'bueeeeno', 4, NULL),
(35, 14, 1, 'es un cochaso', 3, NULL),
(36, 14, 1, 'se maneja bien?', 4, 35),
(37, 14, 1, 'yes ,it is', 5, 19),
(38, 14, 1, 'sdfsdf', 3, NULL),
(39, 14, 1, 'dsfsdf', 3, NULL),
(40, 14, 1, 'tu  comentario no tiene sentido', 3, NULL),
(41, 3, 1, 'cochaso', 3, 15),
(42, 3, 1, 'tu comentario no tiene sentido', 4, 17),
(43, 32, 1, 'dgdfg', 3, NULL),
(44, 4, 3, 're chido el carro¡¡¡', 5, NULL),
(45, 4, 3, 'ensd,nlaknhsads', 0, 31),
(46, NULL, 1, 'cochaso', 4, 1),
(47, 4, 1, 'no entiendo', 4, NULL),
(48, 32, 1, 'pero weeeno', 3, NULL),
(49, 14, 1, 'hola que tal , probando', 4, NULL),
(50, 4, 1, 'si entiendes', 4, 47),
(51, 4, 3, 'gran coche', 3, NULL),
(52, 46, 1, 'cochaso', 4, NULL),
(53, 3, 1, 'cochasos', 4, NULL),
(54, 14, 1, 'cochaso', 4, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detallepedido`
--

CREATE TABLE `detallepedido` (
  `idDetalle` int(11) NOT NULL,
  `fkPedido` int(11) DEFAULT NULL,
  `fkCoche` int(255) DEFAULT NULL,
  `fkReserva` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `precioTotal` int(11) DEFAULT NULL,
  `fechaIniRent` varchar(255) DEFAULT NULL,
  `fechaFinRent` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `detallepedido`
--

INSERT INTO `detallepedido` (`idDetalle`, `fkPedido`, `fkCoche`, `fkReserva`, `cantidad`, `precioTotal`, `fechaIniRent`, `fechaFinRent`) VALUES
(1, NULL, 14, NULL, 1, 0, '2020-01-01', '2020-01-01'),
(2, NULL, 4, NULL, 2, 80, '2020-01-01', '2020-01-01'),
(3, NULL, 14, NULL, 1, 0, '2020-01-01', '2020-01-01'),
(4, NULL, 4, NULL, 2, 80, '2020-01-01', '2020-01-01'),
(5, NULL, 14, NULL, 1, 0, '2020-01-01', '2020-01-01'),
(6, NULL, 4, NULL, 2, 80, '2020-01-01', '2020-01-01'),
(7, NULL, 3, NULL, 1, 50, '2020-01-01', '2020-01-01'),
(8, NULL, 1, NULL, 1, 100, '2020-01-01', '2020-01-01'),
(9, 25, 3, NULL, 2, 50, '2020-01-01', '2020-01-01'),
(10, 25, 1, NULL, 1, 100, '2020-01-01', '2020-01-01'),
(11, 26, 3, NULL, 2, 50, '2020-01-01', '2020-01-01'),
(12, 26, 1, NULL, 1, 100, '2020-01-01', '2020-01-01'),
(13, 26, 21, NULL, 1, 20, '2020-01-01', '2020-01-01'),
(14, 27, 3, NULL, 1, 50, '2020-01-01', '2020-01-01'),
(15, 27, 1, NULL, 1, 100, '2020-01-01', '2020-01-01'),
(16, 28, 14, NULL, 3, 0, '2020-01-01', '2020-01-16'),
(17, 28, 14, NULL, 1, 0, '2020-01-01', '2020-01-01'),
(18, 28, 4, NULL, 1, 80, '2020-01-01', '2020-01-01'),
(19, 29, 4, NULL, 1, 80, '2020-01-01', '2020-01-01'),
(20, 29, 3, NULL, 1, 50, '2020-01-01', '2020-01-18'),
(21, 30, 14, NULL, 1, 120, '2020-01-01', '2020-01-01'),
(22, 31, 4, NULL, 1, 80, '2020-01-01', '2020-01-01'),
(23, 32, 4, NULL, 2, 160, '2020-01-01', '2020-01-17'),
(24, 33, 14, NULL, 1, 120, '2020-01-17', '2020-01-24'),
(25, 34, 32, NULL, 1, -300, '2020-01-11', '2020-01-17'),
(26, 34, 32, NULL, 1, 350, '2020-01-10', '2020-01-17'),
(27, 35, 14, NULL, 1, 2760, '2020-01-01', '2020-01-24'),
(29, 37, 4, NULL, 1, 800, '2020-01-01', '2020-01-11'),
(30, 38, 4, NULL, 11, 14960, '2020-01-01', '2020-01-18'),
(31, 39, 14, NULL, 1, 2040, '2020-01-01', '2020-01-18'),
(32, 39, 32, NULL, 1, 850, '2020-01-01', '2020-01-18');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido`
--

CREATE TABLE `pedido` (
  `idPedido` int(11) NOT NULL,
  `fkUsuario` int(11) DEFAULT NULL,
  `fechaPed` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pedido`
--

INSERT INTO `pedido` (`idPedido`, `fkUsuario`, `fechaPed`) VALUES
(1, NULL, NULL),
(2, NULL, NULL),
(3, NULL, NULL),
(4, 1, NULL),
(5, 1, NULL),
(6, NULL, NULL),
(7, NULL, NULL),
(8, NULL, NULL),
(9, NULL, NULL),
(10, NULL, NULL),
(11, NULL, NULL),
(12, 1, NULL),
(13, 1, NULL),
(14, 1, NULL),
(15, 1, NULL),
(16, 1, NULL),
(17, 1, NULL),
(18, 1, '24/4/2020'),
(19, 1, '24/4/2020'),
(20, 1, '24/4/2020'),
(21, 1, '24/4/2020'),
(22, 1, '24/4/2020'),
(23, 1, '24/4/2020'),
(24, 1, '25/4/2020'),
(25, 1, '25/4/2020'),
(26, 1, '25/4/2020'),
(27, 1, '26/4/2020'),
(28, 1, '2/5/2020'),
(29, 1, '2/5/2020'),
(30, 1, '9/5/2020'),
(31, 1, '10/5/2020'),
(32, 1, '10/5/2020'),
(33, 1, '10/5/2020'),
(34, 1, '10/5/2020'),
(35, 1, '10/5/2020'),
(36, 1, '21/5/2020'),
(37, 3, '24/5/2020'),
(38, 3, '26/5/2020'),
(39, 3, '26/5/2020');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserva`
--

CREATE TABLE `reserva` (
  `idReserva` int(11) NOT NULL,
  `fkUsuarioRes` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `rol` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `name`, `email`, `password`, `rol`) VALUES
(1, 'pablo', 'pablovieramartin21@gmail.com', '$2y$10$Ju7NceZkmqPtYGVGEtg1xumwwcfvlPcjKN.usb4yibTaD2QpCkZk.', 'admin'),
(2, 'pepe', 'pepe@gmail.com', '$2y$10$PDiojQ7aaCr2.XIPINX6BuLW8BH6TvtpdnmG4MUk9nlDiRpxVubnW', 'usuario'),
(3, 'anna', 'anna@gmail.com', '$2y$10$Q0JWenj.qFf6aFGuLnqXieruHyGn.Vhb4bq.DJsdiDjnRbBz9Ii2a', 'usuario'),
(6, NULL, NULL, '$2y$10$ejdAbMOtHPyP3KXUfhfqcewtaiEV.Lsy7oy4KPrCDZNxKMm6qc2K.', 'usuario'),
(7, NULL, NULL, '$2y$10$dZgCyG6hx4nHmfTPoU30xubYw1BmR7TyTxHSWLI8H/TisTEwB9/JO', 'usuario'),
(8, NULL, NULL, '$2y$10$zlmcmPZ9dwnhgbMKoNIhZe44gPyVmfFMf3CEDy5U10BRfx0k0zzaG', 'usuario'),
(9, NULL, NULL, '$2y$10$uzfRo8X4n0IFzV8k168EMe5FsG1nXa/k/VgqVDVkAVrvdZbZkeMUK', 'usuario'),
(10, NULL, NULL, '$2y$10$d.eQBTd1pjpgmN9qtLCoNeMGcp/xEkkTWbvDBbbaDWOKTli8af9Hu', 'usuario'),
(11, NULL, NULL, '$2y$10$Zk7MoapriWZdb71vytbDW.hDKeNgHljqc8GTini2rQARq/Pc3Wt9e', 'usuario'),
(12, NULL, NULL, '$2y$10$Dwjr5WXN.z5/H6TPCUDKkeAyeBnOIL2doV.NceM1gzSZhBqlxbsly', 'usuario'),
(13, NULL, NULL, '$2y$10$OsxU4aMZL9q3bqXoXY8wKOkVRZv5QRMabO3yff3l8Eo4Gar5tgbgq', 'usuario'),
(14, NULL, NULL, '$2y$10$GEWWQ9iM2QJF1VK8Avpcr.BDRYQTVOJWi7wDq2KZRBIwSgy95RWMS', 'usuario'),
(15, 'pepito', 'pepito@gmail.com', '$2y$10$1tBVzn2cky3oX1XoSMm05uyr7Q1iCp6OOuYOO7tCH04Zlk/HUCTV2', 'usuario'),
(16, 'juanito', 'juanti@gmail.com', '$2y$10$ZhrgSPVYNOHFjfg344fenOtdi2wdagtmKT52DYgOfKMNB6kP/odsK', 'usuario'),
(17, 'pepito', 'pewejpiro', '$2y$10$09SY8F5Jo.u0zoVo3wxAMeSx8tvZldsIRb339noGvSI4AOhmTAZee', 'usuario');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `coche`
--
ALTER TABLE `coche`
  ADD PRIMARY KEY (`idCoche`);

--
-- Indices de la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD PRIMARY KEY (`idComentario`),
  ADD KEY `comentario_ibfk_3` (`pregunta`),
  ADD KEY `comentario_ibfk_1` (`fkCocheCm`),
  ADD KEY `comentario_ibfk_2` (`fkUsuarioCm`);

--
-- Indices de la tabla `detallepedido`
--
ALTER TABLE `detallepedido`
  ADD PRIMARY KEY (`idDetalle`),
  ADD KEY `fkPedido` (`fkPedido`),
  ADD KEY `fkReserva` (`fkReserva`),
  ADD KEY `detallepedido_ibfk_2` (`fkCoche`);

--
-- Indices de la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`idPedido`),
  ADD KEY `fkUsuario` (`fkUsuario`);

--
-- Indices de la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD PRIMARY KEY (`idReserva`),
  ADD KEY `fkUsuarioRes` (`fkUsuarioRes`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `coche`
--
ALTER TABLE `coche`
  MODIFY `idCoche` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT de la tabla `comentario`
--
ALTER TABLE `comentario`
  MODIFY `idComentario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT de la tabla `detallepedido`
--
ALTER TABLE `detallepedido`
  MODIFY `idDetalle` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `pedido`
--
ALTER TABLE `pedido`
  MODIFY `idPedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT de la tabla `reserva`
--
ALTER TABLE `reserva`
  MODIFY `idReserva` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD CONSTRAINT `comentario_ibfk_1` FOREIGN KEY (`fkCocheCm`) REFERENCES `coche` (`idCoche`) ON DELETE SET NULL ON UPDATE SET NULL,
  ADD CONSTRAINT `comentario_ibfk_2` FOREIGN KEY (`fkUsuarioCm`) REFERENCES `usuario` (`idUsuario`) ON DELETE SET NULL ON UPDATE SET NULL,
  ADD CONSTRAINT `comentario_ibfk_3` FOREIGN KEY (`pregunta`) REFERENCES `comentario` (`idComentario`) ON DELETE SET NULL ON UPDATE SET NULL;

--
-- Filtros para la tabla `detallepedido`
--
ALTER TABLE `detallepedido`
  ADD CONSTRAINT `detallepedido_ibfk_1` FOREIGN KEY (`fkPedido`) REFERENCES `pedido` (`idPedido`),
  ADD CONSTRAINT `detallepedido_ibfk_2` FOREIGN KEY (`fkCoche`) REFERENCES `coche` (`idCoche`) ON DELETE SET NULL ON UPDATE SET NULL,
  ADD CONSTRAINT `detallepedido_ibfk_3` FOREIGN KEY (`fkReserva`) REFERENCES `reserva` (`idReserva`);

--
-- Filtros para la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `pedido_ibfk_1` FOREIGN KEY (`fkUsuario`) REFERENCES `usuario` (`idUsuario`);

--
-- Filtros para la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD CONSTRAINT `reserva_ibfk_1` FOREIGN KEY (`fkUsuarioRes`) REFERENCES `usuario` (`idUsuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
