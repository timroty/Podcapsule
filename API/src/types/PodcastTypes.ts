export type Podcast = {
  id: number;
  title: string;
  description?: string;
  imageUrl?: string;
  numberOfEpisodes?: number;
  ratingAverage?: number;
  ratingCount?: number;
  rssUrl?: string;
};

export type PodcastSearchResult = {
  id: number;
  title: string;
  description?: string;
  imageUrl?: string;
  numberOfEpisodes?: number;
  ratingAverage?: number;
  ratingCount?: number;
};
