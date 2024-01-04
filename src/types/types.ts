export type Publication = {
  id: string | number;
  image: string;
  date?: Date;
  title: string;
  userId: string | number;
};

export type FormUploadPhoto = {
  file: any;
  title: string;
};

export type User = {
  id: string | number;
  name: string;
  image: string;
  email: string;
};
