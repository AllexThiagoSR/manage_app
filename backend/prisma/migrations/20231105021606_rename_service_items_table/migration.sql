/*
  Warnings:

  - You are about to drop the `ServiceItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `ServiceItem` DROP FOREIGN KEY `ServiceItem_service_id_fkey`;

-- DropTable
DROP TABLE `ServiceItem`;

-- CreateTable
CREATE TABLE `service_items` (
    `service_id` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `price` DECIMAL(12, 2) NOT NULL,
    `quantity` INTEGER NOT NULL,

    PRIMARY KEY (`service_id`, `description`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `service_items` ADD CONSTRAINT `service_items_service_id_fkey` FOREIGN KEY (`service_id`) REFERENCES `services`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
