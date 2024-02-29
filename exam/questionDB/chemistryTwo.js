import { units, formula, eConfig, isotope, ion, exp } from "./helpers.js"
let kineticTheoryOfMatter = [
  {
    id: 1,
    question:
      "Which of the following is correct?",
    options: [
      "The average kinetic energy of a gas is directly proportional to its temperature",
      "At constant temperature, the volume of a gas increase as the pressure increases",
      "Pressure of a gas is inversely proportional to its volume",
      "The temperature of a gas is directly proportional to its volume",
      "The collisions of molecules with each other are inelastic",
    ],
    ans: "D",
  },
  {
    id: 2,
    question:
      `30${units("cm",3)} of oxygen diffuses through a porous pot in 7 seconds, how long will it take 60${"cm",3} of chlorine to diffuse through the same pot, if the vapor density of oxygen and chlorine are 16 and 36 respectively.`,
    options: [
      `9.3sec`,
      `14sec`,
      `21sec`,
      `28sec`,
      `30.3sec`
    ],
    ans: "D",
  },
  {
    id: 3,
    question:
      `The normal boiling point of a liquid is defined as`,
    options: [
      `the temperature at which its vapor pressure equals the atmospheric pressure`,
      `the teperature at which bubbles begin to form`,
      `the temperature at which the vapor pressure equals 1 atmosphere`,
      `the temperature at which the rate of condensation of vapor equals the rate of vaporization of the liquid`,
      `the temperature at which the space above the liquid is saturated`
    ],
    ans: "D",
  },
  {
    id: 4,
    question:
      `50${units("cm",3)} of hydrogen are sparked with 20${units("cm",3)} of oxygen at 100&deg; and 1 atm. The total volume of the residual gases is`,
    options: [
      `50${units("cm",3)}`,
      `10${units("cm",3)}`,
      `40${units("cm",3)}`,
      `30${units("cm",3)}`,
      `70${units("cm",3)}`,
    ],
    ans: "D",
  },
  {
    id: 5,
    question:
      `Which of the following statement is true?`,
    options: [
      `An increase in the temperature of a given mass of a gas increases the number of gas molecules.`,
      `An increase in the temperature of the gas does not affect the kinetic energy`,
      `An increase in the pressure of he gas is proportional to the increase in volume`,
      `A decrease in the pressure of the gas is proportional to the increase in volume at constant temperature`,
      `A decrease in the pressure of the gas decreases the number of gas molecules present`,
    ],
    ans: "D",
  },
  {
    id: 6,
    question:
      `The vapor density of a gas may be defined as?`,
    options: [
      `the mass of a unit volume of water vapor`,
      `the mass of a unit volume of the gas compared to an equal volume of hydrogen`,
      `the mass of a unit volume of the gas compared to an equal volume of oxygen`,
      `the mass of a unit volume of the gas minus the vapor pressure of water`,
      `two times the relative molecular mass of the gas.`,
    ],
    ans: "D",
  },
  {
    id: 7,
    question:
      `A gas occupies 30.0${units("dm",3)} at S.T.P. What volume would it occupy at 91&deg;C and 380mmHg?`,
    options: [
      `20.0${units("dm",3)}`,
      `40.0${units("dm",3)}`,
      `60.0${units("dm",3)}`,
      `80.0${units("dm",3)}`,
      `100.0${units("dm",3)}`,
    ],
    ans: "D",
  },
  {
    id: 8,
    question:
      `10${units("cm",3)} of CO is mixed and sparked with 100${units("cm",3)} of air containing 21% ${formula("O",2)}. If all the volumes are measured at S.T.P the volume of resulting gases would be`,
    options: [
      `90.0${units("cm",3)}`,
      `100.0${units("cm",3)}`,
      `105.0${units("cm",3)}`,
      `110.0${units("cm",3)}`,
      `115.0${units("cm",3)}`,
    ],
    ans: "D",
  },
  {
    id: 9,
    question:
      `On heating, under suitable conditions, 1 liter of a monoatomic gas, X, combines with 1.5 liter of Oxygen to form an oxide. What is the formula of the oxide`,
    options: [
      `${formula("XO",3)}`,
      `${formula("X",2,"O",3)}`,
      `${formula("X",3,"O",2)}`,
      `${formula("XO",2)}`,
      `none of the above`,
    ],
    ans: "D",
  },
  {
    id: 10,
    question:
      `Under high pressure, real gases do not obey gas laws because their molecules`,
    options: [
      `have become more energetic`,
      `have become less energetic`,
      `have become smaller in size`,
      `decompose into atoms`,
      `start repelling each other`,
    ],
    ans: "D",
  },
  {
    id: 11,
    question:
      `500${units("cm",3)} was collected over water at 30&deg;C and 752mmhHg pressure. What is the volume of dry oxygen at S.T.P?<br />(vapor pressure of dry oxygen at 30&deg;C = 32mmHg)`,
    options: [
      `475${"cm",3}`,
      `415${"cm",3}`,
      `586${"cm",3}`,
      `500${"cm",3}`,
      `427${"cm",3}`,
    ],
    ans: "D",
  },
  {
    id: 12,
    question:
      `Which of the following statement is an exception in the assumptions of kinetic theory of gases?`,
    options: [
      `Gases are composed of many elastic particles`,
      `the particles are of neglible size`,
      `the particles are in constant random motion`,
      `the particles are of negligible mass`,
      `the particles collide with each other`,
    ],
    ans: "D",
  },
  {
    id: 13,
    question:
      `The best way of collecting chlorine is`,
    options: [
      `by downward displacement of air`,
      `by upward displacement of air`,
      `over water`,
      `under water`,
      `over mercury`,
    ],
    ans: "D",
  },
  {
    id: 14,
    question:
      `When air is compressed`,
    options: [
      `its temperature increases`,
      `its solidifies`,
      `its temperature decreases`,
      `its temperature increases`,
      `its temperature remains unchanged`,
    ],
    ans: "D",
  },
  {
    id: 15,
    question:
      `28.8${units("cm",3)} of nitrogen at 15&deg;C is cooled at 0&deg;C at constant pressure, the new volume of nitrogen is`,
    options: [
      `17.4${units("cm",3)}`,
      `14.7${units("cm",3)}`,
      `27.3${units("cm",3)}`,
      `31.7${units("cm",3)}`,
      `34.7${units("cm",3)}`,
    ],
    ans: "D",
  },
  {
    id: 15,
    question:
      `28.8${units("cm",3)} of nitrogen at 15&deg;C is cooled at 0&deg;C at constant pressure, the new volume of nitrogen is`,
    options: [
      `17.4${units("cm",3)}`,
      `14.7${units("cm",3)}`,
      `27.3${units("cm",3)}`,
      `31.7${units("cm",3)}`,
      `34.7${units("cm",3)}`,
    ],
    ans: "D",
  },
  {
    id: 17,
    question:
      `Which of the following is not a true statement of kinetic theory of gases?`,
    options: [
      `The molecules moves at random`,
      `The size of the molecule is negligible comapared to the volume of the gas`,
      `The molecular collisions are perfectly elastic`,
      `Every molecule has the same kinetic energy at a particular temperature`,
      `The average kinetic energy is proportional to the absolute temperature of the gas`,
    ],
    ans: "D",
  },
  {
    id: 18,
    question:
      `A mixture contains 20${units("cm",3)} of ${formula("H",2)}, 35${units("cm",3)} of oxygen, 15${units("cm",3)} of carbon monoxide and 10${units("cm",3)} of nitrogen. Which of the following gives the mole fraction of hydrogen in this mixture?`,
    options: [
      `0.02`, `0.16`, `0.20`, `0.25`, `20`
    ],
    ans: "D",
  },
  {
    id: 19,
    question:
      `0.07g of a hydride of carbon occupies 56.0${units("cm",3)} at S.T.P. When vaporized it contains 14.29% by mass of hydrogen. The formula of the hydrocarbon is`,
    options: [
      `${formula("CH",4)}`,
      `${formula("C",2,"H",2)}`,
      `${formula("C",2,"H",4)}`,
      `${formula("C",2,"H",6)}`,
      `${formula("C",3,"H",8)},`
    ],
    ans: "D",
  },
  {
    id: 20,
    question:
      `The pressure  on 100${units("cm",3)} of oxygen at 35&deg;C is 750mmHg/ What would be the volume of the gas if the pressure is increased to 1000mmHg without changing the temperature`,
    options: [
      `133.3${units("cm",3)}`,
      `85${units("cm",3)}`,
      `75${units("cm",3)}`,
      `65${units("cm",3)}`,
      `58.3${units("cm",3)}`,
    ],
    ans: "D",
  },
  {
    id: 21,
    question:
      `When a pressure cooker is half filled with water, and heated to boiling point, then the pressure inside the cooker will`,
    options: [
      `decrease, since only a fraction of the water molecules has changed to vapour`,
      `remain constant because the total number of water molecules has not changed`,
      `increase because the water molecules can now reach every part of the sealed tube`,
      `decrease since water boils under reduced pressure`,
      `increase because the water vapor molecules now strike the walls of the tube more frequently because of their increased velocity`,
    ],
    ans: "D",
  },
  {
    id: 22,
    question:
      `60${units("cm",3)} of Hydrogen are sparked with 20${units("cm",3)} of Oxygen at 100&deg;C and 1 atm. The total volume of the residual gases is`,
    options: [
      `60${units("cm",3)}`,
      `10${units("cm",3)}`,
      `40${units("cm",3)}`,
      `30${units("cm",3)}`,
      `70${units("cm",3)}`,
    ],
    ans: "D",
  },
  {
    id: 23,
    question:
      `If the rate of diffusion of oxygen gas is taken as 1, what will be the rate of diffusion of methane whose relative molar mass is 16`,
    options: [
      `2.0`,
      `11.8`,
      `1.4`,
      `1.0`,
      `0.5`,
    ],
    ans: "D",
  },
  {
    id: 24,
    question:
      `If the temperature of a gas is increased`,
    options: [
      `the kinetic energy of the molecules will decrease`,
      `the pressure will decrease if the volume is constant`,
      `the gas will occupy a greater volume if the pressure is constant`,
      `the mass of the gas will decrease`,
      `the pressure and the volume will increase`,
    ],
    ans: "D",
  },
  {
    id: 25,
    question:
      `100cm${units("cm",3)} of oxygen are made to react with 50${units("cm",3)} of hydrogen and the whole reaction mixture was then passed through anhydrous calcium chloride. WHat is the volume of the gas left?`,
    options: [
      `5${units("cm",3)}`,
      `250${units("cm",3)}`,
      `50${units("cm",3)}`,
      `75${units("cm",3)}`,
      `100${units("cm",3)}`,
    ],
    ans: "D",
  },
  {
    id: 26,
    question:
      `Which of the following relationships between the pressure P, the volume, V and the temperature T, represents an ideal gas behaviour`,
    options: [
      `P&VT`,
      `P&T/V`,
      `PT&V`,
      `PV&1/T`,
      `P&V/T`,
    ],
    ans: "D",
  },
  {
    id: 28,
    question:
      `Increasing the pressure of a gas.`,
    options: [
      `lowers the average kinetic energy of the molecules`,
      `decreases the density of the gas`,
      `decreases the temperature of the gas`,
      `increases the density of the gas`,
      `increases the volume of the gas`,
    ],
    ans: "D",
  },
  {
    id: 29,
    question:
      `20${units("cm",3)} of hydrogen gas are sparked with 20${units("cm",3)} of oxygen gas in an endiometer at 373K(100&deg;C) and at 1 atmosphere. The resulting mixture is cooled to 298K(25&deg;C) and passed over calcium chloride. The volume of the residual gas is`,
    options: [
      `40${units("cm",3)}`,
      `20${units("cm",3)}`,
      `30${units("cm",3)}`,
      `10${units("cm",3)}`,
      `5${units("cm",3)}`,
    ],
    ans: "D",
  },
  {
    id: 31,
    question:
      `An organic compound with a vapour density 56.5 has the following percentage composition: C = 53.1%, N = 12.4%, O = 28.3%, H = 6.2%. The molecular formula of the compound is`,
    options: [
      `${formula("C",3,"H",8,"O",2,"N")}`,
      `${formula("C",5,"H",8,"O",2,"N")}`,
      `(${formula("C",6,"H",7,"O",2,"N")})1/2`,
      `${formula("C",5,"H",7,"O",2,"N")}`,
      `(${formula("C",3,"H",8,"O",2,"N")})<sub>2</sub>`,
    ],
    ans: "D",
  },
  {
    id: 32,
    question:
      `Hydrogen diffuses through a porous plug`,
    options: [
      `at the same rate as oxygen`,
      `at a slower rate than oxygen`,
      `twice as fast as oxygen`,
      `three times as fast as oxygen`,
      `four times as fast as oxygen`,
    ],
    ans: "D",
  },
  {
    id: 33,
    question:
      `A cetain volume of a gas at 298K is heated such that its volume and pressure are now four times the original values. What is the new temperature?`,
    options: [
      `18.6K`,
      `100.0K`,
      `298.0K`,
      `1192.0K`,
      `47689.0K`,
    ],
    ans: "D",
  },
  {
    id: 34,
    question:
      `The bioling points of water, ethanol, toluene and butan-2-ol are 373.0K, 351.3K, 383.6K and 372.5K respectively. Which liquid has the highest vapor pressure at 323.0K?`,
    options: [
      `Water`,
      `Toluene`,
      `Ethanol`,
      `Butan-2-ol`,
      `None`,
    ],
    ans: "D",
  },
  {
    id: 35,
    question:
      `When pollen grains are suspended in water and viewed through a microscope, they apear to be in a state of constant but erratic motion. This is due to`,
    options: [
      `convection currents`,
      `small changes in pressure`,
      `small changes in temperature`,
      `a chemical reaction between the pollen graisn and water`,
      `the bombardment of the pollen grains by molecules of water`,
    ],
    ans: "D",
  },
  {
    id: 36,
    question:
      `The movement of liquid molecules from the surface of the liquid of the gaseous phase above it is known as`,
    options: [
      `cBrownnian movement`,
      `Condensation`,
      `Evaporation`,
      `Liquefaction`,
    ],
    ans: "D",
  },
  {
    id: 37,
    question:
      `10${units("cm",3)} of hydrogen fluoride gas reacts with 5${units("cm",3)} of Dinitrogen difluoride gas (${formula("N",2,"F",2)}) to form 10${units("cm",3)} of a single gas. Which of the following `,
    options: [
      `Brownnian movement`,
      `Condensation`,
      `Evaporation`,
      `Liquefaction`,
    ],
    ans: "D",
  },
]


