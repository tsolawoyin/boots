import { mainWord } from "./helpers.js"; 
// I swear, this modular thing is really helping


function repackage(choice, cond, newId) {
    // the userAnswer is supposed to check for old answers shey you get...
    // let's repackaged everything here joh...
    if (choice.main) {
        // english repacking. This is specifically done for english functions. see mainWord function for more explanation
        choice.question = mainWord(choice.main, choice.question) // the mainWord function will be needed too...
    }

    if (cond == "initial") {
        choice.id = 1; // since it is initial, it is natural for its id to be 1;
        choice.userAnswer = null; // since it hasn't been answered yet. makes sense?
    }

    if (cond == "next") {
        choice.id = newId; // this is where Id is assigned, I don't see any reason for id in the object buildup
        choice.userAnswer = null;
    }
    
    if (cond == "prev") {
        choice.id = newId;
        choice.userAnswer = null; 
    }

    if (cond == "num") {
        choice.id = newId;
        choice.userAnswer = null;
    }
    // just side effect. nothing much.
}

export { repackage } // makes sense?