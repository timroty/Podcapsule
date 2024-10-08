"use client";

import { DeleteUserPodcast, GetUserPodcasts } from "@/api/user";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { MdDelete } from "react-icons/md";

export function PodcastList() {
  const [podcasts, setPodcasts] = useState([]);
  const supabase = createClient();

  const free_plan_podcast_count = 3;

  const fetchPodcasts = useCallback(async () => {
    let access_token =
      (await supabase.auth.getSession()).data.session?.access_token ?? "";
    let podcasts = (await GetUserPodcasts(access_token)) ?? [];
    setPodcasts(podcasts);
  }, []);

  useEffect(() => {
    fetchPodcasts();
  }, [fetchPodcasts]);

  const handleDelete = useCallback(
    async (index: number, podcast: any) => {
      try {
        let access_token =
          (await supabase.auth.getSession()).data.session?.access_token ?? "";
        let successfullyDeleted = await DeleteUserPodcast(
          access_token,
          podcast.id,
        );

        if (successfullyDeleted) {
          // Remove the podcast from the local state
          setPodcasts((prevPodcasts) =>
            prevPodcasts.filter((_, i) => i !== index),
          );
        }
      } catch (error) {}
    },
    [supabase],
  );

  return (
    <>
      {podcasts.map((podcast: any, index) => {
        return (
          <div key={index}>
            {index !== 0 ? (
              <div className="border-t border-gray-800" />
            ) : (
              <div />
            )}
            <div className="grid grid-cols-12 gap-4 h-32">
              <div className="flex items-center justify-center col-span-3 sm:col-span-3 md:col-span-2">
                <img
                  src={podcast.image_url}
                  alt={`${podcast.title} cover image.`}
                  className="w-24 rounded"
                />
              </div>
              <div className="flex items-center col-span-6 sm:col-span-8 md:col-span-9">
                <div>
                  <p className="text-lg mb-1 mt-0">{podcast.title}</p>
                  <p className="text-sm mb-1">
                    Added: {new Date(podcast.valid_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end col-span-2 sm:col-span-1 md:col-span-1">
                <button
                  className="text-white hover:text-red-500"
                  onClick={() => handleDelete(index, podcast)}
                >
                  <MdDelete className="text-3xl" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex justify-center">
        {podcasts.length < free_plan_podcast_count ? (
          <Link
            href="/search"
            className="w-16 py-2 px-3 mt-2 align-middle justify-center mb-4 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
          >
            Add
          </Link>
        ) : (
          <p className="text-center mt-2 mb-4 text-gray-600">
            Only {free_plan_podcast_count} podcasts can be added on the free
            plan.
          </p>
        )}
      </div>
    </>
  );
}
