USE `db`;
DROP procedure IF EXISTS `create_user`;

DELIMITER $$
USE `db`$$
CREATE PROCEDURE `create_user` (
	IN username VARCHAR(45),
    IN password VARCHAR(255),
    IN email VARCHAR(45),
    IN phone VARCHAR(45)
)
BEGIN
	INSERT INTO users (username, password, email, phone) 
    VALUES (username, password, email, phone);
END$$

DELIMITER ;

