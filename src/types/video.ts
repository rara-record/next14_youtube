type ThumbnailType = {
  url: string;
  width: number;
  height: number;
};

type ThumbnailListType = {
  id: number;
  default: ThumbnailType;
  medium: ThumbnailType;
  high: ThumbnailType;
  standard?: ThumbnailType;
  maxres?: ThumbnailType;
};

type VideoType = {
  id: number;
  userId: number;
  url: string;
  title: string;
  description: string;
  tags: string[];
  channelId: string;
  channelTitle: string;
  embeddable: boolean;
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  thumbnailsId: string;
  thumbnails: ThumbnailListType;
};
