// CHATGPT 3.5 HELPED WITH THE ANSWERS

let englishQuestions = [
  {
    topic: "Antonyms",
    questions: [
      {
        "id": 1,
        "question": "The poor man is compelled to languish in his poverty stricken situation.",
        "options": ["luxuriate in", "deteriorate in", "suffer in", "laugh at"],
        "ans": "A",
        "main": "languish",
        "remark": "Languish is a verb that refers to a state of suffering, decline or becoming feeble. It can be used to describe various situations where something or someone experiences a lack of vitality, energy, or progress.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 2,
        "question": "The engineers have been urged to make a prototype of the long-awaited Nigeria car.",
        "options": ["specimen", "original", "copy", "drawing"],
        "ans": "C",
        "main": "prototype",
        "remark": "prototype refers to the original or earlier version.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 3,
        "question": "He gave a painstaking account of his encounter with the ghost of his father.",
        "options": ["sordid", "fearful", "half-hearted", "tenderhearted"],
        "ans": "C",
        "main": "painstaking",
        "remark": "<strong>Painstaking</strong> is an adjective that describes a task or process that requires a lot of care, effort, and attention to detail. When something is done painstakingly, it means it is carried out with meticulous care and thoroughness, often involving a great deal of time and effort to ensure precision and accuracy.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 4,
        "question": "Since mortality is the lot of man argued the preacher, we must all accept death with equanimity.",
        "options": ["concern", "uncertainty", "serenity", "anxiety"],
        "ans": "D",
        "main": "equanimity",
        "remark": "<strong>equanimity</strong> is a noun that refers to a state of mental or emotional stability, calmness, and composure, especially in difficult situations. When someone possesses equanimity, they are able to maintain a balanced and even-tempered mindset, regardless of external circumstances or challenges",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
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
        "ans": "A",
        "main": "passionate and dynamic",
        "remark": "The phrase \"passionate and dynamic\" is used to describe someone or something that is characterized by intense enthusiasm, strong emotions, and an energetic, active nature.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 6,
        "question": "You can use lethal means if necessary to stop dangerous characters from molesting innocent citizens.",
        "options": ["fatal", "cruel", "harmless", "soft"],
        "ans": "C",
        "main": "lethal",
        "remark": "The term \"lethal\" is an adjective used to describe something that has the potential to cause death or be fatal. It is often associated with substances, weapons, conditions, or actions that can result in serious harm or mortality.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 7,
        "question": "His intentions was not actually to punish the villagers, and in any case he is now making moves to pacify them.",
        "options": ["placate", "ridicule", "appease", "annoy"],
        "ans": "D",
        "main": "pacify",
        "remark": "\"Pacify\" is a verb that means to calm, soothe, or bring peace to a situation or to individuals involved in a conflict. When someone pacifies, they are attempting to alleviate tension, reduce aggression, or restore tranquility. This term is often used in the context of resolving disputes, calming unrest, or calming someone who is upset or agitated.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 8,
        "question": "If you are really keen on immediate results, you just have to adopt this pragmatic approach.",
        "options": ["practical", "unrealistic", "opportunistic", "sensible"],
        "ans": "B",
        "main": "pragmatic",
        "remark": "\"Pragmatic\" is an adjective that describes a practical, realistic, and sensible approach to solving problems or addressing issues. ",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 9,
        "question": "My friend was reduced to beggary by various ill advised business deals.",
        "options": ["affluence", "penury", "influence", "poverty"],
        "ans": "A",
        "main": "beggary",
        "remark": "\"Beggary\" refers to the state of being a beggar or engaging in the practice of begging, which involves asking for alms or charity, typically in the form of money or food. It can also be used more broadly to describe extreme poverty or destitution.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 10,
        "question": "Measures were taken to authenticate the number of the booklets received.",
        "options": ["reaffirm", "discredit", "discountenance", "count"],
        "ans": "B",
        "main": "authenticate",
        "remark": "\"To authenticate\" means to confirm or verify the authenticity or legitimacy of something. ",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 11,
        "question": "He urged other progressives in the country to join forces with his association.",
        "options": ["radicals", "conservatives", "pessimists", "activists"],
        "ans": "B",
        "main": "progressives",
        "remark": "the term \"progressives\" can be used more broadly to describe individuals or ideas that favor progress, innovation, and positive change.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 12,
        "question": "Adama's father simply condoned her bad habits instead of punishing her appropriately.",
        "options": ["opposed", "blamed", "accepted", "forbade"],
        "ans": "D",
        "main": "condoned",
        "remark": "To \"condone\" means to overlook, forgive, or accept behavior that is considered morally wrong or offensive without expressing disapproval or taking action to prevent or punish it. When someone condones an action, they essentially tolerate or allow it, even though they may not agree with it or find it acceptable",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 13,
        "question": "The undesirable elements who perpetuate these vices are never detected.",
        "options": ["aggravate", "overlook", "discontinue", "encourage"],
        "ans": "C",
        "main": "perpetuate",
        "remark": "\"To perpetuate\" means to prolong or cause something to continue indefinitely, often with the implication that it is something negative, undesirable, or problematic. When someone or something perpetuates a situation, it means they are contributing to its persistence or continuation over time",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 14,
        "question": "Some travellers unwittingly render themselves open prey to questionable character.",
        "options": ["genuinely", "wholesomely", "knowingly", "inadvertently"],
        "ans": "C",
        "main": "unwittingly",
        "remark": "'Unwittingly' is an adverb that means without being aware, unintentionally, or unknowingly. If someone does something unwittingly, it implies that they did it without realizing or understanding what they were doing at the time. It often suggests that the person acted without conscious knowledge or awareness of the consequences or implications of their actions.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 15,
        "question": "His father is a shrewd businessman.",
        "options": ["gullible", "orderly", "reliable", "resourceful"],
        "ans": "A",
        "main": "shrewd",
        "remark": "'Shrewd' is an adjective that describes someone who is astute, clever, and sharp in practical matters, often with an ability to make sound and judicious decisions. A shrewd person is perceptive, insightful, and adept at understanding situations, often with a keen sense of how to gain an advantage.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 16,
        "question": "Many people have raised the issue about the need for an equitable distribution of our wealth.",
        "options": ["a fair", "an even", "an unjust", "an undue"],
        "ans": "C",
        "main": "equitable",
        "remark": "'Equitable' is an adjective that describes something that is fair, just, and characterized by a sense of impartiality and equality. When a situation, distribution, or treatment is considered equitable, it means that it is reasonable, unbiased, and ensures that everyone is treated fairly without favoritism or discrimination.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 17,
        "question": "The pastor decided to exorcise the evil spirit as the afflicted member of his congregation cried for help.",
        "options": ["expel", "drive", "invite", "charm"],
        "ans": "C",
        "main": "exorcise",
        "remark": "'Exorcism' refers to the religious or spiritual practice of evicting or driving out supposed evil spirits, demons, or other supernatural entities from a person, place, or object.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 18,
        "question": "He mumbled a few words at the trial and then cried.",
        "options": ["shouted", "murmured", "charm", "invite"],
        "ans": "A",
        "main": "mumbled",
        "remark": "'Mumbled' is a verb that refers to the act of speaking in a low, unclear, or indistinct manner, often making it difficult for others to understand the words being spoken.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
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
        "ans": "C",
        "main": "convergence",
        "remark": "\"Convergence\" generally refers to the process of coming together or meeting at a common point. ",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 20,
        "question": "The greenhouse effect is beginning to abate in Europe.",
        "options": ["intensify", "extentuate", "surface", "ameliorate"],
        "ans": "A",
        "main": "abate",
        "remark": "\"Abate\" is a verb that means to reduce in intensity, degree, or amount; to diminish or lessen. When something abates, it becomes less severe, intense, or active. It can be used in various contexts, including weather, legal matters, or emotions.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 21,
        "question": "The chairman'a verdict redressed the injustice meted out by the secretary.",
        "options": ["corrected", "restored", "aggravated", "addressed"],
        "ans": "C",
        "main": "redressed",
        "remark": "<p>The term \"redress\" can have a few different meanings depending on the context. Here are the primary meanings:</p><ol><li><strong>Compensation or Remedy:</strong> Redress can refer to the act of correcting or remedying a situation that is considered unfair or unjust. It often involves providing compensation or some form of remedy to address a grievance or wrong that has been done. For example, seeking redress in a legal context may involve obtaining compensation for damages or addressing an injustice through legal means.</li><li><strong>Correction or Adjustment:</strong> Redress can also mean the correction or adjustment of something that is wrong or unfair. This can apply to various situations, not just legal matters. For instance, a company might redress a customer complaint by providing a refund or a replacement for a faulty product.</li><li><strong>Relief or Alleviation:</strong> In a broader sense, redress can mean relief or alleviation from a burden, difficulty, or suffering. For example, a policy change might be implemented to redress economic inequalities or social injustices.</li></ol>",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 22,
        "question": "Uche could not travel last December because of the severity of the harmattan.",
        "options": ["cold", "mildness", "warmth", "moderation"],
        "ans": "B",
        "main": "severity",
        "remark": "The term \"severity\" refers to the degree or extent of something being severe, harsh, intense, or serious. It is commonly used to describe the level of seriousness or harshness of a situation, condition, event, or action.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 23,
        "question": "Mrs. Kofi is very provocative in her style of dressing.",
        "options": ["modest", "happy", "angry", "moderation"],
        "ans": "A",
        "main": "provocative",
        "remark": "The term \"provocative\" is an adjective that describes something that stimulates, incites, or arouses strong reactions, emotions, thoughts, or interest, often intentionally. A provocative statement, action, or piece of art is designed to provoke a response, whether it be emotional, intellectual, or social. ",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 24,
        "question": "Akoso thought that her father was very callous.",
        "options": ["indifferent", "compassionate", "wicked", "careless"],
        "ans": "B",
        "main": "callous",
        "remark": "<p>The term \"callous\" is an adjective that describes a person or their behavior as emotionally insensitive, unfeeling, or indifferent to the suffering or feelings of others. A callous individual may display a lack of empathy or sympathy, showing little concern for the impact of their actions on others. Here are some key characteristics associated with the term:</p>\n          <ol><li><strong>Lack of Empathy:</strong> Callousness often involves a lack of empathy, where a person is indifferent to the emotions or hardships of others. They may not easily understand or share in the feelings of those around them.</li><li><strong>Insensitive:</strong> Callous individuals may be insensitive to the needs, feelings, or pain of others. They may exhibit a disregard for the emotional well-being of others and may seem unconcerned about causing distress.</li><li><strong>Unfeeling or Hard-hearted:</strong> Someone described as callous may appear unfeeling or hard-hearted, showing little emotional responsiveness to situations that typically elicit compassion or concern.</li><li><strong>Indifferent to Others' Suffering:</strong> Callous behavior often involves a lack of concern for the suffering or difficulties experienced by others. This indifference may manifest in actions that disregard the feelings or needs of those who are vulnerable or in distress.</li></ol>",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 25,
        "question": "'The Lions of Cameroun' is really an indomitable team.",
        "options": ["a powerful", "a prominent", "a weak", "a cowardly"],
        "ans": "C",
        "main": "indomitable",
        "remark": "<p>The term \"indomitable\" is an adjective used to describe a person, spirit, or quality that cannot be subdued, overcome, or conquered. It conveys a sense of invincibility, resilience, and unbeatable strength. When applied to a person or their spirit, it suggests an unwavering determination, courage, and tenacity in the face of challenges or adversity.</p><p>For example, if someone is described as having an indomitable spirit, it means that they possess a relentless and unyielding attitude that allows them to persevere and overcome obstacles, no matter how difficult or daunting. Similarly, an indomitable will or resolve implies a steadfast and unbreakable determination to achieve one's goals despite challenges or setbacks.</p>",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 26,
        "question": "To almost everyone in the little village, Ada's behaviour was most odious.",
        "options": ["repulsive", "difficult", "attractive", "charming"],
        "ans": "C",
        "main": "odious",
        "remark": "The term <strong>odious</strong> is an adjective used to describe something that is extremely unpleasant, repulsive, or offensive. When applied to a person, action, or thing, it suggests strong disapproval or disgust. Odiousness implies qualities that are highly objectionable or morally repugnant, making the subject deserving of intense criticism or aversion.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 27,
        "question": "Aduma was so vociferous during the meeting of the congregation that he succeeded in incurring the wrath of the chairman.",
        "options": ["anger", "admiration", "displeasure", "sympathy"],
        "ans": "B",
        "main": "wrath",
        "remark": "<strong>Wrath</strong> refers to intense and extreme anger, often accompanied by a desire for vengeance or punishment. It is a strong and powerful emotion characterized by feelings of intense displeasure and the desire to retaliate against someone or something perceived as having wronged or offended.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 28,
        "question": "It was an inopportune moment for you to make that suggestion.",
        "options": ["an ideal", "a wrong", "an exact", "a sad"],
        "ans": "A",
        "main": "inopportune",
        "remark": "The term <strong>inopportune</strong> is an adjective that describes something as poorly timed, inconvenient, or happening at an inappropriate moment. It is used to convey that an event, action, or circumstance occurs at a time that is not favorable or suitable, often causing difficulties or inconvenience.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 29,
        "question": "He devoted too much time to the peripheral aspects.",
        "options": ["unimportant", "superficial", "minor", "main"],
        "ans": "D",
        "main": "peripheral",
        "remark": "In a more figurative sense, \"peripheral\" can describe something that is secondary, less important, or tangential to the main focus or central aspects of a situation. For instance, in a discussion, peripheral details may be less crucial or relevant to the main topic.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
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
        "main": "enervating",
        "remark": "The term \"enervating\" is an adjective used to describe something that causes a feeling of physical or mental exhaustion, fatigue, or weakness. When an experience, situation, or activity is described as enervating, it means that it drains energy, vitality, or strength, leaving one feeling depleted or weakened.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 31,
        "question": "Once he has decided that something needs doing, my brother is very unswerving of purpose.",
        "options": ["erratic", "tenacious", "stubborn", "simple"],
        "ans": "A",
        "main": "unswerving",
        "remark": "The term \"unswerving\" is an adjective used to describe something that is constant, unwavering, or steadfast in its course or purpose. It implies a consistent and resolute commitment to a particular direction, belief, or goal without deviation or veering off course.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 32,
        "question": "Those were the days of the fallacy that some languages are primitive while others are not",
        "options": ["argument", "excuse", "misconception", "truth"],
        "ans": "D",
        "main": "fallacy",
        "remark": "A fallacy is a mistaken belief, faulty argument, or misleading reasoning that is often used to deceive or persuade others. Fallacies may appear to be logical, but they are flawed or misleading in some way.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 33,
        "question": "She is immune to the flattery of young men.",
        "options": ["resistant", "susceptible", "insensible", "unresponsive"],
        "ans": "B",
        "main": "immune",
        "remark": "In a more general sense, \"immune\" can mean being protected or exempt from something. For example, if someone is said to be immune to criticism, it means they are unaffected or not bothered by it. In this context, it denotes a state of being resistant or impervious.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 34,
        "question": "Events in South Africa indicate a kind of political renaissance.",
        "options": ["rejuvenation", "decline", "turbulence", "upheaval"],
        "ans": "B",
        "main": "renaissance",
        "remark": "In a more general sense, \"renaissance\" can refer to any revival or rebirth of interest, activity, or growth in a particular field or area",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 35,
        "question": "If we must live together as one people, we must learn to tolerate disparate dispositions.",
        "options": ["converging", "accomodating", "conflicting", "opposing"],
        "ans": "A",
        "main": "disparate",
        "remark": "\"disparate\" is an adjective that describes things that are fundamentally different, unequal, or dissimilar in nature. When items, ideas, or entities are referred to as disparate, it means they lack a commonality or similarity and are often characterized by distinct or divergent qualities.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 36,
        "question": "The presidential aspirant warned of the political catastrophe that would follow if the election were rigged.",
        "options": ["problem", "turmoil", "success", "conflagration"],
        "ans": "C",
        "main": "catastrophe",
        "remark": "A \"catastrophe\" refers to a sudden and widespread disaster or an event causing significant and often widespread damage, upheaval, or suffering. It is a term used to describe a calamitous and disastrous occurrence that has severe and far-reaching consequences.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 37,
        "question": "The officer asked for a more temperate assessment of the matter.",
        "options": ["extreme", "moderate", "radical", "human"],
        "ans": "A",
        "main": "temperate",
        "remark": "In a more general sense, \"temperate\" can describe a person's behavior, attitude, or demeanor. When used in this context, it means someone who shows moderation, self-control, and a balanced approach. A temperate individual is not excessively emotional, impulsive, or extreme in their actions; they exhibit restraint and moderation.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 38,
        "question": "My father's advice to me was quite invaluable.",
        "options": ["useless", "useful", "helpful", "unsolicited"],
        "ans": "A",
        "main": "invaluable",
        "remark": "The term \"invaluable\" is an adjective used to describe something that is of such great worth or importance that it cannot be measured or assessed. In other words, if something is invaluable, it is extremely valuable, and its worth is beyond calculation or estimation.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 39,
        "question": "Musa hates Hadiza for her constant bellicose behavior.",
        "options": ["violent", "gentle", "meek", "troublesome"],
        "ans": "B",
        "main": "bellicose",
        "remark": "The term \"bellicose\" is an adjective used to describe a person, attitude, or demeanor that is characterized by a willingness to fight, engage in aggressive behavior, or demonstrate a hostile and warlike nature. A bellicose individual or stance is often associated with a readiness for conflict, confrontation, or aggression.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 40,
        "question": "There is much indifference in his behavior.",
        "options": ["nonchalance", "willingness", "inconsistency", "interest"],
        "ans": "D",
        "main": "indifference",
        "remark": "\"Indifference\" is a noun that refers to a lack of interest, concern, or sympathy toward something or someone. It describes a state of apathy or disinterest, where an individual or group shows little or no emotional or intellectual involvement in a particular matter. Indifference can manifest as a lack of caring, attention, or responsiveness.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 41,
        "question": "My brother married a loquacious woman",
        "options": ["quiet", "noisy", "talkative", "beautiful"],
        "ans": "A",
        "main": "loquacious",
        "remark": "The term \"loquacious\" is an adjective used to describe a person who is very talkative or chatty. A loquacious individual tends to talk at length and may be inclined to engage in conversations with others frequently.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 42,
        "question": "Most warring countries end up in a state of satiation.",
        "options": ["hunger", "thirst", "danger", "famine"],
        "ans": "A",
        "main": "satiation",
        "remark": "\"Satiation\" refers to the state of being fully satisfied or completely filled, often in the context of appetite, desire, or need. It signifies a point at which a person or thing has had enough or has reached a state of complete fulfillment.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 43,
        "question": "Abdul is fond of his teacher though he sometimes makes derogatory remarks about him.",
        "options": ["unpleasant", "complimentary", "expressive", "inconsiderate"],
        "ans": "B",
        "main": "derogatory",
        "remark": "\"Derogatory\" is an adjective used to describe statements, remarks, or expressions that are intended to belittle, disparage, or show a lack of respect for someone or something. Derogatory language or actions often express a low opinion, disrespect, or disdain, and they may be offensive or insulting.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 44,
        "question": "The Minister has finally been dropped from the present cabinet because of his ignoble act.",
        "options": ["criminal", "ignorant", "honorable", "selfish"],
        "ans": "C",
        "main": "ignoble",
        "remark": "\"Ignoble\" is an adjective that describes something lacking in moral principles, character, or dignity. It suggests behavior, actions, or qualities that are dishonorable, base, or unworthy of respect. ",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 45,
        "question": "His cruelty to his mother defies logical explanation.",
        "options": ["demands", "offers", "projects", "precludes"],
        "ans": "B",
        "main": "defies",
        "remark": "The term \"defies\" is a verb that means to resist or refuse to obey or accept something. When someone or something defies a rule, expectation, authority, or norm, it means they go against it or refuse to conform.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 46,
        "question": "Orinya balances the pail on her head with accustomed ease.",
        "options": ["convincing", "surprising", "unwary", "unusual"],
        "ans": "D",
        "main": "accustomed",
        "remark": "\"Accustomed\" is an adjective that describes being familiar with something, having become used to or habituated to a particular situation, practice, or condition. When someone is accustomed to something, it means they are familiar with it due to repeated exposure, and it has become a regular or expected part of their experience.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 47,
        "question": "They attacked all regulations designed to emasculate student militancy.",
        "options": ["condone", "isolate", "punish", "strengthen"],
        "ans": "D",
        "main": "emasculate",
        "remark": "<p>The term \"emasculate\" has a literal and a figurative meaning:</p>\n          <ul><li><strong>Literal meaning:</strong> In a literal sense, \"emasculate\" is a verb that means to deprive a male of his male qualities, particularly by removing the testicles. In the context of animals, this process is often referred to as \"castration.\"</li><li><strong>Figurative meaning:</strong> In a figurative or metaphorical sense, \"emasculate\" is used to describe the act of depriving someone or something of its strength, vigor, or effectiveness. It implies weakening or rendering something less potent, often in the context of reducing masculinity or strength.</li></ul>",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 48,
        "question": "There is no point dissipating energy on a useless argument",
        "options": ["destroying", "conserving", "marshalling", "storing"],
        "ans": "B",
        "main": "dissipating",
        "remark": "Dissipating generally means to scatter, disperse, or gradually vanish over time. The term is often used in various contexts to describe the gradual disappearance or spreading out of something, such as energy, resources, or a cloud.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 49,
        "question": "Everyone, including the Principal, believed that he was a very assiduous student.",
        "options": ["assertive", "industrious", "aggressive", "casual"],
        "ans": "D",
        "main": "assiduous",
        "remark": "\"Assiduous\" is an adjective used to describe someone who is diligent, persistent, and hardworking in their efforts or tasks. An assiduous person is characterized by careful and constant attention to a particular work or duty, showing a dedicated and industrious approach.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 50,
        "question": "My eldest brother is now faced with the vicissitudes of married life.",
        "options": ["amazement", "sweetness", "amiability", "stability"],
        "ans": "D",
        "main": "vicissitudes",
        "remark": "Vicissitudes refers to the unpredictable changes, fluctuations, or variations that occur as part of the natural course of life or a situation.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
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
        "ans": "B",
        "main": "flawless",
        "remark": "\"Flawless\" is an adjective used to describe something that is without any imperfections, defects, or shortcomings. When something is flawless, it is characterized by perfection, precision, and a complete absence of errors or flaws.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 52,
        "question": "The officer said that he knew nothing to the detriment of the applicant.",
        "options": ["damage", "disfavor", "advantage", "incurius", "careful"],
        "ans": "C",
        "main": "detriment",
        "remark": "\"Detriment\" is a noun that refers to the state of being harmed, damaged, or having a negative impact on something or someone. It denotes a disadvantage, harm, or loss that results from a particular action, situation, or condition.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 53,
        "question": "Common sense requires that one should be decorous at formal gatherings",
        "options": ["courteous", "impolite", "incurious", "careful"],
        "ans": "B",
        "main": "decorous",
        "remark": "\"Decorous\" is an adjective used to describe behavior, conduct, or appearance that is characterized by good taste, propriety, and respect for social norms. When someone or something is described as decorous, it means they exhibit proper manners, respect, and conformity to accepted standards of behavior.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 54,
        "question": "The string was taut.",
        "options": ["loose", "firm", "stretched", "tight"],
        "ans": "A",
        "main": "taut",
        "remark": "\"Taut\" is an adjective that describes something pulled or stretched tight, without any slack or looseness.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 55,
        "question": "The diminutive figure bounces over the track with unfathomable lightness..",
        "options": ["invigorating", "irresistible", "predictable", "impressive"],
        "ans": "C",
        "main": "unfathomable",
        "remark": "The term \"unfathomable\" is an adjective used to describe something that is difficult or impossible to understand, measure, or comprehend fully. It suggests a depth or complexity that exceeds the limits of human comprehension, making it seemingly impossible to fathom or grasp completely.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 56,
        "question": "The teacher announced that the class would be making a fleeting visit to the zoo.",
        "options": ["routine", "brief", "long", "guided"],
        "ans": "C",
        "main": "fleeting",
        "remark": "\"Fleeting\" is an adjective that describes something that is brief, transitory, or lasting for only a short duration. It implies a sense of quickness or impermanence, suggesting that the thing in question does not endure for an extended period.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 57,
        "question": "We intend to make the reception a diurnal event.",
        "options": ["nocturnal", "a weekly", "a short", "an annual"],
        "ans": "A",
        "main": "diurnal",
        "remark": "\"Diurnal\" is an adjective that refers to events or phenomena that occur during the day or are active during daylight hours. It is often used to describe things that have a daily cycle or are related to the daytime.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 58,
        "question": "The project is designed to alleviate poverty in the country.",
        "options": ["tackle", "exacerbate", "eradicate", "assuage"],
        "ans": "B",
        "main": "alleviate",
        "remark": "\"Alleviate\" is a verb that means to make a situation or a symptom less severe or more bearable. It involves lessening or mitigating the intensity, severity, or discomfort of something.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 59,
        "question": "It is surprising that this politician has now turned renegade.",
        "options": ["militant", "corrupt", "loyal", "quiet"],
        "ans": "C",
        "main": "renegade",
        "remark": "A \"renegade\" is a noun that refers to a person who has rejected or defied established conventions, authorities, or traditional beliefs, often by engaging in behavior that goes against accepted norms or expectations. The term is often associated with someone who rebels against or abandons a particular cause, group, or system.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 60,
        "question": "Hypertension is a debilitating disease that everyone should prevent.",
        "options": ["an enervating", "an energizing", "a horrible", "a mortal"],
        "ans": "B",
        "main": "debilitating",
        "remark": "\"Debilitate\" is a verb that means to weaken or impair the strength, effectiveness, or vitality of someone or something. When something is debilitating, it causes a significant and often long-lasting reduction in physical or mental capabilities.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 61,
        "question": "The striking workers have vowed not to return to work until the decision is rescinded",
        "options": ["changed", "dismissed", "implemented", "incorporated"],
        "ans": "C",
        "main": "rescinded",
        "remark": "\"Rescinded\" is a verb that refers to the action of revoking, canceling, or repealing a decision, order, law, agreement, or policy. When something is rescinded, it is officially annulled, and its legal or official status is reversed.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 62,
        "question": "I'm not interested in buying that shirt. I think it is overpriced.",
        "options": ["expensive", "overrated", "priceless", "cheap"],
        "ans": "D",
        "main": "overpriced",
        "remark": "Overprice is an adjective used to describe something that is priced higher than its perceived value or worth. When a product, service, or item is considered overpriced, it means that the cost is deemed excessive or not justified in relation to its quality, features, or market standards.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 63,
        "question": "Civil engineering is predominantly a male profession.",
        "options": ["absolutely", "essentially", "generally", "seldom"],
        "ans": "D",
        "main": "predominantly",
        "remark": "\"Predominant\" is an adjective used to describe something that is the most widespread, influential, or prevalent in a particular situation or context. When something is predominant, it holds a position of dominance or superiority compared to other elements.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 64,
        "question": "As these boys never act in public, the police are now worried about their covert activities.",
        "options": ["cryptic", "ignoble", "evil", "open"],
        "ans": "D",
        "main": "covert",
        "remark": "As an adjective, \"covert\" describes something that is kept secret or not easily seen. For example, a covert operation is a secret mission or undertaking that is not intended to be known by the general public.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 65,
        "question": "Some equatorial areas have a sultry climate.",
        "options": ["a temperate", "an inclement", "a stable", "a hot"],
        "ans": "A",
        "main": "sultry",
        "remark": "One common meaning of \"sultry\" is related to weather. It describes hot, humid conditions, often associated with a sense of oppressiveness. ",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 66,
        "question": "Updating the Board's brochure is an arduous task.",
        "options": ["an annual", "an easy", "a regular", "a difficult"],
        "ans": "B",
        "main": "arduous",
        "remark": "\"Arduous\" is an adjective used to describe something that requires a lot of effort, hard work, and is often challenging or strenuous. When a task, undertaking, or situation is described as arduous, it implies that it demands significant exertion, persistence, or difficulty.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 67,
        "question": "What a harmless thought he has!.",
        "options": ["pleasant", "pernicious", "perfect", "pertinent"],
        "ans": "B",
        "main": "harmless",
        "remark": "\"Harmless\" is an adjective used to describe something that does not cause harm, injury, or damage. Pernicious means harmful.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 68,
        "question": "In his naivety, he believed all the stories his friend told him.",
        "options": ["incredulity", "stupidity", "friendliness", "artlessness"],
        "ans": "A",
        "main": "naivety",
        "remark": "\"Naivety\" (or \"naiveté\") is a noun that refers to the quality or state of being naive. Naivety is characterized by a lack of experience, sophistication, or worldliness, often resulting in a tendency to believe things easily or to trust others without questioning their intentions. It can also be associated with innocence or simplicity.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 69,
        "question": "It is inconceivable that the rat devoured the cat.",
        "options": ["credible", "unimaginable", "contestable", "incomprehensible"],
        "ans": "A",
        "main": "inconceivable",
        "remark": "The term \"inconceivable\" is an adjective that describes something that is difficult or impossible to believe, imagine, or comprehend. When an idea or concept is considered inconceivable, it is so extreme, unlikely, or beyond comprehension that it is challenging for the mind to grasp or accept.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 70,
        "question": "Ali wondered why the principal was ambivalent about the student's future.",
        "options": ["decisive", "inconsiderate", "anxious", "ambituous"],
        "ans": "A",
        "main": "ambivalent",
        "remark": "\"Ambivalent\" is an adjective used to describe a state of having mixed or conflicting feelings, attitudes, or opinions about someone or something. When a person is ambivalent, they may experience simultaneous and opposing emotions or thoughts, making it challenging to express a clear and decisive stance.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 71,
        "question": "The teacher taught the rudiments of Chemistry to the first grade.",
        "options": ["advanced", "fundamentals", "elements", "basics"],
        "ans": "A",
        "main": "rudiments",
        "remark": "the word \"rudiments\" as used here refers to the basic or fundamental principles and elements of Chemistry. In this context, \"rudiments\" implies the introductory or foundational aspects of the subject that are essential for beginners to understand.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 72,
        "question": "The journalist's write-up contained a plethora of detail.",
        "options": ["simplicity", "spectrum", "shortage", "complexity"],
        "ans": "C",
        "main": "plethora",
        "remark": "\"Plethora\" is a noun that refers to an excessive or overabundant quantity of something. It indicates an abundance or surplus that goes beyond what is necessary or normal.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 73,
        "question": "The town was all agog at his unexpected return",
        "options": ["unexcited", "excited", "on fire", "surprised"],
        "ans": "A",
        "main": "agog",
        "remark": "\"Agog\" is an adjective used to describe a state of eager anticipation, excitement, or intense curiosity about something. When someone is described as being agog, it means they are highly enthusiastic, eager, or keenly interested in a particular event, news, or experience.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 74,
        "question": "The lecture seemed interminable.",
        "options": ["boring", "brief", "unending", "interesting"],
        "ans": "B",
        "main": "interminable",
        "remark": "\"Interminable\" is an adjective used to describe something that is seemingly endless, incessant, or seemingly without an apparent conclusion.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 75,
        "question": "In the latter part of his life, the famous soldier showed signs of youthfulness.",
        "options": ["senility", "energy", "vitality", "bravery"],
        "ans": "A",
        "main": "youthfulness",
        "remark": "\"Youthfulness\" is a noun that refers to the quality or state of being youthful. It encompasses characteristics associated with being young, such as vigor, energy, freshness, and a lack of the physical signs of aging",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 76,
        "question": "There is much apathy towards reading among students nowadays..",
        "options": ["indifference", "indecision", "disinclination", "enthusiasm"],
        "ans": "D",
        "main": "apathy",
        "remark": "\"Apathy\" is a noun that refers to a lack of interest, enthusiasm, or concern. It describes a state of indifference or emotional detachment, where an individual shows little or no interest or engagement in matters that would typically evoke emotions, passion, or motivation.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 77,
        "question": "The witness averred that she had seen Dosun at the scene of the crime.",
        "options": ["argued", "confirmed", "denied", "affirmed"],
        "ans": "C",
        "main": "averred",
        "remark": "\"Averred\" is the past tense of the verb \"aver,\" which means to assert or affirm with confidence. When someone avers a statement, they state it strongly or declare it to be true",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 78,
        "question": "The high cost of living these days calls for a lot of frugality.",
        "options": ["extravagance", "economy", "recklessness", "prudence"],
        "ans": "A",
        "main": "frugality",
        "remark": "\"Frugality\" is a noun that refers to the quality or state of being economical, thrifty, and mindful of expenses. It involves the wise and judicious use of resources, including money, in order to avoid waste and unnecessary spending.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 79,
        "question": "Tunde's reaction underscores the point I was making",
        "options": ["justifies", "emphasizes", "summarizes", "contradicts"],
        "ans": "D",
        "main": "underscores",
        "remark": "As a verb, \"underscores\" means to emphasize, highlight, or draw attention to something. In this sense, it indicates the act of stressing the importance or significance of a particular point.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 80,
        "question": "Everyone admired the manager's adroit handling of the crises in the company",
        "options": ["clever", "tactless", "skillful", "clumsy"],
        "ans": "B",
        "main": "adroit",
        "remark": "\"Adroit\" is an adjective used to describe someone who is skillful, clever, or adept at performing tasks, particularly those that require manual dexterity, intelligence, or finesse. An adroit individual is often able to handle situations with ease and efficiency.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 81,
        "question": "The principal took exception to the ignoble role the teacher played in the matter",
        "options": ["embarassing", "honorable", "extraordinary", "dishonorable"],
        "ans": "B",
        "main": "ignoble",
        "remark": "The term \"ignoble\" is an adjective that describes something or someone characterized by a lack of honor, decency, or moral principles. It suggests actions or qualities that are shameful, dishonorable, or base. An ignoble act or person is often associated with actions or behaviors that go against accepted standards of morality or virtue. It can also imply actions that are mean-spirited, unprincipled, or unworthy of respect.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 82,
        "question": "He is notorious for his drunkenness",
        "options": ["popular", "known", "well known", "renowned"],
        "ans": "D",
        "main": "notorious",
        "remark": "The term \"notorious\" is an adjective used to describe someone or something that is widely known, typically for unfavorable or infamous reasons.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 83,
        "question": "The chairman's conduct redounds to the image of the company",
        "options": ["assists in", "reflects on", "contributes to", "detracts from"],
        "ans": "D",
        "main": "redounds to",
        "remark": "The term \"redound\" is a verb that means to have an effect or consequence, typically used in the context of something contributing to or benefiting someone or something.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 84,
        "question": "Her phlegmatic temperament endears her to her friends",
        "options": ["stoic", "irritable", "lively", "cold"],
        "ans": "C",
        "main": "phlegmatic",
        "remark": "\"Phlegmatic\" is an adjective used to describe a personality or temperament characterized by calmness, sluggishness, and an overall lack of emotional responsiveness. A person with a phlegmatic temperament tends to be calm, composed, and unemotional, often displaying a cool and steady demeanor in various situations. ",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 85,
        "question": "The workers suddenly became restive",
        "options": ["fidgety", "disorderly", "submissive", "calm"],
        "ans": "D",
        "main": "restive",
        "remark": "\"Restive\" is an adjective that describes a state of impatience, uneasiness, or resistance to control or restraint. ",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
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
        "ans": "C",
        "main": "unprecedented",
        "remark": "\"Unprecedented\" implies something that has not occurred before, is exceptional, or is without precedent.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 87,
        "question": "The athlete has unexpectedly become indomitable",
        "options": ["weak", "disoriented", "unruly", "unconquerable"],
        "ans": "A",
        "main": "indomitable",
        "remark": "\"Indomitable\" is an adjective used to describe a person, spirit, or attitude that cannot be subdued, overcome, or defeated. It conveys a sense of resilience, strength, and determination in the face of challenges or adversity. An indomitable spirit remains unyielding and steadfast, refusing to be conquered or broken.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 88,
        "question": "The evidence the leader gave was incontrovertible",
        "options": ["indubitable", "contestable", "practicable", "logical"],
        "ans": "B",
        "main": "incontrovertible",
        "remark": "The term \"incontrovertible\" is an adjective used to describe something that is unquestionable, indisputable, or beyond doubt. When applied to a fact, argument, or evidence, it means that there is no room for disagreement or debate because the information is clear, evident, and cannot be disputed. ",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 89,
        "question": "The President gave another extemporaneous speech last Friday",
        "options": ["unprepared", "fascinating", "planned", "unfavorable"],
        "ans": "C",
        "main": "extemporaneous",
        "remark": "\"Extemporaneous\" is an adjective used to describe something that is done, spoken, or performed without preparation or rehearsal. It often refers to impromptu or off-the-cuff actions, speeches, or performances that are carried out on the spot or without prior planning. ",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 90,
        "question": "Only those who are gullible will fall victim to his trickery.",
        "options": ["saucy", "devastated", "courteous", "astute"],
        "ans": "D",
        "main": "gullible",
        "remark": "\"Gullible\" is an adjective used to describe someone who is easily deceived or believes things without sufficient evidence.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 91,
        "question": "He is well known for his inordinate ambition.",
        "options": ["excessive", "passionate", "moderate", "sound"],
        "ans": "C",
        "main": "inordinate",
        "remark": "The term \"inordinate\" is an adjective that describes something that exceeds normal or reasonable limits, often suggesting an excessive or disproportionate amount. It implies a lack of restraint, balance, or moderation.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 92,
        "question": "Students could be timid.",
        "options": ["bold", "friendly", "covetuous", "pugnacious"],
        "ans": "A",
        "main": "timid",
        "remark": "\"Timid\" is an adjective used to describe someone who lacks self-confidence, is easily frightened, or tends to be shy and hesitant in social situations. ",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 93,
        "question": "The witness decided to conceal the evidence.",
        "options": ["divulge", "hide", "destroy", "pugnacious"],
        "ans": "A",
        "main": "conceal",
        "remark": "The verb \"conceal\" means to hide or keep something secret, away from the view or knowledge of others. When you conceal something, you intentionally prevent it from being seen, known, or discovered. This act may involve physically hiding an object, information, or one's feelings, or it could involve actions to keep something from public knowledge or attention. Concealing is often done with the intention of maintaining privacy, avoiding disclosure, or preserving the confidentiality of certain matters.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 94,
        "question": "The member of the congregation were inspired by the ovation.",
        "options": ["bewitched", "enthralled", "disenchanted", "disoriented"],
        "ans": "C",
        "main": "inspired",
        "remark": "The term \"inspired\" is an adjective used to describe someone or something that has been influenced, motivated, or stimulated by creative or uplifting ideas. When a person is inspired, they may feel a surge of motivation, enthusiasm, or creativity.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 95,
        "question": "Agbenu was ecstatic abOut her result.",
        "options": ["disappointed", "sad", "pessimistic", "mad"],
        "ans": "B",
        "main": "ecstatic",
        "remark": "\"Ecstatic\" is an adjective used to describe a state of overwhelming joy, delight, or intense happiness.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 96,
        "question": "The labor leader's recalcitrant stance was applauded.",
        "options": ["stubborn", "flexible", "uncompromising", "well informed"],
        "ans": "B",
        "main": "recalcitrant",
        "remark": "it is an adjective used to describe a person or thing that is resistant to authority or control, often disobedient or uncooperative. A recalcitrant individual is stubborn, unwilling to comply with rules or authority, and tends to resist attempts to be managed or influenced.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 97,
        "question": "A cool bath in a hot weather can be truly invigorating.",
        "options": ["devastating", "unpalatable", "debilitating", "disgusting"],
        "ans": "C",
        "main": "invigorating",
        "remark": "\"Invigorating\" is an adjective that describes something that has a refreshing, revitalizing, or energizing effect.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 98,
        "question": "I am loath to do the assignment.",
        "options": ["willing", "waiting", "dying", "unwilling"],
        "ans": "A",
        "main": "loath",
        "remark": "\"Loathe\" is a verb that means to feel intense dislike or disgust for someone or something. When a person loathes something, they have a strong aversion or repulsion towards it.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 99,
        "question": "Toyin is married to an impatient, self-centered man.",
        "options": ["a fretful", "a tolerant", "an edgy", "a tolerable"],
        "ans": "B",
        "main": "impatient",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 100,
        "question": "Gregarious animals can be found in the zoo.",
        "options": ["Various", "Wild", "Lonely", "Tame"],
        "ans": "C",
        "main": "Gregarious",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 101,
        "question": "The doctor examined the patient painstakingly.",
        "options": ["perfunctorily", "professionally", "painfully", "carefully"],
        "ans": "A",
        "main": "painstakingly",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 102,
        "question": "A conservative estimate put the number of missing persons at forty.",
        "options": ["A rough", "An accurate", "A primitive", "An incorrect"],
        "ans": "B",
        "main": "conservative",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 103,
        "question": "The agency has sworn to deal with all the apostles of confededration..",
        "options": ["proponents", "protagonists", "apostates", "opponents"],
        "ans": "D",
        "main": "apostles",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 104,
        "question": "The ship was imperilled by high winds.",
        "options": ["destroyed", "saved", "piloted", "received"],
        "ans": "B",
        "main": "imperilled",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 105,
        "question": "Sailors are unusually dauntless in their exploits.",
        "options": ["frighted", "selfless", "ruthless", "excited"],
        "ans": "A",
        "main": "dauntless",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 106,
        "question": "The Flying Eagles put up a plucky defense against their opponents.",
        "options": ["careless", "tactful", "weak", "strong"],
        "ans": "C",
        "main": "plucky",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 107,
        "question": "The noise of the fans unnerved the near player.",
        "options": ["confused", "helped", "calmed", "refreshed"],
        "ans": "C",
        "main": "unnerved",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 108,
        "question": "Beauty queens sometime wear outlandish dresses.",
        "options": ["attractive", "beautiful", "flashy", "familiar"],
        "ans": "D",
        "main": "outlandish",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 109,
        "question": "The dictator want tractable men in his cabinet.",
        "options": ["unruly", "tough", "reliable", "intelligent"],
        "ans": "A",
        "main": "tractable",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 110,
        "question": "We found a shady place for the display.",
        "options": ["a stuffy", "an enclosed", "a safe", "an open"],
        "ans": "D",
        "main": "shady",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 111,
        "question": "The potency of the drug has been acknowledged.",
        "options": ["inefficacy", "power", "action"],
        "ans": "A",
        "main": "potency",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 112,
        "question": "My father's presentation was rather casual.",
        "options": ["vital", "divisive", "formal", "informal"],
        "ans": "A",
        "main": "casual",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 113,
        "question": "The team got an ecstatic welcome from the crowd.",
        "options": ["a thunderous", "a cold", "a joyous", "an unexpected"],
        "ans": "B",
        "main": "ecstatic",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 114,
        "question": "After the war, the victors became increasingly vindictive.",
        "options": ["arrogant", "treacherous", "friendly", "vociferous"],
        "ans": "C",
        "main": "vindictive",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 115,
        "question": "The journalist said he was working freelance.",
        "options": ["without a pay", "dependently", "tirelessly", "vociferously"],
        "ans": "B",
        "main": "freelance",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 116,
        "question": "After fifty years he could not find anyone who was contemporary with him at college.",
        "options": [
          "friendly with",
          "contested against",
          "strange to",
          "belong to"
        ],
        "ans": "C",
        "main": "contemporary",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 117,
        "question": "The man who scared the girl was a bit deranged.",
        "options": ["dangerous", "crazy", "sane", "amorous"],
        "ans": "C",
        "main": "deranged",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 118,
        "question": "Many Nigerians are wary of night journeys.",
        "options": [
          "unscared of",
          "worried about",
          "troubled about",
          "satisfied with"
        ],
        "ans": "A",
        "main": "wary of",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 119,
        "question": "Some people consider the leather upholstery and thick rug a bit sumptuous.",
        "options": ["simple", "lavish", "expensive", "desirable"],
        "ans": "A",
        "main": "sumptuous",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 120,
        "question": "The proprietor accused Uche of silently acquiescing to the students demand.",
        "options": ["adjusting", "resisting", "compromising", "submitting"],
        "ans": "B",
        "main": "aquiescing",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 121,
        "question": "The teacher recounted two events that were analogous with each other.",
        "options": [
          "advantageous",
          "similar with",
          "different from",
          "distant from"
        ],
        "ans": "C",
        "main": "analogous",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 122,
        "question": "The doctor was very gentle with his patients in the examining room.",
        "options": ["harsh", "rude", "rough", "unkind", "callous"],
        "ans": "A",
        "main": "gentle",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 123,
        "question": "James is a disco-addict. He takes his studies rather lightly.",
        "options": [
          "humorously",
          "gloomily",
          "tediously",
          "carefully",
          "seriously"
        ],
        "ans": "E",
        "main": "lightly",
        "remark": "lightly = non-chalantly, lackadaisically",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 124,
        "question": "My cousin is very lazy. He will not take his studies seriously. His future looks quite bleak.",
        "options": ["cloudly", "cheerless", "bright", "huge", "sturdy"],
        "ans": "C",
        "main": "bleak",
        "remark": "bleak means uncertain",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 125,
        "question": "While most of our recently elected legislators are living a life of affluence and ostentation, the vast majority of those who elected them into office are unhappy.",
        "options": ["influence", "pleasure", "poverty", "happiness", "consequence"],
        "ans": "C",
        "main": "affluence",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 126,
        "question": "It is generally believed that misers are not loved by many.",
        "options": ["spendthrifts", "spenders", "hoarders", "savers", "thieves"],
        "ans": "A",
        "main": "misers",
        "remark": "A spender (B) does not necessarily spend a lot of money unless otherwise revealed by an adjective. e.g 'a big spender.'",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 127,
        "question": "My brother's primary school foundation was solid and this affected his secondary education",
        "options": ["sound", "sordid", "shaky", "weak", "uneventful"],
        "ans": "D",
        "main": "solid",
        "remark": "solid means strong",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 128,
        "question": "Politicians and holders of political appointments are generally asssumed to be cunny",
        "options": ["kind", "straightforward", "generous", "even-handed", "sly"],
        "ans": "B",
        "main": "cunny",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 129,
        "question": "The long straight trunk of the tree is ideal for round wood uses like railway sleepers, rafters and fence posts.",
        "options": ["best", "perfect", "mostly unsuitable", "satisfactory", "poor"],
        "ans": "C",
        "main": "ideal",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 130,
        "question": "A book on style without abundant examples seems to me as ineffectual as a book on biology without abundant illustrations.",
        "options": [
          "useless",
          "difficult",
          "interesting",
          "satisfactory",
          "attractive"
        ],
        "ans": "D",
        "main": "ineffectual",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 131,
        "question": "To most people last Christmas was an austere period.",
        "options": ["prosperous", "harsh", "severe", "sour", "stern"],
        "ans": "A",
        "main": "austere",
        "remark": "Austerity means a state of bad economic condition when people have little money",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 132,
        "question": "The chief was generous in his award of university scholarships",
        "options": ["noble", "considerate", "liberal", "mean", "honest"],
        "ans": "D",
        "main": "generous",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 133,
        "question": "Chidi is naturally taciturn.",
        "options": ["friendly", "cheerful", "dumb", "lively", "garrulous"],
        "ans": "E",
        "main": "taciturn",
        "remark": "garrulous means talking too much. Talkative.",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 134,
        "question": "He is loved for his altruism.",
        "options": [
          "benevolence",
          "sincerity",
          "selfishness",
          "selflessness",
          "kindness"
        ],
        "ans": "C",
        "main": "altruism",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 135,
        "question": "The Military Governor upheld the decision of his cabinet.",
        "options": ["held up", "undercut", "maintained", "abolished", "reversed"],
        "ans": "E",
        "main": "upheld",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 136,
        "question": "Many untrustworthy students give evasive answers to questions which they fully understand.",
        "options": ["direct", "outspoken", "simple", "truthful", "clever"],
        "ans": "A",
        "main": "evasive",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 137,
        "question": "The deafening noise of the two jet planes which flew across our compound yesterday made people fear that an assault on the country might be imminent.",
        "options": ["impending", "ahead", "remote", "eminent", "threatening"],
        "ans": "C",
        "main": "imminent",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 138,
        "question": "Disgruntled people are indifferent to any plans to rid the society of evil",
        "options": [
          "different from",
          "diffident about",
          "in agreement with",
          "interested in",
          "opposed to"
        ],
        "ans": "D",
        "main": "indifferent",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 139,
        "question": "The severity of the harmattan helped me to complete my writing assignment in record time because I had no choice but to lock myself indoors.",
        "options": ["warmth", "mildness", "moderation", "leniency", "gentility"],
        "ans": "B",
        "main": "severity",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 140,
        "question": "The increase in transport fares deterred our club from planning an excursion this year..",
        "options": ["deferred", "irritated", "impelled", "restricted", "encourage"],
        "ans": "E",
        "main": "deterred",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 141,
        "question": "This card entitles you to attend the film show.",
        "options": [
          "disqualifies",
          "discourages",
          "disenchants",
          "proclaims",
          "satisfies"
        ],
        "ans": "A",
        "main": "entitles",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 142,
        "question": "This is an abridged edition of Oliver Twist",
        "options": ["enlarged", "outdated", "extinct", "reprinted", "banned"],
        "ans": "A",
        "main": "abridged",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 143,
        "question": "Mr. Jack was most flexible in his instructions.",
        "options": ["rigid", "correct", "stiff", "upright"],
        "ans": "A",
        "main": "flexible",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 144,
        "question": "The university has offered temporary accomodation to its staff.",
        "options": ["popular", "permanent", "recognized", "regular"],
        "ans": "B",
        "main": "temporary",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 145,
        "question": "Mary complained that she slept on the coarse floor",
        "options": ["smooth", "rough", "bad", "harsh"],
        "ans": "A",
        "main": "coarse",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 146,
        "question": "The Governor declined to give audience to the journalist",
        "options": ["ignored", "accepted", "forgot", "rejected"],
        "ans": "B",
        "main": "declined",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 147,
        "question": "The debtor's husband is liable for his wife's debts",
        "options": ["unanswerable", "responsible", "unquestionable", "accountable"],
        "ans": "A",
        "main": "liable",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 148,
        "question": "The lotion recommended by the doctor soothed Okon's aching tooth",
        "options": ["calmed", "extracted", "excited", "worsened"],
        "ans": "D",
        "main": "soothed",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 149,
        "question": "The sun cast its shadow on the wall",
        "options": ["reflection", "rays", "resemblance", "substance"],
        "ans": "B",
        "main": "shadow",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 150,
        "question": "The lady acted courageously when thieves attacked her",
        "options": ["shyly", "fearlessly", "indiscreetly", "timidly"],
        "ans": "D",
        "main": "courageously",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 151,
        "question": "Unless we see the evils clearly, contending against them is like fighting the air",
        "options": ["avoiding", "struggling with", "combating", "repelling"],
        "ans": "A",
        "main": "contending",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 152,
        "question": "The explosive growth of world population has not been caused by a sudden increase in human fertility",
        "options": ["fantastic", "gradual", "combustible", "dangerous"],
        "ans": "B",
        "main": "explosive",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 153,
        "question": "It is generally believed that misers are not loved by many",
        "options": ["spendthrifts", "spenders", "hoarders", "savers"],
        "ans": "A",
        "main": "misers",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 154,
        "question": "Our government is making determined efforts to eradicate illiteracy.",
        "options": ["compulsory", "ineffective", "innocent", "unreliable"],
        "ans": "B",
        "main": "determined",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 155,
        "question": "My brother's primary school foundation was solid and this influenced his secondary education.",
        "options": ["sound", "sordid", "shaky", "weak"],
        "ans": "D",
        "main": "solid",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 156,
        "question": "Makerere University has a large intake of students each year.",
        "options": ["rejection", "product", "output", "turnout"],
        "ans": "D",
        "main": "intake",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 157,
        "question": "Florence flogged the girl reluctantly",
        "options": ["eagerly", "calmly", "furiously", "laboriously"],
        "ans": "A",
        "main": "reluctantly",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 158,
        "question": "Sola's car is badly damaged; he has to look for an expert mechanic to fix it.",
        "options": ["uneducated", "amateurish", "awkward", "unscientific"],
        "ans": "B",
        "main": "expert",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 159,
        "question": "Coastal plains are often very densely populated.",
        "options": ["badly", "rarely", "sparsely", "weakly"],
        "ans": "C",
        "main": "densely",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 160,
        "question": "WIlfred was a mindless criminal",
        "options": ["strong", "mindful", "feeling", "memorable"],
        "ans": "B",
        "main": "mindless",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 161,
        "question": "The theives vandalized the vault's lock",
        "options": ["repaired", "arranged", "serviced", "actuated"],
        "ans": "A",
        "main": "vandalized",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 162,
        "question": "The angry waves swallowed the boat.",
        "options": ["gentle", "unruffled", "cool", "serene"],
        "ans": "A",
        "main": "angry",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 163,
        "question": "Lola was agitated when the sad news of her mother's accident was broken to her.",
        "options": ["excited", "calm", "uncontrollable", "unreasonable"],
        "ans": "B",
        "main": "agitated",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 164,
        "question": "Though his parents' poverty placed many obstacles in his path as a young man, Olu succeeded at last.",
        "options": ["hurdles", "advantages", "temptatins", "diversions"],
        "ans": "B",
        "main": "obstacles",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 165,
        "question": "BInta sobbed by the door because she had lost her mother's precious necklace.",
        "options": ["cried", "smiled", "wept", "laughed"],
        "ans": "D",
        "main": "sobbed",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 166,
        "question": "The president took exception to the ignoble role the young man played in the matter",
        "options": ["honorable", "embarassing", "dishonorable", "extraordinary"],
        "ans": "A",
        "main": "ignoble",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 167,
        "question": "The man who had been seriously ill was convalescing at a sea-side resort.",
        "options": [
          "regaining health",
          "deteriorating in health",
          "recuperating",
          "relaxing"
        ],
        "ans": "B",
        "main": "convalescing",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 168,
        "question": "For million of years, the world's resources have remained boundless.",
        "options": ["unlimited", "scarce", "indomitable", "limited"],
        "ans": "D",
        "main": "boundless",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 169,
        "question": "It seems fashionable, in some quarters today, to decry examinations and the ability to pass them.",
        "options": ["extol", "abuse", "entreat", "discourage"],
        "ans": "A",
        "main": "decry",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 170,
        "question": "Ogedegbe was an intrepid fighter for human freedom and dignity.",
        "options": ["timid", "half-hearted", "fearless", "undaunted"],
        "ans": "A",
        "main": "intrepid",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 171,
        "question": "The difference between the experimental procedures was imperceptible to me",
        "options": ["negligible", "significant", "obvious", "observe"],
        "ans": "C",
        "main": "imperceptible",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 172,
        "question": "His antipathy to religious ideas makes him unpopular",
        "options": ["remedy", "consciousness", "hostility", "receptiveness"],
        "ans": "D",
        "main": "antipathy",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 173,
        "question": "My father is a very prosperous businessman.",
        "options": ["ungrateful", "unscrupulous", "unskillful", "unsuccessful"],
        "ans": "D",
        "main": "prosperous",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 174,
        "question": "THe hostess greeted her guests in a very relaxed manner",
        "options": ["enrgetic", "athletic", "stiff", "perplexed"],
        "ans": "A",
        "main": "relaxed",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 175,
        "question": "Ayo takes his studies rather lightly.",
        "options": ["humorously", "tediously", "carefully", "seriously"],
        "ans": "D",
        "main": "lightly",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 176,
        "question": "The doctor was very gentle with his patients in the examining room.",
        "options": ["harsh", "rude", "tough", "unkind"],
        "ans": "A",
        "main": "gentle",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 177,
        "question": "Ojo's response infuriated his wife.",
        "options": ["annoyed", "pleased", "surprised", "confused"],
        "ans": "B",
        "main": "infuriated",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 178,
        "question": "He accepted a mundane task without hesitation.",
        "options": ["great", "lowly", "menial", "moderate"],
        "ans": "A",
        "main": "mundane",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 179,
        "question": "It is a unique opportunity for her to demonstrate the reality of her faith.",
        "options": ["strange", "usual", "golden", "unusual"],
        "ans": "B",
        "main": "unique",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 180,
        "question": "Her identification with the king is publicly known.",
        "options": ["hatred", "disassociation", "relationship", "intimacy"],
        "ans": "B",
        "main": "identification",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 181,
        "question": "The economic situation in the country is obviously gloomy",
        "options": ["encouraging", "moody", "unknown", "regrettable"],
        "ans": "A",
        "main": "gloomy",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 182,
        "question": "One wonders if the situation will improve",
        "options": ["brighten", "diminish", "disintegrate", "worsen"],
        "ans": "D",
        "main": "improve",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 183,
        "question": "Language teachers believe that grammer exercises stretch the mind",
        "options": ["expand", "ruin", "enrich", "restrict"],
        "ans": "D",
        "main": "stretch",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 184,
        "question": "These two books are identical",
        "options": ["alike", "similar", "different", "equal"],
        "ans": "C",
        "main": "identical",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 185,
        "question": "The doctor tried to alleviate his patients pain",
        "options": ["relieve", "worsen", "kill", "cure"],
        "ans": "B",
        "main": "alleviate",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 186,
        "question": "The instructions on the examination paper are explicit",
        "options": ["simple", "ambigous", "detailed", "definite"],
        "ans": "B",
        "main": "explicit",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 187,
        "question": "Okoro is an amateur wrestler",
        "options": ["skillful", "good", "professional", "strong"],
        "ans": "C",
        "main": "amateur",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 188,
        "question": "The effect of rising prices has snowballed considerably",
        "options": ["risen", "decreased", "frozen", "grown"],
        "ans": "B",
        "main": "snowballed",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 189,
        "question": "THe economic situation is responsible for the recent discord in many families.",
        "options": ["division", "resourcefulness", "harmony", "suffering"],
        "ans": "C",
        "main": "discord",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 190,
        "question": "The college was worried about Tunji's garrulous tendencies",
        "options": ["reticent", "loquacious", "quarrelsome", "outspoken"],
        "ans": "A",
        "main": "garrulous",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 191,
        "question": "Surveying the sky in the quiet of the night gives me an ethereal feeling.",
        "options": ["human", "earthly", "mundane", "commonplace"],
        "ans": "B",
        "main": "ethereal",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 192,
        "question": "The awareness of mortality has always imposed some restaint on man's excesses",
        "options": ["celestiality", "eternity", "continuity", "in existence"],
        "ans": "B",
        "main": "mortality",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 193,
        "question": "The decision we have taken is irrevocable.",
        "options": ["responsible", "irresponsible", "reversible", "irreversible"],
        "ans": "C",
        "main": "irrevocable",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 194,
        "question": "The lawyer pointed out a discrepancy in the two stories",
        "options": ["similarity", "gap", "falsehood", "difference"],
        "ans": "A",
        "main": "discrepancy",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 195,
        "question": "Their high level of dishonesty has made that department infamous in the entire secretariat.",
        "options": ["reputable", "notorious", "unpopular", "acceptable"],
        "ans": "A",
        "main": "infamous",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 196,
        "question": "The paper carries many humourous cartoons on Saturdays.",
        "options": ["amorous", "grievous", "hilarious", "grave"],
        "ans": "D",
        "main": "humourous",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 197,
        "question": "All through his years in public office, he found his father's advice invaluable.",
        "options": ["priceless", "hopeless", "worthless", "helpful"],
        "ans": "C",
        "main": "invaluable",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 198,
        "question": "The lecturer was merely obfuscating the issue with his endless examples",
        "options": ["complicating", "clarifying", "confusing", "summarizing"],
        "ans": "B",
        "main": "obfuscating",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 199,
        "question": "Such measures end up exacerbating the pain",
        "options": ["aggravating", "increasing", "eliminating", "alleviating"],
        "ans": "D",
        "main": "exacerbating",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 200,
        "question": "In a sentence, there must always be concord between a subject and its verb.",
        "options": ["breach", "departure", "disagreement", "dispute"],
        "ans": "C",
        "main": "concord",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 201,
        "question": "In the course of the debate, the speakers were advised to summarize their points",
        "options": ["argue", "develop", "round off", "round up"],
        "ans": "B",
        "main": "summarize",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 202,
        "question": "We should discourage further investment in existing factories",
        "options": ["productive", "prosperous", "prospective", "precious"],
        "ans": "C",
        "main": "existing",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 203,
        "question": "Nigeria is gradually experiencing economic recession",
        "options": ["birth", "discovery", "recovery", "destruction"],
        "ans": "C",
        "main": "recession",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 204,
        "question": "Good students can easily identify spurious",
        "options": ["genuine", "interesting", "false", "illogical"],
        "ans": "A",
        "main": "spurious",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 205,
        "question": "Eze's skin now looks flabby as a result of his changed circumstances.",
        "options": ["neat", "firm", "weak", "oily"],
        "ans": "B",
        "main": "flabby",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 206,
        "question": "He and his lieutenants have been accused of remaining intransigent",
        "options": ["rigid", "stubborn", "comprosing", "popular"],
        "ans": "C",
        "main": "intransigent",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 207,
        "question": "In the opinion of most observers, it was a disinterested decision.",
        "options": ["neutral", "impartial", "biased", "candid"],
        "ans": "C",
        "main": "disinterested",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 208,
        "question": "We watched in wonder as she rattled away in the esoteric language",
        "options": ["inscrutable", "familiar", "secret", "obscure"],
        "ans": "B",
        "main": "esoteric",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 209,
        "question": "Many species in creation have mutated over the years into new forms of life.",
        "options": ["stabilized", "manifested", "transformed", "standardized"],
        "ans": "A",
        "main": "mutated",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 210,
        "question": "His textile business deals are ingress",
        "options": ["wholesale", "imported", "retailed", "exported"],
        "ans": "D",
        "main": "ingress",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 211,
        "question": "The government is intiating new effective programmes to boost production",
        "options": ["ending", "reviewing", "rearranging", "terminating"],
        "ans": "D",
        "main": "initiating",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 212,
        "question": "The culprit unwittingly subjected himself to great  humiliation.",
        "options": ["cunningly", "curiously", "foolishly", "subtly"],
        "ans": "A",
        "main": "unwittingly",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 213,
        "question": "In his quest for solidarity, the party leader undertook a nationwide tour.",
        "options": ["unity", "resistance", "mobilization", "reorganization"],
        "ans": "B",
        "main": "solidarity",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 214,
        "question": "Our party is wieding potent political power.",
        "options": ["assuming", "renouncing", "restoring", "reappraising"],
        "ans": "B",
        "main": "wieding",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 215,
        "question": "The ruler expects full allegiance from his subjects at all times.",
        "options": ["obedience", "homage", "disloyalty", "disapproval"],
        "ans": "C",
        "main": "allegiance",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 216,
        "question": "In spite of many days of fasting, Musa is still fastidious about his food",
        "options": ["particular", "undecided", "indifferent", "unmindful"],
        "ans": "D",
        "main": "fastidious",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 217,
        "question": "The leader called for concerted efforts in order to get over the problems.",
        "options": ["combined", "definite", "disparate", "isolated"],
        "ans": "C",
        "main": "concerted",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 218,
        "question": "The video tape recorder was made obsolete by the introduction of the satellite dish.",
        "options": ["antiquated", "useless", "fashionable", "functional"],
        "ans": "C",
        "main": "obsolete",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 219,
        "question": "Segun is somebody who always follows his own inclinations.",
        "options": ["impulses", "aversions", "dispositions", "deviations"],
        "ans": "B",
        "main": "inclinations",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 220,
        "question": "Okonkwo's lethal right foot did the magic in the football match.",
        "options": ["weak", "wicked", "fat", "harmless"],
        "ans": "D",
        "main": "lethal",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 221,
        "question": "As an idiot, the boy is weak in class.",
        "options": ["a deviant", "a dunce", "an expert", "a genius"],
        "ans": "D",
        "main": "idiot",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 222,
        "question": "We were shocked by the news that he had lost the money.",
        "options": ["astonished", "disconcerted", "unconcerned", "surprised"],
        "ans": "C",
        "main": "shocked",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 223,
        "question": "The principal was advised to be flexible on critical issues.",
        "options": ["livid", "cautious", "evasive", "rigid"],
        "ans": "D",
        "main": "flexible",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 224,
        "question": "Bola always looks sober.",
        "options": ["excited", "serious", "worried", "helpless"],
        "ans": "A",
        "main": "sober",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 225,
        "question": "Dupe was promoted for her efficiency.",
        "options": ["ability", "incompetence", "inconsistency", "rudeness"],
        "ans": "B",
        "main": "efficiency",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 226,
        "question": "The management wants to consider her reticent behaviour in due course.",
        "options": [
          "disapproving",
          "disciplinarian",
          "contemplative",
          "loquacious"
        ],
        "ans": "D",
        "main": "reticent",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 227,
        "question": "Election processes often become volatile.",
        "options": ["calm", "strange", "sudden", "latent"],
        "ans": "A",
        "main": "volatile",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 228,
        "question": "Oche entered the principal's office in a rather abrasive manner.",
        "options": ["gentle", "rude", "lackadaisical", "indifferent"],
        "ans": "A",
        "main": "abrasive",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 229,
        "question": "Otokpa is a member of the ad hoc committee on stock acquisition.",
        "options": ["improvised", "formal", "temporary", "fact-finding"],
        "ans": "B",
        "main": "ad hoc",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 230,
        "question": "His gift to the poor was always infinitesimal.",
        "options": ["large", "small", "supportive", "shameful"],
        "ans": "A",
        "main": "infinitesimal",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 231,
        "question": "The economist concluded that several factors have been adduced to explain the fall in the birth rate.",
        "options": ["affirmed", "diffused", "mentioned", "refuted"],
        "ans": "D",
        "main": "adduced",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 232,
        "question": "The presidential system is an antidote to some political ailments.",
        "options": ["an answer", "a reply", "an inquiry", "an obstacle"],
        "ans": "D",
        "main": "antidote",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 233,
        "question": "He is very much respected, though he had no temporal power.",
        "options": ["spiritual", "mundane", "permanent", "ephemeral"],
        "ans": "A",
        "main": "temporal",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 234,
        "question": "Ola thought that her father was callous.",
        "options": ["parious", "compassionate", "wicked", "cheerful"],
        "ans": "B",
        "main": "callous",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 235,
        "question": "Prolonged strike action debilitated the industry.",
        "options": ["invigorated", "isolated", "weakened", "destroyed"],
        "ans": "A",
        "main": "debilitated",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 236,
        "question": "One of the students bought a plagiarized copy of the book.",
        "options": ["a used", "an original", "a revised", "an annotated"],
        "ans": "B",
        "main": "plagiarized",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 237,
        "question": "The young girl was taken aback by her father's gift of a car.",
        "options": ["shocked", "unmoved", "surprised", "non-plussed"],
        "ans": "B",
        "main": "taken aback",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 238,
        "question": "Musa is a gifted but erratic player.",
        "options": ["strong", "regular", "unpredictable", "unstable"],
        "ans": "B",
        "main": "erratic",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 239,
        "question": "The lamp shades were transclucent.",
        "options": ["opaque", "intersected", "luminous", "transparent"],
        "ans": "A",
        "main": "transclucent",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 240,
        "question": "My niece has an unquenchable thirst for adventure stories.",
        "options": [
          "a spurious",
          "an illegitimate",
          "a reduced",
          "an inextinguishable"
        ],
        "ans": "C",
        "main": "an unquenchable",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 241,
        "question": "Some of my neighbors have an antipathy to dogs.",
        "options": ["enimity towards", "affection for", "acronym for", "alarm for"],
        "ans": "B",
        "main": "antipathy",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 242,
        "question": "The dressmaker unpicked the seam of the shirt.",
        "options": ["threaded", "seweed up", "picked up", "tore up"],
        "ans": "B",
        "main": "unpicked",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 243,
        "question": "The testimony of the witness was vague.",
        "options": ["disturbing", "true", "ambigous", "clear"],
        "ans": "D",
        "main": "vague",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 244,
        "question": "As a student, Isa tried communal living for a few years.",
        "options": ["collective", "general", "shared", "private"],
        "ans": "D",
        "main": "communal",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 245,
        "question": "It is important not to let mistake blight your life.",
        "options": ["damage", "impart", "improve", "ruin"],
        "ans": "C",
        "main": "blight",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 246,
        "question": "Jumoke is fond of carping her sister.",
        "options": ["praising", "joking with", "complaining about", "faulting"],
        "ans": "A",
        "main": "carping",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 247,
        "question": "A cup of coffee invigorated him.",
        "options": ["destroyed", "energized", "angered", "debilitated"],
        "ans": "D",
        "main": "invigorated",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 248,
        "question": "It is ludicrous to suggest that she was a government agent.",
        "options": ["odd", "exciting", "farcical", "sensible"],
        "ans": "D",
        "main": "ludicrous",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 249,
        "question": "The idea makes me cringe.",
        "options": ["quiver", "tremble", "resolute", "writhe"],
        "ans": "C",
        "main": "cringe",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 250,
        "question": "His books was one of those books that galvanized democracy.",
        "options": ["stimulated", "encouraged", "dissuaded", "promoted"],
        "ans": "C",
        "main": "galvanized",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 251,
        "question": "He walks in a gawky way.",
        "options": ["suitable", "clumsy", "lumbering", "graceful"],
        "ans": "D",
        "main": "gawky",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 252,
        "question": "The nation is in period of economic flux.",
        "options": ["modification", "change", "fluidity", "stability"],
        "ans": "D",
        "main": "flux",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 253,
        "question": "Our son was highly active and exuberant.",
        "options": ["subdued", "fulsome", "lively", "bright"],
        "ans": "A",
        "main": "exuberant",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 254,
        "question": "The dramatist provided a satisfactory denouement to the play",
        "options": ["critism", "introduction", "audition", "climax"],
        "ans": "B",
        "main": "denouement",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 255,
        "question": "Idris gives me a sour look anytime i pass by him",
        "options": ["satisfactory", "friendly", "sinister", "bad"],
        "ans": "B",
        "main": "sour",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 256,
        "question": "The principal was filled with scorn when we gave our reason for coming late",
        "options": ["sympathy", "contempt", "pity", "anger"],
        "ans": "C",
        "main": "scorn",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 257,
        "question": "Manu is hard hard to convince because he is an opinionated person",
        "options": ["an imperative", "a dicursive", "subjective", "an objective"],
        "ans": "D",
        "main": "opinionated",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 258,
        "question": "The officer was given an insidious task",
        "options": ["a pleasant", "difficult", "vivid", "cruel"],
        "ans": "A",
        "main": "insidious",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 259,
        "question": "The usually hostile crowd was captivated by the player's winsome attitude",
        "options": ["obnoxious", "friendly", "colourful", "drunken"],
        "ans": "A",
        "main": "winsome",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 260,
        "question": "The reporter made masterly analysis of the situation",
        "options": ["an unskillfull", "a mistaken", "an in-depth", "a proper"],
        "ans": "A",
        "main": "masterly",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 261,
        "question": "That little boy has become quite chubby",
        "options": ["thin", "intelligent", "huge", "tall"],
        "ans": "A",
        "main": "chubby",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 262,
        "question": "Akpan was able douse the flame with the new piece of equipment",
        "options": ["reduce", "extinguish", "ignite", "reinforce"],
        "ans": "C",
        "main": "douse",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 263,
        "question": "He gave himself up by his plebeian tastes",
        "options": ["robust", "voracious", "patrician", "laughable"],
        "ans": "C",
        "main": "plebeian",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 264,
        "question": "The action was premeditated",
        "options": ["unnecessary", "catastrophic", "unplanned", "uncoordinated"],
        "ans": "C",
        "main": "premeditated",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 265,
        "question": "A tentative solution was provided",
        "options": ["a convincing", "a provisional", "an amicable", "a definitive"],
        "ans": "D",
        "main": "tentative",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 266,
        "question": "The chief said he will use the power inherent in his offfice to stop the celebration",
        "options": ["unrelated to", "common to", "an amicable", "impervious to"],
        "ans": "A",
        "main": "inherent",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 267,
        "question": "In our last play, Segun acted the hero",
        "options": ["villian", "devil", "criminal", "assassin"],
        "ans": "A",
        "main": "hero",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 268,
        "question": "The police found a conclusive proof of the boy's guilt",
        "options": [
          "a corroborative",
          "a doubtful",
          "a consolatory",
          "an incriminating"
        ],
        "ans": "B",
        "main": "conclusive",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 269,
        "question": "The point you made is quite apt",
        "options": ["illogical", "helpful", "irrelevant", "insensitive"],
        "ans": "C",
        "main": "apt",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 270,
        "question": "The man drew a sword as people congregated round him",
        "options": ["praised", "gathered round", "mobbed", "fled from"],
        "ans": "D",
        "main": "congregated",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 271,
        "question": "The notice reads, 'No cash transaction in the hall'",
        "options": ["money", "gainful", "business", "cheque"],
        "ans": "D",
        "main": "No cash",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 272,
        "question": "Sola is apathetic about his work.",
        "options": ["indifferent", "enthusiastic", "half-hearted", "bored"],
        "ans": "B",
        "main": "apathetic",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 273,
        "question": "The members of the family has a hasty breakfsst before starting out on their journey",
        "options": ["hurried", "leisurely", "tasty", "nasty"],
        "ans": "B",
        "main": "hasty",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 274,
        "question": "The poverty level among the masses is unbearable.",
        "options": ["saturation", "affluence", "influence", "arrogance"],
        "ans": "B",
        "main": "poverty",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 275,
        "question": "The chairman was accused for implementing policies that favored the elites",
        "options": ["oppressed", "executives", "jobless", "citizens"],
        "ans": "D",
        "main": "elite",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 276,
        "question": "The manager was impressed by the man's eagerness.",
        "options": ["impatience", "indifference", "negligence", "calmness"],
        "ans": "B",
        "main": "eagerness",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 277,
        "question": "He is known for making threadbare arguments as a scholar",
        "options": ["justifiable", "baseless", "empty", "militant"],
        "ans": "A",
        "main": "threadbare",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 278,
        "question": "The lecture's obscure publications counted against him during promotion exercise.",
        "options": ["widespread", "closed", "circulated", "restricted"],
        "ans": "A",
        "main": "obscure",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 279,
        "question": "The man found his wife physically repellant.",
        "options": ["attractive", "fatuous", "unpleasant", "flamboyant"],
        "ans": "A",
        "main": "repellant",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 280,
        "question": "As an absolute ruler, Adayi brooks no opposition from his subordinates",
        "options": [
          "a despotic dictator",
          "a shameless king",
          " a benevolent leader",
          "a magnanimous democrat"
        ],
        "ans": "D",
        "main": "absolute",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 281,
        "question": "The response to the advertisement has been phenomenal",
        "options": ["spiritual", "frightening", "unimpressive", "catastrophic"],
        "ans": "C",
        "main": "phenomenal",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 282,
        "question": "My father lived a spartan life before his death.",
        "options": ["extravagant", "peaceful", "quiet", "luxurious"],
        "ans": "D",
        "main": "spartan",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 283,
        "question": "Bola's parent went through an acrimonious divorce",
        "options": ["a bitter", "an acrid", "a sour", "a peaceful"],
        "ans": "D",
        "main": "acrimonious",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 284,
        "question": "Iliya's account of the incident is appaling.",
        "options": ["tasking", "fascinating", "expatiated on", "reflected"],
        "ans": "B",
        "main": "appaling",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 285,
        "question": "She encapsulated her view of the nature of life in a poem.",
        "options": ["summed up", "explained", "expatiated on", "reflected"],
        "ans": "C",
        "main": "encapsulated",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 286,
        "question": "We were held spellbound by his eloquence",
        "options": ["unimpressed", "freed", "deceived", "unenlightened"],
        "ans": "A",
        "main": "spellbound",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 287,
        "question": "We had difficulty eating the meat because it was leathery",
        "options": ["bitter", "stringy", "tough", "tender"],
        "ans": "D",
        "main": "leathery",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 288,
        "question": "The boy is too indolent to do well at school.",
        "options": ["intelligent", "industrious", "inactive", "slothful"],
        "ans": "B",
        "main": "indolent",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 289,
        "question": "Salasi's tremendous effort has yielded results.",
        "options": ["absolute", "insignificant", "unimaginable", "prohibitive"],
        "ans": "B",
        "main": "tremendous",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 290,
        "question": "The computerized service of the new banks is heart-warming.",
        "options": ["manual", "mechanical", "electrical", "condense"],
        "ans": "A",
        "main": "computerized",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 291,
        "question": "Life has become a misery for many owing to the harsh economic condition in the country.",
        "options": ["drudgery", "ridicule", "ritual", "comfort"],
        "ans": "D",
        "main": "misery",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 292,
        "question": "The company director has a vivacious personality.",
        "options": [
          "a positive",
          "an unmanageable",
          "an unimpressive",
          "a gregarious"
        ],
        "ans": "C",
        "main": "vivacious",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 293,
        "question": "Young people have a penchant for fast cars.",
        "options": ["likeness", "passion", "madness", "dislike"],
        "ans": "D",
        "main": "penchant",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 294,
        "question": "Most of his latest actions are militant in nature.",
        "options": ["commanding", "civil", "zealous", "passionate"],
        "ans": "B",
        "main": "militant",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 295,
        "question": "His ideas sounded quite palatable yet they were jettisoned by the group.",
        "options": ["accepted", "dumped", "denied", "criticized"],
        "ans": "A",
        "main": "jettisoned",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 296,
        "question": "The compulsory leave made her feel listless.",
        "options": ["restful", "great", "fat", "energetic"],
        "ans": "D",
        "main": "listless",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 297,
        "question": "'A novel is an embellished falsehood' said the teacher.",
        "options": ["enriched", "exaggerated", "adorned", "obliterated"],
        "ans": "D",
        "main": "embellished",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 298,
        "question": "I have had enough of your impudence.",
        "options": ["politeness", "incivility", "arrogance", "boldness"],
        "ans": "A",
        "main": "impudence",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 299,
        "question": "We were collectively responsible for keeping the machine in good shape.",
        "options": ["jointly", "severally", "dutifully", "socially"],
        "ans": "B",
        "main": "collectively",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 300,
        "question": "His comment was not printable.",
        "options": ["punishable", "suitable", "offensive", "unfair"],
        "ans": "C",
        "main": "printable",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 301,
        "question": "Curiously, he escaped unhurt.",
        "options": [
          "uninterestingly",
          "unsurprinsingly",
          "annoyingly",
          "unusually"
        ],
        "ans": "B",
        "main": "Curiously",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 302,
        "question": "The teacher said that Ali's essay was full of many redundant details.",
        "options": ["necessary", "useful", "unexplained", "strange"],
        "ans": "A",
        "main": "redundant",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 303,
        "question": "His father surmounted the myriad of obstacles on his way.",
        "options": ["most", "many", "most", "few"],
        "ans": "D",
        "main": "myriad",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 304,
        "question": "Her ingenious smile drew our attention.",
        "options": ["clever", "arrogant", "witty", "naive"],
        "ans": "C",
        "main": "ingenious",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 305,
        "question": "Ndeni gave a flawless speech at the party.",
        "options": ["an interesting", "an imperfect", "a wonderful", "a careless"],
        "ans": "B",
        "main": "flawless",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 306,
        "question": "Beneath Ado's guff exterior, he's really very kind-hearted",
        "options": ["rough", "gentle", "nice", "harsh"],
        "ans": "C",
        "main": "guff",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 307,
        "question": "The captain says sports is being debased by commercial sponsorship",
        "options": ["elevated", "overvalued", "localized", "perverted"],
        "ans": "A",
        "main": "debased",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 308,
        "question": "Governing a country is not always as straightforward as people sometimes imagine.",
        "options": ["untoward", "irksome", "complicated", "troublesome"],
        "ans": "C",
        "main": "straightforward",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 309,
        "question": "The crowd was very receptive to the speaker's suggestion.",
        "options": ["alert", "hostile", "disobedient", "repellent"],
        "ans": "B",
        "main": "receptive",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 310,
        "question": "There was a general acquiescence on the new drug law.",
        "options": ["compromise", "agreement", "resistance", "discrepancy"],
        "ans": "C",
        "main": "acquiescence",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 311,
        "question": "Aisha seems to feel ambivalent about her future.",
        "options": ["ambitious", "inconsiderate", "decisive", "anxious"],
        "ans": "C",
        "main": "ambivalent",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 312,
        "question": "The report of the committee contained a plethora of details.",
        "options": ["multitude", "spectrum", "shortage", "simplicity"],
        "ans": "C",
        "main": "plethora",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 313,
        "question": "The weather was still very heavy and sultry.",
        "options": [
          "cloudy and thundery",
          "hot and uncomfortable",
          "wintry and shadowy",
          "cold and friendly"
        ],
        "ans": "D",
        "main": "heavy and sultry",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 314,
        "question": "Ada gave her husband a look that made words superfluous.",
        "options": ["unnecessary", "scanty", "redundant", "spurious"],
        "ans": "B",
        "main": "superfluous",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 315,
        "question": "The warring communities were coerced into negotiating a settlement.",
        "options": ["driven", "compelled", "persuaded", "pressured"],
        "ans": "C",
        "main": "coerced",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 316,
        "question": "His father served as a mercenary in the army.",
        "options": ["preacher", "regular", "recruit", "officer"],
        "ans": "B",
        "main": "mercenary",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 317,
        "question": "Jummal is cruel to her husband.",
        "options": ["harsh", "brutal", "passionate", "ferocious"],
        "ans": "C",
        "main": "cruel",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 318,
        "question": "The teacher who beat the student was treated with mercy.",
        "options": ["disrespect", "contempt", "vengeance", "kindness"],
        "ans": "C",
        "main": "mercy",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 319,
        "question": "His wife hates his garrulous attitude.",
        "options": ["outspoken", "unfriendly", "reticent", "thoughtful"],
        "ans": "C",
        "main": "garrulous",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 320,
        "question": "'Agoshito is a callow youth', said the teacher.",
        "options": ["an ignorant", "an experienced", "an idle", "an organized"],
        "ans": "B",
        "main": "callow youth",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 321,
        "question": "What you are asking me to do is a herculean task.",
        "options": ["strenuous", "a demanding", "a lovely", "an easy"],
        "ans": "D",
        "main": "herculean",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 322,
        "question": "Nkechi was a novice when she was first employed.",
        "options": ["manager", "clerk", "supervisor", "professional"],
        "ans": "D",
        "main": "novice",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 323,
        "question": "'I do not trust him', he said, in a rare moment of candour.",
        "options": ["reproach", "dishonesty", "frankness", "fairness"],
        "ans": "B",
        "main": "candour",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 324,
        "question": "Mrs. AKunilo looks anaemic today.",
        "options": ["strange", "sick", "weak", "strong"],
        "ans": "D",
        "main": "anaemic",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 325,
        "question": "It is inconceivable that the sun shone in the night.",
        "options": ["credible", "unthinkable", "impossible", "contestable"],
        "ans": "A",
        "main": "inconceivable",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 326,
        "question": "She only gives a superficial impression of warmth and friendliness.",
        "options": ["strong", "a fake", "a deep", "an unrealistic"],
        "ans": "C",
        "main": "a superficial",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 327,
        "question": "As a prudent businessman, Ajayi does not leave anything to chance.",
        "options": ["frugal", "shrewd", "careless", "unsuccessful"],
        "ans": "C",
        "main": "prudent",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 328,
        "question": "His antipathy affected the growth of his business.",
        "options": ["hatred", "receptiveness", "loyalty", "hostility"],
        "ans": "B",
        "main": "antipathy",
        "remark": "",
        "info": "Choose the word <strong>opposite</strong> in meaning to the underline word in the sentence."
      }
    ],
  },
  {
    topic: "Synonyms",
    questions: [
      {
        "id": 1,
        "question": "The town looked deserted but we moved in with some trepidation",
        "options": ["confidence", "surprise", "hesitation", "fear"],
        "ans": "D",
        "main": "trepidation",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 2,
        "question": "They show no finesse in dealing with strangers",
        "options": ["boldness", "kindness", "tact", "love"],
        "ans": "C",
        "main": "finesse",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 3,
        "question": "Although the manager is busy right now, he will be with you presently",
        "options": ["immediately", "soon", "without delay", "right away"],
        "ans": "B",
        "main": "presently",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 4,
        "question": "The governor's wife, in characteristically simple attire, walked into the hall unnoticed",
        "options": ["eccentrically", "typically", "consistently", "intrinsically"],
        "ans": "B",
        "main": "characteristically",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 5,
        "question": "Much to her chagrin, the bridegroom did not turn up for the wedding",
        "options": ["wonder", "surprise", "disappointment", "depression"],
        "main": "chagrin",
        "ans": "C",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
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
        "ans": "C",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 7,
        "question": "New companies in the country always put up classified advertisements in the dailies",
        "options": ["secret", "small", "outrageous", "expensive"],
        "main": "classified",
        "ans": "A",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 8,
        "question": "The doctors insisted on giving all of us prophylactic drugs",
        "options": ["curative", "preventive", "routine", "special"],
        "main": "prophylactic",
        "ans": "B",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 9,
        "question": "The delegates to the Constitutional Conference have mooted that funding of universities be transferred to states where they are located",
        "options": ["said", "agreed", "proposed", "legislated"],
        "main": "mooted",
        "ans": "C",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 10,
        "question": "Our local paper is noted for its incisive editorials on local politics",
        "options": ["sarcastic", "penetrating", "decisive", "destructive"],
        "main": "incisive",
        "ans": "B",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 11,
        "question": "Many Nigerian have inured themselves to hardship",
        "options": ["subjected", "accustomed", "endeared", "submitted"],
        "main": "inured",
        "ans": "B",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 12,
        "question": "There are many venal judges in our courts today",
        "options": ["qualified", "professional", "corrupt", "honest"],
        "main": "venal",
        "ans": "C",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 13,
        "question": "He is bound to expose himself by his nefarious activities",
        "options": ["kind", "disreputable", "despicable", "nocturnal"],
        "main": "nefarious",
        "ans": "C",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 14,
        "question": "The minister's anger was aggravated by the news of the disaster",
        "options": ["abated", "magnified", "intensifies", "impeded"],
        "main": "aggravated",
        "ans": "C",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 15,
        "question": "The lawyer gave evasive answers to all the questions",
        "options": ["unintelligent", "ineffective", "unreliable", "equivocal"],
        "main": "evasive",
        "ans": "D",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 16,
        "question": "The island becomes more enchanting at night",
        "options": ["attractive", "delightful", "accomodating", "lively"],
        "main": "enchanting",
        "ans": "A",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 17,
        "question": "The material in the book is presented within an eclectic framework",
        "options": ["simple", "a broad", "a restricted"],
        "main": "eclectic",
        "ans": "B",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 18,
        "question": "Ohiokhen had a brain wave as how she could deal with the problem",
        "options": ["an imagination", "a desire", "a headache", "an idea"],
        "main": "brain wave",
        "ans": "D",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 19,
        "question": "The lady who won the beauty contest had a good gait",
        "options": ["stature", "figure", "elegance", "carriage"],
        "main": "gait",
        "ans": "D",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 20,
        "question": "The young man who distributed political pamphlets on campus was prompty repudiated",
        "options": ["disowned", "arrested", "warned", "killed"],
        "main": "repudiated",
        "ans": "A",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 21,
        "question": "All the accident victims are bleeding profusely",
        "options": ["slowly", "excessively", "diffusely", "clearly"],
        "main": "profusely",
        "ans": "B",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 22,
        "question": "The prosecutor was accused of obstructing justice",
        "options": ["hindering", "retarding", "impending", "interrupting"],
        "main": "obstructing",
        "ans": "A",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 23,
        "question": "The man preaches egalitarianism without matching it up with action",
        "options": ["salvation", "dedication", "kindness", "equality"],
        "main": "egalitarianism",
        "ans": "D",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 24,
        "question": "The Federal Government approved a new salary structure as an incentive for the Nigerian workers",
        "options": ["a reward", "an encouragement", "a package", "an advance"],
        "main": "incentive",
        "ans": "B",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 25,
        "question": "Amina said she married a doting husband",
        "options": ["a loving", "a fun-loving", "an uncaring", "a nagging"],
        "main": "a doting",
        "ans": "A",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 26,
        "question": "Before embarking on his current research, the professor carried out a feasibility study of the area",
        "options": ["thorough", "perfectibility", "complete", "practicability"],
        "main": "feasibility",
        "ans": "D",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 27,
        "question": "The college officer insisted that I show him my credentials before I could be registered",
        "options": ["papers", "qualifications", "testimonials", "identities"],
        "main": "credentials",
        "ans": "B",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 28,
        "question": "Even though there is no obvious riot on the campus, the atmosphere is restive",
        "options": ["quiet", "chaotic", "restless", "tense"],
        "main": "restive",
        "ans": "D",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 29,
        "question": "Mr. Dzokoto plays the piano with great dexterity",
        "options": ["wisdom", "power", "force", "skill"],
        "main": "dexterity",
        "ans": "D",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 30,
        "question": "They have tried to circumvent the restriction the importance of the commodities",
        "options": ["bypass", "confront", "oppose", "challenge"],
        "main": "circumvent",
        "ans": "A",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 31,
        "question": "That punch by the young boxer proved to be fatal",
        "options": ["effective", "belated", "hard", "deadly"],
        "main": "fatal",
        "ans": "D",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 32,
        "question": "The boy was told that he would need several more pints of blood to survive",
        "options": ["plenty", "much", "many", "some"],
        "main": "several",
        "ans": "C",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 33,
        "question": "Though David's condition is serious, his life is not in immediate danger",
        "options": ["grave", "nasty", "dangerous", "hypertensive"],
        "main": "serious",
        "ans": "A",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 34,
        "question": "The essay topic is nebulous",
        "options": ["clear", "incorrect", "vague", "distinct"],
        "main": "nebulous",
        "ans": "C",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 35,
        "question": "I have always believed that my mother is a very impassioned woman",
        "options": ["impartial", "emotional", "impassive", "emotive"],
        "main": "impassioned",
        "ans": "B",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 36,
        "question": "The party gathering was thrown into a state of euphoria",
        "options": ["pleasure", "confusion", "sadness", "excitement"],
        "main": "euphoria",
        "ans": "D",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 37,
        "question": "Some actions of the Nigerian youth have alienated them from those who were sympathetic to their cause.",
        "options": ["endeared", "sine qua non", "estranged", "confronted"],
        "main": "alienated",
        "ans": "C",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 38,
        "question": "Some actions of the Nigerian youth have alienated them from those who were sympathetic to their cause.",
        "options": ["eager", "opposed", "well-disposed", "ill-disposed"],
        "main": "sympathetic",
        "ans": "C",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 39,
        "question": "The principal told the teacher to stop browbeating the children",
        "options": ["pampering", "caning", "bullying", "deceiving"],
        "main": "browbeating",
        "ans": "C",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 40,
        "question": "The coalescence of the groups created additional problems.",
        "options": ["fighting", "proscription", "union", "disbandment"],
        "main": "coalescence",
        "ans": "C",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 41,
        "question": "The player kept on gamely to the end",
        "options": ["skillfully", "stubbornly", "amateurishly", "courageously"],
        "main": "gamely",
        "ans": "D",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 42,
        "question": "As the triumphant rebels were returning to their base, they met with a serious reverse",
        "options": ["an army", "a victory", "a defeat", "an enemy"],
        "main": "reverse",
        "ans": "C",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 43,
        "question": "I cannot understand why Ali should serve in that moribund administration",
        "options": ["purposeless", "crumbling", "prodigal", "oppresive"],
        "main": "moribund",
        "ans": "B",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 44,
        "question": "The village girl wore sumptuous cloth",
        "options": ["expensive", "loose-fitting", "faded-looking", "cheap"],
        "main": "sumptuous",
        "ans": "A",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 45,
        "question": "Funmi is just being facetious about her marrying a soldier",
        "options": ["unfaithful", "unserious", "serious", "crazy"],
        "main": "facetious",
        "ans": "B",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 46,
        "question": "The professor discussed a number of abstruse topics",
        "options": ["relevant", "esoteric", "useful", "irrelevant"],
        "main": "abstruse",
        "ans": "B",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 47,
        "question": "Ugo has often been described as belligerent",
        "options": ["combative", "patient", "attractive", "innocent"],
        "main": "belligerent",
        "ans": "A",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 48,
        "question": "The men were tardy in offering help",
        "options": ["slow", "quick", "brave", "generous"],
        "main": "tardy",
        "ans": "A",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 49,
        "question": "While the hooligans exchanged blows, we looked on complacently",
        "options": ["questioningly", "contentedly", "sorrowfully", "dejectedly"],
        "main": "complacently",
        "ans": "B",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 50,
        "question": "Tade became timorous when she was asked to give the valedictory speech.",
        "options": ["nervous", "aggressive", "excited", "happy"],
        "main": "timorous",
        "ans": "A",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 51,
        "question": "Bose was angry because her friend called her a pilferer",
        "options": ["criminal", "liar", "thief", "hypocrite"],
        "main": "pilferer",
        "ans": "C",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 52,
        "question": "Practicing medicine is not as lucrative as many people think",
        "options": ["know", "understand", "consider", "assume"],
        "main": "think",
        "ans": "D",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
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
        "ans": "C",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 54,
        "question": "The manager made disparaging remarks about the retiring officer",
        "options": ["derogatory", "parochial", "cynical", "rude"],
        "main": "disparaging",
        "ans": "A",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
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
        "ans": "B",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 56,
        "question": "I wish the commander were less adamant about his proposed reprisal attack on the enemy",
        "options": ["rehearsal", "retaliatory", "retribute", "surprise"],
        "main": "reprisal",
        "ans": "B",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 57,
        "question": "The man outran his wife when they heard the eerie sound",
        "options": ["scary", "hissing", "harsh", "loud"],
        "main": "eerie",
        "ans": "A",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 58,
        "question": "Teachers of music believe in its therapeutic effect",
        "options": ["healing", "sound", "lyrical", "rythmic"],
        "main": "therapeutic",
        "ans": "A",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 59,
        "question": "Adigun's joke are always puerile",
        "options": ["amusing", "childish", "empty", "entertaining"],
        "main": "puerile",
        "ans": "B",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 60,
        "question": "I wonder what will be left of his essay when the extraneous material is deleted",
        "options": ["superflous", "erroneous", "relevant", "main"],
        "main": "extraneous",
        "ans": "A",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
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
        "ans": "A",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 62,
        "question": "The teacher's apparent nonchalant attitude was miscontrued by his students",
        "options": ["condoned", "misrepresented", "misquoted", "misinterpreted"],
        "main": "miscontrued",
        "ans": "D",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 63,
        "question": "They are considered to be legal luminaries",
        "options": ["directors", "powers", "experts", "practitioners"],
        "main": "luminaries",
        "ans": "C",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 64,
        "question": "The Executive Secretary has just assumed office",
        "options": ["resumed work", "started work", "returned", "been sworn in"],
        "main": "assumed",
        "ans": "B",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 65,
        "question": "The leader has the unstinting support of his party",
        "options": ["unsparing", "laudable", "uninspiring", "cautious"],
        "main": "unstinting",
        "ans": "A",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 66,
        "question": "The party supporters vilified the Chairman for the role he played in the crisis that rocked the party.",
        "options": ["elected", "challenged", "concerned", "impeached"],
        "main": "vilified",
        "ans": "B",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
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
        "ans": "C",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 68,
        "question": "The boys knew that a storm was imminent",
        "options": ["possible", "impending", "threatning", "encroaching"],
        "main": "imminent",
        "ans": "B",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 69,
        "question": "The cynics feared that the nation's nascent democracy would fail",
        "options": ["pessimists", "delinquents", "critics", "illusionists"],
        "main": "cynics",
        "ans": "A",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 70,
        "question": "The essence of governance is to seek the good and wellbeing of the majority of the people",
        "options": ["importance", "goal", "characteristic", "secret"],
        "main": "essence",
        "ans": "A",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 71,
        "question": "From what she said, one may infer that she does not like the course",
        "options": ["suppose", "realize", "deduce", "agree"],
        "main": "infer",
        "ans": "C",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 72,
        "question": "He shared his room with a person whose behaviour was quite nauseating",
        "options": ["disrespectful", "disgraceful", "discouraging", "disgusting"],
        "main": "nauseating",
        "ans": "D",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 73,
        "question": "The carpenter built a commodious wardrobe",
        "options": ["gigantic", "small", "spacious", "wide"],
        "main": "commodious",
        "ans": "C",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 74,
        "question": "The man's story sounded plausible to his audience",
        "options": ["fantastic", "credulous", "credible", "entertaining"],
        "main": "plausible",
        "ans": "C",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 75,
        "question": "The prosecutor was fully able to substantiate the charge",
        "options": ["prove", "dismiss", "weaken", "expatiate on"],
        "main": "substantiate",
        "ans": "A",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 76,
        "question": "In spite of constant financial support from his father, Udenyi treats his studies with considerable levity",
        "options": ["wastefulness", "lassitude", "seriousness", "enthusiasm"],
        "main": "levity",
        "ans": "B",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 77,
        "question": "Ibro shows enough liberality with his meagre income",
        "options": ["prodigality", "insensitivity", "generosity", "frugality"],
        "main": "liberality",
        "ans": "C",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 78,
        "question": "The festivals create in the people a feeling of pride in their cultural heritage",
        "options": ["possession", "history", "heirloom", "legacy"],
        "main": "heritage",
        "ans": "D",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 79,
        "question": "The manager's knowledge of the strike is of the utmost importance",
        "options": ["genuine", "paramount", "basic", "standard"],
        "main": "utmost",
        "ans": "B",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 80,
        "question": "The school's badge is the insignia of office for all the prefects in the school",
        "options": ["symbol", "power", "recognition", "seal"],
        "main": "insignia",
        "ans": "A",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 81,
        "question": "The mottled skin of a person with HIV indicates an advanced stage of its development",
        "options": ["spotted", "brown", "pimply", "scaly"],
        "main": "mottled",
        "ans": "A",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 82,
        "question": "The press described the efforts of the government in pejorative terms",
        "options": ["contemptible", "critical", "superlative", "palpable"],
        "main": "pejorative",
        "ans": "A",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 83,
        "question": "Funnily enough the priest prayed for the robber who shot him",
        "options": ["Disappointingly", "Timidly", "Fearlessly", "Unexpectedly"],
        "main": "Funnily enough",
        "ans": "D",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 84,
        "question": "His plans boomeranged on him",
        "options": ["backfired", "catapulted", "bounced", "fell"],
        "main": "boomeranged",
        "ans": "A",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 85,
        "question": "Emeka's painting was so realistic that it could almost have been a photograph",
        "options": ["authentic", "lively", "concrete", "picturesque"],
        "main": "realistic",
        "ans": "A",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 86,
        "question": "That fateful decision changed the company's outlook in many ways.",
        "options": ["disastrous", "unsuccessful", "wonderful", "uncontrollable"],
        "main": "fateful",
        "ans": "A",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 87,
        "question": "Obi's dog is old but still lively",
        "options": ["barking", "frisky", "howling", "attractive"],
        "main": "lively",
        "ans": "B",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 88,
        "question": "No wonder Sikemi later became a detective. She has been very observant.",
        "options": ["inquisitive", "inductive", "curious", "perceptive"],
        "main": "observant",
        "ans": "D",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 89,
        "question": "The common practice among some media practitioners is to be sensational in their reporting",
        "options": ["rampant", "ordinary", "cogent", "prevalent"],
        "main": "common",
        "ans": "D",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 90,
        "question": "The greatness of the creator of the universe is always inexpressible to many adherents of certain faiths.",
        "options": ["ineffable", "unbearable", "wonderful", "inevitable"],
        "main": "inexpressible",
        "ans": "A",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 91,
        "question": "The accident victim received a superficial wound from the crash.",
        "options": ["a painless", "a serious", "an external", "inevitable"],
        "main": "superficial",
        "ans": "C",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 92,
        "question": "Nigeria has been playing a vital role in the political and economic development of Africa.",
        "options": ["respectable", "creditable", "laudable", "crucial"],
        "main": "vital",
        "ans": "D",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 93,
        "question": "Many people used to live in poverty",
        "options": ["the slums", "instability", "want", "crucial"],
        "main": "poverty",
        "ans": "C",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 94,
        "question": "Courteously, Ade stood back to let his teacher go first through the door.",
        "options": ["Calmy", "Patiently", "Politely", "Carefully"],
        "main": "Courteously",
        "ans": "C",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 95,
        "question": "His taciturnity amazed everyone in the court during the legal tussle.",
        "options": ["sensibility", "pervasiveness", "obliviousness", "reticence"],
        "main": "taciturnity",
        "ans": "D",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 96,
        "question": "Accountability is certainly a desirable quality in a politician.",
        "options": ["Responsibility", "Respectability", "Diligence", "Courage"],
        "main": "Accountability",
        "ans": "A",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 97,
        "question": "The move to expel the chairman was sanctioned my members of the party.",
        "options": ["unleashed", "opposed", "supported", "initiated"],
        "main": "sanctioned",
        "ans": "C",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 98,
        "question": "The witness provided a monstrous account of the event.",
        "options": ["supportive", "tragic", "shocking", "verbatim"],
        "main": "monstrous",
        "ans": "C",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 99,
        "question": "Adamu is rather meddlesome in dealing with his friends.",
        "options": ["impertinent", "intimidating", "quarrelsome", "uncaring"],
        "main": "meddlesome",
        "ans": "A",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 100,
        "question": "The commander said that the battle would be sustained, total and relentless",
        "options": ["continuous", "brutal", "fierce", "innocuous"],
        "main": "relentless",
        "ans": "A",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 101,
        "question": "The government has announced its preparedness for the scheme",
        "options": ["determination", "regret", "leisure", "readiness"],
        "main": "preparedness",
        "ans": "D",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 102,
        "question": "The chairman advised the participants to follow convention in stating their points.",
        "options": ["eloquence", "advice", "prudence", "tradition"],
        "ans": "D",
        "main": "convention",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 103,
        "question": "His loss suddenly became redeemable.",
        "options": ["incurable", "exclusive", "recoverable", "repulsive"],
        "ans": "C",
        "main": "redeemable",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 104,
        "question": "The plan gone awry.",
        "options": ["wide", "wrong", "recoverable", "repulsive"],
        "ans": "B",
        "main": "awry",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 105,
        "question": "The judge emphasized his morbid desires in his judgement.",
        "options": ["inordinate", "uncritical", "ravenous", "unpleasant"],
        "ans": "D",
        "main": "morbid",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 106,
        "question": "The recommended novel has a convoluted theme.",
        "options": ["a simple", "an attractive", "a disgusting", "a complicated"],
        "ans": "D",
        "main": "a convoluted",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 107,
        "question": "The party men reveled all night when the election results were announced.",
        "options": ["celebrated", "mourned", "fought", "discussed"],
        "ans": "A",
        "main": "reveled",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 108,
        "question": "We were at a loss to understand why Oli should retract his statement before the judge.",
        "options": ["assert", "repeat", "withdraw", "reiterate"],
        "ans": "C",
        "main": "retract",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 109,
        "question": "The workers hope to appear before the arbitration panel to resolve the lingering dispute.",
        "options": ["trial", "legislative", "investigative", "reconciliatory"],
        "ans": "D",
        "main": "arbitration",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 110,
        "question": "He was not able to withstand the attack from his immediate family.",
        "options": ["survive", "overcome", "match", "resist"],
        "ans": "D",
        "main": "withstand",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 111,
        "question": "Your effort to bring peace between us is futile because you are biased.",
        "options": ["convinced", "clever", "prejudiced", "worried"],
        "ans": "C",
        "main": "biased",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 112,
        "question": "His embroidery was an exacting task for the tailor.",
        "options": ["an unwarranted", "an exciting", "a demanding", "a disturbing"],
        "ans": "C",
        "main": "exacting",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 113,
        "question": "The student's remonstrances were rebuffed by authority.",
        "options": ["protests", "suggestions", "complaints", "regrets"],
        "ans": "A",
        "main": "remonstrances",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 114,
        "question": "I had to make my way through the throng of people in the church.",
        "options": ["group", "crowd", "gathering", "theme"],
        "ans": "B",
        "main": "throng",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 115,
        "question": "The man's wife has her misgivings about him.",
        "options": ["fears for", "distrust of", "hatred for", "have for"],
        "ans": "B",
        "main": "misgivings",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 116,
        "question": "Violent crime is only one of the maladies afflicting modern society.",
        "options": ["damages", "illness", "wounds", "crises"],
        "ans": "D",
        "main": "maladies",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 117,
        "question": "Everyone was talking about the camaraderie in the club.",
        "options": ["companionship", "quarrelsome", "commissioning", "disunity"],
        "ans": "A",
        "main": "camaraderie",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 118,
        "question": "We have every need to preserve some of our national monuments for posterity.",
        "options": [
          "prosperity",
          "future generations",
          "national pride",
          "collective gain"
        ],
        "ans": "B",
        "main": "posterity",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 119,
        "question": "He commands the confidence and respect of all his subordinate.",
        "options": ["requests", "enjoys", "enforces", "conjures"],
        "ans": "B",
        "main": "commands",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 120,
        "question": "The president has mapped out so many laudable projects to embark upon",
        "options": ["laughable", "good", "praiseworthy", "valuable"],
        "ans": "C",
        "main": "laudable",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 121,
        "question": "Adam's father is a stern man",
        "options": ["strict", "playful", "conservative", "wicked"],
        "ans": "A",
        "main": "stern",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 122,
        "question": "Nobody knew the source of the altercation between the couple.",
        "options": ["alter ego", "quarrel", "deep love", "conservative"],
        "ans": "B",
        "main": "altercation",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 123,
        "question": "His poetry is said to be inscrutable.",
        "options": ["ludicrous", "unlearnable", "inseparable", "mysterious"],
        "ans": "D",
        "main": "inscrutable",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 124,
        "question": "Hers was a specious argument about the government of the day.",
        "options": ["misleading", "precious", "spacious", "true"],
        "ans": "A",
        "main": "specious",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 125,
        "question": "The Lagos bus conductor wore his professional livery.",
        "options": ["badge", "shoe", "uniform", "cap"],
        "ans": "C",
        "main": "livery",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 126,
        "question": "There must be something sinister about her late arrival.",
        "options": ["reasonable", "joyful", "hopeful", "ominous"],
        "ans": "D",
        "main": "sinister",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 127,
        "question": "The unification of the country has brought about great technological advancement.",
        "options": ["restoration", "agreement", "cohesion", "ominious"],
        "ans": "C",
        "main": "unification",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 128,
        "question": "Idris' forbearance endeared him to us.",
        "options": ["hard work", "patience", "wisdom", "good manners"],
        "ans": "B",
        "main": "forbearance",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 129,
        "question": "They hated the police and, by implication, me.",
        "options": ["extension", "inference", "examination", "application"],
        "ans": "B",
        "main": "implication",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 130,
        "question": "A political impasse does not offer the best opportunity for merrymaking.",
        "options": ["gridlock", "rally", "manisfesto", "party"],
        "ans": "A",
        "main": "impasse",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 131,
        "question": "We were all enthusiastic as we awaited the result of the election.",
        "options": ["elated", "nervous", "bemused", "agitated"],
        "ans": "A",
        "main": "enthusiastic",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 132,
        "question": "The uniform makes the guards look absurd.",
        "options": ["sensible", "ridiculous", "dirty", "smart"],
        "ans": "B",
        "main": "absurd",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 133,
        "question": "The law is often tardy in reacting to changing attitudes.",
        "options": ["exclusive", "generous", "quick", "slow"],
        "ans": "D",
        "main": "tardy",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 134,
        "question": "Isa and Ilu ate sumptuous meals on their brothers' wedding day.",
        "options": ["insipid", "cheap", "expensive", "foreign"],
        "ans": "C",
        "main": "sumptuous",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 135,
        "question": "The panacea for a country's economic mess lies in systemic planning and hard work.",
        "options": ["hope", "trouble", "cure", "foresight"],
        "ans": "C",
        "main": "panacea",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 136,
        "question": "Thousands of workers have been victims of retrenchment since the military came back to power.",
        "options": [
          "suffering",
          "increase in penury",
          "unemployment",
          "trench mentality"
        ],
        "ans": "C",
        "main": "retrenchment",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 137,
        "question": "The principal gave speech offhand at the sports meeting.",
        "options": ["unconcerned", "calmly", "beautifully", "unprepared"],
        "ans": "D",
        "main": "offhand",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 138,
        "question": "Jankoli was dressed in an old assortment of clothes.",
        "options": ["sameness", "melange", "avalanche", "homogeneity"],
        "ans": "B",
        "main": "assortment",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 139,
        "question": "The girl's father was astounded to see her appear from the shrine.",
        "options": ["embarassed", "astonished", "collected", "overwhelmed"],
        "ans": "B",
        "main": "astounded",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 140,
        "question": "The director's remark was extremely apposite to the issue being discussed.",
        "options": ["emphatic", "adequate", "appropriate", "inconsequential"],
        "ans": "C",
        "main": "apposite",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 141,
        "question": "Her reputation is without a blemish.",
        "options": ["fault", "blessing", "struggle", "problem"],
        "ans": "A",
        "main": "blemish",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 142,
        "question": "Ugo is eligible for the post of secretary.",
        "options": ["qualified", "intelligent", "nominated", "invited"],
        "ans": "A",
        "main": "eligible",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 143,
        "question": "This is an abridged version of No Longer at Ease.",
        "options": ["an illustrated", "a shortened", "an outdated", "an enlarged"],
        "ans": "B",
        "main": "abridged",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 144,
        "question": "Since its inception in 1983, the newspaper has attracted thousands of readers.",
        "options": ["renaissance", "coming", "commencement", "publication"],
        "ans": "C",
        "main": "inception",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 145,
        "question": "Mrs. Asio wanted her sister to stop being so detached.",
        "options": ["friendly", "careless", "indifferent", "passionate"],
        "ans": "C",
        "main": "detached",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 146,
        "question": "Lantan dwelt in a ruined cottage on the hillside.",
        "options": ["sat", "worked", "slept", "lived"],
        "ans": "D",
        "main": "dwelt",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 147,
        "question": "The mistake brought the show to an ignominious end.",
        "options": ["a good", "a palatable", "a disgrace", "a satisfactory"],
        "ans": "C",
        "main": "ignominious",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 148,
        "question": "He compliments me on my way of doing things.",
        "options": ["complements", "intimates", "disgust", "praises"],
        "ans": "D",
        "main": "compliments",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 149,
        "question": "The girl is angry with her friend who ensnared her into a relationship.",
        "options": ["tricked", "encouraged", "forced", "enslaved"],
        "ans": "A",
        "main": "ensnared",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 150,
        "question": "The stockbroker said it was an astute move to sell shares then.",
        "options": ["a bad", "a shrewd", "an unprofitable", "an insincere"],
        "ans": "B",
        "main": "astute",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 151,
        "question": "The principal described Oche as the most tactful person he ever worked with.",
        "options": ["passionate", "discreet", "hard-working", "innovative"],
        "ans": "B",
        "main": "tactful",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 152,
        "question": "The old woman is suffering from dementia.",
        "options": ["lucidity", "senility", "insanity", "sagacity"],
        "ans": "B",
        "main": "dementia",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 153,
        "question": "Some drugs have deleterous effect on a child's development.",
        "options": ["debilitating", "helpful", "harmful", "healing"],
        "ans": "C",
        "main": "deleterous",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 154,
        "question": "Fila has always been described as belligerent.",
        "options": ["beautiful", "attractive", "combative", "innocent"],
        "ans": "C",
        "main": "belligerent",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 155,
        "question": "The circular supersedes all previous correspondence on the matter.",
        "options": ["supports", "displaces", "eliminates", "circumvents"],
        "ans": "B",
        "main": "supersedes",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 156,
        "question": "Their new house was roofed with corrugated sheets.",
        "options": ["folded", "iron", "aluminium", "corrupted"],
        "ans": "A",
        "main": "corrugated",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 157,
        "question": "Her problem was exacerbated by the loss of her father.",
        "options": ["exaggrated", "solved", "aggravated", "infuriated"],
        "ans": "C",
        "main": "exacerbated",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 158,
        "question": "Okibe was rusticated for his derogatory remark about the principal.",
        "options": ["complimentary", "unsavory", "unwarranted", "lackluster"],
        "ans": "C",
        "main": "derogatory",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 159,
        "question": "Justice is difficult to enforce because people are unwilling to accept any loss of sovereignty.",
        "options": ["autonomy", "position", "leadership", "kingdom"],
        "ans": "A",
        "main": "sovereignty",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 160,
        "question": "There are still many virtuous woman in our society today.",
        "options": ["clever", "upright", "devilish", "intelligent"],
        "ans": "B",
        "main": "virtuous",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 161,
        "question": "The type of response is typical of a lazy teacher.",
        "options": ["symptomatic", "characteristic", "universal", "incontestable"],
        "ans": "B",
        "main": "typical",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 162,
        "question": "He was too petrified to give the closing remarks at the conference.",
        "options": ["frightened", "delighted", "agitated", "happy"],
        "ans": "A",
        "main": "pretified",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 163,
        "question": "During a particular time of the day, the road shimmers in the heat.",
        "options": ["darkens", "lightens", "shines", "beams"],
        "ans": "C",
        "main": "shimmers",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 164,
        "question": "Every human being is vulnerable to communicable disease.",
        "options": ["liable", "lifted", "immuned", "closed"],
        "ans": "A",
        "main": "vulnerable",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 165,
        "question": "Mariam looks rather furtive to Shehu.",
        "options": ["intoxicated", "unfriendly", "sad", "sly"],
        "ans": "D",
        "main": "furtive",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 166,
        "question": "These policies have been espoused by the ruling party.",
        "options": ["condemned", "rejected", "supported", "outlined"],
        "ans": "C",
        "main": "espoused",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 167,
        "question": "We must not foreclose reconciliation as the purpose of his trip.",
        "options": ["exclude", "consider", "underestimate", "forgo"],
        "ans": "A",
        "main": "foreclose",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 168,
        "question": "Her findings exploded widely held beliefs about learning.",
        "options": ["challenged", "projected", "confirmed", "debunked"],
        "ans": "D",
        "main": "exploded",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 169,
        "question": "The chairman admires incessant meetings.",
        "options": ["unusual", "planned", "constant", "irregular"],
        "ans": "C",
        "main": "incessant",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 170,
        "question": "Today's weather is favorable for a game of tennis.",
        "options": ["impartial", "abnormal", "encouraging", "disapproving"],
        "ans": "C",
        "main": "favorable",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 171,
        "question": "All the candidate looked aghast at the first reading of the questions.",
        "options": ["fulfilled", "dismayed", "satisfied", "relaxed"],
        "ans": "B",
        "main": "aghast",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 172,
        "question": "Joke gave Muhammad a jaunty smile.",
        "options": ["a discouraging", "an inviting", "a frightful", "a cheerful"],
        "ans": "D",
        "main": "jaunty",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 173,
        "question": "The first round of the tournament was doddle.",
        "options": ["easy", "balanced", "dodgy", "exasperating"],
        "ans": "A",
        "main": "doddle",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 174,
        "question": "The lazy man cast a lustful glance at his neighbor's wife.",
        "options": ["hateful", "quick", "covetous", "envious"],
        "ans": "C",
        "main": "lustful",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 175,
        "question": "They accused him of fomenting political unrest.",
        "options": ["inciting", "discouraging", "preventing", "envious"],
        "ans": "A",
        "main": "fomenting",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 176,
        "question": "You can learn a great deal just from watching other players.",
        "options": ["invest", "accumulate", "allow", "discover"],
        "ans": "D",
        "main": "learn",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 177,
        "question": "All the researchers were asked to garner information on the new viral infection.",
        "options": ["collect", "disseminate", "distort", "give"],
        "ans": "A",
        "main": "garner",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 178,
        "question": "The dispute between the two countries has resulted in the severing of diplomatic relations.",
        "options": ["breaking", "securing", "swapping", "strengthening"],
        "ans": "A",
        "main": "severing",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 179,
        "question": "He picked up the phone expecting to hear the chairman's gruff voice.",
        "options": ["gracious", "musical", "husky", "polite"],
        "ans": "C",
        "main": "gruff",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 180,
        "question": "It has been a fraught day.",
        "options": ["difficult", "pleasant", "wonderful", "solemn"],
        "ans": "A",
        "main": "fraught",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 181,
        "question": "She scowled furiously at his back as he walked away.",
        "options": ["whispered", "grimaced", "screeched", "screamed"],
        "ans": "B",
        "main": "scowled",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 182,
        "question": "The use of this equipment should obviate the problem.",
        "options": ["prevent", "improve", "promote", "worsen"],
        "ans": "A",
        "main": "obviate",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 183,
        "question": "Olisa hoodwinked the men into buying and selling.",
        "options": ["grouped", "lured", "deluded", "drove"],
        "ans": "C",
        "main": "hoodwinked",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 184,
        "question": "There was an infectious gaiety in the children's character.",
        "options": ["exhilaration", "depression", "moodiness", "desperation"],
        "ans": "A",
        "main": "gaiety",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 185,
        "question": "The room was filled with the pungent smell of tobacco.",
        "options": ["placid", "mild", "illegal", "acrid"],
        "ans": "D",
        "main": "pungent",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 186,
        "question": "He lifted his hand in languid manner.",
        "options": ["a sheepish", "a sluggish", "a friendly", "an energetic"],
        "ans": "B",
        "main": "languid",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 187,
        "question": "The lawmaker heckled the chairman of the panel during their last meeting.",
        "options": ["cheered up", "applauded", "shouted down", "restrained"],
        "ans": "C",
        "main": "heckled",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 188,
        "question": "Tolu broke her leg because of her restive nature.",
        "options": ["lively", "relaxed", "patient", "unruly"],
        "ans": "D",
        "main": "restive",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 189,
        "question": "The secretary's speech was interesting, though impromptu.",
        "options": ["unprepared", "improper", "controversial", "important"],
        "ans": "A",
        "main": "impromptu",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 190,
        "question": "The manager of the team is often maligned by the supporters.",
        "options": ["slandered", "cherished", "praised", "hounded"],
        "ans": "A",
        "main": "maligned",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 191,
        "question": "He has a cogent reason for quitting the relationship.",
        "options": [
          "a convincing",
          "an important",
          "a tentative",
          "an unacceptable"
        ],
        "ans": "A",
        "main": "cogent",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 192,
        "question": "Mrs. Adio wasn't yet attuned to her baby's need.",
        "options": ["familiar with", "ready with", "free from", "planning for"],
        "ans": "A",
        "main": "attune",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 193,
        "question": "The witness averred that she had seen Bosun at the scene of the crime.",
        "options": ["argued", "confirmed", "denied", "affirmed"],
        "ans": "D",
        "main": "averred",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 194,
        "question": "The high cost of the living these days calls for a lot of frugality.",
        "options": ["extravagance", "economy", "recklessness", "prudence"],
        "ans": "D",
        "main": "frugality",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 195,
        "question": "Tunde's reaction underscores the points I was making.",
        "options": ["justifies", "summarizes", "emphasizes", "clarifies"],
        "ans": "C",
        "main": "underscores",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 196,
        "question": "Everyone admired the manager's adriot handling of the crisis in the company.",
        "options": ["emphasized", "skillful", "tactless", "clumsy"],
        "ans": "B",
        "main": "adroit",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 197,
        "question": "The principal took exception to the ignoble role the teacher played in the matter.",
        "options": ["embarrassing", "honourable", "extraordinary", "dishonorable"],
        "ans": "D",
        "main": "ignoble",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 198,
        "question": "The mow to expel the chairman was santioned by members of the party.",
        "options": ["unleashed", "oppsosed", "supported", "unitiated"],
        "ans": "C",
        "main": "sanctioned",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 199,
        "question": "Because Jamiu is so easily offended he was not considered for the post of head boy.",
        "options": ["irritable", "stubborn", "troublesome", "docile"],
        "ans": "A",
        "main": "offended",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 200,
        "question": "The witness provided a monstrous account of the event.",
        "options": ["supportive", "tragic", "shocking", "verbatim"],
        "ans": "C",
        "main": "monstrous",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 201,
        "question": "The doctor tried to soothe the patient before the operation.",
        "options": ["examine", "treat", "calm", "induce"],
        "ans": "C",
        "main": "soothe",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 202,
        "question": "Our teacher described Agbo's story as a phantom.",
        "options": ["scary", "realistic", "fanciful", "interesting"],
        "ans": "C",
        "main": "phantom",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 203,
        "question": "I find the way she approaches her customers quite repugnant.",
        "options": ["unpleasant", "attractive", "ungodly", "encouraging"],
        "ans": "A",
        "main": "repugnant",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 204,
        "question": "Participation in the programme is optional.",
        "options": [
          "unnecessary",
          "recommended",
          "hard to justify",
          "a matter of choice"
        ],
        "ans": "D",
        "main": "optional",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 205,
        "question": "The popularity of the military dictator waned after the war.",
        "options": ["increased", "changed", "declined", "skyrocketed"],
        "ans": "C",
        "main": "waned",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 206,
        "question": "The suspect moved stealthily into the court room.",
        "options": ["loudly", "slowly", "fast", "quietly"],
        "ans": "D",
        "main": "stealthily",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 207,
        "question": "Aisha chattered excitedly like a little child.",
        "options": ["played", "talked", "looked", "ran"],
        "ans": "B",
        "main": "chattered",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 208,
        "question": "Usman is one of the President most FEROCIOUS critics.",
        "options": ["Feeble", "Lovely", "Unpleasant", "Objective"],
        "ans": "C",
        "main": "FEROCIOUS",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 209,
        "question": "The scandal ended his METEORIC career.",
        "options": ["Rising", "Weak", "Dangerous", "Beautiful"],
        "ans": "A",
        "main": "METEORIC",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 210,
        "question": "The boy got himself drunk into OBLIVION yesterday.",
        "options": ["Insanity", "Unconsciousness", "Stupidity", "Garrulity"],
        "ans": "B",
        "main": "OBLIVION",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 211,
        "question": "The student was angry because her teacher called her a pilferer.",
        "options": ["Hypocrite", "Liar", "Criminal", "Thief"],
        "ans": "D",
        "main": "pilferer",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 212,
        "question": "The whole community has described John as belligerent.",
        "options": ["Patient", "Combative", "Innocent", "Attractive"],
        "ans": "B",
        "main": "belligerent",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 213,
        "question": "The head boy became timorous when he was asked to give the valedictory speech.",
        "options": ["Happy", "Nervous", "Aggressive", "Excited"],
        "ans": "B",
        "main": "timorous",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 214,
        "question": "He ably maneuver the boat off to the dock.",
        "options": ["poorly", "inexpertly", "deftly", "ineptly"],
        "ans": "C",
        "main": "ably",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 215,
        "question": "They left place at the wee hour of the day.",
        "options": ["safe", "dangerous", "late", "early"],
        "ans": "D",
        "main": "wee",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 216,
        "question": "The new president must deal with the country's fiscal crisis.",
        "options": ["financial", "social", "political", "religious"],
        "ans": "A",
        "main": "fiscal",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 217,
        "question": "His behavior was considered abrasive.",
        "options": ["delightful", "exciting", "good", "unpleasant"],
        "ans": "D",
        "main": "abrasive",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      },
      {
        "id": 218,
        "question": "Models are often abreast of fashion trends.",
        "options": ["insensitive to", "unaware of", "current with", "blind to"],
        "ans": "C",
        "main": "abreast",
        "info": "Choose the word <strong>nearest</strong> in meaning to the underline word in the sentence."
      }
    ],
  },
  {
    topic: "Spelling mistakes",
    questions: [
      {
        id: "b1of",
        question: "They ___ our donation with thanks.",
        options: ["received", "recived", "recieved", "receved", "receipt"],
        ans: "A",
        main: "",
        remark: "",
      },
      {
        id: "x9kj",
        question:
          "On such an important __ all the guests were expected to be at their best.",
        options: ["occassion", "occasion", "ocassion", "occasion", "ocason"],
        ans: "A",
        main: "",
        remark: "",
      },
      {
        id: "vaw2",
        question:
          "I have applied for __ on the campus and I am almost certain I shall get it.",
        options: [
          "acommodation",
          "accommondation",
          "accomodation",
          "accomoddation",
          "accommodation",
        ],
        ans: "E",
        main: "",
        remark: "",
      },
      {
        id: "xq3d",
        question: "Choose the option which is wrongly spelt",
        options: ["disappointed", "embarassed", "equipped", "rhythm"],
        ans: "B",
        main: "",
        remark: "Embarrassed. 'rr' and 'ss'",
      },
      {
        id: "2ngn",
        question: "Choose the option which is wrongly spelt",
        options: ["occurence", "surprise", "personnel", "possess"],
        ans: "A",
        main: "",
        remark: "",
      },
      {
        id: "95kd",
        question: "Choose the option that is wrongly spelt",
        options: ["quiet", "beleive", "proceed", "precede", "opportunity"],
        ans: "B",
        main: "",
        remark: "",
      },
      {
        id: "ahtp",
        question:
          "I was seriously disappointed when the __ between the two teams ended in a goalless draw.",
        options: ["march", "marsh", "match", "mash", "martch"],
        ans: "C",
        main: "",
        remark: "",
      },
      {
        id: "2a0b",
        question:
          "The __ in an attempt to please the workers promised to provide __ for them as soon as possible",
        options: [
          "committee|accommodation",
          "committee|acommodation",
          "committee|accomodation",
          "committee|acommoddation",
          "committee|accomondation",
        ],
        ans: "A",
        main: "",
        remark: "",
      },
      {
        id: "k8sy",
        question:
          "Very few students have satisfactory __ these days. Because the student population has increased tremendously",
        options: [
          "acommondation",
          "accomodation",
          "accommodation",
          "acommoddation",
          "acommodation",
        ],
        ans: "C",
        main: "",
        remark: "",
      },
      {
        id: "aqc2",
        question:
          "That single __ was enough to spoil a whole life time of good living.",
        options: [
          "occurence",
          "ocurence",
          "occurrence",
          "occurrense",
          "ocurrence",
        ],
        ans: "C",
        main: "",
        remark: "",
      },
      {
        id: "m442",
        question:
          "Whilst the thief was __ the passengers, he kept apologizing for the inconvenience he was causing them.",
        options: ["robbing", "rubbing", "robing", "rubing", "robbed"],
        ans: "A",
        main: "",
        remark: "",
      },
      {
        id: "gfz4",
        question:
          "Four persons accused of currency __ are being held by the security agents.",
        options: ["traficking", "traviking", "trafficking", "traffiking"],
        ans: "C",
        main: "",
        remark: "",
      },
      {
        id: "jm4u",
        question:
          "The committee was frustrated because the Chief withheld his __",
        options: ["accent", "access", "assent", "ascent"],
        ans: "C",
        main: "",
        remark: "",
      },
      {
        id: "hfgt",
        question: "He did not attend the final burial __",
        options: ["rite", "rights", "rites", "right"],
        ans: "C",
        main: "",
        remark: "",
      },
      {
        id: "2d5w",
        question: "The officer was compelled to __ the suspect's car.",
        options: ["sieze", "cease", "sieze", "sease"],
        ans: "C",
        main: "",
        remark: "",
      },
      {
        id: "qzrr",
        question: "He missed the point because he took the statement __",
        options: ["literally", "literarily", "literacy", "unilaterally"],
        ans: "A",
        main: "",
        remark: "",
      },
      {
        id: "nj2n",
        question: "Their high __ was an advantage.",
        options: ["moral", "morality", "morale", "morals"],
        ans: "C",
        main: "",
        remark: "",
      },
      {
        id: "4t0q",
        question:
          "My wife and I were to celebrate our silver wedding anniversary last Sunday.Unfortunately on that __ day, my father-in-law died mysteriously. ",
        options: ["fruitless", "faithful", "futile", "fateful"],
        ans: "D",
        main: "",
        remark: "",
      },
      {
        id: "5saw",
        question: "The hunter brought home __ antelope",
        options: ["alive", "a life", "a live", "a living"],
        ans: "C",
        main: "",
        remark: "",
      },
      {
        id: "1wki",
        question: "You can never find Okwu; he is a very __ person.",
        options: ["delusive", "elusive", "illusive", "deceptive"],
        ans: "B",
        main: "",
        remark: "",
      },
      {
        id: "pmhj",
        question:
          "What bothered me about the lecture was that the speaker __ too many irrelevant works.",
        options: ["slighted", "sighted", "sited", "cited"],
        ans: "D",
        main: "",
        remark: "",
      },
      {
        id: "t6ze",
        question: "I have the __ of meeting him.",
        options: ["previlege", "privilege", "previledge", "priviledge"],
        ans: "B",
        main: "",
        remark: "",
      },
      {
        id: "dr3m",
        question: "The pastor said 'lay __ your hearts to God'.",
        options: ["bier", "bear", "bare", "bar"],
        ans: "C",
        main: "",
        remark: "",
        // bear as opposed to bare... bare is the correct answer.
      },
      {
        id: "h3dn",
        question: "Ebun Ojo __ international fame as an actress",
        options: ["aquired", "acquired", "acquared", "aqcuired"],
        ans: "B",
        main: "",
        remark: "",
      },
      {
        id: "y8mv",
        question:
          "The man rose to an important position as a result of __ hardwork.",
        options: ["sheer", "cheer", "share", "shear"],
        ans: "A",
        main: "",
        remark: "",
      },
      {
        id: "bghb",
        question: "The story on the lost jewel was quite __",
        options: [
          "unbelievable",
          "unbelivable",
          "unbelieveable",
          "unbelivable",
        ],
        ans: "A",
        main: "",
        remark: "",
      },
      {
        id: "usmm",
        question: "The patient is suffering from__",
        options: ["reumatism", "rheumantism", "rhuematism", "rheumatism"],
        ans: "D",
        main: "",
        remark: "",
      },
      {
        id: "6s04",
        question: "She has a set of gold __",
        options: ["earing", "earings", "earrings", "ear-ring"],
        ans: "C",
        main: "",
        remark: "",
      },
      {
        id: "e3pa",
        question: "The attitude of my students to __ baffles me.",
        options: [
          "pronunciation",
          "pronounciation",
          "pronunceation",
          "pronounceation",
        ],
        ans: "A",
        main: "",
        remark: "pro<strong>nun</strong>ciation",
      },
      {
        id: "aznc",
        question: "I have no respect for individuals who are too __",
        options: ["compliance", "complaint", "compliable", "complicated"],
        ans: "B",
        main: "",
        remark: "",
      },
      {
        id: "l89f",
        question: "She usually works hard; but __ she could be very lazy.",
        options: ["at times", "atimes", "attimes", "at time"],
        ans: "A",
        main: "",
        remark: "",
      },
      {
        id: "2ouw",
        question: "My __ is for you to refuse the __",
        options: [
          "advise|advice",
          "advice|advice",
          "advice|advise",
          "advise|advise",
        ],
        ans: "B",
        main: "",
        remark: "adivce(noun) is used in both cases.",
      },
      {
        id: "74gk",
        question: "She has the __ of being intellgent when in fact she is not.",
        options: ["elision", "illusion", "delusion", "allusion"],
        ans: "C",
        main: "",
        remark: "",
      },
      {
        id: "ua27",
        question:
          "The __ engineer was unhappy with the shoddy work done by the contractors.",
        options: ["cite", "sight", "site", "side"],
        ans: "C",
        main: "",
        remark: "",
      },
      {
        id: "3gqy",
        question: "The development is to be carried to the __ level",
        options: ["grass root", "grassroots", "grassroot", "grass-root"],
        ans: "B",
        main: "",
        remark: "",
      },
      {
        id: "g1ul",
        question:
          "Soyinka's masterful __ of the atmosphere of his childhood helped to make his book, Ake, an outright.",
        options: ["evocation", "invocation", "convocation", "revocation"],
        ans: "A",
        main: "",
        remark: "",
      },
      {
        id: "yffs",
        question: "They were all behaving like a bunch of __ children",
        options: ["querulous", "querrulous", "querrullous", "quarrelous"],
        ans: "A",
        main: "",
        remark: "",
      },
      {
        id: "9qxm",
        question: "The Governor rejected the bill and withheld his __",
        options: ["access", "accent", "assent", "ascent"],
        ans: "C",
        main: "",
        remark: "",
      },
      {
        id: "ahcv",
        question:
          "The warring officer said that more__ would be needed to prosecute the war.",
        options: ["geurillas", "guerrillas", "geurrilas", "geurrillas"],
        ans: "B",
        main: "",
        remark: "",
      },
      {
        id: "rypt",
        question: "The warring factions need words of __",
        options: ["advise", "advises", "advice", "adverse"],
        ans: "C",
        main: "",
        remark: "",
      },
      {
        id: "mo7r",
        question: "The sergeant spoke to me in a __ manner.",
        options: ["coerce", "coarse", "course", "casual"],
        ans: "B",
        main: "",
        remark: "",
      },
      {
        id: "d75t",
        question: "I have the __ of meeting the president",
        options: ["privilege", "priviledge", "privelege", "previlege"],
        ans: "A",
        main: "",
        remark: "",
      },
      {
        id: "wggq",
        question: "I shall find time for my __ when I get __",
        options: [
          "pass-time|over",
          "pastime|through",
          "past-time|over",
          "passtime|through",
        ],
        ans: "B",
        main: "",
        remark: "",
      },
      {
        id: "p1r5",
        question:
          "No teacher of honor would subject his student to any form of __",
        options: ["harrasment", "harrassment", "harassment", "harassement"],
        ans: "C",
        main: "",
        remark: "",
        // harassment is a single r and double ss
      },
      {
        id: "vvi1",
        question:
          "All God's prophets were given the great __ to preach salvation to people.",
        options: ["comission", "commission", "commision", "commition"],
        ans: "B",
        main: "",
        remark: "",
      },
      {
        id: "t826",
        question:
          "A nursery rhyme is used to teach pupils how to spell the word __",
        options: [
          "hippoppotemus",
          "hippopotamus",
          "hipoppotemus",
          "hipoppotamus",
        ],
        ans: "B",
        main: "",
        remark: "",
      },
      {
        id: "e7gt",
        question: "Did you have__ when you went to visit the medical doctor?",
        options: ["diarrhoea", "diarrhae", "diarhoea", "diarhea"],
        ans: "A",
        main: "",
        remark: "",
      },
      {
        id: "hi1j",
        question: "When we looked up, we __  the plane some miles away",
        options: ["sited", "sighted", "site", "cited"],
        ans: "B",
        main: "",
        remark: "",
      },
      {
        id: "t2ed",
        question:
          "The __ part of a new book is often written by a more experienced wirter than the author",
        options: ["foreward", "foreword", "forward", "forword"],
        ans: "B",
        main: "",
        remark: "",
      },
      {
        id: "4h0b",
        question:
          "It is important that you clear the refuse in front of your house every __",
        options: ["fourtnight", "fortnight", "fourthnight", "forthnight"],
        ans: "B",
        main: "",
        remark: "",
      },
      {
        id: "bggp",
        question:
          "There are many ways to kill a rat, so we should be __ in our approach to the taks ahead of us.",
        options: ["ecletic", "eclectic", "eclektic", "eclectik"],
        ans: "B",
        main: "",
        remark: "",
      },
      {
        id: "yraw",
        question: "Here is Mr Odumusu who teaches English __ in our school.",
        options: [
          "pronuntiation",
          "pronounciation",
          "pronunciation",
          "pronountiation",
        ],
        ans: "C",
        main: "",
        remark: "",
      },
      {
        id: "r4km",
        question: "Please sit on the __",
        options: ["carier", "career", "carrier", "carrear"],
        ans: "C",
        main: "",
        remark: "",
      },
      {
        id: "sm62",
        question:
          "I want to __ this chance to acquaint you with the latest development.",
        options: ["size", "seize", "sieze", "cease"],
        ans: "B",
        main: "",
        remark: "",
      },
      {
        id: "t6sg",
        question: "He started his career as an __ teacher",
        options: ["auxillary", "auxilliary", "auxilary", "auxiliary"],
        ans: "D",
        main: "",
        remark: "",
      },
      {
        id: "hygv",
        question: "__ a good leader must have two characteristics",
        options: [
          "first and formost",
          "first and formust",
          "first and farmost",
          "first and foremost",
        ],
        ans: "D",
        main: "",
        remark: "",
      },
      {
        id: "c17z",
        question:
          "This professor of __ medicine has __ the mystery of bird flu.",
        options: [
          "vetinary|unraveled",
          "vertinary|unravelled",
          "veterinary|unraveled",
          "veterinary|unravelled",
        ],
        ans: "D",
        main: "",
        remark: "",
      },
      {
        id: "zweo",
        question: "Our teacher defined __ in his introductory lesson.",
        options: ["onomatopoeia", "onomatopeia", "onomatopiea", "onomatopaeia"],
        ans: "A",
        main: "",
        remark: "",
      },
      {
        id: "1gpz",
        question: "The students had a __ on Independence Day.",
        options: ["march pass", "match pass", "march past", "match past"],
        ans: "C",
        main: "",
        remark: "",
      },
      {
        id: "h5r5",
        question:
          "His father hardly misses the news because he goes about with his __ radio",
        options: ["pointable", "pottable", "potable", "portable"],
        ans: "D",
        main: "",
        remark: "",
      },
    ],
  },
  {
    topic: "Common mistakes",
    questions: [
      {
        id: "d9k0",
        question:
          "As he was still owing me two Naira, I was careful not to __ him any more money",
        options: ["lend", "loan", "borrow", "extend"],
        ans: "A",
        main: "",
        remark:
          "'Lend' involves giving while 'borrow' is taking. You lend sb your money or borrow their money; or they lend you their money or they borrow your money.",
      },
      {
        id: "qe3m",
        question: "They __ receive visitors at short notice.",
        options: [
          "use to",
          "are used to",
          "used to",
          "are always",
          "are use to",
        ],
        ans: "C",
        main: "",
        remark:
          "They did receive visitors on short notice in the past but no longer do so nowadays",
      },
      {
        id: "rbn2",
        question: "For __ he is secretary, we shall not have correct minutes.",
        options: ["because", "as long as", "so long", "in as much", "although"],
        ans: "B",
        main: "",
        remark: "",
      },
      {
        id: "jco1",
        question:
          "Before we left the airport. each passenger was made to __ certain forms.",
        options: ["fill in", "write in", "enter in", "flew down", "stopped"],
        ans: "A",
        main: "",
        remark: "Never omit the preposition 'in' from 'fill in certain forms'",
      },
      {
        id: "fhq5",
        question: "We should take care __ the robbers come back",
        options: ["may be", "should in case", "perhaps", "probably", "in case"],
        ans: "E",
        main: "",
        remark:
          "should = in case. It is no less tautological to say 'I cannot be able' than to say 'should in case'. Both are errors!",
      },
      {
        id: "cbhx",
        question: "Isn't it high time you __ your office?",
        options: ["are leaving", "do leave", "leave", "left", "did leave"],
        ans: "D",
        main: "",
        remark: "",
      },
      {
        id: "msj2",
        question:
          "Mr. Thomas talked __ about the successes of his institute in the past year.",
        options: [
          "at a great length",
          "for great length",
          "at great length",
          "for a great length",
          "at great lengths",
        ],
        ans: "C",
        main: "",
        remark: "At length or at great length (no article involved)",
      },
      {
        id: "q1a7",
        question: "The members of the panels were __",
        options: [
          "discussing about it",
          "discussing on it",
          "discussing upon it",
          "discussing it",
          "discussing around it",
        ],
        ans: "D",
        main: "",
        remark: "'Discuss' does not require a preposition",
      },
      {
        id: "du9a",
        question: "This writer analyses the evils of the society __",
        options: [
          "so masterly",
          "very masterly",
          "in such a masterly way",
          "in a masterly way",
          "in so masterly away",
        ],
        ans: "D",
        main: "",
        remark: "",
      },
      {
        id: "ydbn",
        question: "It was a long poem but he learnt it __",
        options: [
          "off head",
          "in memory",
          "by heart",
          "at heart",
          "from memory",
        ],
        ans: "C",
        main: "",
        remark:
          "You learn by heart, commit to memory, recite offhand (not off head), young at heart, in memory of, to the memory of sb.",
      },
      {
        id: "ba9h",
        question: "We ought to stay away __ the robbers come back.",
        options: ["provided", "should in case", "although", "in case", "since"],
        ans: "D",
        main: "",
        remark: "",
      },
      {
        id: "p2qs",
        question: "Ikorodu is not far from here., it is only an __",
        options: [
          "hour of driving",
          "hour's drive",
          "hour by driving",
          "hour in driving",
          "hours drive",
        ],
        ans: "B",
        main: "",
        remark:
          "Similar examples: two days' journey; five weeks' wages; six hours' drive; six-hour drive",
      },
      {
        id: "uc2r",
        question: "It is time we __",
        options: ["should be going", "ought to go", "are going", "went", "go"],
        ans: "D",
        main: "",
        remark: "",
      },
      {
        id: "b3n3",
        question: "You __ to know better than illiterate farmer.",
        options: [
          "are suppose",
          "are supposed",
          "suppose",
          "have supposed",
          "are supposing",
        ],
        ans: "B",
        main: "",
        remark: "Pattern: be + supposed + to + infinitive",
      },
      {
        id: "lo0r",
        question:
          "The Executive President honored the messenger with the Grand commander of the NIger award __ his industry and meritorious service to the nation.",
        options: [
          "on recognition of",
          "in recognition to",
          "by recognition of",
          "in recognition of",
        ],
        ans: "D",
        main: "",
        remark: "",
      },
      {
        id: "8toj",
        question:
          "A society __ individuals each of whom has hit attributes and distinct characteristics.",
        options: [
          "is constituted of",
          "comprises of",
          "consists of",
          "contains of",
          "is made from",
        ],
        ans: "C",
        main: "",
        remark: "Comprises and contains require no preposition after them.",
      },
      {
        id: "aaxf",
        question:
          "Olukayode __ as a mechanic when he younh, but now he is a driver.",
        options: [
          "had been working",
          "used to work",
          "would work",
          "would have worked",
          "used to worked",
        ],
        ans: "B",
        main: "",
        remark: "",
      },
      {
        id: "zt6n",
        question:
          "If we went to any European country, __ Britain, we should need a substantial amount of money to pay our way.",
        options: [
          "like",
          "let us say",
          "as an example",
          "like say",
          "if we say",
        ],
        ans: "B",
        main: "",
        remark:
          "To cite examples, you use expression 'let us say' (or let's say) or just 'say'",
      },
      {
        id: "c33s",
        question: "The horse is a winner, ___",
        options: [
          "you can take that from me",
          "you can say I say so",
          "you can take my word for it",
          "it is my word against theirs",
          "you may or may not believe it",
        ],
        ans: "A",
        main: "",
        remark: "",
      },
      {
        id: "q2xx",
        question: "The prices __ are too high for us",
        options: [
          "you lent me",
          "you quoted",
          "you attended",
          "you gave me",
          "you want to buy",
        ],
        ans: "B",
        main: "",
        remark: "You quote a customer a price for sth/for doing sth.",
      },
      {
        id: "lr9k",
        question: "The method __ does not give the expected results.",
        options: [
          "you recommended",
          "you visited",
          "you told",
          "you sent me",
          "you wanted",
        ],
        ans: "A",
        main: "",
        remark: "",
      },
      {
        id: "3uyg",
        question:
          "Oxygen is necessary to life. Nothing can live without it. It was __ a century ago.",
        options: ["invented", "found out", "discovered", "learnt", "extracted"],
        ans: "C",
        main: "",
        remark:
          "You 'discovered' sth which is naturally occuring but hitherto unknown to others but you 'invented' a new thing which never existed naturally.",
      },
      {
        id: "kx9s",
        question: "I am afraid you cannot use this telephone; it is __",
        options: [
          "out of order",
          "in order",
          "for order",
          "at order",
          "with order",
        ],
        ans: "A",
        main: "",
        remark:
          "to be 'out of order' is 'not' to be working properly/correctly",
      },
      {
        id: "42bq",
        question:
          "Must you always __ lies? Why don't you __ the truth for once.",
        options: ["speak", "say", "talk", "tell", "utter"],
        ans: "D",
        main: "",
        remark: "",
      },
      {
        id: "al3w",
        question: "Could I ring him up? I'd rather you __",
        options: [
          "visit him",
          "visited him",
          "would visit him",
          "visiting him",
          "will visit him",
        ],
        ans: "B",
        main: "",
        remark: "",
      },
      {
        id: "inuw",
        question:
          "Shall we go to the Union meeting? No thank you, I do not feel like __ anywhere",
        options: ["go", "going", "to go", "to have gone", "went"],
        ans: "B",
        main: "",
        remark: "",
      },
      {
        id: "xoz4",
        question:
          "I was able to __ Olu my book because he promised to return it the following day",
        options: ["borrow", "give", "lend", "lease", "secure"],
        ans: "C",
        main: "",
        remark: "",
      },
      {
        id: "zbbk",
        question:
          "No sooner had the examination ended __ the students started vacating the halls of residence",
        options: ["when", "that", "than", "before", "and"],
        ans: "C",
        main: "",
        remark: "No sooner...than",
      },
      {
        id: "c3sl",
        question: "The Chairman ruled the impertinent speaker __",
        options: [
          "according to order",
          "out of order",
          "contrary to order",
          "disorderly",
          "correctly",
        ],
        ans: "B",
        main: "",
        remark: "",
      },
      {
        id: "ymqm",
        question: "He bought a typewriter with a view __ to type",
        options: [
          "to learning",
          "to learnt",
          "to be learning",
          "to be learnt",
          "to have learnt",
        ],
        ans: "A",
        main: "",
        remark: "",
      },
      {
        id: "21b2",
        question: "It is time we __ this irresponsible member",
        options: [
          "expel",
          "are to expel",
          "will expel",
          "are expelling",
          "expelled",
        ],
        ans: "E",
        main: "",
        remark: "",
      },
      {
        id: "hdap",
        question: "Although he was invited __ he was not welcome.",
        options: ["but", "yet", "so", "since", "no correct response"],
        ans: "E",
        main: "",
        remark: "",
      },
      {
        id: "7iuh",
        question: "Excuse me, do you mind __ I smoke?",
        options: ["because", "if", "since", "while", "against"],
        ans: "B",
        main: "",
        remark: "",
      },
      {
        id: "3bf8",
        question: "Without __ words he accused him directly of treachery",
        options: ["amending", "modifying", "mixing", "mincing", "meaning"],
        ans: "D",
        main: "",
        remark: "",
      },
      {
        id: "t98c",
        question: "He is easily the __ of the lot.",
        options: [
          "brightest",
          "brighter",
          "more bright",
          "most brightest",
          "most bright",
        ],
        ans: "A",
        main: "",
        remark: "",
      },
      {
        id: "fghn",
        question: "He devoted himself __ homeless children",
        options: [
          "to helping",
          "to help",
          "by helping",
          "with helping",
          "helping",
        ],
        ans: "A",
        main: "",
        remark: "",
      },
      {
        id: "d40b",
        question: "I wish I __ to swim when I was younger.",
        options: [
          "had learnt",
          "learn",
          "learnt",
          "was learning",
          "have learnt",
        ],
        ans: "A",
        main: "",
        remark: "",
      },
      {
        id: "2hi6",
        question: "It was a blind alley. I could not walk any __",
        options: ["far", "farthest", "furthest", "farther", "further"],
        ans: "E",
        main: "",
        remark: "",
      },
      {
        id: "zx5n",
        question:
          "My younger brother looked ill last night, and was evidently __ this morning.",
        options: ["worse", "worst", "more ill", "leaner", "brighter"],
        ans: "A",
        main: "",
        remark: "",
      },
      {
        id: "myeg",
        question:
          "Joe had found a flat, so __ he will not be sleeping here, even if he still comes for meals.",
        options: ["lastly", "least", "last", "at last", "at least"],
        ans: "E",
        main: "",
        remark: "",
      },
      {
        id: "knqi",
        question: "I was in such a hurry, I didn't have time to __ 'Hello'.",
        options: ["tell", "speak", "talk", "say", "utter"],
        ans: "D",
        main: "",
        remark: "",
      },
      {
        id: "bw41",
        question:
          "The old shoemaker at the corner of our street is __ so I hope you will patronize him.",
        options: [
          "mine shoemaker",
          "a tight friend",
          "a good customer",
          "my customer",
          "a close friend",
        ],
        ans: "E",
        main: "",
        remark: "",
      },
      {
        id: "nw5o",
        question: "You can go on; I __ what you are saying.",
        options: [
          "am understanding",
          "may be understanding",
          "was understanding",
          "will be understanding",
          "understand",
        ],
        ans: "E",
        main: "",
        remark: "",
      },
      {
        id: "rwrv",
        question:
          "I have refused to give him my pen because I don't want him to __ it again.",
        options: ["loss", "loose", "lose", "lost", "lend"],
        ans: "C",
        main: "",
        remark: "",
      },
      {
        id: "ll92",
        question:
          "We were all delighted when the beautiful lady in our house__ a bouncing baby boy.",
        options: [
          "delivered",
          "born",
          "brought forth",
          "gave birth to",
          "gave bath to",
        ],
        ans: "D",
        main: "",
        remark: "",
      },
      {
        id: "ftf7",
        question:
          "The wicked boy threw a stone at the bird smashing __ two legs.",
        options: ["its", "it's", "it", "is", "its'"],
        ans: "A",
        main: "",
        remark: "",
      },
      {
        id: "kpus",
        question: "Would you mind __ the door, please?",
        options: [
          "to shut",
          "to be shutting",
          "shutting",
          "to have been shutting",
          "to have shut",
        ],
        ans: "C",
        main: "",
        remark: "",
      },
      {
        id: "um4x",
        question: "I am not used to __ on left",
        options: [
          "drive",
          "having driven",
          "driving",
          "have driven",
          "being driving",
        ],
        ans: "C",
        main: "",
        remark: "",
      },
    ],
  },
  {
    topic: "Noun | Pronoun",
    questions: [
      {
        "id": 1,
        "question": "If you travel by air you will be given an allowance to cover __",
        "options": ["a luggage", "luggage", "luggages", "a baggage", "baggages"],
        "ans": "B",
        "main": "",
        "remark": "Luggage and baggage are uncountable nouns hence cannot be preceded by \"a\", \"an\", \"one\", \"two\" etc. An ending -s is similarly grammatically offensive."
      },
      {
        "id": 2,
        "question": "The green snake which lives in the green grass is using a perfect __",
        "options": ["ambush", "under cover", "camouflage", "shelter", "subterfuge"],
        "ans": "C",
        "main": "",
        "remark": "Camouflage(n) = Blending with environment with an intention to hide."
      },
      {
        "id": 3,
        "question": "Remember this matter is strictly __",
        "options": [
          "between you and I",
          "among you and I",
          "among you and me",
          "between you and me",
          "between you and myself"
        ],
        "ans": "D",
        "main": "",
        "remark": ""
      },
      {
        "id": 4,
        "question": "Invariably, he ends all his letters with '___ amicably'",
        "options": ["you", "yours", "yours'", "your's", "your own"],
        "ans": "B",
        "main": "",
        "remark": "Yours simply means \"your own\" and avoid the pitfall of your's (= your is) because it makes no sense."
      },
      {
        "id": 5,
        "question": "My father cannot bear the __ of the concoction that emanates from my mother's soup pot.",
        "options": ["sweet", "savouring", "aroma", "smell", "scent"],
        "ans": "C",
        "main": "",
        "remark": "Aroma = sweet, noticeable smell"
      },
      {
        "id": 6,
        "question": "Although he is in all respect a poor student, he has managed to buy a tape recorder to improve his ___ of French.",
        "options": ["mastery", "mastering", "speaking", "ideas", "thinking"],
        "ans": "A",
        "main": "",
        "remark": "Mastery = knowledge or understanding of something; firm grip; a good grasp; good command of."
      },
      {
        "id": 7,
        "question": "___ marked an important step in the history of the industrial revolution.",
        "options": [
          "The invention of the locomotive engine",
          "The discovery of locomotion",
          "The discovery of the engine",
          "Inquiry into locomotion",
          "The process of locomotion"
        ],
        "ans": "A",
        "main": "",
        "remark": "Invention = producing sth which is not natural"
      },
      {
        "id": 8,
        "question": "In West Africa the ___ of sickle cell is about 25 per cent.",
        "options": ["incident", "incidence", "accident", "accidence", "incense"],
        "ans": "B",
        "main": "",
        "remark": "Incidence = Frequency of an event, number of victims of disease/disaster etc."
      },
      {
        "id": 9,
        "question": "David can only become more mature through ___ to life outside his home.",
        "options": ["posting", "exposure", "exposition", "exposing", "positioning"],
        "ans": "B",
        "main": "",
        "remark": "Exposure = being exposed (to experiencing sth)"
      },
      {
        "id": 10,
        "question": "The Nigerian Society of Engineers has set up ___ to study the nation's problem",
        "options": [
          "a brain trust",
          "a tribunal",
          "an enquiry",
          "an inquest",
          "a task force"
        ],
        "ans": "E",
        "main": "",
        "remark": "Task force = a group of people assigned to do sth such as making an enquiry or solving a problem."
      },
      {
        "id": 11,
        "question": "The giant hydro-electric project is among the ___ of colonial rule in Southern Africa",
        "options": ["inheritance", "remnants", "legacies", "evidence", "trappings"],
        "ans": "C",
        "main": "",
        "remark": "legacy is sth(usually good) left behind"
      },
      {
        "id": 12,
        "question": "The Head of State in his New Year Broadcast to the nation emphasized the need for Nigerians to regard ___ as members of the same family.",
        "options": [
          "themselves",
          "one another",
          "each other",
          "yourselves",
          "theirselves"
        ],
        "ans": "B",
        "main": "",
        "remark": "One another is used when three or more persons or things are involved while each other for two. These pronouns must not be confused with reflexive pronouns (themselves, ourselves, yourselves)"
      },
      {
        "id": 13,
        "question": "The neighbour's children always make ___ when she is not at home.",
        "options": [
          "noises",
          "plenty of noises",
          "plenty noise",
          "lots of noises",
          "a lot of noise"
        ],
        "ans": "E",
        "main": "",
        "remark": "noise is both countable and uncountable. However, noises doesn't exist"
      },
      {
        "id": 14,
        "question": "The Land Decree does not concern itself with achieving ___ in landed property ownership, since those who already own large estates can keep them for good.",
        "options": ["equality", "balance", "fifty-fifty", "sanity", "efficiency"],
        "ans": "A",
        "main": "",
        "remark": ""
      },
      {
        "id": 15,
        "question": "You should make an ___ to improve the situation.",
        "options": [
          "effect",
          "efficiency",
          "effectiveness",
          "effort",
          "effectualness"
        ],
        "ans": "D",
        "main": "",
        "remark": "effort = attempt"
      },
      {
        "id": 16,
        "question": "Ogendegbe kept goal for his club team because there wasn't ___ to do it.",
        "options": [
          "somebody else",
          "nobody else",
          "any other body",
          "no other body",
          "anybody else"
        ],
        "ans": "E",
        "main": "",
        "remark": ""
      },
      {
        "id": 17,
        "question": "Now that I realize the full extent of your ___ I am afraid it will be impossible for me to ever trust you again.",
        "options": [
          "dubiousness",
          "corruption",
          "deceptiveness",
          "duplicity",
          "inconsistency"
        ],
        "ans": "D",
        "main": "",
        "remark": "Duplicity = dishonest behavior, deceit, deception. Please note that dubiousness and deceptiveness are not english words"
      },
      {
        "id": 18,
        "question": "It is very difficult to capture the subtle ___ of words when translated from one language to another.",
        "options": [
          "essence",
          "denotations",
          "connotations",
          "inflexions",
          "insults"
        ],
        "ans": "C",
        "main": "",
        "remark": "connotations = the meaning of word in addition to the idea it contrues"
      },
      {
        "id": 19,
        "question": "As it holds true that, unless you train your body you cannot be an athlete, so also unless you train your ___ you cannot be a ___",
        "options": [
          "kicking-footballer",
          "voice-choirmaster",
          "mind-scholar",
          "courage-hero",
          "arms-swimmer"
        ],
        "ans": "C",
        "main": "",
        "remark": "training your mind actually makes you a scholar."
      },
      {
        "id": 20,
        "question": "You surely want ___ in your tea, don't you?",
        "options": ["all milk", "a milk", "some milk", "every milk", "any milk"],
        "ans": "C",
        "main": "",
        "remark": "MIlk as uncountable noun"
      },
      {
        "id": 21,
        "question": "Peter's ___ a cold upsets our plan.",
        "options": [
          "catches",
          "will catch",
          "to catch",
          "to have caught",
          "catching"
        ],
        "ans": "E",
        "main": "",
        "remark": "\"Peter's\" denotes possession and must be followed by a noun (catching as a gerund). Peter's catching is a noun phrase."
      },
      {
        "id": 22,
        "question": "As ___ of you as can come are welcome.",
        "options": ["each", "any", "many", "more", "most"],
        "ans": "C",
        "main": "",
        "remark": "\"Many\" denotes a large number; no upper limit is targeted."
      },
      {
        "id": 23,
        "question": "Some people think that ___ are potentially a nuissance",
        "options": [
          "parent-in-law",
          "parents-in-law",
          "parents-in-laws",
          "parent-in-laws",
          "parents-ins-laws"
        ],
        "ans": "B",
        "main": "",
        "remark": "Parent is key in this compound noun hence takes the -s for plural"
      },
      {
        "id": 24,
        "question": "Shakespearian ___ are generally the victims of circumstances",
        "options": ["heros", "heres", "heroses", "hero", "heroes"],
        "ans": "E",
        "main": "",
        "remark": "Heroes not heros. take note."
      },
      {
        "id": 25,
        "question": "Asmau, did you see the snapshot of ___",
        "options": ["yourself", "you", "yours", "yourselves", "herself"],
        "ans": "A",
        "main": "",
        "remark": ""
      },
      {
        "id": 26,
        "question": "I can't mind the light. I don't know ___ about electricity.",
        "options": ["something", "nothing", "anything", "nobody", "anybody"],
        "ans": "C",
        "main": "",
        "remark": ""
      },
      {
        "id": 27,
        "question": "___ reached 18.7% of the U.S population.",
        "options": [
          "Employed",
          "Unemployment",
          "Employers",
          "Employees",
          "Underemployment"
        ],
        "ans": "B",
        "main": "",
        "remark": ""
      },
      {
        "id": 28,
        "question": "The schoolboy screamed loudly when he saw a snake ___ looked terrifying.",
        "options": ["it", "who", "and", "he", "which"],
        "ans": "E",
        "main": "",
        "remark": "Using appropriate relative pronoun; who is used for human"
      },
      {
        "id": 29,
        "question": "Eko bridge, linking Lagos island to Surulere, has",
        "options": [
          "many traffic",
          "numerous vehicles",
          "uncontrollable traffic",
          "plenty traffic",
          "a lot of traffic"
        ],
        "ans": "E",
        "main": "",
        "remark": "traffic is an uncountable noun."
      },
      {
        "id": 30,
        "question": "The passenger waited patiently whilst they transferred his __ from the taxi to the bus.",
        "options": ["properties", "baggages", "luggage", "luggages", "property"],
        "ans": "C",
        "main": "",
        "remark": ""
      },
      {
        "id": 31,
        "question": "Will you know if that dog is ___? He has lost a brown and black one.",
        "options": [
          "Adebowale's",
          "Adebowales'",
          "Adebowale's own",
          "the Adebowales",
          "the Adebowale's"
        ],
        "ans": "A",
        "main": "",
        "remark": ""
      },
      {
        "id": 32,
        "question": "Jane and Jarawa love ___ very much.",
        "options": [
          "themselves",
          "each other",
          "one another",
          "theirselves",
          "each others"
        ],
        "ans": "B",
        "main": "",
        "remark": "when two people are involved, each other is correct, when three or more are involved, one another is correct."
      },
      {
        "id": 33,
        "question": "She got into trouble because she refused to listen to the ___ given by her friends and relatives.",
        "options": [
          "many of the advice",
          "series of advices",
          "piece of advices",
          "advice",
          "lots of advices"
        ],
        "ans": "D",
        "main": "",
        "remark": ""
      },
      {
        "id": 34,
        "question": "When we were coming back from the picnic last Friday, there ___ on Eko bridge.",
        "options": [
          "were many traffics",
          "was much traffic",
          "were plenty traffic",
          "were lots of traffic",
          "was a few traffic"
        ],
        "ans": "B",
        "main": "",
        "remark": ""
      },
      {
        "id": 35,
        "question": "I'm sorry I can't go to the theatre with you as I have ___ to do.",
        "options": [
          "many works",
          "a work",
          "plenty work",
          "much work",
          "lots and lots of work"
        ],
        "ans": "D",
        "main": "",
        "remark": ""
      },
      {
        "id": 36,
        "question": "When the policemen received ___ about the hide-out of the armed robbers, they went there in full force to arrest them.",
        "options": [
          "full informations",
          "all the necessary informations",
          "some informations",
          "an information",
          "full information"
        ],
        "ans": "E",
        "main": "",
        "remark": "Information is an uncountable noun, it cannot take any form of article, a/an/the, and it cannot take an s"
      },
      {
        "id": 37,
        "question": "The violent storm that occured on Easter Monday destroyed many houses and caused ___ in Lagos generally.",
        "options": [
          "heavy damages",
          "much damage",
          "several damages",
          "plenty damages",
          "many damages"
        ],
        "ans": "B",
        "main": "",
        "remark": "Whatever the extent of the damage is, the noun damage remains uncountable"
      },
      {
        "id": 38,
        "question": "The farmer has brought the insecticide because he was bent on ___ the insects in his farm.",
        "options": [
          "exterminating",
          "estimating",
          "extenuating",
          "extinguishing",
          "exemplifying"
        ],
        "ans": "A",
        "main": "",
        "remark": ""
      },
      {
        "id": 39,
        "question": "The school Board has placed an order for ___",
        "options": [
          "all the furniture and equipments required in the new schools",
          "all the furniture and equipment required in the new schools",
          "all of the furniture and equipments required in the new schools",
          "many of the furnitures and equipments required in the new schools"
        ],
        "ans": "B",
        "main": "",
        "remark": "Furniture and equipment are uncountable nouns"
      },
      {
        "id": 40,
        "question": "The candidate made ___ at the village square a day before the elections.",
        "options": ["a sermon", "an address", "a eulogy", "a lecture", "a speech"],
        "ans": "E",
        "main": "",
        "remark": ""
      },
      {
        "id": 41,
        "question": "One of the ___ during the football match led to fight between the teams.",
        "options": [
          "incidence",
          "incidences",
          "incidents",
          "occasions",
          "linesmen"
        ],
        "ans": "C",
        "main": "",
        "remark": ""
      },
      {
        "id": 42,
        "question": "The hotel ___ is at Wurno Road.",
        "options": [
          "which I am staying",
          "in where I am staying",
          "that I am staying",
          "at which I am staying",
          "I stay"
        ],
        "ans": "E",
        "main": "",
        "remark": ""
      },
      {
        "id": 43,
        "question": "The government suffered a ___ when they lost two elections",
        "options": ["check", "set-back", "hindrance", "disturbance", "recession"],
        "ans": "B",
        "main": "",
        "remark": ""
      },
      {
        "id": 44,
        "question": "Wherever the leader went people struggle to catch a ___ of him",
        "options": ["look", "view", "glimpse", "portrait", "picture"],
        "ans": "C",
        "main": "",
        "remark": "glimpse = a brief look at sth/sb"
      },
      {
        "id": 45,
        "question": "The principal went to buy some __ for the physics laboratory.",
        "options": [
          "equipment",
          "pieces of equipments",
          "equipments",
          "items of equipments",
          "list of equipment"
        ],
        "ans": "A",
        "main": "",
        "remark": ""
      },
      {
        "id": 46,
        "question": "The market women ___ profit ranges from thirty to fifty percent are making ___ difficult for the ordinary people.",
        "options": [
          "for who | to live",
          "for whom | lives",
          "by whose | living",
          "whose | life",
          "whose | leaving"
        ],
        "ans": "D",
        "main": "",
        "remark": ""
      },
      {
        "id": 47,
        "question": "After we have taken our share, we shall give __ to them.",
        "options": ["their", "their's", "theirs", "there", "there's"],
        "ans": "C",
        "main": "",
        "remark": ""
      },
      {
        "id": 48,
        "question": "I gave the book to the library attendant ___I think works in the evenings",
        "options": ["whom", "whose", "which", "who", "of whom"],
        "ans": "A",
        "main": "",
        "remark": ""
      },
      {
        "id": 49,
        "question": "The politicians are responsible for the ___ of events have taken in this country",
        "options": ["course", "curse", "coarse", "cause", "corse"],
        "ans": "A",
        "main": "",
        "remark": ""
      },
      {
        "id": 50,
        "question": "I do not want __ from such a friend as Jimoh.",
        "options": [
          "any more advices",
          "no more advice",
          "any advices",
          "no advice",
          "any advice"
        ],
        "ans": "E",
        "main": "",
        "remark": ""
      },
      {
        "id": 51,
        "question": "The court ordered the lorry driver to pay for the __ to my car.",
        "options": [
          "damages",
          "heavy damages",
          "destruction",
          "many damages",
          "damage"
        ],
        "ans": "E",
        "main": "",
        "remark": ""
      },
      {
        "id": 52,
        "question": "Journalists always collect and publish ___",
        "options": [
          "informations",
          "an information",
          "some informations",
          "information",
          "much informations"
        ],
        "ans": "D",
        "main": "",
        "remark": ""
      },
      {
        "id": 53,
        "question": "I have received the answer scripts of Peter and John. What about __?",
        "options": ["Ngozi", "Ngozi's own", "Ngozis", "Ngozis'", "Ngozi's"],
        "ans": "E",
        "main": "",
        "remark": ""
      },
      {
        "id": 54,
        "question": "Jilbril found that thieves had entered his house in his absence. He went to the police to report the __",
        "options": ["break out", "break up", "break in", "break into"],
        "ans": "C",
        "main": "",
        "remark": "break in = forceful entry into a biulding usually to steal"
      },
      {
        "id": 55,
        "question": "\"I'm sorry I can't give you any of the oranges, I have __ left\"",
        "options": ["few", "little", "only a little", "a few"],
        "ans": "A",
        "main": "",
        "remark": ""
      },
      {
        "id": 56,
        "question": "__ yet about the Principal?",
        "options": [
          "Are there any news",
          "Are there some news",
          "Is there any news",
          "Is their any news"
        ],
        "ans": "C",
        "main": "",
        "remark": "News is an uncountable noun; must take \"is\" not \"are\""
      },
      {
        "id": 57,
        "question": "Their high __ was an advantage",
        "options": ["moral", "morality", "morale", "morals"],
        "ans": "C",
        "main": "",
        "remark": ""
      },
      {
        "id": 58,
        "question": "The way that big boy bullied his sister with relish makes me think he could be a __",
        "options": ["bully", "sadist", "pugilist", "tyrant"],
        "ans": "B",
        "main": "",
        "remark": "Sadist is a person who derives joy from others' suffering."
      },
      {
        "id": 59,
        "question": "He decided to wait for the bus because he had",
        "options": [
          "too many luggage",
          "many luggages",
          "a lot of luggage",
          "plenty luggages"
        ],
        "ans": "C",
        "main": "",
        "remark": ""
      },
      {
        "id": 60,
        "question": "The man insisted on giving unsolicited __",
        "options": ["advice", "advices", "advise", "advises"],
        "ans": "A",
        "main": "",
        "remark": ""
      },
      {
        "id": 61,
        "question": "Dapo has made good use of some useful __ on the chemical composition of chalk.",
        "options": [
          "information",
          "piece of information",
          "informations",
          "piece of informations"
        ],
        "ans": "A",
        "main": "",
        "remark": ""
      },
      {
        "id": 62,
        "question": "The students went on whispering in __ of the teacher.",
        "options": ["dishonor", "disagreement", "defiance", "disobedience"],
        "ans": "C",
        "main": "",
        "remark": ""
      },
      {
        "id": 63,
        "question": "The __ of the participating countries will hold a preconference on the eve of the conference.",
        "options": [
          "Auditor Generals",
          "Auditor General",
          "Auditors General",
          "Auditors Generals"
        ],
        "ans": "C",
        "main": "",
        "remark": "The key noun here is auditor"
      },
      {
        "id": 64,
        "question": "The chairman's laughter was with no __ to ridicule the applicant.",
        "options": ["intention", "intent", "intendment", "intent"],
        "ans": "D",
        "main": "",
        "remark": ""
      },
      {
        "id": 65,
        "question": "There was a __ of steps",
        "options": ["stair", "height", "flight", "climb"],
        "ans": "C",
        "main": "",
        "remark": ""
      },
      {
        "id": 66,
        "question": "The dancers were all in __ before their departure",
        "options": ["good spirits", "good spirit", "high spirit", "high spirits"],
        "ans": "D",
        "main": "",
        "remark": ""
      },
      {
        "id": 67,
        "question": "The host insisted on __ what he called 'a little gift'",
        "options": [
          "me to accept",
          "me accepting",
          "my accepting",
          "my acceptance"
        ],
        "ans": "C",
        "main": "",
        "remark": ""
      },
      {
        "id": 68,
        "question": "We heard the ___ of breaks, which was followed by a crashing noise.",
        "options": ["screaming", "screeching", "scraping", "streaking"],
        "ans": "B",
        "main": "",
        "remark": ""
      },
      {
        "id": 69,
        "question": "__ are good friends.",
        "options": ["He and I", "I and him", "I and he", "He and me"],
        "ans": "A",
        "main": "",
        "remark": "He and I are the subjects of the verb \"are.\""
      },
      {
        "id": 70,
        "question": "Animals in __ behave differently from animals living in their natural habitat",
        "options": ["prison", "bondage", "captivity", "slavery"],
        "ans": "C",
        "main": "",
        "remark": "Captivity is a state of being kept in a confined space."
      },
      {
        "id": 71,
        "question": "After months of tedious climbing, the team reached the __ of the mountain.",
        "options": ["end", "summit", "height", "terminal"],
        "ans": "B",
        "main": "",
        "remark": "Summit means peak"
      },
      {
        "id": 72,
        "question": "Dan and Tina met on the ship and greeted __",
        "options": ["one another", "themselves", "each other", "theirselves"],
        "ans": "C",
        "main": "",
        "remark": ""
      },
      {
        "id": 73,
        "question": "Olu, Akpan, and Ovblagele's __ make people believe that they belong to the same school of thought.",
        "options": ["philosophy", "philosophys", "philosophies", "philosophy's"],
        "ans": "C",
        "main": "",
        "remark": ""
      },
      {
        "id": 74,
        "question": "The college bus was traveling at a high __ when the accident occurred.",
        "options": ["velocity", "acceleration", "rapidity", "speed"],
        "ans": "D",
        "main": "",
        "remark": ""
      },
      {
        "id": 75,
        "question": "Note that only senior members of staff have the __ of using the toilet upstairs.",
        "options": ["permission", "occasion", "privilege", "habit"],
        "ans": "C",
        "main": "",
        "remark": ""
      },
      {
        "id": 76,
        "question": "The African extended family system gives security to __ members.",
        "options": ["his", "her", "its", "their"],
        "ans": "C",
        "main": "",
        "remark": "The noun \"system\" (non-person) requires the possessive from its"
      },
      {
        "id": 77,
        "question": "Baba and __ participated in the tournament.",
        "options": ["him", "his", "he", "he's"],
        "ans": "C",
        "main": "",
        "remark": ""
      },
      {
        "id": 78,
        "question": "It was __ who fought the civil war.",
        "options": ["they", "them", "those", "theirs"],
        "ans": "A",
        "main": "",
        "remark": ""
      },
      {
        "id": 79,
        "question": "The physicians have more people in __ waiting rooms than __ have ever had.",
        "options": ["his | he", "there | their", "they | they", "them | they"],
        "ans": "C",
        "main": "",
        "remark": "their shows possession for the plural noun \"Physicians\" as well as the plural pronoun \"they\""
      },
      {
        "id": 80,
        "question": "On his __ of office, the new president announced some drastic measures.",
        "options": ["assumption", "ascension", "acceptance", "appointment"],
        "ans": "A",
        "main": "",
        "remark": ""
      },
      {
        "id": 81,
        "question": "I sent __ news to the press yesterday.",
        "options": ["a parcel", "a flash", "an item of", "number of"],
        "ans": "C",
        "main": "",
        "remark": ""
      },
      {
        "id": 82,
        "question": "The University has a large collection of sporting __",
        "options": ["equipment", "equipments", "costumes", "aids"],
        "ans": "A",
        "main": "",
        "remark": ""
      },
      {
        "id": 83,
        "question": "He keeps his __ clean always",
        "options": ["surroundings", "surrounding", "premise", "environments"],
        "ans": "A",
        "main": "",
        "remark": "Surroundings(pl) should never be written without the ending -s if it is a noun."
      },
      {
        "id": 84,
        "question": "People who live by __ what loneliness is like.",
        "options": [
          "each other know",
          "one another know",
          "oneself knows",
          "themselves know"
        ],
        "ans": "D",
        "main": "",
        "remark": ""
      },
      {
        "id": 85,
        "question": "You must forbid __ coming.",
        "options": ["he's", "that he is", "him for", "his"],
        "ans": "D",
        "main": "",
        "remark": ""
      },
      {
        "id": 86,
        "question": "They spent the last holiday with their __",
        "options": [
          "sister-in-laws",
          "sisters-in-law",
          "sisters-in-laws",
          "sisters-in-laws"
        ],
        "ans": "B",
        "main": "",
        "remark": ""
      },
      {
        "id": 87,
        "question": "The __ discouraged me from reading it.",
        "options": [
          "story's length",
          "length of the story",
          "story length",
          "stories length"
        ],
        "ans": "B",
        "main": "",
        "remark": "The possessive form of \"story\" is not allowed"
      },
      {
        "id": 88,
        "question": "You think she doesn't have any friends? Of course, she's got __",
        "options": ["many more", "quite much", "quite a few", "few"],
        "ans": "C",
        "main": "",
        "remark": ""
      },
      {
        "id": 89,
        "question": "He moved out of the house because the landlord and his wife were always fighting __",
        "options": ["themselves", "theirselves", "each other", "one another"],
        "ans": "C",
        "main": "",
        "remark": ""
      },
      {
        "id": 90,
        "question": "Do you think all __ not enough to help the investigator?",
        "options": [
          "these informations are",
          "this information are",
          "this information is",
          "these information are"
        ],
        "ans": "C",
        "main": "",
        "remark": ""
      },
      {
        "id": 91,
        "question": "The army ran short of",
        "options": [
          "arm and ammunitions",
          "arms and ammunitions",
          "arms and ammunition",
          "arm and ammunition"
        ],
        "ans": "C",
        "main": "",
        "remark": "\"Arms\" as in weapons, is always written with the ending -s and treat ammunition as an uncountable noun."
      },
      {
        "id": 92,
        "question": "The journalist's unpopular views made him the subject of much___",
        "options": ["admiration", "derison", "admonition", "suspicion"],
        "ans": "B",
        "main": "",
        "remark": "derison means scorn, disdain."
      },
      {
        "id": 93,
        "question": "The pen which you have just picked up is __",
        "options": ["Charle's", "Charles'", "Charless'", "Charles's"],
        "ans": "D",
        "main": "",
        "remark": ""
      },
      {
        "id": 94,
        "question": "There are __ on spelling and pronunciation at the end of the book.",
        "options": ["appendexes", "appendix", "appendices", "appendixes"],
        "ans": "C",
        "main": "",
        "remark": ""
      },
      {
        "id": 95,
        "question": "Most of his personal __ stolen.",
        "options": ["affects was", "affects were", "effect was", "effects were"],
        "ans": "D",
        "main": "",
        "remark": "Effects, belongings, and possessions must all be written with an ending -s to mean sth you own. And they must all use plural verbs. (were but not was)"
      },
      {
        "id": 96,
        "question": "The hospital can now boast of more __",
        "options": [
          "women doctor",
          "woman doctors",
          "women doctors",
          "woman's doctors"
        ],
        "ans": "C",
        "main": "",
        "remark": ""
      },
      {
        "id": 97,
        "question": "Did the boys enjoy __ when they went on vacation?",
        "options": ["each other", "one another", "themselves", "theirselves"],
        "ans": "C",
        "main": "",
        "remark": "Reflexive pronoun is used here as opposed to distributive pronouns. "
      },
      {
        "id": 98,
        "question": "The panel's ___ was stretched to the limit by what they heard.",
        "options": ["credit", "credence", "credibility", "credulity"],
        "ans": "D",
        "main": "",
        "remark": "Credulity = believability"
      },
      {
        "id": 99,
        "question": "The policemen pointed out a __ between Mr. Ogene's two accounts of the incident.",
        "options": ["discrepancy", "discord", "distinction", "disagreement"],
        "ans": "A",
        "main": "",
        "remark": "Discrepancy = difference, inconsistency, disparity"
      },
      {
        "id": 100,
        "question": "You must study hard this semester in order to avoid being made __ ridicule",
        "options": [
          "an object",
          "an object for",
          "a subject for",
          "an subject with"
        ],
        "ans": "B",
        "main": "",
        "remark": "A target for mockery"
      },
      {
        "id": 101,
        "question": "My shoes are worn out; I must see my __",
        "options": ["grocer", "tanner", "cobbler", "hosier"],
        "ans": "C",
        "main": "",
        "remark": "A cobbler repairs shoe, a shoemaker makes it."
      },
      {
        "id": 102,
        "question": "His looks portend that __ would be unpleasant.",
        "options": ["some news", " a new", "news", " the news"],
        "ans": "D",
        "main": "",
        "remark": ""
      },
      {
        "id": 103,
        "question": "A university teacher is an __",
        "options": ["academic", "academics", "academician", "academia"],
        "ans": "A",
        "main": "",
        "remark": ""
      },
      {
        "id": 104,
        "question": "The adventurers ran into many",
        "options": ["dear", "dears", "deers", "deer"],
        "ans": "D",
        "main": "",
        "remark": "The plural of deer is deer"
      },
      {
        "id": 105,
        "question": "The argumenr between the two neighbors degenerated into __",
        "options": [
          "a free-for-all",
          "a free fight",
          "a flee for all",
          "a free for all fight"
        ],
        "ans": "A",
        "main": "",
        "remark": ""
      },
      {
        "id": 106,
        "question": "The new school is not provided with __ for science practicals.",
        "options": [
          "enough equipment",
          "equipments",
          "enough equipments",
          "an equipment"
        ],
        "ans": "A",
        "main": "",
        "remark": ""
      },
      {
        "id": 107,
        "question": "I like the character that played the role of a political __ at the last convention of our party.",
        "options": ["turnedcoat", "turncoat", "thorncoat", "turncoat"],
        "ans": "B",
        "main": "",
        "remark": "This word is written without hyphen between turn and coat. A turncoat leaves his party/army/group/religion etc to join another considered an enemy or opponent."
      },
      {
        "id": 108,
        "question": "The Dark Continent was an __ for Africa.",
        "options": ["abuse", "enigma", "election", "epithet"],
        "ans": "D",
        "main": "",
        "remark": "Epithet = a word or phrase which describes sb/sth and meant to commend/condemn"
      },
      {
        "id": 109,
        "question": "There are several __ in the farmyard.",
        "options": ["lamb", "sheep", "ewe", "goat"],
        "ans": "B",
        "main": "",
        "remark": "Plural: Lambs, ewes, goats (but sheep)"
      },
      {
        "id": 110,
        "question": "The company Director showed the contractor a __ of the proposed office complex.",
        "options": ["prototype", "photocopy", "photograph", "microfilm"],
        "ans": "A",
        "main": "",
        "remark": "The prefix \"proto\" means original/first"
      },
      {
        "id": 111,
        "question": "If one perserveres, __ will surely succeed.",
        "options": ["she", "one", "he", "they"],
        "ans": "B",
        "main": "",
        "remark": ""
      },
      {
        "id": 112,
        "question": "Ali has been cured of his amnesia: he no longer suffers from __",
        "options": [
          "rounds of anxiety",
          "loss of memory",
          "pains in his arms",
          "bouts of malaria"
        ],
        "ans": "B",
        "main": "",
        "remark": ""
      },
      {
        "id": 113,
        "question": "The match gave the team a chance to show their__",
        "options": ["worth", "position", "prowess", "mettle"],
        "ans": "D",
        "main": "",
        "remark": "Mettle = resolve, determination, resolution, fortitude"
      },
      {
        "id": 114,
        "question": "These __ must have __ the Word Bank of officials",
        "options": [
          "analyses | attract",
          "analyses | attracted",
          "analysis | attract",
          "analysis | attracted"
        ],
        "ans": "B",
        "main": "",
        "remark": ""
      },
      {
        "id": 115,
        "question": "We did not understand what the magistrate said about __ and battery",
        "options": ["acid", "insult", "assault", "touching"],
        "ans": "C",
        "main": "",
        "remark": ""
      },
      {
        "id": 116,
        "question": "Didn't __ draw attention to the entry requirements?",
        "options": ["anyone", "somebody", "someone", "everyone"],
        "ans": "A",
        "main": "",
        "remark": ""
      },
      {
        "id": 117,
        "question": "To __ did you give my pen?",
        "options": ["whom", "who", "whose", "what"],
        "ans": "A",
        "main": "",
        "remark": "Whom is an object of the preposition \"To\" hence don't use the subjective case (who) of the pronoun."
      },
      {
        "id": 118,
        "question": "It is bad to take __ property without permission.",
        "options": [
          "someone else's",
          "someone else",
          "someone's else's",
          "someone elses'"
        ],
        "ans": "A",
        "main": "",
        "remark": ""
      },
      {
        "id": 119,
        "question": "As Obande does not know anyone in this city, he hopes that some kind __ will put him for the night.",
        "options": ["men", "individuals", "man", "inhabitants"],
        "ans": "D",
        "main": "",
        "remark": "Inhabitants refers to those living in the city."
      },
      {
        "id": 120,
        "question": "The armed robbers went into the house and robbed the three __",
        "options": [
          "women's occupants",
          "women occupants",
          "woman occupants",
          "woman's occupants"
        ],
        "ans": "B",
        "main": "",
        "remark": ""
      },
      {
        "id": 121,
        "question": "The woman is one of the __ of the society.",
        "options": ["elitists", "elites", "elite", "elitist"],
        "ans": "C",
        "main": "",
        "remark": "The noun \"elite\" is inherently plural hence an ending - is not necessary. "
      },
      {
        "id": 122,
        "question": "Each producer is able to place a price on his product, considering its __",
        "options": ["choice", "assessment", "worth", "judgement"],
        "ans": "C",
        "main": "",
        "remark": "The price determines what the product is worth"
      },
      {
        "id": 123,
        "question": "His supporters rallied round him in moments of __",
        "options": ["disiilusionment", "critism", "crisis", "acrimony"],
        "ans": "C",
        "main": "",
        "remark": "Moments of crises = trying times"
      },
      {
        "id": 124,
        "question": "Agbo says he is not afraid of __",
        "options": ["nobody", "no one", "anybody", "nothing"],
        "ans": "C",
        "main": "",
        "remark": ""
      },
      {
        "id": 125,
        "question": "Actually, he forgot the one to __ the job is given.",
        "options": ["who", "whoever", "whom", "whomever"],
        "ans": "C",
        "main": "",
        "remark": ""
      },
      {
        "id": 126,
        "question": "The Secretary-General was shocked at the number of __",
        "options": [
          "children soldiers",
          "child's soldiers",
          "child soldiers",
          "childish soliders"
        ],
        "ans": "A",
        "main": "",
        "remark": ""
      },
      {
        "id": 127,
        "question": "It is African for a younger person to show __ to elders",
        "options": ["satisfaction", "deference", "understanding", "indifference"],
        "ans": "B",
        "main": "",
        "remark": "Deference = respect, reverence"
      },
      {
        "id": 128,
        "question": "The Investigatin Commission treated all the __",
        "options": ["protests", "petitions", "applications", "enquires"],
        "ans": "B",
        "main": "",
        "remark": ""
      },
      {
        "id": 129,
        "question": "Our neighbor was attracted by the __",
        "options": ["flavor", "stench", "scent", "aroma"],
        "ans": "D",
        "main": "",
        "remark": ""
      },
      {
        "id": 130,
        "question": "What were the __ served in the restaurant?",
        "options": ["spices", "desserts", "diets", "condiments"],
        "ans": "B",
        "main": "",
        "remark": ""
      },
      {
        "id": 131,
        "question": "This is a village where __ knows __",
        "options": [
          "everyone | everyone else",
          "anyone | anyone",
          "every person | themselves",
          "someone | someone else"
        ],
        "ans": "A",
        "main": "",
        "remark": ""
      },
      {
        "id": 132,
        "question": "When the cashier told him to join the queue, he considered it __ his dignity.",
        "options": [
          "a drawback to",
          "an affront on",
          "withdrawal from",
          "a strain on"
        ],
        "ans": "B",
        "main": "",
        "remark": ""
      },
      {
        "id": 133,
        "question": "Western education is one of the __ of colonial rule.",
        "options": ["remnants", "inheritance", "legacies", "evidence"],
        "ans": "C",
        "main": "",
        "remark": ""
      },
      {
        "id": 134,
        "question": "Vacancies in the company will be notified by __",
        "options": ["bulletin", "publication", "publicity", "advertisement"],
        "ans": "B",
        "main": "",
        "remark": ""
      },
      {
        "id": 135,
        "question": "Her mother brought her some __",
        "options": ["clothes", "yards", "cloth", "clothing"],
        "ans": "A",
        "main": "",
        "remark": ""
      },
      {
        "id": 136,
        "question": "I wanted to know his political beliefs, so I asked him what __",
        "options": ["this was", "these are", "this is", "these were"],
        "ans": "D",
        "main": "",
        "remark": ""
      },
      {
        "id": 137,
        "question": "We heard the __ of brakes which was followed by a crashing noise.",
        "options": ["screaming", "screeching", "scrapping", "streaking"],
        "ans": "B",
        "main": "",
        "remark": ""
      },
      {
        "id": 138,
        "question": "At the __ of the century, many ways of doing things were introduced.",
        "options": ["turn", "event", "birth", "sight"],
        "ans": "A",
        "main": "",
        "remark": ""
      },
      {
        "id": 139,
        "question": "He went to the restaurant to enjoy the special __",
        "options": ["Suite", "cuisine", "à la carte", "chief"],
        "ans": "B",
        "main": "",
        "remark": ""
      },
      {
        "id": 140,
        "question": "Cooking has never been Jumoke's __",
        "options": ["recital", "purview", "style", "forte"],
        "ans": "D",
        "main": "",
        "remark": "Forte = what you do particularly well"
      },
      {
        "id": 141,
        "question": "The choice to go the University or not is __",
        "options": ["yours'", "your", "yours", "your's"],
        "ans": "C",
        "main": "",
        "remark": ""
      },
      {
        "id": 142,
        "question": "The car owner does not think about the __ of his vehicle and other payments involved in owning it.",
        "options": [
          "transportation",
          "depreciation",
          "calculation",
          "appreciation",
          "association"
        ],
        "ans": "B",
        "main": "",
        "remark": ""
      },
      {
        "id": 143,
        "question": "We shall offer a good job to a __ to regsiter guests in the Central Hotel.",
        "options": ["waiter", "watchamn", "cashier", "receptionist", "cleaner"],
        "ans": "D",
        "main": "",
        "remark": ""
      },
      {
        "id": 144,
        "question": "Many states practice the ideals of democracy.",
        "options": [
          "government by elections",
          "government by representatives",
          "government by civilians",
          "government by all the people"
        ],
        "ans": "B",
        "main": "",
        "remark": ""
      },
      {
        "id": 145,
        "question": "The plane overshot the __ in a minor accident",
        "options": ["railway", "hangar", "tarmac", "runway", "road"],
        "ans": "D",
        "main": "",
        "remark": ""
      },
      {
        "id": 146,
        "question": "The book will sell in __",
        "options": [
          "hundreds of thousands",
          "a hundred thousand",
          "hundreds of thousand",
          "hunded thousands"
        ],
        "ans": "A",
        "main": "",
        "remark": ""
      },
      {
        "id": 147,
        "question": "We must be ready to cater for __",
        "options": [
          "the poors and needy",
          "poor and needs",
          "the poor and needy",
          "poors and needs"
        ],
        "ans": "C",
        "main": "",
        "remark": ""
      },
      {
        "id": 148,
        "question": "After a three-day meeting, two presidents issued a __ calling for peace",
        "options": ["bulletin", "memorandum", "communique", "directive"],
        "ans": "C",
        "main": "",
        "remark": ""
      },
      {
        "id": 149,
        "question": "You will need __ to help the investigations.",
        "options": [
          "this information",
          "this informations",
          "these information",
          "these informations"
        ],
        "ans": "A",
        "main": "",
        "remark": ""
      },
      {
        "id": 150,
        "question": "Ada did not find __ in the house",
        "options": ["anyone", "someone", "somebody", "someone"],
        "ans": "A",
        "main": "",
        "remark": ""
      },
      {
        "id": 151,
        "question": "The doctor listened to my heartbeat with a __",
        "options": ["cardiograph", "stethoscope", "chromometer", "microscope"],
        "ans": "B",
        "main": "",
        "remark": "Stethoscope is used by doctors to listen to heart sounds"
      },
      {
        "id": 152,
        "question": "He decided to wait for the bus because he had __",
        "options": [
          "many luggages",
          "plenty luggages",
          "a lot of luggage",
          "too many luggage"
        ],
        "ans": "C",
        "main": "",
        "remark": ""
      },
      {
        "id": 153,
        "question": "After too much exercise, some people suffer from cramps, which is caused by the __ of the muscles",
        "options": ["contractions", "restriction", "conscription", "relaxation"],
        "ans": "A",
        "main": "",
        "remark": ""
      }
    ],
  },
  {
    topic: "Verb",
    questions: [
      {
        id: 1,
        question: "When the beggar was tired he __ down by the roadside.",
        options: ["lied", "laid", "layed", "lay", "lain"],
        ans: "D",
        main: "",
        remark: "",
      },
      {
        id: 2,
        question:
          "Before the operation the dentist found that his patient's teeth __",
        options: [
          "have long decayed",
          "have long been decayed",
          "have long being decayed",
          "had long decayed",
          "had been decayed",
        ],
        ans: "D",
        main: "",
        remark: "",
      },
      {
        id: 3,
        question:
          "In order to carry out the necessary examination the dead body was __",
        options: ["extracted", "extradited", "exiled", "expelled", "exhumed"],
        ans: "E",
        main: "",
        remark: "Exhume = dig up",
      },
      {
        id: 4,
        question: "He had just entered the office __ the telephone rang.",
        options: ["as", "before", "since", "when", "until"],
        ans: "D",
        main: "",
        remark: "",
      },
      {
        id: 5,
        question: "If I went to the cinema I __ early.",
        options: [
          "shall return",
          "am returning",
          "would return",
          "had returned",
          "may return",
        ],
        ans: "C",
        main: "",
        remark: "",
      },
      {
        id: 6,
        question: "The frightening explosion in the factory __ a whole wing.",
        options: ["washed out", "wiped out", "rooted out", "flushed out"],
        ans: "B",
        main: "",
        remark: "",
      },
      {
        id: 7,
        question:
          "I would not have considered appeasing the traffic policeman, but I happened __ several traffic regulations.",
        options: [
          "to have broken",
          "to be breaking",
          "to break",
          "to break in",
          "to have evaded",
        ],
        ans: "A",
        main: "",
        remark: "",
      },
      {
        id: 8,
        question:
          "Granted you are my senior by one year, you cannot __ me around as if I were your servant.",
        options: ["control", "dribble", "order", "ask", "compel"],
        ans: "C",
        main: "",
        remark: "",
      },
      {
        id: 9,
        question: "His horrible, high-pitched laugh __ on my nerves.",
        options: ["jags", "jabs", "jams", "jars", "jeers"],
        ans: "D",
        main: "",
        remark: "",
      },
      {
        id: 10,
        question: "If this had happened to you, what __",
        options: [
          "would you do",
          "have you done",
          "would you have done",
          "will you do",
          "would you be doing",
        ],
        ans: "C",
        main: "",
        remark: "",
      },
      {
        id: 11,
        question: "What a relief that the strike __ when it did!",
        options: ["would end", "was ending", "ended", "has ended", "is ending"],
        ans: "C",
        main: "",
        remark: "",
      },
      {
        id: 12,
        question:
          "By the time the rainy season ended, all the young cocoa trees __ in size",
        options: [
          "have doubled",
          "had doubled",
          "were doubling",
          "doubled",
          "will double",
        ],
        ans: "B",
        main: "",
        remark: "",
      },
      {
        id: 13,
        question: "We got to the hall after the play __",
        options: [
          "is started",
          "was starting",
          "had started",
          "has started",
          "would start",
        ],
        ans: "C",
        main: "",
        remark: "",
      },
      {
        id: 14,
        question: "__ for the team for six years, he decided to join another.",
        options: [
          "When he played",
          "Playing",
          "Having played",
          "In playing",
          "When he was playing.",
        ],
        ans: "C",
        main: "",
        remark: "",
      },
      {
        id: 15,
        question: "By the end of this year __ in this town for eleven years.",
        options: [
          "I'm living",
          "I'd be living",
          "I'll live",
          "I'll have lived",
          "I have lived",
        ],
        ans: "D",
        main: "",
        remark: "",
      },
      {
        id: 16,
        question: "If he had left home earlier, he __ late.",
        options: [
          "would not",
          "would have not been",
          "would not been",
          "would have been not",
          "would not have been",
        ],
        ans: "E",
        main: "",
        remark: "",
      },
      {
        id: 17,
        question:
          "I saw you walking in that direction, but I did not know exactly __.",
        options: [
          "where you are going",
          "where you were going",
          "where were you going to",
          "to where were you going",
          "where you are going",
        ],
        ans: "B",
        main: "",
        remark: "",
      },
      {
        id: 18,
        question: "The hill behind the town was so steep __",
        options: [
          "that no man could find a foot-hold on",
          "that any man could find a foot-hold on it",
          "for no man to find a foot-hold on",
          "that no man could find a foot-hold on it",
          "for any man to find a foot-fold hold on",
        ],
        ans: "D",
        main: "",
        remark: "",
      },
      {
        id: 19,
        question: "Walking down the street __",
        options: [
          "the boy was knocked down by a car",
          "a car knocked the boy down",
          "the boy was knocked down by car",
          "a car collided with boy",
          "a serious accident happened",
        ],
        ans: "A",
        main: "",
        remark: "",
      },
      {
        id: 20,
        question:
          "Many of those who __ the country's educational policy have taught for many years.",
        options: ["develop", "fabricate", "organize", "scheme", "formulate"],
        ans: "E",
        main: "",
        remark: "",
      },
      {
        id: 21,
        question:
          "During the inaugural address, the President __ the activities of his government for the past four years",
        options: ["reiterated", "reviewed", "restated", "recited", "resumed"],
        ans: "B",
        main: "",
        remark: "",
      },
      {
        id: 22,
        question:
          "The World Bank team, which visited the landlocked country, __ a bleak economic future for it.",
        options: [
          "forecast",
          "thought of",
          "discovered",
          "prophesied",
          "projected",
        ],
        ans: "A",
        main: "",
        remark: "",
      },
      {
        id: 23,
        question: "Do you know if the new teacher __ yet?",
        options: [
          "is arrived",
          "will be arriving",
          "has arrived",
          "had arrived",
          "has been arriving",
        ],
        ans: "C",
        main: "",
        remark: "",
      },
      {
        id: 24,
        question: "He had known he __ away",
        options: [
          "will go",
          "will be going",
          "would have gone",
          "may be going",
          "is going",
        ],
        ans: "C",
        main: "",
        remark: "",
      },
      {
        id: 25,
        question: "The solution to the problem has so far __ the scientist",
        options: ["defied", "allured", "eluded", "denied", "avoided"],
        ans: "C",
        main: "",
        remark: "",
      },
      {
        id: 26,
        question: "How will the committee's decision __ you?",
        options: ["influence", "treat", "bore", "harass", "afflicts"],
        ans: "A",
        main: "",
        remark: "",
      },
      {
        id: 27,
        question: "The candidate looked __ after finishing the examination",
        options: ["unhappily", "lazily", "wonderfully", "angrily", "unhappy"],
        ans: "E",
        main: "",
        remark: "",
      },
      {
        id: 28,
        question:
          "The telephone __ in the nineteenth century and is now used in most countries in the world.",
        options: [
          "had been invented",
          "was invented",
          "would have been invented",
          "has been invented",
          "was being invented",
        ],
        ans: "B",
        main: "",
        remark: "",
      },
      {
        id: 29,
        question:
          "By the end of the next semester, he __ his university education.",
        options: [
          "would have completed",
          "will be completing",
          "shall have completed",
          "was completing",
          "must complete",
        ],
        ans: "C",
        main: "",
        remark: "",
      },
      {
        id: 30,
        question:
          "In the past, his father used to walk, but nowadays he __ to work by bicycle.",
        options: ["was going", "is going", "seldomly goes", "goes", "has gone"],
        ans: "D",
        main: "",
        remark: "",
      },
      {
        id: 31,
        question:
          "The students __ so much noise while the lecture was going on that the lecturer had to walk out of the class.",
        options: [
          "made",
          "has been making",
          "were making",
          "had made",
          "would have been making",
        ],
        ans: "A",
        main: "",
        remark: "",
      },
      {
        id: 32,
        question: "__ it might not look such a rosy proposition",
        options: [
          "From his viewing proposal",
          "When he views the proposal",
          "Having viewed the proposal",
          "From his point of view",
          "From his seeing it",
        ],
        ans: "D",
        main: "",
        remark: "",
      },
      {
        id: 33,
        question: "If he had entered the room, I __ him.",
        options: ["saw", "had seen", "would have seen", "may see", "will see"],
        ans: "C",
        main: "",
        remark: "",
      },
      {
        id: 34,
        question: "The old car __ several times this year.",
        options: [
          "was repaired",
          "has been repaired",
          "had been repaired",
          "has repaired",
          "was being repaired",
        ],
        ans: "B",
        main: "",
        remark: "",
      },
      {
        id: 35,
        question: "__ listening to the news when I came in.",
        options: [
          "There were",
          "There was",
          "It was",
          "There are going to be",
          "They were",
        ],
        ans: "E",
        main: "",
        remark: "",
      },
      {
        id: 36,
        question: "He told me to go on __ till seven.",
        options: ["to work", "worked", "works", "working", "work"],
        ans: "D",
        main: "",
        remark: "",
      },
      {
        id: 37,
        question:
          "I __ to gain admission to the college for the past three years.",
        options: [
          "have been trying",
          "tried",
          "am trying",
          "was trying",
          "try",
        ],
        ans: "A",
        main: "",
        remark: "",
      },
      {
        id: 38,
        question:
          "__ a lot of arguments for and against car loans in the press recently.",
        options: [
          "There are",
          "There has been",
          "There have been",
          "There is",
          "There was",
        ],
        ans: "C",
        main: "",
        remark: "",
      },
      {
        id: 39,
        question:
          "Will they sign any contracts at the Fair? They will not only sign the contracts but a lot of goods __ as well.",
        options: [
          "will buy",
          "to buy",
          "they buy",
          "they bought",
          "will be bought",
        ],
        ans: "E",
        main: "",
        remark: "",
      },
      {
        id: 40,
        question:
          "I started writing this test at 8:00am. It is 10:00am now. By 11:00am, I __ it for three hours.",
        options: [
          "shall be writing",
          "have been writing",
          "shall have been writing",
          "am writing",
          "was writing",
        ],
        ans: "C",
        main: "",
        remark: "",
      },
    ],
  },
];

export { englishQuestions };
