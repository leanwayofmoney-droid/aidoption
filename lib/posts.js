export const posts = [
  {
    slug: "email-inbox-samenvatten",
    title: "Stop met je inbox handmatig doorspitten",
    excerpt: "18 minuten per dag teruggeven aan jezelf — met één slim AI-filter op je mailbox.",
    date: "14 april 2026",
    readTime: "4 min",
    tool: "ChatGPT / Claude",
    savingsPerTask: 18,
    savingsNormaal: 20,
    savingsMetAI: 2,
    frequentieLabel: "per dag",
    color: "#8B5CF6",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1200&q=75",

    curiosityHeader: "Inbox leeg. Koffie warm.",

    persoonlijkeMissie: `Ik opende mijn laptop elke ochtend met een knoop in mijn maag. Niet omdat de dag zwaar zou worden maar omdat ik wist: 47 ongelezen mails stonden op me te wachten. De helft was ruis maar welke helft? Dat wist ik pas na twintig minuten scrollen. **Elke dag opnieuw dezelfde verspilling.** Op een gegeven moment besloot ik: dit pik ik niet meer.`,

    transformatie: `**De oude manier:** iedere mail lezen, doordenken, prioriteren. Minimaal twintig minuten per dag kwijt aan iets wat geen enkele voldoening geeft.\n\n**Met de AI-Fix:** ik plak mijn inbox erin en krijg binnen tien seconden een overzicht terug. Urgente mails bovenaan, rommel onderaan. De hele operatie kost me nog geen twee minuten.`,

    strategischeLogica: `De truc zit niet in het samenvatten zelf. Samenvatten kan elk kind. **De echte intelligentie zit in de prioritering.**\n\nIk heb de AI geleerd om naar drie dimensies te kijken: de afzender, de emotionele lading van de tekst en de tijdgevoeligheid van het onderwerp. Een mail van je accountant over een deadline heeft een ander gewicht dan een nieuwsbrief — ook als die nieuwsbrief urgenter klinkt.\n\nDoor de AI te dwingen een expliciete rangorde aan te brengen — niet alleen 'dit is belangrijk' maar ook 'dit is urgent én van iemand die je kent' — filtert het systeem op een manier die menselijk denken simuleert.\n\n**Ik instrueer de AI om te redeneren vanuit mijn perspectief en niet vanuit die van de verzender.** Veel tools kijken naar trefwoorden. Mijn aanpak kijkt naar context. Het verschil merk je direct: minder valse urgentie, meer rust.\n\nHet kost me nog een minuut om de conceptantwoorden na te lezen. Dan ben ik klaar.`,

    nuance: `Deze fix werkt niet als je inbox vol staat met gevoelige of juridische correspondentie. Vertrouwelijke informatie plak je niet zomaar in een extern systeem. Gebruik het voor de dagelijkse stroom van werkmail — niet voor contractonderhandelingen of privégesprekken.`,

    impactCTA: `Gebruik de slider hieronder om te zien hoeveel uur jij per jaar terugwint. De exacte prompt die ik gebruik vind je in **Het Codeboek** — kopieer hem en begin vandaag.`,

    prompt: `Hieronder staan mijn e-mails van vandaag. Doe het volgende:
1. Geef een overzicht van alle mails in maximaal één zin per mail.
2. Markeer welke mails URGENT zijn (actie vereist vandaag).
3. Markeer welke mails ik VEILIG kan negeren of verwijderen.
4. Schrijf voor de urgente mails een kort concept-antwoord in professioneel Nederlands.

Hier zijn de mails:
[PLAK HIER JE E-MAILS]`,
    promptTip: "Vervang [PLAK HIER JE E-MAILS] door de inhoud van je inbox. Je kunt maximaal 15-20 mails tegelijk plakken.",
  },
  {
    slug: "weekmenu-boodschappenlijst",
    title: "Nooit meer nadenken over je boodschappen",
    excerpt: "Van lege koelkast naar weekmenu en gesorteerde boodschappenlijst in minder dan een minuut.",
    date: "10 april 2026",
    readTime: "3 min",
    tool: "ChatGPT",
    savingsPerTask: 25,
    savingsNormaal: 30,
    savingsMetAI: 5,
    frequentieLabel: "per week",
    color: "#F59E0B",
    image: "https://images.unsplash.com/photo-1543168256-418811576931?auto=format&fit=crop&w=800&q=75",

    curiosityHeader: "Nooit meer 'wat eten we?'",

    persoonlijkeMissie: `Elke zondagmiddag hetzelfde ritueel. Ik staar naar de koelkast, scrol door receptenwebsites en bedenk iets — om vervolgens een ingrediënt te vergeten bij de supermarkt. **Dit kostte me wekelijks een half uur aan mentale energie** voor een beslissing die ik eigenlijk helemaal niet interessant vind. Ik wil goed eten maar ik wil niet nadenken over wat ik eet.`,

    transformatie: `**De oude manier:** scrollen, twijfelen, vergeten, herhalen. Dertig minuten per week aan een probleem dat zichzelf elke week opnieuw stelt.\n\n**Met de AI-Fix:** ik geef aan wat ik in huis heb, hoeveel personen er eten en hoe lang ik wil koken. Binnen een minuut ligt er een compleet weekmenu inclusief gesorteerde boodschappenlijst.`,

    strategischeLogica: `Het geheim zit in de context die je meegeeft aan de AI. De meeste mensen typen 'geef me een weekmenu' en krijgen een generieke lijst terug. Dat werkt niet.\n\n**Ik instrueer de AI om te denken als een kok die mijn koelkast kent.** Door specifieke beperkingen mee te geven — beschikbare ingrediënten, kooktijd per avond en dieetwensen — dwingt de AI zichzelf om creatieve oplossingen te zoeken binnen bestaande kaders.\n\nDe tweede laag is variatie. Ik laat de AI bewust de keukenstijlen afwisselen. Maandag Aziatisch, dinsdag Mediterraans. Niet omdat ik daar zelf aan denk maar omdat een gevarieerd menu je doordeweeks ook mentaal frisser houdt.\n\n**De derde laag is de boodschappenlijst gesorteerd op supermarktafdeling.** Dit klinkt als een detail maar bespaart me iedere week vijf extra minuten lopen. Groenten bij groenten, zuivel bij zuivel. De AI structureert het als een logistiek plan.`,

    nuance: `Deze fix werkt minder goed als je sterk afhankelijk bent van weekaanbiedingen in de supermarkt. De AI kent de folder niet. Check de lijst even voor je gaat — soms stelt hij ingrediënten voor die die week duurder uitvallen.`,

    impactCTA: `Bereken hieronder hoeveel tijd jij per jaar bespaart. **Het Codeboek** bevat de exacte prompt inclusief de structuur die ik gebruik om variatie en logistiek tegelijk te regelen.`,

    prompt: `Maak een weekmenu voor [AANTAL] personen voor 5 avondmaaltijden.

Wat ik al in huis heb: [INGREDIËNTEN OF 'NIETS SPECIFIEK']
Dieetwensen of allergieën: [BIJV. 'GEEN VARKENSVLEES' OF 'GEEN']
Kooktijd per avond: maximaal [30/45/60] minuten
Stijl: gevarieerd, geen herhaling van dezelfde keuken

Geef mij:
1. Het weekmenu (ma t/m vr) met per dag de naam van het gerecht
2. Een complete boodschappenlijst, gesorteerd op categorie
3. Voor elk gerecht: een korte bereidingsstap`,
    promptTip: "Vul de blokken tussen [haakjes] in met jouw situatie. Je kunt dit elke week opnieuw gebruiken.",
  },
  {
    slug: "vergadering-samenvatten",
    title: "Van vergadernotities naar actieplan in 30 seconden",
    excerpt: "Chaos van aantekeningen omzetten naar een helder besluitenlijst — zonder er zelf over na te hoeven denken.",
    date: "7 april 2026",
    readTime: "3 min",
    tool: "Claude / ChatGPT",
    savingsPerTask: 15,
    savingsNormaal: 20,
    savingsMetAI: 5,
    frequentieLabel: "per vergadering",
    color: "#10B981",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=75",

    curiosityHeader: "Vergadering voorbij. Actiepunten klaar.",

    persoonlijkeMissie: `Na elke vergadering had ik hetzelfde gevoel: we hebben iets besloten maar wat precies? Mijn aantekeningen waren een rommelige mix van halve zinnen en krabbels. **Ze omzetten naar een helder actiepuntenlijst kostte me altijd twintig minuten die ik niet had.** En dan bleek iemand anders een andere conclusie te hebben getrokken. Dat was het moment dat ik besloot dit anders aan te pakken.`,

    transformatie: `**De oude manier:** rauwe notities omzetten naar een verslag. Twintig minuten per vergadering — daarna mailen en correcties verwerken.\n\n**Met de AI-Fix:** ik plak mijn aantekeningen erin, hoe chaotisch ook, en ontvang binnen vijftien seconden een gestructureerd verslag met besluiten, actiepunten en openstaande vragen.`,

    strategischeLogica: `Het interessante aan vergadernotities is dat ze altijd onvolledig zijn. Jij schrijft wat jou opvalt. Je collega schrijft iets anders. **De waarde van een goede samenvatting zit in het extraheren van structuur uit chaos.**\n\nIk heb de AI geleerd om notities te lezen als een detective. Niet alleen wat er staat maar wat er bedoeld wordt. Een zin als 'Jan regelt dat' is vaag. Ik dwing de AI om dit te interpreteren als een taak met een verantwoordelijke — en impliciet ook een deadline.\n\n**De tweede instructie is minstens zo belangrijk:** onderscheid maken tussen een besluit en een actiepunt. Veel AI-tools gooien dit op één hoop. Door de AI expliciet te instrueren om deze twee categorieën apart te houden krijg je een verslag dat daadwerkelijk bruikbaar is in de week erna.\n\nTot slot laat ik de AI altijd openstaande vragen markeren. Dingen die besproken zijn maar niet beslecht. Die zijn goud waard voor de volgende meeting.`,

    nuance: `Gebruik dit niet als vervanging voor een officieel vergaderverslag bij juridische of contractuele besprekingen. De AI interpreteert — en interpretaties kunnen afwijken van wat er letterlijk gezegd is. Bij belangrijke beslissingen laat je de output altijd door een mens valideren.`,

    impactCTA: `Schuif de slider om te zien hoeveel tijd jij per jaar wint. **Het Codeboek** bevat de structuur die ik gebruik om van rauwe krabbels een compleet actiepuntenplan te maken.`,

    prompt: `Zet mijn vergadernotities om naar een helder verslag met:

1. **Samenvatting** (3-5 zinnen): Waar ging de vergadering over?
2. **Besluiten**: Wat is er besloten? (genummerde lijst)
3. **Actiepunten**: Wie doet wat voor wanneer? (tabel: Taak | Verantwoordelijke | Deadline)
4. **Openstaande vragen**: Wat vraagt nog opvolging?

Mijn aantekeningen:
[PLAK HIER JE AANTEKENINGEN]`,
    promptTip: "Werkt ook met gesproken aantekeningen — dicteer tijdens de vergadering via je telefoon en plak de transcriptie in.",
  },
  {
    slug: "cv-en-sollicitatiebrief",
    title: "Een sollicitatiebrief schrijven in 5 minuten",
    excerpt: "Geen blanco pagina meer. Geef AI de vacature en je achtergrond — en krijg een brief terug die klinkt als jij op je best.",
    date: "3 april 2026",
    readTime: "4 min",
    tool: "Claude",
    savingsPerTask: 50,
    savingsNormaal: 60,
    savingsMetAI: 10,
    frequentieLabel: "per sollicitatie",
    color: "#06B6D4",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=75",
    savingsEuro: 200,
    savingsEuroLabel: "Vervangt een copywriter à €200 per brief",

    curiosityHeader: "Brief geschreven. Nooit meer gevreesd.",

    persoonlijkeMissie: `Ik herinner me het gevoel van een blanco pagina als de vacature interessant was. **Hoe begin je?** Niet met 'hierbij solliciteer ik' — dat weet ik. Maar wat dan? Een uur later had ik drie alinea's die nergens op sloegen. Sollicitatiebrieven schrijven is een vak apart en het merendeel van ons heeft dat vak nooit geleerd. Ik ook niet.`,

    transformatie: `**De oude manier:** een uur staren, schrijven en herschrijven. Dan twijfelen of de toon goed is. Dan nog een keer.\n\n**Met de AI-Fix:** ik geef de vacature en mijn achtergrond mee. Binnen een minuut ligt er een brief die klinkt als ik — maar dan op mijn best.`,

    strategischeLogica: `Het geheim van een goede sollicitatiebrief is niet creativiteit — het is **relevantie**. De lezer wil in twintig seconden weten of jij het probleem begrijpt dat zij proberen op te lossen.\n\nIk instrueer de AI om de vacaturetekst te lezen als een lijst van verborgen verlangens. Niet alleen de functiebeschrijving maar ook de toon van het bedrijf, de woorden die ze kiezen en wat ze niet zeggen maar wel bedoelen. Op basis daarvan wordt de brief afgestemd op de cultuur van de organisatie.\n\n**De tweede laag is de persoonlijke insteek.** Een AI-brief klinkt generiek als je hem generiek voedt. Door vijf zinnen over je eigen ervaring mee te geven dwingt de AI zichzelf om specifieke verbindingen te leggen. Geen loze claims maar concrete koppelingen.\n\nWat het echt goed maakt: ik instrueer de AI om **nooit te beginnen met een variant van 'hierbij solliciteer ik'**. De eerste zin is het belangrijkste. Die wekt nieuwsgierigheid. De rest volgt vanzelf.`,

    nuance: `Deze fix werkt minder goed bij sterk gespecialiseerde functies waarbij vakjargon of technische diepgang verwacht wordt. De AI kent jouw sector soms minder goed dan jij. Lees de output altijd kritisch en voeg zelf de inhoudelijke scherpte toe.`,

    impactCTA: `Bereken hieronder hoeveel tijd je bespaart over al je sollicitaties. **Het Codeboek** bevat de exacte instructies waarmee ik brieven schrijf die persoonlijk klinken en toch razendsnel gemaakt zijn.`,

    prompt: `Schrijf een professionele sollicitatiebrief in het Nederlands op basis van de onderstaande vacature en mijn achtergrond.

Richtlijnen:
- Maximaal 300 woorden
- Persoonlijke toon, niet overdreven formeel
- Begin NIET met "Hierbij solliciteer ik..."
- Verbind mijn ervaring aan de behoeften in de vacature
- Eindig met een concrete uitnodiging voor een gesprek

Vacature:
[PLAK HIER DE VOLLEDIGE VACATURETEKST]

Mijn achtergrond:
[SCHRIJF HIER 5-10 ZINNEN OVER JE ERVARING EN MOTIVATIE]`,
    promptTip: "Vraag daarna: 'Maak een alternatieve openingszin die persoonlijker klinkt' voor variatie.",
  },
  {
    slug: "sport-trainingsschema",
    title: "Je eigen personal trainer voor €0 per maand",
    excerpt: "Geef je doel en beschikbare tijd op — ontvang een schema dat progressie bouwt zonder dat jij erover hoeft na te denken.",
    date: "28 maart 2026",
    readTime: "3 min",
    tool: "ChatGPT",
    savingsPerTask: 45,
    savingsNormaal: 60,
    savingsMetAI: 15,
    frequentieLabel: "per week",
    color: "#EF4444",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=75",
    savingsEuro: 80,
    savingsEuroLabel: "Vervangt een personal trainer à €80/sessie",

    curiosityHeader: "Personal trainer. Nul euro per maand.",

    persoonlijkeMissie: `Ik wilde serieuzer gaan sporten maar had geen idee waar te beginnen. Een personal trainer leek me overdreven voor iemand die gewoon drie keer per week wil bewegen. **Maar zonder structuur deed ik steeds hetzelfde** — dezelfde oefeningen, zelfde gewichten en nul progressie. Maanden later had ik weinig resultaat en wel het gevoel dat ik iets miste. Dat miste ik ook: een plan.`,

    transformatie: `**De oude manier:** willekeurig sporten zonder structuur of progressie. Af en toe googelen op schema's die nooit precies pasten bij mijn situatie.\n\n**Met de AI-Fix:** ik beschrijf mijn doel, niveau en beschikbare tijd. Binnen een minuut heb ik een schema met oefeningen, sets, herhalingen en een progressieplan voor de komende vier weken.`,

    strategischeLogica: `Een goed trainingsschema is eigenlijk een algoritme. **Het houdt rekening met input, verwerkt die naar output en past zich aan op basis van progressie.**\n\nIk instrueer de AI om te denken als een fysiotherapeut met sportersachtergrond. Niet alleen 'doe tien push-ups' maar: waarom, in welke verhouding tot andere oefeningen en hoe je dat opbouwt. Door blessures en beperkingen expliciet mee te geven dwingt de AI zichzelf om creatief om te gaan met die beperkingen.\n\n**De slimste instructie is progressie.** De meeste gratis schema's zijn statisch. Ik laat de AI een schema maken dat na vier weken klaar is voor een zwaarder vervolg. Dezelfde oefeningen maar met tien procent meer volume. Zo bouw je systematisch op zonder opnieuw te hoeven nadenken.\n\nWat het persoonlijk maakt: de combinatie van locatie, equipment en tijdsdruk. Thuis met dumbbells en vijfenveertig minuten per sessie geeft een compleet ander schema dan een volledig ingerichte sportschool. **De AI optimaliseert binnen jouw grenzen.** Dat is precies wat een goede trainer ook doet.`,

    nuance: `Gebruik dit niet als je revalideert na een blessure of een medische aandoening hebt die invloed heeft op je beweging. Een AI kent jouw lichaam niet van binnenuit. Bij twijfel: overleg eerst met een fysiotherapeut voor je aan de slag gaat.`,

    impactCTA: `Zie hieronder wat dit schema jou per jaar bespaart — in tijd én in geld. **Het Codeboek** bevat het exacte format waarmee ik mijn schema's maak en elke vier weken update.`,

    prompt: `Maak een trainingsschema voor mij op basis van de volgende informatie:

Doel: [BIJV. AFVALLEN / SPIERMASSA / FITTER WORDEN]
Niveau: [BEGINNER / GEVORDERD / ERVAREN]
Beschikbare dagen per week: [AANTAL]
Tijd per training: [BIJV. 45 MINUTEN]
Locatie: [THUIS MET DUMBBELLS / GYM / ALLEEN LICHAAMSGEWICHT]
Blessures of beperkingen: [BIJV. 'KNIEPROBLEMEN' OF 'GEEN']

Geef mij:
1. Een weekschema met per dag de oefeningen
2. Per oefening: sets, herhalingen en rustpauze
3. Een warming-up en cooling-down
4. Tips voor progressie in de komende 4 weken`,
    promptTip: "Vraag na 4 weken: 'Maak een zwaarder vervolg op dit schema met 10% meer volume.'",
  },
];

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) || null;
}
