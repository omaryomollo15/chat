console.log('data.js loaded successfully');

// --- Data for Chatbot Responses ---
const botResponses = {
    "utter_greet": "Habari! Karibu Onfon Microfinance Tz. Nipo hapa kukusaidia kufanikisha mauzo, unahitaji msaada gani kwa sasa?",
    "utter_ask_bot_identity": "Mimi ni OnfonMobile TZ, nipo hapa kukusaidia kufanikisha mauzo. Unaweza kuniuliza chochote! Unahitaji msaada zaidi, nipo kukusaidia.",
    "utter_ask_sales_process": `HATUA ZA KUFANYA MAUZO:

1. Mchakato wa Mauzo Huanza Kwa kumsajili Mteja Kupitia USSD *147*04#. Mteja ni lazima awe na laini iliyosajiliwa kwa namba yake ya NIDA, namba ya NIDA na asilimia 30% ya kianzio ili kuwezesha usajili wake. NB: Kabla ya kuingiza taarifa za mteja kwenye mfumo wetu (Portal), hakikisha kuwa mteja amesajiliwa kikamilifu, amepata SMS ya simu anazoweza kukopa na laini yake ya Vodacom ina hela ya kianzio.

2. Baada Ya Usajili kukamilika Anza Kujaza Taarifa Za Mteja Kwenye Mfumo Wetu (Portal).

i. Unaweza kutumia kimoja kati ya hivi kumtafuta mteja kwenye mfumo:
  - Namba ya simu au
  - Namba ya NIDA.
    NB: Hakikisha umeweka namba sahihi iliyosajiliwa kupitia USSD ili kuanza mchakato wako wa mauzo.

ii. Bonyeza “Add Loan” ili kuweka namba ya NIDA kwenye portal kwa ajili ya kuthibitisha taarifa za NIDA za mteja unayemuuzia simu.
  - Hakikisha NIDA namba ni sahihi. Endapo kama utakosea namba ya NIDA, basi hutaweza kuhakiki alama za vidole au kupata maswali kwenye mfumo. Hivyo basi, utashindwa kuendelea na mchakato wa mauzo. Thibitisha mara mbili kama namba ni sahihi kabla ya kuanza kufanya uthibitisho wa mteja kwa njia ya maswali au kuscan alama za vidole.

iii. Thibitisha taarifa za mteja kwa kubonyeza “Confirm” mara tu picha ya mteja inapojitokeza.
iv. Chagua aina ya simu anayoihitaji mteja.
v. Hakiki rangi na ukubwa (storage) ya simu uliyoichagua kutoka kwenye orodha.
vi. Tuma OTP. Utapata OTP mbili, moja ya muuzaji na nyingine ya mteja.
vii. Thibitisha umepokea OTP ili kujaza taarifa za hatua inayofuata.
viii. Anza kuweka OTP yako uliyotumiwa, kisha weka OTP ya mteja.
ix. Weka IMEI ya kwanza ya simu unayomuuzia mteja. Hakikisha ni sahihi.
x. Wasilisha taarifa kwa kubonyeza “Submit” ili kutuma STK push ya kufanya malipo ya awali kwa mteja.
xi. Baada ya kujiridhisha kuwa malipo yamepokelewa na Onfon bonyeza “Confirm” ili kufungua kipengele cha kulock simu. Hapa zitakuja hatua za kulock simu kulingana na aina ya simu aliyoichagua mteja. Unahitaji msaada zaidi, nipo kukusaidia.`,
    "utter_ask_payment_methods": `JINSI YA KUFANYA MALIPO:
Kuna njia tatu za kufanya malipo ya mkopo wako:-
1. Kwa kutumia USSD:
   - Piga *147*04#, chagua namba 2 kulipa mkopo.

2. Kwa kutumia Application ya OnfonMicrofinance:
   - Weka namba ya simu ya mteja ikianza na +255 na namba ya siri ya mteja (Namba 4 za mwanzo alizoweka wakati anajisajili kupitia USSD) kisha bonyeza kitufe cha Login.

3. Kwa Kutumia M-PESA:
   - Piga *150*00#
   - Chagua kulipa kwa Mpesa
   - Ingiza Lipa Namba 277700
   - Weka Namba ya NIDA au namba ya simu ya mteja yenye mkopo kama namba ya kumbukumbu ya malipo (zingatia sana hapa).
   - Weka kiasi
   - Weka Namba ya siri
   - Thibitisha Muamala

NB: KUMBUKA YAFUATAYO:
- Mkumbushe mteja kufanya malipo kabla ya masaa 24 kupita ili simu yake isijilock.
- Hakikisha mteja anafahamu namba ya huduma kwa wateja ambayo ni 0748770112.
- Malipo hufanywa kwa siku, wiki, mwezi au kiasi kingine chochote anachopendelea mteja.
- Mfano: siku mbili, tatu, miezi miwili nk.
- Mkumbushe mteja kufanya malipo mapema laini aliyokopea ikiwa ndani ya simu ili kuepusha simu yake kujifunga.
- Anapolipia mkumbushe awashe data ili simu yake isijifunge, inapotokea ameshindwa kabisa kupata usaidizi muelekeze apige simu huduma kwa wateja 0748770112. Unahitaji msaada zaidi, nipo kukusaidia.`,
    "utter_ask_maintenance": `MATENGENEZO:

Matengenezo yote ya simu yafanyike katika vituo elekezi vya maduka ya VODACOM. Matatizo ya kimfumo pekee ndiyo yatakayofanyiwa kazi bila gharama kwa muda ambao simu itakuwa ndani ya warantii.
 
-Mlimani city-(Dar) 
-SGR (Dar)
-Tunduru(Pwani).
-Arusha-sokoine karibu na Clock Tower. 
 
-Dodoma-Mkabala na TRA.
-Morogoro Mjini. 
-Singida-Mjini. 
-Mwanza Nyamagana/Posta. 
-Tabora-Mtaa Wa Sokoine. 
 
-Kigoma-Mjini.
-Mbeya Mjini-Lupaway 
-Songea -Mjini 
-Musoma Mkonde PLaza.
 
Unahitaji msaada zaidi, nipo kukusaidia.`,
    "utter_ask_lost_phone": `Ikiwa umepoteza simu yako, fuata hatua hizi:

- Kama mteja atapoteza simu, piga huduma kwa wateja 0748770112 kwa maelekezo na msaada zaidi.
- Mteja anapaswa kuripoti taarifa hiyo kituo cha Polisi mara baada ya tukio ili kupata barua ya upotevu wa simu yako.
- Ambatanisha taarifa zako na kopi ya NIDA kisha utume kwenye anuani yetu: customercare@onfonmicrofinance.co.tz. Unahitaji msaada zaidi, nipo kukusaidia.`,
    "utter_all_lock_solutions": `HATUA ZA KULOCK SIMU KWA KILA LOCK SOLUTION:

1. V-Trust (Vivo):
   a) Hakikisha simu ni mpya na haijawashwa.
   b) Fungua boksi, fuata hatua za kuwasha simu.
   c) Usiunganishe intaneti kabla ya kuweka IMEI ya kwanza kwenye mfumo (hakikisha IMEI sahihi).
   d) Unganisha simu na intaneti thabiti.
   e) Bonyeza kitufe cha kutuma AUTH CODE kwenye portal.
   f) Fuata hatua za kuwasha simu hadi iwake kabisa.
   g) Katika ubao wa taarifa, pata CODE ya V-Trust, iandike kwenye portal.
   h) Thibitisha Code kwenye portal, bonyeza CODE kusanikisha V-Trust.
   i) Kubali hatua zote hadi ujumbe 'UIDHINISHO UMEFANIKIWA (ACTIVATION SUCCESS)' uonekane, bonyeza OK.
   j) Rudi kwenye portal kuthibitisha Lock Solution.

2. Pay Trigger (Tecno, Infinix, Itel, Phillips):
   a) Fungua boksi la simu.
   b) Washa simu.
   c) Kataa machaguo yasiyo ya lazima yanayoweza kuchelewesha kuwaka.
   d) Kubali machaguo yanayohusisha ruhusa za leseni na mifumo.
   e) Kamilisha mipangilio hadi uone aplikesheni za simu.
   f) Unganisha simu na intaneti kusanikisha Lock Solution.
   g) Kubali hatua zote kwa kubonyeza vitufe sahihi.
   h) Baada ya kusanikisha Pay Trigger, rudi kwenye portal kuthibitisha Lock Solution.

3. O-Guard (Oppo):
   a) Fungua boksi la simu.
   b) Washa simu.
   c) Kataa machaguo yasiyo ya lazima yanayoweza kuchelewesha kuwaka.
   d) Kubali machaguo yanayohusisha ruhusa za leseni na mifumo.
   e) Kamilisha mipangilio hadi uone aplikesheni za simu.
   f) Unganisha simu na intaneti kusanikisha Lock Solution.
   g) Kubali hatua zote kwa kubonyeza vitufe sahihi.
   h) Baada ya kusanikisha O-Guard, rudi kwenye portal kuthibitisha Lock Solution.

4. Trustonic (Samsung):
   Fuata maagizo ya mfumo wa mauzo wa Onfon Microfinance. Kwa sasa, hatua za kina za Trustonic hazijapatikana. Rudi kwenye portal kwa maelezo zaidi au wasiliana na timu ya msaada.

5. Think Adams (Realme, Honor, ZTE, nyingine):
   a) Washa simu.
   b) Bonyeza mara 5-7 katika display ambayo haijaandikwa kitu ili kufungua Camera.
   c) Skani QR Code iliyopo kwenye portal.
   d) Unganisha simu na Wi-Fi.
   e) Kubali hatua zinazofuata hadi simu inapofikia hatua ya mwisho ili kuinstall lock solution.
   f) Hakikisha Think Adams DPC imekuwa installed kwenye simu ya mteja pamoja na Aplikesheni ya Onfon Microfinance.
   g) Ingia kwenye Think Adams DPC na urefresh app hadi itakapokuonesha “Last Sync” yenye tarehe na muda ambao umelock simu.
   h) Baada ya kuona tarehe na muda kwenye Lock Solution, rudi kwenye Portal ili kuconfirm Lock solution.
   i) Hakikisha Lock na Loan vinasoma Active kabla ya kumpatia mteja simu yake.

ZINGATIA:
- Hakikisha IMEI ya kwanza ni sahihi kabla ya kuwasilisha taarifa.
- Simu lazima iunganishwe na intaneti thabiti wakati wa kusanikisha Lock Solution.
- Usithibitishe Lock Solution kwenye portal kabla ya kukamilisha usanikishaji.
Unahitaji msaada zaidi, nipo kukusaidia.`,
    "utter_lock_phone": `Ili kulock simu, kila brand inatumia Lock Solution yake:
- Vivo: V-Trust
- Tecno, Infinix, Itel, Phillips: Pay Trigger
- Oppo: O-Guard
- Samsung: Trustonic
- Realme, Honor, ZTE: Think Adams
Taja brand (k.m., Realme) au lock type (k.m., Think Adams) kwa maelezo ya hatua za kulock, au uliza 'lock solutions zote' kwa maelezo yote. Unahitaji msaada zaidi, nipo kukusaidia.`,
    "utter_thank_you": "Karibu tena, nakutakia mauzo mema. Unahitaji msaada zaidi, nipo kukusaidia.",
    "utter_fallback": "Pole! Likonje ya uwezo wangu, tafadhali wasiliana na IT Team kwa msaada zaidi. Unahitaji msaada zaidi, nipo kukusaidia."
};

