-- CreateTable
CREATE TABLE "event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "links" TEXT NOT NULL
);
