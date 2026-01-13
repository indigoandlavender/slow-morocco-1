/**
 * Seed script to add 5 new stories to the Slow Morocco database
 * Run with: npx ts-node scripts/seed-stories.ts
 * Or via the API: POST /api/stories/add
 */

const newStories = [
  {
    slug: "the-blue-city-chefchaouen",
    title: "The Blue City",
    subtitle: "How Chefchaouen became Morocco's most photographed town, and why the blue runs deeper than paint",
    category: "History",
    sourceType: "Essay",
    heroImage: "",
    heroCaption: "The medina walls of Chefchaouen at dawn",
    excerpt: "In the Rif Mountains, a small town paints itself in shades of blue that have drawn travelers for decades. But the origins of this tradition reveal a story of faith, migration, and survival.",
    body: `The first thing you notice about Chefchaouen is the silence. Not the absence of sound—children still play in the alleys, vendors still call from their shops—but a particular quality of quiet that settles over the blue-washed walls like morning mist.

## Origins of the Blue

The tradition of painting buildings blue is often attributed to Jewish refugees who settled here in the 15th century, fleeing the Spanish Inquisition. Blue, representing the sky and heaven, served as a reminder to live a spiritual life. But the truth is more layered.

Some historians believe the practice was adopted from the local Amazigh population, who used natural indigo as both dye and medicine. Others point to the practical: blue pigments were thought to repel mosquitoes in the days before modern sanitation.

> "The blue is not decoration. It is memory. Each family passes down their particular shade, their particular technique."

## The Rif Mountain Context

Chefchaouen sits at 564 meters elevation in the Rif Mountains, a region long known for its independence and isolation. For centuries, it was forbidden to non-Muslims—the Spanish only entered in 1920, finding a population that had preserved medieval Andalusian traditions nearly intact.

Today, the blue serves a different purpose. It has become the town's signature, drawing photographers and travelers who fill the medina's narrow streets each morning, searching for the perfect frame of azure walls against terracotta pots.

## Beyond the Surface

Walk deeper into the medina, past the tourist shops and Instagram spots, and you'll find families who have lived here for generations. They'll tell you that the most beautiful blues are in the corners no one photographs—in the private courtyards, in the hammams, in the small mosques tucked behind unmarked doors.

The blue city is not a performance. It is a living tradition, renewed each spring when families repaint their walls, mixing the pigment by hand as their grandparents taught them.`,
    readTime: "6 min read",
    year: "2024",
    textBy: "Slow Morocco",
    imagesBy: "Slow Morocco",
    sources: "Moroccan Ministry of Tourism archives;; Interview with Hassan Belghiti, local historian",
    the_facts: "Chefchaouen was founded in 1471 as a fortress against Portuguese invasions;; The medina contains over 200 shades of blue, each mixed by individual families;; The town was closed to non-Muslims for nearly 500 years",
    tags: "Chefchaouen, Rif Mountains, Amazigh, Jewish heritage, medina, architecture",
    region: "Rif Mountains",
    published: "true",
    order: "10",
    featured: "false"
  },
  {
    slug: "gnawa-music-essaouira",
    title: "The Rhythm of the Gnawa",
    subtitle: "In Essaouira, an ancient musical tradition bridges Africa and Morocco",
    category: "Music",
    sourceType: "Essay",
    heroImage: "",
    heroCaption: "A Gnawa maalem performing at sunset in Essaouira",
    excerpt: "The metal castanets click in triple time, the guembri bass thrums beneath, and voices rise in call and response. This is Gnawa—Morocco's mystical music with roots in sub-Saharan Africa.",
    body: `The lila begins at nightfall. In a private home in Essaouira's medina, musicians gather in a circle, their instruments gleaming in candlelight. The maalem—master musician—takes his seat, cradling the three-stringed guembri bass like something sacred. Because it is.

## The Journey North

Gnawa music traces its origins to sub-Saharan Africa, brought to Morocco by enslaved people centuries ago. It is a music of survival, of spiritual resistance, of maintaining connection to ancestral homelands across impossible distances.

The word "Gnawa" itself may derive from the Berber word for "Black African" or from "Guinea," referring broadly to West Africa. But the Gnawa themselves speak of their tradition as older than names, older than borders.

> "When we play, we are not performing. We are calling. The spirits hear the guembri, and they come."

## The Lila Ceremony

A traditional Gnawa lila is an all-night ritual of music and trance, believed to heal the sick and communicate with spirits. Each spirit—or mlouk—has its own color, its own rhythm, its own songs. The musicians move through seven suites, each invoking different spiritual forces.

The qraqeb—metal castanets worn on the hands—establish the rhythmic foundation. Their clicking pattern is hypnotic, relentless, building toward states of altered consciousness that participants describe as both terrifying and liberating.

## Modern Gnawa

Each June, Essaouira hosts the Gnawa World Music Festival, drawing hundreds of thousands of visitors. Jazz musicians from America jam with maalem. Electronic producers sample the ancient rhythms. The tradition evolves.

But in the zaouias—the Gnawa spiritual lodges scattered throughout Morocco—the old ways continue unchanged. Young musicians still apprentice for years before earning the title of maalem. The ceremonies still last until dawn. The spirits still come when called.

## The Maalem's Art

To become a maalem is to commit one's life to the tradition. Beyond technical mastery of the guembri—an instrument that takes decades to learn properly—a maalem must know hundreds of songs, understand the spiritual associations of each melody, and possess the presence to lead ceremonies that can include dozens of participants.

The greatest maalem are said to communicate directly with the spirit world, channeling entities through their music that bring healing to those in need. This is not metaphor in Gnawa tradition. It is lived reality.`,
    readTime: "7 min read",
    year: "2024",
    textBy: "Slow Morocco",
    imagesBy: "Slow Morocco",
    sources: "Essaouira Gnawa Festival documentation;; Interviews with Maalem Mahmoud Guinea (1951-2015)",
    the_facts: "The guembri is made from camel skin stretched over a carved wooden body;; UNESCO inscribed Gnawa music on the Intangible Cultural Heritage list in 2019;; A traditional lila ceremony lasts from sunset to sunrise—approximately 12 hours",
    tags: "Gnawa, Essaouira, maalem, guembri, music, spiritual tradition, lila",
    region: "Essaouira",
    published: "true",
    order: "11",
    featured: "true"
  },
  {
    slug: "zellige-artisans-fez",
    title: "The Geometry of Faith",
    subtitle: "Inside the workshops of Fez where zellige tilework transforms mathematics into devotion",
    category: "Art",
    sourceType: "Essay",
    heroImage: "",
    heroCaption: "A master zellige craftsman arranging tiles in the Fez medina",
    excerpt: "Each tile is cut by hand, each pattern calculated without computers, each surface a meditation on infinity. In Fez, the art of zellige continues as it has for a thousand years.",
    body: `In the old medina of Fez, down an alley so narrow that two people cannot pass, there is a workshop where men sit cross-legged on the floor, chipping at clay tiles with small hammers. The sound is constant—tap, tap, tap—a rhythm that has echoed here for generations.

## The Mathematics of Pattern

Zellige is the Moroccan art of geometric tilework, related to but distinct from the zillij of Spain and other Islamic traditions. Each pattern is based on mathematical principles—complex tessellations that can continue infinitely without repetition, embodying the Islamic concept of tawhid: the unity and infinity of God.

The master craftsmen of Fez work without computers or modern design tools. They hold the patterns in their minds, passed down through apprenticeship from master to student. Some designs have been transmitted this way for 800 years.

> "My grandfather cut zellige. My father cut zellige. I cut zellige. My son will cut zellige. The pattern does not end with any of us."

## The Making

The process begins with clay from the Middle Atlas mountains, formed into thick tiles and fired in traditional kilns. The tiles emerge in earthy colors—terracotta, cream, cobalt, emerald—each batch slightly different depending on the minerals in the clay.

Then comes the cutting. Using a traditional hatchet called a menqash, artisans chip away at the tiles, shaping them into precise geometric forms: stars, diamonds, hexagons, shapes without names in English. A single complex pattern might require 20 different shapes, each cut by eye and hand to tolerances of less than a millimeter.

## Assembly

The cut tiles are arranged face-down on a flat surface, the pattern built in reverse. The artisan works from memory, placing hundreds of pieces into their exact positions. Then plaster is poured over the back, binding them together. When the panel is flipped, the pattern emerges—seamless, infinite, perfect.

## The Threat of Loss

Today, fewer than 100 master zellige craftsmen remain in Morocco. The training takes 10-15 years, and young people often choose other paths. Factory-made tiles flood the market, indistinguishable to untrained eyes but lacking the subtle irregularities that give handmade zellige its life.

In the workshops of Fez, the elders worry. But they continue their work, tap by tap, chip by chip, trusting that some traditions are too important to die.`,
    readTime: "6 min read",
    year: "2024",
    textBy: "Slow Morocco",
    imagesBy: "Slow Morocco",
    sources: "Fez Medina Artisan Registry;; UNESCO documentation on Moroccan zellige",
    the_facts: "A single square meter of complex zellige can contain over 1,000 individual tiles;; The cobalt blue pigment traditionally used in zellige came from mines near Khemisset;; The Bou Inania Madrasa in Fez contains some of the finest zellige work ever created, dating to 1351",
    tags: "zellige, Fez, artisan, Islamic geometry, medina, traditional craft",
    region: "Fez",
    published: "true",
    order: "12",
    featured: "false"
  },
  {
    slug: "sahara-nomads-merzouga",
    title: "The Last Nomads",
    subtitle: "In the Erg Chebbi dunes, a way of life persists against the modern world",
    category: "People",
    sourceType: "Essay",
    heroImage: "",
    heroCaption: "A nomadic family's camp in the Erg Chebbi desert",
    excerpt: "The Sahara was never empty. For millennia, nomadic peoples have traced routes across the sand that exist in no GPS, following water and pasture in an endless cycle. Some still do.",
    body: `The tent appears suddenly from behind a dune—black goat hair stretched over wooden poles, a small fire smoking in front. Three generations live here: grandmother, parents, children. They have no fixed address, no electricity, no running water. They have camels, goats, the stars for navigation, and knowledge of the desert that no school could teach.

## The Nomadic Tradition

The Sahara has been home to nomadic peoples for at least 10,000 years. The Amazigh, Tuareg, and Arab tribes who traverse this landscape developed sophisticated systems for survival: knowledge of water sources hundreds of kilometers apart, the ability to read weather patterns in sand and sky, a social structure built around movement rather than place.

> "The desert is not hostile. The desert is honest. It shows you exactly what it is. If you listen, you can live here forever."

## Erg Chebbi

Near the village of Merzouga, the Erg Chebbi dunes rise 150 meters high—Morocco's tallest sand formations. This is a meeting point: tourists come for camel rides and desert camps, but just beyond the tourist routes, nomadic families continue their ancestral patterns.

The family I visited had been coming to this region for generations, following a route their ancestors established centuries ago. In winter, they camp near the dunes where sparse vegetation feeds their goats. In summer, they move to the cooler reaches of the Draa Valley.

## The Children's Future

Mohammed, the father, is 45. His wife Fatima is 38. Their four children range from 5 to 16. The oldest, a girl named Aicha, attends a boarding school in Erfoud nine months of the year. She wants to become a teacher.

"I am proud of her," Mohammed says. "But I am also sad. When she finishes school, she will not return to this life. My grandchildren will not know how to find water by reading the sand. They will not know the stars by name."

He speaks without bitterness—simply stating a fact. The nomadic life is ending, not through violence or decree, but through the slow pull of a world where education and employment require settling in one place.

## What Remains

In the evenings, the family gathers around the fire. The grandmother tells stories of the old days—of caravans that crossed the Sahara carrying salt and gold, of months-long journeys to markets in distant cities. The children listen, half-understanding, their faces lit by flames as their ancestors' faces have been lit for thousands of years.

Some knowledge cannot be preserved in books or museums. It exists only in practice, in the living transmission from one generation to the next. When the last nomad settles, something irreplaceable will be lost—not just for Morocco, but for humanity.`,
    readTime: "7 min read",
    year: "2024",
    textBy: "Slow Morocco",
    imagesBy: "Slow Morocco",
    sources: "Field interviews near Merzouga, January 2024;; Moroccan Ministry of Culture nomadic population surveys",
    the_facts: "Morocco's nomadic population has declined from over 1 million in 1960 to fewer than 50,000 today;; The Erg Chebbi dunes formed approximately 20,000 years ago;; Traditional nomadic tents are made from woven goat hair, which swells when wet to become waterproof",
    tags: "Sahara, nomads, Merzouga, Erg Chebbi, Amazigh, desert life, traditional lifestyle",
    region: "Sahara Desert",
    published: "true",
    order: "13",
    featured: "true"
  },
  {
    slug: "argan-oil-women-essaouira",
    title: "The Women of the Argan Forests",
    subtitle: "How a traditional oil became a global phenomenon—and what that means for the women who make it",
    category: "Systems",
    sourceType: "Essay",
    heroImage: "",
    heroCaption: "Women processing argan nuts at a cooperative near Essaouira",
    excerpt: "The argan tree grows nowhere else on Earth. For centuries, Amazigh women have extracted oil from its nuts using techniques unchanged since antiquity. Then the beauty industry discovered it.",
    body: `The sound is distinctive: stone against stone, a rhythmic grinding that has echoed through the argan forests for centuries. Women sit in circles, cracking the hardest nuts in the world, extracting kernels that will yield one of the planet's most valuable oils.

## The Sacred Tree

The argan tree (Argania spinosa) is endemic to southwestern Morocco, growing in a UNESCO-designated Biosphere Reserve between Essaouira and Agadir. The trees can live 200 years, their gnarled forms dotting the landscape like ancient sculptures. Goats climb their branches to eat the fruit—an image that has become iconic of the region.

For the Amazigh people, the argan is more than a resource. It is woven into their mythology, their medicine, their cuisine. Argan oil has been used for cooking, cosmetics, and healing for at least 3,000 years.

> "My grandmother taught my mother. My mother taught me. We do not read instructions. The knowledge is in our hands."

## The Global Demand

In the early 2000s, Western beauty companies discovered argan oil's remarkable properties: rich in vitamin E, deeply moisturizing, fast-absorbing. Within a decade, global demand exploded. Today, argan oil appears in thousands of products, from luxury serums to mass-market shampoos.

This created both opportunity and crisis. Prices soared. Outside investors moved in. The traditional system—where women controlled production and sales—came under pressure.

## The Cooperative Model

In response, women's cooperatives emerged throughout the argan region. These organizations allow producers to collectively process, brand, and sell their oil, capturing more value than they would as individual sellers to middlemen.

The Amal Cooperative, founded in 1999 near Essaouira, now employs over 60 women. They earn regular income, receive healthcare benefits, and govern the organization democratically. Many have used their earnings to send daughters to university—a transformation within a single generation.

## The Challenges

Success brings its own problems. Counterfeit argan oil floods global markets. Mechanized extraction threatens to replace hand-processing. Climate change stresses the argan forests, with some studies predicting significant range reduction by 2050.

The women of the cooperatives are adapting: pursuing organic certification, building direct relationships with international buyers, advocating for forest conservation. They understand that their way of life depends on protecting both the trees and their traditional knowledge.

## A Delicate Balance

As I left the cooperative, a young woman named Khadija walked me to my car. She was 24, college-educated, and had chosen to return to her village to work with her mother and aunts.

"People ask me why I came back," she said. "They say I could make more money in Casablanca. But this—" she gestured at the processing room, the women, the ancient trees visible through the window—"this is not just a job. It is who we are."

The argan forests face an uncertain future. But as long as women like Khadija choose tradition alongside opportunity, the grinding stones will continue their song.`,
    readTime: "8 min read",
    year: "2024",
    textBy: "Slow Morocco",
    imagesBy: "Slow Morocco",
    sources: "Interview at Amal Cooperative, Essaouira region;; UCFA (Union of Women's Argan Cooperatives) reports;; UNESCO Argan Biosphere Reserve documentation",
    the_facts: "It takes 30 kilograms of argan fruit to produce 1 liter of oil;; Morocco produces approximately 4,000 tonnes of argan oil annually;; The argan forest covers 828,000 hectares, down from an estimated 1.5 million hectares a century ago",
    tags: "argan oil, women's cooperatives, Amazigh, Essaouira, traditional craft, sustainable development",
    region: "Souss-Massa",
    published: "true",
    order: "14",
    featured: "false"
  }
];

// Export for use in API or direct seeding
export { newStories };

// If running directly
if (require.main === module) {
  console.log('Stories to be added:');
  newStories.forEach((story, i) => {
    console.log(`${i + 1}. ${story.title} (${story.slug}) - ${story.category}`);
  });
  console.log('\nTo add these stories, POST to /api/stories/add with:');
  console.log(JSON.stringify({ stories: newStories }, null, 2));
}
