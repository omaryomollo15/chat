console.log('data.js loaded successfully');

// --- Data for Chatbot Responses ---
const botResponses = {
 "utter_greet": "Karibu OnfonMobile TZ! Nipo hapa kukusaidia huduma zinazohusiana na umiliki wa simu za mkopo:\n1. Mauzo ya Simu(hatua za kufanya mauzo)\n2. Bei za Simu\n3. Malipo\n4. Matengenezo ya Simu\n5. Simu Iliyopotea\n6. Kulock Simu(lock solution zote na aina ya simu)\n7.Changamoto ya NIDA. \n8. Changamoto za STK push na OTP\nUnahitaji msaada gani kwa sasa?",
    "utter_ask_bot_identity": "Mimi ni OnfonMobile TZ! Nipohapa kukusaidia:\n. Mauzo ya Simu\n. Bei za Simu\n. Malipo ya Mkopo\n. Matengenezo ya Simu\n. Simu Iliyopotea\n. Kulock Simu\nNipo kusaidia zaidi, unahitaji nini?",
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
   - Weka Namba ya simu ya mteja aliyokopea mkopo kama namba ya kumbukumbu ya malipo (zingatia sana hapa).
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
- Ambatanisha taarifa zako na kopi ya NIDA kisha utume kwenye anuani yetu:\ncustomercare@onfonmicrofinance.co.tz. Unahitaji msaada zaidi, nipo kukusaidia.`,
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
Taja lock type (k.m., Think Adams,oguard,vtrust,paytrigger,trustonic) kwa maelezo ya hatua za kulock, au uliza 'hatua za kulock simu' kwa maelezo yote. Unahitaji msaada zaidi, nipo kukusaidia.`,
    "utter_thank_you": "Karibu tena, nakutakia mauzo mema. Unahitaji msaada zaidi, nipo kukusaidia.",
    "utter_fallback": "Samahani! Hilo linaonekana kuwa nje ya kile ninachoweza kusaidia kwa sasa,Nimebobea katika kusaidia huduma za microfinance zinazohusiana na umiliki wa simu za mkopo.\nIkiwa una swali kuhusu mauzo ya simu, bei za simu, malipo, matengenezo ya simu, simu iliyopotea, au kulock simu, nitafurahi kukusaidia.",
    "utter_nida_verification": "IKiwa umepata changamoto upannde wa uhakiki wa NIDA ya mteja:\n1.Tafadhali hakikisha NIDA ya mteja ni sahihi.\nIli kuhakikisha kama NIDA ya mteja ni sahihi, piga *106# angalia usajili wa laini ya mteja au tumia kitambulisho cha NIDA.\n2.Hakikisha mteja anajibu maswali kwa usahihi ili kuendelea na hatua inayofuata.\nUnahitaji msaada zaidi, nipo kukusaidia.",
    "utter_stk_push_otp": "IKiwa umepata changamoto za OTP au STK-PUSH:\n1.Hakikisha namba ya mteja haina usajili wa code 079.\n2.Hakikisha settings za simu ya mteja zinaruhusu kupokea ujumbe (SMS), au badili simu yenye laini ya mteja.\nKama vyote viko sawa wasiliana NA Team ya IT kwa msaada zaidi.\nUnahitaji msaada zaidi, nipo kukusaidia.\n"
}
;

