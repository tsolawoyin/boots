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



