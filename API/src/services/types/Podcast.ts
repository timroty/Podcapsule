export type SearchResult = {
  id: number;
  title: string;
  description?: string;
  imageUrl?: string;
  numberOfEpisodes?: number;
  ratingAverage?: number;
  ratingCount?: number;
};

export type UserPodcast = {
  id: number;
  is_active: boolean;
  valid_at: string | null;
  title: string | null;
  image_url: string | null;
};
