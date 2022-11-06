/*
  Warnings:

  - You are about to drop the column `country` on the `event` table. All the data in the column will be lost.
  - You are about to drop the column `links` on the `event` table. All the data in the column will be lost.
  - Added the required column `recurringEventId` to the `event` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "recurringEvent" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "shortTitle" TEXT,
    "furtrackTag" TEXT,
    "country" TEXT NOT NULL,
    "links" TEXT
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "shortTitle" TEXT,
    "furtrackTag" TEXT,
    "date" DATETIME NOT NULL,
    "recurringEventId" INTEGER NOT NULL,
    CONSTRAINT "event_recurringEventId_fkey" FOREIGN KEY ("recurringEventId") REFERENCES "recurringEvent" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_event" ("date", "id", "title") SELECT "date", "id", "title" FROM "event";
DROP TABLE "event";
ALTER TABLE "new_event" RENAME TO "event";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
