-- MySQL dump 10.13  Distrib 8.0.39, for Win64 (x86_64)
--
-- Host: localhost    Database: Pokemon
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `entrenadores`
--

DROP TABLE IF EXISTS `entrenadores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `entrenadores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `tipo_especializa` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `is_pokemon` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_is_pokemon` (`is_pokemon`),
  CONSTRAINT `fk_is_pokemon` FOREIGN KEY (`is_pokemon`) REFERENCES `pokemon` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entrenadores`
--

LOCK TABLES `entrenadores` WRITE;
/*!40000 ALTER TABLE `entrenadores` DISABLE KEYS */;
INSERT INTO `entrenadores` VALUES (1,'Entomara','Bicho',NULL),(2,'Granitus','Roca',NULL),(3,'Crysola','Hielo',NULL),(4,'Nepysra','Psiquico',NULL),(5,'Auron','Todos',NULL);
/*!40000 ALTER TABLE `entrenadores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movimientos`
--

DROP TABLE IF EXISTS `movimientos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movimientos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `tipo` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `potencia` int NOT NULL,
  `precision_ataque` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movimientos`
--

LOCK TABLES `movimientos` WRITE;
/*!40000 ALTER TABLE `movimientos` DISABLE KEYS */;
INSERT INTO `movimientos` VALUES (1,'Veneno X','Veneno',70,100),(2,'Tijera X','Bicho',80,100),(3,'Triturar','Siniestro',80,100),(4,'Terremoto','Tierra',100,100),(5,'Velocidad Extrema','Normal',80,100),(6,'Enfado','Dragon',120,100),(7,'Vendaval','Volador',110,100),(8,'Puño Fuego','Fuego',75,100),(9,'Agua Lodosa','Agua',90,100),(10,'Tierra Viva','Tierra',90,100),(11,'Rayo hielo','Hielo',90,100),(12,'Bomba lodo','Veneno',90,100),(13,'Fuerza Lunar','Hada',95,100),(14,'Tajo Aereo','Volador',75,100),(15,'Psiquico','Psiquico',90,100),(16,'Esfera aural','Lucha',80,100),(17,'Cabeza de hierro','Acero',80,100),(18,'A bocajarro','Lucha',120,100),(19,'Puño trueno','Electrico',75,100),(20,'Energibola','Planta',90,100),(21,'Pulso dragon','Dragon',85,100),(22,'Onda certera','Lucha',120,100),(23,'Hiperrayo','Normal',150,100),(24,'Surf','Agua',90,100),(25,'Rayo','Electrico',90,100),(26,'Ataque rapido','Normal',40,100),(27,'Cola ferrea','Acero',100,100),(28,'Asalto estelar','Lucha',150,100),(29,'Pajaro osado','Volador',120,100),(30,'Hoja aguda','Planta',90,100),(31,'Desarme','Siniestro',65,100),(32,'Carga dragon','Dragon',100,100),(33,'Branquibocado','Agua',85,100),(34,'Psicocolmillo','Psiquico',85,100),(35,'Garra dragon','Dragon',80,100),(36,'Excavar','Tierra',80,100),(37,'Colmillo igneo','Fuego',65,100),(38,'Puya nociva','Veneno',80,100),(39,'Puño meteoro','Acero',90,100),(40,'Puño hielo','Hielo',75,100),(41,'Bola sombra','Fantasma',80,100),(42,'Pulso umbrio','Siniestro',80,100),(43,'Puño bala','Acero',40,100),(44,'Golpe Aereo','Volador',60,100),(45,'Rompe rocas','Roca',150,100),(46,'Cuchillada','Normal',70,100),(47,'Zumbido','Bicho',90,100),(48,'Hidroariete','Agua',85,100),(49,'Megacuerno','Bicho',120,100),(50,'Roca afilada','Roca',100,100),(51,'Onda ignea','Fuego',95,100),(52,'Ventisca','Hielo',110,100),(53,'Brillo Magico','Hada',80,100),(54,'Psicocarga','Psiquico',80,100),(55,'Chuzos','Hielo',85,100),(56,'Asalto Espadon','Dragon',120,100),(57,'Tajo umbrio','Siniestro',70,100),(58,'Garra metal','Acero',50,100),(59,'Pirueta helada','Hielo',80,100),(60,'Concha filo','Agua',75,100),(61,'Cuerno certero','Acero',70,100),(62,'Lanza glacial','Hielo',120,100),(63,'Cabezazo zen','Psiquico',80,100),(64,'Fuerza equina','Tierra',95,100),(65,'Vozarron','Normal',90,100),(66,'Laser doble','psiquico',80,100),(67,'Llama embrujada','Fuego',75,100),(68,'Meteoimpacto','Acero',100,100),(69,'Colmillo rayo','Electrico',65,100),(70,'Erupcion de ira','Fuego',120,100),(71,'Avalancha','Roca',75,100),(72,'Voltio cruel','Electrico',90,100),(73,'Salazon','Roca',75,100),(74,'Machada','Lucha',100,100),(75,'Onda toxica','Veneno',90,100),(76,'Joya de luz','Roca',80,100),(77,'Garrote liana','Planta',100,100),(78,'Fuerza bruta','Lucha',120,100),(79,'Golpe mordaza','Siniestro',80,100),(80,'Teraexplosion','Roca',80,100);
/*!40000 ALTER TABLE `movimientos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partidas`
--

DROP TABLE IF EXISTS `partidas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `partidas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nivel` int NOT NULL,
  `tiempo_segundos` int NOT NULL,
  `id_usuario` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `partidas_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partidas`
--

LOCK TABLES `partidas` WRITE;
/*!40000 ALTER TABLE `partidas` DISABLE KEYS */;
INSERT INTO `partidas` VALUES (3,1,18,8),(4,1,116,8),(5,2,20,8),(6,3,30,8),(7,4,27,8),(8,5,22,8),(9,5,32,8),(10,1,12,2),(11,1,22,2),(12,2,29,2),(13,2,32,2),(14,2,12,2),(15,3,17,2),(16,4,53,2),(17,5,36,2),(18,1,55,2),(19,1,14,2);
/*!40000 ALTER TABLE `partidas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pokemon`
--

DROP TABLE IF EXISTS `pokemon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pokemon` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `tipo_principal` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `tipo_secundario` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `vida` int NOT NULL,
  `ataque` int NOT NULL,
  `defensa` int NOT NULL,
  `velocidad` int NOT NULL,
  `id_entrenador` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_id_entrenador` (`id_entrenador`),
  CONSTRAINT `fk_id_entrenador` FOREIGN KEY (`id_entrenador`) REFERENCES `entrenadores` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pokemon`
--

LOCK TABLES `pokemon` WRITE;
/*!40000 ALTER TABLE `pokemon` DISABLE KEYS */;
INSERT INTO `pokemon` VALUES (1,'Drapion','Veneno','Siniestro',344,306,350,317,NULL),(2,'Dragonite','Dragon','Volador',386,403,317,284,NULL),(3,'Gastrodon','Agua','Tierra',426,311,289,194,NULL),(4,'Togekiss','Hada','Volador',374,372,361,284,NULL),(5,'Ferropalmas','Lucha','Electrico',512,416,346,218,NULL),(6,'Sceptile','Planta',NULL,344,339,295,372,NULL),(7,'Scizor','Bicho','Acero',344,394,328,251,1),(8,'Crustle','Bicho','Roca',344,339,383,207,1),(9,'Vivillion','Bicho','Volador',364,306,218,304,1),(10,'Araquanid','Agua','Bicho',340,262,399,201,1),(11,'Heracross','Bicho','Lucha',364,383,317,295,1),(12,'Volcarona','Bicho','Fuego',374,405,339,328,1),(13,'Tyranitar','Roca','Siniestro',404,403,350,243,2),(14,'Arcanine Hisui','Fuego','Roca',394,361,284,306,2),(15,'Garganacl','Roca',NULL,404,328,394,185,2),(16,'Aerodactyl','Roca','Volador',364,339,273,394,2),(17,'Glimmora','Roca','Veneno',370,394,306,298,2),(18,'Ogerpon Roca','Roca','Planta',364,372,320,350,2),(19,'Ninetales Alola','Hielo','Hada',350,287,328,348,3),(20,'Baxcalibur','Dragon','Hielo',434,427,311,300,3),(21,'Weaville','Hielo','Siniestro',344,372,295,383,3),(22,'Rotom Nevera','Electrico','Hielo',304,339,334,298,3),(23,'Cloyster','Agua','Hielo',304,317,504,262,3),(24,'Callyrex Jinete Glacial','Psiquico','Hielo',404,471,438,218,3),(25,'Alakazam','Psiquico',NULL,314,405,295,372,4),(26,'Indeedee','Psiquico','normal',344,317,339,295,4),(27,'Farigiraf','Normal','Psiquico',444,350,262,240,4),(28,'Metagross','Acero','Psiquico',364,405,394,262,4),(29,'Gardevoir','Psiquico','Hada',340,383,361,284,4),(30,'Solgaleo','Psiquico','Acero',478,410,344,322,4),(31,'Pikachu','Electrico',NULL,294,284,240,372,5),(32,'Sirfect d','Lucha',NULL,328,405,317,251,5),(33,'Dracovish','Agua','Dragon',384,306,328,273,5),(34,'Garchomp','Tierra','Dragon',420,394,317,333,5),(35,'Lucario','Lucha','Acero',344,361,262,306,5),(36,'Gengar','Fantasma','Veneno',324,394,273,350,5);
/*!40000 ALTER TABLE `pokemon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `gmail` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `contrasena` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `nivel` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `gmail` (`gmail`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'admin','admin@gmail.com','admin123',1),(2,'pruebas1','pruebas@gmail.com','prueba',1),(8,'pruebas2','pruebas2@gmail.com','prueba',5),(13,'pruebas3','pruebas3@gmail.com','1111AAAa',0),(14,'pruebas4','pruebas4@gmail.com','1111Aaaaa',0),(15,'pruebas5','pruebas5@gmail.com','1111Aaaaa',0),(16,'pruebas6','pruebas6@gmail.com','Pablo1234',0),(17,'pruebas7','pruebas7@gmail.com','Pablo1234',0),(19,'pruebas8','pruebas8@gmail.com','Pablo1234',0);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-04 23:30:01
