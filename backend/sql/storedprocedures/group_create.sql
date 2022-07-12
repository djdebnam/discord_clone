USE `db`;
DROP procedure IF EXISTS `create_group`;

DELIMITER $$
USE `db`$$
CREATE PROCEDURE `create_group` (
    IN idUser INT,
    IN name VARCHAR(45)
)
BEGIN
	INSERT INTO group (idUser, name) 
    VALUES (idUser, name,);
END$$

DELIMITER ;

