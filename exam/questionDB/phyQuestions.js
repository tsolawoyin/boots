import { exp, formula, units, ion, isotope } from "./helpers.js";
let phyQuestions = [
  {
    topic: "Elasticity",
    questions: [
      {
        id: 1,
        question:
          "A spiral spring extends by 5 cm under a load of 60 N. When the load is replaced by a steel block, the new extension is 7 cm. The weight of the steel block is",
        options: [`12 N`, `43 N`, `84 N`, `96 N`],
        ans: "C",
      },
      {
        id: 2,
        question:
          "A 20 g wt. causes an extension of 0.72 cm in a spring. The extension caused by a load of 80 g wt., assuming Hooke's law is obeyed by the spring, is",
        options: [`0.18 cm`, `0.36 cm`, `1.44 cm`, `2.88 cm`],
        ans: "D",
      },
      {
        id: 3,
        question:
          "With a mass of 25 g hung from its end, the total length of a spring is 15 cm. When the mass is increased to 40 g, the total length of the spring is 18 cm. The unstrectched length of the spring is",
        options: [`9.0 cm`, `10.0 cm`, `12.0 cm`, `12.5 cm`],
        ans: "B",
      },
      {
        id: 5,
        question:
          "An elastic string stretches to a total length of 30 cm under a load of 500 N. With an additional load of 100 N, the string strectches by a further 2 cm. The natural length of the string is",
        options: [`25 cm`, `24 cm`, `20 cm`, `15 cm`],
        ans: "C",
      },
      {
        id: 6,
        question:
          "A spring has a total length of 17.5 cm under a load of 250 g and 20.0 cm under a load of 300 g. The extension of the string per unit load is",
        options: [
            `5 X ${exp(-5)} ${units("mN",-1)}`,
            `8 X ${exp(-5)} ${units("mN",-1)}`,
            `5 X ${exp(-2)} ${units("mN",-1)}`,
            `8 X ${exp(-2)} ${units("mN",-1)}`,
        ],
        ans: "C",
      },
      {
        id: 7,
        question:
          "A spring has a total length of 17.5 cm under a load of 250 g and 20.0 cm under a load of 300 g. The force constant is?",
        options: [
            `12.5 ${units("Nm",-1)}`,
            `20.0 ${units("Nm",-1)}`,
            `1.25 X ${exp(4)} ${units("Nm",-1)}`,
            `2.00 X ${exp(4)} ${units("Nm",-1)}`,
        ],
        ans: "B",
      },
      {
        id: 8,
        question:
          `A spring with a force constant of 3 X ${exp(3)} ${units("Nm",-1)} is ised to measure the mass of an object. If the spring extends by 5 cm when the object is hung from it, the mass of the object is`,
        options: [
            `600 kg`,
            `150 kg`,
            `60 kg`,
            `15 kg`,
        ],
        ans: "D",
      },
      {
        id: 9,
        question:
          `An elastic spring of length 20 cm stretches by 7 mm under a load of 50 N. The strain in the string is`,
        options: [
            `1.75 X ${exp(-1)}`,
            `1.75 X ${exp(-2)}`,
            `3.5 X ${exp(-2)}`,
            `7.0 X ${exp(-2)}`,
        ],
        ans: "C",
      },
      {
        id: 10,
        question:
          `An elastic string of force constant 2000 ${units("Nm",-1)} undergoes a strain of 0.02 under load of 20 N. The natural length of the string is`,
        options: [
            `50 cm`,
            `75 cm`,
            `100 cm`,
            `200 cm`,
        ],
        ans: "A",
      },
      {
        id: 11,
        question:
          `A force F applied to an elastic string of length L and cross-sectional area A results in an extension x. If E is the Young's modulus of the string, then`,
        options: [
            `F = EAL/x`,
            `F = EAx/L`,
            `F = EAx<sup>2</sup>/L`,
            `F = EA/Lx`,
        ],
        ans: "B",
      },
      {
        id: 12,
        question:
          `A wire of cross-sectional area of 6 X ${exp(-5)} ${units("m",2)} and length 50 cm strecthes by 0.2 mm under a load of 3,000 N. The Young's modulus for the wire is`,
        options: [
            `8 X ${exp(10)} ${units("Nm",-2)}`,
            `1.25 X ${exp(11)} ${units("Nm",-2)}`,
            `2.5 X ${exp(11)} ${units("Nm",-2)}`,
            `5 X ${exp(11)} ${units("Nm",-2)}`,
        ],
        ans: "B",
      },
      {
        id: 13,
        question:
          `A wire of diameter 2.8 mm supports a weight W. If the tensile stress in the wire is 2 X ${exp(7)} ${units("Nm",-2)}, the value of W is?`,
        options: [
            `123.2 N`,
            `98.4 N`,
            `56.0 N`,
            `49.2 N`,
        ],
        ans: "A",
      },
      {
        id: 14,
        question:
          `A wire has a tensile stress of 2 X ${exp(7)} ${units("Nm",-2)}, a Young's modulus of 2 X ${exp(10)} ${units("Nm",-2)} and an unstrected length of 100 cm, the extension is`,
        options: [
            `10 mm`,
            `5 mm`,
            `2 mm`,
            `1 mm`,
        ],
        ans: "D",
      },
      {
        id: 15,
        question:
          `A spring of natural length l extends to a new length L under tensile force F. If Hooke's law applies, thw work done in stretching the spring is`,
        options: [
            `1/2FL`,
            `1/2Fl`,
            `1/2F(L-l)`,
            `F(L-l)`,
        ],
        ans: "C",
      },
      {
        id: 16,
        question:
          `An elastic string of length 20 cm extends to 24 cm when it supports a weight of 50 N. The energy stored in the string is`,
        options: [
            `1 J`,
            `2 J`,
            `5 J`,
            `10 J`,
        ],
        ans: "A",
      },
      {
        id: 17,
        question:
          `As the tension in an elastic string is increased from 100 N to 180 N, the string extends to 10 cm. The work done in increasing the tension in the string is`,
        options: [
            `8 J`,
            `10 J`,
            `14 J`,
            `18 J`,
        ],
        ans: "C",
      },
      {
        id: 18,
        question:
          `The potential energy stored in a spring of force constant 2 X ${exp(4)} ${units("Nm",-1)} which is acted upon by a force of 600 N is`,
        options: [
            `3 J`,
            `9 J`,
            `18 J`,
            `90 J`,
        ],
        ans: "B",
      },
      {
        id: 19,
        question:
          `An object of mass 20 kg is dropped on a spring which is placed 5 m below. If the spring has a force constant of 5 X ${units("Nm",-1)}, the maximum compression of the string is`,
        options: [
            `1.0 m`,
            `0.5 m`,
            `0.2 m`,
            `0.04 m`,
        ],
        ans: "C",
      },
      {
        id: 20,
        question:
          `A stone of mass 20 g is projected vertically upwards with a catapult whose rubber cord has a force constant 72 ${units("Nm", -1)}. If the tension in the cord at the point of release is 36 N, the velocity of projection of stone is and maximum height reached is?`,
        options: [
            `30 ${units("ms",-1)} and 45 m`,
            `24 ${units("ms",-1)} and 4.5 m`,
            `6 ${units("ms",-1)} and 18 m`,
            `3 ${units("ms",-1)} and 9.0 m`,
        ],
        ans: "A",
      },
    ],
  },
];


export { phyQuestions }