const phonePricingData = {
    "oppo a18 4/64gb": {"brand": "oppo", "lock_solution": "O-Guard", "bei": 300000, "kianzio": 90000, "siku": 1700, "wiki": 11900, "mwezi": 51000},
    "oppo a18 4/128gb": {"brand": "oppo", "lock_solution": "O-Guard", "bei": 350000, "kianzio": 108000, "siku": 2000, "wiki": 14000, "mwezi": 60000},
    "oppo a38 4/128gb": {"brand": "oppo", "lock_solution": "O-Guard", "bei": 440000, "kianzio": 132000, "siku": 2400, "wiki": 16800, "mwezi": 72000},
    "oppo a58 6/128gb": {"brand": "oppo", "lock_solution": "O-Guard", "bei": 510000, "kianzio": 153000, "siku": 2700, "wiki": 18900, "mwezi": 81000},
    "oppo a58 8/128gb": {"brand": "oppo", "lock_solution": "O-Guard", "bei": 590000, "kianzio": 177000, "siku": 3100, "wiki": 21700, "mwezi": 93000},
    "oppo a3x 4/64gb": {"brand": "oppo", "lock_solution": "O-Guard", "bei": 330000, "kianzio": 99000, "siku": 1900, "wiki": 13300, "mwezi": 57000},
    "oppo a3x 4/128gb": {"brand": "oppo", "lock_solution": "O-Guard", "bei": 399000, "kianzio": 119700, "siku": 2200, "wiki": 15400, "mwezi": 66000},
    "vivo y28 8/256gb": {"brand": "vivo", "lock_solution": "V-Trust", "bei": 559000, "kianzio": 167700, "siku": 3000, "wiki": 21000, "mwezi": 90000},
    "vivo y18 6/128gb": {"brand": "vivo", "lock_solution": "V-Trust", "bei": 390000, "kianzio": 117000, "siku": 2200, "wiki": 15400, "mwezi": 66000},
    "vivo y03 4/128gb": {"brand": "vivo", "lock_solution": "V-Trust", "bei": 332000, "kianzio": 99600, "siku": 1900, "wiki": 13300, "mwezi": 57000},
    "vivo y03 4/64gb": {"brand": "vivo", "lock_solution": "V-Trust", "bei": 289000, "kianzio": 86700, "siku": 1700, "wiki": 11900, "mwezi": 51000},
    "vivo y19s 6/128gb": {"brand": "vivo", "lock_solution": "V-Trust", "bei": 380000, "kianzio": 114000, "siku": 2100, "wiki": 14700, "mwezi": 63000},
    "samsung a05 4/128gb": {"brand": "samsung", "lock_solution": "Trustonic", "bei": 325000, "kianzio": 97500, "siku": 1900, "wiki": 13300, "mwezi": 57000},
    "samsung a05 4/64gb": {"brand": "samsung", "lock_solution": "Trustonic", "bei": 300000, "kianzio": 90000, "siku": 1700, "wiki": 11900, "mwezi": 51000},
    "samsung a05s 4/64gb": {"brand": "samsung", "lock_solution": "Trustonic", "bei": 355000, "kianzio": 106500, "siku": 2000, "wiki": 14000, "mwezi": 60000},
    "samsung a05s 4/128gb": {"brand": "samsung", "lock_solution": "Trustonic", "bei": 380000, "kianzio": 114000, "siku": 2100, "wiki": 14700, "mwezi": 63000},
    "infinix note 30 pro 8/256gb": {"brand": "infinix", "lock_solution": "Pay Trigger", "bei": 480000, "kianzio": 144000, "siku": 2600, "wiki": 18200, "mwezi": 78000},
    "infinix smart 8 3/64gb": {"brand": "infinix", "lock_solution": "Pay Trigger", "bei": 269000, "kianzio": 80700, "siku": 1600, "wiki": 11200, "mwezi": 48000},
    "infinix smart 9 4/128gb": {"brand": "infinix", "lock_solution": "Pay Trigger", "bei": 328000, "kianzio": 98400, "siku": 1900, "wiki": 13300, "mwezi": 57000},
    "infinix hot50i 4g/128gb": {"brand": "infinix", "lock_solution": "Pay Trigger", "bei": 340000, "kianzio": 102000, "siku": 1900, "wiki": 13300, "mwezi": 57000},
    "infinix hot 40i 8/256gb": {"brand": "infinix", "lock_solution": "Pay Trigger", "bei": 333000, "kianzio": 99900, "siku": 1900, "wiki": 13300, "mwezi": 57000},
    "infinix hot 50 pro+ 8/256gb": {"brand": "infinix", "lock_solution": "Pay Trigger", "bei": 590000, "kianzio": 177000, "siku": 3100, "wiki": 21700, "mwezi": 93000},
    "tecno camon 30s 128gb/6gb": {"brand": "tecno", "lock_solution": "Pay Trigger", "bei": 580000, "kianzio": 174000, "siku": 3100, "wiki": 21600, "mwezi": 93000},
    "tecno spark 30c 128gb/4gb": {"brand": "tecno", "lock_solution": "Pay Trigger", "bei": 330000, "kianzio": 99000, "siku": 1900, "wiki": 13300, "mwezi": 57000},
    "realme c61 6/128gb": {"brand": "realme", "lock_solution": "Think Adams", "bei": 350000, "kianzio": 105000, "siku": 2000, "wiki": 14000, "mwezi": 60000},
    "realme c61 6/256gb": {"brand": "realme", "lock_solution": "Think Adams", "bei": 360000, "kianzio": 108000, "siku": 2000, "wiki": 14000, "mwezi": 60000},
    "realme note 50 4/128gb": {"brand": "realme", "lock_solution": "Think Adams", "bei": 290000, "kianzio": 87000, "siku": 1700, "wiki": 11900, "mwezi": 51000},
    "realme note 50 6/64gb": {"brand": "realme", "lock_solution": "Think Adams", "bei": 250000, "kianzio": 75000, "siku": 1500, "wiki": 10500, "mwezi": 45000},
    "honor x7b 8/256gb": {"brand": "honor", "lock_solution": "Think Adams", "bei": 500000, "kianzio": 150000, "siku": 2700, "wiki": 18900, "mwezi": 81000},
    "honor x6b 256gb/6gb": {"brand": "honor", "lock_solution": "Think Adams", "bei": 400000, "kianzio": 120000, "siku": 2200, "wiki": 15400, "mwezi": 66000},
    "honor x6b 128gb/6gb": {"brand": "honor", "lock_solution": "Think Adams", "bei": 365000, "kianzio": 109500, "siku": 2000, "wiki": 14000, "mwezi": 60000},
    "honor x5plus 64gb/4gb": {"brand": "honor", "lock_solution": "Think Adams", "bei": 280000, "kianzio": 84000, "siku": 1700, "wiki": 11900, "mwezi": 51000},
    "hisense e70 pro 128gb/4gb": {"brand": "hisense", "lock_solution": "Think Adams", "bei": 280000, "kianzio": 84000, "siku": 1700, "wiki": 11900, "mwezi": 51000},
    "hisense e71 64gb/4gb": {"brand": "hisense", "lock_solution": "Think Adams", "bei": 250000, "kianzio": 75000, "siku": 1500, "wiki": 10500, "mwezi": 45000},
    "zte a35 4g/64gb": {"brand": "zte", "lock_solution": "Think Adams", "bei": 250000, "kianzio": 75000, "siku": 1500, "wiki": 10500, "mwezi": 45000},
    "zte a55 4g/128gb": {"brand": "zte", "lock_solution": "Think Adams", "bei": 290000, "kianzio": 87000, "siku": 1700, "wiki": 11900, "mwezi": 51000}
};

