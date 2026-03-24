import type { Lang } from '@/context/LanguageContext'

const jaBase = {
  nav: {
    products: '商品一覧',
    story: 'ブランドストーリー',
    trial: '21日間体験',
    cart: 'カート',
    openMenu: 'メニューを開く',
    closeMenu: 'メニューを閉じる',
    openCart: 'カートを開く',
  },

  hero: {
    line1: '引き算の美学。',
    line2: '本来の美しさ。',
    line3: '手放すほどに、',
    line4: '研ぎ澄まされる。',
  },

  brandStory: {
    label: 'Brand Story',
    svgLines: ['病気になっても、', 'いくつになっても、', '美しさを諦める', '必要はない。'],
    paragraphs: [
      '初めまして。アキノリオ代表の MINAKO です。\n私自身、40代前半にバセドー病と橋本病を繰り返した影響で肌荒れに悩まされ、長年スキンケアジプシーを続けていました。',
      '「美肌の基本はしっかりと汚れを落とすこと」\nその言葉を信じ、毎日クレンジングの後、ぬるま湯で念入りに泡洗顔。肌を清潔に保つために、大切な皮脂や常在菌まですっかり洗い流してしまっていました。',
      'そして洗顔後には、1本15,000円の化粧水を美顔器で導入し、さらに1万円の化粧水を手で7、8回しっかり馴染ませる。そこへシートマスクを重ね、サランラップでパック。これだけ完璧に保湿をした上で、12,000円の美容液を2種類重ねて、最後に保湿クリームで蓋をする。',
      'ここまで徹底的にやって、翌朝ようやく乾燥を感じないのがやっと。「今日の商談にシワ顔で挑まなくて済んだ」と安心する毎日。しかし、一向に変わらない自分の肌に深く悲観していました。',
      '「自分と同じように悩む人のために、本当に肌を変えるものを作りたい。」\nその切実な想いから生化学者とタッグを組み、たどり着いたのは、これまでの常識を覆す\n「引き算スキンケア」でした。',
      '信じられないかもしれませんが、今の私のスキンケアは、朝は顔を洗わない。化粧水もつけない。\n夜は「ミトコンドリアのちから」と「ハーブのちから」を手の平で混ぜて塗るだけ。お手入れにかかる時間はたったの15秒です。',
      '過剰な「与えすぎ」に終止符を打ち、肌本来の力を呼び覚ます。\nこの40代からの本当に正しい引き算スキンケアを実践して13年。今では、実年齢よりマイナス27歳肌に生まれ変わりました。',
      '急に「引き算」を始めることに怖さを覚えるかもしれません。痛いほどお気持ちはわかります。かつての私がそうだったからです。',
      'しかし、足し算のケアを手放した先にこそ、あなたが再び輝くための最短の答えがあると確信しています。\nまずは、あなたの肌と出会い直す1ヶ月の旅を始めてみませんか。',
    ],
    founderLabel: 'Founder & CEO',
  },

  secret: {
    label: '素肌力の解放',
    svgLines: ['アキノリオの', '秘密'],
    headline: '肌の「根本環境」に着目した\n全く新しい解答。',
    paragraphs: [
      '角質層の根本環境が乱れていたら、どんな成分も浸透せずに流れてしまいます。\n何を使っても変わらない… だからこそ「肌の土台」に着目する必要があるのです。',
      'ファンデーションも、化粧水すらも不要になる※1ような体験。\nリピート率は90％超え※2。\nこれまでに無い驚きが、貴方を待っています。',
      '年齢を重ねても、環境の変化に戸惑っても、諦める必要なんてありません。\nアキノリオのスキンケアは、本質を見つめ直した引き算の極地です。',
    ],
    note1: '※1 個人のスキンケアステップの簡略化における感想です',
    note2: '※2 当社販売実績データに基づく（過去12ヶ月の定期購入継続率）',
  },

  skinCareStep: {
    sectionTitle: '輝魔女セットの奇跡',
    label: '輝魔女セット - スキンケアステップ',
    headline: 'なぜ、この順番なのか。',
    body: '圧倒的な素肌力を引き出すための、究極の3ステップ「輝魔女セット」。それぞれが明確な役割を持ち、完璧な連携で肌環境を整え、細胞からの自己再生を促します。',
    steps: [
      {
        name: 'ハーブのちから',
        title: '土台を整え、潤いの道を拓く。',
        desc: '洗顔後のまっさらな肌へ。自然の生命力が宿るハーブの滴が、硬くなった角質をやさしく解きほぐし、次に届ける美容液の浸透（角質層まで）を劇的に高めます。',
      },
      {
        name: 'ミトコンドリアのちから',
        title: '細胞の奥深くから、かつてないハリを。',
        desc: '整った土台に、極限までピュアな状態で抽出された成分がまっすぐに届きます。水のように軽く、かつてない肌の弾力と若々しい印象を呼び覚まします。',
      },
      {
        name: '輝肌Kihada',
        title: '生まれたての輝きを、永遠に閉じ込める。',
        desc: '呼び覚ました肌本来のチカラを、極上のヴェールで優しく包み込みます。与えすぎない「引き算」が完成させる、圧倒的な艶と透明感をご体感ください。',
      },
    ],
  },

  testimonials: {
    label: 'VOICE',
    sectionTitle: '引き算を選んだ方の声',
    durationLabel: 'ご愛用歴',
    items: [
      {
        name: 'M.K様',
        age: '57歳',
        duration: '4ヶ月',
        title: 'ファンデーションを手放せた驚き',
        content: 'これまで何十種類もの高級美容液やクリームを試してきました。それでも乾燥とくすみが改善せず、ファンデーションが手放せませんでした。アキノリオに出会い、「与えない」ケアに最初は不安でしたが、数ヶ月で見違えるように。今では日焼け止めだけで外出できるようになり、毎朝鏡を見るのが楽しみです。',
      },
      {
        name: 'Y.S様',
        age: '62歳',
        duration: '14ヶ月',
        title: '諦めていたハリが戻ってきた',
        content: '「年齢のせいだから仕方ない」と諦めていた肌のたるみ。けれど、アキノリオのシンプルなステップに変えてから、肌の奥から押し返すようなハリを感じるようになりました。余計なものを削ぎ落とすことで、肌自身が本来持っている力を取り戻したのだと実感しています。',
      },
      {
        name: 'A.T様',
        age: '49歳',
        duration: '8ヶ月',
        title: 'スキンケアの概念が変わった',
        content: '化粧水、乳液、美容液、クリーム… 何種類も塗り重ねていた時間が嘘のようです。今は洗顔後、美容液をなじませるだけ。それなのに、過去最高に肌の調子が良いのです。成分を与えるのではなく、肌の細胞に働きかけるというアプローチがこれほど理にかなっているとは思いませんでした。',
      },
    ],
  },

  cta: {
    verticalLabel: '引き算の体験',
    mobileLabel: '引き算の体験',
    headline: 'あなたの\n肌の歴史を、\n引き算からやり直す。',
    repeatRateLabel: 'Repeat Rate',
    repeatNote: '※当社販売実績データ',
    program: {
      title: '21日間プログラム',
      subhead: 'いきなりの引き算スキンケアを躊躇うあなたへ。',
      body: 'まずは、足し算のスキンケアをお休みし、ご自身の肌環境をリセットする21日間をお試しください。\n本当に必要なものは何か、肌が答えてくれます。',
      button: '21日間の体験を始める',
    },
  },

  footer: {
    tagline: '何をつけるかより、何をやめるか。\n引き算のスキンケア',
    productsTitle: 'Products',
    companyTitle: 'Company',
    connectTitle: 'Connect',
    lineText: '引き算の旅は、ここから始まります',
    lineButton: 'LINE友だち追加',
    nav: {
      story: 'ブランドストーリー',
      company: '会社概要',
      contact: 'お問い合わせ',
      legal: '特定商取引法に基づく表記',
      privacy: 'プライバシーポリシー',
      trial: '21日間体験',
    },
  },

  mobile: {
    lineText: '引き算の旅は、ここから始まります',
    lineButton: 'LINE友だち追加',
    footerLinks: {
      company: '会社概要',
      contact: 'お問い合わせ',
      legal: '特定商取引法に基づく表記',
      privacy: 'プライバシーポリシー',
    },
  },
}

