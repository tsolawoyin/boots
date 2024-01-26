
// CHATGPT 3.5 HELPED WITH THE ANSWERS

let englishQuestions = [
    {
      "topic": "Antonyms I",
      "questions": [
        {
          "id": 1,
          "question": "The poor man is compelled to languish in his poverty stricken situation.",
          "options": [
            "luxuriate in",
            "deteriorate in",
            "suffer in",
            "laugh at"
          ],
          "ans": "A",
          "main": "languish"
        },
        {
          "id": 2,
          "question": "The engineers have been urged to make a prototype of the long-awaited Nigeria car.",
          "options": [
            "specimen",
            "original",
            "copy",
            "drawing"
          ],
          "ans": "D",
          "main": "prototype"
        },
        {
          "id": 3,
          "question": "He gave a painstaking account of his encounter with the ghost of his father.",
          "options": [
            "sordid",
            "fearful",
            "half-hearted",
            "tenderhearted"
          ],
          "ans": "D",
          "main": "painstaking"
        },
        {
          "id": 4,
          "question": "Since mortality is the lot of man argued the preacher, we must all accept death with equanimity.",
          "options": [
            "concern",
            "uncertainty",
            "serenity",
            "anxiety"
          ],
          "ans": "D",
          "main": "equanimity"
        },
        {
          "id": 5,
          "question": "We admire the minister's passionate and dynamic characteristics.",
          "options": [
            "cruel and passive",
            "kind and forceful",
            "passive and charmless",
            "charmless and cruel"
          ],
          "ans": "D",
          "main": "passionate and dynamic"
        },
        {
          "id": 6,
          "question": "You can use lethal means if necessary to stop dangerous characters from molesting innocent citizens.",
          "options": [
            "fatal",
            "cruel",
            "harmless",
            "soft"
          ],
          "ans": "C",
          "main": "lethal"
        },
        {
          "id": 7,
          "question": "His intentions was not actually to punish the villagers, and in any case he is now making moves to pacify them.",
          "options": [
            "placate",
            "ridicule",
            "appease",
            "annoy"
          ],
          "ans": "D",
          "main": "pacify"
        },
        {
          "id": 8,
          "question": "If you are really keen on immediate results, you just have to adopt this pragmatic approach.",
          "options": [
            "practical",
            "unrealistic",
            "opportunistic",
            "sensible"
          ],
          "ans": "B",
          "main": "pragmatic"
        },
        {
          "id": 9,
          "question": "My friend was reduced to beggary by various ill advised business deals.",
          "options": [
            "affluence",
            "penury",
            "influence",
            "poverty"
          ],
          "ans": "A",
          "main": "beggary"
        },
        {
          "id": 10,
          "question": "Measures were taken to authenticate the number of the booklets received.",
          "options": [
            "reaffirm",
            "discredit",
            "discountenance",
            "count"
          ],
          "ans": "B",
          "main": "authenticate"
        },
        {
          "id": 11,
          "question": "He urged other progressives in the country to join forces with his association.",
          "options": [
            "radicals",
            "conservatives",
            "pessimists",
            "activists"
          ],
          "ans": "B",
          "main": "progressives"
        },
        {
            // not yet sure...
          "id": 12,
          "question": "Adama's father simply condoned her bad habits instead of punishing her appropriately.",
          "options": [
            "opposed",
            "blamed",
            "accepted",
            "forbade"
          ],
          "ans": "C",
          "main": "condoned"
        },
        {
          "id": 13,
          "question": "The undesirable elements who perpetuate these vices are never detected.",
          "options": [
            "aggravate",
            "overlook",
            "discontinue",
            "encourage"
          ],
          "ans": "C",
          "main": "perpetuate"
        },
        {
            // inadvertently????
          "id": 14,
          "question": "Some travellers unwittingly render themselves open prey to questionable character.",
          "options": [
            "genuinely",
            "wholesomely",
            "knowingly",
            "inadvertently"
          ],
          "ans": "D",
          "main": "unwittingly"
        },
        {
          "id": 15,
          "question": "His father is a shrewd businessman.",
          "options": [
            "gullible",
            "orderly",
            "reliable",
            "resourceful"
          ],
          "ans": "A",
          "main": "shrewd"
        },
        {
          "id": 16,
          "question": "Many people have raised the issue about the need for an equitable distribution of our wealth.",
          "options": [
            "a fair",
            "an even",
            "an unjust",
            "an undue"
          ],
          "ans": "C",
          "main": "equitable"
        },
        {
          "id": 17,
          "question": "The pastor decided to exorcise the evil spirit as the afflicted member of his congregation cried for help.",
          "options": [
            "expel",
            "drive",
            "invite",
            "charm"
          ],
          "ans": "C",
          "main": "exorcise"
        },
        {
          "id": 18,
          "question": "He mumbled a few words at the trial and then cried.",
          "options": [
            "shouted",
            "murmured",
            "charm",
            "invite"
          ],
          "ans": "A",
          "main": "mumbled"
        },
        {
          "id": 19,
          "question": "There are many areas of convergence between male and female behaviour.",
          "options": [
            "concomitance",
            "concordance",
            "incompatibility",
            "incomparatibility"
          ],
          "ans": "c",
          "main": "convergence"
        },
        {
          "id": 20,
          "question": "The greenhouse effect is beginning to abate in Europe.",
          "options": [
            "intensify",
            "extentuate",
            "surface",
            "ameliorate"
          ],
          "ans": "A",
          "main": "abate"
        },
        {
          "id": 21,
          "question": "The chairman'a verdict redressed the injustice meted out by the secretary.",
          "options": [
            "corrected",
            "restored",
            "aggravated",
            "addressed"
          ],
          "ans": "C",
          "main": "redressed"
        },
        {
          "id": 22,
          "question": "Uche could not travel last December because of the severity of the harmattan.",
          "options": [
            "cold",
            "mildness",
            "warmth",
            "moderation"
          ],
          "ans": "B",
          "main": "severity"
        },
        {
          "id": 23,
          "question": "Mrs. Kofi is very provocative in her style of dressing.",
          "options": [
            "modest",
            "happy",
            "angry",
            "moderation"
          ],
          "ans": "A",
          "main": "provocative"
        },
        {
          "id": 24,
          "question": "Akoso thought that her father was very callous.",
          "options": [
            "indifferent",
            "compassionate",
            "wicked",
            "careless"
          ],
          "ans": "B",
          "main": "callous"
        },
        {
          "id": 25,
          "question": "'The Lions of Cameroun' is really an indomitable team.",
          "options": [
            "a powerful",
            "a prominent",
            "a weak",
            "a cowardly"
          ],
          "ans": "C",
          "main": "indomitable"
        },
        {
          "id": 26,
          "question": "To almost everyone in the little village, Ada's behaviour was most odious.",
          "options": [
            "repulsive",
            "difficult",
            "attractive",
            "charming"
          ],
          "ans": "D",
          "main": "odious"
        },
        {
            // let's make research on this one...
          "id": 27,
          "question": "Aduma was so vociferous during the meeting of the congregation that he succeeded in incurring the wrath of the chairman.",
          "options": [
            "anger",
            "admiration",
            "displeasure",
            "sympathy"
          ],
          "ans": "D",
          "main": "wrath"
        },
        {
          "id": 28,
          "question": "It was an inopportune moment for you to make that suggestion.",
          "options": [
            "an ideal",
            "a wrong",
            "an exact",
            "a sad"
          ],
          "ans": "A",
          "main": "inopportune"
        },
        {
          "id": 29,
          "question": "He devoted too much time to the peripheral aspects.",
          "options": [
            "unimportant",
            "superficial",
            "minor",
            "main"
          ],
          "ans": "D",
          "main": "peripheral"
        },
        {
          "id": 30,
          "question": "The climate of Nigeria is an enervating one.",
          "options": [
            "a weakening",
            "an energy sapping",
            "an invigorating",
            "a sluggish"
          ],
          "ans": "C",
          "main": "enervating"
        },
        {
          "id": 31,
          "question": "Once he has decided that something needs doing, my brother is very unswerving of purpose.",
          "options": [
            "erratic",
            "tenacious",
            "stubborn",
            "simple"
          ],
          "ans": "A",
          "main": "unswerving"
        },
        {
          "id": 32,
          "question": "Those were the days of the fallacy that some languages are primitive while others are not",
          "options": [
            "argument",
            "excuse",
            "misconception",
            "truth"
          ],
          "ans": "D",
          "main": "fallacy"
        },
        {
          "id": 33,
          "question": "She is immune to the flattery of young men.",
          "options": [
            "resistant",
            "susceptible",
            "insensible",
            "unresponsive"
          ],
          "ans": "B",
          "main": "immune"
        },
        {
          "id": 34,
          "question": "Events in South Africa indicate a kind of political renaissance.",
          "options": [
            "rejuvenation",
            "decline",
            "turbulence",
            "upheaval"
          ],
          "ans": "B",
          "main": "renaissance"
        },
        {
          "id": 35,
          "question": "If we must live together as one people, we must learn to tolerate disparate dispositions.",
          "options": [
            "converging",
            "accomodating",
            "conflicting",
            "opposing"
          ],
          "ans": "A",
          "main": "disparate"
        },
        {
          "id": 36,
          "question": "The presidential aspirant warned of the political catastrophe that would follow if the election were rigged.",
          "options": [
            "problem",
            "turmoil",
            "success",
            "conflagration"
          ],
          "ans": "C",
          "main": "catastrophe"
        },
        {
          "id": 37,
          "question": "The officer asked for a more temperate assessment of the matter.",
          "options": [
            "extreme",
            "moderate",
            "radical",
            "human"
          ],
          "ans": "A",
          "main": "temperate"
        },
        {
          "id": 38,
          "question": "My father's advice to me was quite invaluable.",
          "options": [
            "useless",
            "useful",
            "helpful",
            "unsolicited"
          ],
          "ans": "A",
          "main": "invaluable"
        },
        {
          "id": 39,
          "question": "Musa hates Hadiza for her constant bellicose behavior.",
          "options": [
            "violent",
            "gentle",
            "meek",
            "troublesome"
          ],
          "ans": "B",
          "main": "bellicose"
        },
        {
          "id": 40,
          "question": "There is much indifference in his behavior.",
          "options": [
            "nonchalance",
            "willingness",
            "inconsistency"
          ],
          "ans": "B",
          "main": "indifference"
        },
        {
          "id": 41,
          "question": "My brother married a loquacious woman",
          "options": [
            "quiet",
            "noisy",
            "talkative",
            "beautiful"
          ],
          "ans": "A",
          "main": "loquacious"
        },
        {
          "id": 42,
          "question": "Most warring countries end up in a state of satiation.",
          "options": [
            "hunger",
            "thirst",
            "danger",
            "famine"
          ],
          "ans": "A",
          "main": "satiation"
        },
        {
          "id": 43,
          "question": "Abdul is fond of his teacher though he sometimes makes derogatory remarks about him.",
          "options": [
            "unpleasant",
            "complimentary",
            "expressive",
            "inconsiderate"
          ],
          "ans": "B",
          "main": "derogatory"
        },
        {
          "id": 44,
          "question": "The Minister has finally been dropped from the present cabinet because of his ignoble act.",
          "options": [
            "criminal",
            "ignorant",
            "honorable",
            "selfish"
          ],
          "ans": "C",
          "main": "ignoble"
        },
        {
            // a seems to make sense
          "id": 45,
          "question": "His cruelty to his mother defies logical explanation.",
          "options": [
            "demands",
            "offers",
            "projects",
            "precludes"
          ],
          "ans": "A",
          "main": "defies"
        },
        {
          "id": 46,
          "question": "Orinya balances the pail on her head with accustomed ease.",
          "options": [
            "convincing",
            "surprising",
            "unwary",
            "unusual"
          ],
          "ans": "D",
          "main": "accustomed"
        },
        {
          "id": 47,
          "question": "They attacked all regulations designed to emasculate student militancy.",
          "options": [
            "condone",
            "isolate",
            "punish",
            "strengthen"
          ],
          "ans": "D",
          "main": "emasculate"
        },
        {
          "id": 48,
          "question": "There is no point dissipating energy on a useless argument",
          "options": [
            "destroying",
            "conserving",
            "marshalling",
            "storing"
          ],
          "ans": "D",
          "main": "dissipating"
        },
        {
          "id": 49,
          "question": "Everyone, including the Principal, believed that he was a very assiduous student.",
          "options": [
            "assertive",
            "industrious",
            "aggressive",
            "casual"
          ],
          "ans": "D",
          "main": "assiduous"
        },
        {
          "id": 50,
          "question": "My eldest brother is now faced with the vicissitudes of married life.",
          "options": [
            "amazement",
            "sweetness",
            "amiability",
            "stability"
          ],
          "ans": "D",
          "main": "vicissitudes"
        },
        {
          "id": 51,
          "question": "The dancing troupe put up a flawless performance.",
          "options": [
            "an interesting",
            "an imperfect",
            "a satisfactory",
            "a careless"
          ],
          "ans": "D",
          "main": "flawless"
        },
        {
          "id": 52,
          "question": "The officer said that he knew nothing to the detriment of the applicant.",
          "options": [
            "damage",
            "disfavor",
            "advantage",
            "incurius",
            "careful"
          ],
          "ans": "D",
          "main": "detriment"
        },
        {
          "id": 53,
          "question": "Common sense requires that one should be decorous at formal gatherings",
          "options": [
            "damage",
            "disfavor",
            "advantage",
            "incurius",
            "careful"
          ],
          "ans": "D",
          "main": "decorous"
        },
        {
          "id": 54,
          "question": "The string was taut.",
          "options": [
            "loose",
            "firm",
            "stretched",
            "tight"
          ],
          "ans": "D",
          "main": "taut"
        },
        {
          "id": 55,
          "question": "The diminutive figure bounces over the track with unfathomable lightness..",
          "options": [
            "invigorating",
            "irresistible",
            "predictable",
            "impressive"
          ],
          "ans": "D",
          "main": "unfathomable"
        },
        {
          "id": 56,
          "question": "The teacher announced that the class would be making a fleeting visit to the zoo.",
          "options": [
            "routine",
            "brief",
            "long",
            "guided"
          ],
          "ans": "D",
          "main": "fleeting"
        },
        {
          "id": 57,
          "question": "We intend to make the reception a diurnal event.",
          "options": [
            "nightly",
            "a weekly",
            "a short",
            "an annual"
          ],
          "ans": "D",
          "main": "diurnal"
        },
        {
          "id": 58,
          "question": "The project is designed to alleviate poverty in the country.",
          "options": [
            "tackle",
            "exacerbate",
            "eradicate",
            "assuage"
          ],
          "ans": "D",
          "main": "alleviate"
        },
        {
          "id": 59,
          "question": "It is surprising that this politician has now turned renegade.",
          "options": [
            "militant",
            "corrupt",
            "loyal",
            "quiet"
          ],
          "ans": "D",
          "main": "renegade"
        },
        {
          "id": 60,
          "question": "Hypertension is a debilitating disease that everyone should prevent.",
          "options": [
            "an enervating",
            "an energizing",
            "a horrible",
            "a mortal"
          ],
          "ans": "D",
          "main": "debilitating"
        },
        {
          "id": 61,
          "question": "The striking workers have vowed not to return to work until the decision is rescinded",
          "options": [
            "changed",
            "dismissed",
            "implemented",
            "incorporated"
          ],
          "ans": "D",
          "main": "rescinded"
        },
        {
          "id": 62,
          "question": "I'm not interested in buying that shirt. I think it is overpriced.",
          "options": [
            "expensive",
            "overrated",
            "priceless",
            "cheap"
          ],
          "ans": "D",
          "main": "overpriced"
        },
        {
          "id": 63,
          "question": "Civil engineering is predominantly a male profession.",
          "options": [
            "absolutely",
            "essentially",
            "generally",
            "seldom"
          ],
          "ans": "D",
          "main": "predominantly"
        },
        {
          "id": 64,
          "question": "As these boys never act in public, the police are now worried about their covert activities.",
          "options": [
            "cryptic",
            "ignoble",
            "evil",
            "open"
          ],
          "ans": "D",
          "main": "covert"
        },
        {
          "id": 65,
          "question": "Some equatorial areas have a sultry climate.",
          "options": [
            "a temperate",
            "an inclement",
            "a stable",
            "a hot"
          ],
          "ans": "D",
          "main": "sultry"
        },
        {
          "id": 66,
          "question": "Updating the Board's brochure is an arduous task.",
          "options": [
            "an annual",
            "an easy",
            "a regular",
            "a difficult"
          ],
          "ans": "D",
          "main": "arduous"
        },
        {
          "id": 67,
          "question": "What a harmless thought he has!.",
          "options": [
            "pleasant",
            "pernicious",
            "perfect",
            "pertinent"
          ],
          "ans": "D",
          "main": "harmless"
        },
        {
          "id": 68,
          "question": "In his naivety, he believed all the stories his friend told him.",
          "options": [
            "incredulity",
            "stupidity",
            "friendliness",
            "artlessness"
          ],
          "ans": "D",
          "main": "naivety"
        },
        {
          "id": 69,
          "question": "It is inconceivable that the rat devoured the cat.",
          "options": [
            "credible",
            "unimaginable",
            "contestable",
            "incomprehensible"
          ],
          "ans": "D",
          "main": "inconceivable"
        },
        {
          "id": 70,
          "question": "Ali wondered why the principal was ambivalent about the student's future.",
          "options": [
            "decisive",
            "inconsiderate",
            "anxious",
            "ambituous"
          ],
          "ans": "D",
          "main": "ambivalent"
        },
        {
          "id": 71,
          "question": "The teacher taught the rudiments of Chemistry to the first grade.",
          "options": [
            "theory",
            "fundamentals",
            "elements",
            "basics"
          ],
          "ans": "D",
          "main": "rudiments"
        },
        {
          "id": 72,
          "question": "The journalist's write-up contained a plethora of detail.",
          "options": [
            "simplicity",
            "spectrum",
            "shortage",
            "complexity"
          ],
          "ans": "D",
          "main": "plethora"
        },
        {
          "id": 73,
          "question": "The town was all agog at his unexpected return",
          "options": [
            "unexcited",
            "excited",
            "on fire",
            "surprised"
          ],
          "ans": "D",
          "main": "agog"
        },
        {
          "id": 74,
          "question": "The lecture seemed interminable.",
          "options": [
            "boring",
            "brief",
            "unending",
            "interesting"
          ],
          "ans": "D",
          "main": "interminable"
        },
        {
          "id": 75,
          "question": "In the latter part of his life, the famous soldier showed signs of youthfulness.",
          "options": [
            "senility",
            "energy",
            "vitality",
            "bravery"
          ],
          "ans": "D",
          "main": "youthfulness"
        },
        {
          "id": 76,
          "question": "There is much apathy towards reading among students nowadays..",
          "options": [
            "indifference",
            "indecision",
            "disinclination",
            "enthusiasm"
          ],
          "ans": "D",
          "main": "apathy"
        },
        {
          "id": 77,
          "question": "The witness averred that she had seen Dosun at the scene of the crime.",
          "options": [
            "argued",
            "confirmed",
            "denied",
            "affirmed"
          ],
          "ans": "D",
          "main": "averred"
        },
        {
          "id": 78,
          "question": "The high cost of living these days calls for a lot of frugality.",
          "options": [
            "extravagance",
            "economy",
            "recklessness",
            "prudence"
          ],
          "ans": "D",
          "main": "frugality"
        },
        {
          "id": 79,
          "question": "Tunde's reaction underscores the point I was making",
          "options": [
            "justifies",
            "emphasizes",
            "summarizes",
            "contradicts"
          ],
          "ans": "D",
          "main": "underscores"
        },
        {
          "id": 80,
          "question": "Everyone admired the manager's adroit handling of the crises in the company",
          "options": [
            "clever",
            "tactless",
            "skillful",
            "clumsy"
          ],
          "ans": "D",
          "main": "adroit"
        },
        {
          "id": 81,
          "question": "The principal took exception to the ignoble role the teacher played in the matter",
          "options": [
            "embarassing",
            "honorable",
            "extraordinary",
            "dishonorable"
          ],
          "ans": "D",
          "main": "ignoble"
        },
        {
          "id": 82,
          "question": "He is notorious for his drunkenness",
          "options": [
            "popular",
            "known",
            "well known",
            "renowned"
          ],
          "ans": "D",
          "main": "notorious"
        },
        {
          "id": 83,
          "question": "The chairman's conduct redounds to the image of the company",
          "options": [
            "assists in",
            "reflects on",
            "contributes to",
            "detracts from"
          ],
          "ans": "D",
          "main": "redounds to"
        },
        {
          "id": 84,
          "question": "Her phlegmatic temperament endears her to her friends",
          "options": [
            "stoic",
            "irritable",
            "lively",
            "cold"
          ],
          "ans": "D",
          "main": "phlegmatic"
        },
        {
          "id": 85,
          "question": "The workers suddenly became restive",
          "options": [
            "fidgety",
            "disorderly",
            "submissive",
            "calm"
          ],
          "ans": "D",
          "main": "restive"
        },
        {
          "id": 86,
          "question": "The Governor's visit is an unprecedented event in the history of the social club",
          "options": [
            "a perfect",
            "a momentous",
            "an insignificant",
            "an unnecessary"
          ],
          "ans": "D",
          "main": "unprecedented"
        },
        {
          "id": 87,
          "question": "The athlete has unexpectedly become indomitable",
          "options": [
            "weak",
            "disoriented",
            "unruly",
            "unconquerable"
          ],
          "ans": "D",
          "main": "indomitable"
        },
        {
          "id": 88,
          "question": "The evidence the leader gave was incontrovertible",
          "options": [
            "industable",
            "contestable",
            "practicable",
            "logical"
          ],
          "ans": "D",
          "main": "incontrovertible"
        },
        {
          "id": 89,
          "question": "The President gave another extemporaneous speech last Friday",
          "options": [
            "unprepared",
            "fascinating",
            "planned",
            "unfavorable"
          ],
          "ans": "D",
          "main": "extemporaneous"
        },
        {
          "id": 90,
          "question": "Only those who are gullible will fall victim to his trickery.",
          "options": [
            "saucy",
            "devastated",
            "courteous",
            "astute"
          ],
          "ans": "D",
          "main": "gullible"
        },
        {
          "id": 91,
          "question": "He is well known for his inordinate ambition.",
          "options": [
            "excessive",
            "passionate",
            "moderate",
            "sound"
          ],
          "ans": "D",
          "main": "inordinate"
        },
        {
          "id": 92,
          "question": "Students could be timid.",
          "options": [
            "bold",
            "friendly",
            "covetuous",
            "pugnacious"
          ],
          "ans": "D",
          "main": "timid"
        },
        {
          "id": 93,
          "question": "The witness decided to conceal the evidence.",
          "options": [
            "divulge",
            "hide",
            "destroy",
            "pugnacious"
          ],
          "ans": "D",
          "main": "conceal"
        },
        {
          "id": 94,
          "question": "The member of the congregation were inspired by the ovation.",
          "options": [
            "bewitched",
            "enthralled",
            "disenchanted",
            "disoriented"
          ],
          "ans": "D",
          "main": "inspired"
        },
        {
          "id": 95,
          "question": "Agbenu was ecstatic abput her result.",
          "options": [
            "disappointed",
            "sad",
            "pessimistic",
            "mad"
          ],
          "ans": "D",
          "main": "ecstatic"
        },
        {
          "id": 96,
          "question": "The labor leader's recalcitran stance was applauded.",
          "options": [
            "stubborn",
            "flexible",
            "uncompromising",
            "well informed"
          ],
          "ans": "D",
          "main": "recalcitran"
        },
        {
          "id": 97,
          "question": "A cool bath in a hot weather can be truly invigorating.",
          "options": [
            "devastating",
            "unpalatable",
            "debilitating",
            "disgusting"
          ],
          "ans": "D",
          "main": "invigorating"
        },
        {
          "id": 98,
          "question": "Maryam loath to do the assignment.",
          "options": [
            "willing",
            "waiting",
            "dying",
            "unwilling"
          ],
          "ans": "D",
          "main": "loath"
        }
      ]
    },
    {
      "topic": "Synonyms I",
      "questions": [
        {
          "id": 1,
          "question": "The town looked deserted but we moved in with some trepidation",
          "options": [
            "confidence",
            "surprise",
            "hesitation",
            "fear"
          ],
          "ans": "D",
          "main": "trepidation"
        },
        {
          "id": 2,
          "question": "They show no finesse in dealing with strangers",
          "options": [
            "boldness",
            "kindness",
            "tact",
            "love"
          ],
          "ans": "C",
          "main": "finesse"
        },
        {
          "id": 3,
          "question": "Although the manager is busy right now, he will be with you presently",
          "options": [
            "immediately",
            "soon",
            "without delay",
            "right away"
          ],
          "ans": "B",
          "main": "presently"
        },
        {
          "id": 4,
          "question": "The governor's wife, in characteristically simple attire, walked into the hall unnoticed",
          "options": [
            "eccentrically",
            "typically",
            "consistently",
            "intrinsically"
          ],
          "ans": "B",
          "main": "characteristically"
        },
        {
          "id": 5,
          "question": "Much to her chagrin, the bridegroom did not turn up for the wedding",
          "options": [
            "wonder",
            "surprise",
            "disappointment",
            "depression"
          ],
          "main": "chagrin",
          "ans": "C"
        },
        {
          "id": 6,
          "question": "He might be compelled to make a momentous decision",
          "options": [
            "a voluntary",
            "a spontaneous",
            "an important",
            "an involuntary"
          ],
          "main": "momentous",
          "ans": "C"
        },
        {
          "id": 7,
          "question": "New companies in the country always put up classified advertisements in the dailies",
          "options": [
            "secret",
            "small",
            "outrageous",
            "expensive"
          ],
          "main": "classified",
          "ans": "A"
        },
        {
          "id": 8,
          "question": "The doctors insisted on giving all of us prophylactic drugs",
          "options": [
            "curative",
            "preventive",
            "routine",
            "special"
          ],
          "main": "prophylactic",
          "ans": "B"
        },
        {
          "id": 9,
          "question": "The delegates to the Constitutional Conference have mooted that funding of universities be transferred to states where they are located",
          "options": [
            "said",
            "agreed",
            "proposed",
            "legislated"
          ],
          "main": "mooted",
          "ans": "C"
        },
        {
          "id": 10,
          "question": "Our local paper is noted for its incisive editorials on local politics",
          "options": [
            "sarcastic",
            "penetrating",
            "decisive",
            "destructive"
          ],
          "main": "incisive",
          "ans": "B"
        },
        {
          "id": 11,
          "question": "Many Nigerian have inured themselves to hardship",
          "options": [
            "subjected",
            "accustomed",
            "endeared",
            "submitted"
          ],
          "main": "inured",
          "ans": "B"
        },
        {
          "id": 12,
          "question": "There are many venal judges in our courts today",
          "options": [
            "qualified",
            "professional",
            "corrupt",
            "honest"
          ],
          "main": "venal",
          "ans": "C"
        },
        {
          "id": 13,
          "question": "He is bound to expose himself by his nefarious activities",
          "options": [
            "kind",
            "disreputable",
            "despicable",
            "nocturnal"
          ],
          "main": "nefarious",
          "ans": "C"
        },
        {
          "id": 14,
          "question": "The minister's anger was aggravated by the news of the disaster",
          "options": [
            "abated",
            "magnified",
            "intensifies",
            "impeded"
          ],
          "main": "aggravated",
          "ans": "C"
        },
        {
          "id": 15,
          "question": "The lawyer gave evasive answers to all the questions",
          "options": [
            "unintelligent",
            "ineffective",
            "unreliable",
            "equivocal"
          ],
          "main": "evasive",
          "ans": "D"
        },
        {
          "id": 16,
          "question": "The island becomes more enchanting at night",
          "options": [
            "attractive",
            "delightful",
            "accomodating",
            "lively"
          ],
          "main": "enchanting",
          "ans": "A"
        },
        {
          "id": 17,
          "question": "The material in the book is presented within an eclectic framework",
          "options": [
            "simple",
            "a broad",
            "a restricted"
          ],
          "main": "eclectic",
          "ans": "B"
        },
        {
          "id": 18,
          "question": "Ohiokhen had a brain wave as how she could deal with the problem",
          "options": [
            "an imagination",
            "a desire",
            "a headache",
            "an idea"
          ],
          "main": "brain wave",
          "ans": "D"
        },
        {
          "id": 19,
          "question": "The lady who won the beauty contest had a good gait",
          "options": [
            "stature",
            "figure",
            "elegance",
            "carriage"
          ],
          "main": "gait",
          "ans": "D"
        },
        {
          "id": 20,
          "question": "The young man who distributed political pamphlets on campus was prompty repudiated",
          "options": [
            "disowned",
            "arrested",
            "warned",
            "killed"
          ],
          "main": "repudiated",
          "ans": "A"
        },
        {
          "id": 21,
          "question": "All the accident victims are bleeding profusely",
          "options": [
            "slowly",
            "excessively",
            "diffusely",
            "clearly"
          ],
          "main": "profusely",
          "ans": "B"
        },
        {
          "id": 22,
          "question": "The prosecutor was accused of obstructing justice",
          "options": [
            "hindering",
            "retarding",
            "impending",
            "interrupting"
          ],
          "main": "obstructing",
          "ans": "A"
        },
        {
          "id": 23,
          "question": "The man preaches egalitarianism without matching it up with action",
          "options": [
            "salvation",
            "dedication",
            "kindness",
            "equality"
          ],
          "main": "egalitarianism",
          "ans": "D"
        },
        {
          "id": 24,
          "question": "The Federal Government approved a new salary structure as an incentive for the Nigerian workers",
          "options": [
            "a reward",
            "an encouragement",
            "a package",
            "an advance"
          ],
          "main": "incentive",
          "ans": "B"
        },
        {
          "id": 25,
          "question": "Amina said she married a doting husband",
          "options": [
            "a loving",
            "a fun-loving",
            "an uncaring",
            "a nagging"
          ],
          "main": "a doting",
          "ans": "A"
        },
        {
          "id": 26,
          "question": "Before embarking on his current research, the professor carried out a feasibility study of the area",
          "options": [
            "thorough",
            "perfectibility",
            "complete",
            "practicability"
          ],
          "main": "feasibility",
          "ans": "D"
        },
        {
          "id": 27,
          "question": "The college officer insisted that I show him my credentials before I could be registered",
          "options": [
            "papers",
            "qualifications",
            "testimonials",
            "identities"
          ],
          "main": "credentials",
          "ans": "B"
        },
        {
          "id": 28,
          "question": "Even though there is no obvious riot on the campus, the atmosphere is restive",
          "options": [
            "quiet",
            "chaotic",
            "restless",
            "tense"
          ],
          "main": "restive",
          "ans": "C"
        },
        {
          "id": 29,
          "question": "Mr. Dzokoto plays the piano with great dexterity",
          "options": [
            "wisdom",
            "power",
            "force",
            "skill"
          ],
          "main": "dexterity",
          "ans": "D"
        },
        {
          "id": 30,
          "question": "They have tried to circumvent the restriction the importance of the commodities",
          "options": [
            "bypass",
            "confront",
            "oppose",
            "challenge"
          ],
          "main": "circumvent",
          "ans": "A"
        },
        {
          "id": 31,
          "question": "That punch by the young boxer proved to be fatal",
          "options": [
            "effective",
            "belated",
            "hard",
            "deadly"
          ],
          "main": "fatal",
          "ans": "D"
        },
        {
          "id": 32,
          "question": "The boy was told that he would need several more pints of blood to survive",
          "options": [
            "plenty",
            "much",
            "many",
            "some"
          ],
          "main": "several",
          "ans": "C"
        },
        {
          "id": 33,
          "question": "Though David's condition is serious, his life is not in immediate danger",
          "options": [
            "grave",
            "nasty",
            "dangerous",
            "hypertensive"
          ],
          "main": "serious",
          "ans": "A"
        },
        {
          "id": 34,
          "question": "The essay topic is nebulous",
          "options": [
            "clear",
            "incorrect",
            "vague",
            "distinct"
          ],
          "main": "nebulous",
          "ans": "C"
        },
        {
          "id": 35,
          "question": "I have always believed that my mother is a very impassioned woman",
          "options": [
            "impartial",
            "emotional",
            "impassive",
            "emotive"
          ],
          "main": "impassioned",
          "ans": "B"
        },
        {
          "id": 36,
          "question": "The party gathering was thrown into a state of euphoria",
          "options": [
            "pleasure",
            "confusion",
            "sadness",
            "excitement"
          ],
          "main": "euphoria",
          "ans": "D"
        },
        {
          "id": 37,
          "question": "Some actions of the Nigerian youth have alienated them from those who were sympathetic to their cause.",
          "options": [
            "endeared",
            "sine qua non",
            "estranged",
            "confronted"
          ],
          "main": "alienated",
          "ans": "C"
        },
        {
          "id": 38,
          "question": "Some actions of the Nigerian youth have alienated them from those who were sympathetic to their cause.",
          "options": [
            "eager",
            "opposed",
            "well-disposed",
            "ill-disposed"
          ],
          "main": "sympathetic",
          "ans": "C"
        },
        {
          "id": 39,
          "question": "The principal told the teacher to stop browbeating the children",
          "options": [
            "pampering",
            "caning",
            "bullying",
            "deceiving"
          ],
          "main": "browbeating",
          "ans": "C"
        },
        {
          "id": 40,
          "question": "The coalescence of the groups created additional problems.",
          "options": [
            "fighting",
            "proscription",
            "union",
            "disbandment"
          ],
          "main": "coalescence",
          "ans": "C"
        },
        {
          "id": 41,
          "question": "The player kept on gamely to the end",
          "options": [
            "skillfully",
            "stubbornly",
            "amateurishly",
            "courageously"
          ],
          "main": "gamely",
          "ans": "D"
        },
        {
          "id": 42,
          "question": "As the triumphant rebels were returning to their base, they met with a serious reverse",
          "options": [
            "an army",
            "a victory",
            "a defeat",
            "an enemy"
          ],
          "main": "reverse",
          "ans": "C"
        },
        {
          "id": 43,
          "question": "I cannot understand why Ali should serve in that moribund administration",
          "options": [
            "purposeless",
            "crumbling",
            "prodigal",
            "oppresive"
          ],
          "main": "moribund",
          "ans": "B"
        },
        {
          "id": 44,
          "question": "The village girl wore sumptuous cloth",
          "options": [
            "expensive",
            "loose-fitting",
            "faded-looking",
            "cheap"
          ],
          "main": "sumptuous",
          "ans": "A"
        },
        {
          "id": 45,
          "question": "Funmi is just being facetious about her marrying a soldier",
          "options": [
            "unfaithful",
            "unserious",
            "serious",
            "crazy"
          ],
          "main": "facetious",
          "ans": "B"
        },
        {
          "id": 46,
          "question": "The professor discussed a number of abstruse topics",
          "options": [
            "relevant",
            "esoteric",
            "useful",
            "irrelevant"
          ],
          "main": "abstruse",
          "ans": "B"
        },
        {
          "id": 47,
          "question": "Ugo has often been described as belligerent",
          "options": [
            "combative",
            "patient",
            "attractive",
            "innocent"
          ],
          "main": "belligerent",
          "ans": "A"
        },
        {
          "id": 48,
          "question": "The men were tardy in offering help",
          "options": [
            "slow",
            "quick",
            "brave",
            "generous"
          ],
          "main": "tardy",
          "ans": "A"
        },
        {
          "id": 49,
          "question": "While the hooligans exchanged blows, we looked on complacently",
          "options": [
            "questioningly",
            "contentedly",
            "sorrowfully",
            "dejectedly"
          ],
          "main": "complacently",
          "ans": "B"
        },
        {
          "id": 50,
          "question": "Tade became timorous when she was asked to give the valedictory speech.",
          "options": [
            "nervous",
            "aggressive",
            "excited",
            "happy"
          ],
          "main": "timorous",
          "ans": "A"
        },
        {
          "id": 51,
          "question": "Bose was angry because her friend called her a pilferer",
          "options": [
            "criminal",
            "liar",
            "thief",
            "hypocrite"
          ],
          "main": "pilferer",
          "ans": "C"
        },
        {
          "id": 52,
          "question": "Practicing medicine is not as lucrative as many people think",
          "options": [
            "know",
            "understand",
            "consider",
            "assume"
          ],
          "main": "think",
          "ans": "D"
        },
        {
          "id": 53,
          "question": "He is a stringer for a newspaper",
          "options": [
            "a financier",
            "an editor of",
            "a freelancer for",
            "a reporter for"
          ],
          "main": "stringer",
          "ans": "C"
        },
        {
          "id": 54,
          "question": "The manager made disparaging remarks about the retiring officer",
          "options": [
            "derogatory",
            "parochial",
            "cynical",
            "rude"
          ],
          "main": "disparaging",
          "ans": "A"
        },
        {
          "id": 55,
          "question": "I wish the commander were less adamant about his proposed reprisal attack on the enemy",
          "options": [
            "sentimental about",
            "unyielding about",
            "supportive about",
            "tolerant of"
          ],
          "main": "adamant about",
          "ans": "B"
        },
        {
          "id": 56,
          "question": "I wish the commander were less adamant about his proposed reprisal attack on the enemy",
          "options": [
            "rehearsal",
            "retaliatory",
            "retribute",
            "surprise"
          ],
          "main": "reprisal",
          "ans": "B"
        },
        {
          "id": 57,
          "question": "The man outran his wife when they heard the eerie sound",
          "options": [
            "scary",
            "hissing",
            "harsh",
            "loud"
          ],
          "main": "eerie",
          "ans": "A"
        },
        {
          "id": 58,
          "question": "Teachers of music believe in its therapeutic effect",
          "options": [
            "healing",
            "sound",
            "lyrical",
            "rythmic"
          ],
          "main": "therapeutic",
          "ans": "A"
        },
        {
          "id": 59,
          "question": "Adigun's joke are always puerile",
          "options": [
            "amusing",
            "childish",
            "empty",
            "entertaining"
          ],
          "main": "puerile",
          "ans": "B"
        },
        {
          "id": 60,
          "question": "I wonder what will be left of his essay when the extraneous material is deleted",
          "options": [
            "superflous",
            "erroneous",
            "relevant",
            "main"
          ],
          "main": "extraneous",
          "ans": "A"
        },
        {
          "id": 61,
          "question": "His success may be described as a pyrrhic victory",
          "options": [
            "costly",
            "a deserving victory",
            "an easy victory",
            "indecisive"
          ],
          "main": "pyrrhic",
          "ans": "A"
        },
        {
          "id": 62,
          "question": "The teacher's apparent nonchalant attitude was miscontrued by his students",
          "options": [
            "condoned",
            "misrepresented",
            "misquoted",
            "misinterpreted"
          ],
          "main": "miscontrued",
          "ans": "D"
        },
        {
          "id": 63,
          "question": "They are considered to be legal luminaries",
          "options": [
            "directors",
            "powers",
            "experts",
            "practitioners"
          ],
          "main": "luminaries",
          "ans": "C"
        },
        {
          "id": 64,
          "question": "The Executive Secretary has just assumed office",
          "options": [
            "resumed work",
            "started work",
            "returned",
            "been sworn in"
          ],
          "main": "assumed",
          "ans": "B"
        },
        {
          "id": 65,
          "question": "The leader has the unstinting support of his party",
          "options": [
            "unsparing",
            "laudable",
            "uninspiring",
            "cautious"
          ],
          "main": "unstinting",
          "ans": "A"
        },
        {
          "id": 66,
          "question": "The party supporters vilified the Chairman for the role he played in the crisis that rocked the party.",
          "options": [
            "elected",
            "challenged",
            "concerned",
            "impeached"
          ],
          "main": "vilified",
          "ans": "B"
        },
        {
          "id": 67,
          "question": "There was a glut of oil on the market",
          "options": [
            "a variety of",
            "an accumulation of",
            "an abundance of",
            "an increase in"
          ],
          "main": "glut",
          "ans": "C"
        },
        {
          "id": 68,
          "question": "The boys knew that a storm was imminent",
          "options": [
            "possible",
            "impending",
            "threatning",
            "encroaching"
          ],
          "main": "imminent",
          "ans": "B"
        },
        {
          "id": 69,
          "question": "The cynics feared that the nation's nascent democracy would fail",
          "options": [
            "pessimists",
            "delinquents",
            "critics",
            "illusionists"
          ],
          "main": "cynics",
          "ans": "A"
        },
        {
          "id": 70,
          "question": "The essence of governance is to seek the good and wellbeing of the majority of the people",
          "options": [
            "importance",
            "goal",
            "characteristic",
            "secret"
          ],
          "main": "essence",
          "ans": "A"
        },
        {
          "id": 71,
          "question": "From what she said, one may infer that she does not like the course",
          "options": [
            "suppose",
            "realize",
            "deduce",
            "agree"
          ],
          "main": "infer",
          "ans": "C"
        },
        {
          "id": 72,
          "question": "He shared his room with a person whose behaviour was quite nauseating",
          "options": [
            "disrespectful",
            "disgraceful",
            "discouraging",
            "disgusting"
          ],
          "main": "nauseating",
          "ans": "D"
        },
        {
          "id": 73,
          "question": "The carpenter built a commodious wardrobe",
          "options": [
            "gigantic",
            "small",
            "spacious",
            "wide"
          ],
          "main": "commodious",
          "ans": "C"
        },
        {
          "id": 74,
          "question": "The man's story sounded plausible to his audience",
          "options": [
            "fantastic",
            "credulous",
            "credible",
            "entertaining"
          ],
          "main": "plausible",
          "ans": "C"
        },
        {
          "id": 75,
          "question": "The prosecutor was fully able to substantiate the charge",
          "options": [
            "prove",
            "dismiss",
            "weaken",
            "expatiate on"
          ],
          "main": "substantiate",
          "ans": "A"
        },
        {
          "id": 76,
          "question": "In spite of constant financial support from his father, Udenyi treats his studies with considerable levity",
          "options": [
            "wastefulness",
            "lassitude",
            "seriousness",
            "enthusiasm"
          ],
          "main": "levity",
          "ans": "B"
        },
        {
          "id": 77,
          "question": "Ibro shows enough liberality with his meagre income",
          "options": [
            "prodigality",
            "insensitivity",
            "generosity",
            "frugality"
          ],
          "main": "liberality",
          "ans": "C"
        },
        {
          "id": 78,
          "question": "The festivals create in the people a feeling of pride in their cultural heritage",
          "options": [
            "possession",
            "history",
            "heirloom",
            "legacy"
          ],
          "main": "heritage",
          "ans": "D"
        },
        {
          "id": 79,
          "question": "The manager's knowledge of the strike is of the utmost importance",
          "options": [
            "genuine",
            "paramount",
            "basic",
            "standard"
          ],
          "main": "utmost",
          "ans": "B"
        },
        {
          "id": 80,
          "question": "The school's badge is the insignia of office for all the prefects in the school",
          "options": [
            "symbol",
            "power",
            "recognition",
            "seal"
          ],
          "main": "insignia",
          "ans": "A"
        },
        {
          "id": 81,
          "question": "The mottled skin of a person with HIV indicates an advanced stage of its development",
          "options": [
            "spotted",
            "brown",
            "pimply",
            "scaly"
          ],
          "main": "mottled",
          "ans": "A"
        },
        {
          "id": 82,
          "question": "The press described the efforts of the government in pejorative terms",
          "options": [
            "contemptible",
            "critical",
            "superlative",
            "palpable"
          ],
          "main": "pejorative",
          "ans": "A"
        },
        {
          "id": 83,
          "question": "Funnily enough the priest prayed for the robber who shot him",
          "options": [
            "Disappointingly",
            "Timidly",
            "Fearlessly",
            "Unexpectedly"
          ],
          "main": "Funnily enough",
          "ans": "D"
        },
        {
          "id": 84,
          "question": "His plans boomeranged on him",
          "options": [
            "backfired",
            "catapulted",
            "bounced",
            "fell"
          ],
          "main": "boomeranged",
          "ans": "A"
        },
        {
          "id": 85,
          "question": "Emeka's painting was so realistic that it could almost have been a photograph",
          "options": [
            "authentic",
            "lively",
            "concrete",
            "picturesque"
          ],
          "main": "realistic",
          "ans": "A"
        },
        {
          "id": 86,
          "question": "That fateful decision changed the company's outlook in many ways.",
          "options": [
            "disastrous",
            "unsuccessful",
            "wonderful",
            "uncontrollable"
          ],
          "main": "fateful",
          "ans": "A"
        },
        {
          "id": 87,
          "question": "Obi's dog is old but still lively",
          "options": [
            "barking",
            "frisky",
            "howling",
            "attractive"
          ],
          "main": "lively",
          "ans": "B"
        },
        {
          "id": 88,
          "question": "No wonder Sikemi later became a detective. She has been very observant.",
          "options": [
            "inquisitive",
            "inductive",
            "curious",
            "perceptive"
          ],
          "main": "observant",
          "ans": "D"
        },
        {
          "id": 89,
          "question": "The common practice among some media practitioners is to be sensational in their reporting",
          "options": [
            "rampant",
            "ordinary",
            "cogent",
            "prevalent"
          ],
          "main": "common",
          "ans": "D"
        },
        {
          "id": 90,
          "question": "The greatness of the creator of the universe is always inexpressible to many adherents of certain faiths.",
          "options": [
            "ineffable",
            "unbearable",
            "wonderful",
            "inevitable"
          ],
          "main": "inexpressible",
          "ans": "A"
        },
        {
          "id": 91,
          "question": "The accident victim received a superficial wound from the crash.",
          "options": [
            "a painless",
            "a serious",
            "an external",
            "inevitable"
          ],
          "main": "superficial",
          "ans": "C"
        },
        {
          "id": 92,
          "question": "Nigeria has been playing a vital role in the political and economic development of Africa.",
          "options": [
            "respectable",
            "creditable",
            "laudable",
            "crucial"
          ],
          "main": "vital",
          "ans": "D"
        },
        {
          "id": 93,
          "question": "Many people used to live in poverty",
          "options": [
            "the slums",
            "instability",
            "want",
            "crucial"
          ],
          "main": "poverty",
          "ans": "C"
        },
        {
          "id": 94,
          "question": "Courteously, Ade stood back to let his teacher go first through the door.",
          "options": [
            "Calmy",
            "Patiently",
            "Politely",
            "Carefully"
          ],
          "main": "Courteously",
          "ans": "C"
        },
        {
          "id": 95,
          "question": "His taciturnity amazed everyone in the court during the legal tussle.",
          "options": [
            "sensibility",
            "pervasiveness",
            "obliviousness",
            "reticence"
          ],
          "main": "taciturnity",
          "ans": "D"
        },
        {
          "id": 96,
          "question": "Accountability is certainly a desirable quality in a politician.",
          "options": [
            "Responsibility",
            "Respectability",
            "Diligence",
            "Courage"
          ],
          "main": "Accountability",
          "ans": "A"
        },
        {
          "id": 97,
          "question": "The move to expel the chairman was sanctioned my members of the party.",
          "options": [
            "unleashed",
            "opposed",
            "supported",
            "initiated"
          ],
          "main": "sanctioned",
          "ans": "C"
        },
        {
          "id": 98,
          "question": "The witness provided a monstrous account of the event.",
          "options": [
            "supportive",
            "tragic",
            "shocking",
            "verbatim"
          ],
          "main": "monstrous",
          "ans": "C"
        },
        {
          "id": 99,
          "question": "Adamu is rather meddlesome in dealing with his friends.",
          "options": [
            "impertinent",
            "intimidating",
            "quarrelsome",
            "uncaring"
          ],
          "main": "meddlesome",
          "ans": "A"
        },
        {
          "id": 100,
          "question": "The commander said that the battle would be sustained, total and relentless",
          "options": [
            "continuous",
            "brutal",
            "fierce",
            "innocuous"
          ],
          "main": "relentless",
          "ans": "A"
        },
        {
          "id": 101,
          "question": "The government has announced its preparedness for the scheme",
          "options": [
            "determination",
            "regret",
            "leisure",
            "readiness"
          ],
          "main": "preparedness",
          "ans": "D"
        }
      ]
    },
    {
      "topic": "Synonyms II",
      "questions": [
        {
          "id": 1,
          "question": "The chairman advised the participants to follow convention in stating their points.",
          "options": [
            "eloquence",
            "advice",
            "prudence",
            "tradition"
          ],
          "ans": "D",
          "main": "convention"
        },
        {
          "id": 2,
          "question": "His loss suddenly became redeemable.",
          "options": [
            "incurable",
            "exclusive",
            "recoverable",
            "repulsive"
          ],
          "ans": "C",
          "main": "redeemable"
        },
        {
          "id": 3,
          "question": "The plan gone awry.",
          "options": [
            "wide",
            "wrong",
            "recoverable",
            "repulsive"
          ],
          "ans": "B",
          "main": "awry"
        },
        {
          "id": 4,
          "question": "The judge emphasized his morbid desires in his judgement.",
          "options": [
            "inordinate",
            "uncritical",
            "ravenous",
            "unpleasant"
          ],
          "ans": "D",
          "main": "morbid"
        },
        {
          "id": 5,
          "question": "The recommended novel has a convoluted theme.",
          "options": [
            "a simple",
            "an attractive",
            "a disgusting",
            "a complicated"
          ],
          "ans": "D",
          "main": "a convoluted"
        },
        {
          "id": 6,
          "question": "The party men reveled all night when the election results were announced.",
          "options": [
            "celebrated",
            "mourned",
            "fought",
            "discussed"
          ],
          "ans": "A",
          "main": "reveled"
        },
        {
          "id": 7,
          "question": "We were at a loss to understand why Oli should retract his statement before the judge.",
          "options": [
            "assert",
            "repeat",
            "withdraw",
            "reiterate"
          ],
          "ans": "C",
          "main": "retract"
        },
        {
          "id": 8,
          "question": "The workers hope to appear before the arbitration panel to resolve the lingering dispute.",
          "options": [
            "trial",
            "legislative",
            "investigative",
            "reconciliatory"
          ],
          "ans": "D",
          "main": "arbitration"
        },
        {
          "id": 9,
          "question": "He was not able to withstand the attack from his immediate family.",
          "options": [
            "survive",
            "overcome",
            "match",
            "resist"
          ],
          "ans": "D",
          "main": "withstand"
        },
        {
          "id": 10,
          "question": "Your effort to bring peace between us is futile because you are biased.",
          "options": [
            "convinced",
            "clever",
            "prejudiced",
            "worried"
          ],
          "ans": "C",
          "main": "biased"
        },
        {
          "id": 11,
          "question": "His embroidery was an exacting task for the tailor.",
          "options": [
            "an unwarranted",
            "an exciting",
            "a demanding",
            "a disturbing"
          ],
          "ans": "C",
          "main": "exacting"
        },
        {
          "id": 12,
          "question": "The student's remonstrances were rebuffed by authority.",
          "options": [
            "protests",
            "suggestions",
            "complaints",
            "regrets"
          ],
          "ans": "A",
          "main": "remonstrances"
        },
        {
          "id": 13,
          "question": "I had to make my way through the throng of people in the church.",
          "options": [
            "group",
            "crowd",
            "gathering",
            "theme"
          ],
          "ans": "B",
          "main": "throng"
        },
        {
          "id": 14,
          "question": "The man's wife has her misgivings about him.",
          "options": [
            "fears for",
            "distrust of",
            "hatred for",
            "have for"
          ],
          "ans": "B",
          "main": "misgivings"
        },
        {
          "id": 15,
          "question": "Violent crime is only one of the maladies afflicting modern society.",
          "options": [
            "damages",
            "illness",
            "wounds",
            "crises"
          ],
          "ans": "D",
          "main": "maladies"
        },
        {
          "id": 16,
          "question": "Everyone was talking about the camaraderie in the club.",
          "options": [
            "companionship",
            "quarrelsome",
            "commissioning",
            "disunity"
          ],
          "ans": "A",
          "main": "camaraderie"
        },
        {
          "id": 17,
          "question": "We have every need to preserve some of our national monuments for posterity.",
          "options": [
            "prosperity",
            "future generations",
            "national pride",
            "collective gain"
          ],
          "ans": "B",
          "main": "posterity"
        },
        {
          "id": 18,
          "question": "He commands the confidence and respect of all his subordinate.",
          "options": [
            "requests",
            "enjoys",
            "enforces",
            "conjures"
          ],
          "ans": "B",
          "main": "commands"
        },
        {
          "id": 19,
          "question": "The president has mapped out so many laudable projects to embark upon",
          "options": [
            "laughable",
            "good",
            "praiseworthy",
            "valuable"
          ],
          "ans": "C",
          "main": "laudable"
        },
        {
          "id": 20,
          "question": "Adam's father is a stern man",
          "options": [
            "strict",
            "playful",
            "conservative",
            "wicked"
          ],
          "ans": "A",
          "main": "stern"
        },
        {
          "id": 21,
          "question": "Nobody knew the source of the altercation between the couple.",
          "options": [
            "alter ego",
            "quarrel",
            "deep love",
            "conservative"
          ],
          "ans": "B",
          "main": "altercation"
        },
        {
          "id": 22,
          "question": "His poetry is said to be inscrutable.",
          "options": [
            "ludicrous",
            "unlearnable",
            "inseparable",
            "mysterious"
          ],
          "ans": "D",
          "main": "inscrutable"
        },
        {
          "id": 23,
          "question": "Hers was a specious argument about the government of the day.",
          "options": [
            "misleading",
            "precious",
            "spacious",
            "true"
          ],
          "ans": "A",
          "main": "specious"
        },
        {
          "id": 24,
          "question": "The Lagos bus conductor wore his professional livery.",
          "options": [
            "badge",
            "shoe",
            "uniform",
            "cap"
          ],
          "ans": "C",
          "main": "livery"
        },
        {
          "id": 25,
          "question": "There must be something sinister about her late arrival.",
          "options": [
            "reasonable",
            "joyful",
            "hopeful",
            "ominous"
          ],
          "ans": "D",
          "main": "sinister"
        },
        {
          "id": 26,
          "question": "The unification of the country has brought about great technological advancement.",
          "options": [
            "restoration",
            "agreement",
            "cohesion",
            "ominious"
          ],
          "ans": "C",
          "main": "unification"
        },
        {
          "id": 27,
          "question": "Idris' forbearance endeared him to us.",
          "options": [
            "hard work",
            "patience",
            "wisdom",
            "good manners"
          ],
          "ans": "B",
          "main": "forbearance"
        },
        {
          "id": 28,
          "question": "They hated the police and, by implication, me.",
          "options": [
            "extension",
            "inference",
            "examination",
            "application"
          ],
          "ans": "B",
          "main": "implication"
        },
        {
          "id": 29,
          "question": "A political impasse does not offer the best opportunity for merrymaking.",
          "options": [
            "gridlock",
            "rally",
            "manisfesto",
            "party"
          ],
          "ans": "A",
          "main": "impasse"
        },
        {
          "id": 30,
          "question": "We were all enthusiastic as we awaited the result of the election.",
          "options": [
            "elated",
            "nervous",
            "bemused",
            "agitated"
          ],
          "ans": "A",
          "main": "enthusiastic"
        },
        {
          "id": 31,
          "question": "The uniform makes the guards look absurd.",
          "options": [
            "sensible",
            "ridiculous",
            "dirty",
            "smart"
          ],
          "ans": "B",
          "main": "absurd"
        },
        {
          "id": 32,
          "question": "The law is often tardy in reacting to changing attitudes.",
          "options": [
            "exclusive",
            "generous",
            "quick",
            "slow"
          ],
          "ans": "D",
          "main": "tardy"
        },
        {
          "id": 33,
          "question": "Isa and Ilu ate sumptuous meals on their brothers' wedding day.",
          "options": [
            "insipid",
            "cheap",
            "expensive",
            "foreign"
          ],
          "ans": "C",
          "main": "sumptuous"
        },
        {
          "id": 34,
          "question": "The panacea for a country's economic mess lies in systemic planning and hard work.",
          "options": [
            "hope",
            "trouble",
            "cure",
            "foresight"
          ],
          "ans": "C",
          "main": "panacea"
        },
        {
          "id": 35,
          "question": "Thousands of workers have been victims of retrenchment since the military came back to power.",
          "options": [
            "suffering",
            "increase in penury",
            "unemployment",
            "trench mentality"
          ],
          "ans": "C",
          "main": "retrenchment"
        },
        {
          "id": 36,
          "question": "The principal gave speech offhand at the sports meeting.",
          "options": [
            "unconcerned",
            "calmly",
            "beautifully",
            "unprepared"
          ],
          "ans": "D",
          "main": "offhand"
        },
        {
          "id": 37,
          "question": "Jankoli was dressed in an old assortment of clothes.",
          "options": [
            "sameness",
            "melange",
            "avalanche",
            "homogeneity"
          ],
          "ans": "B",
          "main": "assortment"
        },
        {
          "id": 38,
          "question": "The girl's father was astounded to see her appear from the shrine.",
          "options": [
            "embarassed",
            "astonished",
            "collected",
            "overwhelmed"
          ],
          "ans": "B",
          "main": "astounded"
        },
        {
          "id": 39,
          "question": "The director's remark was extremely apposite to the issue being discussed.",
          "options": [
            "emphatic",
            "adequate",
            "appropriate",
            "inconsequential"
          ],
          "ans": "C",
          "main": "apposite"
        },
        {
          "id": 40,
          "question": "Her reputation is without a blemish.",
          "options": [
            "fault",
            "blessing",
            "struggle",
            "problem"
          ],
          "ans": "A",
          "main": "blemish"
        },
        {
          "id": 41,
          "question": "Ugo is eligible for the post of secretary.",
          "options": [
            "qualified",
            "intelligent",
            "nominated",
            "invited"
          ],
          "ans": "A",
          "main": "eligible"
        },
        {
          "id": 42,
          "question": "This is an abridged version of No Longer at Ease.",
          "options": [
            "an illustrated",
            "a shortened",
            "an outdated",
            "an enlarged"
          ],
          "ans": "B",
          "main": "abridged"
        },
        {
          "id": 43,
          "question": "Since its inception in 1983, the newspaper has attracted thousands of readers.",
          "options": [
            "renaissance",
            "coming",
            "commencement",
            "publication"
          ],
          "ans": "C",
          "main": "inception"
        },
        {
          "id": 44,
          "question": "Mrs. Asio wanted her sister to stop being so detached.",
          "options": [
            "friendly",
            "careless",
            "indifferent",
            "passionate"
          ],
          "ans": "C",
          "main": "detached"
        },
        {
          "id": 45,
          "question": "Lantan dwelt in a ruined cottage on the hillside.",
          "options": [
            "sat",
            "worked",
            "slept",
            "lived"
          ],
          "ans": "D",
          "main": "dwelt"
        },
        {
          "id": 46,
          "question": "The mistake brought the show to an ignominious end.",
          "options": [
            "a good",
            "a palatable",
            "a disgrace",
            "a satisfactory"
          ],
          "ans": "C",
          "main": "ignominious"
        },
        {
          "id": 47,
          "question": "He compliments me on my way of doing things.",
          "options": [
            "complements",
            "intimates",
            "disgust",
            "praises"
          ],
          "ans": "D",
          "main": "compliments"
        },
        {
          "id": 48,
          "question": "The girl is angry with her friend who ensnared her into a relationship.",
          "options": [
            "tricked",
            "encouraged",
            "forced",
            "enslaved"
          ],
          "ans": "A",
          "main": "ensnared"
        },
        {
          "id": 49,
          "question": "The stockbroker said it was an astute move to sell shares then.",
          "options": [
            "a bad",
            "a shrewd",
            "an unprofitable",
            "an insincere"
          ],
          "ans": "B",
          "main": "astute"
        },
        {
          "id": 50,
          "question": "The principal described Oche as the most tactful person he ever worked with.",
          "options": [
            "passionate",
            "discreet",
            "hard-working",
            "innovative"
          ],
          "ans": "B",
          "main": "tactful"
        },
        {
          "id": 51,
          "question": "The old woman is suffering from dementia.",
          "options": [
            "lucidity",
            "senility",
            "insanity",
            "sagacity"
          ],
          "ans": "B",
          "main": "dementia"
        },
        {
          "id": 52,
          "question": "Some drugs have deleterous effect on a child's development.",
          "options": [
            "debilitating",
            "helpful",
            "harmful",
            "healing"
          ],
          "ans": "C",
          "main": "deleterous"
        },
        {
          "id": 53,
          "question": "Fila has always been described as belligerent.",
          "options": [
            "beautiful",
            "attractive",
            "combative",
            "innocent"
          ],
          "ans": "C",
          "main": "belligerent"
        },
        {
          "id": 54,
          "question": "The circular supersedes all previous correspondence on the matter.",
          "options": [
            "supports",
            "displaces",
            "eliminates",
            "circumvents"
          ],
          "ans": "B",
          "main": "supersedes"
        },
        {
          "id": 55,
          "question": "Their new house was roofed with corrugated sheets.",
          "options": [
            "folded",
            "iron",
            "aluminium",
            "corrupted"
          ],
          "ans": "A",
          "main": "corrugated"
        },
        {
          "id": 56,
          "question": "Her problem was exacerbated by the loss of her father.",
          "options": [
            "exaggrated",
            "solved",
            "aggravated",
            "infuriated"
          ],
          "ans": "C",
          "main": "exacerbated"
        },
        {
          "id": 57,
          "question": "Okibe was rusticated for his derogatory remark about the principal.",
          "options": [
            "complimentary",
            "unsavory",
            "unwarranted",
            "lackluster"
          ],
          "ans": "C",
          "main": "derogatory"
        },
        {
          "id": 58,
          "question": "Justice is difficult to enforce because people are unwilling to accept any loss of sovereignty.",
          "options": [
            "autonomy",
            "position",
            "leadership",
            "kingdom"
          ],
          "ans": "A",
          "main": "sovereignty"
        },
        {
          "id": 59,
          "question": "There are still many virtuous woman in our society today.",
          "options": [
            "clever",
            "upright",
            "devilish",
            "intelligent"
          ],
          "ans": "B",
          "main": "virtuous"
        },
        {
          "id": 60,
          "question": "The type of response is typical of a lazy teacher.",
          "options": [
            "symptomatic",
            "characteristic",
            "universal",
            "incontestable"
          ],
          "ans": "B",
          "main": "typical"
        },
        {
          "id": 61,
          "question": "He was too petrified to give the closing remarks at the conference.",
          "options": [
            "frightened",
            "delighted",
            "agitated",
            "happy"
          ],
          "ans": "A",
          "main": "pretified"
        },
        {
          "id": 62,
          "question": "During a particular time of the day, the road shimmers in the heat.",
          "options": [
            "darkens",
            "lightens",
            "shines",
            "beams"
          ],
          "ans": "C",
          "main": "shimmers"
        },
        {
          "id": 63,
          "question": "Every human being is vulnerable to communicable disease.",
          "options": [
            "liable",
            "lifted",
            "immuned",
            "closed"
          ],
          "ans": "A",
          "main": "vulnerable"
        },
        {
          "id": 64,
          "question": "Mariam looks rather furtive to Shehu.",
          "options": [
            "intoxicated",
            "unfriendly",
            "sad",
            "sly"
          ],
          "ans": "D",
          "main": "furtive"
        },
        {
          "id": 65,
          "question": "These policies have been espoused by the ruling party.",
          "options": [
            "condemned",
            "rejected",
            "supported",
            "outlined"
          ],
          "ans": "C",
          "main": "espoused"
        },
        {
          "id": 66,
          "question": "We must not foreclose reconciliation as the purpose of his trip.",
          "options": [
            "exclude",
            "consider",
            "underestimate",
            "forgo"
          ],
          "ans": "A",
          "main": "foreclose"
        },
        {
          "id": 67,
          "question": "Her findings exploded widely held beliefs about learning.",
          "options": [
            "challenged",
            "projected",
            "confirmed",
            "debunked"
          ],
          "ans": "D",
          "main": "exploded"
        },
        {
          "id": 68,
          "question": "The chairman admires incessant meetings.",
          "options": [
            "unusual",
            "planned",
            "constant",
            "irregular"
          ],
          "ans": "C",
          "main": "incessant"
        },
        {
          "id": 69,
          "question": "Today's weather is favorable for a game of tennis.",
          "options": [
            "impartial",
            "abnormal",
            "encouraging",
            "disapproving"
          ],
          "ans": "C",
          "main": "favorable"
        },
        {
          "id": 70,
          "question": "All the candidate looked aghast at the first reading of the questions.",
          "options": [
            "fulfilled",
            "dismayed",
            "satisfied",
            "relaxed"
          ],
          "ans": "B",
          "main": "aghast"
        },
        {
          "id": 71,
          "question": "Joke gave Muhammad a jaunty smile.",
          "options": [
            "a discouraging",
            "an inviting",
            "a frightful",
            "a cheerful"
          ],
          "ans": "D",
          "main": "jaunty"
        },
        {
          "id": 72,
          "question": "The first round of the tournament was doddle.",
          "options": [
            "easy",
            "balanced",
            "dodgy",
            "exasperating"
          ],
          "ans": "A",
          "main": "doddle"
        },
        {
          "id": 73,
          "question": "The lazy man cast a lustful glance at his neighbor's wife.",
          "options": [
            "hateful",
            "quick",
            "covetous",
            "envious"
          ],
          "ans": "C",
          "main": "lustful"
        },
        {
          "id": 74,
          "question": "They accused him of fomenting political unrest.",
          "options": [
            "inciting",
            "discouraging",
            "preventing",
            "envious"
          ],
          "ans": "A",
          "main": "fomenting"
        },
        {
          "id": 75,
          "question": "You can learn a great deal just from watching other players.",
          "options": [
            "invest",
            "accumulate",
            "allow",
            "discover"
          ],
          "ans": "D",
          "main": "learn"
        },
        {
          "id": 76,
          "question": "All the researchers were asked to garner information on the new viral infection.",
          "options": [
            "collect",
            "disseminate",
            "distort",
            "give"
          ],
          "ans": "A",
          "main": "garner"
        },
        {
          "id": 77,
          "question": "The dispute between the two countries has resulted in the severing of diplomatic relations.",
          "options": [
            "breaking",
            "securing",
            "swapping",
            "strengthening"
          ],
          "ans": "A",
          "main": "severing"
        },
        {
          "id": 78,
          "question": "He picked up the phone expecting to hear the chairman's gruff voice.",
          "options": [
            "gracious",
            "musical",
            "husky",
            "polite"
          ],
          "ans": "C",
          "main": "gruff"
        },
        {
          "id": 79,
          "question": "It has been a fraught day.",
          "options": [
            "difficult",
            "pleasant",
            "wonderful",
            "solemn"
          ],
          "ans": "A",
          "main": "fraught"
        },
        {
          "id": 80,
          "question": "She scowled furiously at his back as he walked away.",
          "options": [
            "whispered",
            "grimaced",
            "screeched",
            "screamed"
          ],
          "ans": "B",
          "main": "scowled"
        },
        {
          "id": 81,
          "question": "The use of this equipment should obviate the problem.",
          "options": [
            "prevent",
            "improve",
            "promote",
            "worsen"
          ],
          "ans": "A",
          "main": "obviate"
        },
        {
          "id": 82,
          "question": "Olisa hoodwinked the men into buying and selling.",
          "options": [
            "grouped",
            "lured",
            "deluded",
            "drove"
          ],
          "ans": "C",
          "main": "hoodwinked"
        },
        {
          "id": 83,
          "question": "There was an infectious gaiety in the children's character.",
          "options": [
            "exhilaration",
            "depression",
            "moodiness",
            "desperation"
          ],
          "ans": "A",
          "main": "gaiety"
        },
        {
          "id": 84,
          "question": "The room was filled with the pungent smell of tobacco.",
          "options": [
            "placid",
            "mild",
            "illegal",
            "acrid"
          ],
          "ans": "D",
          "main": "pungent"
        },
        {
          "id": 85,
          "question": "He lifted his hand in languid manner.",
          "options": [
            "a sheepish",
            "a sluggish",
            "a friendly",
            "an energetic"
          ],
          "ans": "B",
          "main": "languid"
        },
        {
          "id": 86,
          "question": "The lawmaker heckled the chairman of the panel during their last meeting.",
          "options": [
            "cheered up",
            "applauded",
            "shouted down",
            "restrained"
          ],
          "ans": "C",
          "main": "heckled"
        },
        {
          "id": 87,
          "question": "Tolu broke her leg because of her restive nature.",
          "options": [
            "lively",
            "relaxed",
            "patient",
            "unruly"
          ],
          "ans": "D",
          "main": "restive"
        },
        {
          "id": 88,
          "question": "The secretary's speech was interesting, though impromptu.",
          "options": [
            "unprepared",
            "improper",
            "controversial",
            "important"
          ],
          "ans": "A",
          "main": "impromptu"
        },
        {
          "id": 89,
          "question": "The manager of the team is often maligned by the supporters.",
          "options": [
            "slandered",
            "cherished",
            "praised",
            "hounded"
          ],
          "ans": "A",
          "main": "maligned"
        },
        {
          "id": 90,
          "question": "He has a cogent reason for quitting the relationship.",
          "options": [
            "a convincing",
            "an important",
            "a tentative",
            "an unacceptable"
          ],
          "ans": "A",
          "main": "cogent"
        },
        {
          "id": 91,
          "question": "Mrs. Adio wasn't yet attuned to her baby's need.",
          "options": [
            "familiar with",
            "ready with",
            "free from",
            "planning for"
          ],
          "ans": "A",
          "main": "attune"
        },
        {
          "id": 92,
          "question": "The witness averred that she had seen Bosun at the scene of the crime.",
          "options": [
            "argued",
            "confirmed",
            "denied",
            "affirmed"
          ],
          "ans": "D",
          "main": "averred"
        },
        {
          "id": 93,
          "question": "The high cost of the living these days calls for a lot of frugality.",
          "options": [
            "extravagance",
            "economy",
            "recklessness",
            "prudence"
          ],
          "ans": "D",
          "main": "frugality"
        },
        {
          "id": 94,
          "question": "Tunde's reaction underscores the points I was making.",
          "options": [
            "justifies",
            "summarizes",
            "emphasizes",
            "clarifies"
          ],
          "ans": "C",
          "main": "underscores"
        },
        {
          "id": 95,
          "question": "Everyone admired the manager's adriot handling of the crisis in the company.",
          "options": [
            "emphasized",
            "skillful",
            "tactless",
            "clumsy"
          ],
          "ans": "B",
          "main": "adroit"
        },
        {
          "id": 96,
          "question": "The principal took exception to the ignoble role the teacher played in the matter.",
          "options": [
            "embarrassing",
            "honourable",
            "extraordinary",
            "dishonorable"
          ],
          "ans": "D",
          "main": "ignoble"
        },
        {
          "id": 97,
          "question": "The mow to expel the chairman was santioned by members of the party.",
          "options": [
            "unleashed",
            "oppsosed",
            "supported",
            "unitiated"
          ],
          "ans": "C",
          "main": "sanctioned"
        },
        {
          "id": 98,
          "question": "Because Jamiu is so easily offended he was not considered for the post of head boy.",
          "options": [
            "irritable",
            "stubborn",
            "troublesome",
            "docile"
          ],
          "ans": "A",
          "main": "offended"
        },
        {
          "id": 99,
          "question": "The witness provided a monstrous account of the event.",
          "options": [
            "supportive",
            "tragic",
            "shocking",
            "verbatim"
          ],
          "ans": "C",
          "main": "monstrous"
        },
        {
          "id": 100,
          "question": "The doctor tried to soothe the patient before the operation.",
          "options": [
            "examine",
            "treat",
            "calm",
            "induce"
          ],
          "ans": "C",
          "main": "soothe"
        },
        {
          "id": 101,
          "question": "Our teacher described Agbo's story as a phantom.",
          "options": [
            "scary",
            "realistic",
            "fanciful",
            "interesting"
          ],
          "ans": "C",
          "main": "phantom"
        },
        {
          "id": 102,
          "question": "I find the way she approaches her customers quite repugnant.",
          "options": [
            "unpleasant",
            "attractive",
            "ungodly",
            "encouraging"
          ],
          "ans": "A",
          "main": "repugnant"
        },
        {
          "id": 103,
          "question": "Participation in the programme is optional.",
          "options": [
            "unnecessary",
            "recommended",
            "hard to justify",
            "a matter of choice"
          ],
          "ans": "D",
          "main": "optional"
        },
        {
          "id": 104,
          "question": "The popularity of the military dictator waned after the war.",
          "options": [
            "increased",
            "changed",
            "declined",
            "skyrocketed"
          ],
          "ans": "C",
          "main": "waned"
        },
        {
          "id": 105,
          "question": "The suspect moved stealthily into the court room.",
          "options": [
            "loudly",
            "slowly",
            "fast",
            "quietly"
          ],
          "ans": "D",
          "main": "stealthily"
        },
        {
          "id": 106,
          "question": "Aisha chattered excitedly like a little child.",
          "options": [
            "played",
            "talked",
            "looked",
            "ran"
          ],
          "ans": "B",
          "main": "chattered"
        },
        {
          "id": 107,
          "question": "Usman is one of the President most FEROCIOUS critics.",
          "options": [
            "Feeble",
            "Lovely",
            "Unpleasant",
            "Objective"
          ],
          "ans": "C",
          "main": "FEROCIOUS"
        },
        {
          "id": 108,
          "question": "The scandal ended his METEORIC career.",
          "options": [
            "Rising",
            "Weak",
            "Dangerous",
            "Beautiful"
          ],
          "ans": "A",
          "main": "METEORIC"
        },
        {
          "id": 109,
          "question": "The boy got himself drunk into OBLIVION yesterday.",
          "options": [
            "Insanity",
            "Unconsciousness",
            "Stupidity",
            "Garrulity"
          ],
          "ans": "B",
          "main": "OBLIVION"
        },
        {
          "id": 110,
          "question": "The student was angry because her teacher called her a pilferer.",
          "options": [
            "Hypocrite",
            "Liar",
            "Criminal",
            "Thief"
          ],
          "ans": "D",
          "main": "pilferer"
        },
        {
          "id": 111,
          "question": "The whole community has described John as belligerent.",
          "options": [
            "Patient",
            "Combative",
            "Innocent",
            "Attractive"
          ],
          "ans": "B",
          "main": "belligerent"
        },
        {
          "id": 112,
          "question": "The head boy became timorous when he was asked to give the valedictory speech.",
          "options": [
            "Happy",
            "Nervous",
            "Aggressive",
            "Excited"
          ],
          "ans": "B",
          "main": "timorous"
        },
        {
          "id": 113,
          "question": "He ably maneuver the boat off to the dock.",
          "options": [
            "poorly",
            "inexpertly",
            "deftly",
            "ineptly"
          ],
          "ans": "C",
          "main": "ably"
        },
        {
          "id": 114,
          "question": "They left place at the wee hour of the day.",
          "options": [
            "safe",
            "dangerous",
            "late",
            "early"
          ],
          "ans": "D",
          "main": "wee"
        },
        {
          "id": 115,
          "question": "The new president must deal with the country's fiscal crisis.",
          "options": [
            "financial",
            "social",
            "political",
            "religious"
          ],
          "ans": "A",
          "main": "fiscal"
        },
        {
          "id": 116,
          "question": "His behavior was considered abrasive.",
          "options": [
            "delightful",
            "exciting",
            "good",
            "unpleasant"
          ],
          "ans": "D",
          "main": "abrasive"
        },
        {
          "id": 117,
          "question": "Models are often abreast of fashion trends.",
          "options": [
            "insensitive to",
            "unaware of",
            "current with",
            "blind to"
          ],
          "ans": "C",
          "main": "abreast"
        }
      ]
    }
  ]