const lockSolutionSteps = {
    "v-trust": `Lock Solution ya V-Trust inatumika kwa simu za Vivo. Hatua za kulock:
a) Hakikisha simu ni mpya na haijawashwa.
b) Fungua boksi, fuata hatua za kuwasha simu.
c) Usiunganishe intaneti kabla ya kuweka IMEI ya kwanza kwenye mfumo (hakikisha IMEI sahihi).
d) Unganisha simu na intaneti thabiti.
e) Bonyeza kitufe cha kutuma AUTH CODE kwenye portal.
f) Fuata hatua za kuwasha simu hadi iwake kabisa.
g) Katika ubao wa taarifa, pata CODE ya V-Trust, iandike kwenye portal.
h) Thibitisha Code kwenye portal, bonyeza CODE kusanikisha V-Trust.
i) Kubali hatua zote hadi ujumbe 'UIDHINISHO UMEFANIKIWA (ACTIVATION SUCCESS)' uonekane, bonyeza OK.
j) Rudi kwenye portal kuthibitisha Lock Solution.`,
    "pay trigger": `Lock Solution ya Pay Trigger inatumika kwa simu za Transsion (Tecno, Infinix, Itel, Phillips). Hatua za kulock:
a) Fungua boksi la simu.
b) Washa simu.
c) Kataa machaguo yasiyo ya lazima yanayoweza kuchelewesha kuwaka.
d) Kubali machaguo yanayohusisha ruhusa za leseni na mifumo.
e) Kamilisha mipangilio hadi uone aplikesheni za simu.
f) Unganisha simu na intaneti kusanikisha Lock Solution.
g) Kubali hatua zote kwa kubonyeza vitufe sahihi.
h) Baada ya kusanikisha Pay Trigger, rudi kwenye portal kuthibitisha Lock Solution.`,
    "o-guard": `Lock Solution ya O-Guard inatumika kwa simu za Oppo. Hatua za kulock:
a) Fungua boksi la simu.
b) Washa simu.
c) Kataa machaguo yasiyo ya lazima yanayoweza kuchelewesha kuwaka.
d) Kubali machaguo yanayohusisha ruhusa za leseni na mifumo.
e) Kamilisha mipangilio hadi uone aplikesheni za simu.
f) Unganisha simu na intaneti kusanikisha Lock Solution.
g) Kubali hatua zote kwa kubonyeza vitufe sahihi.
h) Baada ya kusanikisha O-Guard, rudi kwenye portal kuthibitisha Lock Solution.`,
    "trustonic": `Lock Solution ya Trustonic inatumika kwa simu za Samsung. Hatua za kulock:
Tafadhali fuata maagizo ya mfumo wa mauzo wa Onfon Microfinance. Kwa sasa, hatua za kina za Trustonic hazijapatikana. Rudi kwenye portal kwa maelezo zaidi au wasiliana na timu ya msaada.`,
    "think adams": `Lock Solution ya Think Adams inatumika kwa simu za Realme, Honor, ZTE, na zingine. Hatua za kulock:
a) Washa simu.
b) Bonyeza mara 5-7 katika display ambayo haijaandikwa kitu ili kufungua Camera.
c) Skani QR Code iliyopo kwenye portal.
d) Unganisha simu na Wi-Fi.
e) Kubali hatua zinazofuata hadi simu inapofikia hatua ya mwisho ili kuinstall lock solution.
f) Hakikisha Think Adams DPC imekuwa installed kwenye simu ya mteja pamoja na Aplikesheni ya Onfon Microfinance.
g) Ingia kwenye Think Adams DPC na urefresh app hadi itakapokuonesha “Last Sync” yenye tarehe na muda ambao umelock simu.
h) Baada ya kuona tarehe na muda kwenye Lock Solution, rudi kwenye Portal ili kuconfirm Lock solution.
i) Hakikisha Lock na Loan vinasoma Active kabla ya kumpatia mteja simu yake.`
};

