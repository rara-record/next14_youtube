import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
import * as data from "../src/data/video.json";

// id          Int        @id @default(autoincrement())
// userId      Int
// url         String     @unique
// count       Int        @default(1)
// title       String
// description String
// tags        String[]
// createdAt   DateTime   @default(now())
// thumbnailsId Int
// thumbnails  Thumbnails @relation(fields: [thumbnailsId], references: [id], onDelete: Cascade)
// user        User       @relation(fields: [userId], references: [id], onDelete: Cascade)

async function seedData() {
  for (const video of data.items) {
    const thumbnailData = await prisma.thumbnails.create({
      data: {
        defaultUrl: video.snippet.thumbnails.default.url,
        defaultWidth: video.snippet.thumbnails.default.width,
        defaultHeight: video.snippet.thumbnails.default.height,
        mediumUrl: video.snippet.thumbnails.medium.url,
        mediumWidth: video.snippet.thumbnails.medium.width,
        mediumHeight: video.snippet.thumbnails.medium.height,
        highUrl: video.snippet.thumbnails.high.url,
        highWidth: video.snippet.thumbnails.high.width,
        highHeight: video.snippet.thumbnails.high.height,
        standardUrl: video.snippet.thumbnails.standard?.url,
        standardWidth: video.snippet.thumbnails.standard?.width,
        standardHeight: video.snippet.thumbnails.standard?.height,
        maxresUrl: video.snippet.thumbnails.maxres?.url,
        maxresWidth: video.snippet.thumbnails.maxres?.width,
        maxresHeight: video.snippet.thumbnails.maxres?.height,
      },
    });

    const videoData = {
      userId: 2,
      url: "https://www.youtube.com/watch?v=URBcer_Tf3I",
      title: video.snippet.title,
      description: video.snippet.description,
      tags: video.snippet.tags,
      thumbnailsId: thumbnailData.id,
    };

    const res = await prisma.video.create({
      data: videoData,
    });
  }
}

async function main() {
  await seedData();
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
