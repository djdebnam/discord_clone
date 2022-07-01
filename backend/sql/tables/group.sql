CREATE TABLE `Groups` (
  `idGroup` int NOT NULL AUTO_INCREMENT,
  `idUser` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `creationdate` datetime DEFAULT (now()),
  CONSTRAINT id_constraint PRIMARY KEY (`idGroup`)
)