"use client";

import { GetUserPodcasts } from "@/api/user";
import { createClient } from "@/utils/supabase/client";
import { useState, useEffect } from 'react'


export function PodcastList() {
  const [podcasts, setPodcasts] = useState([])
  const supabase = createClient();
 

  useEffect(() => {
    const getPodcasts = async () => {
      let access_token = (await supabase.auth.getSession()).data.session?.access_token ?? ""; 
      let podcasts = (await GetUserPodcasts(access_token)) ?? [];
      
      setPodcasts(podcasts);
    }

    getPodcasts();
  }, []);

  return (
    <>
      {/* <p className="text-3xl">Podcasts</p> */}
      {podcasts.map((podcast: any, index) => {
        return (
        <div key={index}>
          {index !== 0 ? <div className="border-t border-gray-300" /> : <div />}
          <div className="grid grid-cols-12 gap-4" style={{ height: '140px' }}>
            <div className="flex items-center col-span-2 sm:col-span-3 xs:col-span-4">
              <img src={podcast.image_url} alt="Podcast Cover Image" className="w-24 rounded" />
            </div>
            <div className="flex items-center col-span-9 sm:col-span-8 xs:col-span-7">
              <div>
                <p className="text-lg mb-1 mt-0">
                  {podcast.title}
                </p>
                <p className="text-sm mb-1">
                  Added: {new Date(podcast.valid_at).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end col-span-1 sm:col-span-1 xs:col-span-1">
              <button
                className="text-blue-800 hover:text-red-500"
                //onClick={() => handleDelete(index, podcast)}
              >
                {/* <DeleteIcon /> */}
                Test
              </button>
            </div>
          </div>
        </div>  
        );    
      })}
    </>
  );
}