let sulphur =   {
  topic: "Sulphur",
  questions: [
    {
      id: 1,
      question: `When ${formula(
        "SO",
        2
      )} is passed into a solution of acidified potassium heptaoxodichromate(VI), ${formula(
        "K",
        2,
        "Cr",
        2,
        "O",
        7
      )}, the solution turn?`,
      options: [`green`, `orange`, `purple`, `yellow`],
      ans: "A",
    },
    {
      id: 2,
      question: `Tetraoxosulphate(VI) acid burns the skin by`,
      options: [`hydrolysis`, `hydration`, `heating`, `dehydration`],
      ans: "D",
    },
    {
      id: 3,
      question: `The salt that reacts with dilute hydrochloric acid to produce a pungent smelling gas which decolorize acidified purple potassium tetraoxomanganate(VII) solution is?`,
      options: [
        `${formula("Na", 2, "SO", 4)}`,
        `${formula("Na", 2, "SO", 3)}`,
        `${formula("Na", 2, "S")}`,
        `${formula("Na", 2, "CO", 4)}`,
      ],
      ans: "C",
    },
    {
      id: 4,
      question: `Sulphur(IV) oxide bleaches by?`,
      options: [`oxidation`, `reduction`, `decomposition`, `sulphurnization`],
      ans: "B",
    },
    {
      id: 5,
      question: `Which of the following is true of Sulphur(VI) oxide`,
      options: [
        `it forms tetraoxosulphate(VI) acid with water`,
        `it is an odorless gas`,
        `it is an acid anhydride`,
        `it forms white precipitate with acidified barium chloride solution`,
      ],
      ans: "C",
    },
    {
      id: 6,
      question: `A solution of a salt was acidified by HCl. When a few drops of ${formula(
        "BaCl",
        2
      )} solution were added, a white precipitate was formed. Which of the following ions is present in the salt?`,
      options: [
        `${ion(formula("CO", 3), 2, "-")}`,
        `${ion(formula("NO", 3), "-", "")}`,
        `${ion(formula("SO", 3), 2, "-")}`,
        `${ion(formula("SO", 4), 2, "-")}`,
      ],
      ans: "D",
    },
    {
      id: 7,
      question: `A rock sample was added to a cold dilute ${formula(
        "HNO",
        3
      )}. The gas evolved was passed into a solution of acidified ${formula(
        "K",
        2,
        "Cr",
        2,
        "O",
        7
      )} and the solution turned green. The rock sample contains?`,
      options: [
        `${ion(formula("CO", 3), 2, "-")}`,
        `${ion(formula("NO", 3), "-", "")}`,
        `${ion(formula("SO", 3), 2, "-")}`,
        `${ion(formula("SO", 4), 2, "-")}`,
      ],
      ans: "C",
    },
    {
      id: 8,
      question: `Rhombic sulfur comsists of which molecule?`,
      options: [
        `${formula("S", 6)} molecule`,
        `${formula("S", 4)} molecule`,
        `${formula("S", 2)} molecule`,
        `${formula("S", 8)} molecule`,
      ],
      ans: "D",
    },
    {
      id: 9,
      question: `Sulfuric acid is manufactured by:`,
      options: [
        `Haber's process`,
        `Ostwald' process`,
        `Contact process`,
        `Dow's process`,
      ],
      ans: "C",
    },
    {
      id: 10,
      question: `${formula("SO", 2)} react with ${formula("NaOH")} forming`,
      options: [
        `Sodium sulphate`,
        `Sulfur trixoxide`,
        `Hydrogen sulphite`,
        `Sodium sulphite`,
      ],
      ans: "D",
    },
    {
      id: 11,
      question: `Sulphur when burnt in air forms`,
      options: [
        `${formula("SO", 3)}`,
        `${formula("SO", 2)}`,
        `${formula("H", 2, "SO", 3)}`,
        `${formula("H", 2, "SO", 4)}`,
      ],
      ans: "B",
    },
    {
      id: 12,
      question: `The number of S-S bonds in sulhpur trioxide trime (${formula(
        "S",
        3,
        "O",
        9
      )}) is?`,
      options: [`zero`, `three`, `one`, `two`],
      ans: "A",
    },
    {
      id: 13,
      question: `The temperature above which beta sulphur is stable is?`,
      options: [`369 &deg;C`, `369K`, `298K`, `273.15K`],
      ans: "B",
    },
    {
      id: 14,
      question: `Sulphur dioxde reacts with chlorine in the presence of charcoal to give?`,
      options: [
        `Sulphuryl chloride`,
        `Oleum`,
        `Sulphur trioxide`,
        `Sulphuric acid`,
      ],
      ans: "A",
    },
    {
      id: 15,
      question: `The allotrope of sulphur that is more stable at room temperature is`,
      options: [
        `rhombic sulfur`,
        `monoclinic sulfur`,
        `beta sulfur`,
        `none of these`,
      ],
      ans: "A",
    },
    {
      id: 16,
      question: `The maximum covalency of sulfur is?`,
      options: [`2`, `6`, `4`, `8`],
      ans: "B",
    },
    {
      id: 17,
      question: `The geometry of ${formula(
        "H",
        2,
        "S"
      )} and its dipole moment are`,
      options: [
        `Angular and zero`,
        `Linear and non-zero`,
        `Linear and zero`,
        `Angular and non-zero`,
      ],
      ans: "D",
    },
    {
      id: 18,
      question: `Pick out the odd property of rhombic sulfur`,
      options: [
        `melting point 385.8K`,
        `yellow solid`,
        `insoluble in carbon disulfide`,
        `insoluble in water`,
      ],
      ans: "C",
    },
    {
      id: 19,
      question: `The number of S-S bond in pyrosulfuric acid(oleum) is?`,
      options: [`1`, `2`, `0`, `3`],
      ans: "C",
    },
    {
      id: 20,
      question: `Solid ${formula("SO", 3)} exists as?`,
      options: [
        `Plane triangular structure`,
        `Bent structure`,
        `Linear structure`,
        `Cyclic trimer structure`,
      ],
      ans: "D",
    },
    {
      id: 21,
      question: `The basicity of sulphurous acid is?`,
      options: [`5`, `3`, `2`, `4`],
      ans: "C",
    },
    // start here
    {
      id: 22,
      question: `Hydrogen sulphide gas can act as?`,
      options: [
        `an oxidizing agent`,
        `a dehydrating agent`,
        `a bleaching agent`,
        `a precipitating agent`,
      ],
      ans: "D",
    },
    {
      id: 23,
      question: `The acid that is used to remove rust is`,
      options: [
        `boric`,
        `hydrochloric`,
        `trioxonitrate(V)`,
        `tetraoxosulfate(VI)`,
      ],
      ans: "B",
    },
    {
      id: 24,
      question: `When chlorine gas is passed into a solution of sulfur dioxide?`,
      options: [
        `sulfur dioxide is reduced to sulfur`,
        `the chlorine is oxidezed to hydrochloric acid`,
        `dilute sulfuric acid and hydrochloric acid are produced`,
        `hydrochloric acid and sulfur are produced`,
        `sulfur trioxide is the only product`,
      ],
      ans: "C",
    },
    {
      id: 25,
      question: `${formula("SO", 2)} + ${formula("O", 2)} -> 2${formula(
        "SO",
        3
      )}<br />In the reaction above, the most suitable catalyst is?`,
      options: [
        `chromium(VI) oxide`,
        `Iron(III) oxide`,
        `copper(I) oxide`,
        `vanadium(V) oxide`,
      ],
      ans: "D",
    },
    {
      id: 26,
      question: `The sulphide that is commonly used in coating electric fluorescent tubes is?`,
      options: [
        `Irom(II) sulfide`,
        `Tin(II) sulfide`,
        `Zinc sulfide`,
        `Lead(IV) sulfide`,
      ],
      ans: "C",
    },
    {
      id: 27,
      question: `What is the atomic number of sulfur`,
      options: [`8`, `16`, `32`, `64`],
      ans: "C",
    },
    {
      id: 28,
      question: `Which of the following is a common allotrope of sulfur`,
      options: [
        `sulfur dioxide`,
        `sulfur hexafluoride`,
        `sulfuric acid`,
        `rhombic sulfur`,
      ],
      ans: "D",
    },
    {
      id: 29,
      question: `What is the smell commonly associated with hydorgen sulfide, a compound of sulfur`,
      options: [`sweet`, `sour`, `rotten eggs`, `minty`],
      ans: "C",
    },
    {
      id: 30,
      question: `Sulfur is an essential element for which biological molecules?`,
      options: [`carbohydrates`, `lipids`, `proteins`, `nucleic acids`],
      ans: "C",
    },
    {
      id: 31,
      question: `What is the chemical symbol for sulfur?`,
      options: [`Su`, `Sf`, `Sr`, `S`],
      ans: "D",
    },
    {
      id: 32,
      question: `What is the main environmental concern associated with sulfur dioxide (SO2) emissions?`,
      options: [
        `Depletin of the ozone layer`,
        `Acid rain formation`,
        `Global warming potential`,
        `Ground level ozone production`,
      ],
      ans: "B",
    },
    {
      id: 33,
      question: `Who first recognized sulfur as an element?`,
      options: [
        `John Dalton`,
        `Humphry Davy`,
        `Loius Pasteur`,
        `Antoine Lavoiser`,
      ],
      ans: "D",
    },
    {
      id: 34,
      question: `What is the name of the process of extracting sulfur on commercial scale`,
      options: [
        `Bosch process`,
        `Boyle process`,
        `Ostwald process`,
        `Frasch process`,
      ],
      ans: "D",
    },
    {
      id: 35,
      question: `Which of the following is used for vulcanization purposes in the rubber industry?`,
      options: [
        `Sulfuric acid`,
        `Sulfur dioxide`,
        `Sulfur`,
        `Sulfur trioxide`,
      ],
      ans: "C",
    },
    {
      id: 36,
      question: `Which is a more vital source of elemental sulfur?`,
      options: [`oceans`, `wind`, `soil`, `volcanoes`],
      ans: "D",
    },
    {
      id: 37,
      question: `What is the transition temperature of alpha- and beta-sulfur?`,
      options: [`369&deg;C`, `369&deg;F`, `95.9&deg;C`, `95.9&deg;F`],
      ans: "C",
    },
    {
      id: 38,
      question: ` Which characteristic of crude petroleum is a consequence of sulfur?`,
      options: [`Acidity`, `Sourness`, `Alkalinity`, `Foul odor`],
      ans: "A",
    },
    {
      id: 39,
      question: `What percentage of Earth’s mass is sulfur?`,
      options: [`3%`, `5%`, `0.032%`, `2%`],
      ans: "A",
    },
    {
      id: 40,
      question: `What is the chemical structure and formula of sulfur?`,
      options: [
        `${formula("S", 8)}, S`,
        `S, ${formula("S", 8)}`,
        `S`,
        "S",
        `${formula("S", 8)}, ${formula("S", 8)}`,
      ],
      ans: "A",
    },
  ],
}