const brandToLockType = {
    "vivo": "v-trust",
    "tecno": "pay trigger",
    "infinix": "pay trigger",
    "itel": "pay trigger",
    "phillips": "pay trigger",
    "oppo": "o-guard",
    "samsung": "trustonic",
    "realme": "think adams",
    "honor": "think adams",
    "zte": "think adams",
    "hisense": "think adams"
};

// Updated Keyword Arrays from NLU Data
const greetings = [
    "hi",
    "hello",
    "mambo",
    "Mambo",
    "mambo vipi",
    "habari",
    "Habari yako",
    "habari za asubuhi",
    "jambo",
    "Jambo vipi",
    "salaam",
    "vipi",
    "Vipi sasa",
    "za asubuhi",
    "za mchana",
    "za jioni",
    "za usiku",
    "habari za mchana",
    "habari za jioni",
    "sasa",
    "poa",
    "shikamoo",
    "niaje",
    "salama",
    "heko",
    "safi",
    "kipekee",
    "karibu"
];

const thankYouKeywords = [
    "penda",
    "nimesaidika",
    "saidia",
    "nimemaliza",
    "saidika",
    "saidiwa",
    "fanikiwa",
    "nimefurahi",
    "furahi",
    "Asante",
    "Shukrani",
    "Asante sana",
    "Nashukuru",
    "Shukuru",
    "Asante kweli",
    "Shukrani za dhati",
    "Asante mno",
    "Nashukuru sana",
    "Shukrani nyingi",
    "Asante tena",
    "Shukuru kweli",
    "Asante rafiki",
    "Nashukuru mno",
    "Shukrani za moyo"
];

