import {
  loadFirstTopics,
  loadSubjects,
  addTime,
  changeSubjects,
} from "./configureHelper.js";

import { subjectEl, topicEl, timeEl } from "./constants.js";

// this is the login page config....
loadSubjects(subjectEl); // helps load first subject...
loadFirstTopics(topicEl); // helps load first topic
addTime(timeEl, 60); // this helps add time
changeSubjects(subjectEl, topicEl); // this helps change the subjects asap.
// everything working perfectly here.

// perhaps the rubbish I did spoils the code on other device