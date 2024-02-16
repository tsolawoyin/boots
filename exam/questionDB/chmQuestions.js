// To be turned on only when changes want to be made.
import { exp, formula, units, ion, eConfig, isotope } from "./helpers.js"
let chemistryQuestions = [
  {
    topic: "Nitrogen",
    questions: [
      {
        id: 1,
        question:
          "Nitrogen is a non-metal which is found in what group of the periodic table?",
        options: ["I", "II", "III", "VI", "V"],
        ans: "E",
      },
      {
        id: 2,
        question: "Which of the following does not contain element nitrogen",
        options: ["ammonia", "sugar", "air", "aqau fortis"],
        ans: "B",
      },
      {
        id: 3,
        question: "Nitrogen is used for the following except",
        options: [
          "in the production of ammonia gas",
          "it is used as a refrigerant",
          "for prevention of fire",
          "in the manufacture of CO<sub>2</sub>",
        ],
        ans: "D",
      },
      {
        id: 4,
        question:
          "Nitrogen can be obtained from ammonia by passing ammonia over heated",
        options: ["Cu", "CuO", "C", "CaO"],
        ans: "B",
      },
      {
        id: 5,
        question: "Nitrogen can obtained industrially",
        options: [
          "by passing ammonia over heated CuO",
          "from liquified air by fractional distillation",
          `from reaction of ${formula("NaNO", 2)} with ${formula(
            "NH",
            4,
            "Cl"
          )}`,
          "from atmospheric air",
        ],
        ans: "B",
      },
      {
        id: 6,
        question: `Why is NH<sub>4</sub>NO<sub>2</sub> not heated directly to give ${formula(
          "N",
          2
        )}?`,
        options: [
          "it is unstable",
          "the reaction is very slow",
          "it may lead to explosion",
          "it is not spontaneous",
        ],
        ans: "C",
      },
      {
        id: 7,
        question: "Which of the following gives an impure Nitrogen",
        options: [
          "atmospheric air",
          `from ${formula("NH", 4, "NO", 2)}`,
          "from ammonia gas",
          "from liquefied air",
        ],
        ans: "A",
      },
      {
        id: 8,
        question: "Atmospheric air is passed over heated copper, Cu, to remove",
        options: ["Hydrogen", "Sulphur", "Oxygen", "Carbon(IV)Oxide"],
        ans: "C",
      },
      {
        id: 9,
        question:
          "Atmospheric air is passed through aqueous NaOH in order to remove",
        options: [
          `${formula("H", 2, "S")}`,
          `${formula("CO", 2)}`,
          "CuO",
          `${formula("H", 2, "O")}`,
        ],
        ans: "B",
      },
      {
        id: 10,
        question:
          "Which of the following is <strong>false</strong> about Nitrogen",
        options: [
          "pure nitrogen is colorless and odorless",
          "it is insoluble in water",
          "it is lighter than air",
          "it has 4 valence electron",
        ],
        ans: "D",
      },
      {
        id: 11,
        question: `What are the product of the following reaction <br /> <span class="reaction">3CuO<sub>(s)</sub> + 2NH<sub>3(g)</sub> -></span> `,
        options: [
          `Cu, ${formula("H", 2, "O")}, ${formula("H", 2)}`,
          `Cu, ${formula("SO", 2)}, ${formula("N", 2)}`,
          `Cu, ${formula("H", 2, "O")}, ${formula("N", 2)}`,
          `Cu, ${formula("NO", 2)}, ${formula("O", 2)}</sub>`,
        ],
        ans: "C",
      },
      {
        id: 12,
        question: `The electronic configuration of Nitrogen is`,
        options: [
          `${eConfig("1s", 2, "2s", 2, "2p", 3)}`,
          `${eConfig("1s", 2, "2s", 2, "2p", 6, "3s", 1)}`,
          `${eConfig("1s", 2, "2s", 1)}`,
          `${eConfig("1s", 2, "2s", 2, "2p", 4)}`,
        ],
        ans: "A",
      },
      {
        id: 13,
        question: `The decomposition of ${formula(
          "NH",
          4,
          "NO",
          2,
          "aq"
        )} gives`,
        options: [
          `NO<sub>2</sub> and H<sub>2</sub>O`,
          `N<sub>2</sub> and H<sub>2</sub>O`,
          `N<sub>2</sub>O and H<sub>2</sub>O`,
          `N<sub>2</sub> and O<sub>2</sub>`,
        ],
        ans: "B",
      },
      {
        id: 14,
        question: `The percentage of Nitrogen in 1 dm<sup>3</sup> of air is?`,
        options: [
          "0.5 dm<sup>3</sup>",
          "0.2 dm<sup>3</sup>",
          "0.6 dm<sup>3</sup>",
          "0.8 dm<sup>3</sup>",
        ],
        ans: "D",
      },
      {
        id: 15,
        question: `Nitrogen is usually collected over water because`,
        options: [
          "it is denser than water",
          "it is less dense than water",
          "it is insoluble in water",
          "it is soluble in water",
        ],
        ans: "C",
      },
      {
        id: 16,
        question: `Which of the following is true about the chemical properties of Nitrogen gas <br /> I. It does not support combustion <br /> II. It turns blue litmus red <br /> III. Nitrogen is very reactive <br /> IV. It reacts with magnesium to produce a solid white magnesium nitride, Mg<sub>3</sub>N<sub>2</sub>`,
        options: [
          "I, II, III, IV",
          "II and III",
          "I and IV",
          "II, III, and IV",
        ],
        ans: "C",
      },
      {
        id: 17,
        question: `Which of the following condition is/are required for Nitrogen to react with hydrogen <br /> I. high temperature <br /> II. high pressure <br /> III. finely divided iron catalyst`,
        options: ["all of the above", "II only", "II and III", "IV only"],
        ans: "A",
      },
      {
        id: 18,
        question: `Nitrogen reacts with Oxygen at high temperature and pressure to produce`,
        options: [
          "NO<sub>2</sub>",
          "NO",
          "N<sub>2</sub>O",
          "N<sub>2</sub>O<sub>5</sub>",
        ],
        ans: "B",
      },
      {
        id: 19,
        question: `The method used in separating nitrogen from oxygen in liquefied air is`,
        options: [
          "fractional crystallization",
          "crystallization",
          "fractional distillation",
          "distillation",
        ],
        ans: "C",
      },
      {
        id: 20,
        question: `Nitrogen can be obtained in the laboratory from`,
        options: [
          "a solution of sodium trioxonitrate(V) and ammonium chloride",
          "a solution of sodium dioxonitrate(III) and ammonium chloride",
          "a solution of sodium dioxonitrate(IV) and ammonium chloride",
          "conc. tetraoxosulfate(V) and sodium trioxonitrate(IV)",
        ],
        ans: "B",
      },
      {
        id: 21,
        question: `Which of the following is false about ammonia`,
        options: [
          "it is a covalent molecule",
          "it is highly soluble in water being polar",
          "it is a gas",
          "it can be dried with fused calcium chloride",
        ],
        ans: "D",
      },
      {
        id: 22,
        question: `Ammonia is prepared in the lab from`,
        options: [
          "slaked lime and ammonium fluoride",
          "caustic soda and hydrogen chloride",
          "ammonium chloride and slaked lime",
          "slaked lime and calcium chloride",
        ],
        ans: "C",
      },
      {
        id: 23,
        question: `which of the following pair is used in drying ammonia gas`,
        options: [
          "silica gel and calcium oxide",
          "calcium chloride and silica gel",
          "calcium oxide and conc. sulphuric acid",
          "conc. sulphuric acid and phosphorus",
        ],
        ans: "A",
      },
      {
        id: 24,
        question: `Which of the following is true`,
        options: [
          "ammonia gas is a colorless gas with a sweet smell",
          "fused calcium chloride forms a complex with NH<sub>3</sub>",
          "conc. sulphuric acid is suitable for drying ammonia",
          "ammonia gas turns blue litmus red",
        ],
        ans: "B",
      },
      {
        id: 25,
        question: `Ammonia is used for demonstrating the fountain experiment because`,
        options: [
          "it is insoluble in water",
          "it is partially soluble in water",
          "it is soluble in water",
          "it is highly soluble in water",
        ],
        ans: "D",
      },
      {
        id: 26,
        question: `Ammonia is usually collected by upward delivery because`,
        options: [
          "it is denser than air",
          "it is lighter than air",
          "it reacts with Oxygen in air",
          "it combines with rare gases in air",
        ],
        ans: "B",
      },
      {
        id: 27,
        question: `Which of the following is true of the physical properties of ammonia`,
        options: [
          "it is colorless with a choking smell",
          "it is lighter than air, hence, it is collected by upward delivery",
          "it is highly soluble in water",
          "it is readily liquefied; being polar, and with hydrogen bonds between the molecules",
          "all of the above",
        ],
        ans: "E",
      },
      {
        id: 28,
        question: `A solution of ammonia gas in water is called`,
        options: [
          "aqua fortis",
          "strong water",
          "aqueous ammonia",
          "ammonium solution",
        ],
        ans: "C",
      },
      {
        id: 29,
        question: `The Haber process was discovered by `,
        options: [
          "Fritz Haber",
          "Albert Einstein",
          "Antoine Lavoiser",
          "Dmitri Mendeleev",
        ],
        ans: "A",
      },
      {
        id: 30,
        question: `Which of the following reactions shows the reducing property of ammonia`,
        options: [
          `<span class="reaction">4NH<sub>3(g)</sub> + 3O<sub>2(g)</sub> -> 6H<sub>2</sub>O(l) + 2N<sub>2(g)</sub></span>`,
          `<span class="reaction">4NH<sub>3(g)</sub> + 3CuO<sub>(g)</sub> -> 3Cu<sub>s</sub>(s) + 2N<sub>2(g)</sub> + 3H<sub>2</sub>O(l)</span>`,
          `<span class="reaction">4NH<sub>3(g)</sub> + H<sub>2</sub>O(l) -> NH<sub>4</sub>OH<sub>(aq)</sub></span>`,
          `<span class="reaction">4NH<sub>3(g)</sub> + H<sub>2</sub>SO<sub>4(aq)</sub>-> (NH<sub>4</sub>)<sub>2</sub>SO<sub>4(s)</sub></span>`,
        ],
        ans: "B",
      },
      {
        id: 31,
        question: `Which of the following is not true of ammonia`,
        options: [
          "It turns moist red litmus paper blue ",
          "It is the only alkaline gas",
          "It is used in demonstrating the fountain experiment",
          "It is a powerful oxidizing agent",
        ],
        ans: "D",
      },
      {
        id: 32,
        question: `Which of the following is true of the Haber process<br />
                        I. it is used to manufacture ammonia <br />
                        II. finely divided iron is used as catalyst <br />
                        III. it occurs at 200-250atm and 450 degree celcuis <br />
                        IV. It was devised by a German chemist`,
        options: ["I", "I, II, III", "all of the above", "none of the above"],
        ans: "C",
      },
      {
        id: 33,
        question: `Which of the following when reacted with aqueous ammonia gives an insoluble gelatinous white precipate which disappears in excess`,
        options: [
          "Fe<sup>2+</sup>",
          "Fe<sup>3+</sup>",
          "Cu<sup>2+</sup>",
          "Zn<sup>2+</sup>",
        ],
        ans: "D",
      },
      {
        id: 34,
        question: `When Fe<sup>2+</sup> solution is mixed with aqueous ammonia, the overall solution becomes`,
        options: ["green", "blue", "yellow", "red"],
        ans: "A",
      },
      {
        id: 35,
        question: `When each of the nitrates of potassium, magnesium, and iron is heated`,
        options: [
          "all the nitrates decompose to the oxide",
          "the nitrate of magnesium gives the nitrite and oxygen",
          "the nitrates of magnesium and iron give the oxides",
          "the nitrate of iron gives the nitrate and oxygen",
          "the nitrate of magnesium is not decomposed",
        ],
        ans: "C",
      },
      {
        id: 36,
        question: `The brown coloration in nitric acid prepared in the laboratory can be removed by`,
        options: [
          "heating the acid",
          "bubbling air through the acid",
          "cooling the acid",
          "adding a decolorizing agent",
        ],
        ans: "B",
      },
      {
        id: 37,
        question: `What happens when the nitrates of potassium, calcium, zinc, and copper are separately heated`,
        options: [
          "all the nitrates will decompose to their respective metals",
          "the nitrates of calcium and potassium will decompose to their nitrites",
          "only copper nitrate decomposes to the metal",
          "only the nitrates of calcium, zinc, and copper decompose to their oxides",
        ],
        ans: "D",
      },
      {
        id: 38,
        question: `Which of the following methods may be used to prepare trioxonitrate (V) acid in the lab `,
        options: [
          "heating ammonia gas with sulphuric acid",
          "heating ammonium trixonitrate (V) with sulphuric acid",
          "heating sodium trioxonitrate (V) with sulphuric acid",
          "heating potassium nitrate (V) with calcium hydroxide",
          "heating a mixture of ammonia gas and oxygen",
        ],
        ans: "C",
      },
      {
        id: 39,
        question: `In the Haber process for the manufacture of ammonia, finely divided iron is used as `,
        options: [
          "a catalyst",
          "an ionizing agent",
          "a reducing agentd",
          "an oxidizing agent",
          "a dehydrating agent",
        ],
        ans: "A",
      },
      {
        id: 40,
        question: `ammonia gas is normally dried with`,
        options: [
          "anhydrous calcium chloride",
          "conc sulphuric acid",
          "quicklime",
          "magnesium sulphate",
        ],
        ans: "C",
      },
      {
        id: 41,
        question: `Hydrogen is not liberated when trioxonitrate(V) acid reacts with zinc because`,
        options: [
          "zinc is rendered passive by the acid",
          "hydrogen produced is oxidized to water",
          "oxides of nitrogen are produced",
          "all nitrates are soluble in water",
          "trioxonitrate(V) acid is a strong acid",
        ],
        ans: "B",
      },
      {
        id: 42,
        question: `Which of the following gases will rekindle a brightly glowing splint`,
        options: ["NO<sub>2</sub>", "NO", "N<sub>2</sub>O", "Cl<sub>2</sub>"],
        ans: "C",
      },
      {
        id: 43,
        question: `Which of the following oxides of nitrogen is unstable in air`,
        options: [
          "NO<sub>2</sub>",
          "NO",
          "N<sub>2</sub>O<sub>4</sub>",
          "Cl<sub>2</sub>",
        ],
        ans: "B",
      },
      {
        id: 44,
        question: `The gas that gives brown coloration in brown ring test is`,
        options: [
          "NO<sub>2</sub>",
          "NO",
          "N<sub>2</sub>O<sub>4</sub>",
          "Cl<sub>2</sub>",
        ],
        ans: "A",
      },
      {
        id: 45,
        question: `A dense white fume is formed when ammonia gas reacts with`,
        options: ["H<sub>2</sub>", "O<sub>2</sub>", "Cl<sub>2</sub>", "HCl"],
        ans: "D",
      },
      {
        id: 46,
        question: `Which of the folllowing are produced when ammonium trioxonitrate(V) crystals are cautiously heated in a hard glass`,
        options: [
          "N<sub>2</sub>O and steam",
          "NO<sub>2</sub> and ammonia",
          "N<sub>2</sub>O<sub>4</sub> and NO<sub>2</sub>",
          "NO and NO<sub>2</sub>",
        ],
        ans: "A",
      },
      {
        id: 47,
        question: `Which of the following gases has a characteristics pungent smell, turns red litmus paper blue and forms dense white fumes with hydrogen chloride gas?`,
        options: [
          "N<sub>2</sub>",
          "NO<sub>2</sub>",
          "N<sub>2</sub>O<sub>4</sub>",
          "NH<sub>3</sub>",
        ],
        ans: "D",
      },
      {
        id: 48,
        question: `Which of the following gases is employed as an anaesthesia`,
        options: [
          "N<sub>2</sub>O",
          "NO<sub>2</sub>",
          "N<sub>2</sub>O<sub>4</sub>",
          "NH<sub>3</sub>",
        ],
        ans: "A",
      },
      {
        id: 49,
        question: `Magnesium ribbon was allowed to burn inside a given gas P leaving a white solid residue Q. Addition of water to Q liberated a gas which produced dense white fumes with a drop of hydrochloric acid. The gas was`,
        options: ["nitrogen", "chlorine", "oxygen", "sulphur(iv) oxide"],
        ans: "A",
      },
      {
        id: 50,
        question: `The color of fountain water is `,
        options: ["blue", "orange", "red", "yellow"],
        ans: "C",
      },
      {
        id: 51,
        question: `The following reactions illustrate the chemical properties of ${formula(
          "HNO",
          3
        )} except`,
        options: [
          `${formula("KOH", "aq")} + ${formula("HNO", 3, "aq")} -> ${formula(
            "KNO",
            3,
            "aq"
          )} + ${formula("H", 2, "O", "l")}`,
          `${formula("C", "s")} + 4${formula("HNO", 3, "aq")} -> ${formula(
            "H",
            2,
            "CO",
            3,
            "aq"
          )} + ${formula("H", 2, "O", "l")} + ${formula("NO", 2)}`,
          `3${formula("Cu", "s")} + 8${formula("HNO", 3, "aq")} -> 3${formula(
            "Cu",
            `(${formula("NO", 3)})`,
            2,
            "aq"
          )} + 2${formula("NO", 2, "g")} + 4${formula("H", 2, "O")}`,
          `${formula("Na", 2, "SO", 4, "aq")} + 2${formula(
            "HNO",
            3,
            "aq"
          )} -> 2${formula("NaNO", 3, "s")} + ${formula("H", 2, "SO", 4, "s")}`,
        ],
        ans: "D",
      },
      {
        id: 52,
        question: `Which of the following compound of nitrogen is normally in liquid form`,
        options: [
          `${formula("NO", 2)}`,
          `${formula("HNO", 3)}`,
          `${formula("NaNO", 3)}`,
          `${formula("N", 2, "O")}`,
        ],
        ans: "B",
      },
      {
        id: 53,
        question: `Another name for ${formula("HNO", 3)} is`,
        options: [
          "aqua fortis",
          "caustic soda",
          "inslet of langerhans",
          "quicklime",
        ],
        ans: "A",
      },
      {
        id: 54,
        question: `The following are uses of ${formula("HNO", 3)} except`,
        options: [
          "in the manufacture of drugs and explosives",
          "as a nitrating agent",
          "used in the manufacture of fertilizers",
          "used in the production of cement",
        ],
        ans: "D",
      },
      {
        id: 55,
        question: `Which of the following reaction is incorrect`,
        options: [
          `${formula("NH", 4, "Cl")} -> ${formula("NH", 3)} + ${formula(
            "HCl"
          )}`,
          `${formula(`(${formula("NH", 4)})`, 2, "CO", 3)} -> ${formula(
            "NH",
            3
          )} + ${formula("HCl")}`,
          `${formula("NH", 4, "NO", 3)} -> ${formula("N", 2, "O")} + ${formula(
            "H",
            2,
            "O"
          )}`,
          `${formula(`(${formula("NH", 4)})`, 2, "SO", 4)} -> 2${formula(
            "NH",
            3
          )} + ${formula("H", 2, "SO", 4)}`,
          `${formula("NH", 4, "NO", 2)} -> ${formula("N", 2, "O")} + ${formula(
            "H",
            2,
            "O"
          )}`,
        ],
        ans: "E",
      },
      {
        id: 56,
        question: `Nitrogen can be best obtained from a mixture of oxygen and nitrogen by passing the mixture over`,
        options: [
          `potassium hydroxide`,
          `heated gold`,
          `heated phosphorus`,
          `heated magnesium`,
          `calcium chloride`,
        ],
        ans: "C",
      },
    ],
  },
  {
    topic: "Carbon",
    questions: [
      {
        id: 1,
        question: "The driest and the hardest form of coal is",
        options: ["peat", "lignite", "bituminous", "anthracite"],
        ans: "D",
      },
      {
        id: 2,
        question:
          "The process whereby a solid matter is heated in absence of air is called",
        options: [
          "destructive distillation",
          "constructive distillation",
          "destructive crystallization",
          "constructive crystallization",
        ],
        ans: "A",
      },
      {
        id: 3,
        question:
          "Which of the following is produced by the destructive distillation of wood<br>I. Wood charcoal<br>II. Wood gas<br>III. Wood tar<br>IV. Pyroligneous acid",
        options: [
          "I and IV",
          "II and III",
          "I, II, and III",
          "all of the above",
        ],
        ans: "D",
      },
      {
        id: 4,
        question: "The solid residue of the distillation of coal is",
        options: ["coal gas", "ammoniacal liquor", "coal tar", "coke"],
        ans: "D",
      },
      {
        id: 6,
        question: `Coal gas is made up of carbon(II) oxide, hydrogen and`,
        options: [`nitrogen`, `air`, `argon`, `methane`],
        ans: "D",
      },
      {
        id: 7,
        question: `The process employed in the production of anhydrous sodium trioxocarbonate(IV) is`,
        options: [
          `harber process`,
          `solvay process`,
          `electrolytic process`,
          `down process`,
        ],
        ans: "B",
      },
      {
        id: 8,
        question: `Which allotrope of carbon is a constituent of lead pencil`,
        options: [`graphite`, `diamond`, `lampblack`, `wood`],
        ans: "A",
      },
      {
        id: 9,
        question: `Which of the statements is TRUE about carbon(IV) oxide`,
        options: [
          `it supports combustion`,
          `it is a strong acid in water`,
          `it is very soluble in water`,
          `it supports the burning of magnesium to produce magnesium oxide`,
        ],
        ans: "D",
      },
      {
        id: 10,
        question: `Diamond cannot be used`,
        options: [
          `in making bicycle chains`,
          `as abrasives`,
          `in cutting glass and metals`,
          `as dies for drawing wires`,
        ],
        ans: "A",
      },
      {
        id: 11,
        question: `Carbon(II) oxide is considered dangerous if inhaled mainly because it`,
        options: [
          `competes with oxygen in the blood`,
          `competes with carbon(IV) oxide in the blood`,
          `can cause lung cancer`,
          `can cause injury to the nervous system`,
        ],
        ans: "A",
      },
      {
        id: 12,
        question: `Diamond is used in making jewelry due to its`,
        options: [
          `high refractive index`,
          `transparency`,
          `hardness`,
          `high melting point`,
        ],
        ans: "A",
      },
      {
        id: 13,
        question: `Which of the following does not contain carbon?`,
        options: [`marble`, `eggshell`, `air`, `quicklime`, `chalk`],
        ans: "D",
      },
      {
        id: 14,
        question: `The phenomenon where an element exist in more than one form in the same physical state is called?`,
        options: [`allotropy`, `isotopy`, `enantiomerism`, `isomerism`],
        ans: "A",
      },
      {
        id: 15,
        question: `The ability of carbon atoms to join to one another by covalent bond in a continuous fashion is called?`,
        options: [`cretinism`, `catenation`, `flocculation`, `coagulation`],
        ans: "B",
      },
      {
        id: 16,
        question: `Which of the following is not an allotrope of carbon`,
        options: [`diamond`, `graphite`, `fullerene`, `rhombic`],
        ans: "D",
      },
      {
        id: 17,
        question: `The least common form of carbon is`,
        options: [`diamond`, `graphite`, `fullerene`],
        ans: "C",
      },
      {
        id: 18,
        question: `Carbon exists in the pure form as`,
        options: [
          `Diamond and graphite`,
          `Diamond and Coke`,
          `Coke and Charcoal`,
          `Charcoal and Graphite`,
        ],
        ans: "A",
      },
      {
        id: 19,
        question:
          "Carbon is a nonmetal found in what group of the periodic table?",
        options: ["I", "II", "IV", "VI", "V"],
        ans: "C",
      },
      {
        id: 20,
        question:
          "When carbon dioxide is bubbled into limewater a white precipitate is formed. If the passage of the gas is continued the precipitate disappears. The reason for this is?",
        options: [
          "Calcium carbonate is formed which gradually dissolves",
          "Calcium hydrogen carbonate is precipitated and then dissolves",
          "Calcium carbonate is formed which on reaction with further carbon dioxide forms soluble calcium hydrogen carbonate",
          "Concentration of the solution has occured with the deposition of calcium hydroxide",
          "The solution has become saturated and solid carbon dioxide has been deposited",
        ],
        ans: "C",
      },
      {
        id: 21,
        question: `When ammonium, potassium, and calcium carbonates are separately heated`,
        options: [
          `none of them will decompose`,
          `each of them will decompose to give carbon dioxide and the respective oxide`,
          `ammonium carbonate and potassium carbonate will not decompose`,
          `only ammonium carbonate and calcium carbonate will decompose to give carbon dioxide and the respective oxide`,
          `ammonium carbonate will decompose to give carbon dioxide, water, and ammonia`,
        ],
        ans: "E",
        remark: `Check understanding chemistry pg 275 for more information`,
      },
      {
        id: 22,
        question: `When a bottle of coca-cola is opened, bubbles of gas evolve. The gas is?`,
        options: [
          `hydrogen`,
          `carbon monoxide`,
          `carbon dioxide`,
          `sulfur dioxide`,
          `chlorine`,
        ],
        ans: "C",
      },
      {
        id: 23,
        question: `Liquid X reacts with sodium trioxocarbonate (IV), ${formula(
          "Na",
          2,
          "CO",
          3
        )} to give a gas which turns calcium chloride solution milky. X is?`,
        options: [
          `${formula("Na", 2, "SO", 4)}`,
          `${formula("KI")}`,
          `an alkali`,
          `an acid`,
          `a hydrocarbon`,
        ],
        ans: "D",
      },
      {
        id: 24,
        question: `Lime water, which is used in the laboratory for the detection of carbon(IV) oxide is an aqueous  solution of`,
        options: [
          `${formula("Ca(OH)", 2)}`,
          `${formula("Ca", "CO", 3)}`,
          `${formula("CaHCO", 3)}`,
          `${formula("CaSO", 4)}`,
          `${formula("Na", 2, "SO", 4)}`,
        ],
        ans: "A",
      },
      {
        id: 25,
        question: `Which of the following is not true of carbon monoxide`,
        options: [
          `CO is poisonous`,
          `CO is readily oxidized at room temperature by air to form ${formula(
            "CO",
            2
          )}`,
          `CO may be prepared by reducing ${formula(
            "CO",
            2
          )} mixed with coke heated to about 1000 degree celcius`,
          `CO may be prepared by heating charcoal with a limited amount of ${formula(
            "O",
            2
          )}`,
          `CO is a good reducing agent`,
        ],
        ans: "B",
        remark: `Though CO may be oxidized to form ${formula(
          "CO",
          2
        )} this does not occur readily at room temperature. CO burns in air with a blue flame, forming carbon(IV) oxide.`,
      },
      {
        id: 26,
        question: `A piece of sea shell, when dropped into a dilute solution of hydrochloric acid, produces a colorless, odorless gas, which turns clear limewater milky. The shell contains`,
        options: [
          `sodium chloride`,
          `ammonium nitrate`,
          `calcium carbonate`, // CaCO3
          `calcium chloride`,
          `magnesium chloride`,
        ],
        ans: "C",
      },
      {
        id: 27,
        question: `Which of the following conducts electricity`,
        options: [
          `Sulphur`,
          `Graphite`,
          `Diamond`,
          `Red phosphorus`,
          `Yellow phosphorus`,
        ],
        ans: "B",
      },
      {
        id: 28,
        question: `Which of the following is used in fire extinguishers?`,
        options: [
          `Carbon(II) oxide`,
          `Carbon(IV) oxide`, // normally, CO2 is used in fire extinguishers
          `Sulfur(IV) oxide`,
          `Ammonia`,
        ],
        ans: "B",
      },
      {
        id: 29,
        question: `Carbon(II) oxide may be collected over water because it`,
        options: [
          `is heavier than air`,
          `is less dense than air`,
          `is insoluble in water`,
          `burns in oxygen to form carbon(IV) oxide`,
        ],
        ans: "C",
      },
      {
        id: 30,
        question: `What process would coal undergo to give coal gas, coal tar, ammonical liquor, and coke`,
        options: [
          `steam distillation`,
          `destructive distillation`,
          `liquefaction`,
          `hydrolysis`,
        ],
        ans: "B",
        remark: "check page 278 of understanding chm.",
      },
      {
        id: 31,
        question: `Coal gas is a mixture of`,
        options: [
          `hydrogen, methane, and CO`,
          `ethane, ammonia, and Carbon(IV) oxide`,
          `hydrogen and CO`,
          `hydrogen sulfide and aqueos ammonia`,
        ],
        ans: "A",
        remark: "Check page 278 of understanding chemistry",
      },
      {
        id: 32,
        question: `The main gaseous product of the destructive distillation of coal is`,
        options: [`coal tar`, `coal gas`, `ammoniacal liquor`, `coke`],
        ans: "B",
        remark: "check pg 278 of understanding chm",
      },
      {
        id: 33,
        question: `Some product of destructive distillation of coal are`,
        options: [
          `carbon(IV) oxide and ethanoic acid`,
          `trioxocarbonate(IV) acid and methanoic acid`,
          `producer gas and water gas`,
          `coke and ammoniacal liquor`,
        ],
        ans: "D",
      },
      {
        id: 34,
        question: `Coal fire should not be used in poorly ventilated room because`,
        options: [
          `of the accumulation of ${formula("CO", 2)} which cause deep sleep`,
          `it is usually too hot`,
          `of the accumulation CO of which causes suffocation`,
          `it removes most of the gases in the room`,
        ],
        ans: "C",
      },
      {
        id: 35,
        question: `Which of the following salts can be melted without decomposition?`,
        options: [
          `${formula("Na", 2, "CO", 3)}`,
          `${formula("CaCO", 3)}`,
          `${formula("MgCO", 3)}`,
          `${formula("ZnCO", 3)}`,
        ],
        ans: "A",
      },
      {
        id: 36,
        question: `_____ is to diamond and _____ is to graphite`,
        options: [
          `network octahedral structure and flat hexagonal structure`,
          `flat hexagonal structure and network octahedral structure`,
          `round octahedral structure and flux hexagonal structure`,
          `flux hexagonal structure and round octahedral structure`,
        ],
        ans: "A",
      },
      {
        id: 37,
        question: `Graphite conducts electricity because`,
        options: [
          `it has mobile electrons in its atoms`,
          `it is soft and slippery`,
          `it is insoluble`,
          `it is hard`,
        ],
        ans: "A",
      },
      {
        id: 38,
        question: `Synthetic gas is a mixture of`,
        options: [
          `${formula("CH", 4)} and ${formula("H", 2, "O")}`,
          `${formula("CO")} and ${formula("H", 2)}`,
          `${formula("CO", 2)} and ${formula("H", 2)}`,
          `${formula("CH", 4)} and ${formula("H", 2)}`,
        ],
        ans: "B",
      },
      {
        id: 39,
        question: `A form of carbon used for absorbing poisonous gases and purification of noble gases is`,
        options: [
          `carbon fibres`,
          `animal charcoal`,
          `wood charcoal`,
          `carbon black`,
        ],
        ans: "C",
      },
      {
        id: 40,
        question: `The refreshing and characteristics taste of soda water and other soft drinks is a result of the presence in them of`,
        options: [`soda`, `carbon(II) oxide`, `carbon(IV) oxide`, `glucose`],
        ans: "C",
      },
      {
        id: 41,
        question: `The allotrope of carbon used in the decolorization of sugar is`,
        options: [`graphite`, `soot`, `charcoal`, `lampblack`],
        ans: "C",
      },
      {
        id: 42,
        question: `When steam is passed over red-hot carbon, the substances produced are`,
        options: [
          `hydrogen and trioxocarbonate(IV) acid`,
          `hydrogen, oxygen and carbon(IV) oxide`,
          `hydrogen and carbon(II) oxide`,
          `hydrogen and carbon(IV) oxide`,
        ],
        ans: "C",
      },
      {
        id: 43,
        question: `To obtain pure carbon(II) oxide from its mixture with carbon(IV) oxide, the mixture should be`,
        options: [
          `bubbled through concentrated tetraoxosulfate(VI) acid`,
          `bubbled through sodium hydroxide`,
          `passed over heated copper(II) oxide`,
          `bubbled through water`,
        ],
        ans: "B",
      },
      {
        id: 44,
        question: `A solution which on treatment with HCl acid produces a colorless, odorless gas which turns lime water milky is most likely to be a`,
        options: [`chloride`, `hydroxide`, `nitrate`, `carbonate`],
        ans: "D",
      },
      {
        id: 45,
        question: `The gasification of coke is used for the manufacture of`,
        options: [
          `producer gas`,
          `natural gas`,
          `industrial gas`,
          `synthetic gas`,
        ],
        ans: "D",
      },
      {
        id: 46,
        question: `Carbon exist naturally in the combined state as`,
        options: [`diamond`, `coal`, `wood`, `graphite`],
        ans: "B",
      },
    ],
  },
  {
    topic: "Atomic structure",
    questions: [
      {
        id: 1,
        question:
          "The periodic classification of the element is an arrangement of the elements in order of their",
        options: [
          "atomic weight",
          "isotopic weights",
          "molecular weights",
          "atomic numbers",
          "atom masses",
        ],
        ans: "D",
      },
      {
        id: 2,
        question: "The nucleus of an atom contains",
        options: [
          "protons only",
          "neutrons only",
          "protons and electrons",
          "neutrons and electrons",
          "protons and neutrons",
        ],
        ans: "E",
      },
      {
        id: 3,
        question:
          "Given the mean atomic mass of chlorine prepared in the laboratory to be 35.5 and isotopes of mass numbers 35 and 37, what is the percentage composition of the isotope of mass number 35",
        options: ["20", "25", "50", "75", "90"],
        ans: "D",
      },
      {
        id: 4,
        question:
          "An element X has 127 neutrons and 82 electrons.Its atomic number is",
        options: ["209", "105", "45", "82", "127"],
        ans: "D",
      },
      {
        id: 5,
        question:
          "Which of the following is the electronic configuration of sodium",
        options: [
          eConfig("1s", 2, "2s", 2, "2p", 6, "3s", 2),
          eConfig("1s", 2, "2s", 2, "2p", 6, "3s", 2, "3p", 1),
          eConfig("1s", 2, "2s", 2, "2p", 6, "3s", 1),
          eConfig("1s", 2, "2s", 2, "2p", 6, "3s", 0),
          eConfig("1s", 2, "2s", 2, "2p", 6, "3s", 2, "3p", 6, "4s", 1),
        ],
        ans: "C",
      },
      {
        id: 6,
        question: "The mass number of an atom is",
        options: [
          "the number of electrons in the nucleus of the atom",
          "the number of protons in the nucleus of the atom",
          "the number of neutrons in the nucleus of the atom",
          "the sum of number of electrons and protons in the nucleus of the atom",
          "the sum of numbers of protons and neutrons in the nucleus of the atom",
        ],
        ans: "E",
      },
      {
        id: 7,
        question: `An element has two isotopes ${isotope(
          20,
          10,
          "X"
        )} and ${isotope(
          22,
          10,
          "X"
        )} present in the ration 1:3, the relative atomic mass`,
        options: ["20.5", "21.0", "21.5", "22.5", "22.0"],
        ans: "C",
      },
      {
        id: 8,
        question: `If an element has the electronic configuration ${eConfig(
          "1s",
          2,
          "2s",
          2,
          "2p",
          6,
          "3s",
          2,
          "3p",
          4
        )} it is`,
        options: [
          "a metal",
          "an alkaline earth metal",
          "an s-block",
          "a p-block element",
          "a transition element",
        ],
        ans: "D",
      },
      {
        id: 9,
        question: `The mass of an atom is determined by`,
        options: [
          "its ionization potential",
          "its electrochemical potential",
          "the number of protons and electrons",
          "the number of neutrons and protons",
          "the number of neutrons and electrons",
        ],
        ans: "D",
      },
      {
        id: 10,
        question: `An isotope has an atomic number of 17 and a mass number of 36. Which of the following gives the correct number of neutrons and protons in an atom of the isotope`,
        options: [
          "53 neutrons and 17 protons",
          "17 neutrons and 36 protons",
          "19 neutrons and 17 protons",
          "36 neutrons and 17 protons",
        ],
        ans: "C",
      },
      {
        id: 11,
        question: `An element Z, contained 90% of ${isotope(
          16,
          8,
          "Z"
        )} and 10% of ${isotope(18, 8, "Z")}. Its relative atomic mass is`,
        options: ["16.0", "16.2", "17.0", "17.8"],
        ans: "B",
      },
      {
        id: 12,
        question: `The atomic number of caesium is 55 and its atomic mass is 133. The nucleus of caesium atom therefore contains`,
        options: [
          "78 neutrons and 55 electrons",
          "55 protons and 78 neutrons",
          "55 protons and 78 electrons",
          "78 protons and 55 neutrons",
        ],
        ans: "B",
      },
      {
        id: 13,
        question: `Four elements P,Q,R, and S have atomic numbers of 4, 10, 12, and 14 respectively. Which of these elements is a noble gas`,
        options: ["P", "Q", "R", "S"],
        ans: "B",
      },
      {
        id: 14,
        question: `How many valence electrons are contained in the element represented by ${isotope(
          31,
          15,
          "P"
        )}`,
        options: ["3", "5", "15", "4"],
        ans: "B",
      },
      {
        id: 15,
        question: `The electronic configuration of an element is ${eConfig(
          "1s",
          2,
          "2s",
          2,
          "2p",
          6,
          "3s",
          2,
          "3p",
          3
        )}. How many unpaired electrons are there in the element`,
        options: ["3", "5", "2", "4"],
        ans: "A",
      },
      {
        id: 16,
        question: `Two atoms represented as ${isotope(
          235,
          92,
          "U"
        )} and ${isotope(238, 92, "U")} are`,
        options: ["isomers", "allotropes", "isotopes", "anomers"],
        ans: "C",
      },
      {
        id: 17,
        question: `The number of electrons in the valence shell of an element of atomic number 14 is`,
        options: ["1", "2", "3", "4"],
        ans: "D",
      },
      {
        id: 18,
        question: `Which of the following is <strong>False</strong> about the isotopes of the same element`,
        options: [
          "they have the same number of electrons in their outermost shells",
          "they have different atomic masses",
          "they have the same atomic number and same number of electrons",
          "they have the same atomic number and different number of electrons",
        ],
        ans: "D",
      },
      {
        id: 19,
        question: `Oxygen is a mixture of two isotopes ${isotope(
          16,
          8,
          "O"
        )} and ${isotope(
          18,
          8,
          "O"
        )} with relative abundance of 90% and 10% respectively. The relative atomic mass of oxygen is`,
        options: ["16.2", "16.0", "17", "18.0"],
        ans: "A",
      },
      {
        id: 20,
        question: `${eConfig(
          "1s",
          2,
          "2s",
          2,
          "2p",
          6,
          "3s",
          2,
          "3p",
          6,
          "4s",
          2,
          "3d",
          7
        )}. An element with this electronic configuration is`,
        options: [
          "non-metal",
          "metal",
          "transition element",
          "group two element",
        ],
        ans: "C",
      },
      {
        id: 21,
        question: `Four elements W,X,Y, and Z have atomic numbers 2, 6, 16, and 20 respectively. Which of these elements is a metal?`,
        options: ["X", "W", "Z", "Y"],
        ans: "C",
      },
      {
        id: 22,
        question: `Which of the following statement is true of a proton?`,
        options: [
          "the total mass of the protons in a particular nuclues is always half the nuclear mass",
          "the mass of proton is 1840 times the mass of an electron",
          "the mass of a proton is 1.008g",
          "the mass of a proton is one-twelfth the molar mass of carbon",
        ],
        ans: "B",
      },
      {
        id: 23,
        question: `The shape of the s-orbital is`,
        options: ["spherical", "elliptical", "spiral", "circular"],
        ans: "A",
      },
      {
        id: 24,
        question: `Chlorine consisting of two isotopes of mass numbers 35 and 37 in the ratio 3:1 has an atomic mass of 35.5. Calculate the relative abundance of the isotope of mass number 37`,
        options: ["20", "25", "60", "75"],
        ans: "B",
      },
      {
        id: 25,
        question: `The component of an atom that contributes least to its mass is the`,
        options: ["nucleus", "neutron", "electron", "proton"],
        ans: "C",
      },
      {
        id: 26,
        question: `The element with the electronic configuration ${eConfig(
          "1s",
          2,
          "2s",
          2,
          "2p",
          3
        )}`,
        options: ["oxygen", "chlorine", "nitrogen", "calcium"],
        ans: "C",
      },
      {
        id: 26,
        question: `How many electrons are in the L shell of ${isotope(
          31,
          15,
          "P"
        )}`,
        options: ["2", "5", "8", "18"],
        ans: "C",
      },
      {
        id: 27,
        question: `If the electronic configuration of an element ${eConfig(
          "1s",
          2,
          "2s",
          2,
          "2p",
          5
        )}, how many upaired electrons are there`,
        options: ["1", "2", "4", "5"],
        ans: "A",
      },
      {
        id: 28,
        question: `The elements that belong to the third period of the periodic table are`,
        options: [
          "N and O",
          "Na, Mg, S, and Ar",
          "Li, Be, Al, and P",
          "Na, P, O, and Cl",
        ],
        ans: "B",
      },
      {
        id: 29,
        question: `The atom of an element X is represented as ${isotope(
          "y",
          "z",
          "X"
        )}. The basic chemical properties of X depends on the value of`,
        options: ["Y", "Z", "Y-Z", "Z-Y"],
        ans: "B",
      },
      {
        id: 30,
        question: `If the relative molecular mass of an element is not a whole number, it can be deduced that the element is `,
        options: [
          "naturally radioactive",
          "abundant in nature",
          "a transition metal",
          "an isotopic mixture",
        ],
        ans: "D",
      },
      {
        id: 31,
        question: `Which quantum number divides shell into orbitals`,
        options: ["principal", "azimuthal", "magnetic", "spin"],
        ans: "B",
      },
      {
        id: 32,
        question: `How many unpaired electrons are there in the nitrogen sub-levels?`,
        options: ["2", "1", "0", "3"],
        ans: "D",
      },
      {
        id: 33,
        question: `Elements in the same period in the periodic table have the same`,
        options: [
          "atomic number",
          "chemical properties",
          "physical properties",
          "no. of shells",
        ],
        ans: "D",
      },
      {
        id: 34,
        question: `An isotope has an atomic number of 15 and mass number of 31. The nunmber of protons it contains is`,
        options: ["15", "46", "31", "16"],
        ans: "A",
      },
      {
        id: 35,
        question: `How many unpaired electrons are in the p-orbitals of a fluorine atom?`,
        options: ["2", "3", "0", "1"],
        ans: "D",
      },
      {
        id: 36,
        question: `An element X has electronic configuration ${eConfig(
          "1s",
          2,
          "2s",
          2,
          "2p",
          6,
          "3s",
          2,
          "3p",
          5
        )}. Which of the following statement is correct about the element`,
        options: [
          "it has 5 electrons in outer shell",
          "it belongs to group II of the periodic table",
          "it is a halogen",
          "it has a completely filled p-orbital",
        ],
        ans: "C",
      },
      {
        id: 37,
        question: `How many protons, neutrons, and electrons respectively are present in the element ${isotope(
          60,
          27,
          "Co"
        )}?`,
        options: [
          "33, 27, and 27",
          "27, 33, and 27",
          "60, 33, and 60",
          "27, 33, and 33",
        ],
        ans: "B",
      },
      {
        id: 38,
        question: `silicon-containing ore has 92% ${isotope(
          28,
          "",
          "Si"
        )}, 5% ${isotope(29, "", "Si")}, 3% ${isotope(
          30,
          "",
          "Si"
        )}. Calculate the relative atomic mass of the silicon.`,
        options: ["29.00", "11", "28.11", "14.00"],
        ans: "C",
      },
      {
        id: 39,
        question: `The relative atomic mass of a naturally occuring lithium consisting of 90% ${isotope(
          7.3,
          "",
          "Li"
        )} and 10% ${isotope(6.3, "", "Li")} is`,
        options: ["6.2", "6.8", "7.2", "6.9"],
        ans: "C",
      },
      {
        id: 40,
        question: `The number of the electronic shells contained in an atom with electronic configuration ${eConfig(
          "1s",
          2,
          "2s",
          2,
          "2p",
          6,
          "3s",
          2,
          "3p",
          6,
          "4s",
          2
        )}`,
        options: ["3", "2", "4", "5"],
        ans: "C",
      },
      {
        id: 41,
        question: `An isotope has an atomic number of 15 and mass number of 31. The number of protons it contains is`,
        options: ["16", "15", "31", "46"],
        ans: "B",
      },
      {
        id: 42,
        question: `The atoms of four elements are represented as ${isotope(
          "",
          20,
          "Q"
        )}, ${isotope("", 16, "R")}, ${isotope("", 10, "S")}, ${isotope(
          "",
          8,
          "T"
        )}. Which of the elements would be unreactive?`,
        options: ["Q", "R", "S", "T"],
        ans: "C",
      },
      {
        id: 43,
        question: `In the periodic table an element with atomic number 15 belongs to`,
        options: [
          "group IIA and period 5",
          "group IIIA and period 2",
          "group VA and period 2",
          "group VA and period 3",
        ],
        ans: "D",
      },
      {
        id: 44,
        question: `How many unpaired electrons are in the p-orbital of a fluorine atom?`,
        options: ["2", "3", "0", "1"],
        ans: "D",
      },
      {
        id: 45,
        question: `The size (diameters) of five atoms are in order R < T < W < Y, Y being largest if each has an electron situated on its circumference, and neglecting other factors, which of the atoms will lose its electrons most reluctantly`,
        options: ["R", "T", "W", "Y"],
        ans: "A",
      },
      {
        id: 46,
        question: `Indicate which of the following statement is not true as we move from left to right along the periodic table`,
        options: [
          "atomic number of elements increase",
          "atomic mass of elements increases",
          "electropositive character of elements increases",
          "number of electrons in the outermost orbits of elements increases",
        ],
        ans: "C",
      },
      {
        id: 47,
        question: `Sodium and Potassium belong to the same group of the periodic table. This is because`,
        options: [
          "both are metals",
          "both are soft and lighter than water",
          "both form cations by losing electrons",
          "both have identical electronic configuration",
        ],
        ans: "D",
      },
      {
        id: 48,
        question: `Which of the following physical properties decreases across the periodic table`,
        options: [
          "ionization potential",
          "electron affinity",
          "electronegativity",
          "atomic radius",
        ],
        ans: "D",
      },
      {
        id: 49,
        question: `The energy change accompanying the addition of an electron to a gaseous atom is called`,
        options: [
          "first ionization energy",
          "second ionization energy",
          "electron affinity",
          "electronegativity",
        ],
        ans: "C",
      },
      {
        id: 50,
        question: `Which of the following terms indicates the number of bonds that can be formed by atom?`,
        options: [
          "oxidation number",
          "valence",
          "atomic number",
          "electronegativity",
        ],
        ans: "A",
      },
      {
        id: 51,
        question: `Which of the following is arranged in order of increasing electronegativity?`,
        options: [
          "chlorine, aluminium, magnesium, phosphorus, sodium",
          "sodium, magnesium, aluminium, phosphorus, chlorine",
          "chlorine, phosphorus, aluminium, magnesium, sodium",
          "sodium, chlorine, phosphorus, magnesium, aluminium",
        ],
        ans: "B",
      },
      {
        id: 52,
        question: `Which of the following physical properties decreases down a group in the periodic table`,
        options: [
          "atomic radius",
          "ionic radius",
          "electropositivity",
          "electronegativity",
        ],
        ans: "D",
      },
      {
        id: 53,
        question: `The electron configuratoins of 2 elements with similar chemical properties are represented by`,
        options: [
          `${eConfig("1s", 2, "2s", 2)} and ${eConfig(
            "1s",
            2,
            "2s",
            2,
            "2p",
            4
          )}`,
          `${eConfig("1s", 2, "2s", 2, "2p", 4)} and ${eConfig(
            "1s",
            2,
            "2s",
            2,
            "2p",
            6,
            "3s",
            1
          )}`,
          `${eConfig("1s", 2, "2s", 2, "2p", 6, "3s", 1)} and ${eConfig(
            "1s",
            2,
            "2s",
            1
          )}`,
          `${eConfig("1s", 2, "2s", 2, "2p", 4)} and ${eConfig(
            "1s",
            2,
            "2s",
            1
          )}`,
        ],
        ans: "C",
      },
      {
        id: 54,
        question: `In the periodic table, what is the property that decreases along the period and increase down the group`,
        options: [
          `atomic number`,
          `electron affinity`,
          `ionization potential`,
          `atomic radius`,
        ],
        ans: "D",
      },
      {
        id: 55,
        question: `Which of the following electron configurations indicates an atom with the highest ionization energy`,
        options: [`2,8,7`, `2,8,8,1`, `2,8,8,2`, `2,8,8,7`],
        ans: "A",
      },
      {
        id: 56,
        question: `In order to remove one electron from 3s-orbital of gaseous sodium atom, about 496KJmol<sup>-1</sup> of energy is required. The energy is referred to as`,
        options: [
          "electron affinity",
          `ionization energy`,
          `activation energy`,
          `electronegativity`,
        ],
        ans: "B",
      },
      {
        id: 57,
        question: `The distance between the nuclei of chlorine atoms in a chlorine molecule is 0.194nm. The atomic radius of chlorine atom is`,
        options: ["0.097nm", `0.914nm`, `2.388nm`, `4.203nm`],
        ans: "A",
      },
      {
        id: 58,
        question: `A decrease in atomic size and an increase in nuclear charge across a period lead to`,
        options: [
          "a decrease in covalency in bond formation",
          `an increase in chemical reactivity`,
          `an increase in tendency to lose electron`,
          `a decrease in electropositivity`,
        ],
        ans: "D",
      },
      {
        id: 59,
        question: `In the periodic table, electrical and thermal conductivities and properties of elements that`,
        options: [
          "decrease across the period and increase down the group",
          `increase across the period and decrease down the group`,
          `decrease across the period and down the group`,
          `increase across the period and down the group`,
        ],
        ans: "A",
      },
      {
        id: 60,
        question: `Moving left to right across a period, the general rise in the first ionization energy can be attributed to the`,
        options: [
          "increase in nuclear charge",
          `decrease in screening effect`,
          `increase in screening effect`,
          `decrease in nuclear charge`,
        ],
        ans: "C",
      },
      {
        id: 61,
        question: `Beryllium and Aluminium have similar properties because they`,
        options: [
          "belong to the same group",
          `belong to the same period`,
          `are positioned diagonally to each other`,
          `are both metals`,
        ],
        ans: "C",
      },
      {
        id: 62,
        question: `Which of the following statements is correct about the periodic table?`,
        options: [
          "elements in the same group have the same number of electrons shells",
          `the non-metallic properties of the elements tend to decrease across each period`,
          "elements in the same period have the same number of valence electrons",
          `the valence electrons of the elements increase progressively across the period`,
        ],
        ans: "D",
      },
      {
        id: 63,
        question: `The most electropositive element among the following is?`,
        options: ["Na", `K`, "Br", `Ca`],
        ans: "B",
      },
      {
        id: 64,
        question: `Which of the following has a positive charge`,
        options: ["proton", `neutron`, "anion", `electron`, "atom"],
        ans: "A",
      },
      {
        id: 66,
        question: `The neutral atoms of all of the isotopes of the same element have`,
        options: [
          "different numbers of protons",
          `equal numbers of neutrons`,
          "the same number of electrons",
          `the same mass numbers`,
          "the same masses",
        ],

        ans: "C",
      },
      {
        id: 67,
        question: `What is the atomic weight of a hypothetical element consisting of two isotopes, one with mass number = 64.23 (26.0%), and one with mass number = 65.32`,
        options: ["65.3", `64.4`, "64.9", `65.0`, "64.8"],

        ans: "D",
      },
      {
        id: 68,
        question: `Naturally occuring rubidium consists of just two isotopes. One of the isotopes consists of atoms having a mass of 84.912; the other of 86.901. What is the percent natural abundance of the heavier isotope if the atomic mass of rubidium is 85.47?`,
        options: ["15%", `28%`, "37%", `72%`, `85%`],

        ans: "B",
      },
      {
        id: 68,
        question: `Which atomic orbital is spherical in shape?`,
        options: ["2s", `3p`, "3d", `4f`],

        ans: "A",
      },
      {
        id: 69,
        question: `The maximum number of electrons that can be accomodated in a sublevel for which l = 3 is?`,
        options: ["2", `10`, "6", `14`, `8`],

        ans: "D",
      },
      {
        id: 70,
        question: `The ground state electron configuration for arsenic, ${isotope(
          "",
          33,
          "As"
        )} is`,
        options: [
          `[Ar]${eConfig("4s", 2, "4p", 13)}`,
          `[Kr]${eConfig("4s", 2, "4p", 1)}`,
          `${eConfig(
            "1s",
            2,
            "2s",
            2,
            "2p",
            6,
            "3s",
            2,
            "3p",
            6,
            "3d",
            12,
            "4s",
            2,
            "4p",
            1
          )}`,
          `${eConfig(
            "1s",
            2,
            "2s",
            2,
            "2p",
            6,
            "3s",
            2,
            "3p",
            6,
            "4s",
            2,
            "3d",
            8,
            "4p",
            5
          )}`,
          `${eConfig(
            "1s",
            2,
            "2s",
            2,
            "2p",
            6,
            "3s",
            2,
            "3p",
            6,
            "4s",
            2,
            "3d",
            10,
            "4p",
            3
          )}`,
        ],

        ans: "E",
      },
      {
        id: 71,
        question: `The outer electronic configuration ${eConfig(
          "ns",
          2,
          "np",
          4
        )} corresponds to which one of the following elements in its neutral state`,
        options: [`As`, `Ca`, `Cr`, `Br`, `S`],

        ans: "E",
      },
      {
        id: 72,
        question: `A neutral atom of an element has 2 electrons in the first shell(energy level), 8 in the second shell(energy level) and 8 in the third energy level. This information does <strong>not</strong> necessarily tell us:`,
        options: [
          `the atomic number of the element`,
          `anything about the element's chemical properties`,
          `the total number of electrons in s orbital`,
          `the total number of electrons in p orbitals`,
          `the number of neutrons in the nucleus of an atom of the element.`,
        ],

        ans: "E",
      },
      {
        id: 73,
        question: `How many element groups are there in the periodic table`,
        options: [`8`, `11`, `16`, `18`, `26`],

        ans: "D",
      },
      {
        id: 74,
        question: `The scientist who devised the periodic table is`,
        options: [
          `Dimitri mendelev`,
          `Henry Mosely`,
          `Antoine Lavoiser`,
          `Charles Darwin`,
          `Freidrich Wohler`,
        ],

        ans: "A",
      },
      {
        id: 75,
        question: `The symbol Au stands for what elements`,
        options: [`Gold`, `Silver`, `Copper`, `Tin`],

        ans: "A",
      },
      {
        id: 76,
        question: `What is the atomic number for the element tantalum`,
        options: [`22`, `81`, `52`, `73`],

        ans: "D",
      },
      // first occurence
      // {
      //     id: 78,
      //     question: `The atom having the valence-shell configuration ${eConfig("4s",2,"3d",5)} would be in:`,
      //     options: [
      //         "Group VIA and Period 5",
      //         "Group IVB and Period 4",
      //         "Group VIIA and Period 4",
      //         "Group VIIA and Period 4",
      //         "Group VIIB and Period 4"
      //     ],
      //     ans: "B",
      // },
      {
        id: 79,
        question: `The center of an atom is called the`,
        options: ["Nucleus", "Neutron", "Shell", "Center"],

        ans: "A",
      },
      {
        id: 80,
        question: `Mendeleev organised his periodic table by`,
        options: [
          "atomic number",
          "proton number",
          "electron number",
          "atomic mass",
        ],

        ans: "D",
      },
      {
        id: 81,
        question: `The charge on the electron is:`,
        options: ["positive", "negative", "neutral", "positive and negative"],
        ans: "B",
      },
      {
        id: 82,
        question: `Which of the following is not permissible`,
        options: [
          "n = 4, l = 3, m = 0",
          "n = 4, l = 2, m = 1",
          "n = 4, l = 4, m = 1",
          "n = 4, l = 0, m = 0",
        ],
        ans: "C",
      },
      {
        id: 83,
        question: `WHich of the following is an ionic hydride`,
        options: [
          `${formula("PH", 3)}`,
          `${formula("H", 2, "S")}`,
          `${formula("HI")}`,
          `${formula("KH")}`,
          `${formula("CH", 4)}`,
        ],
        ans: "D",
      },
      {
        id: 84,
        question: `Which is the electronic configuration for the ${ion(
          "S",
          "2",
          "-"
        )}`,
        options: [
          `${eConfig("1s", 2, "2s", 2, "2p", 6, "3s", 2, "3p", 2)}`,
          `${eConfig("1s", 2, "2s", 2, "2p", 6, "3s", 2, "3p", 4)}`,
          `${eConfig("1s", 2, "2s", 2, "2p", 6, "3s", 2, "3p", 4)}`,
          `${eConfig("1s", 2, "2s", 2, "2p", 6, "3s", 2, "3p", 6)}`,
        ],

        ans: "D",
      },
      {
        id: 85,
        question: `Which one of the following sets of properties is correct for a proton`,
        options: [
          "negatively charged and found in the nucleus",
          "no charge and found outside the nucleus",
          "positively charged and found in the nucleus",
          "positively charged and found outside the nucleus",
        ],

        ans: "C",
      },
      {
        id: 86,
        question: `How many neutrons does the element of atomic number 1 and mass number 1 have?`,
        options: [`1`, `2`, `0`, `none of the above`],

        ans: "C",
      },
      {
        id: 87,
        question: `Which of the following electron configurations indicates an atom with the lowest ionization energy`,
        options: [`2,8,7`, `2,8,8,1`, `2,8,8,2`, `2,8,8,7`],
        ans: "B",
      },
      {
        id: 88,
        question: `To which period does the element with the electronic configuration 2,8,7 belong?`,
        options: [`Second`, `Fourth`, `Third`, `First`],

        ans: "C",
      },
      {
        id: 89,
        question: `If an element has an atomic number of 7 and a mass number of 14, what is the name of this element?`,
        options: [`Neon`, `Lithium`, `Nitrogen`, `Silicon`],

        ans: "C",
      },
      {
        id: 90,
        question: `If an element has an atomic number of 9 and a mass number of 19, then, which of the following statements is INCORRECT`,
        options: [
          `its got 9 protons and 9 electrons`,
          `its got 10 electrons and 9 neutrons`,
          `there are 10 neutrons in its nucleus`,
          `there are 9 electrons orbiting around its nucleus`,
        ],

        ans: "B",
      },
      {
        id: 91,
        question: `Which of the following atoms is the largest`,
        options: [`F`, `Cl`, `Br`, `I`],

        ans: "D",
      },
      {
        id: 92,
        question: `What values are permitted for the angular momentum(azimuthal) quantum number if the principal quantum number is 3`,
        options: [`0`, `0,1`, `0,1,2`, `0,1,2,3`],
        ans: "C",
      },
      {
        id: 93,
        question: `The distance between the nuclei of chlorine atoms in a chlorine molecule is 0.567nm. The atomic radius of chlorine atom is`,
        options: ["0.097nm", `0.914nm`, `0.2835nm`, `4.203nm`],
        ans: "C",
      },
      {
        id: 94,
        question: `The atoms of four elements are represented as ${isotope(
          "",
          20,
          "Q"
        )}, ${isotope("", 16, "R")}, ${isotope("", 10, "S")}, ${isotope(
          "",
          8,
          "T"
        )}. Which of the elements would be unreactive?`,
        options: ["T", "Q", "R", "S"],
        ans: "D",
      },
      {
        id: 95,
        question: `Indicate which of the following statement is not true as we move from left to right along the periodic table`,
        options: [
          "electropositive character of elements increases",
          "number of electrons in the outermost orbits of elements increases",
          "atomic number of elements increase",
          "atomic mass of elements increases",
        ],
        ans: "A",
      },
      {
        id: 96,
        question: `Which of the following physical properties decreases across the periodic table`,
        options: [
          "atomic radius",
          "electronegativity",
          "electron affinity",
          "ionization potential",
        ],
        ans: "A",
      },
      {
        id: 97,
        question: `The energy change accompanying the removal of an electron from a gaseous ion is called`,
        options: [
          "electron affinity",
          "second ionization energy",
          "electronegativity",
          "first ionization energy",
        ],
        ans: "B",
      },
      {
        id: 98,
        question: `Which of the following is arranged in order of decreasing electronegativity?`,
        options: [
          "chlorine, aluminium, magnesium, phosphorus, sodium",
          "sodium, magnesium, aluminium, phosphorus, chlorine",
          "chlorine, phosphorus, aluminium, magnesium, sodium",
          "sodium, chlorine, phosphorus, magnesium, aluminium",
        ],
        ans: "C",
      },
      // third occurence.
      {
        id: 99,
        question: `Which of the following is <strong>False</strong> about the isotopes of the same element`,
        options: [
          "they have the same atomic number and different number of electrons",
          "they have the same number of electrons in their outermost shells",
          "they have different atomic masses",
          "they have the same atomic number and same number of electrons",
        ],
        ans: "A",
      },
      {
        id: 100,
        question: `In order to remove one electron from 3s-orbital of gaseous sodium atom, about 496KJmol<sup>-1</sup> of energy is required. The energy is referred to as`,
        options: [
          "electron affinity",
          `ionization energy`,
          `activation energy`,
          `electronegativity`,
        ],
        ans: "B",
      },
      {
        id: 101,
        question: `A decrease in atomic size and an increase in nuclear charge across a period lead to`,
        options: [
          `a decrease in electropositivity`,
          `an increase in chemical reactivity`,
          `an increase in tendency to lose electron`,
          "a decrease in covalency in bond formation",
        ],
        ans: "A",
      },
      {
        id: 102,
        question: `The most electropositive element among the following is?`,
        options: ["Na", "Br", `K`, `Ca`],
        ans: "C",
      },
    ],
  },
  {
    // loading new questions
    topic: "Chemical bonding",
    questions: [
      {
        id: 1,
        question:
          "When ammonia and hydrogen bond together to form ammonium ion, the bond formed is called",
        options: [
          "Ionic bond",
          "electrovalent bond",
          "covalent bond",
          "co-ordinate bond",
          "hydrogen bond",
        ],
        ans: "D",
      },
      {
        id: 2,
        question:
          "Which of the following statements is true when the potassium atom forms its ion",
        options: [
          "It gains one electron and becomes neutral",
          "its atomic number decreases",
          "it achieves electronic configuration of argon",
          "it loses one proton",
          "it loses one neutron",
        ],
        ans: "C",
      },
      {
        id: 3,
        question: "Helium atoms are chemically unreactive because",
        options: [
          "there are no electrons around the nucleus",
          "the number of protons equals the number of electrons",
          "there are equal number of protons and neutrons in the nucleus",
          "the outermost electron shell is completely filled",
          "the atoms contains only protons",
        ],
        ans: "D",
      },
      {
        id: 4,
        question: "The boiling point of water is higher than methanol because",
        options: [
          "water is an oxide while methanol is an alcohol",
          "inter-molecular forces in water are stronger than methanol",
          "water is an ionic compound while methanol is a covalent compound",
          "water is an inorganic compound while methanol is organic",
          "water is more reactive than methanol",
        ],
        ans: "B",
      },
      {
        id: 5,
        question:
          "Which of the following is NOT true of electrovalent compounds",
        options: [
          "they are solids",
          "they do not vaporize easily",
          "the elements forming the compounds normally have their valence eletrons in shared state",
          "they conduct electricity",
        ],
        ans: "C",
      },
      {
        id: 6,
        question:
          "The electronic configuration of elements X and Y are X = 2,8,6; Y = 2,8,7. The bond in the compound formed by X and Y is expected to be",
        options: [
          "ionic",
          "covalent",
          "dative covalent",
          "metallic",
          "none of the above",
        ],
        ans: "B",
      },
      {
        id: 7,
        question: `Which of the following bonds exist in crystalline ammonium chloride (${formula(
          "NH",
          4,
          "Cl"
        )})`,
        options: [
          "ionic and covalent",
          "ionic, covalent, and co-ordinate covalent",
          "ionic and co-ordinate covalent",
          "covalent, co-ordinate and metallic",
          "ionic, covalent, and metallic",
        ],
        ans: "B",
      },
      {
        id: 8,
        question: `If an atom X with six electrons in its outermost shell combine with atom Y with only one electron in its outermost shell to form an ionic compound then`,
        options: [
          "six atoms of X would combine with one of Y",
          "two atoms of X would combine with six of Y",
          "one atom of X would combine with two of Y",
          "two atoms of X would combine with two atoms of Y",
          "two atoms of X would combine with six atoms of Y",
        ],
        ans: "C",
      },
      {
        id: 9,
        question: `The three dimensional shape of methane is`,
        options: ["hexagonal", "trigonal", "linear", "tetrahedral", "cubical"],
        ans: "D",
      },
      {
        id: 10,
        question: `${isotope(3, 1, "R")}, ${isotope(19, 9, "U")}, ${isotope(
          24,
          12,
          "S"
        )}, ${isotope(20, 10, "T")}, ${isotope(
          19,
          7,
          "Y"
        )}. Which of the following statements is NOT true of the elements R, U, S, T, Y?`,
        options: [
          "R is an isotope of hydrogen",
          "U and Y are isotopes",
          "T is a noble gas",
          "S will react with oxygen to form SO",
        ],
        ans: "B",
      },
      {
        id: 11,
        question: `An element with atomic number twelve is likely to be`,
        options: [
          "electrovalent withl a valency of 1",
          "electrovalent with a valency of 2",
          "covalent with a valency of 2",
          "covalent with a valency of 4",
        ],
        ans: "B",
      },
      {
        id: 12,
        question: `The atomic numbers of two elements X and Y are 12 and 9 respectively. The compound formed between the atoms of these two elements is`,
        options: ["ionic", "covalent", "neutral", "co-ordinate"],
        ans: "A",
      },
      {
        id: 13,
        question: `The greater the difference in electronegativity between bonded atoms, the`,
        options: [
          "lower the polarity of the bond",
          "higher the polarity of the bond",
          "weaker the bond",
          "higher possiblity of the substance formed being a molecule",
        ],
        ans: "B",
      },
      {
        id: 14,
        question: `The forces holding naphthalene crystal together can be overcome when naphthalene is heated to a temperature of 354K resulting in the crystals melting. These forces are known as`,
        options: ["columbic", "ionic", "covalent", "van der waals"],
        ans: "D",
      },
      {
        id: 15,
        question: `A metallic ion ${ion(
          "X",
          2,
          "+"
        )} with an inert gas structure contains 18 electrons. How many protons are there in this ion`,
        options: ["20", "18", "16", "2"],
        ans: "A",
      },
      {
        id: 16,
        question: `What are the potential oxidation numbers for an element if its atomic number is 17?`,
        options: ["-1 and 7", "-1 and 6", "3 and 5", "-2 and 6"],
        ans: "A",
      },
      {
        id: 17,
        question: `Elements X and Y have electronic configurations ${eConfig(
          "1s",
          2,
          "2s",
          2,
          "2p",
          4
        )} and ${eConfig(
          "1s",
          2,
          "2s",
          2,
          "2p",
          6,
          "3s",
          2,
          "3p",
          1
        )} respectively. When they combine, the formula of the compound formed is`,
        options: [
          "XY",
          "YX",
          `${formula("X", 2, "Y", 3)}`,
          `${formula("X", 3, "Y", 2)}`,
        ],
        ans: "D",
      },
      {
        id: 18,
        question: `Which of the following terms indicate the number of bonds that can be formed by atom`,
        options: [
          "oxidation number",
          "valence",
          `atomic number`,
          `electronegativity`,
        ],
        ans: "A",
      },
      {
        id: 19,
        question: `Atoms of the element X (with 2 electrons in the outer shell) combine with atoms of Y (with 7 electrons in the outer shell). Which of the following statement is FALSE? The compound formed`,
        options: [
          "has formula XY",
          "likely to be ionic",
          `contains ${ion("X", 2, "+")} ions`,
          `contains ${ion("Y", "-", "")} ions`,
        ],
        ans: "A",
      },
      {
        id: 20,
        question: `Which of the following represents the type of bonding present in ammonium chloride molecule?`,
        options: [
          "ionic only",
          "covalent only",
          `ionic, covalent, and dative covalent`,
          `dative covalent only`,
        ],
        ans: "C",
      },
      {
        id: 21,
        question: `How many lone pairs of electron are there on the central atom of ${formula(
          "H",
          2,
          "O"
        )} molecules?`,
        options: ["1", "2", `3`, `4`],
        ans: "B",
      },
      {
        id: 22,
        question: `An element, E, has the electronic configuration ${eConfig(
          "1s",
          2,
          "2s",
          2,
          "2p",
          6,
          "3s",
          2,
          "3p",
          3
        )}. The reaction of E with a halogen X can give.`,
        options: [
          `${formula("EX", 3)} and ${formula("EX", 5)}`,
          `${formula("EX", 3)} only`,
          `${formula("EX", 5)} only`,
          `${formula("EX", 2)} and ${formula("EX", 3)}`,
        ],
        ans: "A",
      },
      {
        id: 23,
        question: `As the difference in electronegativity between bonded atoms increase, polarity of the bond`,
        options: [
          `decreases`,
          `increase`,
          `remains unchanged`,
          `reduces to zero`,
        ],
        ans: "B",
      },
      {
        id: 24,
        question: `Which group of elements forms hydrides that are pyramidal in structure?`,
        options: [`III`, `IV`, `V`, `VI`],
        ans: "C",
      },
      {
        id: 25,
        question: `Water has a rather high boiling point despite its low molecular mass because of the presence of`,
        options: [
          `hydrogen bonding`,
          `covalent bonding`,
          `ionic bonding`,
          `metallic bonding`,
        ],
        ans: "A",
      },
      {
        id: 26,
        question: `Elements X, Y and Z belongs to groups I, V, and VII respectively. Which of the following is TRUE about the bond types of XZ and YZ.`,
        options: [
          `both are electrovalent`,
          `both are covalent`,
          `XZ is electrovalent and YZ is covalent`,
          `XZ is covalent and ${formula("YZ", 3)}`,
        ],
        ans: "C",
      },
      {
        id: 27,
        question: `A particle that contains 8 protons, 9 neutrons and 7 electrons could be written as`,
        options: [
          `${isotope(16, 8, "O")}`,
          `${isotope(17, 8, "O<sup>+</sup>")}`,
          `${isotope(17, 9, "O")}<sup>-</sup>`,
          `${isotope(17, 8, "O")}<sup>-</sup>`,
        ],
        ans: "B",
      },
      {
        id: 28,
        question: `Two elements, P and Q with atomic numbers 11 and 8 respectively, combine chemically to form the compound P<sub>x</sub>R<sub>y</sub>. The respective values of x and y are`,
        options: [`1 and 1`, `1 and 2`, `2 and 1`, `3 and 1`],
        ans: "C",
      },
      {
        id: 29,
        question: `Given the electronegativity increases across a period and decreases down a group in the periodic table, in which of the following compounds will the molecules be held together by the strongest hydrogen bond`,
        options: [
          `${formula("HF", "aq")}`,
          `${formula("NH", 3, "aq")}`,
          `${formula("CH", 4, "aq")}`,
          `${formula("HCl", "g")}`,
        ],
        ans: "A",
      },
      {
        id: 30,
        question: `The electronic configuration of <sub>22</sub>X<sup>2+</sup> ion is`,
        options: [
          `${eConfig(
            "1s",
            2,
            "2s",
            2,
            "2p",
            6,
            "3s",
            2,
            "3p",
            6,
            "4s",
            2,
            "3d",
            2
          )}`,
          `${eConfig(
            "1s",
            2,
            "2s",
            2,
            "2p",
            6,
            "3s",
            2,
            "3p",
            6,
            "4s",
            2,
            "3d",
            1
          )}`,
          `${eConfig("1s", 2, "2s", 2, "2p", 6, "3s", 2, "3p", 6, "4s", 2)}`,
          `${eConfig("1s", 2, "2s", 2, "2p", 6, "3s", 2, "3p", 6)}`,
        ],
        ans: "C",
      },
      {
        id: 31,
        question: `Which of the following types of bonding does not involve the formation of new substances`,
        options: ["covalent", "metallic", "co-ordinate", "electrovalent"],
        ans: "B",
      },
      {
        id: 32,
        question: `The shapes of ${formula("CO", 2)} ${formula(
          "H",
          2,
          "O"
        )}, and ${formula("CH", 4)} respectively are`,
        options: [
          "bent, linear, and tetrahedral",
          "bent, tetrahedral, and linear",
          "linear, bent, and tetrahedral",
          "tetrahedral, linear, and bent",
        ],
        ans: "C",
      },
      {
        id: 33,
        question: `A particle that contains 9 protons, 10 neutrons and 10 electrons is`,
        options: [
          "positive ion",
          "neutral atom of a metal",
          "neutral atom of a non-metal",
          "negative ion",
        ],
        ans: "D",
      },
      {
        id: 34,
        question: `Which of the following chlorides would exhibit the least ionic character?`,
        options: [
          "LiCl",
          `${formula("MgCl", 2)}`,
          `${formula("CaCl", 2)}`,
          `${formula("AlCl", 3)}`,
        ],
        ans: "D",
      },
      {
        id: 35,
        question: `Neutral atoms of neon with atomic number 10 have the same number of electrons as`,
        options: [
          `${ion("O", 2, "-")}`,
          `${ion("Ca", 2, "+")}`,
          `${ion("K", "+", "")}`,
          `${ion("Mg", "+", "")}`,
        ],
        ans: "A",
      },
      {
        id: 36,
        question: `The noble gases owe their inactivity to`,
        options: [
          "octet configuration",
          "cyclic shape",
          "hexagonal shape",
          "obtuse configuration",
        ],
        ans: "A",
      },
      {
        id: 37,
        question: `The weakest attractive forces that can be observed between two molecules is`,
        options: ["ionic", "covalent", "coordinate covalent", "van der waals"],
        ans: "D",
      },
      {
        id: 38,
        question: `An electron can be added to a halogen atom to form a halide ion with`,
        options: [
          "8 valence electrons",
          "7 valence electrons",
          "2 valence electrons",
          "3 valence electrons",
        ],
        ans: "A",
      },
      {
        id: 39,
        question: `The property of chlorine which cause hydrogen chloride to be more ionic than the chlorine molecule is its.`,
        options: [
          "electronegativity",
          "electropositivity",
          "electron affinity",
          "electrovalency",
        ],
        ans: "A",
      },
      {
        id: 40,
        question: `What is the valence shell electron configuration of the element with atomic number 17?`,
        options: [
          `${eConfig("1s", 2, "2s", 2, "2p", 6, "3s", 2, "3p", 4)}`,
          `${eConfig("1s", 2, "2s", 2, "2p", 6, "3s", 2, "3p", 5)}`,
          `${eConfig("3s", 2, "3p", 5)}`,
          `${eConfig("2s", 2, "2p", 6)}`,
        ],
        ans: "C",
      },
      {
        id: 41,
        question: `An element will readily form an electrovalent compound if its electron configuration is`,
        options: [`2:8:8`, `2:8:4`, `2:8:5`, `2:8:1`],
        ans: "D",
      },
      {
        id: 42,
        question: `The shape of the hydrocarbon compound ${formula(
          "CH",
          4
        )} is`,
        options: [`square`, `planar`, `tetrahedral`, `planar`, `linear`],
        ans: "C",
      },
      {
        id: 43,
        question: `Which of these properties gives a solid its definite shape?`,
        options: [
          `weak intermolecular attraction`,
          `high boiling point`,
          `high melting point`,
          `strong intermolecular attraction`,
        ],
        ans: "D",
      },
      {
        id: 44,
        question: `A particle that contains 11 protons, 12 neutrons, and 10 electrons is probably`,
        options: [
          `metallic ion`,
          `non-metallic ion`,
          `neutral ion`,
          `neutral non-metal`,
        ],
        ans: "A",
      },
      {
        id: 45,
        question: `A metal X forms two bromides with the formulae ${formula(
          "XBr",
          2
        )} and ${formula(
          "XBr",
          3
        )}. What type of bonding exist between X and bromine in the bromides`,
        options: [
          `metallic bonding`,
          `ionic bonding`,
          `covalent bonding`,
          `dative bonding`,
        ],
        ans: "B",
      },
      {
        id: 46,
        question: `If an atom is represented as ${isotope(
          23,
          11,
          "X"
        )}, which of the following deduction is correct?`,
        options: [
          `it contains 12 protons`,
          `it forms a covalent chloride`,
          `its atomic number is 23`,
          `it is an alkali metal`,
        ],
        ans: "D",
      },
      {
        id: 47,
        question: `The type of bonding in [Cu(${formula(
          "NH",
          3
        )})<sub>4</sub>]<sup>2+</sup> is`,
        options: [`coordinate`, `electrovalent`, `metallic`, `covalent`],
        ans: "A",
      },
      {
        id: 48,
        question: `Hydrogen bonding can be found in`,
        options: [
          `hydrogen sulfide`,
          `hydorgen bromide`,
          `hydrogen fluoride`,
          `hydrogen chloride`,
        ],
        ans: "C",
      },
      {
        id: 49,
        question: `The number of lone pair of electrons in water molecule is`,
        options: [`2`, `4`, `3`, `1`],
        ans: "A",
      },
      {
        id: 50,
        question: `The ability of an atom in a molecule to attract shared electrons to itself is`,
        options: [
          `electron affinity`,
          `ionic radius`,
          `ionization`,
          `electronegativity`,
        ],
        ans: "D",
      },
      {
        id: 51,
        question: `The type of chemical bond that exists between potassium and oxygen in potassium oxide is`,
        options: [`ionic`, `metallic`, `covalent`, `dative`],
        ans: "A",
      },
      {
        id: 52,
        question: `The atom of an element x has six electrons in its outermost shell. What is the formula of the compound formed when x combines with aluminium (${isotope(
          "",
          13,
          "Al"
        )})`,
        options: [
          `${formula("AlX", 2)}`,
          `${formula("Al", 2, "X")}`,
          `${formula("Al", 2, "X", 2)}`,
          `${formula("Al", 2, "X", 3)}`,
        ],
        ans: "D",
      },
      {
        id: 53,
        question: `The shapes of ${formula("CO", 2)}, ${formula(
          "H",
          2,
          "O"
        )}, and ${formula("CH", 4)} respectively are`,
        options: [
          `bent, linear, and tetrahedral`,
          `bent, tetrahedral, and linear`,
          `tetrahedral, linear, and bent`,
          `linear, bent, and tetrahedral`,
        ],
        ans: "D",
      },
      {
        id: 54,
        question: `Among the following the maximum covalent character is shown by the compound`,
        options: [
          `${formula("MgCl", 2)}`,
          `${formula("FeCl", 2)}`,
          `${formula("SnCl", 2)}`,
          `${formula("AlCl", 3)}`,
        ],
        ans: "A", // I didn't think properly...
      },
      {
        id: 55,
        question: `Which combination of atoms can form a polar covalent bond?`,
        options: [`H and Br`, `H and H`, `Na and Br`, `N and N`],
        ans: "A",
      },
      {
        id: 56,
        question: `The total number of bonded electrons in an ammonia molecule is?`,
        options: [`6`, `8`, `10`, `12`],
        ans: "A",
      },
      {
        id: 57,
        question: `An oxonium ion contains the following pairs of bonds`,
        options: [
          `covalent and dative`,
          `covalent and ionic`,
          `van der waals and covalent`,
          `hydrogen and dative`,
        ],
        ans: "A",
      },
      {
        id: 58,
        question: `How many bond pairs are present in a water molecule?`,
        options: [`1`, `2`, `3`, `4`],
        ans: "B",
      },
    ],
  },
  {
    topic: "Covalent bonding", // making sense...
    questions: [
      {
        id: 1,
        question:
          "Covalent bond formation most often involves electron sharing between",
        options: [
          "two nonmetal atoms",
          "a metal atom and a nonmetal atom",
          "a metal atom and a noble-gas atom",
          "no corrrect response",
        ],
        ans: "A",
      },
      {
        id: 2,
        question:
          "Which of the following concepts is closely associated with covalent bond model?",
        options: [
          "attraction of two nuclei for each other",
          "attraction of two valence electrons for each other",
          "attraction of two nuclei for shared valence electrons",
          "no corrrect response",
        ],
        ans: "C",
      },
      {
        id: 3,
        question:
          "Which of the following compounds would be expected to contain covalent bonds?",
        options: [
          `${formula("CuCl", 2)}`,
          `${formula("FeCl", 2)}`,
          `${formula("SCl", 2)}`,
          "no corrrect response",
        ],
        ans: "C",
      },
      {
        id: 4,
        question:
          "Which of the following compounds has molecules as its basic structural unit?",
        options: [
          `${formula("FeO")}`,
          `${formula("Al", 2, "O", 3)}`,
          `${formula("SO", 3)}`,
          "no corrrect response",
        ],
        ans: "C",
      },
      {
        id: 5,
        question:
          "Which of the following characterizations for the bond line in the Lewis structure H-F is incorrect",
        options: [
          `it represents two shared electrons`,
          `it represents a covalent bond`,
          `it represents an octet of electrons`,
          "no corrrect response",
        ],
        ans: "C",
      },
      {
        id: 6,
        question:
          "How many nonbonding valence electrons are present in the Lewis structure H-F?",
        options: [
          `3`,
          `6`, // there are six nonbonding electrons, but 3 nonbond pairs
          `8`,
          "no corrrect response",
        ],
        ans: "B",
      },
      {
        id: 7,
        question:
          "How many hydrogen atoms(1 valence electron) would be expected to bond to a phosphorus atom( 5 valence electrons) during covalent compound formation?",
        options: [`1`, `3`, `5`, "no corrrect response"],
        ans: "B",
      },
      {
        id: 8,
        question:
          "Both Cl and F atoms contain seven valence electrons. The expected chemical formula for the simplest covalent compound formed between these two elements is",
        options: [
          `${formula("Cl", "F", 7)}`,
          `${formula("Cl", 2, "F")}`,
          `${formula("ClF")}`,
          "no corrrect response",
        ],
        ans: "C",
      },
      {
        id: 9,
        question: "In covalent bond formation the two atoms sharing electrons",
        options: [
          `must be identical`,
          `must be different`,
          `can be the same or different`,
          "no corrrect response",
        ],
        ans: "C",
      },
      {
        id: 10,
        question:
          "In a completed Lewis structure for a molecular compound all atoms",
        options: [
          `must have an octet of electrons`,
          `except hydrogen must have an octet of electrons`,
          `excpet hydorgen and oxygen must have an octet of electrons`,
          "no corrrect response",
        ],
        ans: "B",
      },
      {
        id: 11,
        question:
          "The number of electrons present in a triple covalent bond is",
        options: [`2`, `3`, `6`, "no corrrect response"],
        ans: "C",
      },
      {
        id: 12,
        question:
          "The number of single, double, and triple covalent bonds present, respectively, in a molecule whose Lewis structure H:O:O:H is",
        options: [
          `1, 2, and 0`,
          `1, 0, and 2`,
          `3, 0, and 0`,
          "no corrrect response",
        ],
        ans: "C",
      },
      {
        id: 13,
        question:
          "The number of single, double, and triple covalent bonds present, respectively, in a molecule whose Lewis structure is H:C:::N: is",
        options: [
          `1, 1, and 0`,
          `1, 0, and 1`,
          `0, 1 and 1`,
          "no corrrect response",
        ],
        ans: "B",
      },
      {
        id: 14,
        question: "The term multiple covalent bond applies to",
        options: [
          `both single and double bonds`,
          `both double and triple bonds`,
          `single, double, and triple bonds`,
          "no corrrect response",
        ],
        ans: "B",
      },
      {
        id: 15,
        question: "Single and double covalent bonds",
        options: [
          `have about the same strength`,
          `cannot be present in the same molecule`,
          `both involve sharing of two electron pairs`,
          "no corrrect response",
        ],
        ans: "D",
      },
      {
        id: 16,
        question:
          "Which of the following is an incorrect statement about coordinate covalent bonds?",
        options: [
          `Both atoms involved in the bond contribute an equal number of electrons to the bond`,
          `Both electrons of a shared electron pair come from the same atom.`,
          `Once formed, they are indistinguishable from other covalent bonds`,
          "no corrrect response",
        ],
        ans: "A",
      },
      {
        id: 17,
        question:
          "In which of the following molecules is a coordinate covalent bond present?",
        options: [
          `Cl-Cl`,
          `N-N(triple bond in between)`,
          `H-Br`,
          "no corrrect response",
        ],
        ans: "D",
      },
      {
        id: 18,
        question:
          "In Lewis structures depicting covalent bonding, an 'octet' of electrons for atoms of H means",
        options: [
          `2 electrons`,
          `4 electrons`,
          `8 electrons`,
          "no corrrect response",
        ],
        ans: "A",
      },
      {
        id: 19,
        question: `The Lewis structure for a ${formula(
          "N",
          2
        )} containing a triple covalent bond, and a total of 10 valence electrons. How many nonbonding electrons are present in the Lewis structure`,
        options: [
          `2 electrons`,
          `4 electrons`,
          `8 electrons`,
          "no corrrect response",
        ],
        ans: "B",
      },
      {
        id: 20,
        question: `The Lewis structure for a ${formula(
          "H",
          2,
          "S"
        )} molecule contains eight valence electrons, four of which are nonbonding. How many single and double bonds are present, respectively in this molecule?`,
        options: [
          `two and zero`,
          `one and one`,
          `zero and two`,
          "no corrrect response",
        ],
        ans: "A",
      },
      {
        id: 21,
        question: `Carbon has four valence electrons and H has one valence electron. The Lewis structure for the ${formula(
          "CH",
          4
        )} molecule contains how many nonbonding electrons`,
        options: [
          `2 electrons`,
          `4 electrons`,
          `8 electrons`,
          "no corrrect response",
        ],
        ans: "D",
      },
      {
        id: 22,
        question: `Nitrogen has five valence electrons and Cl has seven valence electrons. The Lewis structure for the molecule ${formula(
          "NCl",
          3
        )} contains?`,
        options: [
          `three single bonds`,
          `two single bonds and one double bond`,
          `three double bonds`,
          "no corrrect response",
        ],
        ans: "A",
      },
      {
        id: 23,
        question: `The bonding within a polyatomic ion is`,
        options: [
          `ionic`,
          `covalent`,
          `a combination of ionic and covalent`,
          "no corrrect response",
        ],
        ans: "B",
      },
      {
        id: 24,
        question: `Both ionic and covalent bonding are present in which of the following chemical species?`,
        options: [
          `${(ion(formula("SO", 4)), 2, "-")}`,
          `${formula("H", 2, "SO", 4)}`,
          `${formula("Na", 2, "SO", 4)}`,
          "no corrrect response",
        ],
        ans: "C",
      },
      {
        id: 24,
        question: `Given that P has five valence electrons and O has six valence electrons, how many total valence electrons are present in the Lewis structure for the ${ion(
          formula("PO", 4),
          2,
          "-"
        )} ion?`,
        options: [
          `11 electrons`,
          `29 electrons`,
          `32 electrons`,
          "no correct response",
        ],
        ans: "C",
      },
      {
        id: 25,
        question: `In VSEPR theory, the geometric arrangement that minimizes repulsions among three valence electron pairs on a central atom is`,
        options: [
          `tetrahedral`,
          `trigonal pyramid`,
          `trigonal planar`,
          "no correct response",
        ],
        ans: "C",
      },
      {
        id: 26,
        question: `In VSEPR theory, an angular molecular geometry is associated with molecules in which the central atom has`,
        options: [
          `three bonding groups and one nonbonding group`,
          `two bonding groups and two nonbonding groups`,
          `two bonding groups and zero nonbonding group`,
          "no correct response",
        ],
        ans: "B",
      },
      {
        id: 27,
        question: `The molecular geometry associated with three bonding groups and one nonbonding group about a central atom is`,
        options: [
          `linear`,
          `angular`,
          `trigonal planar`,
          "no correct response",
        ],
        ans: "D",
        remark: "no option is correct here. the answer is tetrahedral",
      },
      {
        id: 28,
        question: `Which of the following is not a possible geometry for molecules that have four electron groups about a central atom?`,
        options: [
          `tetrahedral`,
          `trigonal pyramidal`,
          `trigonal planar`,
          "no correct response",
        ],
        ans: "C",
        remark: `If the central atom of a molecule has four electron groups, it's possible geometry is one of<br /><strong>tetrahedral</strong>: all four are bond pairs. e,g ${formula(
          "CH",
          4
        )}<br /><strong>trigonal pyramidal</strong>: three bond pairs and one lone pair. e.g ${formula(
          "NH",
          3
        )}<br /><strong>angular/bent</strong>: two bond pairs and two lone pairs. e.g ${formula(
          "H",
          2,
          "O"
        )}`,
      },
      {
        id: 29,
        question: `Which of the following molecules would have a linear geometry`,
        options: [
          `${formula("H", 2, "O")}`,
          `${formula("CO", 2)}`,
          `${formula("NSF")}`,
          "no correct response",
        ],
        ans: "B",
      },
      {
        id: 30,
        question: `The most electronegative of all elements is`,
        options: [`sodium`, `fluorine`, `oxygen`, "no correct response"],
        ans: "B",
      },
      {
        id: 31,
        question: `Electronegativity values of the elements`,
        options: [
          `increase across a period in the periodic table`,
          `increase down a group of the periodic table`,
          `are lowest in the upper right corner of the periodic table`,
          "no correct response",
        ],
        ans: "A",
      },
      {
        id: 32,
        question: `In general metallic elements have`,
        options: [
          `higher electronegativities than nonmetallic elements`,
          `lower electronegativities than nonmetallic elements`,
          `about the same electronegativities as nonmetallic elements`,
          "no correct response",
        ],
        ans: "B",
      },
      {
        id: 33,
        question: `The electronegativities of the elements C, N, and O are, respectively, 2.5, 3.0,and 3.5. Which of these elements exerts the greatest influence on the shared electrons in a covalent bond`,
        options: [
          `carbon`,
          `oxygen`,
          `nitrogen and oxygen exert about the same effect`,
          "no correct response",
        ],
        ans: "B",
      },
      {
        id: 34,
        question: `Which of the following diatomic molecules is polar?`,
        options: [`Hydrogen`, `Fluorine`, `Nitrogen`, "no correct response"],
        ans: "D",
      },
      {
        id: 35,
        question: `Which of the following molecules, all of which are linear, is nonpolar?`,
        options: [
          `carbon dioxide (OCO)`,
          `hydrogen cyanide (HCN)`,
          `dinitrogen monoxide (NNO)`,
          "no correct response",
        ],
        ans: "A",
      },
      {
        id: 36,
        question: `Based on the given molecular geometry, which of the following molecules is nonpolar`,
        options: [
          `${formula("NF", 3)}(trigonal pyramidal)`,
          `${formula("CH", 4)}(tetrahedral)`,
          `${formula("H", 2, "S")}`,
          "no correct response",
        ],
        ans: "B",
      },
      {
        id: 37,
        question: `Which of the following is a binary molecular compound?`,
        options: [
          `${formula("HCN")}`,
          `${formula("NaCl")}`,
          `${formula("CO", 2)}`,
          "no correct response",
        ],
        ans: "C",
      },
      {
        id: 38,
        question: `Names for binary molecular compounds, except for a few common names, always`,
        options: [
          `end with the suffix -ide`,
          `contain two numerical prefixed`,
          `contain one numerical prefix`,
          "no correct response",
        ],
        ans: "A",
      },
      {
        id: 39,
        question: `In which of the following situations is an incorrect numerical prefix present in the compound's name?`,
        options: [
          `${formula("N", 2, "O", 5)}-dinitrogen pentaxode`,
          `${formula("NO", 2)}-nitrogen dioxide`,
          `${formula("N", 2, "O", 5)}-dinitrogen tetroxide`,
          "no correct response",
        ],
        ans: "C",
      },
      {
        id: 40,
        question: `Which of the following is the correct name for the compound CO?`,
        options: [
          `monocarbon monoxide`,
          `carbon monoxide`,
          `carbon oxide`,
          "no correct response",
        ],
        ans: "B",
      },
      {
        id: 41,
        question: `Which of the following is the correct name for the compound HF?`,
        options: [
          `monohydrogen monofluoride`,
          `hydrogen monofluoride`,
          `hydrogen fluoride`,
          "no correct response",
        ],
        ans: "C",
      },
      {
        id: 42,
        question: `Which of the following binary molecular compounds is paired with an incorrect common name?`,
        options: [
          `${formula("NO")}-nitric oxide`,
          `${formula("NH", 3)}-hydrazine`,
          `${formula("H", 2, "O", 2)}-hydrogen peroxide`,
          "no correct response",
        ],
        ans: "B",
      },
      {
        id: 43,
        question: `In a polar molecule there is`,
        options: [
          `an unsymmetrical distribution of electronic charge`,
          `a symmetrical distribution of electronic charge`,
          `an equal attraction for bonding electrons in all parts of the molecule`,
          "no correct response",
        ],
        ans: "A",
      },
      {
        id: 44,
        question: `Molecules containing polar covalent bonds`,
        options: [
          `are always polar`,
          `can be polar or nonpolar depending on the geometry`,
          `cannot be nonpolar`,
          "no correct response",
        ],
        ans: "B",
      },
      {
        id: 45,
        question: `The degree of inequality in electron sharing for a nonpolar covalent bond is`,
        options: [
          `very small or zero`,
          `very large`,
          `moderately large to very large`,
          `no correct response`,
        ],
        ans: "A",
      },
      {
        id: 46,
        question: `As the difference in electronegativity between two bonded atoms decrease the bond becomes more`,
        options: [`ionic`, `covalent`, `polar`, `no correct response`],
        ans: "B",
      },
      {
        id: 47,
        question: `In a polar covalent bond the atom of greater electronegativity bears a`,
        options: [
          `fractional positive charge`,
          `fractional negative charge`,
          `full positive charge`,
          `no correct response`,
        ],
        ans: "B",
      },
      {
        id: 48,
        question: `In a polar covalent bond the notation called a "delta plus symbol" is assigned to`,
        options: [
          `all atoms with electronegativity greater than 1.5`,
          `the atom with the largest electronegativity`,
          `the atom with the smallest electronegativity`,
          `no correct response`,
        ],
        ans: "C",
      },
      {
        id: 49,
        question: `A chemical bond for which the electronegativity difference between atoms is 1.2 is classified as a(n)`,
        options: [
          `ionic bond`,
          `polar covalent bond`,
          `nonpolar covalent bond`,
          `no correct response`,
        ],
        ans: "B",
      },
    ],
  },
  {
    topic: "Ionic bonding",
    questions: [
      {
        id: 1,
        question:
          "The concept of <em>electron transfer</em> is closely associated with",
        options: [
          "the ionic bond model",
          "the covalent bond model",
          "both the ionic and covalent bond models",
          "no corrrect response",
        ],
        ans: "A",
      },
      {
        id: 2,
        question:
          "The concept of <em>electron sharing</em> is closely associated with",
        options: [
          "the ionic bond model",
          "the covalent bond model",
          "both the ionic and covalent bond models",
          "no corrrect response",
        ],
        ans: "B",
      },
      {
        id: 3,
        question:
          "Which of the following is a general characteristics of most ionic compounds?",
        options: [
          "relatively low melting points",
          "generally gases at room temperature",
          "good electrical conductors in the molten state",
          "no corrrect response",
        ],
        ans: "C",
      },
      {
        id: 4,
        question: `How many valence electrons are present in an atom with the electron configuration ${eConfig(
          "1s",
          2,
          "2s",
          2,
          "2p",
          6,
          "3s",
          1
        )}`,
        options: ["one", "three", "seven", "no correct response"],
        ans: "A",
      },
      {
        id: 5,
        question: `How many valence electrons are present in an atom with the electron configuration ${eConfig(
          "1s",
          2,
          "2s",
          2,
          "2p",
          6,
          "3s",
          2,
          "3p",
          5
        )}`,
        options: ["two", "five", "seven", "no correct response"],
        ans: "C",
      },
      {
        id: 6,
        question: `How many valence electrons are present in atoms of Li, a Group IA element?`,
        options: ["one", "two", "three", "no correct response"],
        ans: "A",
      },
      {
        id: 7,
        question: `How many 'dots' are present in the Lewis symbol for the element oxygen, a Group VIA element`,
        options: ["two", "four", "six", "no correct response"],
        ans: "C",
      },
      {
        id: 7,
        question: `Which of the following elements should have the same number of valence electrons as ${isotope(
          "",
          "7",
          "N"
        )}`,
        options: [
          `${isotope("", "6", "C")}`,
          `${isotope("", "8", "O")}`,
          `${isotope("", "15", "P")}`,
          "no correct response",
        ],
        ans: "C",
      },
      {
        id: 8,
        question: `The most stable of all valence electron configurations is that of the`,
        options: [
          `element carbon`,
          `element oxygen`,
          `noble gases`,
          "no correct response",
        ],
        ans: "C",
      },
      {
        id: 9,
        question: `Which of the following is a very stable valence electron configuration?`,
        options: [
          `${eConfig("ns", 2, "np", 2)}`,
          `${eConfig("ns", 2, "np", 4)}`,
          `${eConfig("ns", 2, "np", 6)}`,
          "no correct response",
        ],
        ans: "C",
      },
      {
        id: 10,
        question: `The octet rule relates to the number 8 because`,
        options: [
          `Atoms undergo chemical reaction only if 8 valence electrons are present.`,
          `All electron subshells can hold 8 electrons`,
          `Atoms, during compound formation, frequently obtain 8 valence electrons`,
          "no correct response",
        ],
        ans: "C",
      },
      {
        id: 11,
        question: `In terms of subatomic particles, a ${ion(
          "Ca",
          2,
          "+"
        )} ion contains`,
        options: [
          `more electrons than protons`,
          `more protons than electrons`,
          `the same number of electrons and protons`,
          "no correct response",
        ],
        ans: "B",
      },
      {
        id: 12,
        question: `Which of the following is the correct symbol for an atom of X that has gained three electrons?`,
        options: [
          `${ion("X", 3, "+")}`,
          `${ion("X", 3, "-")}`,
          `3${ion("X", "-")}`,
          "no correct response",
        ],
        ans: "B",
      },
      {
        id: 13,
        question: `An ${ion("Al", 3, "+")} ion is an Al atom that has`,
        options: [
          `lost three electrons`,
          `gained three electrons`,
          `lost three protons`,
          "no correct response",
        ],
        ans: "A",
      },
      {
        id: 14,
        question: `Ion formation through loss of electrons`,
        options: [
          `always produces a negative ion`,
          `always produces a positive ion`,
          `can produce a negative or positive ion depending on element identity`,
          "no correct response",
        ],
        ans: "B",
      },
      {
        id: 15,
        question: `An atom with a ${eConfig(
          "1s",
          2,
          "2s",
          2,
          "2p",
          4
        )} electron configuration would most likely form a`,
        options: [`4- ion`, `6+ ion`, `2- ion`, "no correct response"],
        ans: "C",
      },
      {
        id: 16,
        question: `An atom with one valence electron would most likely form a`,
        options: [`1+ ion`, `1- ion`, `7+ ion`, "no correct response"],
        ans: "A",
      },
      {
        id: 17,
        question: `Magnesium and Fluorine would, respectively, be expected to form ions with charges of`,
        options: [`2+ and 1-`, `1+ and 2-`, `2+ and 7+`, "no correct response"],
        ans: "A",
      },
      {
        id: 18,
        question: `Two ions that are isoelectric would have the same`,
        options: [
          `nuclear charge`,
          `ionic charge`,
          `electron configuration`,
          "no correct response",
        ],
        ans: "C",
      },
      {
        id: 19,
        question: `The ion ${ion("O", 2, "-")} is isoelectronic with a`,
        options: [`N atom`, `F atom`, `Ne atom`, "no correct response"],
        ans: "C",
      },
      {
        id: 20,
        question: `In forming the ionic compound ${formula(
          "K",
          2,
          "O"
        )} from K (1 valence electron) and O (6 valence electrons), how many electrons does each oxygen atom require via electron transfer?`,
        options: [`one`, `two`, `three`, "no correct response"],
        ans: "B",
      },
      {
        id: 21,
        question: `In forming an ionic compound from Ca(2 valence electrons) and S(6 valence electrons), how many calcium atoms are needed to meet the "electron needs" of one S atom?`,
        options: [`one`, `two`, `three`, "no correct response"],
        ans: "A",
      },
      {
        id: 22,
        question: `When magnesium(2 valence electrons) combines with chlorine(7 valence electrons) the resulting ionic compound has the chemical formula`,
        options: [
          `${formula("MgCl")}`,
          `${formula("Mg", 2, "Cl")}`,
          `${formula("MgCl", 2)}`,
          "no correct response",
        ],
        ans: "C",
      },
      {
        id: 23,
        question: `What is the chemical formula of the ionic compound formed when ${ion(
          "Ca",
          2,
          "+"
        )} and ${ion("F", "-", "")} ions combine?`,
        options: [
          `${formula("CaF")}`,
          `${formula("Ca", 2, "F")}`,
          `${formula("CaF", 2)}`,
          "no correct response",
        ],
        ans: "C",
      },
      {
        id: 24,
        question: `What is the chemical formula of the ionic compound formed when ${ion(
          "Al",
          3,
          "+"
        )} and ${ion("S", "2", "-")} ions combine?`,
        options: [
          `${formula("Al", 2, "S", 3)}`,
          `${formula("Al", 3, "S", 2)}`,
          `${formula("Al", 3, "S")}`,
          "no correct response",
        ],
        ans: "A",
      },
      {
        id: 25,
        question: `Given that ${ion(
          "Z",
          "2",
          "-"
        )} ions are present in the ionic compound ${formula(
          "X",
          2,
          "Z"
        )}, what is the charge on the X ions present?`,
        options: [`1+`, "2+", "3+", "no correct response"],
        ans: "A",
      },
      {
        id: 26,
        question: `The correct chemical formula for an ionic compound that contains ${ion(
          "Z",
          "2",
          "-"
        )} ions and ${ion("X", 2, "+")} ions is`,
        options: [
          `${formula("ZX")}`,
          `${formula("XZ")}`,
          `${formula("Z", 2, "X", 2)}`,
          "no correct response",
        ],
        ans: "B",
      },
      {
        id: 27,
        question: `The structure of an ionic compound, in the solid state, involves which of the following?`,
        options: [
          `individual molecules in which positive and negative are present`,
          `a nonmolecular random arrangement of positive and negative ions`,
          `a nonmolecular highly ordered arrangement of positive and negative ions`,
          "no correct response",
        ],
        ans: "C",
      },
      {
        id: 28,
        question: `Which of the following is a correct description of the structure of the ionic compound NaCl?`,
        options: [
          `Alternating layers of ${ion("Na", "+", "")} and ${ion(
            "Cl",
            "-",
            ""
          )} ions are present`,
          `Individual molecules containing ${ion("Na", "+", "")} and ${ion(
            "Cl",
            "-",
            ""
          )} ions are present`,
          `Each ion present is surrounded by six ions of opposite charge`,
          "no correct response",
        ],
        ans: "C",
      },
      {
        id: 29,
        question: `Which of the following is a characteristic of binary ionic compounds?`,
        options: [
          `Two different metals are present.`,
          `Two different nonmetals are present`,
          `Both a metal and a nonmetal are present.`,
          "no correct response",
        ],
        ans: "C",
      },
      {
        id: 30,
        question: `Which of the following is a binary ionic compound`,
        options: [
          `${formula("SO", 3)}`,
          `${formula("CO", 2)}`,
          `${formula("C", 2, "H", 6)}`,
          "no correct response",
        ],
        ans: "D",
      },
      {
        id: 31,
        question: `The correct name for the binary ionic compound NaF is`,
        options: [
          `sodium fluoride`,
          `sodium fluorine`,
          `sodium fluorate`,
          "no correct response",
        ],
        ans: "A",
      },
      {
        id: 32,
        question: `Which of the following binary ionic compounds is paired with an incorrect name?`,
        options: [
          `${formula("CaS")} -> calcium sulfide`,
          `${formula("K", 2, "O")} -> dipotassium oxide`,
          `${formula("AlN")} -> aluminum nitride`,
          "no correct response",
        ],
        ans: "B",
      },
      {
        id: 33,
        question: `Which of the following is a variable charge metal?`,
        options: [`Zn`, `Ag`, `K`, "no correct response"],
        ans: "D",
      },
      {
        id: 34,
        question: `Which of the following binary ionic compounds has a name that includes a Roman numeral?`,
        options: [
          `${formula("Na", 2, "O")}`,
          `${formula("Fe", 2, "O", 3)}`,
          `${formula("MgCl", 2)}`,
          "no correct response",
        ],
        ans: "B",
      },
      {
        id: 35,
        question: `The correct name for the binary ionic compound ${formula(
          "Cu",
          2,
          "S"
        )} is`,
        options: [
          `copper sulfide`,
          `copper(I) sulfide`,
          `copper(II) sulfide`,
          "no correct response",
        ],
        ans: "B",
      },
      {
        id: 36,
        question: `What is the chemical formula for the compound tin(II) oxide`,
        options: [
          `${formula("SnO")}`,
          `${formula("SnO", 2)}`,
          `${formula("Sn", 2, "O")}`,
          "no correct response",
        ],
        ans: "A",
      },
      {
        id: 37,
        question: `Which of the following chemical formulas is that of a polyatomic ion?`,
        options: [
          `${ion("Cl", "-", "")}`,
          `${ion("OH", "-", "")}`,
          `${ion("S", 2, "-")}`,
          "no correct response",
        ],
        ans: "B",
      },
      {
        id: 38,
        question: `Which of the following statements about polyatomic ions is correct?`,
        options: [
          `All must contain oxygen`,
          `All must carry a negavtive charge`,
          `All must have names that end in -ide`,
          "no correct response",
        ],
        ans: "D",
      },
      {
        id: 39,
        question: `The nitrate, sulfate, and phosphate ions have, respectively, the chemical formulas`,
        options: [
          `${ion(formula("NO", 4), "-", "")}, ${ion(
            formula("SO", 4),
            2,
            "-"
          )}, and ${ion(formula("PO", 4), "3", "-")}`,
          `${ion(formula("NO", 3), "-", "")}, ${ion(
            formula("SO", 3),
            2,
            "-"
          )}, and ${ion(formula("PO", 3), "3", "-")}`,
          `${ion(formula("NO", 3), "-", "")}, ${ion(
            formula("SO", 4),
            2,
            "-"
          )}, and ${ion(formula("PO", 4), "3", "-")}`,
          "no correct response",
        ],
        ans: "C",
      },
      {
        id: 40,
        question: `The hydronium, ammonium, and hydroxide ions have, respectively, the chemical formulas`,
        options: [
          `${ion(formula("H", 3, "O"), "+", "")}, ${ion(
            formula("NH", 4),
            "+"
          )}, and ${ion(formula("OH"), "+")}`,
          `${ion(formula("H", 3, "O"), "-", "")}, ${ion(
            formula("NH", 4),
            "-"
          )}, and ${ion(formula("OH"), "-")}`,
          `${ion(formula("H", 3, "O"), "+", "")}, ${ion(
            formula("NH", 4),
            "+"
          )}, and ${ion(formula("OH"), "-")}`,
          "no correct response",
        ],
        ans: "C",
      },
      {
        id: 41,
        question: `The hydronium, ammonium, and hydroxide ions have, respectively, the chemical formulas`,
        options: [
          `${ion(formula("H", 3, "O"), "+", "")}, ${ion(
            formula("NH", 4),
            "+"
          )}, and ${ion(formula("OH"), "+")}`,
          `${ion(formula("H", 3, "O"), "-", "")}, ${ion(
            formula("NH", 4),
            "-"
          )}, and ${ion(formula("OH"), "-")}`,
          `${ion(formula("H", 3, "O"), "+", "")}, ${ion(
            formula("NH", 4),
            "+"
          )}, and ${ion(formula("OH"), "-")}`,
          "no correct response",
        ],
        ans: "C",
      },
      {
        id: 42,
        question: `What is the chemical formula for a compound that contains ${ion(
          "K",
          "+"
        )} ions and ${ion(formula("PO", 4), 3, "-")} ions`,
        options: [
          `${formula("KPO", 4)}`,
          `${formula("K", 2, "PO", 4)}`,
          `${formula("K", 3, "PO", 4)}`,
          "no correct response",
        ],
        ans: "C",
      },
      {
        id: 43,
        question: `What is the chemical formula for a compound that contains ${ion(
          "Al",
          3,
          "+"
        )} ions and ${ion("OH", "-")} ions?`,
        options: [
          `${formula("AlOH")}`,
          `${formula("AlOH", 3)}`,
          `${formula("Al", formula("(OH)", 3))}`,
          "no correct response",
        ],
        ans: "C",
      },
      {
        id: 44,
        question: `The compound ${formula("Mg", "(SCN)", 2)} contains ${ion(
          "Mg",
          2,
          "+"
        )} ions and polyatomic thiocyanate ions. WHat charge does the thiocyanate ion carry?`,
        options: [`1+`, `1-`, `2-`, "no correct response"],
        ans: "B",
      },
      {
        id: 45,
        question: `What is the name for the compound ${formula(
          "Na",
          2,
          "CO",
          3
        )}?`,
        options: [
          `disodium carbon trioxide`,
          `disodium carbonate`,
          `sodium carbonate`,
          "no correct response",
        ],
        ans: "C",
      },
      {
        id: 46,
        question: `What is the name for the compound ${formula(
          `(${formula("NH", 4)})`,
          2,
          "S"
        )}`,
        options: [
          `ammonium sulfate`,
          `ammonium sulfide`,
          `hydronium sulfide`,
          "no correct response",
        ],
        ans: "B",
      },
      {
        id: 47,
        question: `What is the chemical formula for the compound copper(II) nitrate?`,
        options: [
          `${formula("Cu", "NO", 3)}`,
          `${formula("Cu", formula(`(${formula("NO", 3)})`, 2))}`,
          `${formula("Cu", "(CN)", 2)}`,
          "no correct response",
        ],
        ans: "B",
      },
      // a polyatomic ion is an ion formed from a group of atoms(held together by covalent bonds) through loss or gain of electrons

      // another name for hydronium is oxonium ion...
    ],
  },
  {
    topic: "Atomic structure II",
    questions: [
      {
        id: 1,
        question:
          "Which of the following statements concerning the three types of subatomic particles is correct?",
        options: [
          "All types carry electrical charge.",
          "One of the three types carries electrical charge.",
          "None of the three types carry electrical charge.",
          "no corrrect response",
        ],
        ans: "D",
      },
      {
        id: 2,
        question:
          "Which of the following statements concerning a neutron is correct?",
        options: [
          "Its mass is slightly less than that of a proton.",
          "It carries a positive charge of one unit",
          "It carries a positive charge of two units",
          "no corrrect response",
        ],
        ans: "D",
      },
      {
        id: 3,
        question:
          "How many electrons are required to equal the mass of one proton?",
        options: ["1", "23", "about 1800", "no corrrect response"],
        ans: "C",
      },
      {
        id: 4,
        question:
          "Which of the following statements concerning an atom's nucleus is correct",
        options: [
          "It contains all protons and all electrons",
          "It is always positively charged",
          "It accounts for most of the total volume of an atom",
          "no corrrect response",
        ],
        ans: "B",
      },
      {
        id: 5,
        question: "Atoms as a whole are neutral because",
        options: [
          "The number of neutrons exceeds that of protons or electrons",
          "Charged subatomic particles lose their charge once they become part of an atom",
          "Equal numbers of protons and electrons are present",
          "no corrrect response",
        ],
        ans: "C",
      },
      {
        id: 6,
        question:
          "The atomic number for an atom containing 10 neutrons and 8 protons is",
        options: ["8", "10", "18", "no corrrect response"],
        ans: "A",
      },
      {
        id: 7,
        question:
          "An atom that has an atomic number of 11 and a mass number of 23 contains how many neutrons?",
        options: ["11", "12", "23", "no corrrect response"],
        ans: "B",
      },
      {
        id: 8,
        question: `How many electrons are present in an atom of ${isotope(
          "31",
          "15",
          "P"
        )}?`,
        options: ["15", "16", "31", "no corrrect response"],
        ans: "A",
      },
      {
        id: 9,
        question: `The identity of an atom is determined by the number of`,
        options: [
          "protons in the nucleus",
          "neutrons in the nucleus",
          "subatomic particles in the nucleus",
          "no corrrect response",
        ],
        ans: "A",
      },
      {
        id: 10,
        question: `Which of the following response is correct for ${isotope(
          "27",
          "14",
          "Si"
        )}?`,
        options: [
          "contains more protons than neutrons",
          "contains more electrons than protons",
          "contains an equal number of protons and neutrons",
          "no corrrect response",
        ],
        ans: "A",
      },
      {
        id: 11,
        question: `Isotopes of an element always have the`,
        options: [
          "same mass number and different atomic numbers",
          "same atomic number and different mass numbers",
          "different atomic numbers and different mass numbers",
          "no corrrect response",
        ],
        ans: "B",
      },
      {
        id: 11,
        question: `Isotopes of an element always have the`,
        options: [
          "same number of protons and same number of neutrons",
          "same number of protons and different numbers of neutrons",
          "same number of neutrons and different numbers of protons",
          "no corrrect response",
        ],
        ans: "B",
      },
      {
        id: 12,
        question: `What is the atomic mass of a hypothetical element that exists in two isotopic forms that have masses of 8.00 amu and 10.00 amu, respectively, and percent abundances of 80.00% and 20.00%, respectively?`,
        options: ["8.40 amu", "9.00 amu", "9.20 amu", "no corrrect response"],
        ans: "A",
      },
      {
        id: 13,
        question: `The element chlorine, which has two isotopic forms, has an atomic mass of 35.5 amu. This means that`,
        options: [
          "all chlorine atoms have a mass of 35.5 amu",
          "some, but not all chlorine atoms have a mass of 35.5 amu",
          "no chlorine atoms have a mass of 35.5 amu",
          "no corrrect response",
        ],
        ans: "C",
      },
      {
        id: 14,
        question: `A standard periodic table arranges the elements in order of`,
        options: [
          "year of discovery",
          "increasing atomic number",
          "increasing reactivity with oxygen",
          "no corrrect response",
        ],
        ans: "B",
      },
      {
        id: 15,
        question: `Which of the following elements is located in both Period 3 and Group IIIA?`,
        options: [
          `${isotope("", "6", "C")}`,
          `${isotope("", "13", "Al")}`,
          `${isotope("", "31", "Ga")}`,
          "no corrrect response",
        ],
        ans: "B",
      },
      {
        id: 16,
        question: `Which of the following pieces of information about an element is not found on a standard periodic table`,
        options: [
          `chemical symbol`,
          `atomic number`,
          `atomic mass number`,
          "no corrrect response",
        ],
        ans: "D",
      },
      {
        id: 17,
        question: `The elements known as halogens and alkali metals are found, respectively, in which groups in the periodic table`,
        options: [
          `IA and IIA`,
          `VIA and IIA`,
          `VIIA and IA`,
          "no corrrect response",
        ],
        ans: "C",
      },
      {
        id: 18,
        question: `Which of the following is a general characteristic of most metals`,
        options: [
          `low thermal conductivity`,
          `nonductile`,
          `malleable`,
          "no corrrect response",
        ],
        ans: "C",
      },
      {
        id: 19,
        question: `Which of the following statements about metallic and nonmetallic elements is correct`,
        options: [
          `The vast majority of elements are metals`,
          `The vast majority of elements are nonmetals`,
          `Approximately the same number of metallic and nonmetallic elements exist`,
          "no corrrect response",
        ],
        ans: "A",
      },
      {
        id: 20,
        question: `Which of the following elements is a nonmetal?`,
        options: [
          `${isotope("", "19", "K")}`,
          `${isotope("", "31", "Ga")}`,
          `${isotope("", "34", "Se")}`,
          "no corrrect response",
        ],
        ans: "C",
      },
      {
        id: 21,
        question: `Which of the following elements is a metal?`,
        options: [
          `${isotope("", "7", "N")}`,
          `${isotope("", "33", "As")}`,
          `${isotope("", "51", "Sb")}`,
          "no corrrect response",
        ],
        ans: "C",
      },
      {
        id: 22,
        question: `The maximum number of electrons that an electron shell can accomodate`,
        options: [
          `is two`,
          `is five`,
          `varied, depending on the shell number`,
          "no corrrect response",
        ],
        ans: "C",
      },
      {
        id: 23,
        question: `The maximum number of electron subshells within an electron shell`,
        options: [
          `is two`,
          `is five`,
          `varied, depending on the shell number`,
          "no corrrect response",
        ],
        ans: "C",
      },
      {
        id: 24,
        question: `The maximum number of electrons that an electron orbital can accomodate`,
        options: [
          `is two`,
          `is five`,
          `varied, depending on the shell number`,
          "no corrrect response",
        ],
        ans: "A",
      },
      {
        id: 25,
        question: `The shape of a 1s orbital is`,
        options: [
          `circular`,
          `spherical`,
          `figure eight shape`,
          "no corrrect response",
        ],
        ans: "B",
      },
      {
        id: 26,
        question: `In which of the following pairs of electrons subshells does the first listed subshell have a higher energy than the second listed subshell`,
        options: [`2s, 2p`, `2s, 3s`, `3d, 2p`, "no corrrect response"],
        ans: "C",
      },
      {
        id: 27,
        question: `How many electrons can a 3d subshell accomodate?`,
        options: [`2`, `6`, `10`, "no corrrect response"],
        ans: "C",
      },
      {
        id: 28,
        question: `How many electrons can a 3d orbital accomodate`,
        options: [`2`, `6`, `10`, "no corrrect response"],
        ans: "A",
      },
      {
        id: 29,
        question: `An electron configuration is a statement of how many electrons an atom has in each of its`,
        options: [
          `electron shells`,
          `electron subshells`,
          `electron orbitals`,
          "no corrrect response",
        ],
        ans: "B",
      },
      {
        id: 29,
        question: `How many electrons are present in atoms of the element whose electron configuration is ${eConfig(
          "1s",
          2,
          "2s",
          2,
          "2p",
          6,
          "3s",
          1
        )}?`,
        options: [`four`, `eight`, `eleven`, "no corrrect response"],
        ans: "C",
      },
      {
        id: 30,
        question: `The correct electron configuration for atoms of oxygen(element #8) is`,
        options: [
          `${eConfig("1s", 2, "2s", 2, "3s", 2, "4s", 2)}`,
          `${eConfig("1s", 2, "1p", 6, "2s", 2)}`,
          `${eConfig("1s", 2, "2s", 2, "2p", 4)}`,
          "no corrrect response",
        ],
        ans: "C",
      },
      {
        id: 31,
        question: `Which of the following statement is consistent with the electron configuration ${eConfig(
          "1s",
          2,
          "2s",
          2,
          "2p",
          3
        )}`,
        options: [
          `There are 3 electrons in the 2p orbital`,
          `There are 3 electrons in the 2p subshell`,
          `There are 3 electrons in the 2p shell`,
          "no corrrect response",
        ],
        ans: "B",
      },
      {
        id: 32,
        question: `How many different orbitals contain electrons in atoms with the electron configuration ${eConfig(
          "1s",
          2,
          "2s",
          2,
          "2p",
          3
        )}`,
        options: [`three`, `four`, `six`, "no corrrect response"],
        ans: "B",
      },
      {
        id: 33,
        question: `How many unpaired electrons are present in the orbital diagram for an atom whose electron configuration is ${eConfig(
          "1s",
          2,
          "2s",
          2,
          "2p",
          4
        )}`,
        options: [`none`, `two`, `four`, "no corrrect response"],
        ans: "B",
      },
      {
        id: 34,
        question: `Which pair of elements would be expected to have similarities in chemical properties`,
        options: [
          `${isotope("", "3", "Li")} and ${isotope("", "4", "Be")}`,
          `${isotope("", "9", "F")} and ${isotope("", "10", "Ne")}`,
          `${isotope("", "12", "Mg")} and ${isotope("", "20", "Ca")}`,
          "no corrrect response",
        ],
        ans: "C",
      },
      {
        id: 35,
        question: `Which of the following elements is located in the d area of the periodic table?`,
        options: [
          `${isotope("", "20", "Ca")}`,
          `${isotope("", "26", "Fe")}`,
          `${isotope("", "33", "As")}`,
          "no corrrect response",
        ],
        ans: "B",
      },
      {
        id: 36,
        question: `Which of the following elements is located in the ${ion(
          "p",
          4
        )} column of the periodic table?`,
        options: [
          `${isotope("", "15", "P")}`,
          `${isotope("", "34", "Se")}`,
          `${isotope("", "53", "I")}`,
          "no corrrect response",
        ],
        ans: "B",
      },
      {
        id: 37,
        question: `Which pair of electron configurations represent elements in the same periodic table group`,
        options: [
          `${eConfig("1s", 2, "2s", 1)} and ${eConfig("1s", 2, "2s", 2)}`,
          `${eConfig("1s", 2, "2s", 2, "2p", 1)} and ${eConfig(
            "1s",
            2,
            "2s",
            2,
            "2p",
            6,
            "3s",
            1
          )}`,
          `${eConfig("1s", 2, "2s", 2)} and ${eConfig(
            "1s",
            2,
            "2s",
            2,
            "2p",
            6,
            "3s",
            2
          )}`,
          "no corrrect response",
        ],
        ans: "C",
      },
      {
        id: 38,
        question: `Which of the following elements is a noble-gas element`,
        options: [
          `${isotope("", "8", "O")}`,
          `${isotope("", "9", "F")}`,
          `${isotope("", "17", "Cl")}`,
          "no corrrect response",
        ],
        ans: "D",
      },
      {
        id: 39,
        question: `Which of the following element-classification pairings is incorrect?`,
        options: [
          `${isotope("", "7", "N")} - representative element`,
          `${isotope("", "26", "Fe")} - transition element`,
          `${isotope("", "75", "Re")} - innertransition element`,
          "no corrrect response",
        ],
        ans: "C",
      },
      {
        id: 40,
        question: `Which of the following is an incorrect pairing of concepts?`,
        options: [
          `transition element - d area of periodic table`,
          `representative element - some are metals and some are nonmetals`,
          `noble-gas element - electron configuration ends in ${eConfig(
            "p",
            5
          )} or ${eConfig("p", 6)}`,
          "no corrrect response",
        ],
        ans: "C",
      },
    ],
  },
  {
    topic: "Chemical calculation LTE",
    questions: [
      {
        id: 1,
        question:
          "The formula mass for a compound is calculated by summing which of the following numbers for all atoms in a formula unit of the compound?",
        options: [
          "atomic number",
          "mass number",
          "nuclear charge",
          "no correct response",
        ],
        ans: "D",
      },
      {
        id: 2,
        question: `The atomic mass of C is 12.01 amu and that of O is 16.00 amu. The formula mass for the compound ${formula(
          "CO",
          2
        )} is:`,
        options: ["28.01 amu", "44.01 amu", "56.02 amu", "no correct response"],
        ans: "B",
      },
      {
        id: 3,
        question: `The atomic mass of H is 1.01 amu and that of N is 14.01 amu. What is the value of x in the chemical formula NH<sub>x</sub>, given that the formula mass of this compound is 17.04 amu?`,
        options: ["2", "3", "4", "no correct response"],
        ans: "B",
      },
      {
        id: 4,
        question: `The numerical value for Avogadro's number is`,
        options: [
          `6.02 X ${exp(21)}`,
          `6.02 X ${exp(24)}`,
          `6.02 X ${exp(26)}`,
          "no correct response",
        ],
        ans: "D",
      },
      {
        id: 5,
        question: `The numbrt of atoms present in 1 mole of P atoms is`,
        options: [
          `6.02 X ${exp(21)}`,
          `6.02 X ${exp(23)}`,
          `6.02 X ${exp(25)}`,
          "no correct response",
        ],
        ans: "B",
      },
      {
        id: 6,
        question: `One mole of S atoms contains twice as many atoms as`,
        options: [
          `one mole of O atoms`,
          `one-half mole of O atoms`,
          `one-eight mole of O atoms`,
          "no correct response",
        ],
        ans: "B",
      },
      {
        id: 7,
        question: `The number of molecules present in 1.50 moles of ${formula(
          "CO",
          2
        )} is`,
        options: [
          `Avogadro's number`,
          `1.50 times Avogadro's number`,
          `Avogadro's number divided by 1.50`,
          "no correct response",
        ],
        ans: "B",
      },
      {
        id: 8,
        question: `Which set of quantities is needed to calculate the molar mass of a compound?`,
        options: [
          `chemical formula and Avogadro's number`,
          `chemical formula and atomic masses`,
          `atomic masses and Avogadro's number`,
          "no correct response",
        ],
        ans: "B",
      },
      {
        id: 9,
        question: `The atomic mass of O is 16.00 amu. The molar mass for O atoms is`,
        options: [
          `16.00 amu`,
          `6.02 X ${exp(23)} amu`,
          `16.00 g`,
          "no correct response",
        ],
        ans: "C",
      },
      {
        id: 10,
        question: `The atomic masses of N and O are, respectively, 14.01 amu and 16.00 amu. The molar mass of the compound ${formula(
          "NO",
          2
        )} is`,
        options: [`30.01 g`, `44.02 g`, `46.01 g`, "no correct response"],
        ans: "C",
      },
      {
        id: 11,
        question: `The molar mass of ${formula(
          "CO",
          2
        )} is 44.01 g. WHat is the mass, in amu, of one molecule of ${formula(
          "CO",
          2
        )}?`,
        options: [
          `44.01 g`,
          `44.01 amu`,
          `44.01 amu times Avogadro's number`,
          "no correct response",
        ],
        ans: "B",
      },
      {
        id: 12,
        question: `The formula mass of ${formula(
          "N",
          2,
          "O"
        )} is 44.02 amu. What is the mass, in grams, of one-half mole of ${formula(
          "N",
          2,
          "O"
        )}?`,
        options: [`88.04 g`, `44.02 g`, `22.01 g`, "no correct response"],
        ans: "C",
      },
      {
        id: 13,
        question: `How many moles of H atoms are present in one mole of ${formula(
          "H",
          3,
          "PO",
          4
        )} molecules?`,
        options: [`1 mole`, `2 moles`, `3 moles`, "no correct response"],
        ans: "C",
      },
      {
        id: 14,
        question: `Which of the following samples contains 4.0 moles of O atoms?`,
        options: [
          `1.0 mole ${formula("SO", 2)}`,
          `2.0 moles ${formula("SO", 2)}`,
          `1.0 mole ${formula("SO", 3)}`,
          "no correct response",
        ],
        ans: "B",
      },
      {
        id: 15,
        question: `The total number of moles of atoms present in 4.00 moles of ${formula(
          "CO",
          2
        )} is`,
        options: [
          `3.00 moles`,
          `8.00 moles`,
          `12.0 moles`,
          "no correct response",
        ],
        ans: "C",
      },
      {
        id: 16,
        question: `When the chemical equation Na + S -> ${formula(
          "Na",
          2,
          "S"
        )} is correctly balanced, the proper sequence of coefficients is`,
        options: [`1,2,2`, `2,1,2`, `2,1,2`, "no correct response"],
        ans: "D",
      },
      {
        id: 17,
        question: `When the chemical equation Al + ${formula(
          "O",
          2
        )} -> ${formula(
          "Al",
          2,
          "O",
          3
        )} is correctly balanced, which of the following expressions appears in it?`,
        options: [
          `3 Al`,
          `3 ${formula("O", 2)}`,
          `3 ${formula("Al", 2, "O", 3)}`,
          "no correct response",
        ],
        ans: "B",
      },
      {
        id: 18,
        question: `A balanced chemical equation contains the expression 2 ${formula(
          "Fe",
          "Cl",
          3
        )}. How many atoms does this expression represents?`,
        options: [`two`, `four`, `eight`, "no correct response"],
        ans: "C",
      },

      {
        id: 19,
        question: `Which of the following elemental gases is not written as a diatomic molecule in a chemical equation?`,
        options: [`hydrogen`, `nitrogen`, `helium`, "no correct response"],
        ans: "C",
      },
      {
        id: 20,
        question: `Which of the following statements is true for all balanced chemical equations?`,
        options: [
          `The sum of the coefficients on each side of the equation must be equal.`,
          `The sum of the formula subscripts on each side of the equation must be equal`,
          `The total number of atoms on each side of the equation must be equal.`,
          "no correct response",
        ],
        ans: "C",
      },
      {
        id: 21,
        question: `Which of the following statements is consistent with the information found in the chemical equation ${formula(
          "N",
          2
        )} + 3${formula("H", 2)} -> 2${formula("NH", 3)}?`,
        options: [
          `1 mole of ${formula("NH", 3)} is produced when 1 mole of ${formula(
            "N",
            2
          )} reacts`,
          `3 moles of ${formula(
            "H",
            2
          )} are needed to produce 1 mole of ${formula("NH", 3)}`,
          `${formula("N", 2)} and ${formula(
            "H",
            2
          )} react in a 1-to-3 molar ratio`,
          "no correct response",
        ],
        ans: "C",
      },
      {
        id: 22,
        question: `How many moles of Al are needed to produce 6.0 moles of ${formula(
          "Al",
          2,
          "S",
          3
        )} via the chemical reaction 2${formula("Al")} + 3S -> ${formula(
          "Al",
          2,
          "S",
          3
        )}`,
        options: [
          `2.0 moles`,
          `6.0 moles`,
          `12.0 moles`,
          "no correct response",
        ],
        ans: "C",
      },
      {
        id: 23,
        question: `How many moles of ${formula(
          "CO",
          2
        )} are formed at the same time 2.0 moles of ${formula(
          "H",
          2,
          "O"
        )} are formed in the chemical reaction ${formula("CH", 4)} + 2${formula(
          "O",
          2
        )} -> ${formula("CO", 2)} + 2${formula("H", 2, "O")}`,
        options: [`2.0 moles`, `3.0 moles`, `4.0 moles`, "no correct response"],
        ans: "D",
      },
    ],
  },
  {
    topic: "Air and air pollution",
    questions: [
      {
        id: 1,
        question:
          "When air which contains the gases oxygen, nitrogen, carbon dioxide, water vapor and the rare gases is passed through alkaline pyrogallol and then over quicklime, the only gases left are",
        options: [
          "nitrogen and carbon dixoide.",
          "the rare gases.",
          "nitrogen and oxygen.",
          "nitrogen and the rare gases",
          "nitrogen, carbon dioxide and the rare gases",
        ],
        ans: "E",
      },
      {
        id: 2,
        question:
          "A gas jar was inverted over burning yellow phosphorus floating over water in a beaker. After burning, the water level was found to rise in the gas jar. The water level rises because",
        options: [
          "pressure inside the gas jar is greater than pressure outside it.",
          "the air in the gas jar had been used up by burning.",
          "oxygen in the gas jar had been used up by burning.",
          "nitrogen in the gas jar had been used up by burning",
          "the temperature in the jar had risen considerably.",
        ],
        ans: "C",
      },
      {
        id: 3,
        question:
          "When a piece of charcoal enclosed in a cylinder containing air is ignited.",
        options: [
          "the total volume of air is increased",
          "the relative amount of oxygen present is increased",
          "the relative amount of nitrogen present is decreased",
          "the relative amount of carbon dioxide present is increased",
          "the ratio of oxygen to nitrogen in the system is increased.",
        ],
        ans: "D",
      },
      {
        id: 4,
        question: "For iron to rust, there should be present",
        options: [
          "oxygen",
          "moisture",
          "carbon dioxide",
          "oxygen and moisture",
          "oxygen, moisture and carbon dioxide.",
        ],
        ans: "D",
      },
      {
        id: 5,
        question:
          "The nitrogen gas obtained by burning an excess of phosphorus in air has a density higher than the nitrogen from nitrogen compounds because the nitrogen from air is contaminated with",
        options: [
          "some unhurt phosphorus",
          `${formula("P", 2, "O", 5)} vapour`,
          "some oxygen",
          "rare gases",
          "carbon dioxide.",
        ],
        ans: "D",
      },
      {
        id: 6,
        question:
          "When air is passed through alkaline pyrogallol and then over quicklime, the only gases left are",
        options: [
          "nitrogen and carbon dioxide",
          `the rare gases`,
          "nitrogen and oxygen",
          "nitrogen and the rare gases",
          "nitrogen, carbon dioxide and the rare gases",
        ],
        ans: "E",
      },
      {
        id: 7,
        question: `In what respect will two dry samples of nitrogen gas differ from each other if sample 1 is prepared by completely removing ${formula(
          "CO",
          2
        )} and ${formula(
          "O",
          2
        )} is prepared by passing purified nitrogen(I) oxide over heated copper? Sample 1 is`,
        options: [
          "purer than sample 2",
          `slightly denser than sample2`,
          "in all respects the same as sample 2",
          "colorless but sample 2 has light brown",
          "slightly less reactive than sample 2",
        ],
        ans: "B",
      },
      {
        id: 8,
        question: `The approximate volume of air containing ${exp(
          3
        )}cm<sup>3</sup> of oxygen is`,
        options: [
          "20cm<sup>3</sup>",
          "25cm<sup>3</sup>",
          "50cm<sup>3</sup>",
          "100cm<sup>3</sup>",
        ],
        ans: "C",
      },
      {
        id: 9,
        question: `The exhaust fumes from a garage in a place that uses petrol of high sulphur content are bound to contain`,
        options: [
          `${formula("CO")} and ${formula("SO", 3)}`,
          `${formula("CO")} and ${formula("SO", 2)}`,
          `${formula("CO")}, ${formula("SO", 2)}, and ${formula("SO", 3)}`,
          `${formula("CO")} and ${formula("H", 2, "S")}`,
        ],
        ans: "C",
      },
      {
        id: 10,
        question: `A stream of air was successively passed through three tubes X, Y, and Z containing a concentrated aqueous solution of KOH, red hot copper powder and fused calcium chloride respectively. What was the composition of gas emanating from tube Z?`,
        options: [
          `${formula("CO", 2)} and the intert gases`,
          `${formula("N", 2)}, ${formula("CO", 2)} and the inert gases`,
          `${formula("N", 2)} and the inert gases`,
          `Water vapour, ${formula("N", 2)} and the inert gases`,
        ],
        ans: "C",
      },
      {
        id: 11,
        question: `Corrosion is exhibited by`,
        options: [
          `iron only`,
          `electropositive metals`,
          `metals below hydrogen in the electrochemical series`,
          `all metals`,
        ],
        ans: "D",
      },
      {
        id: 12,
        question: `The molar ratio of oxygen to nitrogen in dissolved air is 2:1 whereas the ratio is 4:1 in atmospheric air because`,
        options: [
          `nitrogen is less soluble than oxygen`,
          `oxygen is heavier than nitrogen`,
          `nitrogen has a higher partial pressure in air`,
          `gases are hydrated in water`,
        ],
        ans: "A",
      },
      {
        id: 13,
        question: `A quantity of air was passed through a weighed amount of alkaline pyrogallol. An increase in the weight of the pyrogallol would result from the absorption of`,
        options: [`nitrogen`, `neon`, `argon`, `oxygen`],
        ans: "D",
      },
      {
        id: 14,
        question: `The pollutants that are likely to be present in an industrial environment are`,
        options: [
          `${formula("H", 2, "S")}, ${formula("SO", 2)} and oxides of nitrogen`,
          `${formula("NH", 3)}, ${formula("HCl")}, ${formula("CO")}`,
          `${formula("CO", 2)}, ${formula("NH", 3)} and ${formula(
            "H",
            2,
            "S"
          )}`,
          `Dust, NO and ${formula("Cl", 2)}`,
        ],
        ans: "A",
      },
      {
        id: 15,
        question: `Which of the following gases dissolves in water vapour to produce acid rain during rainfall`,
        options: [
          `Oxygen`,
          `Carbon(II) oxide`,
          `Nitrogen`,
          `Sulphur(IV) oxide`,
        ],
        ans: "D",
      },
      {
        id: 16,
        question: `Argon is used in gas-filled electric lamps because it helps to`,
        options: [
          `prevent the reduction of the lamp filament`,
          `prevent oxidation of lamp filament`,
          `make lamp filaments glow brightly`,
          `keep the atmosphere in the lamp inert`,
        ],
        ans: "B",
      },
      {
        id: 17,
        question: `The air around a petroleum refinery is most likely to contain`,
        options: [
          `${formula("CO", 2)}, ${formula("SO", 3)}, and ${formula(
            "N",
            2,
            "O"
          )}`,
          `${formula("CO", 2)}, ${formula("CO")}, and ${formula("N", 2, "O")}`,
          `${formula("SO", 2)}, ${formula("CO")}, and ${formula("N", "O", 2)}`,
          `${formula("PH", 3)}, ${formula("H", 2, "O")}, and ${formula(
            "C",
            "O",
            "2"
          )}`,
        ],
        ans: "C",
      },
      {
        id: 18,
        question: `Helium is often used in observation ballons because it is`,
        options: [
          `light and combustible`,
          `light and non-combustible`,
          `heavy and combustible`,
          `heavy and non-combustible`,
        ],
        ans: "B",
      },
      {
        id: 19,
        question: `When plastics and packaging materials made from chloroethene are burnt in the open, the mixture of gases released into the atmosphere is most likely to contain`,
        options: [`ethane`, `chlorine`, `hydrogen chloride`, `ethene`],
        ans: "C",
      },
      {
        id: 20,
        question: `Which of the following gases is the most dangerous pollutant`,
        options: [
          `Hydrogen sulphide`,
          `Carbon(IV) oxide`,
          `Sulfur(IV) oxide`,
          `Carbon(II) oxide`,
        ],
        ans: "D",
      },
      {
        id: 21,
        question: `The property used in obtaining oxygen and nitrogen industrially from air is the`,
        options: [
          `boiling point`,
          `density`,
          `rate of diffustion`,
          `solubility`,
        ],
        ans: "A",
      },
      {
        id: 22,
        question: `Excess phosphorus was burnt in gas jar and the residual gas passed successively over concentrated KOH solution and concentrated ${formula(
          "H",
          2,
          "SO",
          4
        )} before being collected in a flask. The gases collected are`,
        options: [
          `Carbon(IV) oxide, nitrogen, and the rare gases`,
          `nitrogen(IV) oxide and the rare gases`,
          `nitrogen and the rare gases`,
          `carbon(IV) oxide, nitrogen(IV) oxide, and the rare gases`,
        ],
        ans: "C",
      },
      {
        id: 23,
        question: `Which of the following will have its mass increase when heated in air`,
        options: [`helium`, `magnesium`, `copper pyrites`, `glass`],
        ans: "B",
      },
      {
        id: 24,
        question: `Nitrogen obtained from the liquefaction of air has a higher density than that obtained from nitrogen-containing compounds because the former contains`,
        options: [`Water vapour`, `Oxygen`, `Carbon(IV) oxide`, `Rare gases`],
        ans: "D",
      },
      {
        id: 25,
        question: `The set of pollutants that is most likely to be produced when petrol is accidentally spilled on plastic materials and ignited is`,
        options: [
          `${formula("CO")}, ${formula("CO", 2)}, and ${formula("SO", 2)}`,
          `${formula("CO")}, ${formula("HCl")}, and ${formula("SO", 2)}`,
          `${formula("CO")}, ${formula("CO", 2)}, and ${formula("HCl")}`,
          `${formula("SO", 2)}, ${formula("CO", 2)}, and ${formula("HCl")}`,
        ],
        ans: "C",
      },
      {
        id: 26,
        question: `The noble gas, argon, is used for`,
        options: [
          `steel welding`,
          `brass welding`,
          `underwater welding`,
          `electric arc welding`,
        ],
        ans: "D",
      },
      {
        id: 27,
        question: `The air pollutant unknown in nature is`,
        options: [`DDT`, `CO`, `HCHO`, `NO`],
        ans: "A",
      },
      {
        id: 28,
        question: `The gas that is not associated with global warming is`,
        options: [
          `${formula("CO", 2)}`,
          `${formula("SO", 2)}`,
          `${formula("CH", 4)}`,
          `${formula("H", 2)}`,
        ],
        ans: "D",
      },
      {
        id: 29,
        question: `The pollutant from petroleum spillage in rivers and lakes can best be dispersed by`,
        options: [
          `pouring detergents`,
          `passing of ships through the area`,
          `pouring organic solvents`,
          `evaporation`,
        ],
        ans: "C",
      },
      {
        id: 30,
        question: `What is the decrease in volume of air when pyrogallol is shaken with 30.00cm<sup>3</sup> of air?`,
        options: [
          `15.00cm<sup>3</sup>`,
          `6.30cm<sup>3</sup>`,
          `0.63cm<sup>3</sup>`,
          `0.06cm<sup>3</sup>`,
        ],
        ans: "B",
      },
      {
        id: 31,
        question: `Environment pollutant is worsened by the release from automobile exhausts of?`,
        options: [`water vapour`, `steam`, `smoke`, `heavy metals`],
        ans: "D",
      },
      {
        id: 32,
        question: `Phosphorus is stored under water to prevent it from`,
        options: [`dehydrating`, `becoming inert`, `smelling`, `catching fire`],
        ans: "D",
      },
      {
        id: 33,
        question: `The substance least considered as a source of environmental pollution is`,
        options: [
          `silicate minerals`,
          `uranium`,
          `lead`,
          `organophosphorus compounds`,
        ],
        ans: "A",
      },
      {
        id: 59,
        question: `Oxygen in air can be removed using`,
        options: [
          `lime water`,
          `caustic soda solution`,
          `pyrogallol solution`,
          `slaked lime`,
        ],
        ans: "C",
      },
      {
        id: 55,
        question: `Which of the following pollutants is associated with brain damage`,
        options: [
          `Carbon(II) oxide`,
          `radioactive fallout`,
          `biodegradable waste`,
          `Sulfur(IV) oxide`,
        ],
        ans: "A",
      },
      {
        id: 53,
        question: `The condition required for corrosion to take place is the presence of `,
        options: [
          `water, carbon(IV) oxide, and oxygen`,
          `oxygen and carbon(IV) oxide`,
          `water and oxygen`,
          `water and carbon(IV)`,
        ],
        ans: "C",
      },
      {
        id: 56,
        question: `The constituent of air that acts as a diluent is `,
        options: [
          `${formula("O", 2)}`,
          `${formula("N", 2)}`,
          `${formula("CO", 2)}`,
          `noble gases`,
        ],
        ans: "B",
      },
      {
        id: 57,
        question: `The nitrogen obtained from air has a density higher than the one from nitrogen-containing compounds because the one from air is contaminated with?`,
        options: [`oxygen`, `rare gases`, `carbon(IV) oxide`, `water vapor`],
        ans: "B",
      },
      {
        id: 58,
        question: `The major and most effective way of controlling pollution is to`,
        options: [
          `pass strict laws against it by individuals and companies`,
          `educate people on the causes and effect of pollution`,
          `convert chemical waste to harmless substances before releasing them into the environment`,
          `improve machinery so that the substances released from combustion are less harmful`,
        ],
        ans: "C",
      },

      {
        id: 50,
        question: `The noble gas with a high power of fog penetration used in aerodome beacons is`,
        options: [`argon`, `helium`, `neon`, `krypton`],
        ans: "C",
      },
      {
        id: 60,
        question: `Which of the following gases makes up the largest percentage of atmospheric air`,
        options: ['carbon(IV) oxide', 'Hydrogen', 'Nitrogen', 'Noble gases', 'Oxygen'],
        ans: "C",
      },
      {
        id: 61,
        question: `Which of the following is not a natural component of the air`,
        options: ['water vapor', 'carbon(II) oxide', 'Nitrogen', 'Carbon(IV) oxide'],
        ans: "B",
      },
      {
        id: 62,
        question: `The uncovered raw food that is sold along major roads is likely to contain some amounts of`,
        options: ['Pb','Cu','Ag','Na'],
        ans: "A",
      },
    ],
  },
  {
    topic: "Nature of matter",
    questions: [
      {
        id: 1,
        question: `A small quantity of solid ammonium chloride ${formula(
          "NH",
          4,
          "Cl"
        )}was heated gently in a test-tube, the solid gradually disappeared to produce a mixture of two gases. Later a white cloudy deposit was observed on the cooler part of the test tube. The ammonium chloride is said to have undergone`,
        options: [`distillation`, `sublimation`, `precipitation`, `evaporation`],
        ans: "B",
      },
      {
        id: 2,
        question: `Which of the following changes is physical?`,
        options: [
          `adding iron fillings to aerated water`,
          `cooling a solution of iron(II) sulphate to obtain the hydrated salt`,
          `cooling water to obtain ice`,
          `adding sodium metal to water`,
          `burning domestic gas`,
        ],
        ans: "C",
      },
      {
        id: 3,
        question: `By means of filtration one compound can be obtained pure from an aqueous mixture of sodium chloride and`,
        options: [
          `potassium nitrate`,
          `sand`,
          `lead nitrate`,
          `sugar(glucose)`,
          `starch`,
        ],
        ans: "B",
      },
      {
        id: 4,
        question: `Methanoic acid mixes with water in all proportions and has the same boiling point as water. Which of the following methods would you adopt to obtain pure water from sand and methanoic acid`,
        options: [
          `fractional distillation`,
          `filtration followed by distillation`,
          `neutralization with sodium hydroxide followed by distillation`,
          `neutralization with sodium hydroxide followed by filtration`,
          `esterification with ethanol followed by distillation`,
        ],
        ans: "B",
        // not yet solved
      },
      {
        id: 5,
        question: `One of the following techniques can be used to show that chlorophyll pigments is a mixture of chemical compounds and not a single compound`,
        options: [
          `crystallization`,
          `hydrolysis`,
          `sublimation`,
          `filtration`,
          `chromatography`,
        ],
        ans: "E",
        // not yet solved
      },
      {
        id: 6,
        question: `In an attempt to remove sugar from a beaker containing a quantity of sand and sugar, 2M ammonium chloride solution was accidentally added instead of water. Which of the following methods could be used to remove ammonium chloride from the mixture.`,
        options: [
          `fractional distillation`,
          `crystallization`,
          `filtration followed by sublimation`,
          `evaporation followed by sublimation`,
          `filtration followed by sublimation`,
        ],
        ans: "D",
        // not yet solved
      },
      {
        id: 7,
        question: `Which of the following compounds and elements would sublime on exposure to the atmosphere`,
        options: [
          `ice`,
          `sulphur`,
          `phosphorus`,
          `iodine`,
          `potassium iodide`,
        ],
        ans: "D",
      },
      {
        id: 8,
        question: `Which of the following process does NOT lead to chemical change.`,
        options: [
          `stirring iron in sulphur(VI) acid`,
          `stirring sodium carbonate in water`,
          `stirring glucose in conc. Sulphuric acid`,
          `mixing sulphuric acid with potassium carbonate`,
          `titrating an acid against a base`,
        ],
        ans: "B",
        remark: "B is just adding salt to water which produces nothing new."
      },
      {
        id: 9,
        question: `A mixture of common salt, ammonium chloride and barium sulphate can best be separated by`,
        options: [
          `addition of water followed by filtration then sublimation`,
          `addition of water followed by sublimation then filtration`,
          `sublimation followed by addition of water then filtration`,
          `mixing sulphuric acid with potassium carbonate`,
          `fractional crystallization`,
        ],
        ans: "C",
      },
      {
        id: 10,
        question: `Sodium chloride may be obtained from brine by`,
        options: [
          `titration`,
          `decantation`,
          `evaporation`,
          `sublimation`,
          `distillation`,
        ],
        ans: "C",
      },
      {
        id: 11,
        question: `In an experiment, which of the following observation would suggest that a solid sample is a mixture? The`,
        options: [
          `solid can be ground to a fine powder`,
          `density of the solid is 2.25 g/dm3`,
          `solid begins to melt at 573K but is not completely melted until 648K`,
          `solid absorbs moisture from the atmosphere and turns into a liquid`,
          `solid melts at 300K`,
        ],
        ans: "C",
      },
      {
        id: 12,
        question: `A brand of ink containing cobalt(II), copper(II) and Iron(II) ions can best be separated into its various components by`,
        options: [
          `fractional crystallization`,
          `fractional distillation`,
          `sublimation`,
          `chromatography`,
        ],
        ans: "D",
      },
      {
        id: 13,
        question: `Which of the following substances is a mixture?`,
        options: [
          `granulated sugar`,
          `sea-water`,
          `sodium chloride`,
          `iron fillings`,
        ],
        ans: "B",
      },
      {
        id: 15,
        question: `Which of the following would support the conclusion that a solid sample is a mixture`,
        options: [
          `The solid can be ground to a fine powder`,
          `The density of the solid is 2.2 g/dm3`,
          `The solid has a melting range of 300 degree celcius to 375 degree celcius`,
          `The solid absorbs moisture from the atmosphere`,
        ],
        ans: "C",
      },
      {
        id: 16,
        question: `Which of the following is a physical change?`,
        options: [
          `The bubbling of chlorine in a jar containing hydrogen`,
          `The bubbling of chlorine into water`,
          `The dissolution of sodium chlorine in water`,
          `The passing of steam over heated iron.`,
        ],
        ans: "C",
      },
      {
        id: 18,
        question: `Which of the following are mixture<br>I. Petroleum<br> II. Rubber<br>III. Vulcanizer's solution<br>IV. Carbon(II) Sulphide`,
        options: [
          `I, II, and III`,
          `I, II, and IV`,
          `I and II only`,
          `I and IV`,
        ],
        ans: "A",
      },
      {
        id: 19,
        question: `Which of the following can be obtained by fractional distillation?`,
        options: [
          `Nitrogen from liquid air.`,
          `Sodium chloride from sea water.`,
          `Iodine from a solution of iodine in carbon tetrachloride.`,
          `Sulfur from a solution of sulfur in carbon disulfide.`,
        ],
        ans: "A",
      },
      {
        id: 20,
        question: `Which of the following substances is not a homogenous mixture?`,
        options: [
          `Filtered sea water`,
          `Soft drink`,
          `Flood water`,
          `Writing Ink`,
        ],
        ans: "C",
      },
      {
        id: 21,
        question: `The dissolution of common salt in water is a physical change because`,
        options: [
          `the salt can be obtained by crystallization`,
          `the salt can be recovered by the evaporation of the water`,
          `heat is not generated during mixing`,
          `the solution will not boil at 100 deg celcius`,
        ],
        ans: "B",
      },
      {
        id: 22,
        question: `Which of the following substances is a mixture`,
        options: [
          `sulphur powder`,
          `bronze`,
          `distilled water`,
          `ethanol`,
        ],
        ans: "B",
      },
      {
        id: 23,
        question: `A mixture of sand, ammonium chloride and sodium chloride is best separated by`,
        options: [
          `sublimation followed by addition of water and filtration`,
          `sublimation followed by addition of water and evaporation`,
          `addition of water followed by filtration and sublimation`,
          `addition of water followed by crystallization and sublimation`,
        ],
        ans: "A",
        // not yet answered
      },
      {
        id: 24,
        question: `A pure solid usually melts`,
        options: [
          `over a wide range of temperature`,
          `over a narrow range of temperature`,
          `at a lower temperature than the impure one`,
          `at the same temperature as the impure one`,
        ],
        ans: "B",
      },
      {
        id: 25,
        question: `Chromatography is used to separate components of mixtures which differs in their rates of`,
        options: [
          `diffusion`,
          `migration`,
          `reaction`,
          `sedimentation`,
        ],
        ans: "B",
      },
      {
        id: 26,
        question: `Which of the following is an example of chemical change.`,
        options: [
          `Dissolution of salt in water`,
          `Rusting of iron`,
          `Melting of ice`,
          `Separation of a mixture by distillation`,
        ],
        ans: "A",
      },
      {
        id: 27,
        question: `The addition of water to calcium oxide leads to.`,
        options: [
          `a physical change`,
          `a chemical change`,
          `the formation of a mixture`,
          `an endothermic change`,
        ],
        ans: "B",
      },
      {
        id: 28,
        question: `A mixture of iron and sulphur can be best separated by dissolving the mixture in`,
        options: [
          `steam`,
          `dilute hydrochloric acid`,
          `dilute sodium hydroxide`,
          `benzene`,
        ],
        ans: "B",
      },
      {
        id: 29,
        question: `Sieving is a technique used to separate mixtures containing solid particles of`,
        options: [
          `small sizes`,
          `large sizes`,
          `the same size`,
          `different sizes`,
        ],
        ans: "D",
      },
      {
        id: 30,
        question: `A mixture of iodine and sulfur crystals can be separated by treatment with`,
        options: [
          `water to filter of sulfur`,
          `methanol to filter off iodine`,
          `ethanoic acid to filter off sulphur`,
          `carbon(IV) sulfide to filter off iodine`,
        ],
        ans: "D",
      },
      {
        id: 31,
        question: `Pure solvents are obtained by`,
        options: [
          `distillation`,
          `condensation`,
          `extraction`,
          `evaporation`,
        ],
        ans: "A",
      },
      {
        id: 32,
        question: `A little quantity of trichloromethance (b.pt.60&deg;C) was added to a large quantity of ethanol (b.pt 78&deg;C). The most probable boiling point of the resultant mixture is from`,
        options: [
          `69&deg;-70&deg;C`,
          `82&deg;-84&deg;C`,
          `60&deg;-78&deg;C`,
          `70&deg;-74&deg;`,
        ],
        ans: "B",
      },
      {
        id: 33,
        question: `The chromatographic separation of ink is based on the ability of components to`,
        options: [
          `react with each other`,
          `react with solvent`,
          `dissolve in each other in the column`,
          `move at different speeds in the column`,
        ],
        ans: "D",
      },
      {
        id: 34,
        question: `Which of the following is a physical change`,
        options: [
          `Freezing ice-cream`,
          `Exposing white phosphorus to air`,
          `Burning kerosine`,
          `Dissolving calcium in water`,
        ],
        ans: "A",
      },
      {
        id: 35,
        question: `When a solid substance disappears completely as a gas on heating, the substance is said to have undergone`,
        options: [
          `evaporation`,
          `distillation`,
          `crystallization`,
          `sublimation`,
        ],
        ans: "D",
      },
      {
        id: 36,
        question: `A chemical reaction is always associated with`,
        options: [
          `an increase in the composition of one of the substances`,
          `a change in the volume of the reactants`,
          `a change in the nature of the reactants`,
          `the formation of new substances`,
        ],
        ans: "D",
      },
      {
        id: 37,
        question: `The property used in the industrial preparation of Nitrogen and Oxygen from air is`,
        options: [
          `rate of diffusion`,
          `solubility`,
          `density`,
          `boiling point`,
        ],
        ans: "D",
      },
      {
        id: 38,
        question: `A heterogenous mixture can be defined as any mixture`,
        options: [
          `whose composition is uniform`,
          `whose composition is not uniform`,
          `formed by solids and liquids`,
          `of a solute and a solvent`,
        ],
        ans: "B",
      },
      {
        id: 39,
        question: `Sugar is separated from its impurities by`,
        options: [
          `distillation`,
          `evaporation`,
          `precipitation`,
          `crystallization`,
        ],
        ans: "D",
      },
      {
        id: 40,
        question: `The order in which a mixture of sand, ammonium chloride and sodium chloride can be separated is`,
        options: [
          `sublimation -> dissolution -> filtration -> evaporation`,
          `dissolution -> dryness -> filtration -> evaporation`,
          `filtration -> sublimation -> evaporation -> dryness`,
          `dissolution -> filtration -> sublimation -> evaporation`,
        ],
        ans: "A",
      },
      {
        id: 41,
        question: `A difference between chemical and physical changes is that in a chemical change`,
        options: [
          `heat is supplied`,
          `a new substance is formed`,
          `oxygen is consumed`,
          `a reversible process occurs`,
        ],
        ans: "B",
      },
      {
        id: 42,
        question: `A mixture of petrol and water can be best separated through`,
        options: [
          `the use of filter paper`,
          `the use of a separating funnel`,
          `centrifugation`,
          `distillation`,
        ],
        ans: "B",
      },
      {
        id: 43,
        question: `Chlorophyll obtained from green leaves of plant can be shown to be composed of more than one colored components by the technique of`,
        options: [
          `crystallization`,
          `hydrolysis`,
          `chromatography`,
          `sublimation`,
        ],
        ans: "C",
      },
      {
        id: 44,
        question: `In countries where the temperature falls below 273K, salt is always sprinkled on the icy roads in order to`,
        options: [
          `lower the melting point of ice`,
          `increase the density of ice`,
          `make the ice impure`,
          `raise the melting point of ice`,
        ],
        ans: "A",
      },
      {
        id: 45,
        question: `A mixture of sugar and sulfur can be separated by`,
        options: [
          `dissolution in water, evaporation and filtration`,
          `filtration, evaporation, and dissolution in water`,
          `dissolution in water, filtration and evaporation`,
          `evaporation, dissolution in water and filtration`,
        ],
        ans: "C",
      },
      {
        id: 46,
        question: `Which of the following is a physical change`,
        options: [
          `freezing ice cream`,
          `dissolving calcium in water`,
          `burning kerosene`,
          `exposing white phosphorus to air`,
        ],
        ans: "A",
      },
      {
        id: 47,
        question: `Which of the following is an example of a mixture?`,
        options: [
          `blood`,
          `sand`,
          `washing soda`,
          `common salt`,
        ],
        ans: "A",
      },
      {
        id: 48,
        question: `The principle of column chromatography is based on the ability of the constituents to`,
        options: [
          `dissolve in each other in the column`,
          `react with the solvent in the column`,
          `react with each other in the column`,
          `move at different speeds in the column`,
        ],
        ans: "D",
      },
      {
        id: 49,
        question: `Which of the following methods can be used to obtain pure water from a mixture of sand, water and methanoic acid?`,
        options: [
          `neutralization with NaOH followed by filtration`,
          `neutralization with NaOH followed by distillation`,
          `fractional distillation`,
          `filtration followed by distillation`,
        ],
        ans: "B",
        // to be researched personally
      },
      {
        id: 50,
        question: `The presence of impurities in a solid will cause the melting point to`,
        options: [
          `be stable`,
          `be zero`,
          `reduce`,
          `increase`,
        ],
        ans: "C",
        // look up the answer later
      },
      {
        id: 51,
        question: `A mixture is different from a compound because`,
        options: [
          `constituents of a compound are chemically bound together while those of a mixture are not`,
          `a mixture is always homogenous while a compound is not`,
          `a mixture can be represented by a chemical formula while a compound cannot`,
          `the properties of a compound are those of its individual constituents while those of a mixture differ from its constituents.`,
        ],
        ans: "A",
        // look up the answer later
      },
      {
        id: 52,
        question: `The presence of impurities in a solid will make the melting point`,
        options: [
          `decrease`,
          `increase`,
          `remain unchanged`,
          `be zero`
        ],
        ans: "A",
        // look up the answer later
      },
      {
        id: 53,
        question: `The process whereby a gaseous body loses some of its kinetic energy to a colder body is referred to as`,
        options: [
          `condensation`,
          `melting`,
          `evaporation`,
          `freezing`
        ],
        ans: "A",
        // look up the answer later
      },
      {
        id: 54,
        question: `The separation technique that is based on the principle of solubility of a solid in two miscible liquids is`,
        options: [
          `fractional distillation`,
          `distillation`,
          `precipitation`,
          `filtration`
        ],
        ans: "C",
        // look up the answer later
      },
    ]
  },
];

// the general test thing is not choosing at runtime, it's just going to choose randomly before it starts. You know, given an arbitrary number of topics, select 40 random questions before starting...
// makes sense...
export { chemistryQuestions }
