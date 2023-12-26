export type Publication = {
  id: string | number;
  photoUrl: string;
  date?: Date;
  title: string;
  userId: string | number;
};

export type FormUploadPhoto = {
  photo: any;
  title: string;
};
