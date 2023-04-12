export type MainEventDetail = {
  status: boolean;
  start_date: Date;
  close_date: Date;
};

export type MainEvent = {
  Wahana2D: MainEventDetail;
  Wahana3D: MainEventDetail;
};
