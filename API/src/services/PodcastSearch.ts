import { PodcastSearch as PodcastSearchDB } from "../accessors/Podcast";

import { PodcastSearchResult } from "../types/PodcastTypes";

export async function PodcastSearch(userId:string): Promise<PodcastSearchResult[]> {
     return await PodcastSearchDB(userId);
}