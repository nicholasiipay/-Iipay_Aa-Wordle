import { CONFIG } from './config'

export const VALIDGUESSES = [
    'chepak',
  'chepap',
  'chepam',
  'nnemii',
  'nyemii',
  'chetoo',
  'wetapx',
  'wemirr'
  "'emaay",
  "'emallk",
  "'ekwak",
  "'ekwas",
  "'ekwiy",
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
