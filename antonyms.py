
# it's being a while that I have written any python code... 
import json
# opening the json file and reading it's content
english = open("english.json", "r").read() # we want to read the file

eng = json.loads(english)

ant = open("antonyms.txt", "w")

for topic in eng:
    for q in topic["questions"]:
        struct = "Main: "
        struct += q["main"]
        # print(struct)
        struct += ", Options: ["
        
        for e in q["options"]:
            struct += f" {e},"
        
        struct = struct[:-1] + " ]"

        ant.write(f"{struct}\n")

# the strcuture I need is Main word: XXXXX, Options: [a,b,c,d]

# this is wonderful...
# Python is dope. lolzzz.