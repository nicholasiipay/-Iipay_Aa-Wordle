import { CONFIG } from './config'

export const WORDS = [
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
  'saarap',
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
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