const enBase = {
  nav: {
    products: 'Products',
    story: 'Our Story',
    trial: '21-Day Trial',
    cart: 'Cart',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    openCart: 'Open cart',
  },

  hero: {
    line1: 'The Art of Subtraction.',
    line2: 'Your Natural Radiance.',
    line3: 'The more you release,',
    line4: 'the more you reveal.',
  },

  brandStory: {
    label: 'Brand Story',
    svgLines: ['Through illness.', 'Through the years.', 'Beauty is never', 'yours to surrender.'],
    paragraphs: [
      'My name is Minako, Founder of AKINORIO. In my early forties, the recurring battle with Graves\' and Hashimoto\'s disease left my skin in a state I barely recognized. For years, I drifted from product to product — searching for something that would truly work.',
      'I believed what I had been told: cleanse thoroughly, morning and night. So I did — stripping away not just impurities, but the very oils and microbiome my skin depended on to stay alive.',
      'After cleansing, I applied a ¥15,000 lotion with a beauty device, then layered toner by hand — seven, eight times. Sheet masks. Cling-film wrapping. Two serums at ¥12,000 each. A sealing cream to finish. Every night, without fail.',
      'All of that — and still waking up to skin that merely tolerated the day. Enough not to be ashamed before a meeting. But never truly transformed. I had grown quietly despairing of my own face.',
      'I wanted to create something real — for every woman who had tried everything and still felt unseen by her own reflection. Working alongside a biochemist, we arrived at a revelation: the answer was never what to add. It was what to stop.',
      'You may find this difficult to believe. My morning routine now: I don\'t wash my face. I apply nothing. In the evening, I blend The Power of Mitochondria and The Power of Herb together in my palm — and that is it. Fifteen seconds.',
      'Thirteen years of subtraction. The skin that emerged is said to appear 27 years younger than my age — not by addition, but by trusting what was always, quietly, there.',
      'I understand the hesitation. I felt it myself. Letting go of everything you have relied upon for so long — it feels impossible, until suddenly it doesn\'t.',
      'But on the other side of letting go is where your skin remembers itself. Begin with one month. Rediscover what was always yours.',
    ],
    founderLabel: 'Founder & CEO',
  },

  secret: {
    label: 'Skin Awakening',
    svgLines: ['The AKINORIO', 'Secret'],
    headline: 'A completely new answer,\nrooted in the skin\'s true foundation.',
    paragraphs: [
      'When the stratum corneum\'s core environment is disturbed, no ingredient can truly penetrate — it simply washes away. If nothing has ever worked, perhaps it is the foundation itself that needs addressing.',
      'An experience where foundation — even toner — becomes unnecessary.¹\nA repeat rate exceeding 90%.²\nA quiet astonishment awaits you.',
      'No matter how many years have passed, no matter how much has changed — there is no reason to surrender your beauty.\nAKINORIO skincare is the culmination of subtraction: returning to what is essential.',
    ],
    note1: '¹ Based on individual experience of simplifying skincare steps',
    note2: '² Based on internal sales data (12-month subscription continuation rate)',
  },

  skinCareStep: {
    sectionTitle: 'The Kagayaki Majo Ritual',
    label: 'Kagayaki Majo Set — Skincare Steps',
    headline: 'Why this order matters.',
    body: 'Three steps, each with a precise role. Together, they prepare the skin\'s environment and invite the cells to renew themselves — not by force, but by remembering.',
    steps: [
      {
        name: 'The Power of Herb',
        title: 'Prepare the ground. Open the path.',
        desc: 'Applied to freshly cleansed skin, this botanical essence gently dissolves hardened surface layers and dramatically increases the absorption of what follows — all the way to the stratum corneum.',
      },
      {
        name: 'The Power of Mitochondria',
        title: 'From deep within the cell — firmness, reborn.',
        desc: 'Extracted in its purest state, this serum moves through prepared skin like water. Weightless, yet profound — awakening an elasticity and vitality you may have thought was gone.',
      },
      {
        name: 'Kihada',
        title: 'Seal the radiance. Hold it there.',
        desc: 'A luminous veil that envelops the beauty your skin has reclaimed. Giving less — not more — is what allows an extraordinary clarity and glow to finally surface.',
      },
    ],
  },

  testimonials: {
    label: 'VOICE',
    sectionTitle: 'Those who chose subtraction',
    durationLabel: 'With AKINORIO',
    items: [
      {
        name: 'M.K',
        age: '57',
        duration: '4 months',
        title: 'The morning I stopped needing foundation',
        content: 'I had tried dozens of luxury serums and creams over the years. The dryness and dullness never left, and I never dared step outside without foundation. When I first encountered AKINORIO\'s approach — giving the skin less, not more — I was afraid. Within a few months, everything shifted. Today, I leave the house wearing only sunscreen. Every morning, the mirror has become something I look forward to.',
      },
      {
        name: 'Y.S',
        age: '62',
        duration: '14 months',
        title: 'Firmness I had written off as gone forever',
        content: 'I had made peace with sagging skin — told myself it was simply age, simply inevitable. But when I switched to AKINORIO\'s simple steps, something shifted — a resilience rising quietly from within. I understand now: by removing the excess, the skin was finally free to remember its own strength. That understanding changed everything.',
      },
      {
        name: 'A.T',
        age: '49',
        duration: '8 months',
        title: 'Everything I believed about skincare was wrong',
        content: 'Toner. Emulsion. Serum. Cream. The layering felt essential — until one day, it didn\'t. Now, a single serum after cleansing. And somehow, my skin has never been in better condition. The idea that we can act on the cell itself rather than simply coating the surface — I didn\'t expect it to be so rational. Or so quietly transformative.',
      },
    ],
  },

  cta: {
    verticalLabel: 'The Subtraction Experience',
    mobileLabel: 'The Subtraction Experience',
    headline: 'Rewrite your skin\'s history.\nBegin\nwith less.',
    repeatRateLabel: 'Repeat Rate',
    repeatNote: '* Based on internal sales data',
    program: {
      title: 'The 21-Day Programme',
      subhead: 'For those who aren\'t ready to let go all at once.',
      body: 'Begin by stepping away from your layered routine — just for 21 days. Allow your skin to reset. Then let it speak.\nWhat remains will be what was always truly necessary.',
      button: 'Begin the 21-Day Experience',
    },
  },

  footer: {
    tagline: 'Not what you apply — but what you release.\nThe skincare of subtraction.',
    productsTitle: 'Products',
    companyTitle: 'Company',
    connectTitle: 'Connect',
    lineText: 'The journey of subtraction begins here.',
    lineButton: 'Follow on LINE',
    nav: {
      story: 'Our Story',
      company: 'About',
      contact: 'Contact',
      legal: 'Legal Notice',
      privacy: 'Privacy Policy',
      trial: '21-Day Trial',
    },
  },

  mobile: {
    lineText: 'The journey of subtraction begins here.',
    lineButton: 'Follow on LINE',
    footerLinks: {
      company: 'About',
      contact: 'Contact',
      legal: 'Legal Notice',
      privacy: 'Privacy Policy',
    },
  },
}

