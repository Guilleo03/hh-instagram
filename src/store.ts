import { create } from 'zustand';

type Context = {
  openUploadPhotoModal: boolean;
  setOpenUploadPhotoModal: (isOpen: boolean) => void;
};

export const useContext = create<Context>(set => ({
  openUploadPhotoModal: false,
  setOpenUploadPhotoModal: isOpen =>
    set(() => ({ openUploadPhotoModal: isOpen })),
}));
