type Thumbnail = {
  url: string;
  width: number;
  height: number;
};

type Thumbnails = {
  id: number;
  default: Thumbnail;
  medium: Thumbnail;
  high: Thumbnail;
  standard?: Thumbnail;
  maxres?: Thumbnail;
};

type Video = {
  id: number;
  url: string;
  counst: number;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  tags: string[];
};
