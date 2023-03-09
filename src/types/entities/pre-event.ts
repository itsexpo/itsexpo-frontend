export type PreEventDetail = {
  status: boolean;
  start_date: Date;
  close_date: Date;
};

export type PreEvent = {
  Jurnalistik: PreEventDetail;
  kti: PreEventDetail;
  robotik: PreEventDetail;
  talkshow: PreEventDetail;
};
