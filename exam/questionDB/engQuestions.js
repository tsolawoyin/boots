
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
          "main": "languish",
          'remark': "Languish is a verb that refers to a state of suffering, decline or becoming feeble. It can be used to describe various situations where something or someone experiences a lack of vitality, energy, or progress." ,
        },
        {
          "id": 2,
          "question": "The engineers have been urged to make a prototype of the long-awaited Nigeria car.",
          "options": [
            "specimen",
            "original",
            "copy", // <= the answer
            "drawing"
          ],
          "ans": "C",
          "main": "prototype",
          "remark": "prototype refers to the original or earlier version."
        },
        {
          "id": 3,
          "question": "He gave a painstaking account of his encounter with the ghost of his father.",
          "options": [
            "sordid", // a
            "fearful", // b
            "half-hearted", // c <= the answer
            "tenderhearted" // d
          ],
          "ans": "C",
          "main": "painstaking",
          "remark": "<strong>Painstaking</strong> is an adjective that describes a task or process that requires a lot of care, effort, and attention to detail. When something is done painstakingly, it means it is carried out with meticulous care and thoroughness, often involving a great deal of time and effort to ensure precision and accuracy."
        },
        {
          "id": 4,
          "question": "Since mortality is the lot of man argued the preacher, we must all accept death with equanimity.",
          "options": [
            "concern",
            "uncertainty",
            "serenity",
            "anxiety" // <= a state of uneasiness or apprehension...
            // what's the essence of rushing. just take your time and enjoy the ride...
          ],
          "ans": "D",
          "main": "equanimity",
          // equanimity => anxiety
          "remark": "<strong>equanimity</strong> is a noun that refers to a state of mental or emotional stability, calmness, and composure, especially in difficult situations. When someone possesses equanimity, they are able to maintain a balanced and even-tempered mindset, regardless of external circumstances or challenges"
        },
        {
          "id": 5,
          "question": "We admire the minister's passionate and dynamic characteristics.",
          "options": [
            "cruel and passive",
            "kind and forceful",
            "passive and charmless",
            "charmless and cruel"
            // i don't think the answer is A strictly speaking. but anyhow sha...
            // alright, maybe A is a reasonable answer then. It makes sense...
          ],
          "ans": "A",
          "main": "passionate and dynamic",
          // under investigation...
          "remark": `The phrase "passionate and dynamic" is used to describe someone or something that is characterized by intense enthusiasm, strong emotions, and an energetic, active nature.`
        },
        {
          "id": 6,
          "question": "You can use lethal means if necessary to stop dangerous characters from molesting innocent citizens.",
          "options": [
            "fatal",
            "cruel",
            "harmless", // <= the obvious answer is harmless...
            "soft"
          ],
          "ans": "C",
          "main": "lethal",
          "remark": `The term "lethal" is an adjective used to describe something that has the potential to cause death or be fatal. It is often associated with substances, weapons, conditions, or actions that can result in serious harm or mortality.`
        },
        {
          "id": 7,
          "question": "His intentions was not actually to punish the villagers, and in any case he is now making moves to pacify them.",
          "options": [
            "placate", // placate is similar to pacify
            "ridicule", // ridicule is not that related to pacify
            "appease",
            "annoy" // <= annoy is the best answer here...
          ],
          "ans": "D",
          "main": "pacify",
          "remark": `"Pacify" is a verb that means to calm, soothe, or bring peace to a situation or to individuals involved in a conflict. When someone pacifies, they are attempting to alleviate tension, reduce aggression, or restore tranquility. This term is often used in the context of resolving disputes, calming unrest, or calming someone who is upset or agitated.`
        },
        {
          "id": 8,
          "question": "If you are really keen on immediate results, you just have to adopt this pragmatic approach.",
          "options": [
            "practical",
            "unrealistic", // <= it's clear that unrealistic is the best answer here
            "opportunistic",
            "sensible"
          ],
          "ans": "B",
          "main": "pragmatic",
          "remark": `"Pragmatic" is an adjective that describes a practical, realistic, and sensible approach to solving problems or addressing issues. `
        },
        {
          "id": 9,
          "question": "My friend was reduced to beggary by various ill advised business deals.",
          "options": [
            "affluence", // <= affluence is indeed the opposite
            "penury",
            "influence",
            "poverty"
          ],
          "ans": "A",
          "main": "beggary",
          "remark": `"Beggary" refers to the state of being a beggar or engaging in the practice of begging, which involves asking for alms or charity, typically in the form of money or food. It can also be used more broadly to describe extreme poverty or destitution.`
        },
        {
          "id": 10,
          "question": "Measures were taken to authenticate the number of the booklets received.",
          "options": [
            "reaffirm",
            "discredit", // <= just the direct opposite... makes sense
            "discountenance",
            "count"
          ],
          "ans": "B",
          "main": "authenticate",
          "remark": `"To authenticate" means to confirm or verify the authenticity or legitimacy of something. `
        },
        {
          "id": 11,
          "question": "He urged other progressives in the country to join forces with his association.",
          "options": [
            "radicals",
            "conservatives",
            "pessimists",
            "activists"
          ], // in fact, as used here, other progressives, something more like politics
          "ans": "B",
          "main": "progressives", // the opposite of progressive is conservatives
          "remark": `the term "progressives" can be used more broadly to describe individuals or ideas that favor progress, innovation, and positive change.`
          // making sense.
          // e get as be sha... instead of rushing through it, I can actually study the stuff. I will stop at 20, and continue with the algorithm... 
          // the algorithm is actually having some issues that I need to fix normally sef...
        },
        {
          "id": 12,
          "question": "Adama's father simply condoned her bad habits instead of punishing her appropriately.",
          "options": [
            "opposed",
            "blamed",
            "accepted",
            "forbade" // I think forbade should be the answer. forbade is the answer
            // you know, I don't have to work with many people to get things done in this era. honestly
          ],
          "ans": "D", // this is not the answer. lol
          "main": "condoned",
          "remark": `To "condone" means to overlook, forgive, or accept behavior that is considered morally wrong or offensive without expressing disapproval or taking action to prevent or punish it. When someone condones an action, they essentially tolerate or allow it, even though they may not agree with it or find it acceptable`
        },
        {
          "id": 13,
          "question": "The undesirable elements who perpetuate these vices are never detected.",
          "options": [
            "aggravate",
            "overlook",
            "discontinue", // so discontinue is the best answer in this context...
            "encourage"
          ],
          "ans": "C",
          "main": "perpetuate",
          "remark": `"To perpetuate" means to prolong or cause something to continue indefinitely, often with the implication that it is something negative, undesirable, or problematic. When someone or something perpetuates a situation, it means they are contributing to its persistence or continuation over time`
        },
        {
          "id": 14,
          "question": "Some travellers unwittingly render themselves open prey to questionable character.",
          "options": [
            "genuinely",
            "wholesomely",
            "knowingly", // this should be the direct opposite jare...
            "inadvertently" // inadvertently ko...
          ],
          "ans": "C",
          "main": "unwittingly",
          "remark": `'Unwittingly' is an adverb that means without being aware, unintentionally, or unknowingly. If someone does something unwittingly, it implies that they did it without realizing or understanding what they were doing at the time. It often suggests that the person acted without conscious knowledge or awareness of the consequences or implications of their actions.`
        },
        {
          "id": 15,
          "question": "His father is a shrewd businessman.",
          "options": [
            "gullible", // easy to know this is the direct antonym...
            "orderly",
            "reliable",
            "resourceful"
          ],
          "ans": "A",
          "main": "shrewd",
          'remark': `'Shrewd' is an adjective that describes someone who is astute, clever, and sharp in practical matters, often with an ability to make sound and judicious decisions. A shrewd person is perceptive, insightful, and adept at understanding situations, often with a keen sense of how to gain an advantage.`,
        },
        {
          "id": 16,
          "question": "Many people have raised the issue about the need for an equitable distribution of our wealth.",
          "options": [
            "a fair",
            "an even",
            "an unjust", // <= so merely reasoning about it, it seems clear that unjust is the answer...
            "an undue"
          ],
          "ans": "C",
          "main": "equitable",
          "remark": `'Equitable' is an adjective that describes something that is fair, just, and characterized by a sense of impartiality and equality. When a situation, distribution, or treatment is considered equitable, it means that it is reasonable, unbiased, and ensures that everyone is treated fairly without favoritism or discrimination.`
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
          "main": "exorcise",
          "remark": `'Exorcism' refers to the religious or spiritual practice of evicting or driving out supposed evil spirits, demons, or other supernatural entities from a person, place, or object.`
        },
        {
          "id": 18,
          "question": "He mumbled a few words at the trial and then cried.",
          "options": [
            "shouted", // makes sense... everything is dope and nice
            "murmured",
            "charm",
            "invite"
          ],
          "ans": "A",
          "main": "mumbled",
          "remark": `'Mumbled' is a verb that refers to the act of speaking in a low, unclear, or indistinct manner, often making it difficult for others to understand the words being spoken.`
          // two things is likely to occur with the issue of MF and F. 1. MF will come up with her once in a while attitudes and F won't be able to tolerate it, or vice versa. Just one event and everything will go bust... // one is enough...
        },
        {
          "id": 19,
          "question": "There are many areas of convergence between male and female behaviour.",
          "options": [
            "concomitance", // => concomitance emphasizes the idea of things happening in conjunction or concurrently.
            "concordance",
            "incompatibility",
            "incomparatibility"
          ],
          "ans": "C",
          "main": "convergence",
          "remark": `"Convergence" generally refers to the process of coming together or meeting at a common point. `
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
          "main": "abate",
          "remark": `"Abate" is a verb that means to reduce in intensity, degree, or amount; to diminish or lessen. When something abates, it becomes less severe, intense, or active. It can be used in various contexts, including weather, legal matters, or emotions.`
        },
        {
          "id": 21,
          "question": "The chairman'a verdict redressed the injustice meted out by the secretary.",
          "options": [
            "corrected",
            "restored",
            "aggravated",// <= aggravated is the only opposite here...
            "addressed"
          ],
          "ans": "C",
          "main": "redressed",
          "remark": `<p>The term "redress" can have a few different meanings depending on the context. Here are the primary meanings:</p><ol><li><strong>Compensation or Remedy:</strong> Redress can refer to the act of correcting or remedying a situation that is considered unfair or unjust. It often involves providing compensation or some form of remedy to address a grievance or wrong that has been done. For example, seeking redress in a legal context may involve obtaining compensation for damages or addressing an injustice through legal means.</li><li><strong>Correction or Adjustment:</strong> Redress can also mean the correction or adjustment of something that is wrong or unfair. This can apply to various situations, not just legal matters. For instance, a company might redress a customer complaint by providing a refund or a replacement for a faulty product.</li><li><strong>Relief or Alleviation:</strong> In a broader sense, redress can mean relief or alleviation from a burden, difficulty, or suffering. For example, a policy change might be implemented to redress economic inequalities or social injustices.</li></ol>`
        },
        {
          "id": 22,
          "question": "Uche could not travel last December because of the severity of the harmattan.",
          "options": [
            "cold",
            "mildness", // the opposite of severe is mild...
            "warmth",
            "moderation"
          ],
          "ans": "B",
          "main": "severity",
          "remark": `The term "severity" refers to the degree or extent of something being severe, harsh, intense, or serious. It is commonly used to describe the level of seriousness or harshness of a situation, condition, event, or action.`
        },
        {
          "id": 23,
          "question": "Mrs. Kofi is very provocative in her style of dressing.",
          "options": [
            "modest",
            "happy",
            "angry",
            "moderation" // this life is not balance... lolzzz. honestly, everything is just funny one kind
          ],
          "ans": "A",
          "main": "provocative",
          "remark": `The term "provocative" is an adjective that describes something that stimulates, incites, or arouses strong reactions, emotions, thoughts, or interest, often intentionally. A provocative statement, action, or piece of art is designed to provoke a response, whether it be emotional, intellectual, or social. `
          // mildness as it defined is the best answer. but moderation seems reasonable too. but modest is more general so I go for modest...
        },
        {
          "id": 24,
          "question": "Akoso thought that her father was very callous.",
          "options": [
            "indifferent",
            "compassionate", // the three other options buttress callous, except compassionate...
            "wicked",
            "careless"
          ],
          "ans": "B",
          "main": "callous",
          "remark": `<p>The term "callous" is an adjective that describes a person or their behavior as emotionally insensitive, unfeeling, or indifferent to the suffering or feelings of others. A callous individual may display a lack of empathy or sympathy, showing little concern for the impact of their actions on others. Here are some key characteristics associated with the term:</p>
          <ol><li><strong>Lack of Empathy:</strong> Callousness often involves a lack of empathy, where a person is indifferent to the emotions or hardships of others. They may not easily understand or share in the feelings of those around them.</li><li><strong>Insensitive:</strong> Callous individuals may be insensitive to the needs, feelings, or pain of others. They may exhibit a disregard for the emotional well-being of others and may seem unconcerned about causing distress.</li><li><strong>Unfeeling or Hard-hearted:</strong> Someone described as callous may appear unfeeling or hard-hearted, showing little emotional responsiveness to situations that typically elicit compassion or concern.</li><li><strong>Indifferent to Others' Suffering:</strong> Callous behavior often involves a lack of concern for the suffering or difficulties experienced by others. This indifference may manifest in actions that disregard the feelings or needs of those who are vulnerable or in distress.</li></ol>`
        },
        {
          "id": 25,
          "question": "'The Lions of Cameroun' is really an indomitable team.",
          "options": [
            "a powerful",
            "a prominent",
            "a weak", // => having this meaning down, you can easily see that weak is the direct opposite
            "a cowardly"
          ],
          "ans": "C",
          "main": "indomitable",
          "remark": `<p>The term "indomitable" is an adjective used to describe a person, spirit, or quality that cannot be subdued, overcome, or conquered. It conveys a sense of invincibility, resilience, and unbeatable strength. When applied to a person or their spirit, it suggests an unwavering determination, courage, and tenacity in the face of challenges or adversity.</p><p>For example, if someone is described as having an indomitable spirit, it means that they possess a relentless and unyielding attitude that allows them to persevere and overcome obstacles, no matter how difficult or daunting. Similarly, an indomitable will or resolve implies a steadfast and unbreakable determination to achieve one's goals despite challenges or setbacks.</p>`
          // i am indomitable...
        },
        {
          "id": 26,
          "question": "To almost everyone in the little village, Ada's behaviour was most odious.",
          "options": [
            "repulsive",
            "difficult",
            "attractive", // 
            "charming"
          ],
          "ans": "C", // C is more appropriate in this context...
          "main": "odious",
          "remark": `The term <strong>odious</strong> is an adjective used to describe something that is extremely unpleasant, repulsive, or offensive. When applied to a person, action, or thing, it suggests strong disapproval or disgust. Odiousness implies qualities that are highly objectionable or morally repugnant, making the subject deserving of intense criticism or aversion.`
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
          "ans": "B",
          "main": "wrath",
          "remark": `<strong>Wrath</strong> refers to intense and extreme anger, often accompanied by a desire for vengeance or punishment. It is a strong and powerful emotion characterized by feelings of intense displeasure and the desire to retaliate against someone or something perceived as having wronged or offended.`
        },
        {
          "id": 28,
          "question": "It was an inopportune moment for you to make that suggestion.",
          "options": [
            "an ideal", // ideal mean perfect, shey you get... like perfect timing, something like that...
            "a wrong",
            "an exact",
            "a sad"
          ],
          "ans": "A",
          "main": "inopportune",
          "remark": `The term <strong>inopportune</strong> is an adjective that describes something as poorly timed, inconvenient, or happening at an inappropriate moment. It is used to convey that an event, action, or circumstance occurs at a time that is not favorable or suitable, often causing difficulties or inconvenience.`
          // normally I can take the main word and repackage it normally. anyhow joh...
        },
        {
          "id": 29,
          "question": "He devoted too much time to the peripheral aspects.",
          "options": [
            "unimportant",
            "superficial",
            "minor",
            "main" // main is the direct opposite here... antonym means direct opposite of something...
          ],
          "ans": "D",
          "main": "peripheral",
          "remark": `In a more figurative sense, "peripheral" can describe something that is secondary, less important, or tangential to the main focus or central aspects of a situation. For instance, in a discussion, peripheral details may be less crucial or relevant to the main topic.`
        },
        {
          "id": 30,
          "question": "The climate of Nigeria is an enervating one.",
          "options": [
            "a weakening",
            "an energy sapping",
            "an invigorating", // <= clearly invigorating is the answer...
            "a sluggish"
          ],
          "ans": "C",
          "main": "enervating",
          "remark": `The term "enervating" is an adjective used to describe something that causes a feeling of physical or mental exhaustion, fatigue, or weakness. When an experience, situation, or activity is described as enervating, it means that it drains energy, vitality, or strength, leaving one feeling depleted or weakened.`
        },
        {
          "id": 31,
          "question": "Once he has decided that something needs doing, my brother is very unswerving of purpose.",
          "options": [
            "erratic", // <= erratic means anyhow movement... lolzzz...
            "tenacious",
            "stubborn",
            "simple"
          ],
          "ans": "A",
          "main": "unswerving",
          "remark": `The term "unswerving" is an adjective used to describe something that is constant, unwavering, or steadfast in its course or purpose. It implies a consistent and resolute commitment to a particular direction, belief, or goal without deviation or veering off course.`
          // remark => <= => <= => // makes sense...
        },
        {
          "id": 32,
          "question": "Those were the days of the fallacy that some languages are primitive while others are not",
          "options": [
            "argument",
            "excuse",
            "misconception",
            "truth" // fallacy is false truth
          ],
          "ans": "D",
          "main": "fallacy",
          "remark": `A fallacy is a mistaken belief, faulty argument, or misleading reasoning that is often used to deceive or persuade others. Fallacies may appear to be logical, but they are flawed or misleading in some way.`
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
          "main": "immune",
          "remark": `In a more general sense, "immune" can mean being protected or exempt from something. For example, if someone is said to be immune to criticism, it means they are unaffected or not bothered by it. In this context, it denotes a state of being resistant or impervious.`,
          // being talked about indicate some sign of importance... and I love my tagname, the laptop boy...
          // always seen with a laptop. because laptop is my strength, my joy, my heart, my energy, no laptop is arguably no life...
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
          "main": "renaissance",
          "remark": `In a more general sense, "renaissance" can refer to any revival or rebirth of interest, activity, or growth in a particular field or area`
          // decline is the best answer here anyways...
        },
        {
          "id": 35,
          "question": "If we must live together as one people, we must learn to tolerate disparate dispositions.",
          "options": [
            "converging",  // disparate means diverging, thus converging is the best answer here...
            "accomodating",
            "conflicting",
            "opposing"
          ],
          "ans": "A",
          "main": "disparate",
          "remark": `"disparate" is an adjective that describes things that are fundamentally different, unequal, or dissimilar in nature. When items, ideas, or entities are referred to as disparate, it means they lack a commonality or similarity and are often characterized by distinct or divergent qualities.`
        },
        {
          "id": 36,
          "question": "The presidential aspirant warned of the political catastrophe that would follow if the election were rigged.",
          "options": [
            "problem",
            "turmoil",
            "success",
            "conflagration"
            // A "conflagration" refers to an extensive and destructive fire that often involves a large area or multiple structures. The term is commonly used to describe a massive and uncontrolled blaze that spreads rapidly, causing widespread damage, destruction, and often posing a serious threat to life and property.
          ],
          "ans": "C",
          "main": "catastrophe",
          "remark": `A "catastrophe" refers to a sudden and widespread disaster or an event causing significant and often widespread damage, upheaval, or suffering. It is a term used to describe a calamitous and disastrous occurrence that has severe and far-reaching consequences.`
        },
        {
          "id": 37,
          "question": "The officer asked for a more temperate assessment of the matter.",
          "options": [
            "extreme", // extreme fits in perfectly here... honestly...
            "moderate",
            "radical",
            "human"
          ],
          "ans": "A",
          "main": "temperate",
          "remark": `In a more general sense, "temperate" can describe a person's behavior, attitude, or demeanor. When used in this context, it means someone who shows moderation, self-control, and a balanced approach. A temperate individual is not excessively emotional, impulsive, or extreme in their actions; they exhibit restraint and moderation.`
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
          "main": "invaluable", // this is one of the words that is tricky...
          "remark": `The term "invaluable" is an adjective used to describe something that is of such great worth or importance that it cannot be measured or assessed. In other words, if something is invaluable, it is extremely valuable, and its worth is beyond calculation or estimation.`
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
          "main": "bellicose", // // .... ... . . . . .. . ... . .... .... . . . . ... .. . ..
          "remark": `The term "bellicose" is an adjective used to describe a person, attitude, or demeanor that is characterized by a willingness to fight, engage in aggressive behavior, or demonstrate a hostile and warlike nature. A bellicose individual or stance is often associated with a readiness for conflict, confrontation, or aggression.`
        },
        {
          "id": 40,
          "question": "There is much indifference in his behavior.",
          "options": [
            "nonchalance",
            "willingness",
            "inconsistency",
            "interest"
          ],
          "ans": "D",
          "main": "indifference",
          "remark": `"Indifference" is a noun that refers to a lack of interest, concern, or sympathy toward something or someone. It describes a state of apathy or disinterest, where an individual or group shows little or no emotional or intellectual involvement in a particular matter. Indifference can manifest as a lack of caring, attention, or responsiveness.`
        },
        {
          "id": 41,
          "question": "My brother married a loquacious woman",
          "options": [
            "quiet", // quiet is the best answer here... someone who doesn't talk too much
            "noisy",
            "talkative",
            "beautiful"
          ],
          "ans": "A",
          "main": "loquacious",
          "remark": `The term "loquacious" is an adjective used to describe a person who is very talkative or chatty. A loquacious individual tends to talk at length and may be inclined to engage in conversations with others frequently.`
        },
        {
          "id": 42,
          "question": "Most warring countries end up in a state of satiation.",
          "options": [
            "hunger", // <= hunger is the answer here
            "thirst",
            "danger",
            "famine"
          ],
          "ans": "A",
          "main": "satiation",
          'remark': `"Satiation" refers to the state of being fully satisfied or completely filled, often in the context of appetite, desire, or need. It signifies a point at which a person or thing has had enough or has reached a state of complete fulfillment.`
        },
        {
          "id": 43,
          "question": "Abdul is fond of his teacher though he sometimes makes derogatory remarks about him.",
          "options": [
            "unpleasant",
            "complimentary", // <= this is the answer obviously... no cap
            "expressive",
            "inconsiderate"
          ],
          "ans": "B",
          "main": "derogatory",
          "remark": `"Derogatory" is an adjective used to describe statements, remarks, or expressions that are intended to belittle, disparage, or show a lack of respect for someone or something. Derogatory language or actions often express a low opinion, disrespect, or disdain, and they may be offensive or insulting.`
        },
        {
          "id": 44,
          "question": "The Minister has finally been dropped from the present cabinet because of his ignoble act.",
          "options": [
            "criminal",
            "ignorant",
            "honorable", // without much stress, this is the answer
            "selfish"
          ],
          "ans": "C",
          "main": "ignoble",
          "remark": `"Ignoble" is an adjective that describes something lacking in moral principles, character, or dignity. It suggests behavior, actions, or qualities that are dishonorable, base, or unworthy of respect. `
        },
        {
            // a seems to make sense
          "id": 45,
          "question": "His cruelty to his mother defies logical explanation.",
          "options": [
            "demands",
            "offers", // <= offers is just a partial answer
            "projects",
            "precludes"
          ],
          "ans": "B",
          "main": "defies",
          "remark": `The term "defies" is a verb that means to resist or refuse to obey or accept something. When someone or something defies a rule, expectation, authority, or norm, it means they go against it or refuse to conform.`
        },
        {
          "id": 46,
          "question": "Orinya balances the pail on her head with accustomed ease.",
          "options": [
            "convincing",
            "surprising",
            "unwary",
            "unusual" // as aspected, unusual is the answer...
          ],
          "ans": "D",
          "main": "accustomed",
          "remark":`"Accustomed" is an adjective that describes being familiar with something, having become used to or habituated to a particular situation, practice, or condition. When someone is accustomed to something, it means they are familiar with it due to repeated exposure, and it has become a regular or expected part of their experience.`
        },
        {
          "id": 47,
          "question": "They attacked all regulations designed to emasculate student militancy.",
          "options": [
            "condone",
            "isolate",
            "punish",
            "strengthen" // <= emasculate means weaken and opposite of weaken is strengthen
          ],
          "ans": "D",
          "main": "emasculate",
          "remark": `<p>The term "emasculate" has a literal and a figurative meaning:</p>
          <ul><li><strong>Literal meaning:</strong> In a literal sense, "emasculate" is a verb that means to deprive a male of his male qualities, particularly by removing the testicles. In the context of animals, this process is often referred to as "castration."</li><li><strong>Figurative meaning:</strong> In a figurative or metaphorical sense, "emasculate" is used to describe the act of depriving someone or something of its strength, vigor, or effectiveness. It implies weakening or rendering something less potent, often in the context of reducing masculinity or strength.</li></ul>`
        },
        {
          "id": 48,
          "question": "There is no point dissipating energy on a useless argument",
          "options": [
            "destroying",
            "conserving", // opposite is <= this...
            "marshalling",
            "storing"
          ],
          "ans": "B",
          "main": "dissipating",
          "remark": `Dissipating generally means to scatter, disperse, or gradually vanish over time. The term is often used in various contexts to describe the gradual disappearance or spreading out of something, such as energy, resources, or a cloud.`
        },
        {
          "id": 49,
          "question": "Everyone, including the Principal, believed that he was a very assiduous student.",
          "options": [
            "assertive",
            "industrious", // 
            "aggressive",
            "casual" // <= casual... makes sense...
          ],
          "ans": "D",
          "main": "assiduous",
          "remark": `"Assiduous" is an adjective used to describe someone who is diligent, persistent, and hardworking in their efforts or tasks. An assiduous person is characterized by careful and constant attention to a particular work or duty, showing a dedicated and industrious approach.`
        },
        {
          "id": 50,
          "question": "My eldest brother is now faced with the vicissitudes of married life.",
          "options": [
            "amazement",
            "sweetness",
            "amiability",
            "stability" // <= stability.
          ],
          "ans": "D",
          "main": "vicissitudes", // regular change from one thing to another.... makes sense
          "remark": `Vicissitudes refers to the unpredictable changes, fluctuations, or variations that occur as part of the natural course of life or a situation.`
        },
        {
          "id": 51,
          "question": "The dancing troupe put up a flawless performance.",
          "options": [
            "an interesting",
            "an imperfect", // an imperfect performance... <= ghfvvmmcmcmcmcmc
            "a satisfactory",
            "a careless"
          ],
          "ans": "B",
          "main": "flawless",
          "remark": `"Flawless" is an adjective used to describe something that is without any imperfections, defects, or shortcomings. When something is flawless, it is characterized by perfection, precision, and a complete absence of errors or flaws.`
        },
        {
          "id": 52,
          "question": "The officer said that he knew nothing to the detriment of the applicant.",
          "options": [
            "damage",
            "disfavor",
            "advantage", //
            "incurius",
            "careful"
          ],
          "ans": "C",
          "main": "detriment",
          "remark": `"Detriment" is a noun that refers to the state of being harmed, damaged, or having a negative impact on something or someone. It denotes a disadvantage, harm, or loss that results from a particular action, situation, or condition.`
        },
        {
          "id": 53,
          "question": "Common sense requires that one should be decorous at formal gatherings",
          "options": [
            "courteous",
            "impolite",
            "incurious",
            "careful"
          ],
          "ans": "B",
          "main": "decorous",
          "remark": `"Decorous" is an adjective used to describe behavior, conduct, or appearance that is characterized by good taste, propriety, and respect for social norms. When someone or something is described as decorous, it means they exhibit proper manners, respect, and conformity to accepted standards of behavior.`
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
          "ans": "A",
          "main": "taut",
          "remark": `"Taut" is an adjective that describes something pulled or stretched tight, without any slack or looseness.`
        },
        {
          "id": 55,
          "question": "The diminutive figure bounces over the track with unfathomable lightness..",
          "options": [
            "invigorating",
            "irresistible",
            "predictable", // unfathomable means something that is not comprehensible let alone predictable...
            "impressive"
          ],
          "ans": "C",
          "main": "unfathomable",
          "remark": `The term "unfathomable" is an adjective used to describe something that is difficult or impossible to understand, measure, or comprehend fully. It suggests a depth or complexity that exceeds the limits of human comprehension, making it seemingly impossible to fathom or grasp completely.`
        },
        {
          "id": 56,
          "question": "The teacher announced that the class would be making a fleeting visit to the zoo.",
          "options": [
            "routine",
            "brief",
            "long", // fleeting is something like short,
            "guided"
          ],
          "ans": "C",
          "main": "fleeting",
          "remark": `"Fleeting" is an adjective that describes something that is brief, transitory, or lasting for only a short duration. It implies a sense of quickness or impermanence, suggesting that the thing in question does not endure for an extended period.`
        },
        {
          "id": 57,
          "question": "We intend to make the reception a diurnal event.",
          "options": [
            "nocturnal",
            "a weekly",
            "a short",
            "an annual"
          ],
          "ans": "A",
          "main": "diurnal", // diurnal means morning
          "remark": `"Diurnal" is an adjective that refers to events or phenomena that occur during the day or are active during daylight hours. It is often used to describe things that have a daily cycle or are related to the daytime.`
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
          "ans": "B", // <= exacerbate... makes sense
          "main": "alleviate",
          "remark": `"Alleviate" is a verb that means to make a situation or a symptom less severe or more bearable. It involves lessening or mitigating the intensity, severity, or discomfort of something.`
        },
        {
          "id": 59,
          "question": "It is surprising that this politician has now turned renegade.",
          "options": [
            "militant",
            "corrupt",
            "loyal", // loyal is the best antonym here
            "quiet"
          ],
          "ans": "C",
          "main": "renegade",
          "remark": `A "renegade" is a noun that refers to a person who has rejected or defied established conventions, authorities, or traditional beliefs, often by engaging in behavior that goes against accepted norms or expectations. The term is often associated with someone who rebels against or abandons a particular cause, group, or system.`
        },
        {
          "id": 60,
          "question": "Hypertension is a debilitating disease that everyone should prevent.",
          "options": [
            "an enervating",
            "an energizing", // obviously, <= energizing is the answer
            "a horrible",
            "a mortal"
          ],
          "ans": "B", // 
          "main": "debilitating",
          "remark": `"Debilitate" is a verb that means to weaken or impair the strength, effectiveness, or vitality of someone or something. When something is debilitating, it causes a significant and often long-lasting reduction in physical or mental capabilities.`
        },
        {
          "id": 61,
          "question": "The striking workers have vowed not to return to work until the decision is rescinded",
          "options": [
            "changed",
            "dismissed",
            "implemented", // The opposite of "rescind" is "enact" or "implement." While "rescind" means to revoke or cancel, "enact" means to make something into law, put a decision into effect, or officially establish a policy. 
            "incorporated"
          ],
          "ans": "C",
          "main": "rescinded",
          "remark": `"Rescinded" is a verb that refers to the action of revoking, canceling, or repealing a decision, order, law, agreement, or policy. When something is rescinded, it is officially annulled, and its legal or official status is reversed.`
        },
        {
          "id": 62,
          "question": "I'm not interested in buying that shirt. I think it is overpriced.",
          "options": [
            "expensive",
            "overrated",
            "priceless",
            "cheap" // let's just say cheap is very close
          ],
          "ans": "D",
          "main": "overpriced",
          "remark": `Overprice is an adjective used to describe something that is priced higher than its perceived value or worth. When a product, service, or item is considered overpriced, it means that the cost is deemed excessive or not justified in relation to its quality, features, or market standards.`
        },
        {
          "id": 63,
          "question": "Civil engineering is predominantly a male profession.",
          "options": [
            "absolutely",
            "essentially",
            "generally",
            "seldom" // seldom is the answer
          ],
          "ans": "D",
          "main": "predominantly",
          "remark": `"Predominant" is an adjective used to describe something that is the most widespread, influential, or prevalent in a particular situation or context. When something is predominant, it holds a position of dominance or superiority compared to other elements.`
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
          "ans": "D", // covert means closed....
          "main": "covert",
          "remark": `As an adjective, "covert" describes something that is kept secret or not easily seen. For example, a covert operation is a secret mission or undertaking that is not intended to be known by the general public.`
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
          "ans": "A", // temperate
          "main": "sultry",
          'remark': `One common meaning of "sultry" is related to weather. It describes hot, humid conditions, often associated with a sense of oppressiveness. `
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
          "ans": "B",
          "main": "arduous",
          "remark": `"Arduous" is an adjective used to describe something that requires a lot of effort, hard work, and is often challenging or strenuous. When a task, undertaking, or situation is described as arduous, it implies that it demands significant exertion, persistence, or difficulty.`
        },
        {
          "id": 67,
          "question": "What a harmless thought he has!.",
          "options": [
            "pleasant",
            "pernicious", // means harmful ,= makes sense... pernicious means harmful
            "perfect",
            "pertinent"
          ],
          "ans": "D",
          "main": "harmless",
          "remark": `"Harmless" is an adjective used to describe something that does not cause harm, injury, or damage. Pernicious means harmful.`
        },
        {
          "id": 68,
          "question": "In his naivety, he believed all the stories his friend told him.",
          "options": [
            "incredulity", // "Incredulity" is a noun that refers to the state of being unwilling or unable to believe something. It involves a sense of skepticism, doubt, or disbelief in the truth or validity of a statement, claim, or situation. When someone reacts with incredulity, they express a lack of confidence or trust in what they are being told.
            "stupidity",
            "friendliness",
            "artlessness"
          ],
          "ans": "A",
          "main": "naivety",
          "remark": `"Naivety" (or "naiveté") is a noun that refers to the quality or state of being naive. Naivety is characterized by a lack of experience, sophistication, or worldliness, often resulting in a tendency to believe things easily or to trust others without questioning their intentions. It can also be associated with innocence or simplicity.`
        },
        {
          "id": 69,
          "question": "It is inconceivable that the rat devoured the cat.",
          "options": [
            "credible", //  When information, sources, or individuals are described as credible, it implies that they are reliable, have a good reputation, and are likely to be accurate or truthful.
            "unimaginable",
            "contestable",
            "incomprehensible"
          ],
          "ans": "A",
          "main": "inconceivable",
          "remark": `The term "inconceivable" is an adjective that describes something that is difficult or impossible to believe, imagine, or comprehend. When an idea or concept is considered inconceivable, it is so extreme, unlikely, or beyond comprehension that it is challenging for the mind to grasp or accept.`
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
          "ans": "A",
          "main": "ambivalent",
          "remark": `"Ambivalent" is an adjective used to describe a state of having mixed or conflicting feelings, attitudes, or opinions about someone or something. When a person is ambivalent, they may experience simultaneous and opposing emotions or thoughts, making it challenging to express a clear and decisive stance.`
        },
        {
          "id": 71,
          "question": "The teacher taught the rudiments of Chemistry to the first grade.",
          "options": [
            "advanced",
            "fundamentals",
            "elements",
            "basics"
          ],
          "ans": "A",
          "main": "rudiments",
          "remark": `the word "rudiments" as used here refers to the basic or fundamental principles and elements of Chemistry. In this context, "rudiments" implies the introductory or foundational aspects of the subject that are essential for beginners to understand.`
        },
        {
          "id": 72,
          "question": "The journalist's write-up contained a plethora of detail.",
          "options": [
            "simplicity",
            "spectrum",
            "shortage", // shortage is the direct opposite of plethora
            "complexity"
          ],
          "ans": "C",
          "main": "plethora",
          "remark": `"Plethora" is a noun that refers to an excessive or overabundant quantity of something. It indicates an abundance or surplus that goes beyond what is necessary or normal.`
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
          "ans": "A",
          "main": "agog",
          "remark": `"Agog" is an adjective used to describe a state of eager anticipation, excitement, or intense curiosity about something. When someone is described as being agog, it means they are highly enthusiastic, eager, or keenly interested in a particular event, news, or experience.`
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
          "ans": "B",
          "main": "interminable",
          "remark": `"Interminable" is an adjective used to describe something that is seemingly endless, incessant, or seemingly without an apparent conclusion.`
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
          "ans": "A",
          "main": "youthfulness",
          "remark": `"Youthfulness" is a noun that refers to the quality or state of being youthful. It encompasses characteristics associated with being young, such as vigor, energy, freshness, and a lack of the physical signs of aging`
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
          "main": "apathy",
          "remark": `"Apathy" is a noun that refers to a lack of interest, enthusiasm, or concern. It describes a state of indifference or emotional detachment, where an individual shows little or no interest or engagement in matters that would typically evoke emotions, passion, or motivation.`
        },
        {
          "id": 77,
          "question": "The witness averred that she had seen Dosun at the scene of the crime.",
          "options": [
            "argued",
            "confirmed",
            "denied", /// denied is the direct opposite here...
            "affirmed"
          ],
          "ans": "C",
          "main": "averred",
          "remark": `"Averred" is the past tense of the verb "aver," which means to assert or affirm with confidence. When someone avers a statement, they state it strongly or declare it to be true`
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
          "ans": "A", // => it is obvious that extravagance is the direct opposite here....
          "main": "frugality",
          "remark": `"Frugality" is a noun that refers to the quality or state of being economical, thrifty, and mindful of expenses. It involves the wise and judicious use of resources, including money, in order to avoid waste and unnecessary spending.`
        },
        {
          "id": 79,
          "question": "Tunde's reaction underscores the point I was making",
          "options": [
            "justifies",
            "emphasizes",
            "summarizes",
            "contradicts" // contradicts is the best antonym for underscore
          ],
          "ans": "D",
          "main": "underscores",
          "remark": `As a verb, "underscores" means to emphasize, highlight, or draw attention to something. In this sense, it indicates the act of stressing the importance or significance of a particular point.`
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
          "ans": "B",
          "main": "adroit",
          "remark": `"Adroit" is an adjective used to describe someone who is skillful, clever, or adept at performing tasks, particularly those that require manual dexterity, intelligence, or finesse. An adroit individual is often able to handle situations with ease and efficiency.`
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
          "ans": "B",
          "main": "ignoble",
          "remark": `The term "ignoble" is an adjective that describes something or someone characterized by a lack of honor, decency, or moral principles. It suggests actions or qualities that are shameful, dishonorable, or base. An ignoble act or person is often associated with actions or behaviors that go against accepted standards of morality or virtue. It can also imply actions that are mean-spirited, unprincipled, or unworthy of respect.`
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
          "ans": "D", // popular and renowned is similar just the connotation that's all...
          "main": "notorious",
          "remark": `The term "notorious" is an adjective used to describe someone or something that is widely known, typically for unfavorable or infamous reasons.`
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
          "main": "redounds to",
          "remark": `The term "redound" is a verb that means to have an effect or consequence, typically used in the context of something contributing to or benefiting someone or something.`
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
          "ans": "C",
          "main": "phlegmatic",
          "remark": `"Phlegmatic" is an adjective used to describe a personality or temperament characterized by calmness, sluggishness, and an overall lack of emotional responsiveness. A person with a phlegmatic temperament tends to be calm, composed, and unemotional, often displaying a cool and steady demeanor in various situations. `
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
          "main": "restive",
          "remark": `"Restive" is an adjective that describes a state of impatience, uneasiness, or resistance to control or restraint. `
        },
        {
          "id": 86,
          "question": "The Governor's visit is an unprecedented event in the history of the social club",
          "options": [
            "a perfect",
            "a momentous",
            "an insignificant", /// insignifacnt.... 
            "an unnecessary" 
          ],
          "ans": "C",
          "main": "unprecedented",
          "remark": `"Unprecedented" implies something that has not occurred before, is exceptional, or is without precedent.`
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
          "ans": "A",
          "main": "indomitable",
          "remark": `"Indomitable" is an adjective used to describe a person, spirit, or attitude that cannot be subdued, overcome, or defeated. It conveys a sense of resilience, strength, and determination in the face of challenges or adversity. An indomitable spirit remains unyielding and steadfast, refusing to be conquered or broken.`
        },
        {
          "id": 88,
          "question": "The evidence the leader gave was incontrovertible",
          "options": [
            "indubitable",
            "contestable",
            "practicable",
            "logical"
          ],
          "ans": "B",
          "main": "incontrovertible",
          "remark": `The term "incontrovertible" is an adjective used to describe something that is unquestionable, indisputable, or beyond doubt. When applied to a fact, argument, or evidence, it means that there is no room for disagreement or debate because the information is clear, evident, and cannot be disputed. `
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
          "ans": "C",
          "main": "extemporaneous",
          "remark": `"Extemporaneous" is an adjective used to describe something that is done, spoken, or performed without preparation or rehearsal. It often refers to impromptu or off-the-cuff actions, speeches, or performances that are carried out on the spot or without prior planning. `
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
          "main": "gullible",
          "remark": `"Gullible" is an adjective used to describe someone who is easily deceived or believes things without sufficient evidence.`
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
          "ans": "C",
          "main": "inordinate",
          "remark": `The term "inordinate" is an adjective that describes something that exceeds normal or reasonable limits, often suggesting an excessive or disproportionate amount. It implies a lack of restraint, balance, or moderation.`
          // normally we need data to work with. 
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
          "ans": "A",
          "main": "timid",
          "remark": `"Timid" is an adjective used to describe someone who lacks self-confidence, is easily frightened, or tends to be shy and hesitant in social situations. `
        },
        {
          "id": 93,
          "question": "The witness decided to conceal the evidence.",
          "options": [
            "divulge", // The verb "divulge" means to disclose, reveal, or make known information that was previously kept secret or private.
            "hide",
            "destroy",
            "pugnacious"
          ],
          "ans": "A",
          "main": "conceal",
          "remark": `The verb "conceal" means to hide or keep something secret, away from the view or knowledge of others. When you conceal something, you intentionally prevent it from being seen, known, or discovered. This act may involve physically hiding an object, information, or one's feelings, or it could involve actions to keep something from public knowledge or attention. Concealing is often done with the intention of maintaining privacy, avoiding disclosure, or preserving the confidentiality of certain matters.`
        },
        {
          "id": 94,
          "question": "The member of the congregation were inspired by the ovation.",
          "options": [
            "bewitched",
            "enthralled", // similar to inspired kind of...
            "disenchanted",
            "disoriented"
          ],
          "ans": "C",
          "main": "inspired",
          "remark": `The term "inspired" is an adjective used to describe someone or something that has been influenced, motivated, or stimulated by creative or uplifting ideas. When a person is inspired, they may feel a surge of motivation, enthusiasm, or creativity.`
        },
        {
          "id": 95,
          "question": "Agbenu was ecstatic abOut her result.",
          "options": [
            "disappointed",
            "sad",
            "pessimistic",
            "mad"
          ],
          "ans": "B",
          "main": "ecstatic",
          "remark": `"Ecstatic" is an adjective used to describe a state of overwhelming joy, delight, or intense happiness.`
        },
        {
          "id": 96,
          "question": "The labor leader's recalcitrant stance was applauded.",
          "options": [
            "stubborn",
            "flexible",
            "uncompromising",
            "well informed"
          ],
          "ans": "B",
          "main": "recalcitrant",
          "remark": `it is an adjective used to describe a person or thing that is resistant to authority or control, often disobedient or uncooperative. A recalcitrant individual is stubborn, unwilling to comply with rules or authority, and tends to resist attempts to be managed or influenced.`
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
          "ans": "C",
          "main": "invigorating",
          "remark": `"Invigorating" is an adjective that describes something that has a refreshing, revitalizing, or energizing effect.`
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
          "ans": "A",
          "main": "loath",
          "remark": `"Loathe" is a verb that means to feel intense dislike or disgust for someone or something. When a person loathes something, they have a strong aversion or repulsion towards it.`
        //   she is basically unwillingly to do the assignment. imagine
        }
      ]
    },
    {
      "topic": "Antonyms II", 
      "questions": [
        {
          "id": 1,
          "question": "Toyin is married to an impatient, self-centered man.",
          "options": [
            "a fretful",
            "a tolerant",
            "an edgy",
            "a tolerable"
          ],
          "ans": "A",
          "main": "impatient",
          'remark': "" ,
        },
        {
          "id": 2,
          "question": "Gregarious animals can be found in the zoo.",
          "options": [
            "Various",
            "Wild",
            "Lonely",
            "Tame"
          ],
          "ans": "C",
          "main": "Gregarious",
          'remark': "" ,
        },
        {
          "id": 3,
          "question": "The doctor examined the patient painstakingly.",
          "options": [
            "perfunctorily",
            "professionally",
            "painfully",
            "carefully"
          ],
          "ans": "A",
          "main": "painstakingly",
          'remark': "" ,
        },
        {
          "id": 4,
          "question": "A conservative estimate put the number of missing persons at forty.",
          "options": [
            "A rough",
            "An accurate",
            "A primitive",
            "An incorrect"
          ],
          "ans": "A",
          "main": "conservative",
          'remark': "" ,
        },
        {
          "id": 5,
          "question": "The agency has sworn to deal with all the apostles of confededration..",
          "options": [
            "proponents",
            "protagonists",
            "apostates",
            "opponents"
          ],
          "ans": "A",
          "main": "apostles",
          'remark': "" ,
        },
        {
          "id": 6,
          "question": "The ship was imperiled by high winds.",
          "options": [
            "destroyed",
            "saved",
            "piloted",
            "received"
          ],
          "ans": "A",
          "main": "imperiled",
          'remark': "" ,
        },
        {
          "id": 7,
          "question": "Sailors are unusually dauntless in their exploits.",
          "options": [
            "frighted",
            "selfless",
            "ruthless",
            "excited"
          ],
          "ans": "A",
          "main": "imperiled",
          'remark': "" ,
        },
        {
          "id": 8,
          "question": "The Flying Eagles put up a plucky defense against their opponents.",
          "options": [
            "careless",
            "tactful",
            "weak",
            "strong"
          ],
          "ans": "A",
          "main": "plucky",
          'remark': "" ,
        },
        {
          "id": 9,
          "question": "The noise of the fans unnerved the near player.",
          "options": [
            "confused",
            "helped",
            "calmed",
            "refreshed"
          ],
          "ans": "A",
          "main": "unnerved",
          'remark': "" ,
        },
        {
          "id": 10,
          "question": "Beauty queens sometime wear outlandish dresses.",
          "options": [
            "attractive",
            "beautiful",
            "flashy",
            "familiar"
          ],
          "ans": "A",
          "main": "outlandish",
          'remark': "" ,
        },
        {
          "id": 11,
          "question": "The dictator want tractable men in his cabinet.",
          "options": [
            "unruly",
            "tough",
            "reliable",
            "intelligent"
          ],
          "ans": "A",
          "main": "tractable",
          'remark': "" ,
        },
        {
          "id": 12,
          "question": "We found a shady place for the display.",
          "options": [
            "a stuffy",
            "an enclosed",
            "a safe",
            "an open"
          ],
          "ans": "A",
          "main": "shady",
          'remark': "" ,
        },
        {
          "id": 13,
          "question": "The potency of the drug has been acknowledged.",
          "options": [
            "inefficacy",
            "power",
            "action"
          ],
          "ans": "A",
          "main": "potency",
          'remark': "" ,
        },
        {
          "id": 14,
          "question": "My father's presentation was rather unusual.",
          "options": [
            "vital",
            "divisive",
            "formal",
            'informal'
          ],
          "ans": "A",
          "main": "unusual",
          'remark': "" ,
        },
        {
          "id": 15,
          "question": "The team got an ecstatic welcome from the crowd.",
          "options": [
            "a thunderous",
            "a cold",
            "a joyous",
            'an unexpected'
          ],
          "ans": "A",
          "main": "ecstatic",
          'remark': "" ,
        },
        {
          "id": 16,
          "question": "After the war, the victors became increasingly vindictive.",
          "options": [
            "arrogant",
            "treacherous",
            "friendly",
            'vociferous'
          ],
          "ans": "A",
          "main": "vindictive",
          'remark': "" ,
        },
        {
          "id": 17,
          "question": "The journalist said he was working freelance.",
          "options": [
            "without a pay",
            "pendantly",
            "tirelessly",
            'vociferously'
          ],
          "ans": "A",
          "main": "freelance",
          'remark': "" ,
        },
        {
          "id": 18,
          "question": "After fifty years he could not find anyone who was contemporary with him at college.",
          "options": [
            "friendly with",
            "contested against",
            "strange to",
            'belong to'
          ],
          "ans": "A",
          "main": "contemporary",
          'remark': "" ,
        },
        {
          "id": 19,
          "question": "Many Nigerians are wary of night journeys.",
          "options": [
            "unscared of",
            "worried about",
            "troubled about",
            'satisfied with'
          ],
          "ans": "A",
          "main": "wary of",
          'remark': "" ,
        },
        {
          "id": 20,
          "question": "Some people consider the leather upholstery and thick rug a bit sumptuous.",
          "options": [
            "simple",
            "lavish",
            "expensive",
            'desirable'
          ],
          "ans": "A",
          "main": "sumptuous",
          'remark': "" ,
        },
        {
          "id": 21,
          "question": "The professor accused Uche of silently acquiescing to the students demand.",
          "options": [
            "adjusting",
            "resisting",
            "compromising",
            'submitting'
          ],
          "ans": "A",
          "main": "aquiescing",
          'remark': "" ,
        },
        {
          "id": 22,
          "question": "The teacher recounted two events that were analogous with each other.",
          "options": [
            "advantageous",
            "similar with",
            "different from",
            'distant from'
          ],
          "ans": "A",
          "main": "analogous",
          'remark': "" ,
        },
        {
          "id": 23,
          "question": "The dramalist provided a satisfactory to the play.",
          "options": [
            "advantageous",
            "introduction",
            "audition",
            'climax'
          ],
          "ans": "A",
          "main": "satisfactory",
          'remark': "" ,
        },
        // start here
        {
          "id": 24,
          "question": "The doctor was very gentle with his patients in the examining room.",
          "options": [
            "harsh",
            "rude",
            "rough",
            'unkind',
            'callous'
          ],
          "ans": "A",
          "main": "gentle",
          'remark': "" ,
        },
        {
          "id": 25,
          "question": "James is a disco-addict. He takes his studies rather lightly.",
          "options": [
            "humorously",
            "gloomily",
            "tediously",
            'carefully',
            'seriously'
          ],
          "ans": "E",
          "main": "lightly",
          'remark': "lightly = non-chalantly, lackadaisically" ,
        },
        {
          "id": 26,
          "question": "My cousin is very lazy. He will not take his studies seriously. His future looks quite bleak.",
          "options": [
            "cloudly",
            "cheerless",
            "bright",
            'huge',
            'sturdy'
          ],
          "ans": "C",
          "main": "bleak",
          'remark': "bleak means uncertain" ,
        },
        {
          "id": 27,
          "question": "While most of our recently elected legislators are living a life of affluence and ostentation, the vast majority of those who elected them into office are unhappy.",
          "options": [
            "influence",
            "pleasure",
            "poverty",
            'happiness',
            'consequence'
          ],
          "ans": "C",
          "main": "affluence",
          'remark': "" ,
        },
        {
          "id": 28,
          "question": "It is generally believed that misers are not loved by many.",
          "options": [
            "spendthrifts",
            "spenders",
            "hoarders",
            'savers',
            'thieves'
          ],
          "ans": "A",
          "main": "misers",
          'remark': "A spender (B) does not necessarily spend a lot of money unless otherwise revealed by an adjective. e.g 'a big spender.'" ,
        },
        {
          "id": 29,
          "question": "My brother's primary school foundation was solid and this affected his secondary education",
          "options": [
            "sound",
            "sordid",
            "shaky",
            'weak',
            'uneventful'
          ],
          "ans": "D",
          "main": "solid",
          'remark': "solid means strong" ,
        },
        {
          "id": 30,
          "question": "Politicians and holders of political appointments are generally asssumed to be cunning",
          "options": [
            "kind",
            "straightforward",
            "generous",
            'even-handed',
            'sly'
          ],
          "ans": "B",
          "main": "cunny",
          'remark': "" ,
        },
        {
          "id": 31,
          "question": "The long straight trunk of the tree is ideal for round wood uses like railway sleepers, rafters and fence posts.",
          "options": [
            "best",
            "perfect",
            "mostly unsuitable",
            'satisfactory',
            'poor'
          ],
          "ans": "C",
          "main": "ideal",
          'remark': "" ,
        },
        {
          "id": 32,
          "question": "A book on style without abundant examples seems to me as ineffectual as a book on biology without abundant illustrations.",
          "options": [
            "useless",
            "difficult",
            "interesting",
            'satisfactory',
            'attractive'
          ],
          "ans": "D",
          "main": "ineffectual",
          'remark': "" ,
        },
        {
          "id": 33,
          "question": "To most people last Christmas was an austere period.",
          "options": [
            "prosperous",
            "harsh",
            "severe",
            'sour',
            'stern'
          ],
          "ans": "A",
          "main": "austere",
          'remark': "Austerity means a state of bad economic condition when people have little money" ,
        },
        {
          "id": 34,
          "question": "The chief was generous in his award of university scholarships",
          "options": [
            "noble",
            "considerate",
            "liberal",
            'mean',
            'honest'
          ],
          "ans": "D",
          "main": "generous",
          'remark': "" ,
        },
        {
          "id": 35,
          "question": "Chidi is naturally taciturn.",
          "options": [
            "friendly",
            "cheerful",
            "dumb",
            'lively',
            'garrulous'
          ],
          "ans": "E",
          "main": "taciturn",
          'remark': "garrulous means talking too much. Talkative." ,
        },
        {
          "id": 36,
          "question": "He is loved for his altruism.",
          "options": [
            "benevolence",
            "sincerity",
            "selfishness",
            'selflessness',
            'kindness'
          ],
          "ans": "C",
          "main": "altruism",
          'remark': "" ,
        },
        {
          "id": 37,
          "question": "The Military Governor upheld the decision of his cabinet.",
          "options": [
            "held up",
            "undercut",
            "maintained",
            'abolished',
            'reversed'
          ],
          "ans": "E",
          "main": "upheld",
          'remark': "" ,
        },
        {
          "id": 38,
          "question": "Many untrustworthy students give evasive answers to questions which they fully understand.",
          "options": [
            "direct",
            "outspoken",
            "simple",
            'truthful',
            'clever'
          ],
          "ans": "A",
          "main": "evasive",
          'remark': "" ,
        },
        {
          "id": 39,
          "question": "The deafening noise of the two jet planes which flew across our compound yesterday made people fear that an assault on the country might be imminent.",
          "options": [
            "impending",
            "ahead",
            "remote",
            'eminent',
            'threatening'
          ],
          "ans": "C",
          "main": "imminent",
          'remark': "" ,
        },
        {
          "id": 40,
          "question": "Disgruntled people are indifferent to any plans to rid the society of evil",
          "options": [
            "different from",
            "diffident about",
            "in agreement with",
            'interested in',
            'opposed to'
          ],
          "ans": "D",
          "main": "indifferent",
          'remark': "" ,
        },
        {
          "id": 41,
          "question": "The severity of the harmattan helped me to complete my writing assignment in record time because I had no choice but to lock myself indoors.",
          "options": [
            "warmth",
            "mildness",
            "moderation",
            'leniency',
            'gentility'
          ],
          "ans": "B",
          "main": "severity",
          'remark': "" ,
        },
        {
          "id": 42,
          "question": "The increase in transport fares deterred our club from planning an excursion this year..",
          "options": [
            "deferred",
            "irritated",
            "impelled",
            'restricted',
            'encourage'
          ],
          "ans": "E",
          "main": "deterred",
          'remark': "" ,
        },
        {
          "id": 43,
          "question": "This card entitles you to attend the film show.",
          "options": [
            "disqualifies",
            "discourages",
            "disenchants",
            'proclaims',
            'satisfies'
          ],
          "ans": "A",
          "main": "entitles",
          'remark': "" ,
        },
        {
          "id": 44,
          "question": "This is an abridged edition of Oliver Twist",
          "options": [
            "enlarged",
            "outdated",
            "extinct",
            'reprinted',
            'banned'
          ],
          "ans": "B",
          "main": "entitles",
          'remark': "" ,
        },
        {
          "id": 45,
          "question": "Mr. Jack was most flexible in his instructions.",
          "options": [
            "rigid",
            "correct",
            "stiff",
            'upright',
          ],
          "ans": "A",
          "main": "flexible",
          'remark': "" ,
        },
        {
          "id": 46,
          "question": "The university has offered temporary accomodation to its staff.",
          "options": [
            "popular",
            "permanent",
            "recognized",
            'regular',
          ],
          "ans": "B",
          "main": "temporary",
          'remark': "" ,
        },
        {
          "id": 47,
          "question": "Mary complained that she slept on the coarse floor",
          "options": [
            "smooth",
            "rough",
            "bad",
            'harsh',
          ],
          "ans": "A",
          "main": "coarse",
          'remark': "" ,
        },
        {
          "id": 48,
          "question": "The Governor declined to give audience to the journalist",
          "options": [
            "ignored",
            "accepted",
            "forgot",
            'rejected',
          ],
          "ans": "B",
          "main": "declined",
          'remark': "" ,
        },
        {
          "id": 49,
          "question": "The debtor's husband is liable for his wife's debts",
          "options": [
            "unanswerable",
            "responsible",
            "unquestionable",
            'accountable',
          ],
          "ans": "A",
          "main": "liable",
          'remark': "" ,
        },
        {
          "id": 50,
          "question": "The lotion recommended by the doctor soothed Okon's aching tooth",
          "options": [
            "calmed",
            "extracted",
            "excited",
            'worsened',
          ],
          "ans": "D",
          "main": "soothed",
          'remark': "" ,
        },
        {
          "id": 51,
          "question": "The sun cast its shadow on the wall",
          "options": [
            "reflection",
            "rays",
            "resemblance",
            'substance',
          ],
          "ans": "B",
          "main": "shadow",
          'remark': "" ,
        },
        {
          "id": 52,
          "question": "The lady acted courageously when thieves attacked her",
          "options": [
            "shyly",
            "fearlessly",
            "indiscreetly",
            'timidly',
          ],
          "ans": "D",
          "main": "courageously",
          'remark': "" ,
        },
        {
          "id": 53,
          "question": "Unless we see the evils clearly, contending against them is like fighting the air",
          "options": [
            "avoiding",
            "struggling with",
            "combating",
            'repellinb',
          ],
          "ans": "A",
          "main": "contending",
          'remark': "" ,
        },
        {
          "id": 54,
          "question": "The explosive growth of world population has not been caused by a sudden increase in human fertility",
          "options": [
            "fantastic",
            "gradual",
            "combustible",
            'dangerous',
          ],
          "ans": "B",
          "main": "explosive",
          'remark': "" ,
        },
        {
          "id": 55,
          "question": "It is generally believed that misers are not loved by many",
          "options": [
            "spendthrifts",
            "spenders",
            "hoarders",
            'savers',
          ],
          "ans": "A",
          "main": "misers",
          'remark': "" ,
        },
        {
          "id": 56,
          "question": "Our government is making determined efforts to eradicate illiteracy.",
          "options": [
            "compulsory",
            "ineffective",
            "innocent",
            'unreliable',
          ],
          "ans": "B",
          "main": "determined",
          'remark': "" ,
        },
        {
          "id": 57,
          "question": "My brother's primary school foundation was solid and this influenced his secondary education.",
          "options": [
            "sound",
            "sordid",
            "shaky",
            'weak',
          ],
          "ans": "D",
          "main": "solid",
          'remark': "" ,
        },
        {
          "id": 58,
          "question": "Makerere University has a large intake of students each year.",
          "options": [
            "rejection",
            "product",
            "output",
            'turnout',
          ],
          "ans": "D",
          "main": "intake",
          'remark': "" ,
        },
        {
          "id": 59,
          "question": "Florence flogged the girl reluctantly",
          "options": [
            "eagerly",
            "calmly",
            "furiously",
            'laboriously',
          ],
          "ans": "A",
          "main": "reluctantly",
          'remark': "" ,
        },
        {
          "id": 60,
          "question": "Sola's car is badly damaged; he has to look for an expert mechanic to fix it.",
          "options": [
            "uneducated",
            "amateurish",
            "awkward",
            'unscientific',
          ],
          "ans": "B",
          "main": "expert",
          'remark': "" ,
        },
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
          "ans": "D"
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