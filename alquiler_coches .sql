-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-04-2020 a las 16:47:46
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
  `idCoche` int(11) NOT NULL,
  `tipoCarroceria` varchar(100) DEFAULT NULL,
  `marca` varchar(100) DEFAULT NULL,
  `stockModelo` int(11) DEFAULT NULL,
  `km` double DEFAULT NULL,
  `motor` varchar(100) DEFAULT NULL,
  `anio` int(11) DEFAULT NULL,
  `precio` double DEFAULT NULL,
  `CV` int(11) DEFAULT NULL,
  `plazas` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `coche`
--

INSERT INTO `coche` (`idCoche`, `tipoCarroceria`, `marca`, `stockModelo`, `km`, `motor`, `anio`, `precio`, `CV`, `plazas`) VALUES
(1, 'coupe', 'honda', 500, 200, '1.8 gasolina', 2006, 100, 140, 5),
(3, 'coupe', 'Ford Fiesta', 100, 190, '1.2 gasolina', 2015, 50, 80, 5),
(4, 'cabrio', 'honda s2000', 42, 200, '2.2 gasolina', 1999, 80, 220, 2),
(14, 'coupe', 'toyota supra', NULL, 100, '2.2 gasolina', NULL, NULL, NULL, NULL),
(21, 'coupe', 'mazda mx5', 300, 200, '2.6 gasolina', 2016, 20, 130, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentario`
--

CREATE TABLE `comentario` (
  `idComentario` int(11) NOT NULL,
  `fkCocheCm` int(11) DEFAULT NULL,
  `fkUsuarioCm` int(11) DEFAULT NULL,
  `contenido` varchar(255) DEFAULT NULL,
  `puntuacion` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detallepedido`
--

CREATE TABLE `detallepedido` (
  `idDetalle` int(11) NOT NULL,
  `fkPedido` int(11) DEFAULT NULL,
  `fkCoche` int(11) DEFAULT NULL,
  `fkReserva` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `precioTotal` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido`
--

CREATE TABLE `pedido` (
  `idPedido` int(11) NOT NULL,
  `fkUsuario` int(11) DEFAULT NULL,
  `fechaPed` date DEFAULT NULL,
  `fechaEntrega` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
(12, NULL, NULL, '$2y$10$Dwjr5WXN.z5/H6TPCUDKkeAyeBnOIL2doV.NceM1gzSZhBqlxbsly', 'usuario');

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
  ADD KEY `fkCocheCm` (`fkCocheCm`),
  ADD KEY `fkUsuarioCm` (`fkUsuarioCm`);

--
-- Indices de la tabla `detallepedido`
--
ALTER TABLE `detallepedido`
  ADD PRIMARY KEY (`idDetalle`),
  ADD KEY `fkPedido` (`fkPedido`),
  ADD KEY `fkCoche` (`fkCoche`),
  ADD KEY `fkReserva` (`fkReserva`);

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
  MODIFY `idCoche` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `detallepedido`
--
ALTER TABLE `detallepedido`
  MODIFY `idDetalle` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pedido`
--
ALTER TABLE `pedido`
  MODIFY `idPedido` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `reserva`
--
ALTER TABLE `reserva`
  MODIFY `idReserva` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD CONSTRAINT `comentario_ibfk_1` FOREIGN KEY (`fkCocheCm`) REFERENCES `coche` (`idCoche`),
  ADD CONSTRAINT `comentario_ibfk_2` FOREIGN KEY (`fkUsuarioCm`) REFERENCES `usuario` (`idUsuario`);

--
-- Filtros para la tabla `detallepedido`
--
ALTER TABLE `detallepedido`
  ADD CONSTRAINT `detallepedido_ibfk_1` FOREIGN KEY (`fkPedido`) REFERENCES `pedido` (`idPedido`),
  ADD CONSTRAINT `detallepedido_ibfk_2` FOREIGN KEY (`fkCoche`) REFERENCES `coche` (`idCoche`),
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
