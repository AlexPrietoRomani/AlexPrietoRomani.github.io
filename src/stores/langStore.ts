import { atom } from 'nanostores';

export const $lang = atom<'es' | 'en'>('es');

export function toggleLang() {
  $lang.set($lang.get() === 'es' ? 'en' : 'es');
}
