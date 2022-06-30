CREATE TABLE `db`.`users` (
  `userid` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `email` VARCHAR(45) NULL,
  `phone` VARCHAR(45) NULL,
  `creationdate` DATETIME DEFAULT (CURRENT_TIMESTAMP()),
	CONSTRAINT id_constraint PRIMARY KEY (userid)
);