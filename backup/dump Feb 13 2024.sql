/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: items
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `items` (
  `item_id` int NOT NULL AUTO_INCREMENT,
  `item_name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`item_id`)
) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# SCHEMA DUMP FOR TABLE: users
# ------------------------------------------------------------

CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: items
# ------------------------------------------------------------

INSERT INTO
  `items` (`item_id`, `item_name`, `createdAt`, `updatedAt`)
VALUES
  (
    1,
    'iphone',
    '2024-02-09 06:53:34',
    '2024-02-09 06:53:34'
  );
INSERT INTO
  `items` (`item_id`, `item_name`, `createdAt`, `updatedAt`)
VALUES
  (
    2,
    'Lamborgini',
    '2024-02-09 07:03:49',
    '2024-02-09 07:03:49'
  );
INSERT INTO
  `items` (`item_id`, `item_name`, `createdAt`, `updatedAt`)
VALUES
  (
    3,
    'flute',
    '2024-02-09 07:04:21',
    '2024-02-09 07:04:21'
  );

# ------------------------------------------------------------
# DATA DUMP FOR TABLE: users
# ------------------------------------------------------------

INSERT INTO
  `users` (`id`, `name`, `createdAt`, `updatedAt`)
VALUES
  (
    1,
    'florenzi',
    '2024-02-09 06:53:34',
    '2024-02-09 06:53:34'
  );
INSERT INTO
  `users` (`id`, `name`, `createdAt`, `updatedAt`)
VALUES
  (
    2,
    'Balotelli',
    '2024-02-09 07:03:49',
    '2024-02-09 07:03:49'
  );
INSERT INTO
  `users` (`id`, `name`, `createdAt`, `updatedAt`)
VALUES
  (
    3,
    'Cristiano',
    '2024-02-09 07:04:21',
    '2024-02-09 07:04:21'
  );

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
