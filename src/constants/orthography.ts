import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  "'",
  'a',
  'c',
  'e',
  'i',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  'h',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
