import { chemistryQuestions } from "./chmQuestions.js";
import { biologyQuestions } from "./bioQuestions.js";
import { englishQuestions } from "./engQuestions.js";

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
]


export { Questions }