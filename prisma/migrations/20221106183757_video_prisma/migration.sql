/*
  Warnings:

  - You are about to drop the `song` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `songArtist` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `videoSong` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "video" ADD COLUMN "songs" TEXT;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "song";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "songArtist";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "videoSong";
PRAGMA foreign_keys=on;