const salesProcessKeywords = [
    "mauzo",
    "jinsi ya kukopesha simu",
    "mkopo wa simu",
    "kukopa simu",
    "kukopesha simu",
    "nakopesha",
    "kopesha",
    "Nawezaje kufanya mauzo ya simu?",
    "Mchakato wa mauzo ni upi?",
    "Nifanye nini ili niuzie simu?",
    "Je, mauzo yanafanyika vipi?",
    "Ninawezaje kuuza simu kwa wateja?",
    "Mchakato wa kuuza simu ni upi?",
    "Nianzie wapi kuuza simu?",
    "Je, ni hatua gani za mauzo?",
    "Mauzo ya simu yanahitaji nini?",
    "Ninawezaje kuanza mauzo?",
    "Mteja anapaswa kufanya nini kwa mauzo?",
    "Je, ni mchakato gani wa mauzo?",
    "Nifuate hatua zipi kuuza simu?",
    "Mauzo yanahitaji maandalizi gani?",
    "Je, ninauzaje simu kwa usahihi?",
    "Mchakato wa mauzo unahusisha nini?",
    "Ninawezaje kumudu mauzo ya simu?",
    "Hatua za mauzo za simu ni zipi?",
    "Je, ni vipi ninaweza kuuza simu?",
    "Mauzo ya simu yanafanyaje?",
    "Nifanyeje ili mauzo yaende sawa?",
    "Je, mauzo ya simu yanajumuisha nini?",
    "Ninawezaje kushiriki katika mauzo?",
    "Mchakato wa mauzo unachukua muda gani?",
    "Je, ni nini kinachohitajika kwa mauzo?"
];

