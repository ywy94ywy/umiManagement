import { createContext } from 'react';
import { THEME_CONFIG } from '../../config';

const fs = THEME_CONFIG.fontSize[0].value;
const bg = THEME_CONFIG.background.pure.value[0];
const setBg: React.Dispatch<React.SetStateAction<string>> = () => {};
const setFs: React.Dispatch<React.SetStateAction<string>> = () => {};

export const ThemeContext = createContext({
  fs: fs,
  bg,
  icFs: '',
  setBg,
  setFs,
});
