// src/types/podcast.ts

export interface PodcastImages {
  default: string;
  featured: string;
  thumbnail: string;
  wide: string;
}

export interface Podcast {
  id: string;
  title: string;
  images: PodcastImages;
  isExclusive: boolean;
  publisherName: string;
  publisherId: string;
  mediaType: string;
  description: string;
  categoryId: string;
  categoryName: string;
  hasFreeEpisodes: boolean;
  playSequence: string;
}