const phonePricingData = 
{
  "infinix smart 9 3gb/64gb": {
    "brand": "infinix",
    "lock_solution": "Pay Trigger",
    "bei": 245000,
    "kianzio": 73500,
    "siku": 1500,
    "wiki": 10500,
    "mwezi": 45000
  },
  "infinix hot 50i 4gb/128gb": {
    "brand": "infinix",
    "lock_solution": "Pay Trigger",
    "bei": 310000,
    "kianzio": 93000,
    "siku": 1800,
    "wiki": 12600,
    "mwezi": 54000
  },
  "infinix smart 9 4gb/128gb": {
    "brand": "infinix",
    "lock_solution": "Pay Trigger",
    "bei": 328000,
    "kianzio": 98400,
    "siku": 1900,
    "wiki": 13300,
    "mwezi": 57000
  },
  "itel a90 3gb/64gb": {
    "brand": "itel",
    "lock_solution": "Pay Trigger",
    "bei": 230000,
    "kianzio": 69000,
    "siku": 1400,
    "wiki": 9800,
    "mwezi": 42000
  },
  "oppo a3x 4gb/64gb": {
    "brand": "oppo",
    "lock_solution": "O-Guard",
    "bei": 330000,
    "kianzio": 99000,
    "siku": 1900,
    "wiki": 13300,
    "mwezi": 57000
  },
  "oppo a3x 4gb/128gb": {
    "brand": "oppo",
    "lock_solution": "O-Guard",
    "bei": 390000,
    "kianzio": 117000,
    "siku": 2200,
    "wiki": 15400,
    "mwezi": 66000
  },
  "oppo a58 6gb/128gb": {
    "brand": "oppo",
    "lock_solution": "O-Guard",
    "bei": 490000,
    "kianzio": 147000,
    "siku": 2600,
    "wiki": 18200,
    "mwezi": 78000
  },
  "oppo a58 8gb/128gb": {
    "brand": "oppo",
    "lock_solution": "O-Guard",
    "bei": 550000,
    "kianzio": 165000,
    "siku": 2900,
    "wiki": 20300,
    "mwezi": 87000
  },
  "oppo a3x 8gb/256gb": {
    "brand": "oppo",
    "lock_solution": "O-Guard",
    "bei": 620000,
    "kianzio": 186000,
    "siku": 3200,
    "wiki": 22400,
    "mwezi": 96000
  },
  "phillips essence 10 4gb/64gb": {
    "brand": "phillips",
    "lock_solution": "Pay Trigger",
    "bei": 232000,
    "kianzio": 69600,
    "siku": 1400,
    "wiki": 9800,
    "mwezi": 42000
  },
  "phillips essence 10 4gb/128gb": {
    "brand": "phillips",
    "lock_solution": "Pay Trigger",
    "bei": 250000,
    "kianzio": 75000,
    "siku": 1500,
    "wiki": 10500,
    "mwezi": 45000
  },
  "phillips essence 20 8gb/128gb": {
    "brand": "phillips",
    "lock_solution": "Pay Trigger",
    "bei": 270000,
    "kianzio": 81000,
    "siku": 1600,
    "wiki": 11200,
    "mwezi": 48000
  },
  "phillips essence 20 16gb/256gb": {
    "brand": "phillips",
    "lock_solution": "Pay Trigger",
    "bei": 355000,
    "kianzio": 106500,
    "siku": 2000,
    "wiki": 14000,
    "mwezi": 60000
  },
  "phillips omni 10 16gb/256gb": {
    "brand": "phillips",
    "lock_solution": "Pay Trigger",
    "bei": 360000,
    "kianzio": 108000,
    "siku": 2000,
    "wiki": 14000,
    "mwezi": 60000
  },
  "tecno pop 9 3gb/64gb": {
    "brand": "tecno",
    "lock_solution": "Pay Trigger",
    "bei": 245000,
    "kianzio": 73500,
    "siku": 1500,
    "wiki": 10500,
    "mwezi": 45000
  },
  "tecno pop 8 4gb/64gb": {
    "brand": "tecno",
    "lock_solution": "Pay Trigger",
    "bei": 270000,
    "kianzio": 81000,
    "siku": 1600,
    "wiki": 11200,
    "mwezi": 48000
  },
  "vivo y04 4gb/64gb": {
    "brand": "vivo",
    "lock_solution": "V-Trust",
    "bei": 280000,
    "kianzio": 56000,
    "siku": 1700,
    "wiki": 11900,
    "mwezi": 51000
  },
  "vivo y03 4gb/64gb": {
    "brand": "vivo",
    "lock_solution": "V-Trust",
    "bei": 300000,
    "kianzio": 60000,
    "siku": 1800,
    "wiki": 12600,
    "mwezi": 54000
  },
  "vivo y04 4gb/128gb": {
    "brand": "vivo",
    "lock_solution": "V-Trust",
    "bei": 315000,
    "kianzio": 63000,
    "siku": 1900,
    "wiki": 13300,
    "mwezi": 57000
  },
  "vivo y03 4gb/128gb": {
    "brand": "vivo",
    "lock_solution": "V-Trust",
    "bei": 320000,
    "kianzio": 64000,
    "siku": 1900,
    "wiki": 13300,
    "mwezi": 57000
  },
  "vivo y19s 6gb/128gb": {
    "brand": "vivo",
    "lock_solution": "V-Trust",
    "bei": 370000,
    "kianzio": 74000,
    "siku": 2200,
    "wiki": 15400,
    "mwezi": 66000
  },
  "vivo y28 8gb/256gb": {
    "brand": "vivo",
    "lock_solution": "V-Trust",
    "bei": 520000,
    "kianzio": 104000,
    "siku": 2900,
    "wiki": 20300,
    "mwezi": 87000
  }
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
    "hapana",
    "Ok",
    "okay",
    "sawa",
    "penda",
    "kwaheri",
    "ahsante",
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
    "1",
    "mauzo",
    "mkopo",
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
    "3",
    "mteja anataka kulipia",
    "lipia",
    "kulipia",
    "kulipa",
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
    "4",
    "nimeharibu simu",
    "mteja ameharibu simu",
    "simu ya mteja imeharibika",
    "imeharibika",
    "haribu",
    "matengenezo",
    "matengenezo ya simu",
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
    "5",
    "simu ya mteja imepotea",
    "Nimepoteza simu",
    "Imeibiwa",
    "iliyopotea",
    "kaimeibiwa",
    "mteja ameibiwa",
    "mteja kaibiwa",
    "Imepotea",
    "mteja amepoteza",
    "potea",
    "ibiwa",
    "poteza",
    "kapoteza",
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
    "nani?",
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
    "6",
    "jinsi ya kulock simu",
    "kulock simu",
    "kulock",
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
    "nataka kulock simu",
    "lock solution",
    "lock",
];

const specificLockPhoneKeywords = [
    "simu za Oppo?",
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
    "2",
    "vianzio",
    "kianzio",
    "vianzio vya simu",
    "bei za simu",
    "bei ya simu",
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

const nidaVerificationKeywords = [
    "7",
    "maswali hayaji",
    "maswali",
    "majibu",
    "nida"
];

const stkPushOtpKeywords = [
    "8",
    "stk push",
    "haiji",
    "hapati",
    "otp",
    "push"
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
window.nidaVerificationKeywords = nidaVerificationKeywords;
window.stkPushOtpKeywords = stkPushOtpKeywords;
