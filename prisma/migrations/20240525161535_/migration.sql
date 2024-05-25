/*
  Warnings:

  - You are about to drop the `user_video` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `description` to the `videos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnailsId` to the `videos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `videos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `videos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "user_video" DROP CONSTRAINT "user_video_userId_fkey";

-- DropForeignKey
ALTER TABLE "user_video" DROP CONSTRAINT "user_video_videoId_fkey";

-- AlterTable
ALTER TABLE "videos" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "tags" TEXT[],
ADD COLUMN     "thumbnailsId" INTEGER NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "user_video";

-- CreateTable
CREATE TABLE "thumbnails" (
    "id" SERIAL NOT NULL,
    "defaultUrl" TEXT NOT NULL,
    "defaultWidth" INTEGER NOT NULL,
    "defaultHeight" INTEGER NOT NULL,
    "mediumUrl" TEXT NOT NULL,
    "mediumWidth" INTEGER NOT NULL,
    "mediumHeight" INTEGER NOT NULL,
    "highUrl" TEXT NOT NULL,
    "highWidth" INTEGER NOT NULL,
    "highHeight" INTEGER NOT NULL,
    "standardUrl" TEXT,
    "standardWidth" INTEGER,
    "standardHeight" INTEGER,
    "maxresUrl" TEXT,
    "maxresWidth" INTEGER,
    "maxresHeight" INTEGER,

    CONSTRAINT "thumbnails_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "videos" ADD CONSTRAINT "videos_thumbnailsId_fkey" FOREIGN KEY ("thumbnailsId") REFERENCES "thumbnails"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "videos" ADD CONSTRAINT "videos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
