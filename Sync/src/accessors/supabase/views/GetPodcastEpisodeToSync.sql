CREATE OR REPLACE VIEW
  get_podcast_episode_to_sync AS
SELECT
  pe.id as podcast_episode_id,
  up.user_id as user_id
FROM
  "UserPodcast" up 
  JOIN "PodcastEpisode" pe ON up.podcast_id = pe.podcast_id
  LEFT JOIN "UserPodcastEpisode" upe ON pe.id = upe.podcast_episode_id
WHERE
  up.is_active = TRUE
  AND upe IS NULL
  AND pe.created_at <= (up.valid_at + INTERVAL '2 days')
ORDER BY
  RANDOM();
