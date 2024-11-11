CREATE OR REPLACE VIEW
  get_podcasts_to_sync AS
SELECT
  p.id
FROM
  "Podcast" p
WHERE
  (p.last_sync IS NULL OR p.last_sync < CURRENT_TIMESTAMP - INTERVAL '7 day')
  AND p.id NOT IN (
    SELECT 
      podcast_id
    FROM
      "PodcastSyncQueue"
  )
ORDER BY
  p.last_sync DESC;