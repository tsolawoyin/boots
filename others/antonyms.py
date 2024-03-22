
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