/*
  Warnings:

  - The primary key for the `Location` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `conf_id` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `conference_conference_id` on the `Location` table. All the data in the column will be lost.
  - Added the required column `location_id` to the `Conference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location_id` to the `Location` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Conference" (
    "conference_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "start_date" DATETIME NOT NULL,
    "end_date" DATETIME NOT NULL,
    "paper_submission_deadline" DATETIME NOT NULL,
    "conference_chair_user_id" INTEGER NOT NULL,
    "location_id" INTEGER NOT NULL,
    CONSTRAINT "Conference_conference_chair_user_id_fkey" FOREIGN KEY ("conference_chair_user_id") REFERENCES "User" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Conference_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "Location" ("location_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Conference" ("conference_chair_user_id", "conference_id", "end_date", "name", "paper_submission_deadline", "start_date") SELECT "conference_chair_user_id", "conference_id", "end_date", "name", "paper_submission_deadline", "start_date" FROM "Conference";
DROP TABLE "Conference";
ALTER TABLE "new_Conference" RENAME TO "Conference";
CREATE TABLE "new_UserRoleLink" (
    "user_id" INTEGER NOT NULL,
    "role_id" INTEGER NOT NULL,

    PRIMARY KEY ("user_id", "role_id")
);
INSERT INTO "new_UserRoleLink" ("role_id", "user_id") SELECT "role_id", "user_id" FROM "UserRoleLink";
DROP TABLE "UserRoleLink";
ALTER TABLE "new_UserRoleLink" RENAME TO "UserRoleLink";
CREATE TABLE "new_Location" (
    "location_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL
);
INSERT INTO "new_Location" ("city", "country", "state") SELECT "city", "country", "state" FROM "Location";
DROP TABLE "Location";
ALTER TABLE "new_Location" RENAME TO "Location";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
