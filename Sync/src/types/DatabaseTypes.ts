export type User = {
  Id: number;
  CreateDate: Date;
  RSSFeedJSON?: string;
  LastSyncDate: number;
};

export type FavoritedPodcast = {
  Id: number;
  createDate: Date;
  userId: string;
  podcastId: number;
  rssUrl?: string;
  title?: string;
  imageUrl?: string;
  existsEpisodes?: boolean;
};

export type FavoritedPodcastEpisode = {
  id: number;
  CreateDate: Date;
  FavoritedPodcastId: number;
  EpisodeRSSJson: string;
};

export type FavoritedPodcastEpisodeSave = {
  favoritedPodcastId: number;
  episodeRSSJson: string;
};
