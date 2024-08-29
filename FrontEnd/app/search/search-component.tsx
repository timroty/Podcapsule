"use client";

import { SearchPodcasts } from "@/api/podcast";
import { DeleteUserPodcast, GetUserPodcasts } from "@/api/user";
import { createClient } from "@/utils/supabase/client";
import { useState, useEffect, useCallback } from "react";
import { MdDelete } from "react-icons/md";

export function SearchComponent() {
  const [podcastSearchText, setPodcastSearchText] = useState('')
  const [podcastSearchResult, setPodcastSearchResult] = useState([])

  const supabase = createClient();

  const handlePodcastSearchTextChange = (e: any) => {
    setPodcastSearchText(e.target.value)
  }

  const handlePodcastAdd = useCallback(async (podcast: any) => {
    let access_token =
      (await supabase.auth.getSession()).data.session?.access_token ?? "";
    
    setPodcastSearchText('')
    setPodcastSearchResult([])


  }, [supabase]);

  const handlePodcastSearch = useCallback(async (searchText: string) => {
    let access_token =
      (await supabase.auth.getSession()).data.session?.access_token ?? "";
    let search_result = await SearchPodcasts(access_token, searchText);

    setPodcastSearchResult(search_result)
  }, [supabase]);

  const truncateText = (text: String) => {
    if (text.length > 185) { return text.substring(0, 185) + '...' }
    return text
  }

  return (
    <>
    <div className="flex items-center space-x-4 mt-5">
      <div className="flex flex-col w-full">
        <input
          type="text"
          placeholder="Search a podcast name ..."
          className="block w-full px-4 py-2 text-white bg-gray-800 border border-gray-600 rounded"
          onChange={(e) => handlePodcastSearchTextChange(e)}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              handlePodcastSearch(podcastSearchText)
            }
          }}
        />
      </div>
      <button
        className="px-4 py-2 bg-[#01357b] text-white rounded hover:bg-white hover:text-[#01357b] border border-[#01357b] transition-colors duration-300"
        onClick={() => handlePodcastSearch(podcastSearchText)}
      >
        Search
      </button>
      </div>
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
                      Rating: {podcast.ratingAverage ? Math.round(podcast.ratingAverage * 10) / 10 : 'N/A'}
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
                  className="bg-white text-[#01357B] border border-[#01357B] px-4 py-2 rounded flex items-center capitalize"
                >
                  {/* <AddCircleOutline className="mr-2" size={16} /> */}
                  Add
                </button>
              </div>
            </div>
          </div>
          )
        })}
    </>
  );
}
