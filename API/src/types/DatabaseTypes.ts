export type User = {
    id: number;
    createDate: Date;
    rssFeed?: string;
    lastSyncDate: number;
  };

export type FavoritedPodcast = {
    id: number;
    createDate: Date;
    userId: string;
    podcastId: number;
    rssUrl?: string;
    title?: string;
    imageUrl?: string;
  };