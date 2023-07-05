import { atom } from 'jotai';

export const navAtom = atom(false);
export const navIsOpenAtom = atom(get => get(navAtom));