// ─── about page ───────────────────────────────────────
const jaAbout = {
  heroLabel: 'Our Story',
  heroTitle: '引き算の美学',
  founderLabel: 'Founder',
  founderTitle: '20歳の構想、何十社の壁',
  founderParagraphs: [
    '創業者MINAKOがこの構想を抱いたのは、20歳の時でした。',
    '「ファンデーションも化粧水もいらない。ダブル洗顔も不要。朝は水洗顔すら不要。最終的にこれ1本で済む素肌に導く」——その信念を、何十社もの工場に伝え歩きました。',
    '返ってきたのは、断りの言葉ばかり。「そんなものは作れない」「需要がない」「前例がない」。',
    'それでもMINAKOは諦めなかった。そして、ようやく出会えた工場がこう言いました。「30年の歴史で、こんな形状を作ったのは初めてです」。原料メーカーは「これだけの配合量は、美容液と呼んでください」と。',
    '世界でオンリーワン。アキノリオは、そうして生まれました。',
  ],
  philosophyLabel: 'Philosophy',
  philosophyTitle: '何をつけるかより、何をやめるか',
  philosophyParagraphs: [
    '化粧品の世界では、常に「足し算」が行われてきました。新しい成分を加え、新しい効果を謳い、新しいステップを追加する。',
    '化粧品が「アプリの追加」だとすれば、アキノリオは「OSの再インストール」。余計なものを全て取り除き、肌という名のシステムを初期化する。',
    'もう、これ以上あなたの貴重なお金と時間を、一時の気休めのために使わないでください。',
    '答えは、細胞の中にありました。ミトコンドリアとケイ素の力で、肌が自ら美しくなる力を取り戻す。それが私たちの答えです。',
  ],
  ourWayLabel: 'Our Way',
  ourWayTitle: '売らないで広がる',
  ourWayParagraphs: [
    'アキノリオはお陰様で全国のパートナー代理店から直接ご購入いただけるようになっています。',
    '理念は「売らないで広がる」こと。自然な口コミだけで連鎖する。過度な売り込みは完全に禁止。パートナー代理店であるオーナー自身が本当に惚れ込んだ場合のみお取り扱いいただいております。',
    '感動を伝え、その感動が次の人に届く。それだけで広がっていく。アキノリオの広がりは感動の広がりである。',
  ],
  features: [
    { title: 'ミトコンドリア活性', desc: '細胞のエネルギー工場を活性化。肌のOSを初期化し、内側から目覚めさせます。' },
    { title: 'ケイ素（シリカ）の力', desc: '美のミネラルがコラーゲン・エラスチンの生成を極限までサポート。' },
    { title: '引き算の処方', desc: '余計な成分を一切排除。必要なものだけで構成された処方。' },
    { title: '敏感肌にも安心', desc: 'パラベンフリー・アルコールフリー。薬剤アレルギーの肌が再生した実績。' },
  ],
  ctaSvg1: '引き算の旅は、',
  ctaSvg2: 'ここから始まります',
  ctaSubline: 'Your journey of subtraction begins here',
  ctaBtn1: '21日間体験を始める',
  ctaBtn2: '商品一覧を見る',
}

