import axios from "axios";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma/prismadb";

// const apiKey = "AIzaSyAIVw2Ez3kk7EUDPpHWRKjgXOLPY6aioXA";
// const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=URBcer_Tf3I&key=${apiKey}`;
export async function GET() {
  const videos = await prisma.video.findMany();

  return NextResponse.json(videos, { status: 200 });
}
