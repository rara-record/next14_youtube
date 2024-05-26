/*
  Warnings:

  - Added the required column `channelId` to the `videos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `channelTitle` to the `videos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `embeddable` to the `videos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `favoriteCount` to the `videos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `likeCount` to the `videos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `viewCount` to the `videos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "videos" ADD COLUMN     "channelId" TEXT NOT NULL,
ADD COLUMN     "channelTitle" TEXT NOT NULL,
ADD COLUMN     "embeddable" BOOLEAN NOT NULL,
ADD COLUMN     "favoriteCount" TEXT NOT NULL,
ADD COLUMN     "likeCount" TEXT NOT NULL,
ADD COLUMN     "viewCount" TEXT NOT NULL;
