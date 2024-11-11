CREATE OR REPLACE VIEW
  get_users_to_sync AS
SELECT
  u.id
FROM
  "User" u
  JOIN "UserPodcast" up ON u.id = up.user_id
WHERE
  up.is_active = TRUE
  AND (u.last_sync IS NULL OR u.last_sync < CURRENT_TIMESTAMP - INTERVAL '3 days')
  AND u.id NOT IN (
    SELECT 
      user_id
    FROM
      "UserPodcastSyncQueue"
  )
GROUP BY
  u.id
ORDER BY
  u.last_sync DESC;