const enAbout = {
  heroLabel: 'Our Story',
  heroTitle: 'The Art of Subtraction',
  founderLabel: 'Founder',
  founderTitle: 'A Vision at 20. A Hundred Closed Doors.',
  founderParagraphs: [
    'MINAKO first conceived of this idea at the age of twenty.',
    '"No foundation. No toner. No double cleanse. Not even water in the morning. One product — and the skin it was always meant to be." She carried that conviction to factory after factory across the country.',
    'The answer was always the same: "We can\'t make that." "There\'s no market for it." "It\'s never been done."',
    'She didn\'t stop. And then, finally, one factory said: "In thirty years, we have never made anything shaped like this." The ingredient supplier said: "With a concentration this high, please call it a serum."',
    'One of a kind in the world. That is how AKINORIO was born.',
  ],
  philosophyLabel: 'Philosophy',
  philosophyTitle: 'Not what you apply. What you release.',
  philosophyParagraphs: [
    'The beauty industry has always spoken in addition. New ingredients, new claims, new steps. Always more.',
    'If conventional skincare is installing an app, AKINORIO is reinstalling the operating system. Stripping away the excess. Returning the skin — that living system — to its original state.',
    'Please. Stop spending your time and money on things that offer only temporary comfort.',
    'The answer was always inside the cell. Through the power of mitochondria and silica, we help the skin remember how to be beautiful on its own. That is our answer.',
  ],
  ourWayLabel: 'Our Way',
  ourWayTitle: 'Growing without selling.',
  ourWayParagraphs: [
    'AKINORIO is now available directly through our network of partner distributors across Japan.',
    'Our principle is simple: grow without selling. Word of mouth — genuine and unprompted — is the only way we spread. Hard selling is strictly forbidden. Our partners carry AKINORIO only because they fell in love with it themselves.',
    'We pass along what moves us. That emotion reaches the next person. And that is all. The growth of AKINORIO is the growth of something felt.',
  ],
  features: [
    { title: 'Mitochondrial Activation', desc: 'Activating the cell\'s energy source. Rebooting the skin\'s operating system from within.' },
    { title: 'The Power of Silica', desc: 'The mineral of beauty — supporting collagen and elastin production to the furthest extent.' },
    { title: 'The Formula of Subtraction', desc: 'No unnecessary ingredients. Only what is truly needed — nothing more.' },
    { title: 'Safe for Sensitive Skin', desc: 'Paraben-free, alcohol-free. Documented results on skin with pharmaceutical allergies.' },
  ],
  ctaSvg1: 'Your journey of subtraction',
  ctaSvg2: 'begins here.',
  ctaSubline: '',
  ctaBtn1: 'Begin the 21-Day Trial',
  ctaBtn2: 'Browse Products',
}

