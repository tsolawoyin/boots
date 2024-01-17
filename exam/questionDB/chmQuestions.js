// To be turned on only when changes want to be made.

let chemistryQuestions = [
    {
        topic: 'nitrogen',
        questions: [
            {
                id: 1,
                question: "Nitrogen is a non-metal which is found in what group of the periodic table?",
                options: ["I", "II", "III", "VI", "V"],
                ans: "E"
            },
            {
                id: 2,
                question: "Which of the following does not contain element nitrogen",
                options: ["ammonia", "sugar", 'air', "aqau fortis"],
                ans: "B"
            },
            {
                id: 3,
                question: "Nitrogen is used for the following except",
                options: ["in the production of ammonia gas", "it is used as a refrigerant", "for prevention of fire", "in the manufacture of CO<sub>2</sub>"],
                ans: "D"
            },
            {
                id:4,
                question: "Nitrogen can be obtained from ammonia by passing ammonia over heated",
                options: ["Cu", "CuO", "C", "CaO"],
                ans: "B"
            },
            {
                id:5,
                question: "Nitrogen can obtained industrially",
                options: [
                    "by passing ammonia over heated CuO",
                    "from liquified air by fractional distillation",
                    `from reaction of ${formula("NaNO", 2)} with ${formula("NH", 4, "Cl")}`,
                    "from atmospheric air"
                ],
                ans: "B"
            },
            {
                id:6,
                question: `Why is NH<sub>4</sub>NO<sub>2</sub> not heated directly to give ${formula("N", 2)}?`,
                options: [
                    "it is unstable",
                    "the reaction is very slow",
                    "it may lead to explosion",
                    "it is not spontaneous"
                ],
                ans: "C"
            },
            {
                id:7,
                question: "Which of the following gives an impure Nitrogen",
                options: [
                    "atmospheric air",
                    `from ${formula("NH", 4, "NO", 2)}`,
                    "from ammonia gas",
                    "from liquefied air"
                ],
                ans: "A"
            },
            {
                id:8,
                question: "Atmospheric air is passed over heated copper, Cu, to remove",
                options: [
                    "Hydrogen",
                    "Sulphur",
                    "Oxygen",
                    "Carbon(IV)Oxide"
                ],
                ans: "C"
            },
            {
                id:9,
                question: "Atmospheric air is passed through aqueous NaOH in order to remove",
                options: [
                    `${formula("H", 2, "S")}`,
                    `${formula("CO", 2)}`,
                    "CuO",
                    `${formula("H",2,"O")}`
                ],
                ans: "B"
            },
            {
                id:10,
                question: "Which of the following is <strong>false</strong> about Nitrogen",
                options: [
                    "pure nitrogen is colorless and odorless",
                    "it is insoluble in water",
                    "it is lighter than air",
                    "it has 4 valence electron"
                ],
                ans: "D"
            },
            {
                id:11,
                question: `What are the product of the following reaction <br /> <span class="reaction">3CuO<sub>(s)</sub> + 2NH<sub>3(g)</sub> -></span> `,
                options: [
                    `Cu, ${formula("H",2,"O")}, ${formula("H",2)}`,
                    `Cu, ${formula("SO",2)}, ${formula("N",2)}`,
                    `Cu, ${formula("H",2,"O")}, ${formula("N",2)}`,
                    `Cu, ${formula("NO", 2)}, ${formula("O", 2)}</sub>`
                ],
                ans: "C"
            },
            {
                id:12,
                question: `The electronic configuration of Nitrogen is`,
                options: [
                    `${eConfig("1s", 2, "2s", 2, "2p", 3)}`,
                    `${eConfig("1s", 2, "2s", 2, "2p", 6, "3s", 1)}`,
                    `${eConfig("1s", 2, "2s", 1)}`,
                    `${eConfig("1s", 2, "2s", 2, "2p", 4)}`
                ],
                ans: "A"
            },
            {
                id:13,
                question: `The decomposition of ${formula("NH", 4, "NO", 2, "aq")} gives`,
                options: [
                    `NO<sub>2</sub> and H<sub>2</sub>O`,
                    `N<sub>2</sub> and H<sub>2</sub>O`,
                    `N<sub>2</sub>O and H<sub>2</sub>O`,
                    `N<sub>2</sub> and O<sub>2</sub>`
                ],
                ans: "B"
            },
            {
                id:14,
                question: `The percentage of Nitrogen in 1 dm<sup>3</sup> of air is?`,
                options: [
                    "0.5 dm<sup>3</sup>",
                    "0.2 dm<sup>3</sup>",
                    "0.6 dm<sup>3</sup>",
                    "0.8 dm<sup>3</sup>"
                ],
                ans: "D"
            },
            {
                id:15,
                question: `Nitrogen is usually collected over water because`,
                options: [
                    "it is denser than water",
                    "it is less dense than water",
                    "it is insoluble in water",
                    "it is soluble in water"
                ],
                ans: "C"
            },
            {
                id:16,
                question: `Which of the following is true about the chemical properties of Nitrogen gas <br /> I. It does not support combustion <br /> II. It turns blue litmus red <br /> III. Nitrogen is very reactive <br /> IV. It reacts with magnesium to produce a solid white magnesium nitride, Mg<sub>3</sub>N<sub>2</sub>`,
                options: [
                    "I, II, III, IV",
                    "II and III",
                    "I and IV",
                    "II, III, and IV"
                ],
                ans: "C"
            },
            {
                id:17,
                question: `Which of the following condition is/are required for Nitrogen to react with hydrogen <br /> I. high temperature <br /> II. high pressure <br /> III. finely divided iron catalyst`,
                options: [
                    "all of the above",
                    "II only",
                    "II and III",
                    "IV only"
                ],
                ans: "A"
            },
            {
                id:18,
                question: `Nitrogen reacts with Oxygen at high temperature and pressure to produce`,
                options: [
                    "NO<sub>2</sub>",
                    "NO",
                    "N<sub>2</sub>O",
                    "N<sub>2</sub>O<sub>5</sub>"
                ],
                ans: "B"
            },
            {
                id:19,
                question: `The method used in separating nitrogen from oxygen in liquefied air is`,
                options: [
                    "fractional crystallization",
                    "crystallization",
                    "fractional distillation",
                    "distillation"
                ],
                ans: "C"
            },
            {
                id:20,
                question: `Nitrogen can be obtained in the laboratory from`,
                options: [
                    "a solution of sodium trioxonitrate(V) and ammonium chloride",
                    "a solution of sodium dioxonitrate(III) and ammonium chloride",
                    "a solution of sodium dioxonitrate(IV) and ammonium chloride",
                    "conc. tetraoxosulfate(V) and sodium trioxonitrate(IV)"
                ],
                ans: "B"
            },
            {
                id:21,
                question: `Which of the following is false about ammonia`,
                options: [
                    "it is a covalent molecule",
                    "it is highly soluble in water being polar",
                    "it is a gas",
                    "it can be dried with fused calcium chloride"
                ],
                ans: "D"
            },
            {
                id:22,
                question: `Ammonia is prepared in the lab from`,
                options: [
                    "slaked lime and ammonium fluoride",
                    "caustic soda and hydrogen chloride",
                    "ammonium chloride and slaked lime",
                    "slaked lime and calcium chloride"
                ],
                ans: "C"
            },
            {
                id:23,
                question: `which of the following pair is used in drying ammonia gas`,
                options: [
                    "silica gel and calcium oxide",
                    "calcium chloride and silica gel",
                    "calcium oxide and conc. sulphuric acid",
                    "conc. sulphuric acid and phosphorus"
                ],
                ans: "A"
            },
            {
                id:24,
                question: `Which of the following is true`,
                options: [
                    "ammonia gas is a colorless gas with a sweet smell",
                    "fused calcium chloride forms a complex with NH<sub>3</sub>",
                    "conc. sulphuric acid is suitable for drying ammonia",
                    "ammonia gas turns blue litmus red"
                ],
                ans: "B"
            },
            {
                id:25,
                question: `Ammonia is used for demonstrating the fountain experiment because`,
                options: [
                    "it is insoluble in water",
                    "it is partially soluble in water",
                    "it is soluble in water",
                    "it is highly soluble in water"
                ],
                ans: "D"
            },
            {
                id:26,
                question: `Ammonia is usually collected by upward delivery because`,
                options: [
                    "it is denser than air",
                    "it is lighter than air",
                    "it reacts with Oxygen in air",
                    "it combines with rare gases in air"
                ],
                ans: "B"
            },
            {
                id:27,
                question: `Which of the following is true of the physical properties of ammonia`,
                options: [
                    "it is colorless with a choking smell",
                    "it is lighter than air, hence, it is collected by upward delivery",
                    "it is highly soluble in water",
                    "it is readily liquefied; being polar, and with hydrogen bonds between the molecules",
                    "all of the above"
                ],
                ans: "E"
            },
            {
                id:28,
                question: `A solution of ammonia gas in water is called`,
                options: [
                    "aqua fortis",
                    "strong water",
                    "aqueous ammonia",
                    "ammonium solution",
                ],
                ans: "C"
            },
            {
                id:29,
                question: `The Haber process was discovered by `,
                options: [
                    "Fritz Haber",
                    "Albert Einstein",
                    "Antoine Lavoiser",
                    "Dmitri Mendeleev",
                ],
                ans: "A"
            },
            {
                id:30,
                question: `Which of the following reactions shows the reducing property of ammonia`,
                options: [
                    `<span class="reaction">4NH<sub>3(g)</sub> + 3O<sub>2(g)</sub> -> 6H<sub>2</sub>O(l) + 2N<sub>2(g)</sub></span>`,
                    `<span class="reaction">4NH<sub>3(g)</sub> + 3CuO<sub>(g)</sub> -> 3Cu<sub>s</sub>(s) + 2N<sub>2(g)</sub> + 3H<sub>2</sub>O(l)</span>`,
                    `<span class="reaction">4NH<sub>3(g)</sub> + H<sub>2</sub>O(l) -> NH<sub>4</sub>OH<sub>(aq)</sub></span>`,
                    `<span class="reaction">4NH<sub>3(g)</sub> + H<sub>2</sub>SO<sub>4(aq)</sub>-> (NH<sub>4</sub>)<sub>2</sub>SO<sub>4(s)</sub></span>`,
                ],
                ans: "B"
            },
            {
                id:31,
                question: `Which of the following is not true of ammonia`,
                options: [
                    "It turns moist red litmus paper blue ",
                    "It is the only alkaline gas",
                    "It is used in demonstrating the fountain experiment",
                    "It is a powerful oxidizing agent",
                ],
                ans: "D"
            },
            {
                id:32,
                question: `Which of the following is true of the Haber process<br />
                        I. it is used to manufacture ammonia <br />
                        II. finely divided iron is used as catalyst <br />
                        III. it occurs at 200-250atm and 450 degree celcuis <br />
                        IV. It was devised by a German chemist`,
                options: [
                    "I",
                    "I, II, III",
                    "all of the above",
                    "none of the above",
                ],
                ans: "C"
            },
            {
                id:33,
                question: `Which of the following when reacted with aqueous ammonia gives an insoluble gelatinous white precipate which disappears in excess`,
                options: [
                    "Fe<sup>2+</sup>",
                    "Fe<sup>3+</sup>",
                    "Cu<sup>2+</sup>",
                    "Zn<sup>2+</sup>",
                ],
                ans: "D"
            },
            {
                id:34,
                question: `When Fe<sup>2+</sup> solution is mixed with aqueous ammonia, the overall solution becomes`,
                options: [
                    "green",
                    "blue",
                    "yellow",
                    "red",
                ],
                ans: "A"
            },
            {
                id:35,
                question: `When each of the nitrates of potassium, magnesium, and iron is heated`,
                options: [
                    "all the nitrates decompose to the oxide",
                    "the nitrate of magnesium gives the nitrite and oxygen",
                    "the nitrates of magnesium and iron give the oxides",
                    "the nitrate of iron gives the nitrate and oxygen",
                    "the nitrate of magnesium is not decomposed"
                ],
                ans: "C"
            },
            {
                id:36,
                question: `The brown coloration in nitric acid prepared in the laboratory can be removed by`,
                options: [
                    "heating the acid",
                    "bubbling air through the acid",
                    "cooling the acid",
                    "adding a decolorizing agent",
                ],
                ans: "B"
            },
            {
                id:37,
                question: `What happens when the nitrates of potassium, calcium, zinc, and copper are separately heated`,
                options: [
                    "all the nitrates will decompose to their respective metals",
                    "the nitrates of calcium and potassium will decompose to their nitrites",
                    "only copper nitrate decomposes to the metal",
                    "only the nitrates of calcium, zinc, and copper decompose to their oxides",
                ],
                ans: "D"
            },
            {
                id:38,
                question: `Which of the following methods may be used to prepare trioxonitrate (V) acid in the lab `,
                options: [
                    "heating ammonia gas with sulphuric acid",
                    "heating ammonium trixonitrate (V) with sulphuric acid",
                    "heating sodium trioxonitrate (V) with sulphuric acid",
                    "heating potassium nitrate (V) with calcium hydroxide",
                    "heating a mixture of ammonia gas and oxygen"
                ],
                ans: "C"
            },
            {
                id:39,
                question: `In the Haber process for the manufacture of ammonia, finely divided iron is used as `,
                options: [
                    "a catalyst",
                    "an ionizing agent",
                    "a reducing agentd",
                    "an oxidizing agent",
                    "a dehydrating agent"
                ],
                ans: "A"
            },
            {
                id:40,
                question: `ammonia gas is normally dried with`,
                options: [
                    "anhydrous calcium chloride",
                    "conc sulphuric acid",
                    "quicklime",
                    "magnesium sulphate",
                ],
                ans: "C"
            },
            {
                id:41,
                question: `Hydrogen is not liberated when trioxonitrate(V) acid reacts with zinc because`,
                options: [
                    "zinc is rendered passive by the acid",
                    "hydrogen produced is oxidized to water",
                    "oxides of nitrogen are produced",
                    "all nitrates are soluble in water",
                    "trioxonitrate(V) acid is a strong acid"
                ],
                ans: "B"
            },
            {
                id:42,
                question: `Which of the following gases will rekindle a brightly glowing splint`,
                options: [
                    "NO<sub>2</sub>",
                    "NO",
                    "N<sub>2</sub>O",
                    "Cl<sub>2</sub>",
                ],
                ans: "C"
            },
            {
                id:43,
                question: `Which of the following oxides of nitrogen is unstable in air`,
                options: [
                    "NO<sub>2</sub>",
                    "NO",
                    "N<sub>2</sub>O<sub>4</sub>",
                    "Cl<sub>2</sub>",
                ],
                ans: "B"
            },
            {
                id:44,
                question: `The gas that gives brown coloration in brown ring test is`,
                options: [
                    "NO<sub>2</sub>",
                    "NO",
                    "N<sub>2</sub>O<sub>4</sub>",
                    "Cl<sub>2</sub>",
                ],
                ans: "A"
            },
            {
                id:45,
                question: `A dense white fume is formed when ammonia gas reacts with`,
                options: [
                    "H<sub>2</sub>",
                    "O<sub>2</sub>",
                    "Cl<sub>2</sub>",
                    "HCl",
                ],
                ans: "D"
            },
            {
                id:46,
                question: `Which of the folllowing are produced when ammonium trioxonitrate(V) crystals are cautiously heated in a hard glass`,
                options: [
                    "N<sub>2</sub>O and steam",
                    "NO<sub>2</sub> and ammonia",
                    "N<sub>2</sub>O<sub>4</sub> and NO<sub>2</sub>",
                    "NO and NO<sub>2</sub>",
                ],
                ans: "A"
            },
            {
                id:47,
                question: `Which of the following gases has a characteristics pungent smell, turns red litmus paper blue and forms dense white fumes with hydrogen chloride gas?`,
                options: [
                    "N<sub>2</sub>",
                    "NO<sub>2</sub>",
                    "N<sub>2</sub>O<sub>4</sub>",
                    "NH<sub>3</sub>",
                ],
                ans: "D"
            },
            {
                id:48,
                question: `Which of the following gases is employed as an anaesthesia`,
                options: [
                    "N<sub>2</sub>O",
                    "NO<sub>2</sub>",
                    "N<sub>2</sub>O<sub>4</sub>",
                    "NH<sub>3</sub>",
                ],
                ans: "A"
            },
            {
                id:49,
                question: `Magnesium ribbon was allowed to burn inside a given gas P leaving a white solid residue Q. Addition of water to Q liberated a gas which produced dense white fumes with a drop of hydrochloric acid. The gas was`,
                options: [
                    "nitrogen",
                    "chlorine",
                    "oxygen",
                    "sulphur(iv) oxide",
                ],
                ans: "A"
            },
            {
                id:50,
                question: `The color of fountain water is `,
                options: [
                    "blue",
                    "orange",
                    "red",
                    "yellow",
                ],
                ans: "C"
            },
            {
                id:51,
                question: `The following reactions illustrate the chemical properties of ${formula("HNO", 3 )} except`,
                options: [
                    `${formula("KOH", "aq")} + ${formula("HNO", 3, "aq")} -> ${formula("KNO", 3, "aq")} + ${formula("H", 2, "O", "l")}`,
                    `${formula("C", "s")} + 4${formula("HNO", 3, "aq")} -> ${formula("H",2, "CO", 3, "aq")} + ${formula("H", 2, "O", "l")} + ${formula("NO", 2)}`,
                    `3${formula("Cu", "s")} + 8${formula("HNO", 3, "aq")} -> 3${formula("Cu", `(${formula("NO", 3)})`,2, "aq")} + 2${formula("NO", 2, "g")} + 4${formula("H", 2, "O")}`,
                    `${formula("Na",2,"SO",4,"aq")} + 2${formula("HNO", 3, "aq")} -> 2${formula("NaNO", 3, "s")} + ${formula("H", 2, "SO",4, "s")}`,
                ],
                ans: "D"
            },
            {
                id:52,
                question: `Which of the following compound of nitrogen is normally in liquid form`,
                options: [
                    `${formula("NO",2)}`,
                    `${formula("HNO",3)}`,
                    `${formula("NaNO",3)}`,
                    `${formula("N",2,"O")}`,
                ],
                ans: "B"
            },
            {
                id:53,
                question: `Another name for ${formula("HNO", 3)} is`,
                options: [
                    "aqua fortis", "caustic soda", "inslet of langerhans", "quicklime"
                ],
                ans: "A"
            },
            {
                id:54,
                question: `The following are uses of ${formula("HNO", 3)} except`,
                options: [
                    "in the manufacture of drugs and explosives",
                    "as a nitrating agent",
                    "used in the manufacture of fertilizers",
                    "used in the production of cement"
                ],
                ans: "D"
            },
            {
                id:55,
                question: `Which of the following reaction is incorrect`,
                options: [
                    `${formula("NH", 4, "Cl")} -> ${formula("NH", 3)} + ${formula("HCl")}`,
                    `${formula(`(${formula("NH", 4)})`, 2, "CO",3)} -> ${formula("NH", 3)} + ${formula("HCl")}`,
                    `${formula("NH",4, "NO",3)} -> ${formula("N",2,"O")} + ${formula("H",2,"O")}`,
                    `${formula(`(${formula("NH", 4)})`, 2, "SO", 4)} -> 2${formula("NH", 3)} + ${formula("H",2,"SO",4)}`,
                    `${formula("NH",4, "NO",2)} -> ${formula("N",2,"O")} + ${formula("H",2,"O")}`,   
                ],
                ans: "E"
            },
            {
                id:56,
                question: `Nitrogen can be best obtained from a mixture of oxygen and nitrogen by passing the mixture over`,
                options: [
                    `potassium hydroxide`,
                    `heated gold`,
                    `heated phosphorus`,
                    `heated magnesium`,
                    `calcium chloride`  
                ],
                ans: "C"
            },
        ]
    },
    {
        topic: 'carbon',
        questions: [
            {
                id: 1,
                question: "Carbon is a nonmetal found in what group of the periodic table?",
                options: ["I", "II", "IV", "VI", "V"],
                ans: "C"
            },
            {
                id: 2,
                question: "When carbon dioxide is bubbled into limewater a white precipitate is formed. If the passage of the gas is continued the precipitate disappears. The reason for this is?",
                options: [
                    "Calcium carbonate is formed which gradually dissolves",
                    "Calcium hydrogen carbonate is precipitated and then dissolves",
                    "Calcium carbonate is formed which on reaction with further carbon dioxide forms soluble calcium hydrogen carbonate",
                    "Concentration of the solution has occured with the deposition of calcium hydroxide",
                    "The solution has become saturated and solid carbon dioxide has been deposited"
                ],
                ans: "C"
            },
            // from here on, I will not answer the questions
            {
                id: 3,
                question: `When ammonium, potassium, and calcium carbonates are separately heated`,
                options: [
                    `none of them will decompose`,
                    `each of them will decompose to give carbon dioxide and the respective oxide`,
                    `ammonium carbonate and potassium carbonate will not decompose`,
                    `only ammonium carbonate and calcium carbonate will decompose to give carbon dioxide and the respective oxide`,
                    `ammonium carbonate will decompose to give carbon dioxide, water, and ammonia`
                ],
                ans: "C"
            },
            {
                id: 4,
                question: `When a bottle of coca-cola is opened, bubbles of gas evolve. The gas is?`,
                options: [
                    `hydrogen`,
                    `carbon monoxide`,
                    `carbon dioxide`,
                    `sulfur dioxide`,
                    `chlorine`
                ],
                ans: "C"
            },
            {
                id: 5,
                question: `Liquid X reacts with sodium trioxocarbonate (IV), ${formula("Na", 2, "CO", 3)} to give a gas which turns calcium chloride solution milky. X is?`,
                options: [
                    `${formula("Na", 2, "SO", 4)}`,
                    `${formula("KI")}`,
                    `an alkali`,
                    `an acid`,
                    `a hydrocarbon`
                ],
                ans: "C"
            },
            {
                id: 6,
                question: `Lime water, which is used in the laboratory for the detection of carbon(IV) oxide is an aqueous  solution of`,
                options: [
                    `${formula("Ca(OH)", 2)}`,
                    `${formula("Ca", "CO", 3)}`,
                    `${formula("CaHCO", 3)}`,
                    `${formula("CaSO", 4)}`,
                    `${formula("Na", 2, "SO", 4)}`
                ],
                ans: "C"
            },
            {
                id: 36,
                question: `Which of the following is not true of carbon monoxide`,
                options: [
                    `CO is poisonous`,
                    `CO is readily oxidized at room temperature by air to form ${formula("CO", 2)}`,
                    `CO may be prepared by reducing ${formula("CO", 2)} mixed with coke heated to about 1000 degree celcius`,
                    `CO may be prepared by heating charcoal with a limited amount of ${formula("O",2)}`,
                    `CO is a good reducing agent`
                ],
                ans: "C"
            },
            {
                id: 7,
                question: `A piece of sea shell, when dropped into a dilute solution of hydrochloric acid, produces a colorless, odorless gas, which turns clear limewater milky. The shell contains`,
                options: [
                    `sodium chloride`,
                    `ammonium nitrate`,
                    `calcium carbonate`,
                    `calcium chloride`,
                    `magnesium chloride`
                ],
                ans: "C"
            },
            {
                id: 8,
                question: `Which of the following conducts electricity`,
                options: [
                    `Sulphur`,
                    `Graphite`,
                    `Diamond`,
                    `Red phosphorus`,
                    `Yellow phosphorus`
                ],
                ans: "B"
            },
            {
                id: 9,
                question: `Which of the following is used in fire extinguishers?`,
                options: [
                    `Carbon(II) oxide`,
                    `Carbon(IV) oxide`,
                    `Sulfur(IV) oxide`,
                    `Ammonia`,
                ],
                ans: "B"
            },
            {
                id: 35,
                question: `Carbon(II) oxide may be collected over water because it`,
                options: [
                    `is heavier than air`,
                    `is less dense than air`,
                    `is insoluble in water`,
                    `burns in oxygen to form carbon(IV) oxide`,
                ],
                ans: "B"
            },
            {
                id: 10,
                question: `What process would coal undergo to give coal gas, coal tar, ammonical liquor, and coke`,
                options: [
                    `steam distillation`,
                    `destructive distillation`,
                    `liquefaction`,
                    `hydrolysis`,
                ],
                ans: "B"
            },
            {
                id: 11,
                question: `Some product of destructive distillation of coal are`,
                options: [
                    `carbon(IV) oxide and ethanoic acid`,
                    `trioxocarbonate(IV) acid and methanoic acid`,
                    `producer gas and water gas`,
                    `coke and ammonia liquor`,
                ],
                ans: "B"
            },
            {
                id: 12,
                question: `Coal fire should not be used in poorly ventilated room because`,
                options: [
                    `of the accumulation of ${formula("CO", 2)} which cause deep sleep`,
                    `it is usually too hot`,
                    `of the accumulation CO of which causes suffocation`,
                    `it removes most of the gases in the room`,
                ],
                ans: "B"
            },
            {
                id: 13,
                question: `Which of the following salts can be melted without decomposition?`,
                options: [
                    `${formula("Na", 2, "CO", 3)}`,
                    `${formula("CaCO", 3)}`,
                    `${formula("MgCO", 3)}`,
                    `${formula("ZnCO", 3)}`,
                ],
                ans: "B"
            },
            {
                id: 14,
                question: `Coal gas is made up of carbon(II) oxide, hydrogen and`,
                options: [
                    `nitrogen`,
                    `air`,
                    `argon`,
                    `methane`,
                ],
                ans: "B"
            },
            {
                id: 15,
                question: `The process employed in the production of anhydrous sodium trioxocarbonate(IV) is`,
                options: [
                    `harber process`,
                    `solvay process`,
                    `electrolytic process`,
                    `down process`,
                ],
                ans: "B"
            },
            {
                id: 16,
                question: `Which allotrope of carbon is a constituent of lead pencil`,
                options: [
                    `graphite`,
                    `diamond`,
                    `lampblack`,
                    `wood`,
                ],
                ans: "A"
            },
            {
                id: 17,
                question: `Which of the statements is TRUE about carbon(IV) oxide`,
                options: [
                    `it supports combustion`,
                    `it is a strong acid in water`,
                    `it is very soluble in water`,
                    `it supports the burning of magnesium to produce magnesium oxide`,
                ],
                ans: "A"
            },
            {
                id: 18,
                question: `Diamond cannot be used`,
                options: [
                    `in making bicycle chains`,
                    `as abrasives`,
                    `in cutting glass and metals`,
                    `as dies for drawing wires`,
                ],
                ans: "A"
            },
            {
                id: 19,
                question: `The constituents of baking powder that makes dough to rise is`,
                options: [
                    `${formula("NaOH")}`,
                    `${formula("Na", 2, "CO", 3)}`,
                    `${formula("NaCl")}`,
                    `${formula("NaHCO", 3)}`,
                ],
                ans: "A"
            },
            {
                id: 20,
                question: `Carbon(II) oxide is considered dangerous if inhaled mainly because it`,
                options: [
                    `competes with oxygen in the blood`,
                    `competes with carbon(IV) oxide in the blood`,
                    `can cause lung cancer`,
                    `can cause injury to the nervous system`,
                ],
                ans: "A"
            },
            {
                id: 21,
                question: `Diamond is used in making jewelry due to its`,
                options: [
                    `high refractive index`,
                    `transparency`,
                    `hardness`,
                    `high melting point`,
                ],
                ans: "A"
            },
            {
                id: 22,
                question: `Which of the following does not contain carbon?`,
                options: [
                    `marble`,
                    `eggshell`,
                    `air`,
                    `quicklime`,
                    `chalk`,
                ],
                ans: "D"
            },
            {
                id: 23,
                question: `The phenomenon where an element exist in more than one form in the same physical state is called?`,
                options: [
                    `allotropy`,
                    `isotopy`,
                    `enantiomerism`,
                    `isomerism`,
                ],
                ans: "A"
            },
            {
                id: 24,
                question: `The ability of carbon atoms to join to one another by covalent bond in a continuous fashion is called?`,
                options: [
                    `cretinism`,
                    `catenation`,
                    `flocculation`,
                    `coagulation`,
                ],
                ans: "B"
            },
            {
                id: 25,
                question: `Which of the following is not an allotrope of carbon`,
                options: [
                    `diamond`,
                    `graphite`,
                    `fullerene`,
                    `rhombic`,
                ],
                ans: "D"
            },
            {
                id: 26,
                question: `The least common form of carbon is`,
                options: [
                    `diamond`,
                    `graphite`,
                    `fullerene`,
                ],
                ans: "C"
            },
            {
                id: 27,
                question: `Which of the following is true about diamond<br>I. It consists of carbon atoms that are covalently bonded in a regular tetrahedron<br> II. It has high melting point<br> III. It is the hardest substance known<br> IV. It conducts electricity`,
                options: [
                    `I, II, and III`,
                    `II and IV`,
                    `I, II, III`,
                    `all of the above`
                ],
                ans: "C"
            },
            {
                id: 28,
                question: `The physical properties of diamond includes<br>I. Diamond is hard, colorless, and transparent<br>II. It forms octahedral crystals with high refractive index<br>III. Its density is 3.5${units("gcm", -3)}, and melts at 3600&deg;C<br>IV. It does not conduct electricity, since all the four valence<br>V. It is insoluble in any solvent`,
                options: [
                    `I only`,
                    `I, and II`,
                    `I, II, and III`,
                    `I, II, III, and IV`,
                    `all of the above`,
                ],
                ans: "E"
            },
            {
                id: 29,
                question: `Carbon exists in the pure form as`,
                options: [
                    `Diamond and graphite`,
                    `Diamond and Coke`,
                    `Coke and Charcoal`,
                    `Charcoal and Graphite`,
                ],
                ans: "A"
            },
            {
                id: 30,
                question: `_____ is to diamond and _____ is to graphite`,
                options: [
                    `network octahedral structure and flat hexagonal structure`,
                    `flat hexagonal structure and network octahedral structure`,
                    `round octahedral structure and flux hexagonal structure`,
                    `flux hexagonal structure and round octahedral structure`,
                ],
                ans: "A"
            },
            {
                id: 31,
                question: `The allotrope of carbon that is soft and slippery is`,
                options: [
                    `diamond`,
                    `graphite`,
                    `fullerene`
                ],
                ans: "B"
            },
            {
                id: 32,
                question: `Graphite conducts electricity because`,
                options: [
                    `it has mobile electrons in its atoms`,
                    `it is soft and slippery`,
                    `it is insoluble`,
                    `it is hard`
                ],
                ans: "A"
            },
            {
                id: 33,
                question: `Graphite is used for the following except`,
                options: [
                    `used as inert electrodes during electrolysis`,
                    `used in nuclear reactors`,
                    `used in making lead pencils`,
                    `used in drilling rocks`
                ],
                ans: "D"
            },
            {
                id: 34,
                question: `Which of the following is <strong>not</strong> true?`,
                options: [
                    `graphite is harder and denser than diamond.`,
                    `graphite is a conductor while diamond is not.`,
                    `diamond forms octahedral crystals, while graphite forms hexagonal plates.`,
                    `diamond is transparent, while graphite is opaque.`
                ],
                ans: "A"
            },
        ] // making sense? a sense of progress
    },
    {
        topic: "atomic structure",
        questions: [
            {
                id: 1,
                question: "The periodic classification of the element is an arrangement of the elements in order of their",
                options: [
                    "atomic weight", 
                    "isotopic weights",
                    "molecular weights",
                    "atomic numbers",
                    "atom masses"
                ],
                image: null,
                ans: "D",
                userAnswer: null
            },
            {
                id: 2,
                question: "The nucleus of an atom contains",
                options: [
                    "protons only", 
                    "neutrons only",
                    "protons and electrons",
                    "neutrons and electrons",
                    "protons and neutrons"
                ],
                image: null,
                ans: "E",
                userAnswer: null
            },
            {
                id: 3,
                question: "Given the mean atomic mass of chlorine prepared in the laboratory to be 35.5 and isotopes of mass numbers 35 and 37, what is the percentage composition of the isotope of mass number 35",
                options: [
                    "20", 
                    "25",
                    "50",
                    "75",
                    "90"
                ],
                image: null,
                ans: "D",
                userAnswer: null
            },
            {
                id: 4,
                question: "An element X has 127 neutrons and 82 electrons.Its atomic number is",
                options: [
                    "209", 
                    "105",
                    "45",
                    "82",
                    "127"
                ],
                image: null,
                ans: "D",
                userAnswer: null
            },
            {
                id: 5,
                question: "Which of the following is the electronic configuration of sodium",
                options: [
                    eConfig("1s", 2, "2s", 2, "2p", 6, "3s", 2), 
                    eConfig("1s", 2, "2s", 2, "2p", 6, "3s", 2, "3p", 1),
                    eConfig("1s", 2, "2s", 2, "2p", 6, "3s", 1),
                    eConfig("1s", 2, "2s", 2, "2p", 6, "3s", 0),
                    eConfig("1s", 2, "2s", 2, "2p", 6, "3s", 2, "3p", 6, "4s", 1),
                ],
                image: null,
                ans: "C",
                userAnswer: null
            } ,
            {
                id: 6,
                question: "The mass number of an atom is",
                options: [
                    "the number of electrons in the nucleus of the atom", 
                    "the number of protons in the nucleus of the atom",
                    "the number of neutrons in the nucleus of the atom",
                    "the sum of number of electrons and protons in the nucleus of the atom",
                    "the sum of numbers of protons and neutrons in the nucleus of the atom"
                ],
                image: null,
                ans: "E",
                userAnswer: null
            },
            {
                id: 7,
                question: `And element has two isotopes ${isotope(20 ,10, "X")} and ${isotope(22, 10, "X")} present in the ration 1:3 the relative atomic mass`,
                options: [
                    "20.5", 
                    "21.0",
                    "21.5",
                    "22.5",
                    "22.0"
                ],
                image: null,
                ans: "C",
                userAnswer: null
            },
            {
                id: 8,
                question: `If an element has the electronic configuration ${eConfig("1s", 2, "2s", 2, "2p", 6, "3s", 2, "3p", 4)} it is`,
                options: [
                    "a metal", 
                    "an alkaline earth metal",
                    "an s-block",
                    "a p-block element",
                    "a transition element"
                ],
                image: null,
                ans: "D",
                userAnswer: null
            },
            {
                id: 9,
                question: `The mass of an atom is determined by`,
                options: [
                    "its ionization potential", 
                    "its electrochemical potential",
                    "the number of protons and electrons",
                    "the number of neutrons and protons",
                    "the number of neutrons and electrons"
                ],
                image: null,
                ans: "D",
                userAnswer: null
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
                image: null,
                ans: "C",
                userAnswer: null
            },
            {
                id: 11,
                question: `An element Z, contained 90% of ${isotope(16, 8, "Z")} and 10% of ${isotope(18, 8, "Z")}. Its relative atomic mass is`,
                options: [
                    "16.0", 
                    "16.2",
                    "17.0",
                    "17.8",
                ],
                image: null,
                ans: "B",
                userAnswer: null
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
                image: null,
                ans: "B",
                userAnswer: null
            },
            {
                id: 13,
                question: `Four elements P,Q,R, and S have atomic numbers of 4, 10, 12, and 14 respectively. Which of these elements is a noble gas`,
                options: [
                    "P", 
                    "Q",
                    "R",
                    "S",
                ],
                image: null,
                ans: "B",
                userAnswer: null
            },
            {
                id: 14,
                question: `How many valence electrons are contained in the element represented by ${isotope(31, 15, "P")}`,
                options: [
                    "3", 
                    "5",
                    "15",
                    "4",
                ],
                image: null,
                ans: "B",
                userAnswer: null
            },
            {
                id: 15,
                question: `The electronic configurationi of an element is ${eConfig("1s", 2, "2s", 2, "2p", 6, "3s", 2, "3p", 3)}. How many unpaired electrons are there in the element`,
                options: [
                    "3", 
                    "5",
                    "2",
                    "4",
                ],
                image: null,
                ans: "A",
                userAnswer: null
            },
            {
                id: 16,
                question: `Two atoms represented as ${isotope(235, 92, "U")} and ${isotope(238, 92, "U")} are`,
                options: [
                    "isomers", 
                    "allotropes",
                    "isotopes",
                    "anomers",
                ],
                image: null,
                ans: "C",
                userAnswer: null
            },
            {
                id: 17,
                question: `The number of electrons in the valence shell of an element of atomic number 14 is`,
                options: [
                    "1", 
                    "2",
                    "3",
                    "4",
                ],
                image: null,
                ans: "D",
                userAnswer: null
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
                image: null,
                ans: "D",
                userAnswer: null
            },
            {
                id: 19,
                question: `Oxygen is a mixture of two isotopes ${isotope(16, 8, "O")} and ${isotope(18, 8, "O")} with relative abundance of 90% and 10% respectively. The relative atomic mass of oxygen is`,
                options: [
                    "16.2", 
                    "16.0",
                    "17",
                    "18.0",
                ],
                image: null,
                ans: "A",
                userAnswer: null
            },
            {
                id: 20,
                question: `${eConfig("1s", 2, "2s", 2, "2p", 6, "3s", 2, "3p", 6, "4s", 2, "3d", 7)}. An element with this electronic configuration is`,
                options: [
                    "non-metal", 
                    "metal",
                    "transition element",
                    "group two element",
                ],
                image: null,
                ans: "C",
                userAnswer: null
            },
            {
                id: 21,
                question: `Four elements W,X,Y, and Z have atomic numbers 2, 6, 16, and 20 respectively. Which of these elements is a metal?`,
                options: [
                    "X", 
                    "W",
                    "Z",
                    "Y",
                ],
                image: null,
                ans: "C",
                userAnswer: null
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
                image: null,
                ans: "B",
                userAnswer: null
            },
            {
                id: 23,
                question: `The shape of the s-orbital is`,
                options: [
                    "spherical", 
                    "elliptical",
                    "spiral",
                    "circular",
                ],
                image: null,
                ans: "A",
                userAnswer: null
            },
            {
                id: 24,
                question: `Chlorine consisting of two isotopes of mass numbers 35 and 37 in the ratio 3:1 has an atomic mass of 35.5. Calculate the relative abundance of the isotope of mass number 37`,
                options: [
                    "20", 
                    "25",
                    "60",
                    "75",
                ],
                image: null,
                ans: "B",
                userAnswer: null
            },
            {
                id: 25,
                question: `The component of an atom that contributes least to its mass is the`,
                options: [
                    "nucleus", 
                    "neutron",
                    "electron",
                    "proton",
                ],
                image: null,
                ans: "C",
                userAnswer: null
            },
            {
                id: 26,
                question: `The element with the electronic configuration ${eConfig("1s", 2, "2s", 2, "2p", 3)}`,
                options: [
                    "oxygen", 
                    "chlorine",
                    "nitrogen",
                    "calcium",
                ],
                image: null,
                ans: "C",
                userAnswer: null
            },
            {
                id: 26,
                question: `How many electrons are in the L shell of ${isotope(31, 15, "P")}`,
                options: [
                    "2", 
                    "5",
                    "8",
                    "18",
                ],
                image: null,
                ans: "C",
                userAnswer: null
            },
            {
                id: 27,
                question: `If the electronic configuration of an element ${eConfig("1s", 2, "2s", 2, "2p", 5)}, how many upaired electrons are there`,
                options: [
                    "1", 
                    "2",
                    "4",
                    "5",
                ],
                image: null,
                ans: "A",
                userAnswer: null
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
                image: null,
                ans: "B",
                userAnswer: null
            },
            {
                id: 29,
                question: `The atom of an element X is represented as ${isotope("y", "z", "X")}. The basic chemical properties of X depends on the value of`,
                options: [
                    "Y", 
                    "Z",
                    "Y-Z",
                    "Z-Y",
                ],
                image: null,
                ans: "B",
                userAnswer: null
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
                image: null,
                ans: "D",
                userAnswer: null
            },
            {
                id: 31,
                question: `Which quantum number divides shell into orbitals`,
                options: [
                    "principal", 
                    "azimuthal",
                    "magnetic",
                    "spin",
                ],
                image: null,
                ans: "B",
                userAnswer: null
            },
            {
                id: 32,
                question: `How many unpaired electrons are there in the nitrogen sub-levels?`,
                options: [
                    "2", 
                    "1",
                    "0",
                    "3",
                ],
                image: null,
                ans: "D",
                userAnswer: null
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
                image: null,
                ans: "D",
                userAnswer: null
            },
            {
                id: 34,
                question: `An isotope has an atomic number of 15 and mass number of 31. The nunmber of protons it contains is`,
                options: [
                    "15", 
                    "46",
                    "31",
                    "16",
                ],
                image: null,
                ans: "A",
                userAnswer: null
            },
            {
                id: 35,
                question: `How many unpaired electrons are in the p-orbitals of a fluorine atom?`,
                options: [
                    "2", 
                    "3",
                    "0",
                    "1",
                ],
                image: null,
                ans: "D",
                userAnswer: null
            },
            {
                id: 36,
                question: `An element X has electronic configuration ${eConfig("1s", 2, "2s", 2, "2p", 6, "3s", 2, "3p", 5)}. Which of the following statement is correct about the element`,
                options: [
                    "it has 5 electrons in outer shell", 
                    "it belongs to group II of the periodic table",
                    "it is a halogen",
                    "it has a completely filled p-orbital",
                ],
                image: null,
                ans: "C",
                userAnswer: null
            },
            {
                id: 37,
                question: `How many protons, neutrons, and electrons respectively are present in the element ${isotope(60, 27, "Co")}?`,
                options: [
                    "33, 27, and 27", 
                    "27, 33, and 27",
                    "60, 33, and 60",
                    "27, 33, and 33",
                ],
                image: null,
                ans: "B",
                userAnswer: null
            },
            {
                id: 38,
                question: `silicon-containing ore has 92% ${isotope(28, "", "Si")}, 5% ${isotope(29, "", "Si")}, 3% ${isotope(30, "", "Si")}. Calculate the relative atomic mass of the silicon.`,
                options: [
                    "29.00", 
                    "11",
                    "28.11",
                    "14.00",
                ],
                image: null,
                ans: "C",
                userAnswer: null
            },
            {
                id: 39,
                question: `The relative atomic mass of a naturally occuring lithium consisting of 90% ${isotope(7.3, "", "Li")} and 10% ${isotope(6.3, "", "Li")} is`,
                options: [
                    "6.2", 
                    "6.8",
                    "7.2",
                    "6.9",
                ],
                image: null,
                ans: "C",
                userAnswer: null
            },
            {
                id: 40,
                question: `The number of the electronic shells contained in an atom with electronic configuration ${eConfig("1s", 2, "2s", 2, "2p", 6, "3s", 2, "3p", 6, "4s", 2)}`,
                options: [
                    "3", 
                    "2",
                    "4",
                    "5",
                ],
                image: null,
                ans: "C",
                userAnswer: null
            },
            {
                id: 41,
                question: `An isotope has an atomic number of 15 and mass number of 31. The number of protons it contains is`,
                options: [
                    "16", 
                    "15",
                    "31",
                    "46",
                ],
                image: null,
                ans: "B",
                userAnswer: null
            },
            {
                id: 42,
                question: `The atoms of four elements are represented as ${isotope("", 20, "Q")}, ${isotope("", 16, "R")}, ${isotope("", 10, "S")}, ${isotope("", 8, "T")}. Which of the elements would be unreactive?`,
                options: [
                    "Q", 
                    "R",
                    "S",
                    "T",
                ],
                image: null,
                ans: "C",
                userAnswer: null
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
                image: null,
                ans: "D",
                userAnswer: null
            },
            {
                id: 44,
                question: `How many unpaired electrons are in the p-orbital of a fluorine atom?`,
                options: [
                    "2", 
                    "3",
                    "0",
                    "1",
                ],
                image: null,
                ans: "D",
                userAnswer: null
            },
            {
                id: 45,
                question: `The size (diameters) of five atoms are in order R < T < W < Y, Y being largest if each has an electron situated on its circumference, and neglecting other factors, which of the atoms will lose its electrons most reluctantly`,
                options: [
                    "R", 
                    "T",
                    "W",
                    "Y",
                ],
                image: null,
                ans: "A",
                userAnswer: null
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
                image: null,
                ans: "C",
                userAnswer: null
            },
            {
                id: 47,
                question: `Sodium and Potassium belonog to the same group of the periodic table. This is because`,
                options: [
                    "both are metals", 
                    "both are soft and lighter than water",
                    "both form cations by losing electrons",
                    "both have identical electronic configuration",
                ],
                image: null,
                ans: "D",
                userAnswer: null
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
                image: null,
                ans: "D",
                userAnswer: null
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
                image: null,
                ans: "C",
                userAnswer: null
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
                image: null,
                ans: "A",
                userAnswer: null
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
                image: null,
                ans: "B",
                userAnswer: null
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
                image: null,
                ans: "D",
                userAnswer: null
            },
            {
                id: 53,
                question: `The electron configuratoins of 2 elements with similar chemical properties are represented by`,
                options: [
                    `${eConfig("1s", 2, "2s", 2)} and ${eConfig("1s", 2, "2s", 2, "2p", 4)}`,
                    `${eConfig("1s", 2, "2s", 2, "2p", 4)} and ${eConfig("1s", 2, "2s", 2, "2p", 6, "3s", 1)}`,
                    `${eConfig("1s", 2, "2s", 2, "2p", 6, "3s", 1)} and ${eConfig("1s", 2, "2s", 1)}`,
                    `${eConfig("1s", 2, "2s", 2, "2p", 4)} and ${eConfig("1s", 2, "2s", 1)}`,
                ],
                image: null,
                ans: "C",
                userAnswer: null
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
                image: null,
                ans: "D",
                userAnswer: null
            }, 
            {
                id: 55,
                question: `Which of the following electron configurations indicates an atom with the highest ionization energy`,
                options: [
                    `2,8,7`,
                    `2,8,8,1`,
                    `2,8,8,2`,
                    `2,8,8,7`,
                ],
                image: null,
                ans: "A",
                userAnswer: null
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
                image: null,
                ans: "B",
                userAnswer: null
            }, 
            {
                id: 57,
                question: `The distance between the nuclei of chlorine atoms in a chlorine molecule is 0.194nm. The atomic radius of chlorine atom is`,
                options: [
                    "0.097nm",
                    `0.914nm`,
                    `2.388nm`,
                    `4.203nm`,
                ],
                image: null,
                ans: "A",
                userAnswer: null
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
                image: null,
                ans: "D",
                userAnswer: null
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
                image: null,
                ans: "A",
                userAnswer: null
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
                image: null,
                ans: "C",
                userAnswer: null
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
                image: null,
                ans: "C",
                userAnswer: null
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
                image: null,
                ans: "D",
                userAnswer: null
            }, 
            {
                id: 63,
                question: `The most electropositive element among the following is?`,
                options: [
                    "Na",
                    `K`,
                    "Br",
                    `Ca`,
                ],
                image: null,
                ans: "B",
                userAnswer: null
            }, 
        ]
    },
    {
        // loading new questions
        topic: "chemical bonding",
        questions: [
            {
                id: 1,
                question: "When ammonia and hydrogen bond together to form ammonium ion, the bond formed is called",
                options: [
                    "Ionic bond", 
                    "electrovalent bond",
                    "covalent bond",
                    "co-ordinate bond",
                    "hydrogen bond"
                ],
                image: null,
                ans: "D",
                userAnswer: null
            }, 
            {
                id: 2,
                question: "Which of the following statements is true when the potassium atom forms its ion",
                options: [
                    "It gains one electron and becomes neutral", 
                    "its atomic number decreases",
                    "it achieves electronic configuration of argon",
                    "it loses one proton",
                    "it loses one neutron"
                ],
                image: null,
                ans: "C",
                userAnswer: null
            }, 
            {
                id: 3,
                question: "Helium atoms are chemically unreactive because",
                options: [
                    "there are no electrons around the nucleus", 
                    "the number of protons equals the number of electrons",
                    "there are equal number of protons and neutrons in the nucleus",
                    "the outermost electron shell is completely filled",
                    "the atoms contains only protons"
                ],
                image: null,
                ans: "D",
                userAnswer: null
            }, 
            {
                id: 4,
                question: "The boiling point of water is higher than methanol because",
                options: [
                    "water is an oxide while methanol is an alcohol", 
                    "inter-molecular forces in water are stronger than methanol",
                    "water is an ionic compound while methanol is a covalent compound",
                    "water is an inorganic compound while methanol is organic",
                    "water is more reactive than methanol"
                ],
                image: null,
                ans: "B",
                userAnswer: null
            }, 
            {
                id: 5,
                question: "Which of the following is NOT true of electrovalent compounds",
                options: [
                    "they are solids", 
                    "they do not vaporize easily",
                    "the elements forming the compounds normally have their valence eletrons in shared state",
                    "they conduct electricity",
                ],
                image: null,
                ans: "C",
                userAnswer: null
            }, 
            {
                id: 6,
                question: "The electronic configuration of elements X and Y are X = 2,8,6; Y = 2,8,7. The bond in the compound formed by X and Y is expected to be",
                options: [
                    "ionic", 
                    "covalent",
                    "dative covalent",
                    "metallic",
                    "none of the above",
                ],
                image: null,
                ans: "B",
                userAnswer: null
            }, 
            {
                id: 7,
                question: `Which of the following bonds exist in crystalline ammonium chloride (${formula("NH", 4, "Cl")})`,
                options: [
                    "ionic and covalent", 
                    "ionic, covalent, and co-ordinate covalent",
                    "ionic and co-ordinate covalent",
                    "covalent, co-ordinate and metallic",
                    "ionic, covalent, and metallic",
                ],
                image: null,
                ans: "B",
                userAnswer: null
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
                image: null,
                ans: "C",
                userAnswer: null
            }, 
            {
                id: 9,
                question: `The three dimensional shape of methane is`,
                options: [
                    "hexagonal", 
                    "trigonal",
                    "linear",
                    "tetrahedral",
                    "cubical",
                ],
                image: null,
                ans: "D",
                userAnswer: null
            }, 
            {
                id: 10,
                question: `${isotope(3, 1, "R")}, ${isotope(19, 9, "U")}, ${isotope(24,12,"S")}, ${isotope(20, 10, "T")}, ${isotope(19, 7, "Y")}. Which of the following statements is NOT true of the elements R, U, S, T, Y?`,
                options: [
                    "R is an isotope of hydrogen", 
                    "U and Y are isotopes",
                    "T is a noble gas",
                    "S will react with oxygen to form SO",
                ],
                image: null,
                ans: "B",
                userAnswer: null
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
                image: null,
                ans: "B",
                userAnswer: null
            }, 
            {
                id: 12,
                question: `The atomic numbers of two elements X and Y are 12 and 9 respectively. The compound formed between the atoms of these two elements is`,
                options: [
                    "ionic", 
                    "covalent",
                    "neutral",
                    "co-ordinate",
                ],
                image: null,
                ans: "A",
                userAnswer: null
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
                image: null,
                ans: "B",
                userAnswer: null
            }, 
            {
                id: 14,
                question: `The forces holding naphthalene crystal together can be overcome when naphthalene is heated to a temperature of 354K resulting in the crystals melting. These forces are known as`,
                options: [
                    "columbic", 
                    "ionic",
                    "covalent",
                    "van der waals",
                ],
                image: null,
                ans: "D",
                userAnswer: null
            }, 
            {
                id: 15,
                question: `A metallic ion ${ion("X", 2, "+")} with an inert gas structure contains 18 electrons. How many protons are there in this ion`,
                options: [
                    "20", 
                    "18",
                    "16",
                    "2",
                ],
                image: null,
                ans: "A",
                userAnswer: null
            }, 
            {
                id: 16,
                question: `What are the potential oxidation numbers for an element if its atomic number is 17?`,
                options: [
                    "-1 and 7", 
                    "-1 and 6",
                    "3 and 5",
                    "-2 and 6",
                ],
                image: null,
                ans: "A",
                userAnswer: null
            }, 
            {
                id: 17,
                question: `Elements X and Y have electronic configurations ${eConfig("1s", 2, "2s", 2, "2p", 4)} and ${eConfig("1s", 2, "2s", 2, "2p", 6, "3s", 2, "3p", 1)} respectively. When they combine, the formula of the compound formed is`,
                options: [
                    "XY", 
                    "YX",
                    `${formula("X", 2, "Y", 3)}`,
                    `${formula("X", 3, "Y", 2)}`,
                ],
                image: null,
                ans: "D",
                userAnswer: null
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
                image: null,
                ans: "A",
                userAnswer: null
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
                image: null,
                ans: "A",
                userAnswer: null
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
                image: null,
                ans: "C",
                userAnswer: null
            }, 
            {
                id: 21,
                question: `How many lone pairs of electron are there on the central atom of the central atom of the ${formula("H", 2, "O")} molecules?`,
                options: [
                    "1", 
                    "2",
                    `3`,
                    `4`,
                ],
                image: null,
                ans: "C",
                userAnswer: null
            }, 
            {
                id: 22,
                question: `An element, E, has the electronic configuration ${eConfig("1s", 2, "2s", 2, "2p", 6, "3s", 2, "3p", 3)}. The reaction of E with a halogen X can give.`,
                options: [
                    `${formula("EX", 3)} and ${formula("EX", 5)}`,
                    `${formula("EX", 3)} only`,
                    `${formula("EX", 5)} only`,
                    `${formula("EX", 2)} and ${formula("EX", 3)}`,
                ],
                image: null,
                ans: "A",
                userAnswer: null
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
                image: null,
                ans: "B",
                userAnswer: null
            }, 
            {
                id: 24,
                question: `Which group of elements forms hydrides that are pyramidal in structure?`,
                options: [
                    `III`,
                    `IV`,
                    `V`,
                    `VI`,
                ],
                image: null,
                ans: "C",
                userAnswer: null
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
                image: null,
                ans: "A",
                userAnswer: null
            }, 
            {
                id: 26,
                question: `Elements X, Y and Z belongs to groups I, V, and VII respectively. Which of the following is TRUE about the bond types of XZ and YZ.`,
                options: [
                    `both are electrovalent`,
                    `both are covalent`,
                    `XY is electrovalent and YZ is covalent`,
                    `XZ is covalent and ${formula("YZ", 3)}`,
                ],
                image: null,
                ans: "C",
                userAnswer: null
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
                image: null,
                ans: "B",
                userAnswer: null
            }, 
            {
                id: 28,
                question: `Two elements, P and Q with atomic numbers 11 and 8 respectively, combine chemically to form the compound P<sub>x</sub>R<sub>y</sub>. The respective values of x and y are`,
                options: [
                    `1 and 1`,
                    `1 and 2`,
                    `2 and 1`,
                    `3 and 1`,
                ],
                image: null,
                ans: "C",
                userAnswer: null
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
                image: null,
                ans: "A",
                userAnswer: null
            }, 
            {
                id: 30,
                question: `The electronic configuration of <sub>22</sub>X<sup>2+</sup> ion is`,
                options: [
                    `${eConfig("1s", 2, "2s", 2, '2p', 6, "3s", 2, "3p", 6, "4s", 2, "3d", 2)}`,
                    `${eConfig("1s", 2, "2s", 2, '2p', 6, "3s", 2, "3p", 6, "4s", 2, "3d", 1)}`,
                    `${eConfig("1s", 2, "2s", 2, '2p', 6, "3s", 2, "3p", 6, "4s", 2)}`,
                    `${eConfig("1s", 2, "2s", 2, '2p', 6, "3s", 2, "3p", 6)}`,
                ],
                image: null,
                ans: "C",
                userAnswer: null
            }, 
            {
                id: 31,
                question: `Which of the following types of bonding does not involve the formation of new substances`,
                options: [
                    "covalent", 'metallic', "co-ordinate", "electrovalent"
                ],
                image: null,
                ans: "B",
                userAnswer: null
            }, 
            {
                id: 32,
                question: `The shapes of ${formula("CO", 2)} ${formula("H", 2, "O")}, and ${formula("CH", 4)} respectively are`,
                options: [
                    "bent, linear, and tetrahedral", 
                    "bent, tetrahedral, and linear",
                    "linear, bent, and tetrahedral",
                    "tetrahedral, linear, and bent"
                ],
                image: null,
                ans: "C",
                userAnswer: null
            }, 
            {
                id: 33,
                question: `A particle that contains 9 protons, 10 neutrons and 10 electrons is`,
                options: [
                    "positive ion", 
                    "neutral atom of a metal",
                    "neutral atom of a non-metal",
                    "negative ion"
                ],
                image: null,
                ans: "D",
                userAnswer: null
            }, 
            {
                id: 34,
                question: `Which of the following chlorides would exhibit the least ionic character?`,
                options: [
                    "LiCl", 
                    `${formula("MgCl", 2)}`,
                    `${formula("CaCl", 2)}`,
                    `${formula("AlCl", 3)}`
                ],
                image: null,
                ans: "D",
                userAnswer: null
            }, 
            {
                id: 35,
                question: `Neutral atoms of neon with atomic number 10 have the same number of electrons as`,
                options: [
                    `${ion("O", 2, "-")}`, 
                    `${ion("Ca", 2, "+")}`,
                    `${ion("K", "+", "")}`,
                    `${ion("Mg", "+", "")}`
                ],
                image: null,
                ans: "A",
                userAnswer: null
            }, 
            {
                id: 36,
                question: `The noble gases owe their inactivity to`,
                options: [
                    "octet configuration",
                    "cyclic shape",
                    "hexagonal shape",
                    "obtuse configuration"
                ],
                image: null,
                ans: "A",
                userAnswer: null
            }, 
            {
                id: 37,
                question: `The weakest attractive forces that can be observed between two molecules is`,
                options: [
                    "ionic",
                    "covalent",
                    "coordinate covalent",
                    "van der waals"
                ],
                image: null,
                ans: "D",
                userAnswer: null
            }, 
            {
                id: 38,
                question: `An electron can be added to a halogen atom to form a halide ion with`,
                options: [
                    "8 valence electrons",
                    "7 valence electrons",
                    "2 valence electrons",
                    "3 valence electrons"
                ],
                image: null,
                ans: "A",
                userAnswer: null
            }, 
            {
                id: 39,
                question: `The property of chlorine which cause hydrogen chloride to be more ionic than the chlorine molecule is its.`,
                options: [
                    "electronegativity",
                    "electropositivity",
                    "electron affinity",
                    "electrovalency"
                ],
                image: null,
                ans: "A",
                userAnswer: null
            }, 
            {
                id: 40,
                question: `What is the valence shell electron configuration of the element with atomic number 17?`,
                options: [
                    `${eConfig("1s", 2, "2s", 2, "2p", 6, "3s", 2, '3p', 4)}`,
                    `${eConfig("1s", 2, "2s", 2, "2p", 6, "3s", 2, '3p', 5)}`,
                    `${eConfig("3s", 2, '3p', 5)}`,
                    `${eConfig("2s", 2, "2p", 6)}`,
                ],
                image: null,
                ans: "C",
                userAnswer: null
            }, 
            {
                id: 41,
                question: `An element will readily form an electrovalent compound if its electron configuration is`,
                options: [
                    `2:8:8`,
                    `2:8:4`,
                    `2:8:5`,
                    `2:8:1`
                ],
                image: null,
                ans: "D",
                userAnswer: null
            }, 
            {
                id: 42,
                question: `The shape of the hydrocarbon compound ${formula("CH",4)} is`,
                options: [
                    `square`,
                    `planar`,
                    `tetrahedral`,
                    `planar`,
                    `linear`
                ],
                image: null,
                ans: "C",
                userAnswer: null
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
                image: null,
                ans: "D",
                userAnswer: null
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
                image: null,
                ans: "A",
                userAnswer: null
            }, 
            {
                id: 45,
                question: `A metal X forms two bromides with the formulae ${formula("XBr", 2)} and ${formula("XBr", 3)}. What type of bonding exist between X and bromine in the bromides`,
                options: [
                    `metallic bonding`,
                    `ionic bonding`,
                    `covalent bonding`,
                    `dative bonding`,
                ],
                image: null,
                ans: "B",
                userAnswer: null
            }, 
            {
                id: 46,
                question: `If an atom is represented as ${isotope(23, 11, "X")}, which of the following deduction is correct?`,
                options: [
                    `it contains 12 protons`,
                    `it forms a covalent chloride`,
                    `its atomic number is 23`,
                    `it is an alkali metal`,
                ],
                image: null,
                ans: "D",
                userAnswer: null
            }, 
            {
                id: 47,
                question: `The type of bonding in [Cu${formula("NH", 3)}<sub>4</sub>]<sup>2+</sup> is`,
                options: [
                    `coordinate`,
                    `electrovalent`,
                    `metallic`,
                    `covalent`,
                ],
                image: null,
                ans: "A",
                userAnswer: null
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
                image: null,
                ans: "C",
                userAnswer: null
            }, 
            {
                id: 49,
                question: `The number of lone pair of electrons in water molecule is`,
                options: [
                    `2`,
                    `4`,
                    `3`,
                    `1`,
                ],
                image: null,
                ans: "A",
                userAnswer: null
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
                image: null,
                ans: "D",
                userAnswer: null
            }, 
            {
                id: 51,
                question: `The type of chemical bond that exists between potassium and oxygen in potassium oxide is`,
                options: [
                    `ionic`,
                    `metallic`,
                    `covalent`,
                    `dative`,
                ],
                image: null,
                ans: "A",
                userAnswer: null
            }, 
            {
                id: 52,
                question: `The atom of an element x has six electrons in its outermost shell. What is the formula of the compound formed when x combines with aluminium (${isotope("", 13, "Al")})`,
                options: [
                    `${formula("AlX", 2)}`,
                    `${formula("Al", 2, "X")}`,
                    `${formula("Al", 2, "X", 2)}`,
                    `${formula("Al", 2, "X", 3)}`,
                ],
                image: null,
                ans: "D",
                userAnswer: null
            }, 
            {
                id: 53,
                question: `The shapes of ${formula("CO", 2)}, ${formula("H", 2, "O")}, and ${formula("CH", 4)} respectively are`,
                options: [
                    `bent, linear, and tetrahedral`,
                    `bent, tetrahedral, and linear`,
                    `tetrahedral, linear, and bent`,
                    `linear, bent, and tetrahedral`,
                ],
                image: null,
                ans: "D",
                userAnswer: null
            }, 
            {
                id: 54,
                question: `Among the following the maximum covalent character is shown by the compound`,
                options: [
                    `${formula('MgCl', 2)}`,
                    `${formula("FeCl", 2)}`,
                    `${formula("SnCl", 2)}`,
                    `${formula("AlCl", 3)}`
                ],
                image: null,
                ans: "D",
                userAnswer: null
            }, 
            {
                id: 55,
                question: `Which combination of atoms can form a polar covalent bond?`,
                options: [
                    `H and Br`,
                    `H and H`,
                    `Na and Br`,
                    `N and N`
                ],
                image: null,
                ans: "A",
                userAnswer: null
            }, 
            {
                id: 56,
                question: `The total number of bonded electrons in an ammonia molecule is?`,
                options: [
                    `6`,
                    `8`,
                    `10`,
                    `12`
                ],
                image: null,
                ans: "A",
                userAnswer: null
            }, 
            {
                id: 57,
                question: `An oxonium ion contains the following pairs of bonds`,
                options: [
                    `covalent and dative`,
                    `covalent and ionic`,
                    `van der waals and covalent`,
                    `hydrogen and dative`
                ],
                image: null,
                ans: "A",
                userAnswer: null
            }, 
            {
                id: 58,
                question: `How many bond pairs are present in water molecule?`,
                options: [
                    `1`,
                    `2`,
                    `3`,
                    `4`,
                ],
                image: null,
                ans: "B",
                userAnswer: null
            }, 
        ]
    }
]
