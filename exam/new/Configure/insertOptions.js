import {
  loadFirstTopics,
  loadSubjects,
  addTime,
  changeSubjects,
} from "./configureHelper.js";

import { subjectEl, topicEl, timeEl } from "./constants.js";

loadSubjects(subjectEl);
loadFirstTopics(topicEl);
addTime(timeEl, 60);
changeSubjects(subjectEl, topicEl);
