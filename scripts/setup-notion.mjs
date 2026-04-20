const TOKEN = process.env.NOTION_TOKEN;
const PARENT_PAGE_ID = process.env.NOTION_PARENT_PAGE_ID || '348f610d853f802c971ef53e3c80327d';

const headers = {
  'Authorization': `Bearer ${TOKEN}`,
  'Content-Type': 'application/json',
  'Notion-Version': '2022-06-28',
};

function rt(content) {
  return [{ type: 'text', text: { content: content || '' } }];
}

async function createDatabase() {
  console.log('Database aanmaken...');
  const res = await fetch('https://api.notion.com/v1/databases', {
    method: 'POST',
    headers,
    body: JSON.stringify({
      parent: { type: 'page_id', page_id: PARENT_PAGE_ID },
      title: [{ type: 'text', text: { content: 'AI-Fixes' } }],
      properties: {
        'Titel':              { title: {} },
        'Slug':               { rich_text: {} },
        'Excerpt':            { rich_text: {} },
        'Datum':              { rich_text: {} },
        'Leestijd':           { rich_text: {} },
        'Tool':               { rich_text: {} },
        'Niveau':             { rich_text: {} },
        'CuriosityHeader':    { rich_text: {} },
        'SavingsPerTask':     { number: { format: 'number' } },
        'FrequentieLabel':    { rich_text: {} },
        'Color':              { rich_text: {} },
        'ImageUrl':           { rich_text: {} },
        'SavingsEuro':        { number: { format: 'number' } },
        'SavingsEuroLabel':   { rich_text: {} },
        'PersoonlijkeMissie': { rich_text: {} },
        'Transformatie':      { rich_text: {} },
        'StrategischeLogica': { rich_text: {} },
        'Nuance':             { rich_text: {} },
        'ImpactCTA':          { rich_text: {} },
        'Gepubliceerd':       { checkbox: {} },
      },
    }),
  });
  const data = await res.json();
  if (!data.id) {
    console.error('Fout bij aanmaken database:', JSON.stringify(data, null, 2));
    process.exit(1);
  }
  console.log('Database aangemaakt! ID:', data.id);
  return data.id;
}

async function addPost(dbId, post) {
  const res = await fetch('https://api.notion.com/v1/pages', {
    method: 'POST',
    headers,
    body: JSON.stringify({
      parent: { database_id: dbId },
      properties: {
        'Titel':              { title: rt(post.title) },
        'Slug':               { rich_text: rt(post.slug) },
        'Excerpt':            { rich_text: rt(post.excerpt) },
        'Datum':              { rich_text: rt(post.date) },
        'Leestijd':           { rich_text: rt(post.readTime) },
        'Tool':               { rich_text: rt(post.tool) },
        'Niveau':             { rich_text: rt(post.niveau) },
        'CuriosityHeader':    { rich_text: rt(post.curiosityHeader) },
        'SavingsPerTask':     { number: post.savingsPerTask },
        'FrequentieLabel':    { rich_text: rt(post.frequentieLabel) },
        'Color':              { rich_text: rt(post.color) },
        'ImageUrl':           { rich_text: rt(post.image) },
        'SavingsEuro':        { number: post.savingsEuro || null },
        'SavingsEuroLabel':   { rich_text: rt(post.savingsEuroLabel || '') },
        'PersoonlijkeMissie': { rich_text: rt(post.persoonlijkeMissie) },
        'Transformatie':      { rich_text: rt(post.transformatie) },
        'StrategischeLogica': { rich_text: rt(post.strategischeLogica) },
        'Nuance':             { rich_text: rt(post.nuance) },
        'ImpactCTA':          { rich_text: rt(post.impactCTA) },
        'Gepubliceerd':       { checkbox: true },
      },
    }),
  });
  const data = await res.json();
  if (!data.id) {
    console.error('Fout bij toevoegen post:', post.title, JSON.stringify(data, null, 2));
  } else {
    console.log('Post toegevoegd:', post.title);
  }
}

