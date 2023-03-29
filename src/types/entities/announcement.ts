export type AnnouncementColumns = {
  id: string;
  title: string;
  description: string;
  list_event_id: string;
  created_at: string;
  updated_at: string;
};

export type CreateAnnouncement = {
  title: string;
  event_id: string;
  description: string;
};

export type UpdateAnnouncement = {
  event_id: string;
  title: string;
  description: string;
  id: string;
};
