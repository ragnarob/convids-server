-- CreateTable
CREATE TABLE "maker" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "links" TEXT,
    "country" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "songArtist" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "song" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "artistId" INTEGER NOT NULL,
    CONSTRAINT "song_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "songArtist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "video" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "eventId" INTEGER,
    "makerId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    CONSTRAINT "video_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "event" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "video_makerId_fkey" FOREIGN KEY ("makerId") REFERENCES "maker" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "videoSong" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "videoId" INTEGER NOT NULL,
    "songId" INTEGER NOT NULL,
    CONSTRAINT "videoSong_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "video" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "videoSong_songId_fkey" FOREIGN KEY ("songId") REFERENCES "song" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