const posts = [
  {
    slug: 'email-inbox-samenvatten',
    title: 'Stop met je inbox handmatig doorspitten',
    excerpt: '18 minuten per dag terugwinnen op je inbox. Geen inbox-zero rituelen. Geen apps. Gewoon een slim filter.',
    date: '14 april 2026',
    readTime: '4 min',
    tool: 'ChatGPT of Claude',
    niveau: 'Beginner',
    savingsPerTask: 18,
    frequentieLabel: 'per dag',
    color: '#8B5CF6',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1200&q=75',
    curiosityHeader: 'Inbox leeg. Koffie warm.',
    persoonlijkeMissie: 'Ik opende mijn laptop elke ochtend met een knoop in mijn maag. Niet omdat de dag zwaar was. Maar omdat 47 ongelezen mails op me wachtten. De helft was ruis. Welke helft? Dat wist ik pas na twintig minuten scrollen. **Elke dag opnieuw dezelfde verspilling.** Op een gegeven moment besloot ik: dit pik ik niet meer.',
    transformatie: '**De oude manier:** elke mail openen, lezen en prioriteren. Twintig minuten per dag. Elke dag opnieuw.\n\n**Met de AI-Fix:** ik plak mijn inbox erin en krijg binnen tien seconden een overzicht. Urgent bovenaan. Rommel onderaan. De hele operatie kost me nog geen twee minuten.',
    strategischeLogica: 'De truc zit niet in het samenvatten. Samenvatten kan elk kind. **De echte intelligentie zit in de prioritering.**\n\nIk dwing de AI om naar drie dimensies te kijken. De afzender. De emotionele lading van de tekst. De tijdgevoeligheid van het onderwerp. Een mail van je accountant over een deadline heeft een ander gewicht dan een nieuwsbrief. Ook al klinkt die nieuwsbrief urgenter.\n\nDe machine weegt de urgentie door te kijken naar wie er schrijft en wat er op het spel staat. Door een expliciete rangorde te laten aanmaken krijg je een filter dat menselijk denken simuleert.\n\n**Ik stuur de AI aan vanuit mijn perspectief. Niet vanuit dat van de verzender.** Veel tools scannen trefwoorden. Mijn aanpak kijkt naar context. Het verschil merk je direct: minder valse urgentie en meer rust in je dag.',
    nuance: 'Deze fix werkt niet voor gevoelige of juridische correspondentie. Vertrouwelijke informatie plak je niet zomaar in een extern systeem. Gebruik het voor de dagelijkse stroom van werkmail. Niet voor contractonderhandelingen of persoonlijke gesprekken.',
    impactCTA: 'Gebruik de slider hieronder om te berekenen hoeveel uur jij per jaar terugwint. De exacte prompt die ik gebruik staat in **Het Codeboek**. Schrijf je in en kopieer hem vandaag nog.',
  },
  {
    slug: 'weekmenu-boodschappenlijst',
    title: 'Nooit meer nadenken over je boodschappen',
    excerpt: 'Van lege koelkast naar weekmenu en gesorteerde boodschappenlijst. In minder dan een minuut.',
    date: '10 april 2026',
    readTime: '3 min',
    tool: 'ChatGPT',
    niveau: 'Beginner',
    savingsPerTask: 25,
    frequentieLabel: 'per week',
    color: '#F59E0B',
    image: 'https://images.unsplash.com/photo-1543168256-418811576931?auto=format&fit=crop&w=800&q=75',
    curiosityHeader: "Nooit meer 'wat eten we?'",
    persoonlijkeMissie: 'Elke zondagmiddag hetzelfde ritueel. Ik staar naar de koelkast. Ik scrol door receptenwebsites. Ik bedenk iets. En dan vergeet ik een ingrediënt bij de supermarkt. **Dit kostte me wekelijks een half uur mentale energie.** Voor een beslissing die ik eigenlijk helemaal niet interessant vind. Ik wil goed eten. Maar nadenken over wat ik eet? Dat wil ik niet.',
    transformatie: '**De oude manier:** scrollen, twijfelen, vergeten en opnieuw beginnen. Dertig minuten per week. Elke week opnieuw.\n\n**Met de AI-Fix:** ik geef aan wat ik in huis heb, hoeveel personen er eten en hoe lang ik wil koken. Binnen een minuut heb ik een compleet weekmenu. Inclusief gesorteerde boodschappenlijst.',
    strategischeLogica: 'Het geheim zit in de context die je meegeeft. De meeste mensen typen geef me een weekmenu. Ze krijgen een generieke lijst terug. Dat werkt niet.\n\n**Ik dwing de AI om te denken als een kok die mijn koelkast kent.** Door specifieke beperkingen mee te geven stuur ik de machine naar creatieve oplossingen binnen bestaande kaders. Geen abstract advies. Concrete maaltijden op basis van wat ik heb.\n\nDe tweede laag is variatie. Ik laat de AI bewust de keukenstijlen afwisselen. Maandag Aziatisch en dinsdag Mediterraans. Niet omdat ik daar zelf aan denk. Maar omdat een gevarieerd menu je doordeweeks mentaal frisser houdt.\n\n**De derde laag maakt het echt slim.** De boodschappenlijst gesorteerd op supermarktafdeling. Groenten bij groenten. Zuivel bij zuivel.',
    nuance: 'Deze fix werkt minder goed als je sterk leunt op weekaanbiedingen in de supermarkt. De AI kent de folder niet. Check de lijst altijd even voor je gaat. Soms stelt hij ingrediënten voor die die week duurder uitvallen dan normaal.',
    impactCTA: 'Bereken hieronder hoeveel tijd jij per jaar bespaart. De exacte instructies die ik gebruik staan in **Het Codeboek**. Schrijf je in en ontvang de volledige structuur direct in je inbox.',
  },
  {
    slug: 'vergadering-samenvatten',
    title: 'Van vergadernotities naar actieplan in 30 seconden',
    excerpt: 'Rauwe vergadernotities worden in dertig seconden een helder actiepuntenplan. Zo stuur je de vergadering uit.',
    date: '7 april 2026',
    readTime: '3 min',
    tool: 'Claude of ChatGPT',
    niveau: 'Beginner',
    savingsPerTask: 15,
    frequentieLabel: 'per vergadering',
    color: '#10B981',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=75',
    curiosityHeader: 'Vergadering voorbij. Actiepunten klaar.',
    persoonlijkeMissie: 'Na elke vergadering had ik hetzelfde gevoel. We hebben iets besloten. Maar wat precies? Mijn aantekeningen waren een rommelige mix van halve zinnen en krabbels. **Ze omzetten naar een helder actiepuntenlijst kostte me altijd twintig minuten die ik niet had.** En dan bleek iemand anders een andere conclusie te hebben getrokken. Dat was het moment. Ik pakte het anders aan.',
    transformatie: '**De oude manier:** rauwe notities omzetten naar een verslag. Twintig minuten per vergadering. Daarna mailen. Daarna correcties verwerken.\n\n**Met de AI-Fix:** ik plak mijn aantekeningen erin, hoe chaotisch ook. Binnen vijftien seconden ontvang ik een gestructureerd verslag. Met besluiten, actiepunten en openstaande vragen. Klaar om te versturen.',
    strategischeLogica: 'Het interessante aan vergadernotities is dat ze altijd onvolledig zijn. Jij schrijft wat jou opvalt. Je collega schrijft iets anders. **De waarde zit in het extraheren van structuur uit die chaos.**\n\nIk train de AI om notities te lezen als een detective. Niet alleen wat er staat maar wat er bedoeld wordt. Een zin als Jan regelt dat is vaag. Ik dwing de machine om dit te interpreteren als een taak met een verantwoordelijke en een deadline.\n\n**De tweede instructie is minstens zo waardevol.** Onderscheid maken tussen een besluit en een actiepunt. Veel tools gooien dit op een hoop. Door de AI expliciet te instrueren om deze twee categorieën apart te houden krijg je een verslag dat echt bruikbaar is in de week erna.\n\nTot slot laat ik de AI altijd openstaande vragen markeren. Die zijn goud waard voor de volgende meeting.',
    nuance: 'Gebruik dit niet als vervanging voor een officieel vergaderverslag bij juridische besprekingen. De AI interpreteert. En interpretaties kunnen afwijken van wat er letterlijk gezegd is. Bij belangrijke beslissingen laat je de output altijd door een mens valideren.',
    impactCTA: 'Schuif de slider om te zien hoeveel tijd jij per jaar wint. De volledige structuur die ik gebruik staat in **Het Codeboek**. Schrijf je in en ontvang hem direct.',
  },
  {
    slug: 'cv-en-sollicitatiebrief',
    title: 'Een sollicitatiebrief schrijven in 5 minuten',
    excerpt: 'Geen blanco pagina meer. Geef de vacature en je achtergrond mee. Ontvang een brief die klinkt als jij op je best.',
    date: '3 april 2026',
    readTime: '4 min',
    tool: 'Claude',
    niveau: 'Beginner',
    savingsPerTask: 50,
    frequentieLabel: 'per sollicitatie',
    color: '#06B6D4',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=75',
    savingsEuro: 200,
    savingsEuroLabel: 'Vervangt een copywriter a 200 euro per brief',
    curiosityHeader: 'Brief geschreven. Nooit meer gevreesd.',
    persoonlijkeMissie: 'Ik herinner me het gevoel nog goed. Blanco pagina. Interessante vacature. Hoe begin je? Niet met hierbij solliciteer ik. Dat weet ik. Maar wat dan? Een uur later had ik drie alineas die nergens op sloegen. **Sollicitatiebrieven schrijven is een vak apart.** Het merendeel van ons heeft dat vak nooit geleerd. Ik ook niet.',
    transformatie: '**De oude manier:** een uur staren, schrijven en herschrijven. Twijfelen over de toon. Dan nog een keer.\n\n**Met de AI-Fix:** ik geef de vacature en mijn achtergrond mee. Binnen een minuut ligt er een brief. Die klinkt als ik maar dan op mijn best.',
    strategischeLogica: 'Het geheim van een goede sollicitatiebrief is niet creativiteit. **Het is relevantie.** De lezer wil in twintig seconden weten of jij het probleem begrijpt dat zij proberen op te lossen.\n\nIk filter de vacaturetekst op verborgen verlangens. Niet alleen de functiebeschrijving. Ook de toon van het bedrijf, de woorden die ze kiezen en wat ze niet zeggen maar wel bedoelen. Op basis daarvan stem ik de brief af op de cultuur van de organisatie.\n\n**De tweede laag is de persoonlijke insteek.** Een AI-brief klinkt generiek als je hem generiek voedt. Door vijf zinnen over mijn eigen ervaring mee te geven dwing ik de machine om specifieke verbindingen te leggen. Geen loze claims. Concrete koppelingen.\n\nWat het echt scherp maakt: ik instrueer de AI om nooit te beginnen met hierbij solliciteer ik. De eerste zin is het belangrijkste. Die wekt nieuwsgierigheid. De rest volgt vanzelf.',
    nuance: 'Deze fix werkt minder goed bij sterk gespecialiseerde functies waar vakjargon of technische diepgang verwacht wordt. De AI kent jouw sector soms minder goed dan jij. Lees de output altijd kritisch. Voeg zelf de inhoudelijke scherpte toe.',
    impactCTA: 'Bereken hieronder hoeveel tijd je bespaart over al je sollicitaties. De exacte instructies voor een brief die klinkt als jij staan in **Het Codeboek**. Schrijf je in en ontvang ze direct.',
  },
  {
    slug: 'sport-trainingsschema',
    title: 'Je eigen personal trainer voor 0 euro per maand',
    excerpt: 'Geen personal trainer. Geen duur abonnement. Wel een schema dat progressie bouwt zonder dat jij erover hoeft na te denken.',
    date: '28 maart 2026',
    readTime: '3 min',
    tool: 'ChatGPT',
    niveau: 'Beginner',
    savingsPerTask: 45,
    frequentieLabel: 'per week',
    color: '#EF4444',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=75',
    savingsEuro: 80,
    savingsEuroLabel: 'Vervangt een personal trainer a 80 euro per sessie',
    curiosityHeader: 'Personal trainer. Nul euro per maand.',
    persoonlijkeMissie: 'Ik wilde serieuzer gaan sporten. Maar had geen idee waar te beginnen. Een personal trainer leek me overdreven voor iemand die gewoon drie keer per week wil bewegen. **Zonder structuur deed ik steeds hetzelfde.** Dezelfde oefeningen. Zelfde gewichten. Nul progressie. Maanden later had ik weinig resultaat. Ik miste iets. Dat iets was een plan.',
    transformatie: '**De oude manier:** willekeurig sporten zonder structuur of progressie. Af en toe googelen op schemas die nooit precies pasten.\n\n**Met de AI-Fix:** ik beschrijf mijn doel, niveau en beschikbare tijd. Binnen een minuut heb ik een schema. Met oefeningen, sets, herhalingen en een progressieplan voor vier weken.',
    strategischeLogica: 'Een goed trainingsschema is eigenlijk een algoritme. **Het houdt rekening met input, verwerkt die naar output en past zich aan op basis van progressie.**\n\nIk instrueer de AI om te denken als een fysiotherapeut met sportersachtergrond. Niet alleen doe tien push-ups. Maar waarom, in welke verhouding tot andere oefeningen en hoe je dat opbouwt. Door blessures en beperkingen expliciet mee te geven dwing ik de machine om er creatief omheen te werken.\n\n**De slimste instructie is progressie.** De meeste gratis schemas zijn statisch. Ik laat de AI een schema maken dat na vier weken klaar is voor een zwaarder vervolg. Dezelfde oefeningen. Maar met tien procent meer volume. Zo bouw je systematisch op.\n\nWat het persoonlijk maakt is de context. Thuis met dumbbells en vijfenveertig minuten per sessie geeft een compleet ander schema dan een volledig ingerichte sportschool. **De AI optimaliseert binnen jouw grenzen.**',
    nuance: 'Gebruik dit niet als je revalideert na een blessure of een medische aandoening hebt die je beweging beperkt. Een AI kent jouw lichaam niet van binnenuit. Overleg bij twijfel eerst met een fysiotherapeut. Dat is geen overkill. Dat is gewoon slim.',
    impactCTA: 'Zie hieronder wat dit schema jou per jaar bespaart. In tijd en in geld. De exacte opzet die ik gebruik staat in **Het Codeboek**. Schrijf je in en ontvang het format direct.',
  },
];

async function main() {
  const dbId = await createDatabase();
  for (const post of posts) {
    await addPost(dbId, post);
  }
  console.log('\nKlaar! Voeg deze database ID toe aan je .env.local:');
  console.log(`NOTION_DATABASE_ID=${dbId}`);
}

main();
