export type User = {
  id: number;
  createDate: Date;
  RssFeed?: string;
  lastSyncDate: number;
  RSSFeedJSON: string;
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
  createDate: Date;
  favoritedPodcastId: number;
  episodeRSSJson: string;
};

export type FavoritedPodcastEpisodeSave = {
  FavoritedPodcastId: number;
  EpisodeRSSJson: string;
};
