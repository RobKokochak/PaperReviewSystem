-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserRoleLink" (
    "user_id" INTEGER NOT NULL,
    "role_id" INTEGER NOT NULL,

    PRIMARY KEY ("user_id", "role_id"),
    CONSTRAINT "UserRoleLink_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserRoleLink_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Role" ("role_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserRoleLink" ("role_id", "user_id") SELECT "role_id", "user_id" FROM "UserRoleLink";
DROP TABLE "UserRoleLink";
ALTER TABLE "new_UserRoleLink" RENAME TO "UserRoleLink";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
