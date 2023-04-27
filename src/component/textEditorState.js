import { atom, selector } from 'recoil';

export const titleState = atom({
  key: 'titleState',
  default: '',
});

export const contentState = atom({
  key: 'contentState',
  default: '',
});

export const category1State = atom({
  key: 'category1State',
  default: '기타',
});

export const category2State = atom({
  key: 'category2State',
  default: '기타',
});