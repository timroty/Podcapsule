// import { GetRssFeed } from "../accessors/Podcast";
// import { AddFavoritedPodcastEpisodes } from "../accessors/Database";

// import { FavoritedPodcastEpisodeSave } from "../types/DatabaseTypes";

// const convert = require("xml-js");

// export async function SavePodcastRssFeedEpisodes(
//   rssUrl: string,
//   favoritedPodcastId: number,
// ): Promise<void> {
//   const podcastRssFeed: string = await GetRssFeed(rssUrl);

//   const rssCompactJson = JSON.parse(
//     convert.xml2json(podcastRssFeed, { compact: false, spaces: 2 }),
//   );

//   // Narrow down to the episodes array
//   const elements = rssCompactJson.elements[0].elements[0].elements;

//   // Retreive only episode data
//   const itemElements = elements.filter((item: any) => {
//     return item.name === "item";
//   });

//   const favoritedPodcastEpisodes: FavoritedPodcastEpisodeSave[] = [];

//   itemElements.forEach((episodeJson: JSON) => {
//     favoritedPodcastEpisodes.push(<FavoritedPodcastEpisodeSave>{
//       FavoritedPodcastId: favoritedPodcastId,
//       EpisodeRSSJson: JSON.stringify(episodeJson),
//     });
//   });

//   await AddFavoritedPodcastEpisodes(favoritedPodcastEpisodes);
// }
