import { CONFIG } from './config'

export const VALIDGUESSES = [
  'chepak',
  'chepap',
  'chepam',
  'nnemii',
  'nyemii',
  'chetoo',
  'wetapx',
  'wemirr',
  "'emaay",
  "'ekwak",
  "'ekwas",
  "'ekwiy",
  "'exink",
  'saarap'
  "'enyaa",
  'muuyuu',
  'maayum',
  'nyilly',
  'exwatt',
  'peshiw',
  'sheruk',
  'xemxuk',
  'shaxuk',
  "'iikuu",
  "'estik",
  'tenaay',
  "ta'urp",
  'xeyaay',
  'kewaak',
  "'eyaak",
  'kesark',
  'iiwiik',
  'kuwaay',
  'kusaay',
  "ta'waa",
  'kapsul',
  'esally',
  'iichix',
  'xemall',
  'exwall',
  'kesark',
  "'exatt",
  "sha'ii",
  'meskur',
  "'ixpaa",
  'xalyak',
  'xantak',
  "'expar",
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
