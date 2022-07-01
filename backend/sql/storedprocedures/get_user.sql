USE `db`;
DROP procedure IF EXISTS `get_user`;

DELIMITER $$
USE `db`$$
CREATE PROCEDURE `get_user` (
	IN username VARCHAR(45),
    IN password VARCHAR(255)
)
BEGIN
	select * from db.users where
    username = username and
    password = password;
END$$

DELIMITER ;