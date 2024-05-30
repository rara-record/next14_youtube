/*
  Warnings:

  - Changed the type of `favoriteCount` on the `videos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `likeCount` on the `videos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `viewCount` on the `videos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "videos" DROP COLUMN "favoriteCount",
ADD COLUMN     "favoriteCount" INTEGER NOT NULL,
DROP COLUMN "likeCount",
ADD COLUMN     "likeCount" INTEGER NOT NULL,
DROP COLUMN "viewCount",
ADD COLUMN     "viewCount" INTEGER NOT NULL;
