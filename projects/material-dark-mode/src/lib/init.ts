import {darkModeClass, lightModeClass, storageKey} from './constants';

export function init(): void {
  let mode = localStorage[storageKey];

  if (mode && mode !== darkModeClass && mode !== lightModeClass) {
    mode = null;
  }

  if (!mode) {
    const prefersDarkSchemeQuery = '(prefers-color-scheme: dark)';
    const initialDarkModeValue = window.matchMedia(prefersDarkSchemeQuery).matches;

    mode = initialDarkModeValue ? darkModeClass : lightModeClass;
    localStorage[storageKey] = mode;
  }

  document.body.classList.add(mode);
}
