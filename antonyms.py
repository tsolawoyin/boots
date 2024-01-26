
# it's being a while that I have written any python code... 
# import json
# # opening the json file and reading it's content
# english = open("english.json", "r").read() # we want to read the file

# eng = json.loads(english)

# ant = open("antonyms.txt", "w")

# for topic in eng:
#     for q in topic["questions"]:
#         struct = "Main: "
#         struct += q["main"]
#         # print(struct)
#         struct += ", Options: ["
        
#         for e in q["options"]:
#             struct += f" {e},"
        
#         struct = struct[:-1] + " ]"

#         ant.write(f"{struct}\n")

# the strcuture I need is Main word: XXXXX, Options: [a,b,c,d]

# this is wonderful...
# Python is dope. lolzzz.

from nltk.corpus import wordnet

# List of words
words = ["languish", "prototype", "painstaking", "equanimity", "passionate", "lethal", "pacify", "pragmatic",
         "beggary", "authenticate", "progressives", "condoned", "perpetuate", "unwittingly", "shrewd", "equitable",
         "exorcise", "mumbled", "convergence", "abate", "redressed", "severity", "provocative", "callous", "indomitable",
         "odious", "wrath", "inopportune", "peripheral", "enervating", "unswerving", "fallacy", "immune", "renaissance",
         "disparate", "catastrophe", "temperate", "invaluable", "bellicose", "indifference", "loquacious", "satiation",
         "derogatory", "ignoble", "defies", "accustomed", "emasculate", "dissipating", "assiduous", "vicissitudes",
         "flawless", "detriment", "decorous", "taut", "unfathomable", "fleeting", "diurnal", "alleviate", "renegade",
         "debilitating", "rescinded", "overpriced", "predominantly", "covert", "sultry", "arduous", "harmless", "naivety",
         "inconceivable", "ambivalent", "rudiments", "plethora", "agog", "interminable", "youthfulness", "apathy", "averred",
         "frugality", "underscores", "adroit", "ignoble", "notorious", "redounds to", "phlegmatic", "restive", "unprecedented",
         "indomitable", "incontrovertible", "extemporaneous", "gullible", "inordinate", "timid", "conceal", "inspired",
         "ecstatic", "recalcitrant", "invigorating", "loath", "trepidation", "finesse", "presently", "characteristically",
         "chagrin", "momentous", "classified", "prophylactic", "mooted", "incisive", "inured", "venal", "nefarious",
         "aggravated", "evasive", "enchanting", "eclectic", "brain wave", "gait", "repudiated", "profusely", "obstructing",
         "egalitarianism", "incentive", "a doting", "feasibility", "credentials", "restive", "dexterity", "circumvent",
         "fatal", "several", "serious", "nebulous", "impassioned", "euphoria", "alienated", "sympathetic", "browbeating",
         "coalescence", "gamely", "reverse", "moribund", "sumptuous", "facetious", "abstruse", "belligerent", "tardy",
         "complacently", "timorous", "pilferer", "think", "stringer", "disparaging", "adamant about", "reprisal", "eerie",
         "therapeutic", "puerile", "extraneous", "pyrrhic", "miscontrued", "luminaries", "assumed", "unstinting", "vilified",
         "glut", "imminent", "cynics", "essence", "infer", "nauseating", "commodious", "plausible", "substantiate", "levity",
         "liberality", "heritage", "utmost", "insignia", "mottled", "pejorative", "Funnily enough", "boomeranged", "realistic",
         "fateful", "lively", "observant", "common", "inexpressible", "superficial", "vital", "poverty", "Courteously",
         "taciturnity", "Accountability", "sanctioned", "monstrous", "meddlesome", "relentless", "preparedness", "convention",
         "redeemable", "awry", "morbid", "a convoluted", "reveled", "retract", "arbitration", "withstand", "biased",
         "exacting", "remonstrances", "throng", "misgivings", "maladies", "camaraderie", "posterity", "commands", "laudable",
         "stern", "altercation", "inscrutable", "specious", "livery", "sinister", "unification", "forbearance", "implication",
         "impasse", "enthusiastic", "absurd", "tardy", "sumptuous", "panacea", "retrenchment", "offhand", "assortment",
         "astounded", "apposite", "blemish", "eligible", "abridged", "inception", "detached", "dwelt", "ignominious",
         "compliments", "ensnared", "astute", "tactful", "dementia", "deleterous", "belligerent", "supersedes", "corrugated",
         "exacerbated", "derogatory", "sovereignty", "virtuous", "typical", "pretified", "shimmers", "vulnerable", "furtive",
         "espoused", "foreclose", "exploded", "incessant", "favorable", "aghast", "jaunty", "doddle", "lustful", "fomenting",
         "learn", "garner", "severing", "gruff", "fraught", "scowled", "obviate", "hoodwinked", "gaiety", "pungent", "languid",
         "heckled", "restive", "impromptu", "maligned", "cogent", "attune", "averred", "frugality", "underscores", "adroit",
         "ignoble", "sanctioned", "offended", "monstrous", "soothe", "phantom", "repugnant", "optional", "waned", "stealthily",
         "chattered", "FEROCIOUS", "METEORIC", "OBLIVION", "pilferer", "belligerent", "timorous", "ably", "wee", "fiscal",
         "abrasive", "abreast"]

# Function to get meanings of words
def get_meanings(word):
    meanings = []
    for syn in wordnet.synsets(word):
        meaning = ""
        for definition in syn.definition():
            meaning += definition
        meanings.append(meaning)
    return meanings

# Generate array of meanings

# ant_answer = open("antonym_ans.txt", "w");

# for word in words:
#     ant_answer.write(f"{word}: {get_meanings(word)}\n")

# ant_answer.close()

print(get_meanings("prevail"))