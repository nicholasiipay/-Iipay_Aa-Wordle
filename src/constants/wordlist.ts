import { CONFIG } from './config'

export const WORDS = [
  'chepak',
  'chepap',
  'chepam',
  'nnemii',
  'nyemii',
  'chetoo',
  'wetaph',
  'wemirr',
  "'emaay",
  "'ekwak",
  "'ekwas",
  "'ekwiy",
  "'ehink",
  'saarap',
  "'enyaa",
  'muuyuu',
  'maayum',
  'nyilly',
  'ehwatt',
  'peshiw',
  'sheruk',
  'hemhuk',
  'shahuk',
  "'iikuu",
  "'estik",
  'tenaay',
  "ta'urp",
  'heyaay',
  'kewaak',
  "'eyaak",
  'kesark',
  'iiwiik',
  'kuwaay',
  'kusaay',
  "ta'waa",
  'kapsul',
  'esally',
  'iichih',
  'hemall',
  'ehwall',
  'kesark',
  "'ehatt",
  "sha'ii",
  'meskur',
  "'ihpaa",
  'halyak',
  'hantak',
  "'ehpar",
  
  
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
