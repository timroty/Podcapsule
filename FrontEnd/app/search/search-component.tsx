"use client";

import { SearchPodcasts } from "@/api/podcast";
import { AddUserPodcast, GetUserPodcasts } from "@/api/user";
import { createClient } from "@/utils/supabase/client";
import { useState, useCallback, useEffect } from "react";
import { MdAddBox } from "react-icons/md";

export function SearchComponent() {
  const [podcastSearchText, setPodcastSearchText] = useState("");
  const [podcastSearchResult, setPodcastSearchResult] = useState([]);
  const [addedPodcastCount, setAddedPodcastCount] = useState(0);

  const free_plan_podcast_count = 3;

  const supabase = createClient();

  const handlePodcastSearchTextChange = (e: any) => {
    setPodcastSearchText(e.target.value);
  };

  const handlePodcastAdd = useCallback(
    async (podcast: any) => {
      let access_token =
        (await supabase.auth.getSession()).data.session?.access_token ?? "";

      let result = await AddUserPodcast(access_token, podcast.id);

      if (result) {
        setPodcastSearchText("");
        setPodcastSearchResult([]);
      }
    },
    [supabase],
  );

  const handlePodcastSearch = useCallback(
    async (searchText: string) => {
      let access_token =
        (await supabase.auth.getSession()).data.session?.access_token ?? "";
      let search_result = await SearchPodcasts(access_token, searchText);

      setPodcastSearchResult(search_result);
    },
    [supabase],
  );

  const truncateText = (text: String) => {
    if (text.length > 185) {
      return text.substring(0, 185) + "...";
    }
    return text;
  };

  const fetchAddedPodcasts = useCallback(async () => {
    let access_token =
      (await supabase.auth.getSession()).data.session?.access_token ?? "";
    let podcasts = (await GetUserPodcasts(access_token)) ?? [];
    setAddedPodcastCount(podcasts?.length ?? 0);
  }, []);

  useEffect(() => {
    fetchAddedPodcasts();
  }, []);

  return (
    <>
      <div className="flex items-center space-x-4 mt-5">
        <div className="flex flex-col w-full">
          <input
            type="text"
            placeholder="e.g. Freakonomics Radio"
            className="block w-full px-4 py-2 text-white bg-gray-800 border border-gray-600 rounded"
            onChange={(e) => handlePodcastSearchTextChange(e)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                handlePodcastSearch(podcastSearchText);
              }
            }}
            disabled={addedPodcastCount >= free_plan_podcast_count}
          />
        </div>
        <button
          className="px-4 py-2 bg-[#01357b] text-white rounded hover:bg-white hover:text-[#01357b] border border-[#01357b] transition-colors duration-300 disabled:opacity-50 disabled:bg-gray-400 disabled:hover:text-white"
          onClick={() => handlePodcastSearch(podcastSearchText)}
          disabled={addedPodcastCount >= free_plan_podcast_count}
        >
          Search
        </button>
      </div>
      {addedPodcastCount >= free_plan_podcast_count && (
        <p className="text-center text-sm text-gray-500 mt-2">
          You have reached the limit of {free_plan_podcast_count} podcasts on
          the free plan.
        </p>
      )}
      {podcastSearchResult.map((podcast: any, index: Number) => {
        return (
          <div>
            {index !== 0 ? (
              <hr className="border-t border-[#D3D8DE]" />
            ) : (
              <div />
            )}
            <div className="grid grid-cols-12 gap-4 min-h-[140px] items-center">
              <div className="col-span-4 sm:col-span-3 md:col-span-2">
                <img
                  src={podcast.imageUrl}
                  alt="Podcast Cover Image"
                  className="w-[100px] rounded-md"
                />
              </div>
              <div className="col-span-6 sm:col-span-7 md:col-span-9">
                <p className="text-base font-normal text-white mb-1 mt-[5px]">
                  {podcast.title}
                </p>
                <p className="text-xs font-normal text-white mb-1 pr-[15px]">
                  {truncateText(podcast.description)}
                </p>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-3 sm:col-span-3 mr-[30px]">
                    <p className="text-xs font-normal text-white">
                      Episodes: {podcast.numberOfEpisodes}
                    </p>
                  </div>
                  <div className="col-span-3 sm:col-span-3 mr-[18px]">
                    <p className="text-xs font-normal text-white">
                      Rating:{" "}
                      {podcast.ratingAverage
                        ? Math.round(podcast.ratingAverage * 10) / 10
                        : "N/A"}
                    </p>
                  </div>
                  <div className="col-span-3 sm:col-span-3">
                    <p className="text-xs font-normal text-white">
                      Ratings: {podcast.ratingCount}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <button
                  onClick={() => handlePodcastAdd(podcast)}
                  className="text-white hover:text-[#4e79b0] flex items-center capitalize"
                >
                  <MdAddBox className="text-3xl" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <div className="mb-8" />
    </>
  );
}