// ─── contact page ──────────────────────────────────────
const jaContact = {
  label: 'Contact',
  title: 'お問い合わせ',
  description: '商品に関するご質問、お取り扱いのご相談、その他ご不明点は下記よりお気軽にご連絡ください。営業日2〜3日以内にご返信いたします。',
  emailDesc: '一般的なお問い合わせはメールにてご連絡ください',
  lineDesc: 'お急ぎの方や気軽なご相談はLINEへ',
  lineButton: 'LINEで相談する',
  officeLabel: 'Office',
  companyLink: '会社概要を見る',
}

const enContact = {
  label: 'Contact',
  title: 'Contact Us',
  description: 'For questions about our products, retail partnerships, or anything else — we welcome your message. We respond within 2 to 3 business days.',
  emailDesc: 'For general enquiries, please reach us by email.',
  lineDesc: 'For quick questions, LINE is the fastest route.',
  lineButton: 'Chat on LINE',
  officeLabel: 'Office',
  companyLink: 'About the Company',
}

// ─── company page ──────────────────────────────────────
const jaCompany = {
  label: 'Company',
  title: '会社概要',
  fields: [
    { key: 'name', label: '会社名' },
    { key: 'address', label: '所在地' },
    { key: 'email', label: 'メールアドレス' },
    { key: 'website', label: 'ウェブサイト' },
    { key: 'business', label: '事業内容' },
  ],
  contactCta: 'ご不明点やお取り扱いに関するご相談はお気軽にお問い合わせください。',
  contactBtn: 'お問い合わせはこちら',
}