const paymentMethodsKeywords = [
    "mteja anataka kulipia",
    "lipia",
    "Malipo",
    "nawezaje kulipia",
    "malipo ya simu",
    "simu ya mteja imefungwa",
    "imefungwa",
    "imefungiwa",
    "simu ya mteja imefungiwa",
    "imezimwa",
    "simu ya mteja imezimwa",
    "kufanya malipo",
    "kufanyamalipo",
    "Je, ni njia gani za malipo zinazokubalika?",
    "Nitalipaje kwa simu?",
    "Malipo yanafanyika vipi?",
    "Ninawezaje kulipa simu?",
    "Je, kuna njia zipi za malipo?",
    "Malipo ya simu yanakubali vipi?",
    "Nitalipa kwa njia gani?",
    "Je, naweza kulipa vipi?",
    "Malipo yanahitaji nini?",
    "Ninawezaje kufanya malipo?",
    "Je, ni chaguzi gani za malipo?",
    "Malipo ya simu yanafanyaje?"
];

const maintenanceKeywords = [
    "nimeharibu simu",
    "mteja ameharibu simu",
    "simu ya mteja imeharibika",
    "imeharibika",
    "haribu",
    "Je, ninawezaje kutunza simu?",
    "Simu inahitaji matengenezo gani?",
    "Nifanye nini ili simu idumu?",
    "Je, ni vipi ninaweza kutunza simu?",
    "Matengenezo ya simu ni yapi?",
    "Ninawezaje kuhakikisha simu iko salama?",
    "Je, kuna vidokezo vya kutunza simu?",
    "Simu inapaswa kutunzwa vipi?",
    "Nifanyeje ili simu isiharibike?",
    "Je, ni nini kinachohitajika kwa matengenezo?",
    "Ninawezaje kulinda simu yangu?",
    "Vidokezo vya matengenezo ni vipi?",
    "Je, simu inahitaji huduma gani?",
    "Nifanye nini kwa simu iwe sawa?",
    "Matengenezo ya simu yanafanyaje?",
    "Ninawezaje kuepuka uharibifu wa simu?",
    "Je, kuna ushauri wa kutunza simu?",
    "Simu inahitaji kumudu vipi?",
    "Nifanyeje ili simu iendelee vizuri?",
    "Je, ni huduma gani za simu?",
    "Ninawezaje kuangalia simu yangu?",
    "Matengenezo ya simu yanachukua muda gani?",
    "Je, kuna mambo ya kuepuka kwa simu?",
    "Nifanye nini kwa simu isiyofanya vizuri?",
    "Ushauri wa matengenezo ni upi?"
];

const lostPhoneKeywords = [
    "simu ya mteja imepotea",
    "Nimepoteza simu",
    "Imeibiwa",
    "Imepotea",
    "potea",
    "poteza",
    "Imepotezwa",
    "Nimeibiwa",
    "Nifanye nini ikiwa nimepoteza simu?",
    "Simu yangu imepotea, nifanye nini?",
    "Je, ninawezaje kupata simu iliyopotea?",
    "Nifuate hatua zipi simu ikipotea?",
    "Simu imepotea, nianzie wapi?",
    "Je, kuna msaada kwa simu iliyopotea?",
    "Nifanyeje ikiwa simu haipatikani?",
    "Simu yangu haionekani, nifanye nini?",
    "Je, ni vipi ninaweza kushughulikia simu iliyopotea?",
    "Nifanye nini simu ikiwa imepotea?",
    "Simu imepotea, nitaipataje?",
    "Je, kuna ushauri kwa simu iliyopotea?",
    "Nifanye nini ikiwa simu yangu imepotea?",
    "Simu haipatikani, nifanyeje?",
    "Je, ni hatua gani za simu iliyopotea?",
    "Nifanye nini simu isipopatikana?",
    "Simu yangu imepotea, nipe ushauri",
    "Je, ninawezaje kuripoti simu iliyopotea?",
    "Nifanyeje simu ikipotea ghafla?",
    "Simu imepotea, nitaifuatiliaje?",
    "Je, kuna njia ya kupata simu iliyopotea?",
    "Nifanye nini baada ya kupoteza simu?",
    "Simu yangu haipo, nifanye nini?",
    "Je, ni vipi ninaweza kufanya simu ikipotea?",
    "Ushauri wa simu iliyopotea ni upi?"
];

