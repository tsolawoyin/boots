import { exp, units, formula, eConfig } from "./helpers";

let stoichiometry = [
  {
    id: 1,
    question:
      "How many moles of calcium trioxocarbonate(IV) are there in 2.5g of calcium trioxocarbonate(IV) <br /> { C = 12; O = 16; Ca = 40 }",
    options: [`0.0025`, `0.025`, `0.25`, `2.5`],
    ans: "E",
  },
  {
    id: 2,
    question:
      "One mole of a substance contains the",
    options: [
      `atomic number of particles`,
      `faraday's number of particles`,
      `Avogadro's number of particles`,
      `quantum number of particles`
    ],
    ans: "E",
  },
  {
    id: 3,
    question:
      "The number of hydrogen ions in 9.8g of tetraoxosulphate(VI) acid solution is",
    options: [
      `6.02 X ${exp(23)}`,
      `6.02 X ${exp(22)}`,
      `1.20 X ${exp(22)}`,
      `1.20 X ${exp(23)}`
    ],
    ans: "E",
  },
  {
    id: 4,
    question:
      `What mass of ${formula("SO",2)} contains the same number of molecules of 0.8g of ${formula("CH",4)} <br /> { ${formula("SO", 2)} = 64g/mol; ${formula("CH",4)} = 16g/mol }`,
    options: [
      `3.2g`,
      `0.32g`,
      `6.4g`,
      `0.64g`
    ],
    ans: "E",
  },
  {
    id: 5,
    question:
      `One mole of a compound ${formula("MHCO",3)} has a mass of 84g. Calculate the relative atomic mass of M. <br /> { H = 1; C = 12, O = 16 }`,
    options: [
      `61`,
      `42`,
      `26`,
      `23`
    ],
    ans: "E",
  },
  {
    id: 6,
    question:
      `How many molecules of phosphorus (${formula("P",4)}) are present in 496g of the substance? <br /> { P = 31; N<sub>A</sub> = 6.0 X ${exp(23)}${units("mol",-1)} }`,
    options: [
      `1.20 X ${exp(23)}`,
      `1.20 X ${exp(24)}`,
      `2.40 X ${exp(23)}`,
      `2.40 X ${exp(24)}`,
    ],
    ans: "E",
  },
  {
    id: 7,
    question:
      `Upon heating 1.25g of a solid, 280${units("cm",3)} of a gas measured at S.T.P  were evolved and a residue of 0.7g was left. Calculate the molar mass of the gas? [Molar volume of a gas at s.t.p = 22.4${units("dm",3)}]`,
    options: [
      `64g`,
      `44g`,
      `32g`,
      `16g`,
    ],
    ans: "E",
  },
  {
    id: 8,
    question:
      `What is the mass of 2.3 mole of sodium`,
    options: [
      `53g`,
      `230g`,
      `23g`,
      `46g`,
    ],
    ans: "E",
  },
  {
    id: 9,
    question:
      `How many moles of iron(III) oxide are contained in 1kg of the compound? <br /> { Fe = 56; O = 16 }`,
    options: [
      `3.125 moles`,
      `0.3125 mole`,
      `0.625 mole`,
      `6.25 moles`,
    ],
    ans: "E",
  },
  {
    id: 10,
    question:
      `The number of atoms of chlorine present in 7,45g of KCl is`,
    options: [
      `6.02 X ${exp(23)}`,
      `6.02 X ${exp(22)}`,
      `7.45 X ${exp(23)}`,
      `7.45 X ${exp(22)}`,
    ],
    ans: "E",
  },
  {
    id: 11,
    question:
      `How many atoms of oxygen are present in 8.8g of carbon(IV) oxide?`,
    options: [
      `6.02 X ${exp(22)}`,
      `2.41 X ${exp(22)}`,
      `2.41 X ${exp(23)}`,
      `2.41 X ${exp(24)}`,
    ],
    ans: "E",
  },
  {
    id: 12,
    question:
      `What is the mass of potassium hydroxide present in 500${units("cm",3)} of 2${units("moldm",-3)} solution of the compound <br /> { K = 39; O = 16; H = 1}`,
    options: [
      `40g`,
      `56g`,
      `112g`,
      `28g`
    ],
    ans: "E",
  },
  {
    id: 13,
    question:
      `The ratio of the number of molecules of 4g of hydrogen to that in 20g of oxygen is`,
    options: [
      `2 : 1`,
      `1 : 1`,
      `1 : 2`,
      `1 : 4`
    ],
    ans: "E",
  },
  {
    id: 14,
    question:
      `Which of the following is the same as 24g of magnesium? <br /> { Mg = 24; H = 1; O = 16; Cl = 35.5 }`,
    options: [
      `1g of hydrogen molecules`,
      `16g of oxygen molecules`,
      `32g of oxygen molecules`,
      `35.5g of chlorine molecules`
    ],
    ans: "E",
  },
  {
    id: 15,
    question:
      `The chloride of a metal (M) consists of 79.78% of chlorine by mass. What is the empirical formual of the chloride? (M = 27; Cl = 35,5)`,
    options: [
      `MCl`,
      `${formula("MCl",2)}`,
      `${formula("MCl",3)}`,
      `${formula("MCl",4)}`
    ],
    ans: "E",
  },
  {
    id: 16,
    question:
      `An oxide of nitrogen contains 69.6% of oxygen by mass. Its empirical formula is`,
    options: [
      `${formula("N",2,O,3)}`,
      `${formula("N",2,"O",2)}`,
      `${formula("N",2,"O")}`,
      `${formula("NO",2)}`
    ],
    ans: "E",
  },
  {
    id: 17,
    question:
      `Upon heating 1${units("dm",3)} of a monoatomic gas, Y, it combines with 1.5${units("dm",3)} of oxygen to form an oxide. The empirical formula of the oxide is`,
    options: [
      `${formula("Y",3,"O",2)}`,
      `${formula("Y",2,"O",3)}`,
      `${formula("YO",2)}`,
      `${formula("YO",3)}`
    ],
    ans: "E",
  },
  {
    id: 18,
    question:
      `5.00g of an oxide of a metal (M) gave 4.00g of the metal when reduced with hydrogen. What is the empirical formula of the oxide? <br /> { M = 64; O = 16 }`,
    options: [
      `${formula("Y",3,"O",2)}`,
      `${formula("Y",2,"O",3)}`,
      `${formula("YO",2)}`,
      `${formula("YO",3)}`
    ],
    ans: "E",
  },
  {
    id: 19,
    question:
      `What is the empirical formula of an organic compound containing 40% carbon and 6.67% hydrogen by mass? <br /> { C = 12; H = 1; O = 16 }`,
    options: [
      `${formula("CH",2)}`
      `${formula("CH",3)}`
      `${formula("CH",2,"O")}`
      `${formula("CH",3,"O")}`
    ],
    ans: "E",
  },
  {
    id: 20,
    question:
      `An element, A, has the electronic configuration ${eConfig("1s",2,"2s",2,"2p",6,"3s",2,"3p",3)}. The combination of A with a halogen X can give compounds of formula(e)`,
    options: [
      `${formula("AX",3)} and ${formula("AX",5)}`
      `${formula("AX",3)} only`
      `${formula("AX",5)}`
      `${formula("AX")} and ${formula("AX",2)}`
    ],
    ans: "E",
  },
  {
    id: 21,
    question:
      `The molar ratio of hydrogen to carbon in an organic liquid compound is 2 : 1. On evaporation at s.t.p, 0.24g of compound produced 64${units("cm",3)} of vapour. What is the molecular formula of the liquid compound? <br /> { C= 12; H = 1, molar volume of a gas at s.t.p = 22.4${units("dm",3)} }`,
    options: [
      `${formula("C",4,"H",8)}`
      `${formula("C",5,"H",10)}`
      `${formula("C",6,"H",6)}`
      `${formula("C",6,"H",12)}`
    ],
    ans: "E",
  },
  {
    id: 22,
    question:
      `Which of the following formula is correct for compounds of an element Y having a combining power of 3?`,
    options: [
      `${formula("YSO",4)}`
      `${formula("Y",2,"O",3)}`
      `${formula("YS",3)}`
      `${formula("Y",3,"Cl",2)}`
    ],
    ans: "E",
  },
  {
    id: 23,
    question:
      `What is the percentage by mass of carbon in the compound ${formula("Na",2,"CO",3)}.10${formula("H",2,"O")}? <br /> { H = 1, C = 12, O = 16, Na = 23 }`,
    options: [
      `16.1`, `16.8`, `28.1`, `9.4`
    ],
    ans: "E",
  },
  {
    id: 24,
    question:
      `What is the percentage by mass of aluminum in ${formula("Al",2,`(${formula("SO",4)}), 3`)}? <br /> { Al = 27, S = 32, O = 16 }`,
    options: [
      `15.8`, `14.7`, `28.1`, `9.4`
    ],
    ans: "E",
  },
  {
    id: 25,
    question:
      `What is the value of x in the molecular formula, ${formula("Pb", `(${formula("NO",3)}),"x`)} if the percentage by mass of nitrogen is 8.46? <br /> { Pb = 207; N = 14; O = 16 }`,
    options: [
      `1`, `2`, `3`, `4`
    ],
    ans: "E",
  },
  // makes sense. Lol. Thinking about it. this things get as e be... 
]