const enCompany = {
  label: 'Company',
  title: 'About',
  fields: [
    { key: 'name', label: 'Company' },
    { key: 'address', label: 'Address' },
    { key: 'email', label: 'Email' },
    { key: 'website', label: 'Website' },
    { key: 'business', label: 'Business' },
  ],
  contactCta: 'For enquiries about our products or partnerships, we welcome your message.',
  contactBtn: 'Get in Touch',
}

// ─── sample page ───────────────────────────────────────
const jaSample = {
  programLabel: '14 Days Program',
  title: '21日間の引き算プログラム',
  description: 'あなたの肌と、出会い直す21日間。\nミトコンドリアのちから21日分をお届けします。',
  fields: {
    lastName: 'お名前（姓）', lastNamePh: '秋野',
    firstName: 'お名前（名）', firstNamePh: '理央',
    lastNameKana: 'フリガナ（セイ）', lastNameKanaPh: 'アキノ',
    firstNameKana: 'フリガナ（メイ）', firstNameKanaPh: 'リオ',
    postalCode: '郵便番号', postalCodePh: '123-4567',
    prefecture: '都道府県', prefectureDefault: '選択してください',
    city: '市区町村・番地', cityPh: '渋谷区神宮前1-2-3',
    addressLine1: '市区町村・番地（続き）',
    addressLine2: '建物名・部屋番号', addressLine2Ph: 'ABCマンション 101号室',
    phone: '電話番号', phonePh: '090-1234-5678',
    email: 'メールアドレス', emailPh: 'email@example.com',
    line: 'LINE表示名', linePh: 'LINE表示名（任意）',
    lineNote: 'LINEステップ配信との紐付けに使用します',
    birthDate: '生年月日',
    skinConcerns: 'お肌のお悩み（複数選択可）',
    skinOptions: ['乾燥', '毛穴', 'シミ・くすみ', 'ハリ・たるみ', '敏感肌', 'その他'],
  },
  submit: '21日間の引き算プログラムを申し込む',
  submitting: '送信中...',
  submitNote: '※ お一人様1回限りとさせていただきます',
  success: {
    title: '引き算の旅が、\n始まります。',
    p1: '3営業日以内にお届けいたします。',
    p2: '届きましたら、LINEで一言メッセージいただけると嬉しいです。',
    p3: 'お届けまでの間に、「引き算のスキンケア」という考え方について少しだけお伝えしていきますね。',
    lineBtn: 'LINEで受け取る',
    storyBtn: 'ブランドストーリーを読む',
  },
}