const botIdentityKeywords = [
    "unafanya kazi gani?",
    "Wewe ni nani?",
    "Wewe ni chatbot gani?",
    "Je, wewe ni nani hasa?",
    "Ni nani huyu ninayezungumza naye?",
    "Wewe ni programu gani?",
    "Je, una jina gani?",
    "Ni chatbot gani hii?",
    "Wewe ni bot ya aina gani?",
    "Je, wewe ni robot?",
    "Ni nani anayejibu maswali yangu?",
    "Wewe ni nani OnfonMobile?",
    "Je, wewe ni mtu au bot?",
    "Ni nani huyu anayezungumza nami?",
    "Wewe ni programu ya kusaidia vipi?",
    "Je, unawezaje kunisaidia?",
    "Ni bot gani hii ya OnfonMobile?",
    "Wewe ni nani kwenye mfumo huu?",
    "Je, wewe ni AI au mtu?",
    "Ni nani anayesimamia hii chatbot?",
    "Wewe ni bot ya kufanya nini?",
    "Je, wewe ni msaidizi wa kidigitali?",
    "Ni nani aliyekutengeneza?",
    "Wewe ni bot ya kusudi gani?",
    "Je, wewe ni msaidizi wa mauzo?",
    "Ni nani huyu anayejibu hapa?"
];

const allLockSolutionsKeywords = [
    "jinsi ya kulock simu",
    "Nipe lock solutions zote",
    "Je, hatua za kulock simu zote ni zipi?",
    "Ninawezaje kuona michakato yote ya kulock?",
    "Nipe maelezo ya lock solutions zote",
    "Hatua za kulock zote ni zipi?",
    "Lock solutions zote zinafanyaje?",
    "Je, ninawezaje kujua hatua za lock zote?",
    "Nipe orodha ya michakato ya kulock simu",
    "Maelezo ya kulock simu zote ni yapi?",
    "Hatua zote za kufunga simu ni zipi?",
    "Je, ninawezaje kulock simu?",
    "Mchakato wa kulock simu ni upi?",
    "Ninawezaje kufunga simu?",
    "Je, simu inalock vipi?",
    "Nifanye nini kulock simu?",
    "Kulock simu kunahitaji nini?",
    "Je, ni hatua gani za kulock simu?",
    "Ninawezaje kuhakikisha simu imelock?",
    "Simu inafungwa vipi?",
    "Je, kuna mchakato wa kulock simu?",
    "Nifanyeje ili simu ilock?",
    "Kulock simu kunafanyaje?",
    "Je, ni vipi ninaweza kulock simu?",
    "Hatua za kulock simu ni zipi?",
    "Ninawezaje kufunga simu kwa usalama?",
    "Je, simu inalindwa vipi kwa lock?",
    "Nifanye nini kufunga simu?",
    "Kulock simu kunachukua muda gani?",
    "Je, kuna vidokezo vya kulock simu?",
    "Ninawezaje kulock simu kwa haraka?",
    "Mchakato wa kufunga simu ni upi?",
    "Je, ni nini kinachohitajika kulock simu?",
    "Nifanyeje simu ikae salama kwa lock?",
    "Kulock simu kunahusisha nini?",
    "Je, kuna ushauri wa kulock simu?"
];

const lockPhoneKeywords = [
    "Je ninawezaje kulock simu?",
    "nataka kulock simu"
];

const specificLockPhoneKeywords = [
    "Je ninawezaje kulock simu ya Oppo?",
    "lock oppo",
    "Kulock simu ya Samsung kunafanyaje?",
    "lock samsung",
    "Ninawezaje kufunga simu ya Infinix?",
    "lock infinix",
    "Je simu ya Tecno inalock vipi?",
    "lock tecno",
    "lock vivo",
    "Nifanye nini kulock simu ya Vivo?",
    "v-Trust",
    "v Trust",
    "vtrust",
    "Kulock simu kwa V-Trust kunahitaji nini?",
    "payTrigger",
    "paytriga",
    "pay-trigger",
    "Je Pay Trigger lock inafanyaje?",
    "oguard",
    "o-Guard",
    "oguard",
    "Guard",
    "O-Guard lock ni ya aina gani?",
    "Trustonic",
    "Ninawezaje kuweka Trustonic lock kwenye simu?",
    "thinkadams",
    "think Adam",
    "Je ninawezaje kulock simu kwa Think Adams?",
    "Hatua za kulock simu ya Itel ni zipi?",
    "Kulock simu ya Realme kunafanyaje?",
    "Ninawezaje kufunga simu ya Honor?",
    "Je simu ya ZTE inalock vipi?",
    "V-Trust lock inafanyaje?",
    "Pay Trigger ni nini?",
    "O-Guard lock inatumika vipi?",
    "Trustonic lock ni ya aina gani?",
    "Think Adams lock inafanyaje?"
];

