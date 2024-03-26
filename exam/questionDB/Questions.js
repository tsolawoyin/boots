import { chemistryQuestions } from "./chmQuestions.js";
import { biologyQuestions } from "./bioQuestions.js";
import { englishQuestions } from "./engQuestions.js";
import { phyQuestions } from "./phyQuestions.js";

const Questions = [
    {
        subject: "English",
        questions: englishQuestions
    },
    {
        subject: "Chemistry",
        questions: chemistryQuestions
    },
    {
        subject: "Biology",
        questions: biologyQuestions
    },
    {
        subject: "Physics",
        questions: phyQuestions
    }
]


export { Questions }