const enSample = {
  programLabel: '21-Day Programme',
  title: 'The 21-Day Subtraction Programme',
  description: '21 days to rediscover your skin.\nWe\'ll deliver a 21-day supply of The Power of Mitochondria.',
  fields: {
    lastName: 'Last Name', lastNamePh: 'Akinorio',
    firstName: 'First Name', firstNamePh: 'Rio',
    lastNameKana: 'Last Name (Kana)', lastNameKanaPh: 'アキノ',
    firstNameKana: 'First Name (Kana)', firstNameKanaPh: 'リオ',
    postalCode: 'Postal Code', postalCodePh: '123-4567',
    prefecture: 'Prefecture', prefectureDefault: 'Please select',
    city: 'City / Street Address', cityPh: 'Shibuya-ku Jingumae 1-2-3',
    addressLine1: 'Street Address (continued)',
    addressLine2: 'Building / Room Number', addressLine2Ph: 'ABC Mansion, Apt 101',
    phone: 'Phone Number', phonePh: '090-1234-5678',
    email: 'Email Address', emailPh: 'email@example.com',
    line: 'LINE Display Name', linePh: 'LINE display name (optional)',
    lineNote: 'Used to connect with our LINE messaging programme.',
    birthDate: 'Date of Birth',
    skinConcerns: 'Skin Concerns (select all that apply)',
    skinOptions: ['Dryness', 'Pores', 'Pigmentation / Dullness', 'Firmness / Sagging', 'Sensitive Skin', 'Other'],
  },
  submit: 'Apply for the 21-Day Programme',
  submitting: 'Sending...',
  submitNote: '* Available once per person',
  success: {
    title: 'Your journey of subtraction\nbegins.',
    p1: 'We will deliver your order within 3 business days.',
    p2: 'Once it arrives, we\'d love to hear from you on LINE.',
    p3: 'In the meantime, we\'ll share a little about the philosophy of subtraction skincare.',
    lineBtn: 'Connect on LINE',
    storyBtn: 'Read Our Story',
  },
}

// ─── products page ─────────────────────────────────────
const jaProducts = {
  duration: '使用目安',
  volume: '内容量',
  tax: '税込',
  viewDetails: '詳細を見る',
  view: '詳細',
}

const enProducts = {
  duration: 'Duration',
  volume: 'Volume',
  tax: 'incl. tax',
  viewDetails: 'View Details',
  view: 'View',
}

// ─── product detail ────────────────────────────────────
const jaProductDetail = {
  volume: '容量',
  plans: {
    sub3: { label: '定期 3ヶ月コース', badge: '初回 20%OFF', desc: '3ヶ月ごとにお届け。変更・解約はいつでもOK。', subpriceSuffix: '円（20%OFF）', subpricePrefix: '3ヶ月目以降も ' },
    sub1: { label: '定期 1ヶ月コース', badge: '初回 10%OFF', desc: '毎月お届け。変更・解約はいつでもOK。', subpriceSuffix: '円（10%OFF）', subpricePrefix: '2回目以降も ' },
    normal: { label: '通常購入', badge: '', desc: '1回のみのご購入。', subprice: '送料：550円（税込）' },
  },
  includingTax: '税込・送料無料',
  addedToCart: 'カートに追加しました ✓',
  addToCart: 'この一本を選ぶ',
  ingredients: '全成分を表示する',
  startProgram: '21日間の引き算プログラムを始める',
}