const phonePricingKeywords = [
    "vianzio",
    "bei za simu",
    "vianzo vya simu",
    "Je, bei za simu ni zipi?",
    "Bei ya simu ni kiasi gani?",
    "Ninawezaje kujua bei za simu?",
    "Je, simu zinagharimu kiasi gani?",
    "Bei za simu za OnfonMobile ni zipi?",
    "Nipe orodha ya bei za simu",
    "Je, kuna bei gani za simu?",
    "Simu zinapatikana kwa bei gani?",
    "Ninawezaje kuangalia bei za simu?",
    "Je, ni gharama gani za simu?",
    "Bei za simu zinajumuisha nini?",
    "Nipe maelezo ya bei za simu",
    "Je, simu za bei nafuu ziko?",
    "Bei ya simu inaweza kuwa kiasi gani?",
    "Ninawezaje kupata bei za simu?",
    "Je, kuna orodha ya bei za simu?",
    "Simu zinagharimu vipi?",
    "Nipe bei za simu zote",
    "Je, bei za simu ni rahisi?",
    "Bei ya simu inaanza wapi?",
    "Ninawezaje kujua gharama za simu?",
    "Je, kuna bei za simu za chini?",
    "Bei za simu zinatofautiana vipi?",
    "Nipe ushauri wa bei za simu",
    "Je, simu zinagharimu kiasi gani kwa OnfonMobile?"
];

const askSpecificPriceKeywords = [
    "Bei ya OPPO A18 4/64GB ni kiasi gani?",
    "Nipe bei ya VIVO Y28",
    "Samsung A05 inagharimu kiasi gani?",
    "Je, Infinix Smart 8 bei yake ni nini?",
    "Bei ya Realme C61 6/128GB ni ipi?",
    "Tecno Camon 30S inauzwa bei gani?",
    "Nipe bei ya Honor X7B",
    "Hisense E70 Pro bei yake ni kiasi gani?",
    "Je, ZTE A35 inagharimu kiasi gani?",
    "Bei ya OPPO A58 8/128GB ni nini?",
    "Nipe bei ya Vivo Y03 4/64GB",
    "Samsung A05s 4/128GB inauzwa vipi?",
    "Infinix Note 30 Pro bei yake ni ipi?",
    "Realme Note 50 6/64GB inagharimu kiasi gani?",
    "Bei ya Tecno Spark 30C ni nini?",
    "bei za Oppo",
    "vianzio vya Oppo",
    "bei simu za Oppo",
    "simu za oppo zinauzwaje",
    "nataka kujua bei za oppo",
    "Oppo",
    "vianzio vya infinix",
    "bei za Infinix",
    "bei simu za Infinix",
    "simu za infinix zinauzwaje",
    "Infinix",
    "vianzio vya tecno",
    "simu za Tecno",
    "bei za simu za Tecno",
    "simu za tecno zinauzwaje",
    "bei za tecno",
    "Tecno",
    "vianzio za vivo",
    "bei za Vivo",
    "simu za vivo zinauzwaje",
    "simu za vivo",
    "bei za Vivo",
    "vianzio vivo",
    "Vivo",
    "vianzio vya samsung",
    "vianzio Samsung",
    "bei za Samsung",
    "samsung zinauzwaje",
    "nataka kujua bei za simu za samsung",
    "Samsung",
    "vianzio za realme",
    "Realme zinauwaje",
    "nataka kujua bei za Realme",
    "realme beigani",
    "simu za realme zinauzwaje",
    "Realme",
    "vianzio za honor",
    "bei za simu za Honor",
    "simu za honor zinauzwaje",
    "bei za honor",
    "vianzio vya honor",
    "Honor",
    "hisense zinauzwaje",
    "bei za hisense",
    "vianzio vya hisense",
    "vianzio za hisense",
    "Hisense",
    "bei za ZTE",
    "Vianzio vya ZTE",
    "simu za ZTE zianuzwaje?",
    "ZTE"
];

// Export for potential module usage
window.botResponses = botResponses;
window.phonePricingData = phonePricingData;
window.lockSolutionSteps = lockSolutionSteps;
window.brandToLockType = brandToLockType;
window.greetings = greetings;
window.thankYouKeywords = thankYouKeywords;
window.salesProcessKeywords = salesProcessKeywords;
window.paymentMethodsKeywords = paymentMethodsKeywords;
window.maintenanceKeywords = maintenanceKeywords;
window.lostPhoneKeywords = lostPhoneKeywords;
window.botIdentityKeywords = botIdentityKeywords;
window.allLockSolutionsKeywords = allLockSolutionsKeywords;
window.lockPhoneKeywords = lockPhoneKeywords;
window.specificLockPhoneKeywords = specificLockPhoneKeywords;
window.phonePricingKeywords = phonePricingKeywords;
window.askSpecificPriceKeywords = askSpecificPriceKeywords;
