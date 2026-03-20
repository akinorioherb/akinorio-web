import type { Product, Testimonial } from '@/types'

export const SITE_NAME = 'AKINORIO'
export const SITE_URL = 'https://akinorio.com'
export const SITE_DESCRIPTION = '何をつけるかより、何をやめるか。ミトコンドリア×ケイ素の力で、肌のOSを初期化する引き算のスキンケア。'
export const LINE_URL = 'https://lin.ee/qF2bQ2v'
export const FREE_SHIPPING_THRESHOLD = 10000
export const SHIPPING_FEE = 600

export const PRODUCTS: Product[] = [
  {
    id: '1', slug: 'mitochondria', name: 'ミトコンドリアのちから', subtitle: '細胞美容液',
    description: '原料メーカーが「これだけの配合量は美容液と呼んでください」と言った一本。\nファンデーションも化粧水もいらない。ダブル洗顔も不要。\n最終的にこの一本で済む素肌へ導くために生まれた、引き算のスキンケアの核心。\nミトコンドリアとケイ素の力で、細胞が自ら美しくなる力を呼び覚まします。',
    category: 'single', price: 13200, subscriptionPrice: 12540, subscriptionDiscountPct: 5, volume: '50g',
    ingredients: 'シリカ水、スクワラン、ホホバ種子油、ミトコンドリア活性成分配合',
    usageDuration: '約3ヶ月',
    features: ['ミトコンドリア活性化テクノロジー', 'ケイ素（シリカ）配合', 'パラベンフリー・アルコールフリー'],
    skinConcerns: ['乾燥', '毛穴', 'シミ・くすみ', 'ハリ・たるみ', '敏感肌'],
    image: '/images/products/mitochondria.png', images: [], sortOrder: 1, isActive: true,
  },
  {
    id: '2', slug: 'herb', name: 'ハーブのちから', subtitle: '肌育エッセンス',
    description: '自然の生命力が宿るハーブの滴。\n肌の土台を整え、硬くなった角質をやさしく解きほぐすことで、\n次に使う美容成分の浸透を劇的に高めます。',
    category: 'single', price: 8800, subscriptionPrice: 8360, subscriptionDiscountPct: 5, volume: '30ml',
    usageDuration: '約3ヶ月',
    ingredients: '', features: [], skinConcerns: ['乾燥', '毛穴'],
    image: '/images/products/herb.png', images: [], sortOrder: 2, isActive: true,
  },
  {
    id: '3', slug: 'kihada', name: '輝肌（キハダ）', subtitle: '極上艶ヴェール',
    description: '呼び覚ました肌本来のチカラを、極上のヴェールで閉じ込める。\n与えすぎない「引き算」が完成させる、圧倒的な艶と透明感をご体感ください。',
    category: 'single', price: 11000, subscriptionPrice: 10450, subscriptionDiscountPct: 5, volume: '50g',
    usageDuration: '約3ヶ月',
    ingredients: '', features: [], skinConcerns: ['シミ・くすみ', '乾燥'],
    image: '/images/products/kihada.png', images: [], sortOrder: 3, isActive: true,
  },
  {
    id: '4', slug: 'balm', name: 'クリアクリスタルバーム', subtitle: '究極の細胞覚醒バーム',
    description: '最上級の保湿と細胞活性を両立させた奇跡のバーム。\n夜のスキンケアの最後に塗るだけで、翌朝の肌が見違えるように生まれ変わります。',
    category: 'single', price: 22000, subscriptionPrice: 20900, subscriptionDiscountPct: 5, volume: '100g',
    usageDuration: '約4〜6ヶ月',
    ingredients: '', features: [], skinConcerns: ['ハリ・たるみ', '乾燥'],
    image: '/images/products/kihada.png', images: [], sortOrder: 4, isActive: true,
  },
  {
    id: '5', slug: 'serum', name: 'クリアクリスタルセラム', subtitle: '高濃度美容液',
    description: '極限までピュアな状態で抽出された高濃度な美容液。\n水のように軽やかに肌の奥深くへ浸透し、かつてないハリと弾力を目覚めさせます。',
    category: 'single', price: 11000, subscriptionPrice: 10450, subscriptionDiscountPct: 5, volume: '200ml',
    usageDuration: '約3ヶ月',
    ingredients: '', features: [], skinConcerns: ['シミ・くすみ', 'ハリ・たるみ'],
    image: '/images/products/mitochondria.png', images: [], sortOrder: 5, isActive: true,
  },
  {
    id: '6', slug: 'cleansing', name: 'クリアクリスタルクレンジング', subtitle: '摩擦ゼロのメイク落とし',
    description: 'ダブル洗顔という「余計な儀式」を終わらせるクレンジング。\nメイクも毛穴汚れも、するんと落とす。落とすたびに肌が整っていきます。',
    category: 'single', price: 6600, subscriptionPrice: 6270, subscriptionDiscountPct: 5, volume: '180ml',
    ingredients: 'シリカ水、ヤシ油脂肪酸、グリセリン、ミトコンドリア活性成分配合',
    features: ['ジェルタイプで肌に優しい', 'ダブル洗顔不要', '毛穴汚れもすっきり'],
    skinConcerns: ['毛穴', '敏感肌'],
    image: '/images/products/cleansing.png', images: [], sortOrder: 6, isActive: true,
  },
  {
    id: '7', slug: 'uv', name: 'クリアクリスタルスキンベースUV', subtitle: '美容液UVベース',
    description: '紫外線から肌を確実に守りながら、日中もスキンケアし続ける新感覚のUVベース。\n負担を一切感じさせない極上の軽さです。',
    category: 'single', price: 5500, subscriptionPrice: 5225, subscriptionDiscountPct: 5, volume: '30g',
    usageDuration: '約3ヶ月',
    ingredients: '', features: [], skinConcerns: ['シミ・くすみ', '敏感肌'],
    image: '/images/products/mitochondria.png', images: [], sortOrder: 7, isActive: true,
  },
  {
    id: '8', slug: 'minus20-set', name: 'マイナス20才肌セット', subtitle: '基本の引き算セット',
    description: '肌のOSを初期化するための、基本のステップが揃ったセット。\nこれだけで、あなたのスキンケアは完了します。',
    category: 'set', price: 22000, subscriptionPrice: 20900, subscriptionDiscountPct: 5, volume: '1セット',
    ingredients: '', features: [], skinConcerns: ['乾燥', '毛穴', '敏感肌'],
    image: '/images/products/allseries.png', images: [], sortOrder: 8, isActive: true,
  },
  {
    id: '9', slug: 'kagayaki-majo', name: '輝魔女セット', subtitle: '極上のエイジングケア',
    description: 'ミトコンドリアのちから、ハーブのちから、輝肌Kihadaがセットに。\n本来の美しさを呼び覚ます、ブランド最高峰の組み合わせ。',
    category: 'set', price: 33000, subscriptionPrice: 31900, subscriptionDiscountPct: 3, volume: '1セット',
    ingredients: '', features: [], skinConcerns: ['シミ・くすみ', 'ハリ・たるみ', '乾燥'],
    image: '/images/products/allseries.png', images: [], sortOrder: 9, isActive: true,
  },
  {
    id: '10', slug: 'premium', name: '輝魔女プレミアム', subtitle: '最上級コンプリート',
    description: 'アキノリオの全ての真価を余すところなく体験できる、最上級のフルセット。\n揺るぎない自信と究極の美肌をあなたに。',
    category: 'set', price: 38500, subscriptionPrice: 38500, subscriptionDiscountPct: 0, volume: '1セット',
    ingredients: '', features: [], skinConcerns: ['シミ・くすみ', 'ハリ・たるみ', '乾燥'],
    image: '/images/products/allseries.png', images: [], sortOrder: 10, isActive: true,
  }
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'M.T',
    age: 52,
    skinConcern: 'ハリ・たるみ',
    content: '引き算を始めて1ヶ月。朝、鏡を見て涙が出ました。何十年も「足す」ことばかりしていた自分が恥ずかしくなるほど、肌が生き返っていた。もっと早く出会いたかった。この感動を、同じ悩みを持つ友人にも伝えました。',
    rating: 5,
    productName: 'ミトコンドリアのちから 美容液',
  },
  {
    id: '2',
    name: 'K.S',
    age: 45,
    skinConcern: '毛穴',
    content: '長年の毛穴の悩みが、引き算を始めて3ヶ月で嘘のように落ち着きました。化粧水を重ねて、美容液を重ねて、クリームを重ねて。あの「足し算の日々」は一体何だったのか。救われた気持ちです。友人にも教えたくて、もう3人に紹介しました。',
    rating: 5,
    productName: 'ミトコンドリアのちから 美容液',
  },
  {
    id: '3',
    name: 'Y.N',
    age: 38,
    skinConcern: '敏感肌',
    content: 'アトピー体質で、何を塗っても赤くなる肌でした。皮膚科で処方された薬すら合わないこともあった。でもアキノリオだけは違った。全く刺激がなく、肌が本来の力を取り戻していくのを感じました。本当に救われました。',
    rating: 5,
    productName: 'ミトコンドリアのちから 美容液',
  },
  {
    id: '4',
    name: 'R.M',
    age: 61,
    skinConcern: 'シミ・くすみ',
    content: '60歳を過ぎて「もう何をしても」と諦めていました。でも引き算を始めてから、肌が自ら明るさを取り戻していく。ファンデーションなしで外出できる日が来るなんて。娘に「お母さん、肌きれいになった」と言われた時、泣きそうになりました。',
    rating: 5,
    productName: 'ミトコンドリアのちから 美容液',
  },
]

export const PREFECTURES = [
  '北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県',
  '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県',
  '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県',
  '岐阜県', '静岡県', '愛知県', '三重県',
  '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県',
  '鳥取県', '島根県', '岡山県', '広島県', '山口県',
  '徳島県', '香川県', '愛媛県', '高知県',
  '福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県',
]
