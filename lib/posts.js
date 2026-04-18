export const posts = [
  {
    slug: "email-inbox-samenvatten",
    title: "Stop met je inbox handmatig doorspitten",
    excerpt: "Laat AI je e-mails samenvatten, prioriteren en beantwoorden — terwijl jij je koffie drinkt.",
    date: "14 april 2026",
    readTime: "4 min",
    tool: "ChatGPT / Claude",
    savingsPerTask: 18,
    savingsNormaal: 20,
    savingsMetAI: 2,
    frequentieLabel: "per dag",
    color: "#8B5CF6",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1200&q=75",

    invalshoek: "Je opent je laptop. 47 ongelezen mails. De helft is onzin, maar je weet niet welke helft — dus je leest ze allemaal. Dit kost de gemiddelde persoon ruim 20 minuten per dag. Dat is meer dan 120 uur per jaar. Tijd die je nooit terugkrijgt.",
    ingredienten: [
      "ChatGPT (gratis) of Claude (gratis)",
      "Je e-mailclient (Gmail, Outlook, of andere)",
      "5 minuten om het in te stellen",
    ],
    stappen: [
      "Open je inbox en selecteer de e-mails van de afgelopen 24 uur.",
      "Kopieer de onderwerpregel + eerste alinea van elke mail.",
      "Plak alles in één bericht in ChatGPT of Claude, samen met de prompt hieronder.",
      "Lees de samenvatting — je ziet direct wat urgent is en wat je kunt negeren.",
      "Gebruik de AI ook om conceptantwoorden te laten schrijven voor de mails die aandacht vragen.",
    ],
    prompt: `Hieronder staan mijn e-mails van vandaag. Doe het volgende:
1. Geef een overzicht van alle mails in maximaal één zin per mail.
2. Markeer welke mails URGENT zijn (actie vereist vandaag).
3. Markeer welke mails ik VEILIG kan negeren of verwijderen.
4. Schrijf voor de urgente mails een kort concept-antwoord in professioneel Nederlands.

Hier zijn de mails:
[PLAK HIER JE E-MAILS]`,
    promptTip: "Vervang [PLAK HIER JE E-MAILS] door de inhoud van je inbox. Je kunt maximaal 15-20 mails tegelijk plakken.",
    content: "",
  },
  {
    slug: "weekmenu-boodschappenlijst",
    title: "Nooit meer nadenken over je boodschappen",
    excerpt: "Van lege koelkast naar weekmenu + boodschappenlijst in minder dan 60 seconden.",
    date: "10 april 2026",
    readTime: "3 min",
    tool: "ChatGPT",
    savingsPerTask: 25,
    savingsNormaal: 30,
    savingsMetAI: 5,
    frequentieLabel: "per week",
    color: "#F59E0B",
    image: "https://images.unsplash.com/photo-1543168256-418811576931?auto=format&fit=crop&w=800&q=75",

    invalshoek: "Elke week hetzelfde ritueel: wat eten we? Je staart in de koelkast, scrollt door recepten, vergeet de helft bij de supermarkt. AI lost dit in één prompt op — inclusief gevarieerd weekmenu, boodschappenlijst gesorteerd op supermarktafdeling, en recepten op basis van wat je al hebt.",
    ingredienten: [
      "ChatGPT (gratis)",
      "Lijst van wat je al in huis hebt (optioneel)",
      "Aantal personen en eventuele dieetwensen",
    ],
    stappen: [
      "Noteer kort wat je al in huis hebt (of sla dit over).",
      "Noteer hoeveel personen er mee-eten en eventuele voorkeuren.",
      "Plak de prompt hieronder in ChatGPT en vul de gegevens in.",
      "Kopieer de boodschappenlijst direct naar je telefoon of app.",
      "Optioneel: vraag ChatGPT om de lijst te sorteren op supermarktafdeling.",
    ],
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
    content: "",
  },
  {
    slug: "vergadering-samenvatten",
    title: "Van vergadernotities naar actieplan in 30 seconden",
    excerpt: "Plak je rauwe notities erin, krijg een helder besluitenlijst en taakoverzicht terug.",
    date: "7 april 2026",
    readTime: "3 min",
    tool: "Claude / ChatGPT",
    savingsPerTask: 15,
    savingsNormaal: 20,
    savingsMetAI: 5,
    frequentieLabel: "per vergadering",
    color: "#10B981",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=75",

    invalshoek: "Je hebt net een uur vergaderd. Er zijn besluiten genomen, taken verdeeld — maar niemand heeft het goed bijgehouden. Jij wél, want je hebt aantekeningen gemaakt. Maar die omzetten naar een helder actiepunt-overzicht kost je nog eens 20 minuten. Dat hoeft niet.",
    ingredienten: [
      "Claude (gratis) of ChatGPT (gratis)",
      "Je vergadernotities (hoe ruw ook)",
      "Eventueel de agenda van de vergadering",
    ],
    stappen: [
      "Open Claude of ChatGPT direct na de vergadering.",
      "Plak je rauwe aantekeningen — hoe ongestructureerd ook.",
      "Voeg de prompt toe en stuur het op.",
      "Controleer de output op volledigheid en pas aan waar nodig.",
      "Stuur het actiepuntenoverzicht direct naar de deelnemers.",
    ],
    prompt: `Zet mijn vergadernotities om naar een helder verslag met:

1. **Samenvatting** (3-5 zinnen): Waar ging de vergadering over?
2. **Besluiten**: Wat is er besloten? (genummerde lijst)
3. **Actiepunten**: Wie doet wat voor wanneer? (tabel: Taak | Verantwoordelijke | Deadline)
4. **Openstaande vragen**: Wat vraagt nog opvolging?

Mijn aantekeningen:
[PLAK HIER JE AANTEKENINGEN]`,
    promptTip: "Werkt ook met gesproken aantekeningen — dicteer tijdens de vergadering via je telefoon en plak de transcriptie in.",
    content: "",
  },
  {
    slug: "cv-en-sollicitatiebrief",
    title: "Een sollicitatiebrief schrijven in 5 minuten",
    excerpt: "Geen blanco pagina meer. Geef AI de vacature en jouw achtergrond — krijg een sterke brief terug.",
    date: "3 april 2026",
    readTime: "4 min",
    tool: "Claude",
    savingsPerTask: 50,
    savingsNormaal: 60,
    savingsMetAI: 10,
    frequentieLabel: "per sollicitatie",
    savingsEuro: 200,
    savingsEuroLabel: "Vervangt een copywriter à €200 per brief",
    color: "#06B6D4",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=75",

    invalshoek: "De gemiddelde sollicitatiebrief schrijven kost een uur. Herschrijven voor een nieuwe vacature: nog eens 45 minuten. AI neemt het schrijfwerk over — jij levert de input.",
    ingredienten: [
      "Claude (gratis of Pro)",
      "De vacaturetekst",
      "Jouw CV of een korte omschrijving van je achtergrond",
    ],
    stappen: [
      "Kopieer de volledige vacaturetekst.",
      "Schrijf in 5-10 zinnen wie je bent en wat je hebt gedaan.",
      "Plak beide in de prompt hieronder.",
      "Lees de brief door en pas de toon aan waar nodig.",
      "Gebruik Claude om specifieke zinnen te verfijnen ('maak deze zin krachtiger').",
    ],
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
    content: "",
  },
  {
    slug: "sport-trainingsschema",
    title: "Je eigen personal trainer voor €0 per maand",
    excerpt: "Geef je doel en beschikbare tijd op — ontvang een realistisch trainingsschema op maat.",
    date: "28 maart 2026",
    readTime: "3 min",
    tool: "ChatGPT",
    savingsPerTask: 45,
    savingsNormaal: 60,
    savingsMetAI: 15,
    frequentieLabel: "per week",
    savingsEuro: 80,
    savingsEuroLabel: "Vervangt een personal trainer à €80/sessie",
    color: "#EF4444",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=75",

    invalshoek: "Een personal trainer kost €60-100 per sessie. Wat je grotendeels betaalt voor: een schema op maat en iemand die je vertelt wat je moet doen. AI geeft je hetzelfde schema — zonder de rekening.",
    ingredienten: [
      "ChatGPT (gratis)",
      "Jouw fitnessdoel en huidige niveau",
      "Beschikbare tijd en locatie (thuis/gym)",
    ],
    stappen: [
      "Bepaal je doel: afvallen, spiermassa, conditie of algemene fitheid.",
      "Schat je huidige niveau in: beginner, gevorderd of ervaren.",
      "Vul de prompt in met jouw specifieke situatie.",
      "Sla het schema op in je telefoon of print het uit.",
      "Vraag elke 4 weken een nieuw schema: 'Maak een progressief vervolg'.",
    ],
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
    content: "",
  },
];

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) || null;
}
