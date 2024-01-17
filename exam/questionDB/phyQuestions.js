
// let physicsQuestions = [
//     // physics questions goes here
//     {
//         topic: "prerequisite",
//         questions: [
//             {
//                 id: 1,
//                 question: "Which of the following is not a fundamental(basic) quantity",
//                 options: [
//                     "length", 
//                     "mass",
//                     "time",
//                     "velocity",
//                     "amount of substance"
//                 ],
//                 ans: "D",
//                 userAnswer: null
//             },
//             {
//                 id: 2,
//                 question: "Which of the following is mapped incorrectly",
//                 options: [
//                     "length -> meter (m)", 
//                     "mass -> kilogram (kg)",
//                     "time -> second (s)",
//                     "temperature -> celcius (c)",
//                     "amount of substance -> mole (mol)"
//                 ],
//                 ans: "D",
//                 userAnswer: null
//             },
//             {
//                 id: 3,
//                 question: "The unit for current is",
//                 options: [
//                     "Ampere (A)", 
//                     "Kilogram (kg)",
//                     "Second (s)",
//                     "mole (mol)",
//                 ],
//                 ans: "A",
//                 userAnswer: null
//             },
//             {
//                 id: 4,
//                 question: "The expanded form of the Joule is",
//                 options: [
//                     `${units("kg", 2, "m", 2, "s", 2)}`,
//                     `${units("kg", 1, "m", 1, "s", 2)}`,
//                     `${units("kg", 1, "m", 2, "s", -2)}`,
//                     `${units("kg", 2, "m", -2, "s", 2)}`,
//                 ],
//                 ans: "C",
//                 userAnswer: null
//             },
//             {
//                 id: 5,
//                 question: "The following are importance of S.I units except",
//                 options: [
//                     `it helps us to express our thoughts clearly`,
//                     `it helps give meaning to the numbers we calculate`,
//                     `it helps prevents errors and misunderstanding`,
//                     `it increases the money in our bank account`,
//                 ],
//                 ans: "D",
//                 userAnswer: null
//             },
//             {
//                 id: 6,
//                 question: "convert 1000nm to km",
//                 options: [
//                     `${exp(-9)}${units("km")}`,
//                     `${exp(-8)}${units("km")}`,
//                     `${exp(-7)}${units("km")}`,
//                     `${exp(-6)}${units("km")}`,
//                 ],
//                 ans: "A",
//                 userAnswer: null
//             },
//             {
//                 id: 7,
//                 question: "express 23 km in mm",
//                 options: [
//                     `2.3 X ${exp(7)}${units("mm")}`,
//                     `2.3 X ${exp(8)}${units("mm")}`,
//                     `2.3 X ${exp(10)}${units("mm")}`,
//                     `2.3 X ${exp(20)}${units("mm")}`,
//                 ],
//                 ans: "A",
//                 userAnswer: null
//             },
//             {
//                 id: 8,
//                 question: "express 3800mm in meters",
//                 options: [
//                     `3800 m`,
//                     `380 m`,
//                     `38 m`,
//                     `3.8 m`,
//                 ],
//                 ans: "D",
//                 userAnswer: null
//             },
//             {
//                 id: 9,
//                 question: "A boy was sent an errand and he returned after 30 min. How long did it took the boy to return in seconds",
//                 options: [
//                     `2000 s`,
//                     `1800 s`,
//                     `1500 s`,
//                     `5000 s`,
//                 ],
//                 ans: "B",
//                 userAnswer: null
//             },
//             {
//                 id: 10,
//                 question: "Express 258000 in scientific notation",
//                 options: [
//                     `2.58 X ${exp(7)}`,
//                     `2.58 X ${exp(5)}`,
//                     `2.58 X ${exp(8)}`,
//                     `2.58 X ${exp(6)}`,
//                 ],
//                 ans: "B",
//                 userAnswer: null
//             },
//             {
//                 id: 11,
//                 question: "Express 4500000000000 in scientific notation",
//                 options: [
//                     `4.5 X ${exp(12)}`,
//                     `4.5 X ${exp(13)}`,
//                     `4.5 X ${exp(14)}`,
//                     `4.5 X ${exp(15)}`,
//                 ],
//                 ans: "A",
//                 userAnswer: null
//             },
//             {
//                 id: 12,
//                 question: "Express 3024 in scientific notation",
//                 options: [
//                     `3.024 X ${exp(0)}`,
//                     `3.024 X ${exp(1)}`,
//                     `3.024 X ${exp(2)}`,
//                     `3.024 X ${exp(3)}`,
//                 ],
//                 ans: "D",
//                 userAnswer: null
//             },
//             {
//                 id: 13,
//                 question: "Express 0.0023 in scientific notation",
//                 options: [
//                     `2.3 X ${exp(-1)}`,
//                     `2.3 X ${exp(-5)}`,
//                     `2.3 X ${exp(-4)}`,
//                     `2.3 X ${exp(-3)}`,
//                 ],
//                 ans: "C",
//                 userAnswer: null
//             },
//             {
//                 id: 14,
//                 question: "Express 0.000000005 in scientific notation",
//                 options: [
//                     `5 X ${exp(-9)}`,
//                     `5 X ${exp(-15)}`,
//                     `5 X ${exp(-10)}`,
//                     `5 X ${exp(-11)}`,
//                 ],
//                 ans: "A",
//                 userAnswer: null
//             },
//             {
//                 id: 15,
//                 question: "The following are derived quantity except",
//                 options: [
//                     `force`,
//                     `frequency`,
//                     `pressure`,
//                     `energy`,
//                     `thermodynamic temperature`,
//                 ],
//                 ans: "E",
//                 userAnswer: null
//             },
//             {
//                 id: 16,
//                 question: `Another name for ${units("kg", "m", "s", -2)}`,
//                 options: [
//                     `Newton`,
//                     `Joule`,
//                     `Pascal`,
//                     `Hertz`,
//                 ],
//                 ans: "A",
//                 userAnswer: null
//             },
//             {
//                 id: 17,
//                 question: `Which of the following is not a unit system`,
//                 options: [
//                     `S.I units`,
//                     `c.g.s units`,
//                     `Imperial units`,
//                     `Newtonian units`,
//                 ],
//                 ans: "D",
//                 userAnswer: null
//             },
//             {
//                 id: 18,
//                 question: `Which of the following is mapped incorrectly`,
//                 options: [
//                     `kilo -> ${exp(3)}`,
//                     `nano -> ${exp(-9)}`,
//                     `milli -> ${exp(-5)}`,
//                     `hecto -> ${exp(2)}`,
//                 ],
//                 ans: "C",
//                 userAnswer: null
//             },
//             {
//                 id: 19,
//                 question: `convert 340K to degree Celcius`,
//                 options: [
//                     `100 degree celcius`,
//                     `50 degree celcius`,
//                     `67 degree celcius`,
//                     `20 degree celcius`
//                 ],
//                 ans: "C",
//                 userAnswer: null
//             },
//             {
//                 id: 20,
//                 question: `convert -273 degree Celcius to kelvin`,
//                 options: [
//                     `0K`,
//                     `1K`,
//                     `2K`,
//                     `3K`
//                 ],
//                 ans: "A",
//                 userAnswer: null
//             },
//         ]
//     }
// ]