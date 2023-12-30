import { create } from 'zustand';

type Context = {
  imageUrlPreview: string;
  setImageUrlPreview: (url: string) => void;
};

export const useContext = create<Context>(set => ({
  imageUrlPreview: '',
  setImageUrlPreview: () =>
    set(state => ({ imageUrlPreview: state.imageUrlPreview })),
}));
