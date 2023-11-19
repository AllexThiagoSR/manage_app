/*
  Warnings:

  - You are about to drop the column `date` on the `services_payments_history` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `services` ADD COLUMN `service_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `services_payments_history` DROP COLUMN `date`,
    ADD COLUMN `payment_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
