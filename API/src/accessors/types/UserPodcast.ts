type GetAllForUser = {
  is_active: boolean;
  valid_at: string | null;
  Podcast: {
    title: string | null;
    image_url: string | null;
  } | null;
};