const enProductDetail = {
  volume: 'Volume',
  plans: {
    sub3: { label: '3-Month Subscription', badge: '20% off first order', desc: 'Delivered every 3 months. Cancel or change anytime.', subpriceSuffix: ' (20% off)', subpricePrefix: 'From 3rd delivery: ¥' },
    sub1: { label: '1-Month Subscription', badge: '10% off first order', desc: 'Delivered monthly. Cancel or change anytime.', subpriceSuffix: ' (10% off)', subpricePrefix: 'From 2nd delivery: ¥' },
    normal: { label: 'One-time Purchase', badge: '', desc: 'Single order.', subprice: 'Shipping: ¥550' },
  },
  includingTax: 'incl. tax · free shipping',
  addedToCart: 'Added to cart ✓',
  addToCart: 'Add to Cart',
  ingredients: 'View full ingredients',
  startProgram: 'Begin the 21-Day Programme',
}

// ─── cart ──────────────────────────────────────────────
const jaCart = {
  title: 'カート',
  empty: 'カートに商品がありません',
  browse: '商品一覧を見る',
  continueShopping: '← 買い物を続ける',
  orderSummary: 'ご注文内容',
  subtotal: '商品小計',
  shipping: '送料',
  free: '無料',
  freeShipping: '送料無料 ✓',
  freeShippingRemaining: '送料無料まで',
  total: '合計（税込）',
  checkout: '購入手続きへ（Shopify）',
  remove: '削除',
  subtotalLabel: '小計',
  shippingLabel: '送料',
  agentApplied: '代理店コード適用中',
  agentRelease: '解除',
  agentHint: '+ 代理店コードをお持ちの方',
  agentPlaceholder: '代理店コード',
  agentApply: '適用',
  drawerTitle: 'カート',
  drawerItems: '点',
  drawerBrowse: '← 商品を探す',
  drawerCheckout: 'Shopifyで購入手続きへ',
  drawerSecurity: '🔒 SSL暗号化 · Shopify決済 · クレジットカード対応',
  decreaseQty: '数量を減らす',
  increaseQty: '数量を増やす',
}

const enCart = {
  title: 'Cart',
  empty: 'Your cart is empty.',
  browse: 'Browse Products',
  continueShopping: '← Continue Shopping',
  orderSummary: 'Order Summary',
  subtotal: 'Subtotal',
  shipping: 'Shipping',
  free: 'Free',
  freeShipping: 'Free Shipping ✓',
  freeShippingRemaining: 'Away from free shipping',
  total: 'Total (incl. tax)',
  checkout: 'Proceed to Checkout',
  remove: 'Remove',
  subtotalLabel: 'Subtotal',
  shippingLabel: 'Shipping',
  agentApplied: 'Partner code applied',
  agentRelease: 'Remove',
  agentHint: '+ Have a partner code?',
  agentPlaceholder: 'Partner code',
  agentApply: 'Apply',
  drawerTitle: 'Cart',
  drawerItems: ' items',
  drawerBrowse: '← Browse Products',
  drawerCheckout: 'Proceed to Checkout via Shopify',
  drawerSecurity: '🔒 SSL Encrypted · Shopify Checkout · Card Payments Accepted',
  decreaseQty: 'Decrease quantity',
  increaseQty: 'Increase quantity',
}

const ja = {
  ...jaBase,
  about: jaAbout,
  contact: jaContact,
  company: jaCompany,
  sample: jaSample,
  products: jaProducts,
  productDetail: jaProductDetail,
  cart: jaCart,
}

const en = {
  ...enBase,
  about: enAbout,
  contact: enContact,
  company: enCompany,
  sample: enSample,
  products: enProducts,
  productDetail: enProductDetail,
  cart: enCart,
}

export const translations: Record<Lang, typeof ja> = { ja, en }
