import axios from "axios";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma/prismadb";

const apiKey = "AIzaSyAIVw2Ez3kk7EUDPpHWRKjgXOLPY6aioXA";

function extractVideoId(url: string) {
  //group 3 should give the youtube video id
  /*
	https://www.youtube.com/watch?v=7woVTuN8k3c
    http://youtube.com/watch?v=7woVTuN8k3c
    https://www.youtube.com/embed/7woVTuN8k3c
    https://youtu.be/7woVTuN8k3c
    https://youtu.be/7woVTuN8k3c?t=9s
    https://www.youtube.com/shorts/WzXPNDxuOS8
    https://www.youtube.com/watch?v=7MKEOfSP2s4
    https://youtu.be/7MKEOfSP2s4
    https://www.youtube.com/shorts/WzXPNDxuOS8
   */
  const regex = /(.*?)(^|\/|v=)([a-z0-9_-]{11})(.*)?/gim;
  const match = regex.exec(url);
  return match && match[3];
}

export async function POST(req: Request) {
  const formData = await req.json();
  const videoId = extractVideoId(formData.url);
  console.log(videoId, "videoId");
  const response = await axios.get(`
    https://www.googleapis.com/youtube/v3/videos?part=snippet,status,statistics&id=${videoId}&key=${apiKey}
  `);

  const video = response.data.items[0];

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
    url: `https://www.youtube.com/embed/${video.id}`,
    title: video.snippet.title,
    description: video.snippet.description,
    tags: video.snippet.tags,
    channelId: video.snippet.channelId,
    channelTitle: video.snippet.channelTitle,
    embeddable: video.status.embeddable,
    viewCount: video.statistics.viewCount,
    likeCount: video.statistics.likeCount,
    favoriteCount: video.statistics.favoriteCount,
    thumbnailsId: thumbnailData.id,
  };

  const res = await prisma.video.create({
    data: videoData,
  });

  return NextResponse.json(res, { status: 200 });
}

export async function GET() {
  const videos = await prisma.video.findMany();
  return NextResponse.json(videos, { status: 200 });
}
