export type SearchResult = {
  id: number;
  title: string;
  description?: string;
  imageUrl?: string;
  numberOfEpisodes?: number;
  ratingAverage?: number;
  ratingCount?: number;
};

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
