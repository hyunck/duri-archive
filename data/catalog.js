const CATALOG = [

  // ── 종중 기록 ────────────────────────────────────────────
  {
    id: "jongga-1930",
    call_number: "KJ-1930-001",
    title_hanja: "宗家實錄",
    title_korean: "종가실록",
    author: "김규하 (金圭夏)",
    year: "1930",
    year_display: "昭和5年(1930) 庚辰",
    category: "종중 기록",
    digitized: true,
    total_pages: 38,
    digitized_pages: 19,
    // 1冊
    classification: "史部 雜史類",
    summary: "소화 5년(1930년) 종손 김규하가 편찬한 경주김씨 상촌공파 두리종중의 내력과 역대 종손의 행적을 기록한 종가 실록."
  },
  {
    id: "hwasu",
    title_hanja: "花樹○",
    title_korean: "화수○",
    author: "미상",
    year: "",
    year_display: "",
    category: "종중 기록",
    digitized: false,
    classification: "史部 雜史類"
  },
  {
    id: "munhyeonrok",
    title_hanja: "東國文獻錄",
    title_korean: "동국문헌록",
    author: "미상",
    year: "",
    year_display: "",
    category: "사서·전기",
    digitized: false,
    classification: "史部 雜史類"
  },

  // ── 호적·관문서 ──────────────────────────────────────────
  {
    id: "hoju-1843", // 미상
    title_hanja: "金胄衡戶口單子",
    title_korean: "김주형호구단자",
    author: "미상",
    year: "1843",
    year_display: "道光23年(1843)",
    category: "호적·관문서",
    digitized: false,
    classification: "史部 政書類"
  },
  {
    id: "hoju-1861", // 미상
    title_hanja: "金胄衡戶口單子",
    title_korean: "김주형호구단자",
    author: "미상",
    year: "1861",
    year_display: "咸豊11年(1861)",
    category: "호적·관문서",
    digitized: false,
    classification: "史部 政書類"
  },
  {
    id: "hojeok-yangyang", // 미상
    title_hanja: "江原道襄陽郡縣南面戶籍",
    title_korean: "강원도 양양군 현남면 호적",
    author: "미상",
    year: "",
    year_display: "대한제국기",
    category: "호적·관문서",
    digitized: false,
    // 15張
    classification: "史部 政書類"
  },
  {
    id: "jeondap-1903", // 미상
    title_hanja: "田畓關係",
    title_korean: "대한제국 전답관계",
    author: "미상",
    year: "1903",
    year_display: "光武7年(1903)",
    category: "호적·관문서",
    digitized: false,
    // 15張
    classification: "史部 政書類"
  },
  {
    id: "sigyeon", // 미상
    title_hanja: "試券",
    title_korean: "조선후기 시권",
    author: "미상",
    year: "",
    year_display: "조선 후기",
    category: "호적·관문서",
    digitized: false,
    classification: "史部 政書類"
  },
  {
    id: "buwi-rok", // 미상
    title_hanja: "賻慰(義)錄",
    title_korean: "부위(의)록",
    author: "미상",
    year: "",
    year_display: "丙申年 6月",
    category: "호적·관문서",
    digitized: false,
    classification: "史部 政書類"
  },
  {
    id: "jise-myeonggi", // 미상
    title_hanja: "地稅名寄帳 斗里",
    title_korean: "지세명기장 두리",
    author: "미상",
    year: "",
    year_display: "근대",
    category: "호적·관문서",
    digitized: false,
    classification: "史部 政書類"
  },
  {
    id: "gyeongui-1", // 필사본
    title_hanja: "經義問對",
    title_korean: "경의문대",
    author: "김규하 (金圭夏)",
    year: "",
    year_display: "조선 말기",
    category: "호적·관문서",
    digitized: false,
    note: "幼學 金圭夏 年二十 本慶州 居襄陽 기재. 붉은 글씨 次上 표기. 과거 시험지 추정.",
    classification: "史部 政書類"
  },
  {
    id: "gyeongui-2", // 필사본
    title_hanja: "經義問對",
    title_korean: "경의문대",
    author: "미상",
    year: "",
    year_display: "조선 말기",
    category: "호적·관문서",
    digitized: false,
    note: "이름·붉은 글씨 없음. 과거 시험지 또는 모범 답안 추정.",
    classification: "史部 政書類"
  },

  // ── 족보 ────────────────────────────────────────────────
  {
    id: "gyerim-pabo", // 미상
    title_hanja: "鷄林金氏始祖記 · 慶州金氏派譜",
    title_korean: "계림김씨시조기 · 경주김씨파보",
    author: "미상",
    year: "",
    year_display: "1883~1889년 추정",
    category: "족보",
    digitized: false,
    classification: "史部 譜牒類"
  },
  {
    id: "donggukmansengbo", // 미상
    title_hanja: "東國萬姓譜",
    title_korean: "동국만성보",
    author: "미상",
    year: "",
    year_display: "",
    category: "족보",
    digitized: false,
    classification: "史部 譜牒類"
  },
  {
    id: "gyeongju-dongwon", // 미상
    title_hanja: "慶州金氏同源錄",
    title_korean: "경주김씨동원록",
    author: "미상",
    year: "",
    year_display: "",
    category: "족보",
    digitized: false,
    classification: "史部 譜牒類"
  },

  // ── 사서·전기 ────────────────────────────────────────────
  {
    id: "donggukyeokdae-1901", // 인쇄본
    title_hanja: "東國歷代史略",
    title_korean: "동국역대사략",
    author: "미상",
    year: "1901",
    year_display: "光武5年(1901)",
    category: "사서·전기",
    digitized: false,
    // 卷一
    classification: "史部 編年類"
  },
  {
    id: "tongam", // 미상
    title_hanja: "通鑑",
    title_korean: "통감",
    author: "미상",
    year: "",
    year_display: "",
    category: "사서·전기",
    digitized: false,
    // 卷8·卷14
    classification: "史部 編年類"
  },
  {
    id: "haedong-yeoksa", // 미상
    title_hanja: "海東繹史",
    title_korean: "해동역사",
    author: "한치윤 (韓致奫)",
    year: "",
    year_display: "純祖年間 (19세기 초)",
    category: "사서·전기",
    digitized: false,
    // 第2冊
    classification: "史部 雜史類"
  },
  {
    id: "donggukyeokdae-chongmok", // 미상
    title_hanja: "東國歷代總目",
    title_korean: "동국역대총목",
    author: "미상",
    year: "",
    year_display: "",
    category: "사서·전기",
    digitized: false,
    classification: "史部 編年類"
  },
  {
    id: "jingbirok", // 미상
    title_hanja: "懲毖錄",
    title_korean: "징비록",
    author: "류성룡 (柳成龍)",
    year: "",
    year_display: "조선 중기",
    category: "사서·전기",
    digitized: false,
    classification: "史部 雜史類"
  },
  {
    id: "toegye-eonhaengrok", // 미상
    title_hanja: "退溪先生言行錄",
    title_korean: "퇴계선생언행록",
    author: "미상",
    year: "",
    year_display: "조선 후기",
    category: "사서·전기",
    digitized: false,
    // 4卷
    classification: "史部 傳記類"
  },
  {
    id: "yeollyeo-silgisul", // 인쇄본
    title_hanja: "燃藜室記述",
    title_korean: "연려실기술",
    author: "이긍익 (李肯翊)",
    year: "",
    year_display: "조선 후기",
    category: "사서·전기",
    digitized: false,
    // 1권; 3책(7~9권); 5책(13~15권)
    classification: "史部 雜史類"
  },
  {
    id: "dongguktongam", // 인쇄본
    title_hanja: "東國通鑑",
    title_korean: "동국통감",
    author: "미상",
    year: "",
    year_display: "",
    category: "사서·전기",
    digitized: false,
    classification: "史部 編年類"
  },

  // ── 경전·유학 ────────────────────────────────────────────
  {
    id: "yonghak-yeoni", // 미상
    title_hanja: "庸學演義",
    title_korean: "용학연의",
    author: "미상",
    year: "",
    year_display: "",
    category: "경전·유학",
    digitized: false,
    classification: "經部 四書類"
  },
  {
    id: "juyeok-eonhae", // 미상
    title_hanja: "周易諺解",
    title_korean: "주역언해",
    author: "미상",
    year: "",
    year_display: "조선 중기",
    category: "경전·유학",
    digitized: false,
    classification: "經部 易類"
  },
  {
    id: "juyeok-jeonui", // 미상
    title_hanja: "周易傳義大全",
    title_korean: "주역전의대전",
    author: "미상",
    year: "",
    year_display: "",
    category: "경전·유학",
    digitized: false,
    classification: "經部 易類"
  },
  {
    id: "daehak", // 미상
    title_hanja: "大學",
    title_korean: "대학",
    author: "미상",
    year: "",
    year_display: "",
    category: "경전·유학",
    digitized: false,
    classification: "經部 四書類"
  },
  {
    id: "yegyeong", // 미상
    title_hanja: "禮徑",
    title_korean: "예경",
    author: "미상",
    year: "",
    year_display: "",
    category: "경전·유학",
    digitized: false,
    classification: "經部 禮類"
  },
  {
    id: "gyeongmong-yogyeol", // 미상
    title_hanja: "擊蒙要訣",
    title_korean: "격몽요결",
    author: "이이 (李珥)",
    year: "1577",
    year_display: "宣祖10年(1577) 刊本",
    category: "경전·유학",
    digitized: false,
    classification: "子部 儒家類"
  },
  {
    id: "sohak-jipju", // 미상
    title_hanja: "小學諸家集註",
    title_korean: "소학제가집주",
    author: "미상",
    year: "",
    year_display: "",
    category: "경전·유학",
    digitized: false,
    // 5卷
    classification: "經部 四書類"
  },
  {
    id: "hunmong-jahoe", // 미상
    title_hanja: "訓蒙字會",
    title_korean: "훈몽자회",
    author: "최세진 (崔世珍)",
    year: "1527",
    year_display: "中宗22年(1527) 刊本",
    category: "경전·유학",
    digitized: false,
    classification: "子部 小學類"
  },
  {
    id: "jungyong", // 필사본 1책 + 활자본 1책
    title_hanja: "中庸",
    title_korean: "중용",
    author: "미상",
    year: "",
    year_display: "",
    category: "경전·유학",
    digitized: false,
    // 필사본 1책·활자본 1책
    classification: "經部 四書類"
  },
  {
    id: "seojeon-daejeon", // 활자본
    title_hanja: "書傳大全",
    title_korean: "서전대전",
    author: "미상",
    year: "",
    year_display: "",
    category: "경전·유학",
    digitized: false,
    // 卷4·卷10
    classification: "經部 書類"
  },
  {
    id: "seojeon-eonhae", // 필사본
    title_hanja: "書傳諺解",
    title_korean: "서전언해",
    author: "미상",
    year: "",
    year_display: "",
    category: "경전·유학",
    digitized: false,
    classification: "經部 書類"
  },
  {
    id: "chunchu-jwajeon", // 인쇄본
    title_hanja: "春秋左傳",
    title_korean: "춘추좌전",
    author: "미상",
    year: "",
    year_display: "",
    category: "경전·유학",
    digitized: false,
    // 卷9~11·卷25
    classification: "經部 春秋類"
  },
  {
    id: "yegi", // 인쇄본
    title_hanja: "禮記",
    title_korean: "예기",
    author: "미상",
    year: "",
    year_display: "",
    category: "경전·유학",
    digitized: false,
    // 卷5·卷14~15
    classification: "經部 禮類"
  },
  {
    id: "sangseobojeon", // 인쇄본
    title_hanja: "尙書補傳",
    title_korean: "상서보전",
    author: "미상",
    year: "",
    year_display: "",
    category: "경전·유학",
    digitized: false,
    classification: "經部 書類"
  },
  {
    id: "sohakhae", // 인쇄본
    title_hanja: "小學解",
    title_korean: "소학해",
    author: "미상",
    year: "",
    year_display: "",
    category: "경전·유학",
    digitized: false,
    classification: "經部 四書類"
  },
  {
    id: "garye-jeunghae", // 인쇄본
    title_hanja: "家禮增解",
    title_korean: "가례증해",
    author: "미상",
    year: "",
    year_display: "",
    category: "경전·유학",
    digitized: false,
    classification: "經部 禮類"
  },
  {
    id: "sarye-pyeonnam", // 인쇄본
    title_hanja: "四禮便覽",
    title_korean: "사례편람",
    author: "미상",
    year: "",
    year_display: "조선 후기",
    category: "경전·유학",
    digitized: false,
    classification: "經部 禮類"
  },
  {
    id: "noneo-yeoni", // 필사본
    title_hanja: "論語演義",
    title_korean: "논어연의",
    author: "미상",
    year: "",
    year_display: "",
    category: "경전·유학",
    digitized: false,
    classification: "經部 四書類"
  },
  {
    id: "noneo-eonhae", // 필사본
    title_hanja: "論語諺解",
    title_korean: "논어언해",
    author: "미상",
    year: "",
    year_display: "",
    category: "경전·유학",
    digitized: false,
    classification: "經部 四書類"
  },
  {
    id: "maengja-yeoni", // 필사본
    title_hanja: "孟子演義",
    title_korean: "맹자연의",
    author: "미상",
    year: "",
    year_display: "",
    category: "경전·유학",
    digitized: false,
    classification: "經部 四書類"
  },
  {
    id: "maengja-jipju", // 인쇄본
    title_hanja: "孟子集註大全",
    title_korean: "맹자집주대전",
    author: "미상",
    year: "",
    year_display: "",
    category: "경전·유학",
    digitized: false,
    classification: "經部 四書類"
  },
  {
    id: "maenghae", // 활자본
    title_hanja: "孟解",
    title_korean: "맹해 (맹자언해)",
    author: "미상",
    year: "",
    year_display: "",
    category: "경전·유학",
    digitized: false,
    classification: "經部 四書類"
  },
  {
    id: "maengja", // 활자본
    title_hanja: "孟子",
    title_korean: "맹자",
    author: "미상",
    year: "",
    year_display: "",
    category: "경전·유학",
    digitized: false,
    classification: "經部 四書類"
  },
  {
    id: "sijeon-daejeon", // 활자본
    title_hanja: "詩傳大全",
    title_korean: "시전대전",
    author: "미상",
    year: "",
    year_display: "",
    category: "경전·유학",
    digitized: false,
    classification: "經部 詩類"
  },
  {
    id: "sigyeong-eonhae", // 활자본
    title_hanja: "詩經諺解",
    title_korean: "시경언해",
    author: "미상",
    year: "",
    year_display: "",
    category: "경전·유학",
    digitized: false,
    classification: "經部 詩類"
  },
  {
    id: "iryun-haengsildo", // 활자본
    title_hanja: "二倫行實圖",
    title_korean: "이륜행실도",
    author: "미상",
    year: "",
    year_display: "조선 중기",
    category: "경전·유학",
    digitized: false,
    classification: "子部 儒家類"
  },
  {
    id: "cheonjamun", // 필사본
    title_hanja: "千字文",
    title_korean: "천자문",
    author: "미상",
    year: "",
    year_display: "",
    category: "경전·유학",
    digitized: false,
    classification: "子部 小學類"
  },

  // ── 문집·기문 ────────────────────────────────────────────
  {
    id: "yeongbindaegi", // 미상
    title_hanja: "迎賓臺記",
    title_korean: "영빈대기",
    author: "미상",
    year: "",
    year_display: "",
    category: "문집·기문",
    digitized: false,
    classification: "集部 記類"
  },
  {
    id: "dusanjeongi", // 미상
    title_hanja: "斗山亭記",
    title_korean: "두산정기",
    author: "미상",
    year: "",
    year_display: "",
    category: "문집·기문",
    digitized: false,
    classification: "集部 記類"
  },
  {
    id: "hanhweonrok", // 미상
    title_hanja: "寒喧錄 簡牘",
    title_korean: "한훤록 간독",
    author: "미상",
    year: "",
    year_display: "",
    category: "문집·기문",
    digitized: false,
    // 卷之乾
    classification: "集部 別集類"
  },
  {
    id: "bangye-jip", // 미상
    title_hanja: "半溪集",
    title_korean: "반계집",
    author: "미상",
    year: "",
    year_display: "",
    category: "문집·기문",
    digitized: false,
    classification: "集部 別集類"
  },
  {
    id: "seosa-asong", // 미상
    title_hanja: "書社雅誦",
    title_korean: "서사아송",
    author: "미상",
    year: "",
    year_display: "",
    category: "문집·기문",
    digitized: false,
    classification: "集部 總集類"
  },
  {
    id: "togwan-chil", // 미상
    title_hanja: "吐觀 - 七言李白",
    title_korean: "토관 - 칠언이백",
    author: "미상",
    year: "",
    year_display: "",
    category: "문집·기문",
    digitized: false,
    classification: "集部 總集類"
  },
  {
    id: "haseok-gwanseorok", // 미상
    title_hanja: "霞石謾稿 關西錄",
    title_korean: "하석만고 관서록",
    author: "미상",
    year: "",
    year_display: "",
    category: "문집·기문",
    digitized: false,
    classification: "集部 別集類"
  },
  {
    id: "gandok-jeongnyo", // 미상
    title_hanja: "簡牘精要",
    title_korean: "간독정요",
    author: "미상",
    year: "",
    year_display: "",
    category: "문집·기문",
    digitized: false,
    classification: "集部 總集類"
  },
  {
    id: "eobusa", // 필사본
    title_hanja: "漁父辭 外",
    title_korean: "어부사 외",
    author: "미상",
    year: "",
    year_display: "",
    category: "문집·기문",
    digitized: false,
    note: "책 제목 없음. 어부사(漁父辭), 추월행(秋月行) 등 여러 글 수록.",
    classification: "集部 總集類"
  },
  {
    id: "samunjip", // 필사본
    title_hanja: "三雲集",
    title_korean: "삼운집",
    author: "미상",
    year: "",
    year_display: "",
    category: "문집·기문",
    digitized: false,
    classification: "集部 別集類"
  },
  {
    id: "sagye-jeonseo", // 인쇄본
    title_hanja: "沙溪全書",
    title_korean: "사계전서",
    author: "김장생 (金長生)",
    year: "",
    year_display: "조선 후기",
    category: "문집·기문",
    digitized: false,
    // 1·3·5·9·10·19·22·24책
    classification: "集部 別集類"
  },
  {
    id: "okrumong", // 인쇄본
    title_hanja: "懸吐 玉樓夢",
    title_korean: "현토 옥루몽",
    author: "남영로 (南永魯)",
    year: "",
    year_display: "조선 말기",
    category: "문집·기문",
    digitized: false,
    classification: "集部 小說類"
  },
  {
    id: "togwan-pilsa", // 필사본 2책
    title_hanja: "吐觀",
    title_korean: "토관",
    author: "미상",
    year: "",
    year_display: "",
    category: "문집·기문",
    digitized: false,
    // 2冊 (토관 - 칠언이백 인쇄본과 별개)
    classification: "集部 總集類"
  },
  {
    id: "songja-daejeon", // 활자본
    title_hanja: "宋子大全",
    title_korean: "송자대전",
    author: "송시열 (宋時烈)",
    year: "",
    year_display: "조선 후기",
    category: "문집·기문",
    digitized: false,
    classification: "集部 別集類"
  },

  // ── 의서 ─────────────────────────────────────────────────
  {
    id: "bangyak-hapyeon", // 미상
    title_hanja: "方藥合編",
    title_korean: "방약합편",
    author: "미상",
    year: "",
    year_display: "조선 말기",
    category: "의서",
    digitized: false,
    classification: "子部 醫家類"
  },
  {
    id: "jeungbo-baekbyeong", // 미상
    title_hanja: "增補百病辨證錄",
    title_korean: "증보백병변증록",
    author: "미상",
    year: "",
    year_display: "",
    category: "의서",
    digitized: false,
    // 卷1~4
    classification: "子部 醫家類"
  },
  {
    id: "jeungbo-danbang", // 미상
    title_hanja: "增補單方新編",
    title_korean: "증보단방신편",
    author: "미상",
    year: "",
    year_display: "",
    category: "의서",
    digitized: false,
    classification: "子部 醫家類"
  },
  {
    id: "jeungbo-byeonjungrok", // 인쇄본
    title_hanja: "增補辨證錄",
    title_korean: "증보변증록",
    author: "미상",
    year: "",
    year_display: "",
    category: "의서",
    digitized: false,
    // 卷7~13
    classification: "子部 醫家類"
  },
  {
    id: "jeungbo-yuyu", // 인쇄본
    title_hanja: "增補幼幼集成",
    title_korean: "증보유유집성",
    author: "미상",
    year: "",
    year_display: "",
    category: "의서",
    digitized: false,
    classification: "子部 醫家類"
  },
  {
    id: "dongibogam", // 인쇄본
    title_hanja: "東醫寶鑑",
    title_korean: "동의보감",
    author: "허준 (許浚)",
    year: "",
    year_display: "光海君年間 이후 刊本",
    category: "의서",
    digitized: false,
    // 上卷
    classification: "子部 醫家類"
  },

  // ── 풍수·도가 ────────────────────────────────────────────
  {
    id: "tonghyeonrok", // 미상
    title_hanja: "通玄錄",
    title_korean: "통현록",
    author: "미상",
    year: "",
    year_display: "",
    category: "풍수·도가",
    digitized: false,
    classification: "子部 術數類"
  },
  {
    id: "jiri-ogyeol", // 미상
    title_hanja: "地理五訣",
    title_korean: "지리오결",
    author: "미상",
    year: "",
    year_display: "",
    category: "풍수·도가",
    digitized: false,
    // 卷1~8
    classification: "子部 術數類"
  },
  {
    id: "yangtaek-samyo", // 미상
    title_hanja: "陽宅三要",
    title_korean: "양택삼요",
    author: "미상",
    year: "",
    year_display: "",
    category: "풍수·도가",
    digitized: false,
    // 卷1~4
    classification: "子部 術數類"
  },
  {
    id: "cheonmi-tongseo", // 미상
    title_hanja: "闡微通書",
    title_korean: "천미통서",
    author: "미상",
    year: "",
    year_display: "",
    category: "풍수·도가",
    digitized: false,
    classification: "子部 術數類"
  },
  {
    id: "isa-hyeonmu", // 미상
    title_hanja: "二師全書 玄武經",
    title_korean: "이사전서 현무경",
    author: "미상",
    year: "",
    year_display: "",
    category: "풍수·도가",
    digitized: false,
    classification: "子部 道家類"
  },
  {
    id: "namhwa-cholyao", // 미상
    title_hanja: "南華經撮要",
    title_korean: "남화경촬요",
    author: "미상",
    year: "",
    year_display: "",
    category: "풍수·도가",
    digitized: false,
    classification: "子部 道家類"
  },
  {
    id: "jeonggyo-jiri", // 인쇄본
    title_hanja: "精校人子須知",
    title_korean: "정교지리인자수지",
    author: "미상",
    year: "",
    year_display: "",
    category: "풍수·도가",
    digitized: false,
    classification: "子部 術數類"
  },
  {
    id: "hyeopgi-byeonbang", // 인쇄본
    title_hanja: "校精 協紀辨方書",
    title_korean: "교정 협기변방서",
    author: "미상",
    year: "",
    year_display: "",
    category: "풍수·도가",
    digitized: false,
    // 卷4~7·12~14·16~19·33~36
    classification: "子部 術數類"
  },
  {
    id: "manseoryeok", // 인쇄본
    title_hanja: "原本 萬歲曆",
    title_korean: "원본 만세력",
    author: "미상",
    year: "",
    year_display: "",
    category: "풍수·도가",
    digitized: false,
    classification: "子部 術數類"
  },
  {
    id: "sanri-japgi", // 필사본
    title_hanja: "山理雜記帳",
    title_korean: "산리잡기장",
    author: "미상",
    year: "",
    year_display: "",
    category: "풍수·도가",
    digitized: false,
    classification: "子部 術數類"
  },
  {
    id: "odu-tongseo", // 인쇄본
    title_hanja: "鰲頭通書大全",
    title_korean: "오두통서대전",
    author: "미상",
    year: "",
    year_display: "",
    category: "풍수·도가",
    digitized: false,
    classification: "子部 術數類"
  },

  // ── 유서류 ───────────────────────────────────────────────
  {
    id: "samun-yuchwi", // 미상
    title_hanja: "事文類聚",
    title_korean: "사문유취",
    author: "미상",
    year: "",
    year_display: "",
    category: "유서류",
    digitized: false,
    // 乾
    classification: "子部 類書類"
  },
  {
    id: "jeonun-okpyeon", // 인쇄본
    title_hanja: "全韻玉篇",
    title_korean: "전운옥편",
    author: "미상",
    year: "",
    year_display: "조선 후기",
    category: "유서류",
    digitized: false,
    // 上·下卷
    classification: "子部 類書類"
  },
  {
    id: "gyujang-jeonun", // 활자본
    title_hanja: "奎章全韻單",
    title_korean: "규장전운단",
    author: "미상",
    year: "",
    year_display: "조선 후기",
    category: "유서류",
    digitized: false,
    note: "시 창작 시 운자 검색용 사전.",
    classification: "子部 類書類"
  },
  {
    id: "daedong-unbu", // 미상
    title_hanja: "大東韻府群玉",
    title_korean: "대동운부군옥",
    author: "미상",
    year: "",
    year_display: "조선 후기",
    category: "유서류",
    digitized: false,
    classification: "子部 類書類"
  },
  {
    id: "jeongo-daebang", // 인쇄본
    title_hanja: "典故大方",
    title_korean: "전고대방",
    author: "미상",
    year: "",
    year_display: "",
    category: "유서류",
    digitized: false,
    classification: "子部 類書類"
  },

  // ── 지도 ─────────────────────────────────────────────────
  {
    id: "yangyang-yakdo", // 미상
    title_hanja: "襄陽案山法守峙略圖",
    title_korean: "양양안산법수치약도",
    author: "미상",
    year: "",
    year_display: "",
    category: "지도·도면",
    digitized: false,
    classification: "史部 地理類"
  },
  {
    id: "chulwon-silchukdo", // 필사본
    title_hanja: "出願區域實測圖",
    title_korean: "출원구역실측도",
    author: "미상",
    year: "",
    year_display: "일제강점기",
    category: "지도·도면",
    digitized: false,
    // 3張
    classification: "史部 地理類"
  },
  {
    id: "minyu-sanlim", // 필사본
    title_hanja: "民有山林略圖",
    title_korean: "민유산림약도",
    author: "미상",
    year: "",
    year_display: "일제강점기",
    category: "지도·도면",
    digitized: false,
    // 2張
    classification: "史部 地理類"
  },

  // ── 기타 ─────────────────────────────────────────────────
  {
    id: "gwangmunhoe-ad", // 미상
    title_hanja: "朝鮮光文會 廣告文",
    title_korean: "조선광문회 광고문",
    author: "조선광문회 (朝鮮光文會)",
    year: "",
    year_display: "1910년대",
    category: "기타",
    digitized: false,
    classification: "史部 雜史類"
  },
  {
    id: "taepyeong-sucho", // 미상
    title_hanja: "太平隨抄",
    title_korean: "태평수초",
    author: "미상",
    year: "",
    year_display: "",
    category: "기타",
    digitized: false,
    classification: "子部 雜家類"
  },
  {
    id: "munjajang", // 필사본 추정
    title_hanja: "文字帳",
    title_korean: "문자장",
    author: "미상",
    year: "",
    year_display: "",
    category: "기타",
    digitized: false,
    note: "표지만 확인. 내용 미상.",
    classification: "미분류"
  },
  {
    id: "singanje-samnyak", // 필사본
    title_hanja: "新刊增補三略諺解",
    title_korean: "신간증보삼략 언해",
    author: "미상",
    year: "",
    year_display: "",
    category: "기타",
    digitized: false,
    // 卷之上
    classification: "子部 兵家類"
  },
  {
    id: "muhugol", // 필사본
    title_hanja: "武侯訣",
    title_korean: "무후결",
    author: "미상",
    year: "",
    year_display: "",
    category: "기타",
    digitized: false,
    classification: "子部 術數類"
  }
];
