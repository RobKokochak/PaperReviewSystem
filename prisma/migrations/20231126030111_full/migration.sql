-- CreateTable
CREATE TABLE "Location" (
    "conf_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "conference_conference_id" INTEGER NOT NULL,
    CONSTRAINT "Location_conference_conference_id_fkey" FOREIGN KEY ("conference_conference_id") REFERENCES "Conference" ("conference_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "user_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "fname" TEXT NOT NULL,
    "lname" TEXT NOT NULL,
    "user_title" TEXT NOT NULL,
    "user_affiliation" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Role" (
    "role_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "role_name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "UserRoleLink" (
    "user_id" INTEGER NOT NULL,
    "role_id" INTEGER NOT NULL,

    PRIMARY KEY ("user_id", "role_id"),
    CONSTRAINT "UserRoleLink_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserRoleLink_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Role" ("role_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Paper" (
    "paper_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "paper_title" TEXT NOT NULL,
    "submission_date" DATETIME NOT NULL,
    "submission_time" DATETIME NOT NULL,
    "conference_id" INTEGER NOT NULL,
    "generated_recommendation" TEXT NOT NULL DEFAULT 'pending',
    "paper_status" TEXT NOT NULL DEFAULT 'pending',
    CONSTRAINT "Paper_conference_id_fkey" FOREIGN KEY ("conference_id") REFERENCES "Conference" ("conference_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PaperAuthorLink" (
    "author_user_id" INTEGER NOT NULL,
    "paper_id" INTEGER NOT NULL,

    PRIMARY KEY ("author_user_id", "paper_id"),
    CONSTRAINT "PaperAuthorLink_author_user_id_fkey" FOREIGN KEY ("author_user_id") REFERENCES "User" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PaperAuthorLink_paper_id_fkey" FOREIGN KEY ("paper_id") REFERENCES "Paper" ("paper_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PaperReviewerLink" (
    "reviewer_user_id" INTEGER NOT NULL,
    "paper_id" INTEGER NOT NULL,

    PRIMARY KEY ("reviewer_user_id", "paper_id"),
    CONSTRAINT "PaperReviewerLink_reviewer_user_id_fkey" FOREIGN KEY ("reviewer_user_id") REFERENCES "User" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PaperReviewerLink_paper_id_fkey" FOREIGN KEY ("paper_id") REFERENCES "Paper" ("paper_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Conference" (
    "conference_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "start_date" DATETIME NOT NULL,
    "end_date" DATETIME NOT NULL,
    "paper_submission_deadline" DATETIME NOT NULL,
    "conference_chair_user_id" INTEGER NOT NULL,
    CONSTRAINT "Conference_conference_chair_user_id_fkey" FOREIGN KEY ("conference_chair_user_id") REFERENCES "User" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
DROP TABLE "Conference";
ALTER TABLE "new_Conference" RENAME TO "Conference";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
