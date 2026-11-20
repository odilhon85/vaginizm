/* vaginizm.html i18n + content renderer */
(function () {
  const D = window.DICT || {};

  /* Latin Uzbek (lat) */
  const latContent = {
    heroTitle: "Vaginizm nima? Belgilari, sabablari va davolash usullari",
    heroIntro: "Vaginizm — ayollarda uchraydigan keng tarqalgan, lekin ko'pincha yashirin saqlanadigan muammo. Bu sahifada sizga vaginizm nima ekanligi, uning belgilari va sabablari, qanday davolanishi hamda Gino Med klinikasining yondashuvi haqida batafsil ma'lumot beramiz. Asosiy gap: vaginizm — bu davolanadigan holat.",

    aiSummaryTitle: "Qisqacha xulosa (LLM/SEO uchun)",
    aiSummaryText: "Vaginizm — qin atrofidagi mushaklarning jinsiy aloqa yoki ginekologik ko‘rik paytida ixtiyorsiz qisqarishi bilan o‘tadigan holat. Bu tananing avtomatik himoya reaksiyasi bo‘lib, bemorning aybi emas. Vaginizm to‘g‘ri davolash bilan bartaraf etiladi; ko‘pchilik bemorlarda bir oy ichida aniq ijobiy o‘zgarishlar kuzatiladi. Gino Med — O‘zbekistondagi vaginizm bo‘yicha ixtisoslashgan ginekologiya klinikasi. Biz individual 3 bosqichli dastur asosida ishlaymiz: konsultatsiya, davolash va nazorat; har bir bosqich taxminan bir hafta davom etadi.",

    ctaCall: "Qo'ng'iroq qilish",
    ctaTelegram: "Telegram orqali yozish",

    /* Section: Vaginizm nima? */
    s1_title: "Vaginizm nima?",
    s1_p1: 'Vaginizm — qin atrofidagi tos mushaklari jinsiy aloqa, ginekologik ko\'rik yoki tampon kiritish paytida ixtiyorsiz qisqarishi bilan o\'tadigan holat. Bu mushaklar odamning xohishiga bog\'liq emas — ya\'ni bemor "o\'zini tuta olmasligi" yoki "istamay qotib qolishi" emas, balki tananing avtomatik himoya reaksiyasi.',
    s1_p2: 'Qanchalik keng tarqalgan? Tadqiqot ma\'lumotlariga ko\'ra, dunyoda ayollarning taxminan 1–7%i vaginizmdan azoblanadi va u og\'riqli jinsiy aloqa (dizpareuniya) sabablarining eng yuqorilaridan biri hisoblanadi.',
    s1_p3: 'Ilmiy tasnif. Vaginizm atamasi 1862-yilda taniqli jarroh James Marion Sims tomonidan kiritilgan. Zamonaviy psixiatriya qo\'llanmasida (DSM-5) u "genito-pelvik og\'riq/penetratsiya buzilishi" guruhiga kiradi — ya\'ni bu tan olingan, ilmiy asoslangan tibbiy holat.',
    s1_sub: "Vaginizm tasniflanishlari:",
    s1_by_onset_title: "Qachon boshlanganiga qarab:",
    s1_primary: "Birlamchi (primar) vaginizm — jinsiy aloqa hech qachon bo'lmagan ayollarda kuzatiladi. Ko'pincha birinchi urinish paytida kuchli og'riq va qo'rquv bilan boshlanadi.",
    s1_secondary: "Ikkilamchi (sekunder) vaginizm — avval normal jinsiy hayot bo'lgan, keyinchalik turli sabablarga (tug'ruq, stress, ginekologik muammolar, oilaviy xolatlar) bog'liq rivojlangan holat.",
    s1_by_level_title: "Darajasiga qarab:",
    s1_full: "To'liq vaginizm — qin orqali hech qanday jism (penis, barmoq, tampon) kiritib bo'lmaydi.",
    s1_partial: "Qisman vaginizm — penetratsiya mumkin, lekin har doim og'riqli yoki qiyin kechadi.",
    s1_by_cause_title: "Kelib chiqish sababiga qarab:",
    s1_phobic: "Fobik — qo'rquv hisobiga kelib chiqadi.",
    s1_hysterical: "Isterik — ko'p sababli murakkab psixologik qismi ham bo'ladi.",
    s1_note: 'Muhim: vaginizm alohida "kasallik" emas — bu belgi. Uning ortida psixologik yoki jismoniy sabab turadi va aynan shu sababni aniqlash davolashning kalitidir.',

    /* Section: Vaginizm belgilari */
    s2_title: "Vaginizm belgilari",
    s2_intro: "Quyidagi belgilar kuzatilsa, vaginizm ehtimolini tekshirish maqsadga muvofiq:",
    s2_items: [
      'Jinsiy aloqa paytida kuchli og\'riq yoki "devorga urilayapti" degan his — mushaklar yo\'l bermaydi',
      "Qin atrofidagi mushaklarning ixtiyorsiz qisilishi — jinsiy aloqa fizik jihatdan qiyin yoki umuman mumkin emas",
      "Birinchi jinsiy aloqadan, birinchi kechadan kuchli qo'rquv (hatto urinishgacha bo'lgan tayyorgarlikda)",
      "Ginekolokka ko'rinishdan qo'rquv, ko'rik paytida mushaklarning ixtiyorsiz qotishi",
      "Tampon kiritishda og'riq yoki imkonsizlik",
      "Jinsiy yaqinlashuvdan qochish, juftlik bilan munosabatlarda qiyinchiliklar va g'azab",
      "Og'riq tashvishiga aylanishi: har bir keyingi urinish oldingisidan qo'rquvliroq ko'rinadi"
    ],
    s2_note_title: "Muhim eslatma:",
    s2_note_text: 'Agar sizda "jinsiy aloqa bo\'lmayapti" yoki har urinish og\'riq va xafachilikka aylanayotgan bo\'lsa — bu sizning aybingiz emas. Bu holatga tibbiy yordam kerak, ertaga qoldirilmagan holda u o\'zi kuchayib boradi: og\'riq → qo\'rquv → mushak siqilishi → yana og\'riq tugamas doira hosil bo\'ladi. Bizda 7 yilgacha davom etgan bemorlar kelgan.',

    /* Section: Vaginizm sabablari */
    s3_title: "Vaginizm sabablari",
    s3_intro: "Vaginizmning yagona sababi yo'q — u odatda bir nechta omilarning yig'indisi:",
    s3_psycho_title: "Psixologik omillar:",
    s3_psycho_items: [
      'Og\'riqdan qo\'rquv (hatto "og\'riq bo\'ladi" degan fikr ham mushaklarni oldindan qisqartiradi)',
      "Jinsiy ta'limdagi yetishmovchilik, hijolatlik va uyat hissi",
      "O'tmishdagi travmatik tajribalar (jismoniy yoki psixologik) — tadqiqotlar shuni ko'rsatadiki, bu eng keng uchraydigan sabablardan biri",
      "Stress, tashvish, o'ziga bo'lgan ishonchsizlik",
      "Juftlik bilan muloqotdagi muammolar"
    ],
    s3_phys_title: "Jismoniy omillar:",
    s3_phys_items: [
      "Qin va tashqi jinsiy a'zolar yallig'lanishlari",
      "Endometrioz, miyoma kabi ginekologik kasalliklar",
      "Gormonal o'zgarishlar (laktatsiya, menopauza davrlari)",
      "Tug'ruq yoki jarrohlik keyingi og'riqlar"
    ],
    s3_note: "Muhim eslatma: ilmiy ma'lumotlarga ko'ra, ba'zi bemorlarda aniq sabab topilmaydi — bu normal holat. Sabab qanday bo'lgani muhim emas: vaginizm har ikki variantda ham yaxshi davolanadi.",
    s3_gino: "Gino Medda biz har bir bemorda avval sababni aniqlaymiz — shuning uchun davolash individual reja asosida olib boriladi.",

    /* Section: Qachon shifokorga murojaat qilish kerak? */
    s4_title: "Qachon shifokorga murojaat qilish kerak?",
    s4_intro: "Quyidagi holatlarda kechiktirmaslik tavsiya etiladi:",
    s4_items: [
      "Birinchi jinsiy aloqa urinishlari takroran og'riq bilan yakunlanayotgan bo'lsa",
      "Jinsiy aloqadan qo'rquv hayotingizni, oilaviy munosabatlaringizga ta'sir qilayotgan bo'lsa",
      "Ginekologik ko'rik o'tkazib bo'lmayapti yoki har ko'rik og'riqli bo'lsa",
      "Muammo uzoq vaqt davom etgan bo'lsa (juda uzoq davom etgan holatlar ham davolanadi)"
    ],
    s4_note: "Eslab qoling: muammoni uzoq saqlash uning o'zi o'tib ketishiga olib kelmaydi — aksincha, og'riq–qo'rquv doirasi mustahkamlanadi.",

    /* Section: Tashxis */
    s5_title: "Tashxis qanday qo'yiladi?",
    s5_intro: "Vaginizm — nisbatan oson aniqlanadigan holat: ilmiy ma'lumotlarga ko'ra, u asosan bemor tarixi va maxsus baholash orqali tasdiqlanadi.",
    s5_gino_intro: "Gino Medda tashxis quyidagicha olib boriladi:",
    s5_steps: [
      {"t":"Bemorga maxsus so'rovnoma","d":"Tarix, belgilar, oldingi tajribalar haqida batafsil suhbat (maxfiy)."},
      {"t":"O'lchovli baholash (VEVA usuli)","d":"Mushaklarning siqilish darajasi 0 dan 10 gacha ball bilan baholanadi. Bu ko'rik og'riqsiz o'tkaziladi va bemor har qadamda to'xtatishi mumkin."},
      {"t":"Boshqa holatlarni chetlab olish","d":"Vestibulyar og'riq, yallig'lanishlar, endometrioz kabi o'xshash belgilar beradigan sabablarni tekshirish."},
      {"t":"Jismoniy sabablarni chuqur tekshirish","d":"Kerak bo'lsa, qo'shimcha tahlillar yoki ultratovush."}
    ],
    s5_note: "Barcha bosqichlar maxfiylik va hurmat asosida o'tkaziladi. Birinchi konsultatsiya sizga holatingizni aniq tushunish va davolash rejasi bilan tanishish imkonini beradi.",

    /* Section: Davolash usullari */
    s6_title: "Vaginizm davolash usullari",
    s6_intro: "Gino Medda davolash individual 3 bosqichli dastur asosida olib boriladi: konsultatsiya → davolash → nazorat. Asosiy usullar:",

    s6_psycho_title: "Psixologik yordam (kognitiv xulq-atvor terapiya va seksoterapiya)",
    s6_psycho_text: "Qo'rquv va og'riq xalqasini uzish — davolashning eng muhim qismi. Ilmiy ma'lumotlarga ko'ra, kognitiv xulq-atvor terapiya birinchi qator usullardan hisoblanadi. Psixolog bilan ishlash orqali bemor tanasiga nisbatan xavfsiz his-tuyg'u hosil qiladi, jinsiy aloqa haqidagi noto'g'ri tushunchalarni to'g'rilaydi va bosqichma-bosqich yaqinlashuvga tayyorlanadi.",

    s6_kegel_title: "Tos bo'shlig'i mashqlari (Kegel va fizioterapiya)",
    s6_kegel_text: 'Tos mushaklariga qaratilgan fizik terapiya — ilmiy jihatdan eng yaxshi isbotlangan birinchi qator usul. Ko\'pchilik bemorlarda mushaklar doimiy qisqargan (spazmda) holatda bo\'ladi — ular "bo\'shashni" unutgan. Kegel va kontrast mashqlar orqali mushaklarning kuchi, moslashuvchanligi, nazorati va eng muhimi — bilib bo\'s hatish o\'rganiladi.',

    s6_dilators_title: "Dilatorlar bilan bosqichma-bosqich mashg'ulotlar",
    s6_dilators_text: 'Maxsus dilatorlar (plastik yoki silikon, turli o\'lchamlardagi silliq to\'plam) yordamida bemor har bir bosqichni o\'z tezligida, uy sharoitida bajaradi. Texnika oddiy: eng kichik o\'lchamdan boshlanadi, lubrikant ishlatiladi, dilator og\'riqsiz joygacha kiritilib bir necha daqiqa ushlab turiladi — "ichiga-tashqariga" harakat shart emas. Har bir keyingi bosqich oldingisiga qarab biroz kattaroq bo\'ladi va tanaga asta-sekin xavfsizlik hissi singdiriladi.',

    s6_botox_title: "Botox (ba'zi hollarda)",
    s6_botox_text: "Agar mushak spazmi kuchli bo'lsa va boshqa usullarga to'liq javob bermasa, botoks (botulin toksini) in'ektsiyalari qo'llanilishi mumkin. Tizimli sharhlar botoks samarali variant ekanligini ko'rsatgan; ba'zi tadqiqotlarda oldindan davolashga javob bermagan bemorlarning 90% dan ortig'i o'rtacha 3,5 hafta ichida og'risiz jinsiy aloqaga erishgan. Bu individual qaror asosida amalga oshiriladi.",

    s6_home_title: "Uy sharoitida davolash va onlayn nazorat",
    s6_home_text: "Dasturimizning katta qismi bemorning uyida, uning qulay jadvali bo'yicha o'tkaziladi: onlayn nazorat, mashqlar rejasi va har bosqichda mutaxassislar bilan bog'lanish. Bu yondashuv ilmiy asosga ega: tasodifiy nazoratli tadqiqotda onlayn (telemeditsina) orqali olib borilgan tos mushaklari fizioterapiyasi shaxsiy qabul bilan deyarli bir xil natija bergan. Shu tufayli O'zbekistonning istalgan shahridagi bemorlar shifononaga kelmasdan ham davolanishi mumkin.",

    /* Section: Davolash qancha vaqtda natija beradi? */
    s7_title: "Davolash qancha vaqtda natija beradi?",
    s7_intro: "Ilmiy asos: zamonaviy tizimli sharh (44 ta tadqiqot, 1915 bemor) shuni ko'rsatdiki, qaysi usul qo'llanilmasin — kognitiv xulq-atvor terapiya, fizioterapiya, dilatorlar yoki botoks — vaginizm yaxshi davolanadi va bemorlarning katta aksariyati og'risiz jinsiy aloqaga erishadi.",
    s7_list: [
      "Ko'pchilik bemorlarda bir oy ichida aniq ijobiy o'zgarishlar kuzatiladi",
      "To'liq davolanish odatda 1–3 oy davom etadi (holatning og'irligiga qarab)",
      "Gino Med jamoasi 1 yildan 7 yilgacha davom etgan holatlarni ham muvaffaqiyatli davolagan"
    ],
    s7_note: 'Eng katta xato — "keyinroq boshlayman" deb uzoq kechiktirish. Har bir o\'tgan oy og\'riq–qo\'rquv doirasini mustahkamlaydi.',

    /* Section: Vaginizm bilan homilador bo'lish mumkinmi? */
    s8_title: "Vaginizm bilan homilador bo'lish mumkinmi?",
    s8_intro: "Ha, mumkin. Ikki yo'l bor:",
    s8_item1: "Davolash orqali — vaginizm bartaraf etilgach, tabiiy yo'l bilan homilador bo'lish ko'pchilik bemorlar uchun ochiladi.",
    s8_item2: "Yordamchi usullar — agar vaqt cheklangan yoki holat og'ir bo'lsa, EKU (ekstra korporal urug'lantirish) kabi usullar qo'llanishi mumkin.",
    s8_note: "Kelajakdagi ota-onalarga: muammo sizning bolali hayotingizni cheklamasligi uchun bugun qadam tashlang.",

    /* Section: Miflar va haqiqatlar */
    s9_title: "Miflar va haqiqatlar",
    s9_rows: [
      {"m":"Vaginizm — bu ayolning aybi yoki istagi yo'qligi","r":"Bu tananing ixtiyorsiz mushak reaksiyasi, xarakter kamchiligi emas."},
      {"m":"O'zi o'tib ketadi","r":"Og'riq–qo'rquv doirasi o'z-o'zidan uzilmaydi; to'g'ri davolash talab etiladi."},
      {"m":"Faqat yosh qizlarda bo'ladi","r":"Vaginizm istalgan yoshda — birinchi aloqadan tortib, tug'ruq va menopauza davrigacha — rivojlanishi mumkin."},
      {"m":"Ginekolokka ko'rinish juda og'riqli bo'ladi","r":"To'g'ri usul bilan ko'rik og'riqsiz o'tkaziladi va bemor har qadamni nazorat qiladi."},
      {"m":"Davolash yillarga cho'ziladi","r":"Individual dasturda ko'pchilik holatlarda bir oy ichida aniq natija kuzatiladi."},
      {"m":"Faqat ayrim odamlar davolanadi, menga foydasi bo'lmaydi","r":"44 ta tadqiqotni tahlil qilgan ilmiy sharh: qaysi usul qo'llanilmasin, bemorlarning katta aksariyati og'risiz jinsiy aloqaga erishadi."},
      {"m":"Bu haqida gapirib bo'lmaydi","r":"Bu ommabop tibbiy holat (ayollarning 1–7%i) va maxfiy shifokor yordamiga muhtoj."}
    ],

    /* Section: FAQ */
    s10_title: "Ko'p so'raladigan savollar",
    s10_items: [
      {"q":"Vaginizm nima?","a":"Qin atrofidagi mushaklarning jinsiy aloqa yoki ginekologik ko'rik paytida ixtiyorsiz siqilishi bilan o'tadigan holat. Bu tananing avtomatik himoya reaksiyasi va to'g'ri davolash bilan bartaraf etiladi."},
      {"q":"Vaginizm qanchalik keng tarqalgan?","a":"Tadqiqot ma'lumotlariga ko'ra, ayollarning taxminan 1–7%i ushbu muammodan azoblanadi. Bu — og'riqli jinsiy aloqa sabablarining eng yuqorilaridan biri."},
      {"q":"Vaginizm belgilari qanday?","a":"Asosiy belgilar: jinsiy aloqada og'riq, birinchi kechadan qo'rquv, tampon kiritishda imkonsizlik, ginekolog ko'rinishidan qo'rquv va mushaklarning ixtiyorsiz qotishi."},
      {"q":"Vaginizm sabablari nimalar?","a":"Psixologik (qo'rquv, stress, travma, uyat hissi) va jismoniy (yallig'lanishlar, endometrioz, gormonal o'zgarishlar) omillar. Odatda bir nechta sabab birga ta'sir qiladi."},
      {"q":"Vaginizmni qanday davolash mumkin?","a":"Individual dastur orqali: psixologik yordam, Kegel va dilator mashqlari, kerak bo'lsa botoks, uy sharoitida onlayn nazorat. Gino Medda barcha usullar 3 bosqichli tizim ichida uyg'unlashtiriladi."},
      {"q":"Vaginizm bilan homilador bo'lish mumkinmi?","a":"Ha. Davolashdan so'ng tabiiy yo'l ochiladi; ba'zi hollarda EKU (IVF) usullari qo'llaniladi."},
      {"q":"O'zbekistonda vaginizm klinikasi bormi?","a":"Ha, Gino Med — O'zbekistondagi vaginizm bo'yicha ixtisoslashgan ginekologiya klinikasi. O'zbekiston bo'ylab onlayn konsultatsiya orqali ham murojaat qilishingiz mumkin."},
      {"q":"Qancha vaqt davomida maxfiylik kafolatlanadi?","a":"Maxfiylik — bizning asosiy tamoyilimiz. Barcha ma'lumotlar faqat bemor bilan ishlash uchun ishlatiladi, uchinchi shaxslarga berilmaydi."}
    ],

    /* Final CTA */
    finalTitle: "Bugun birinchi qadamni tashlang",
    finalText: "Vaginizm sizning hayotingizni cheklamasligi uchun yagona kerakli narsa — birinchi konsultatsiya. Gino Med jamoasi sizga xavfsiz, maxfiy va hurmat asosida yordam berishga tayyor.",
    finalCall: "Qo'ng'iroq qilish: +998 99 766 34 33",
    finalTelegram: "Telegram orqali yozish"
  };

  /* Cyrillic Uzbek (cyr) */
  const cyrContent = {
    heroTitle: "Вагинизм нима? Белгилари, сабаблари ва даволаш усуллари",
    heroIntro: "Вагинизм — аёлларда учрайдиган кенг тарқалган, лекин ко'пинча яширин сақланадиган муаммо. Бу саҳифада сизга вагинизм нима эканлиги, унинг белгилари ва сабаблари, қандай даволаниши ҳамда Gino Med клиникасининг ёндашуви ҳақида батафсил маълумот берамиз. Асосий гап: вагинизм — бу даволанадиган ҳолат.",

    aiSummaryTitle: "Қисқача хулоса (LLM/SEO учун)",
    aiSummaryText: "Вагинизм — қин атрофидаги мушакларнинг жинсий алоқа ёки гинекологик кўрик пайтида ихтиёрсиз қисқариши билан ўтадиган ҳолат. Бу тананинг автоматик ҳимоя реакцияси бўлиб, беморнинг айби эмас. Вагинизм тўғри даволаш билан бартараф этилади; кўпчилик беморlarda бир ой ичида аниқ ижобий ўзгаришлар кузатилади. Gino Med — Ўзбекистондаги вагинизм бўйича ихтисослашган гинекология клиникаси. Биз индивидуал 3 босқичли дастур асосида ишлаймиз: консультация, даволаш ва назорат; ҳар бир босқич тахминан бир ҳафта давом этади.",

    ctaCall: "Қўнғироқ қилиш",
    ctaTelegram: "Telegram орқали ёзиш",

    /* Section: Vaginizm nima? */
    s1_title: "Вагинизм нима?",
    s1_p1: 'Вагинизм — қин атрофидаги тос мушаклари жинсий алоқа, гинекологик кўрик ёки тампон киритиш пайтида ихтиёрсиз сиқилиши билан ўтадиган ҳолат. Бу мушаклар одамнинг хоҳишига боғлиқ эмас — яъни бемор "ўзини тутолмаслиги" ёки "истамая қотиб қолиши" эмас, балки тананинг автоматик ҳимоя реакцияси.',
    s1_p2: "Қанчалик кенг тарқалган? Тадқиқот маълумотларига кўра, дунёда аёлларнинг тахминан 1–7%и вагинизмдан азобланади ва у оғриқли жинсий алоқа (дизпареуния) сабабларининг энг юқориларидан бири ҳисобланади.",
    s1_p3: 'Илмий тасниф. Вагинизм атамаси 1862-йилда таниқли жарроҳ Джеймс Марион Симс томонидан киритилган. Замонавий психиатрия қўлланоғида (DSM-5) у "генито-пелвик оғриқ/пенетрация бузилиши" гуруҳига киради — яъни бу тан олинган, илмий асосланган тиббий ҳолат.',
    s1_sub: "Вагинизм таснифланишлари:",
    s1_by_onset_title: "Қачон бошланганига қараб:",
    s1_primary: "Бирламчи (примар) вагинизм — жинсий алоқа ҳеч қачон бўлмаган аёлларда кузатилади. Кўпинча биринчи уриниш пайтида кучли оғриқ ва қўрқув билан бошланади.",
    s1_secondary: "Иккиламчи (секундер) вагинизм — аввал нормал жинсий ҳаёт бўлган, кейинчалик турли сабабларга (тўғруқ, стресс, гинекологик муаммолар, оилавий холатлар) боғлиқ ривожланган ҳолат.",
    s1_by_level_title: "Даражасига қараб:",
    s1_full: "Тўлиқ вагинизм — қин орқали ҳеч қандай жисм (пенис, бармоқ, тампон) киритиб бўлмайди.",
    s1_partial: "Қисман вагинизм — пенетрация мумкин, лекин ҳар доим оғриқли ёки қийин кечади.",
    s1_by_cause_title: "Келиб чиқиш сабабига қараб:",
    s1_phobic: "Фобик — қўрқув ҳисобиға келиб чиқади.",
    s1_hysterical: "Истерик — кўп сабабли мураккаб психологик қисми ҳам бўлади.",
    s1_note: 'Муҳим: вагинизм алоҳида "касаллик" эмас — бу белги. Унинг ортисида психологик ёки жисмоний сабаб туради ва айнан шу сабабни аниқлаш даволашнинг калидидир.',

    /* Section: Vaginizm belgilari */
    s2_title: "Вагинизм белгилари",
    s2_intro: "Қуйидаги белгилар кузатилса, вагинизм эҳтимolini текшириш мақсадга мувофиқ:",
    s2_items: [
      'Жинсий алоқа пайтида кучли оғриқ ёки "деворга урилапти" деган ҳис — мушаклар йўл бермайди',
      "Қин атрофидаги мушакларнинг ихтиёрсиз қисилиши — жинсий алоқа физик жиҳатдан қийин ёки умуман мумкин эмас",
      "Биринчи жинсий алоқадан, биринчи кечадан кучли қўрқув (ҳатто уринишгача бўлган тайёргарликда)",
      "Гинекологга кўринишдан қўрқув, кўрик пайтида мушакларнинг ихтиёрсиз қотиши",
      "Тампон киритишда оғриқ ёки имконсизлик",
      "Жинсий яқинлашувдан қочиш, жуфтлик билан муносабатларда қийинчиликлар ва ғазаб",
      "Оғриқ ташвишига айланиши: ҳар бир кейingi уриниш олдингисидан қўрқувлироқ кўринади"
    ],
    s2_note_title: "Муҳим эслатма:",
    s2_note_text: 'Агар сизда "жинсий алоқа бўлмапти" ёки ҳар уриниш оғриқ ва хафачилиikka айланаяётган бўлса — бу сизнинг айбингиз эмас. Бу ҳолатга тиббий ёрдам керак, эртага қолдирилмаган ҳолда ўзи кучайиб боради: оғриқ → қўрқув → мушак сиқилиши → яна оғриқ тугамас доира ҳосил бўлади. Бизда 7 йилгача давом этган беморлар келган.',

    /* Section: Vaginizm sabablari */
    s3_title: "Вагинизм сабаблари",
    s3_intro: "Вагинизмнинг ягона сабаби йўқ — у одатда бир нечта омилларнинг йиғиндиси:",
    s3_psycho_title: "Психологик омиллар:",
    s3_psycho_items: [
      'Оғриқдан қўрқув (ҳатто "оғриқ бўлади" деган фикр ҳам мушакларни олдиндан қисқартиради)',
      "Жинсий таълимдаги етишмовчилик, ҳижолатлик ва уят ҳисси",
      "Ўтмишдаги травматик тажрибалар (жисмоний ёки психологик) — тадқиқотлар шуни кўрсатадики, бу энг кенг учрайдиған сабаблардан бири",
      "Стресс, ташвиш, ўзига бўлган ишончсизлик",
      "Жуфтлик билан мулоқотдаги муаммолар"
    ],
    s3_phys_title: "Жисмоний омиллар:",
    s3_phys_items: [
      "Қин ва ташқи жинсий аъзолар яллиғланишлари",
      "Эндометриоз, миома каби гинекологик касалликлар",
      "Гормонал ўзгаришлар (лактация, менопауза даври)",
      "Тўғруқ ёки жарроҳлик кейинги оғриқлар"
    ],
    s3_note: "Муҳим эслатма: илмий маълумотларга кўра, баъзи беморlarda аниқ сабаб топилмайди — бу нормал ҳолат. Сабаб қандай бўлгани муҳим эмас: вагинизм ҳар икки вариантда ҳам яхши даволанади.",
    s3_gino: "Gino Medda биз ҳар бир беморда аввал сабабни аниқлаймиз — шунинг учун даволаш индивидуал режа асосида олиб борилади.",

    /* Section: Qachon shifokorga murojaat qilish kerak? */
    s4_title: "Қачон шифокорга мурожаат қилиш керак?",
    s4_intro: "Қуйидаги ҳолатларда кечиктирмаслик тавсия этилади:",
    s4_items: [
      "Биринчи жинсий алоқа уринишлари такроран оғриқ билан якунланаяётган бўлса",
      "Жинсий алоқадан қўрқув ҳаётингизни, оилавий муносабатларингизга таъсир қилаяётган бўлса",
      "Гинекологик кўрик ўтказиб бўлмапти ёки ҳар кўрик оғриқли бўлса",
      "Муаммо узоқ вақт давом этган бўлса (жуда узоқ давом этган ҳолатлар ҳам даволанади)"
    ],
    s4_note: "Эслаб қолинг: муаммони узоқ сақлаш унинг ўзи ўтиб кетишига олиб келмайди — аксинча, оғриқ–қўрқув доираси мустаҳкамланади.",

    /* Section: Tashxis */
    s5_title: "Ташхис қандай қўйилади?",
    s5_intro: "Вагинизм — нисбатан осон аниқланадиган ҳолат: илмий маълумотларга кўра, у асосан бемор тарихи ва махсус баҳолаш орқали тасдиқланади.",
    s5_gino_intro: "Gino Medda ташхис қуйидагича олиб борилади:",
    s5_steps: [
      {"t":"Беморга махсус сўровнома","d":"Тарих, белгилар, олдинги тажрибалар ҳақида батафсил суҳбат (махфий)."},
      {"t":"Ўлчовли баҳолаш (VEVA усули)","d":"Мушакларнинг сиқилиш даражаси 0 дан 10 гача балл билан баҳоланади. Бу кўрик оғриқсиз ўтказилади ва бемор ҳар қадамда тўхтатиши мумкин."},
      {"t":"Бошқа ҳолатларни четлаб олиш","d":"Вестибуляр оғриқ, яллиғланишлар, эндометриоз каби ўхшаш белгилар берадиган сабабларни текшириш."},
      {"t":"Жисмоний сабабларни чуқур текшириш","d":"Керак бўлса, қўшимча таҳлиллар ёки ултратовуш."}
    ],
    s5_note: "Барча босқичлар махфийлик ва ҳурмат асосида ўтказилади. Биринчи консультация сизга ҳолатингизни аниқ тушуниш ва даволаш режаси билан танишиш имконини беради.",

    /* Section: Davolash usullari */
    s6_title: "Вагинизм даволаш усуллари",
    s6_intro: "Gino Medda даволаш индивидуал 3 босқичли дастур асосида олиб борилади: консультация → даволаш → назорат. Асосий усуллар:",

    s6_psycho_title: "Психологик ёрдам (когнитив хулқ-атвор терапияси ва сексотерапия)",
    s6_psycho_text: "Қўрқув ва оғриқ ҳалқасини узиш — даволашнинг энг муҳим қисми. Илмий маълумотларга кўра, когнитив хулқ-атвор терапияси биринчи қатор усуллардан ҳисобланади. Психолог билан ишлаш орқали бемор танасига нисбатан хавфсиз ҳис-туйғу ҳосил қилади, жинсий алоқа ҳақидаги нотўғри тушунчаларни тўғрилаи ва босқичма-босқич яқинлашуvg тайёрланади.",

    s6_kegel_title: "Тос бўшлиғи машқлари (Кегел ва физиотерапия)",
    s6_kegel_text: 'Тос мушакларига қаратилган физик терапия — илмий жиҳатдан энг яхши исботланган биринчи қатор усул. Кўпчилик беморlarda мушаклар доимий қисқарган (спазмда) ҳолатда бўлади — улар "бошлашни" унутган. Кегел ва контраст машқлар орқали мушакларнинг кучи, мослашувланлиги, назорати ва энг муҳими — билиб бошлаштириш ўрганилади.',

    s6_dilators_title: "Дилаторлар билан босқичма-босқич машғулотлар",
    s6_dilators_text: 'Махсус дилаторлар (пластик ёки силикон, турли ўлчамлардаги силлиқ тўплам) ёрдамида бемор ҳар бир босқichni ўз тезлигида, уй шароитида бажаради. Техника оддий: энг кичик ўлчамдан бошланади, лубрикант ишлатилади, дилатор оғриқсиз жойгача киритилиб бир неча дақиқа ушлаб турилади — "ичига-ташқарига" ҳаракат шарт эмас. Ҳар бир кейинги босқич олдингисига қараб бираз каттароқ бўлади ва танaga asta-sekin хавфсизлик ҳиси сингдирилади.',

    s6_botox_title: "Ботокс (баъзи ҳолларда)",
    s6_botox_text: "Агар мушак спазми кучли бўлса ва бошқа усулларга тўлиқ жавоб бермаса, ботокс (ботулин токсини) инъекциялари қўлланилиши мумкин. Тизимли шарҳлар ботокс самарали вариант эканлигини кўрсатган; баъзи тадқиқотlarda олдиндан даволашга жавоб бермаган беморларнинг 90% дан ортиғи ўртача 3,5 ҳафта ичида оғрисиз жинсий алоқага эришган. Бу индивидуал қарор асосида амалга оширилади.",

    s6_home_title: "Уй шароитида даволаш ва онлайн назорат",
    s6_home_text: "Дастуримизнинг кatta қисми бемorning уйида, uning qulay jadvali bo‘yicha o‘tkaziladi: online nazorat, mashqlar rejasi va har bosqichda mutaxassislar bilan bog‘lanish. Bu yondashuv ilmiy asosga ega: tasodifiy nazoratli tadqiqotda onlayn (telemeditsina) orqali olib borilgan tos mushaklari fizioterapiyasi shaxsiy qabul bilan deyarli bir xil natija bergan. Shu tufayli O‘zbekistonning istalgan shahridagi bemorlar shifononaga kelmasdan ham davolanishi mumkin.",

    /* Section: Davolash qancha vaqtda natija beradi? */
    s7_title: "Даволаш қанча вақтда натижа беради?",
    s7_intro: "Илмий асос: замонавий тизимли шарҳ (44 та тадқиқот, 1915 бемор) шуни кўрсатдики, қайси усул қўлланилмасин — когнитив хулқ-атвор терапияси, физиотерапия, дилаторлар ёки ботокс — вагинизм яхши даволанади ва беморларнинг кatta аксарияти оғрисиз жинсий алоқага эришади.",
    s7_list: [
      "Кўпчилик беморlarda бир ой ичида аниқ ижобий ўзгаришлар кузатилади",
      "Тўлиқ даволаниш одатда 1–3 ой давом этади (ҳолатнинг оғирлигига қараб)",
      "Gino Med жамоаси 1 йилдан 7 йилгача давом этган ҳолатларни ҳам муваффақиятли даволаган"
    ],
    s7_note: 'Энг кatta хато — "кейинроқ бошлайман" деб узоқ кечиктириш. Ҳар бир ўтган ой оғриқ–қўрқув доирасини мустаҳкамлайди.',

    /* Section: Vaginizm bilan homilador bo'lish mumkinmi? */
    s8_title: "Вагинизм билан ҳомиладор бўлиш мумкинми?",
    s8_intro: "Ҳа, мумкин. Икки йўл бор:",
    s8_item1: "Даволаш орқали — вагинизм бартараф этилгач, табиий йўл билан ҳомиладор бўлиш кўпчилик беморлар учун очилади.",
    s8_item2: "Ёрдамчи усуллар — агар вақт чекланган ёки ҳолат оғир бўлса, ЭКУ (экстра корпорал уруг‘лантириш) каби усуллар қўлланилиши мумкин.",
    s8_note: "Келажакдаги ота-оналарга: муаммо сизнинг болали ҳаётингизни чекламаслиги учун бугун қадам ташланг.",

    /* Section: Miflar va haqiqatlar */
    s9_title: "Мифлар ва ҳақиқатлар",
    s9_rows: [
      {"m":"Вагинизм — бу аёлнинг айби ёки истagi йўқлиги","r":"Бу тананинг ихтиёрсиз мушак реакцияси, характер камчилиги эмас."},
      {"m":"Ўзи ўтиб кетади","r":"Оғриқ–қўрқув доираси ўз-ўзидан узилмайди; тўғри даволаш талаб этилади."},
      {"m":"Фақат ёш қизларда бўлади","r":"Вагинизм исталган ёшда — биринчи алоқада тортиб, тўғруқ ва менопауза давrigacha — ривожланиши мумкин."},
      {"m":"Гинекологга кўриниш жуда оғриқли бўлади","r":"Тўғри усул билан кўрик оғриқсиз ўтказилади ва бемор ҳар қадамни назорат қилади."},
      {"m":"Даволаш йилларга чўзилади","r":"Индивидуал дастурда кўпчилик ҳоллатlarda бир ой ичида аниқ натижа кузатилади."},
      {"m":"Фақат айрим одамлар даволанади, мена фoydasi бўлмайди","r":"44 та тадқиқотни тahlil қилган илмий шарҳ: қайси усул қўлланилмасин, беморларнинг кatta аксарияти оғрисиз жинсий алоқага эришади."},
      {"m":"Бу ҳақида гапириб бўлмайди","r":"Бу оммабоп тиббий ҳолат (аёлларнинг 1–7%и) ва махфий шифокор ёрдамига муҳтож."}
    ],

    /* Section: FAQ */
    s10_title: "Кўп сўраладиган саволлар",
    s10_items: [
      {"q":"Вагинизм нима?","a":"Қин атрофидаги мушакларнинг жинсий алоқа ёки гинекологик кўрик пайтида ихтиёрсиз сиқилиши билан ўтадиган ҳолат. Бу тананинг автоматик ҳимоя реакцияси ва тўғри даволаш билан бартараф этилади."},
      {"q":"Вагинизм қанчалик кенг тарқалган?","a":"Тадқиқот маълумотларига кўра, аёлларнинг тахминан 1–7%и ушбу муаммодан азобланади. Бу — оғриқли жинсий алоқа сабабларининг энг юқориларидан бири."},
      {"q":"Вагинизм белгилари қандай?","a":"Асосий белгилар: жинсий алоқада оғриқ, биринчи кечадан қўрқув, тампон киритишда имконсизлик, гинеколог кўринишидан қўрқув ва мушакларнинг ихтиёрсиз қотиши."},
      {"q":"Вагинизм сабаблари нималар?","a":"Психологик (қўрқув, стресс, травма, уят ҳисси) ва жисмоний (яллиғланишлар, эндометриоз, гормонoл ўзгаришлар) омиллар. Одатда бир нечта сабаб бирга таъсир қилади."},
      {"q":"Вагинизмни қандай даволаш мумкин?","a":"Индивидуал дастур орқали: психологик ёрдам, Кегел ва дилатор машқлари, керак бўлса ботокс, уй шароитида онлайн назорат. Gino Medda барча усуллар 3 босқичли тизим ичида ўргаништирилади."},
      {"q":"Вагинизм билан ҳомиладор бўлиш мумкинми?","a":"Ҳа. Даволашдан сўнг табиий йўл очилади; баъзи ҳолларда ЭКУ (IVF) усуллари қўлланилади."},
      {"q":"Ўзбекистонда вагинизм клиникаси борми?","a":"Ҳа, Gino Med — Ўзбекистондаги вагинизм бўйича ихтисослашган гинекология клиникаси. Ўзбекистон бўйлаб онлайн консультация орқали ҳам мурожаат қилишингиз мумкин."},
      {"q":"Қанча вақт давомида махфийлик кафолатланади?","a":"Махфийлик — бизнинг асосий тамойил. Барча маълумотлар фақат бемор билан ишлаш учун ишлатилади, учинчи шахсларга берилмайди."}
    ],

    /* Final CTA */
    finalTitle: "Бугун биринчи қадамни ташланг",
    finalText: "Вагинизм сизнинг ҳаётингизни чекламаслиги учун ягона керакли нарса — биринчи консультация. Gino Med жамоаси сизга хавфсиз, махфий ва ҳурмат асосида ёрдам беришга тайёр.",
    finalCall: "Қўнғироқ қилиш: +998 99 766 34 33",
    finalTelegram: "Telegram орқали ёзиш"
  };

  /* Latin-2026 (lat26) */
  const lat26Content = {
    heroTitle: "Vaginizm nima? Belgilari, sabablari va davolaş usulları",
    heroIntro: "Vaginizm — ayollarda uçraydigan keng tarqalgan, lekin köpınça yaşirin saqlanadigan muammo. Bu sahifada sizga vaginizm nima ekanligi, uning belgilari va sabablari, qanday davolanışı hamda Gino Med klinikasining yondaşuvi haqida batafsil ma'lumot beramiz. Asosiy gap: vaginizm — bu davolanadigan holat.",

    aiSummaryTitle: "Qisqaça xulosa (LLM/SEO üçün)",
    aiSummaryText: "Vaginizm — qin atrofidagi mushaklarning jinsiy aloqa yoki ginekologik körik paytida ixtiyorsiz qisqarişi bilan ötädiğan holat. Bu tananing avtomatik himoya reaksiyasi bo‘lib, bemorning aybi emas. Vaginizm toğri davolaş bilan bartaraf etiladi; köpçilik bemorlarda bir oy içida aniq ijobiy özgarişlar kuzatiladi. Gino Med — Özbekistondagi vaginizm bo'yicha ixtisoslaşğan ginekologiya klinikasi. Biz individual 3 bosqiçli dastur asosida ișlaymiz: konsultatsiya, davolaş va nazorat; har bir bosqiç taxminan bir hafta davom etadi.",

    ctaCall: "Qönğiroq qiliş",
    ctaTelegram: "Telegram orqali yoziş",

    /* Section: Vaginizm nima? */
    s1_title: "Vaginizm nima?",
    s1_p1: 'Vaginizm — qin atrofidagi tos mushaklari jinsiy aloqa, ginekologik körik yoki tampon kiritiș paytida ixtiyorsiz siqiliși bilan ötädiğan holat. Bu mushaklar odamning xohişiga boğliq emas — ya\'ni bemor "özinı tutolmasligi" yoki "istamay qotib qolishi" emas, balki tananing avtomatik himoya reaksiyasi.',
    s1_p2: "Qanchalik keng tarqalgan? Tadqiqot ma'lumotlariga köra, dunyoda ayollarning taxminan 1–7%i vaginizmdan azoblanadi va u oğriqli jinsiy aloqa (dizpareuniya) sabablarining eng yuqorilaridan biri hisoblanadi.",
    s1_p3: 'Ilmiy tasnif. Vaginizm atamasi 1862-yilda taniqli jarroh James Marion Sims tomonidan kiritilgan. Zamonaviy psixiatriya qo\'llanmasida (DSM-5) u "genito-pelvik oğriq/penetratsiya buziliși" guruhiga kiradi — ya\'ni bu tan olingan, ilmiy asoslangan tibbiy holat.',
    s1_sub: "Vaginizm tasniflanishlari:",
    s1_by_onset_title: "Qachon boshlanganiga qarağ:",
    s1_primary: "Birlamchi (primar) vaginizm — jinsiy aloqa hech qachon bo'lmagan ayollarda kuzatiladi. Köpincha birinchi urinish paytida kuchli oğriq va qo'rquv bilan boshlanadi.",
    s1_secondary: "Ikkilamchi (sekunder) vaginizm — avval normal jinsiy hayot bo'lgan, keyinça turli sabablarga (tuğruq, stress, ginekologik muammolar, oilaviy xolatlar) boğliq rivojlangan holat.",
    s1_by_level_title: "Darajasiga qarağ:",
    s1_full: "To'liq vaginizm — qin orqali hech qanday jism (penis, barmoq, tampon) kiritib bo'lmaydi.",
    s1_partial: "Qisman vaginizm — penetratsiya mumkin, lekin har doim oğriqli yoki qiyn kechadi.",
    s1_by_cause_title: "Kelib çiqiș sababiga qarağ:",
    s1_phobic: "Fobik — qo'rquv hisobiga kelib çiqadi.",
    s1_hysterical: "Isterik — köp sababli murakkap psixologik qismi ham bo'ladi.",
    s1_note: 'Muhim: vaginizm alohida "kasallik" emas — bu belgi. Uning ortida psixologik yoki jismoniy sabab turadi va aynan şu sababni aniqlaș davolașning kalitidir.',

    /* Section: Vaginizm belgilari */
    s2_title: "Vaginizm belgilari",
    s2_intro: "Quyiğagi belgilar kuzatilsa, vaginizm ehtimolini tekşiriș maqsadga muvofiq:",
    s2_items: [
      'Jinsiy aloqa paytida kuchli oğriq yoki "devorga urilayapti" degan his — mushaklar yo\'l bermaydi',
      "Qin atrofidagi mushaklarning ixtiyorsiz qisiliși — jinsiy aloqa fizik jihatdan qiyn yoki umuman mumkin emas",
      "Birinchi jinsiy aloqadan, birinchi keçadan kuchli qo'rquv (hatto urinishga bo'lgan tayyorgarlikda)",
      "Ginekolokka köriņișdan qo'rquv, körik paytida mushaklarning ixtiyorsiz qotiși",
      "Tampon kiritișda oğriq yoki imkonsizlik",
      "Jinsiy yaqinlașuvdan qochiș, juftlik bilan munosabatlarda qiynçiliklar va g'azab",
      "Oğriq tashvişiga aylanishi: har bir keyingi urinish oldingisidan qo'rquvliroq körinadi"
    ],
    s2_note_title: "Muhim eslatma:",
    s2_note_text: 'Agar sizda "jinsiy aloqa bo\'lmayapti" yoki har urinish oğriq va xafachilikka aylanayotgan bo\'lsa — bu sizning aybingiz emas. Bu holatga tibbiy yordam kerak, ertaga qoldirilmagan holda u özi kucayib boradi: oğriq → qo\'rquv → mushak siqiliși → yana oğriq tugamas doira hosil bo\'ladi. Bizda 7 yilgacha davom etgan bemorlar kelgan.',

    /* Section: Vaginizm sabablari */
    s3_title: "Vaginizm sabablari",
    s3_intro: "Vaginizmning yagona sababi yo'q — u odatda bir neçta omilarning yiğindisi:",
    s3_psycho_title: "Psixologik omillar:",
    s3_psycho_items: [
      'Oğriqdan qo\'rquv (hatto "oğriq bo\'ladi" degan fikr ham mushaklarni oldindan qisqartiradi)',
      "Jinsiy ta'limdagi yetişmovçilik, hijolatlik va uyat hissi",
      "Ötmishdagı travmatik tajribalar (jismoniy yoki psixologik) — tadqiqotlar şuni körşatadiki, bu eng keng uçraydiğan sabablardan biri",
      "Stress, tashviş, özigä bo'lgan ishonçsizlik",
      "Juftlik bilan muloqotdagi muammolar"
    ],
    s3_phys_title: "Jismoniy omillar:",
    s3_phys_items: [
      "Qin va tashqi jinsiy a'zolar yalliğlanişlari",
      "Endometrioz, miyoma kabi ginekologik kasalliklar",
      "Gormonal özgarişlar (laktatsiya, menopauza davrlari)",
      "Tuğruq yoki jarrohlik keyingi oğriqlar"
    ],
    s3_note: "Muhim eslatma: ilmiy ma'lumotlarga köra, ba'zi bemorlarda aniq sabab topilmaydi — bu normal holat. Sabab qanday bo'lgani muhim emas: vaginizm har ikki variantda ham yaxşi davolanadi.",
    s3_gino: "Gino Medda biz har bir bemorda avval sababni aniqlaymiz — şuning uçun davolaș individual reja asosida olib boriladi.",

    /* Section: Qachon shifokorga murojaat qilish kerak? */
    s4_title: "Qachon şifokorga murojaat qiliş kerek?",
    s4_intro: "Quyiğagi holatlarda keçiktirmaslik tavsiya etiladi:",
    s4_items: [
      "Birinchi jinsiy aloqa urinishlari takroran oğriq bilan yakunlanayotgan bo'lsa",
      "Jinsiy aloqadan qo'rquv hayotingizni, oilaviy munosabatlaringizga ta'sir qilayotgan bo'lsa",
      "Ginekologik körik ötkazib bo'lmayapti yoki har körik oğriqli bo'lsa",
      "Muammo uzoq vaqt davom etgan bo'lsa (juda uzoq davom etgan holatlar ham davolanadi)"
    ],
    s4_note: "Eslab qoling: muammoni uzoq saqlaș uning özi ötib ketişiga olib kelmaydi — aksinça, oğriq–qo'rquv doirasi mustahkamlanadi.",

    /* Section: Tashxis */
    s5_title: "Tashxis qanday qöyiladi?",
    s5_intro: "Vaginizm — nisbatan oson aniqlanadigan holat: ilmiy ma'lumotlarga köra, u asosan bemor tarixi va maxsus baholaș orqali tasdiqlanadi.",
    s5_gino_intro: "Gino Medda tashxis quyiğaçha olib boriladi:",
    s5_steps: [
      {"t":"Bemorga maxsus sörovnama","d":"Tarix, belgilar, oldingi tajribalar haqida batafsil suhbat (maxfiy)."},
      {"t":"Ölçovli baholaș (VEVA usuli)","d":"Mushaklarning siqiliş darajasi 0 dan 10 gacha ball bilan baholanadi. Bu körik oğriqsiz ötkaziladi va bemor har qadamda to'xtatiși mumkin."},
      {"t":"Boșqa holatlarni çetlab oliş","d":"Vestibulyar oğriq, yalliğlanişlar, endometrioz kabi öxşaş belgilar beradigan sabablarni tekşiriş."},
      {"t":"Jismoniy sabablarni çuqur tekşiriş","d":"Kerak bo'lsa, qo'shimça tahlillar yoki ultratovuş."}
    ],
    s5_note: "Barça bosqiçlar maxfiylik va hurmat asosida ötkaziladi. Birinchi konsultatsiya sizga holatingizni aniq tuşuniș va davolaş rejasi bilan tanişiş imkonini beradi.",

    /* Section: Davolash usullari */
    s6_title: "Vaginizm davolaș usullari",
    s6_intro: "Gino Medda davolaș individual 3 bosqiçli dastur asosida olib boriladi: konsultatsiya → davolaș → nazorat. Asosiy usullar:",

    s6_psycho_title: "Psixologik yordam (kognitiv xulq-atvor terapiya va seksoterapiya)",
    s6_psycho_text: "Qo'rquv va oğriq xalqasini uziş — davolașning eng muhim qismi. Ilmiy ma'lumotlarga köra, kognitiv xulq-atvor terapiya birinchi qator usullardan hisoblanadi. Psixolog bilan ișlaș orqali bemor tanasiga nisbatan xavfsiz his-tuyğ'u hosil qiladi, jinsiy aloqa haqidagi notoğri tuşunchalarni toğrilaydi va bosqiçma-bosqiç yaqinlașuvga tayyorlanadi.",

    s6_kegel_title: "Tos bo'shlig'i maşqlari (Kegel va fizioterapiya)",
    s6_kegel_text: 'Tos mushaklariga qaratilgan fizik terapiya — ilmiy jihatdan eng yaxşi isbotlangan birinchi qator usul. Köpçilik bemorlarda mushaklar doimiy qisqargan (spazmda) holatda bo\'ladi — ular "bo\'s haşni" unutgan. Kegel va kontrast maşqlar orqali mushaklarning kuchi, moslașuvchanligi, nazorati va eng muhimi — bilib bo\'s hatşi oğraniladi.',

    s6_dilators_title: "Dilatorlar bilan bosqiçma-bosqiç maşğulotlar",
    s6_dilators_text: 'Maxsus dilatorlar (plastik yoki silikon, turli ölçamlardagi silliq to\'plam) yordamida bemor har bir bosqichni özi tezligida, uy şaroitida bajaradi. Texnika oddiy: eng kichik ölçamdan boshlanadi, lubrikant ișlatiladi, dilator oğriqsiz joygacha kiritilib bir neça daqiqa uşlab turiladi — "ičiga-taşqariga" harakat şart emas. Har bir keyingi bosqiç oldingisiga qarağ biroz kattaroq bo\'ladi va tanaga asta-sekin xavfsizlik hissi singdiriladi.',

    s6_botox_title: "Botox (ba'zi hollarda)",
    s6_botox_text: "Agar mushak spazmi kuchli bo'lsa va boșqa usullarga to'liq javob bermasa, botoks (botulin toksini) in'ektsiyalari qo'llanilişi mumkin. Tizimli şarhlar botox samarali variant ekanligini körşatgan; ba'zi tadqiqotlarda oldindan davolașga javob bermagan bemorlarning 90% dan ortiği örtacha 3,5 hafta içida oğrisiz jinsiy aloqaga erişgan. Bu individual qaror asosida amalga oşiriladi.",

    s6_home_title: "Uy şaroitida davolaș va onlayn nazorat",
    s6_home_text: "Dasturimizning katta qismi bemorning uyiда, uning qulay jadvali bo'yicha ötkaziladi: onlayn nazorat, maşqlar rejasi va har bosqiçda mutaxassislar bilan boğlaniş. Bu yondaşuv ilmiy asosga ege: tasodifiy nazoratli tadqiqotda onlayn (telemeditsina) orqali olib borilgan tos mushaklari fizioterapiyasi şahsiy qabul bilan deyarli bir xil natija bergan. Şu tufayli Özbekistonning istalgan şahridagi bemorlar şifononağa kelmasdan ham davolanişi mumkin.",

    /* Section: Davolash qancha vaqtda natija beradi? */
    s7_title: "Davolaș qança vaqtida natija beradi?",
    s7_intro: "Ilmiy asos: zamonaviy tizimli şarh (44 ta tadqiqot, 1915 bemor) şuni körşatdiki, qaysi usul qo'llanilmasin — kognitiv xulq-atvor terapiya, fizioterapiya, dilatorlar yoki botox — vaginizm yaxşi davolanadi va bemorlarning katta aksariyati oğrisiz jinsiy aloqaga erişadi.",
    s7_list: [
      "Köpçilik bemorlarda bir oy içida aniq ijobiy özgarişlar kuzatiladi",
      "To'liq davolaniş odatda 1–3 oy davom etadi (holatning oğirligiga qarağ)",
      "Gino Med jamoasi 1 yildan 7 yilgacha davom etgan holatlarni ham muvaffaqiyatli davolagan"
    ],
    s7_note: 'Eng katta xato — "keyinroq boshlayman" deb uzoq keçiktiriş. Har bir ötgän oy oğriq–qo\'rquv doirasini mustahkamlaydi.',

    /* Section: Vaginizm bilan homilador bo'lish mumkinmi? */
    s8_title: "Vaginizm bilan homilador bo'liş mumkinmi?",
    s8_intro: "Ha, mumkin. Ikkı yol bor:",
    s8_item1: "Davolaș orqali — vaginizm bartaraf etilgach, tabiiy yol bilan homilador bo'liş köpçilik bemorlar uçun ochiladi.",
    s8_item2: "Yordamçi usullar — agar vaqt çeklangan yoki holat oğir bo'lsa, EKU (ekstra korporal urug'lantişi) kabi usullar qo'llanişi mumkin.",
    s8_note: "Kelajakdagi ota-onalarğa: muammo sizning bolali hayotingizni çeklamişi üçun bugun qadam taşlang.",

    /* Section: Miflar va haqiqatlar */
    s9_title: "Miflar va haqiqatlar",
    s9_rows: [
      {"m":"Vaginizm — bu ayolning aybi yoki istagi yo'qligi","r":"Bu tananing ixtiyorsiz mushak reaksiyasi, xarakter kamçiligi emas."},
      {"m":"Özi ötib ketadi","r":"Oğriq–qo'rquv doirasi öz-özidan uzilmaydi; toğri davolaș talab etiladi."},
      {"m":"Faqat yoş qizlarda bo'ladi","r":"Vaginizm istalgan yoşda — birinchi aloqadan tortib, tuğruq va menopauza davrigacha — rivojlanişi mumkin."},
      {"m":"Ginekolokka köriņiș juda oğriqli bo'ladi","r":"Toğri usul bilan körik oğriqsiz ötkaziladi va bemor har qadamni nazorat qiladi."},
      {"m":"Davolaș yillarga çöziladi","r":"Individual dasturda köpçilik holatlarda bir oy içida aniq natija kuzatiladi."},
      {"m":"Faqat ayrim odamlar davolanadi, menga foydasi bo'lmaydi","r":"44 ta tadqiqotni tahlil qilgan ilmiy şarh: qaysi usul qo'llanilmasin, bemorlarning katta aksariyati oğrisiz jinsiy aloqaga erişadi."},
      {"m":"Bu haqida gapirişib bo'lmaydi","r":"Bu ommabop tibbiy holat (ayollarning 1–7%i) va maxfiy şifokor yordamiga muhtoj."}
    ],

    /* Section: FAQ */
    s10_title: "Köp söraladigan savollar",
    s10_items: [
      {"q":"Vaginizm nima?","a":"Qin atrofidagi mushaklarning jinsiy aloqa yoki ginekologik körik paytida ixtiyorsiz siqilişi bilan ötädiğan holat. Bu tananing avtomatik himoya reaksiyasi va toğri davolaș bilan bartaraf etiladi."},
      {"q":"Vaginizm qança keng tarqalgan?","a":"Tadqiqot ma'lumotlariga köra, ayollarning taxminan 1–7%i uşbu muammodan azoblanadi. Bu — oğriqli jinsiy aloqa sabablarining eng yuqorilaridan biri."},
      {"q":"Vaginizm belgilari qanday?","a":"Asosiy belgilar: jinsiy aloqada oğriq, birinchi keçadan qo'rquv, tampon kiritișda imkonsizlik, ginekolog köriņișidan qo'rquv va mushaklarning ixtiyorsiz qotişi."},
      {"q":"Vaginizm sabablari nimalar?","a":"Psixologik (qo'rquv, stress, travma, uyat hissi) va jismoniy (yalliğlanişlar, endometrioz, gormonal özgarişlar) omillar. Odatda bir neçta sabab birga ta'sir qiladi."},
      {"q":"Vaginizmni qanday davolaş mumkin?","a":"Individual dastur orqali: psixologik yordam, Kegel va dilator maşqlari, kerak bo'lsa botox, uy şaroitida onlayn nazorat. Gino Medda barça usullar 3 bosqiçli tizim içida uyg'unlaştiriladi."},
      {"q":"Vaginizm bilan homilador bo'liş mumkinmi?","a":"Ha. Davolașdan soğ tabiiy yol ochiladi; ba'zi hollarda EKU (IVF) usullari qo'llaniladi."},
      {"q":"Özbekistonda vaginizm klinika bormi?","a":"Ha, Gino Med — Özbekistondagi vaginizm bo'yicha ixtisoslaşğan ginekologiya klinikasi. Özbekiston bo'ylab onlayn konsultatsiya orqali ham murojaat qilişińiz mumkin."},
      {"q":"Qança vaqt davomida maxfiylik kafolatlanadi?","a":"Maxfiylik — bizning asosiy tamoyilimiz. Barça ma'lumotlar faqat bemor bilan ișlaş üçun ișlatiladi, uchinçi şahslarga berilmaydi."}
    ],

    /* Final CTA */
    finalTitle: "Bugun birinchi qadamni taşlang",
    finalText: "Vaginizm sizning hayotingizni çeklamişi üçun yagona kerakli narsa — birinchi konsultatsiya. Gino Med jamoasi sizga xavfsiz, maxfiy va hurmat asosida yordam berişğa tayyor.",
    finalCall: "Qönğiroq qiliş: +998 99 766 34 33",
    finalTelegram: "Telegram orqali yoziş"
  };

  const CONTENT = {
    lat: latContent,
    cyr: cyrContent,
    lat26: lat26Content
  };

  function renderArticle() {
    var lang = (localStorage.getItem('gino_lang') || 'lat');
    var C = CONTENT[lang] || CONTENT['lat'];
    if (!C) return;
    document.documentElement.lang = lang === 'cyr' ? 'uz-Cyrl' : 'uz';
    var main = document.getElementById('article-main');
    if (!main) return;

    var h = '';

    /* HERO */
    h += '<section class="glass article-hero">';
    h += '<h1>' + C.heroTitle + '</h1>';
    h += '<p>' + C.heroIntro + '</p>';
    h += '<div class="article-cta-inline">';
    h += '<a href="tel:+998997663433" class="btn btn-solid">' + (C.ctaCall||'') + '</a>';
    h += '<a href="https://t.me/devioruz" target="_blank" rel="noopener noreferrer" class="btn btn-outline glass-chip">' + (C.ctaTelegram||'') + '</a>';
    h += '</div></section>';

    /* AI SUMMARY for LLMs/SEO */
    if (C.aiSummaryTitle || C.aiSummaryText) {
      h += '<section class="glass article-section">';
      if (C.aiSummaryTitle) h += '<h2>' + C.aiSummaryTitle + '</h2>';
      if (C.aiSummaryText) h += '<p>' + C.aiSummaryText + '</p>';
      h += '</section>';
    }

    if (C.s1_title) {
      h += '<section class="glass article-section"><h2>' + C.s1_title + '</h2>';
      if (C.s1_p1) h += '<p>' + C.s1_p1 + '</p>';
      if (C.s1_p2) h += '<p>' + C.s1_p2 + '</p>';
      if (C.s1_p3) h += '<p>' + C.s1_p3 + '</p>';
      if (C.s1_sub) h += '<h3>' + C.s1_sub + '</h3>';
      if (C.s1_by_onset_title) {
        h += '<div><strong>' + C.s1_by_onset_title + '</strong><ul>';
        if (C.s1_primary) h += '<li>' + C.s1_primary + '</li>';
        if (C.s1_secondary) h += '<li>' + C.s1_secondary + '</li>';
        h += '</ul></div>';
      }
      if (C.s1_by_level_title) {
        h += '<div><strong>' + C.s1_by_level_title + '</strong><ul>';
        if (C.s1_full) h += '<li>' + C.s1_full + '</li>';
        if (C.s1_partial) h += '<li>' + C.s1_partial + '</li>';
        h += '</ul></div>';
      }
      if (C.s1_by_cause_title) {
        h += '<div><strong>' + C.s1_by_cause_title + '</strong><ul>';
        if (C.s1_phobic) h += '<li>' + C.s1_phobic + '</li>';
        if (C.s1_hysterical) h += '<li>' + C.s1_hysterical + '</li>';
        h += '</ul></div>';
      }
      if (C.s1_note) {
        h += '<div class="note-box">' + C.s1_note + '</div>';
      }
      h += '</section>';
    }

    /* S2: Vaginizm belgilari */
    if (C.s2_title) {
      h += '<section class="glass article-section"><h2>' + C.s2_title + '</h2>';
      if (C.s2_intro) h += '<p>' + C.s2_intro + '</p>';
      if (Array.isArray(C.s2_items)) {
        h += '<ul>';
        for (var i = 0; i < C.s2_items.length; i++) {
          h += '<li>' + C.s2_items[i] + '</li>';
        }
        h += '</ul>';
      }
      if (C.s2_note_title || C.s2_note_text) {
        h += '<div class="note-box">';
        if (C.s2_note_title) h += '<strong>' + C.s2_note_title + '</strong> ';
        if (C.s2_note_text) h += C.s2_note_text;
        h += '</div>';
      }
      h += '</section>';
    }

    /* S3: Vaginizm sabablari */
    if (C.s3_title) {
      h += '<section class="glass article-section"><h2>' + C.s3_title + '</h2>';
      if (C.s3_intro) h += '<p>' + C.s3_intro + '</p>';

      if (Array.isArray(C.s3_psycho_items)) {
        h += '<div><strong>' + (C.s3_psycho_title || '') + '</strong><ul>';
        for (var i = 0; i < C.s3_psycho_items.length; i++) {
          h += '<li>' + C.s3_psycho_items[i] + '</li>';
        }
        h += '</ul></div>';
      }

      if (Array.isArray(C.s3_phys_items)) {
        h += '<div><strong>' + (C.s3_phys_title || '') + '</strong><ul>';
        for (var i = 0; i < C.s3_phys_items.length; i++) {
          h += '<li>' + C.s3_phys_items[i] + '</li>';
        }
        h += '</ul></div>';
      }

      if (C.s3_note) h += '<div class="note-box">' + C.s3_note + '</div>';
      if (C.s3_gino) h += '<p>' + C.s3_gino + '</p>';
      h += '</section>';
    }

    /* S4: Qachon shifokorga murojaat qilish kerak? */
    if (C.s4_title) {
      h += '<section class="glass article-section"><h2>' + C.s4_title + '</h2>';
      if (C.s4_intro) h += '<p>' + C.s4_intro + '</p>';
      if (Array.isArray(C.s4_items)) {
        h += '<ul>';
        for (var i = 0; i < C.s4_items.length; i++) {
          h += '<li>' + C.s4_items[i] + '</li>';
        }
        h += '</ul>';
      }
      if (C.s4_note) h += '<div class="note-box">' + C.s4_note + '</div>';
      h += '</section>';
    }

    /* S5: Tashxis qanday qo'yiladi? */
    if (C.s5_title) {
      h += '<section class="glass article-section"><h2>' + C.s5_title + '</h2>';
      if (C.s5_intro) h += '<p>' + C.s5_intro + '</p>';
      if (C.s5_gino_intro) h += '<p><strong>' + C.s5_gino_intro + '</strong></p>';
      if (Array.isArray(C.s5_steps)) {
        h += '<ol>';
        for (var i = 0; i < C.s5_steps.length; i++) {
          var s = C.s5_steps[i];
          h += '<li><strong>' + (s.t || '') + '</strong>: ' + (s.d || '') + '</li>';
        }
        h += '</ol>';
      }
      if (C.s5_note) h += '<div class="note-box">' + C.s5_note + '</div>';
      h += '</section>';
    }

    /* S6: Davolash usullari */
    if (C.s6_title) {
      h += '<section class="glass article-section"><h2>' + C.s6_title + '</h2>';
      if (C.s6_intro) h += '<p>' + C.s6_intro + '</p>';

      if (C.s6_psycho_title || C.s6_psycho_text) {
        h += '<div class="article-subsection">';
        if (C.s6_psycho_title) h += '<h3>' + C.s6_psycho_title + '</h3>';
        if (C.s6_psycho_text) h += '<p>' + C.s6_psycho_text + '</p>';
        h += '</div>';
      }

      if (C.s6_kegel_title || C.s6_kegel_text) {
        h += '<div class="article-subsection">';
        if (C.s6_kegel_title) h += '<h3>' + C.s6_kegel_title + '</h3>';
        if (C.s6_kegel_text) h += '<p>' + C.s6_kegel_text + '</p>';
        h += '</div>';
      }

      if (C.s6_dilators_title || C.s6_dilators_text) {
        h += '<div class="article-subsection">';
        if (C.s6_dilators_title) h += '<h3>' + C.s6_dilators_title + '</h3>';
        if (C.s6_dilators_text) h += '<p>' + C.s6_dilators_text + '</p>';
        h += '</div>';
      }

      if (C.s6_botox_title || C.s6_botox_text) {
        h += '<div class="article-subsection">';
        if (C.s6_botox_title) h += '<h3>' + C.s6_botox_title + '</h3>';
        if (C.s6_botox_text) h += '<p>' + C.s6_botox_text + '</p>';
        h += '</div>';
      }

      if (C.s6_home_title || C.s6_home_text) {
        h += '<div class="article-subsection">';
        if (C.s6_home_title) h += '<h3>' + C.s6_home_title + '</h3>';
        if (C.s6_home_text) h += '<p>' + C.s6_home_text + '</p>';
        h += '</div>';
      }

      h += '</section>';
    }

    /* S7: Davolash qancha vaqtda natija beradi? */
    if (C.s7_title) {
      h += '<section class="glass article-section"><h2>' + C.s7_title + '</h2>';
      if (C.s7_intro) h += '<p>' + C.s7_intro + '</p>';
      if (Array.isArray(C.s7_list)) {
        h += '<ul>';
        for (var i = 0; i < C.s7_list.length; i++) {
          h += '<li>' + C.s7_list[i] + '</li>';
        }
        h += '</ul>';
      }
      if (C.s7_note) h += '<div class="note-box">' + C.s7_note + '</div>';
      h += '</section>';
    }

    /* S8: Vaginizm bilan homilador bo'lish mumkinmi? */
    if (C.s8_title) {
      h += '<section class="glass article-section"><h2>' + C.s8_title + '</h2>';
      if (C.s8_intro) h += '<p>' + C.s8_intro + '</p>';
      if (C.s8_item1 || C.s8_item2) {
        h += '<ul>';
        if (C.s8_item1) h += '<li>' + C.s8_item1 + '</li>';
        if (C.s8_item2) h += '<li>' + C.s8_item2 + '</li>';
        h += '</ul>';
      }
      if (C.s8_note) h += '<div class="note-box">' + C.s8_note + '</div>';
      h += '</section>';
    }

    /* S9: Miflar va haqiqatlar */
    if (C.s9_title && Array.isArray(C.s9_rows)) {
      h += '<section class="glass article-section"><h2>' + C.s9_title + '</h2>';
      h += '<div class="myths-table">';
      for (var i = 0; i < C.s9_rows.length; i++) {
        var r = C.s9_rows[i];
        h += '<div class="myth-row">';
        if (r.m) h += '<div class="myth"><strong>Mif:</strong> ' + r.m + '</div>';
        if (r.r) h += '<div class="truth"><strong>Haqiqat:</strong> ' + r.r + '</div>';
        h += '</div>';
      }
      h += '</div></section>';
    }

    /* S10: FAQ accordion */
    if (C.s10_title && Array.isArray(C.s10_items)) {
      h += '<section class="glass article-section"><h2>' + C.s10_title + '</h2><div class="faq-list">';
      for (var i = 0; i < C.s10_items.length; i++) {
        var q = C.s10_items[i];
        h += '<div class="faq-item">';
          h += '<button class="faq-question" type="button">' + (q.q || '') + '</button>';
          h += '<div class="faq-answer"><p>' + (q.a || '') + '</p></div>';
        h += '</div>';
      }
      h += '</div></section>';
    }

    /* Final CTA */
    if (C.finalTitle) {
      h += '<section class="glass article-final-cta">';
      if (C.finalTitle) h += '<h2>' + C.finalTitle + '</h2>';
      if (C.finalText) h += '<p>' + C.finalText + '</p>';
      h += '<div class="article-cta-inline">';
        h += '<a href="tel:+998997663433" class="btn btn-solid">' + (C.finalCall || 'Qo\'ng\'iroq qilish') + '</a>';
        if (C.finalTelegram) {
          h += '<a href="https://t.me/devioruz" target="_blank" rel="noopener noreferrer" class="btn btn-outline glass-chip">' + C.finalTelegram + '</a>';
        }
      h += '</div></section>';
    }

    main.innerHTML = h;

    /* FAQ toggle behavior */
    var faqButtons = main.querySelectorAll('.faq-question');
    for (var i = 0; i < faqButtons.length; i++) {
      faqButtons[i].addEventListener('click', function () {
        var item = this.parentElement;
        if (!item) return;
        var answer = item.querySelector('.faq-answer');
        var isOpen = item.classList.contains('open');
        // close all
        var allItems = main.querySelectorAll('.faq-item.open');
        for (var j = 0; j < allItems.length; j++) {
          allItems[j].classList.remove('open');
          var a = allItems[j].querySelector('.faq-answer');
          if (a) { a.style.maxHeight = null; }
        }
        // toggle current
        if (!isOpen && answer) {
          item.classList.add('open');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    }
  }

  /* Expose globally for language switch */
  window.renderVaginizmArticle = renderArticle;

  /* Run on load */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      renderArticle();
    });
  } else {
    renderArticle();
  }

})();

/* Hook into main.js render() if present, so language change re-renders article */
(function () {
  var originalRender = window.render;
  if (typeof originalRender === 'function') {
    window.render = function () {
      originalRender.apply(this, arguments);
      if (typeof window.renderVaginizmArticle === 'function') {
        window.renderVaginizmArticle();
      }
    };
  }
})();
