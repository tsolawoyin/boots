// To be turned on only when changes want to be made.
import { exp, formula, units, ion, eConfig, isotope } from "./helpers.js";
// making sense.
// chemical calculation requires modifying...
let chemistryQuestions = [
  {
    topic: "Descriptive Chemistry",
    questions: [
      {
        id: 1,
        question: "Why is hydrogen gas not found in the atmosphere?",
        options: [
          `It readily reacts with carbon(IV) oxide`,
          `It readily reacts with oxygen`,
          `It readily reacts with nitrogen`,
          `It readily reacts with carbon(II) oxide`,
        ],
        ans: "B",
      },
      {
        id: 2,
        question:
          "Which of the following metals reacts with water only in the form of steam to liberate hydrogen gas?",
        options: [`Sodium`, `Iron`, `Copper`, `Calcium`],
        ans: "B",
      },
      {
        id: 3,
        question:
          "Which of the following oxides remains unchanged when heated in hydrogen",
        options: [
          `${formula("PbO")}`,
          `${formula("Fe", 2, "O", 3)}`,
          `${formula("CuO")}`,
          `${formula("ZnO")}`,
        ],
        ans: "D",
      },
      {
        id: 4,
        question:
          "All the following metals can displace hydrogen from water or steam except",
        options: [`sodium`, `calcium`, `iron`, `copper`],
        ans: "D",
      },
      {
        id: 5,
        question:
          "Why is helium preferred to hydrogen in filling ballons? Hydrogen",
        options: [
          `exhibits isotopy`,
          `is a component of water`,
          `is diatomic`,
          `is inflammable`,
        ],
        ans: "D",
      },
      {
        id: 6,
        question:
          "By what means is carbon(IV) oxide produced along with hydrogen removed from the mixture in the industrial preparation of hydrogen from natural gas? This is by passing the mixture through",
        options: [
          `phosphorus(V) oxide`,
          `ammoniacal copper(I) chloride`,
          `lime-water`,
          `pyrogallol`,
        ],
        ans: "C",
      },
      {
        id: 7,
        question:
          "Which of the following metals reacts with steam reversibly only when red-hot?",
        options: [`copper`, `iron`, `calcium`, `sodium`],
        ans: "B",
      },
      {
        id: 8,
        question:
          "Sodium metal is easier to cut with a knife than calcium metal because",
        options: [
          `calcium atoms in the metal are rather strong`,
          `sodium has a weaker metallic bond`,
          `sodium atoms in the metal are rather soft`,
          `sodium has atoms that are not closely packed`,
        ],
        ans: "B",
      },
      {
        id: 9,
        question:
          "An element that is a soft, slivery white solid and reacts violently with cold water is likely to belong to",
        options: [`group I`, `group IV`, `group VI`, `group VII`],
        ans: "A",
      },
      {
        id: 10,
        question: "Which of the following statement is correct?",
        options: [
          `Zinc heated to redness reacts with steam to give oxygen and zinc oxide`,
          `Zinc heated to redness reacts with steam to give hydrogen and zinc oxide`,
          `Zinc does not react with steam`,
          `Zinc reacts with hot water to form zinc oxide and hydrogen`,
        ],
        ans: "B",
      },
      {
        id: 11,
        question: "The following compounds are decomposed by heat except",
        options: [
          `sodium trioxocarbonate(IV)`,
          `ammonium trioxocarbonate(IV)`,
          `sodium hydrogen trioxocarbonate(IV)`,
          `calcium trioxocarbonate(IV)`,
        ],
        ans: "A",
      },
      {
        id: 12,
        question: `Apart from water, the other product(s) of the neutralization reaction between NaOH solution and nitrogen(IV) oxide (${formula(
          "NO",
          2
        )}) is/are`,
        options: [
          `${formula("NaNO", 2)}`,
          `${formula("NaNO", 3)}`,
          `${formula("NaNO", 3)} and ${formula("HNO", 3)}`,
          `${formula("NaNO", 2)} and ${formula("NaNO", 3)}`,
        ],
        ans: "D",
      },
      {
        id: 13,
        question: `All the following are raw materials in the Solvay process except`,
        options: [
          `sodium chloride`,
          `calcium trioxocarbonate(IV)`,
          `ammonia`,
          `sodium trioxocarbonate`,
        ],
        ans: "D",
      },
      {
        id: 14,
        question: `The reaction between a liquid substance M and sodium trioxocarbonate(IV) gives a gas which turns calcium hydroxide milky. Therefore M is`,
        options: [
          `an acid`,
          `${formula("Na", 2, "SO", 4, "aq")}`,
          `${formula("KI", "aq")}`,
          `an alkali`,
        ],
        ans: "A",
      },
      {
        id: 15,
        question: `Which of the following in solution will give limewater used in the laboratory for the detection of carbon(IV) oxide?`,
        options: [
          `${formula("CaSO", 4, "s")}`,
          `${formula("Ca", `(${formula("HCO", 3)})`, 2, "s")}`,
          `${formula("Ca", `(${formula("OH")})`, 2, "s")}`,
          `${formula("CaCO", 3)}`,
        ],
        ans: "C",
      },
      {
        id: 16,
        question: `A compound gives a white precipitate with acidified barium chloride solution and a lilac flame colouration. The compound is likely to`,
        options: [
          `${formula("K", 2, "SO", 4)}`,
          `${formula("KCl")}`,
          `${formula("CaSO", 4)}`,
          `${formula("NaNO", 3)}`,
        ],
        ans: "A",
      },
      {
        id: 17,
        question: `One of the following is used in the manufacture of glass`,
        options: [
          `sodium trioxonitrate(V)`,
          `sodium bromide`,
          `sodium chloride`,
          `sodium trioxocarbonate(IV)`,
        ],
        ans: "D",
      },
      {
        id: 18,
        question: `What is the product formed when carbon(IV) oxide is passed into limewater for a long time`,
        options: [
          `${formula("CaC", 2)}`,
          `${formula("CaCO", 3)}`,
          `${formula("Ca", `(${formula("HCO", 3)})`, 2, "s")}`,
          `${formula("CaO")}`,
        ],
        ans: "C",
      },
      {
        id: 19,
        question: `When mortar sets, the compound formed is`,
        options: [
          `${formula("Ca", `(${formula("OH")})`, 2, "s")}`,
          `${formula("CaCO", 3)}`,
          `${formula("Ca", `(${formula("NO", 3)})`, 2, "s")}`,
          `${formula("CaCl", 2)}`,
        ],
        ans: "B",
      },
      {
        id: 20,
        question: `Which of the following processes is represented by the equation below 
          <br /> 
          ${formula("CaO", "s")} + ${formula("H", 2, "O", "l")} -> ${formula(
          "Ca",
          `(${formula("HCO", 3)})`,
          2,
          "s"
        )}`,
        options: [`Mortaring`, `Dissolution`, `Slaking`, `Liming`],
        ans: "C",
      },
      {
        id: 21,
        question: `Which one of the following raw materials would be required for the smelting of iron ore in a blast furnace?`,
        options: [
          `${formula("CaCO", 3)}`,
          `${formula("Zn", `(${formula("NO", 3)})`, 2)}`,
          `${formula("Cu", "SO", 4)}`,
          `${formula("AlCl", 3)}`,
        ],
        ans: "A",
      },
      {
        id: 22,
        question: `All of the following can be deduced from the electronic configuration of a transition metal except`,
        options: [
          `possession of magnetic property`,
          `ability to form complex ions`,
          `variable oxidation states`,
          `boiling point of the metal`,
        ],
        ans: "D",
      },
      {
        id: 23,
        question: `The function of limestone in the extraction of iron in the blast furnace is`,
        options: [
          `reduction of the iron ore`,
          `removal of impurities`,
          `provision of ${formula("CO", 2)} for the process`,
          `catalysis of the reaction involved`,
        ],
        ans: "B",
      },
      {
        id: 24,
        question: `Why is copper(II) tetraoxosulphate(VI) often added to swimming pools? It`,
        options: [
          `prevent the growth of algae`,
          `coagulates suspended particles`,
          `neutralizes dissolved gases in water`,
          `reacts with any excess chlorine present`,
        ],
        ans: "A",
      },
      {
        id: 25,
        question: `Extraction of aluminum from its ore is by`,
        options: [
          `floatation`,
          `electrolysis`,
          `roasting`,
          `reduction with coke`,
        ],
        ans: "B",
      },
      {
        id: 26,
        question: `What will happen if a few drops of dilute HCl are added to the complex formed in the equation below
          <br />
          ${formula(ion("Cu", 2, "+"), "aq")} + 4 ${formula(
          "NH",
          3
        )} -> ${formula(
          ion(formula("Cu", `(${formula("NH", 3)})`, 4), "2", "+"),
          "aq"
        )}`,
        options: [
          `The deep color of the complex will appear deeper`,
          `The deep color of the complex will remain unchanged`,
          `The deep color of the complex will become colorless`,
          `The deep color of the complex will be lighter`,
        ],
        ans: "D",
      },
      {
        id: 27,
        question: `In the blast furnace, during the extraction of iron, slag is produced using`,
        options: [`carbon`, `sulfur`, `cryolite`, `limestone`],
        ans: "D",
      },
      {
        id: 28,
        question: `All of the following reactions take place in the smelting of iron in a blast furnace except`,
        options: [
          `${formula("CO", 2, "g")} + ${formula("CaO", "s")} -> ${formula(
            "CaCO",
            3,
            "s"
          )}`,
          `${formula("CO", 2, "g")} + ${formula("C", "s")} -> ${formula(
            "CO",
            "g"
          )}`,
          `${formula("C", "s")} + ${formula("O", 2)} -> ${formula(
            "CO",
            2,
            "g"
          )}`,
          `${formula("CaCO", 3, "s")} -> ${formula("CaO", "s")} + ${formula(
            "CO",
            2,
            "g"
          )}`,
        ],
        ans: "A",
      },
      {
        id: 29,
        question: `What is the role of cryolite in the electrolytic extraction of aluminium from bauxite?`,
        options: [
          `It makes aluminium purer`,
          `It protects the carbon electrodes used in the process`,
          `It makes bauxite a better conductor of electricity`,
          `It prevents aluminum from getting oxidized`,
        ],
        ans: "C",
      },
      {
        id: 30,
        question: `Which of the following colours is imparted by calcium ion to a flame`,
        options: [`lilac`, `yellow`, `blue`, `brick red`],
        ans: "D",
      },
      {
        id: 31,
        question: `Why does iron displace copper ions from a solution of copper(II) salt in the following reaction <br />
          ${formula("Fe", "s")} + ${ion("Cu", "2+")} -> ${ion(
          "Fe",
          2,
          "+"
        )} + ${formula("Cu", "s")}`,
        options: [
          `Iron is higher in the electrochemical series from copper`,
          `Copper metal has more electrons than iron metal`,
          `Iron is in the metallic form while copper is in the ionic form`,
          `The atomic weight of copper is greater than that of iron`,
        ],
        ans: "A",
      },
      {
        id: 32,
        question: `Which of the following metals would be in passive state when treated with conc. nitric acid`,
        options: [`Zinc`, `Sodium`, `Tin`, `Iron`],
        ans: "D",
      },
      {
        id: 33,
        question: `What is the major component of the slag obtained during the production of iron in the blast furnace?`,
        options: [
          `Impure iron`,
          `Calcium trioxosilicate(IV)`,
          `Coke`,
          `An alloy of calcium and iron`,
        ],
        ans: "B",
      },
      {
        id: 34,
        question: `Which of the following is the solvent for dissolving bauxite in order to remove impurities in the electrolytic extraction of aluminium?`,
        options: [
          `sodium hydroxide`,
          `deionized water`,
          `aqeuous ammonia`,
          `acidified water`,
        ],
        ans: "A",
      },
      {
        id: 35,
        question: `In which of the following pairs of metals are the two members extracted by electrolysis`,
        options: [
          `copper and zinc`,
          `lead and calcium`,
          `magnesium and zinc`,
          `magnesium and calcium`,
        ],
        ans: "D",
      },
      {
        id: 36,
        question: `Aluminum and iron can both`,
        options: [
          `show oxidation states of +2 and +3`,
          `form soluble hydroxides`,
          `be extracted by reduction methods`,
          `form only basic oxides`,
        ],
        ans: "C",
      },
      {
        id: 37,
        question: `The oxide of which of the following elements will be soluble in both HCl and NaOH solutions to form salts?`,
        options: [`Mn`, `Ag`, `Al`, `Hg`],
        ans: "C",
      },
      {
        id: 38,
        question: `Which of the following can exhibit corrosion`,
        options: [
          `metals below hydrogen in the electrochemical series`,
          `iron only`,
          `all metals`,
          `electropositive metals`,
        ],
        ans: "C",
      },
      {
        id: 39,
        question: `A metal whose oxide is used for the production of colored glass is`,
        options: [`cobalt`, `zinc`, `barium`, `potassium`],
        ans: "A",
      },
      {
        id: 40,
        question: `What happens when a piece of charcoal enclosed in a cylinder containing air is ignited?`,
        options: [
          `The total volume of air is increased`,
          `The relative amount of nitrogen is decreased`,
          `The relative amount of oxygen present is increased`,
          `The relative amount of carbon(IV) oxide is increased`,
        ],
        ans: "D",
      },
      {
        id: 41,
        question: `Which of the following salts does not dissolve readily in cold water`,
        options: [
          `${formula("CaCl", 2)}`,
          `${formula("PbSO", 4)}`,
          `${formula(`(${formula("NH", 4)})`, 2, "SO", 4)}`,
          `${formula("Na", 2, "CO", 3)}`,
        ],
        ans: "B",
      },
      {
        id: 42,
        question: `The following tests can be used to distinguish carbon(II) oxide from carbon(IV) oxide except`,
        options: [
          `observing their color and odor`,
          `passing each gas into water and testing with litmus`,
          `passing each gas over heated copper(I) oxide`,
          `passing each gas through freshly prepared lime water`,
        ],
        ans: "A",
      },
      {
        id: 43,
        question: `Which of the following mixtures is the producer gas?`,
        options: [
          `${formula("CO", 2)} and ${formula("H", 2)}`,
          `${formula("CO", 2)} and ${formula("N", 2)}`,
          `${formula("CO")} and ${formula("H", 2)}`,
          `${formula("CO")} and ${formula("N", 2)}`,
        ],
        ans: "D",
      },
      {
        id: 44,
        question: `Which of the following does not readily react with concentrated trioxonitrate(V) acid`,
        options: [`Copper`, `Zinc`, `Iron`, `Tin`],
        ans: "C",
      },
      {
        id: 45,
        question: `What is the role of concentrated tetraoxosulfate(VI) acid in the preparation of carbon(II) oxide by heating ethanedioc acid with concentrated tetraoxosulphate(VI) oxide`,
        options: [
          `A dehydrating agent`,
          `A reaction medium`,
          `A catalyst`,
          `A reducing agent`,
        ],
        ans: "A",
      },
      {
        id: 46,
        question: `The white solid that gives a colorless neutral gas that burns with a sooty flame is`,
        options: [
          `sodium tetraoxosulphate(VI)`,
          `calcium carbide`,
          `calcium oxide`,
          `magnesium oxide`,
        ],
        ans: "B",
      },
      {
        id: 47,
        question: `The following statements are correct except`,
        options: [
          `Carbon(IV) oxide is soluble in water`,
          `Lead has a higher atomic weights than copper`,
          `Nitrogen gas is insoluble in water`,
          `Sodium metal dissolves in water giving oxygen`,
        ],
        ans: "D",
      },
      {
        id: 48,
        question: `The following statements are true of carbon(II) oxide except`,
        options: [
          `CO is readily oxidized at room temperature by air to form ${formula(
            "CO",
            2
          )}`,
          `CO may be prepared by reducing ${formula(
            "CO",
            2
          )} mixed with coke heated to about 1000&deg;C`,
          `CO is poisonous`,
          `CO is a good reducing agent`,
        ],
        ans: "A",
      },
      {
        id: 49,
        question: `In which of the following pairs oxides will each of the two members further react with oxygen to form a higher oxide?`,
        options: [
          `${formula("CO", 2)} and ${formula("H", 2, "0")}`,
          `${formula("SO", 2)} and ${formula("NO")}`,
          `${formula("NO")} and ${formula("CO", 2)}`,
          `${formula("CO")} and ${formula("CO", 2)}`,
        ],
        ans: "B",
      },
      {
        id: 50,
        question: `The compound used in fire extinguishers is?`,
        options: [
          `sulphur(IV) oxide`,
          `carbon(II) oxide`,
          `ammoina`,
          `carbon(IV) oxide`,
        ],
        ans: "D",
      },
      {
        id: 51,
        question: `In which of the following processes does coal give coal gas, coal tar, ammoniacal liquor and coke`,
        options: [
          `liquefaction`,
          `steam distillation`,
          `destructive distillation`,
          `hydrolysis`,
        ],
        ans: "C",
      },
      {
        id: 52,
        question: `Why should coal fire not be used in poorly ventilated rooms? This is because`,
        options: [
          `of the accumulation of ${formula("CO", 2)} which causes deep sleep`,
          `of the accumulation of ${formula("CO")} which causes suffocation`,
          `it removes most of the gases in the rooms`,
          `it usually too hot`,
        ],
        ans: "B",
      },
      {
        id: 53,
        question: `What happens when the trioxonitrate(V) of potassium, magnesium, and silver are heated?`,
        options: [
          `All of the trioxonitrate(V) salts decompose to their oxides`,
          `The trioxonitrate(V) salt of magnesium gives the dioxonitrate(III) salt and oxygen`,
          `The trioxonitrate(V) salts of magnesium and silver give their oxides`,
          `Only silver trioxonitrate(V) gives the free element`,
        ],
        ans: "D",
      },
      {
        id: 54,
        question: `All the following compounds will give oxygen gas on heating except`,
        options: [
          `manganese(IV) oxide`,
          `hydrogen peroxide`,
          `zinc trioxonitrate(V)`,
          `sodium trioxonitrate(V)`,
        ],
        ans: "A",
      },
      {
        id: 55,
        question: `Silver trioxonitrate(V) on heating gives`,
        options: [
          `Ag, ${formula("N", 2, "O")} and ${formula("O", 2)}`,
          `${formula("Ag", 2, "O")}, ${formula("N", 2)} and ${formula("O", 2)}`,
          `${formula("Ag", 2, "O")} and ${formula("NO", 2)}`,
          `${formula("Ag")}, ${formula("NO", 2)} and ${formula("O", 2)}`,
        ],
        ans: "D",
      },
      {
        id: 56,
        question: `Why is the round-bottomed flask used in the laboratory preparation of ammonia slanted?`,
        options: [
          `so that ammonia will dissolve in water`,
          `so that the reaction will proceed faster`,
          `so that ammonia can displace air`,
          `so that the water produced does not flow back to break the flask`,
        ],
        ans: "D",
      },
      {
        id: 57,
        question: `The laboratory preparation of trioxonitrate(V) acid involves:`,
        options: [
          `heating a mixture of ammonia gas and oxygen`,
          `heating ammonium trioxonitrate(V) with tetraoxosulphate(VI) acid`,
          `heating ammonia gas with tetraoxosulphate(VI) acid`,
          `heating sodium trioxonitrate(V) with tetraoxosulphate(VI) acid`,
        ],
        ans: "D",
      },
      {
        id: 58,
        question: `Which of the following gases is formed when ammonium trioxonitrate(V) is heated with sodium hydroxide`,
        options: [`Oxygen`, `Ammonia`, `Nitrogen(IV) oxide`, `Hydrogen`],
        ans: "B",
      },
      {
        id: 59,
        question: `How can a gas liberated as a result of the reaction between ammonium tetraoxosulphate(VI) and calcium hydroxide be collected dry?`,
        options: [
          `By passing it directly through calcium chloride`,
          `By bubbling it through conc. ${formula("H", 2, "SO", 4)}`,
          `By bubbling it through water and then passing it through calcium oxide`,
          `By passing it directly through calcium oxide`,
        ],
        ans: "D",
      },
      {
        id: 60,
        question: `A metallic element is produced as the major product in`,
        options: [
          `burning sulfur in excess air`,
          `passing a stream of hydrogen over heated lead(II) oxide`,
          `heating copper(II) trioxocarbonate(IV) strongly`,
          `reaction of concentrated trioxonitrate(V) acid with copper`,
        ],
        ans: "B",
      },
      {
        id: 61,
        question: `Determination of the proportion of oxygen in air can be done by passing a given volume of air through`,
        options: [
          `lime water`,
          `alkaline pyrogallol solution`,
          `${formula("FeSO", 4)} solution`,
          `conc. ${formula("H", "SO", 4)}`,
        ],
        ans: "B",
      },
      {
        id: 62,
        question: `The solution that gives a white precipitate with acidified barium chloride solution and a green color to flame test is`,
        options: [
          `${formula(`${formula("NH", 4)}`, 2, "SO", 4)}`,
          `${formula("CaCl", 2)}`,
          `${formula("CuSO", 4)}`,
          `${formula("CaSO", 4)}`,
        ],
        ans: "C",
      },
      {
        id: 63,
        question: `The combination of gases used for metal welding is
          <br />
          I. Hydrogen and Ethyne <br />
          II. Ethyne, Hydrogen and Oxygen <br />
          III. Oxygen and Ethyne <br />
          IV. Hydrogen and Oxygen`,
        options: [`I and III`, `I and II`, `III and IV`, `II and III`],
        ans: "C",
      },
      {
        id: 64,
        question: `A property of sulphur is`,
        options: [
          `conduction of electricity in the molten state`,
          `existence in liquid state`,
          `formation of alkaline oxides`,
          `burning with a blue flame`,
        ],
        ans: "D",
      },
      {
        id: 65,
        question: `The most abundant metal in the earth's crust is`,
        options: [`iron`, `sodium`, `aluminium`, `copper`],
        ans: "C",
      },
      {
        id: 66,
        question: `Why is oxochlorate(I) acid used as bleach?`,
        options: [
          `It is a strong acid`,
          `It yields chlorine readily in pure water`,
          `It is an oxidizing agent`,
          `It is weak acid`,
        ],
        ans: "C",
      },
      {
        id: 67,
        question: `What happens when chlorine gas is bubbled into water and the resulting solution is exposed to sunlight?`,
        options: [
          `The solution will give out chlorine gas and hydrogen chloride gas`,
          `The solution will liberate oxygen and leave oxochlorate(I) acid behind`,
          `The solution will liberate chlorine gas and oxygen`,
          `The solution will give out oxygen gas leaving hydrochloric acid behind`,
        ],
        ans: "D",
      },
      {
        id: 68,
        question: `Chlorine, bromine, and iodine are alike in that all the three`,
        options: [
          `dissolves in alkalis`,
          `are gases`,
          `react violently with hydrogen without heating`,
          `displace one another from solutions of their salts`,
        ],
        ans: "A",
      },
      {
        id: 69,
        question: `How is chlorine prepared on a large scale?`,
        options: [
          `Electrolysis of concentrated sodium chloride solution`,
          `Action of manganese(IV) oxide on hot concentrated hydrochloric acid`,
          `Action of conc. tetraoxosulphate(VI) acid on sodium chloride`,
          `Oxidation of concentrated hydrochloric acid with potassium tetraoxomanganate(VII)`,
        ],
        ans: "A",
      },
      {
        id: 70,
        question: `Which of the following compounds dissolves in excess ammonia solution to form a colorless solution?`,
        options: [
          `AgCl`,
          `PbO`,
          `${formula("BaSO", 4)}`,
          `${formula("CaSO", 4)}`,
        ],
        ans: "A",
      },
      {
        id: 71,
        question: `The precipate observed as a result of the reaction between aqueous potassium chloride and silver trioxonitrate(V) is`,
        options: [
          `KCl`,
          `${formula("AgNO", 3)}`,
          `${formula("AgCl")}`,
          `${formula("KNO", 3)}`,
        ],
        ans: "C",
      },
      {
        id: 72,
        question: `In which of the following pairs of compounds would the two compounds decolorize ${formula(
          "KMnO",
          4
        )} solution`,
        options: [
          `${formula("NH", 3)} and ${formula("CO", 2)}`,
          `${formula("SO", 2)} and ${formula("H", 2, "S")}`,
          `${formula("Cl", 2)} and ${formula("NO", 2)}`,
          `${formula("N", 2, "S")} and ${formula("H", 2, "S")}`,
        ],
        ans: "B",
      },
      {
        id: 73,
        question: `The most reactive halogen is`,
        options: [
          `${formula("Cl", 2)}`,
          `${formula("Br", 2)}`,
          `${formula("F", 2)}`,
          `${formula("I", 2)}`,
        ],
        ans: "C",
      },
      {
        id: 74,
        question: `The addition of chlorine to slaked lime yields`,
        options: [
          `oxochlorate(I) acid`,
          `chlorinated water`,
          `trioxochlorate(I) salt`,
          `bleaching powder`,
        ],
        ans: "D",
      },
      {
        id: 75,
        question: `The gas produced on heating copper powder with concentrated tetraoxosulphate(VI) acid is`,
        options: [
          `sulphur(IV) oxide`,
          `sulphur(VI) oxide`,
          `hydrogen sulfide`,
          `oxygen`,
        ],
        ans: "A",
      },
      {
        id: 76,
        question: `Which of the aqueous solutions ${formula(
          "H",
          2,
          "SO",
          4
        )}, ${formula("HCl")}, ${formula("AgNO", 3)}, and ${formula(
          "HNO",
          3
        )} forms a dark grey solid substance when magnesium ribbon is inserted?`,
        options: [
          `HCl`,
          `${formula("H", 2, "SO", 4)}`,
          `${formula("HNO", 3)}`,
          `${formula("AgNO", 3)}`,
        ],
        ans: "D",
      },
      {
        id: 77,
        question: `The constituents of gunpowder are sulphur, charcoal and`,
        options: [
          `phosphorus sulfide`,
          `potassium chloride`,
          `potassium trioxochlorate(V)`,
          `potassium trioxonitrate(V)`,
        ],
        ans: "D",
      },
      {
        id: 78,
        question: `The bleaching action of sulphur(IV) oxide is by`,
        options: [`reduction`, `oxidation`, `dehydration`, `sulphonation`],
        ans: "A",
      },
      {
        id: 79,
        question: `The bleaching agent used in textile and paper industries is`,
        options: [
          `sodium tetraoxosulphate(VI)`,
          `potassium hydroxide`,
          `sodium chloride`,
          `sodium oxochlorate(I)`,
        ],
        ans: "D",
      },
      {
        id: 80,
        question: `Why is potassium tetraoxomanganate(VII) often added to impure water? It`,
        options: [
          `destroys bacteria and algae`,
          `reduces organic impurities`,
          `removes permanent hardness`,
          `reduces organic impurities`,
        ],
        ans: "A",
      },
      {
        id: 81,
        question: `Why is helium often used in filling ballons`,
        options: [
          `Lightness and combustibility`,
          `Heaviness and combustibility`,
          `Lightness and non-combustibility`,
          `Heaviness and combustibility`,
        ],
        ans: "C",
      },
      {
        id: 82,
        question: `The metals below are all extracted by electrolysis except`,
        options: [`iron`, `aluminium`, `sodium`, `magnesium`],
        ans: "A",
      },
      {
        id: 83,
        question: `The alkali metals are found in combined forms in nature because they`,
        options: [
          `are highly reactive`,
          `have strong electrostatic forces in their lattices`,
          `form volatile compounds`,
          `have very weak metallic bonds`,
        ],
        ans: "A",
      },
      {
        id: 84,
        question: `Which of the following reactions is not feasible`,
        options: [
          `${formula("F", 2)} + 2${formula("NaCl")} -> 2NaF + ${formula(
            "Cl",
            2
          )}`,
          `${formula("Cl", 2)} + 2${formula("NaI")} -> 2NaCl + ${formula(
            "I",
            2
          )}`,
          `${formula("Cl", 2)} + 2${formula("KF")} -> 2KCl + ${formula(
            "F",
            2
          )}`,
          `${formula("Br", 2)} + 2${formula("KI")} -> 2KBr + ${formula(
            "I",
            2
          )}`,
        ],
        ans: "C",
      },
      {
        id: 85,
        question: `Cassiterite is the ore of`,
        options: [`magnesium`, `copper`, `tin`, `aluminium`],
        ans: "C",
      },
      {
        id: 86,
        question: `Which of the following gases would form a white precipitate with dil. ${formula(
          "HNO",
          3
        )} followed by ${formula("AgNO", 3)}?`,
        options: [
          `${formula("SO", 2)}`,
          `${formula("HCl")}`,
          `${formula("CO", 2)}`,
          `${formula("NH", 3)}`,
        ],
        ans: "B",
      },
      {
        id: 87,
        question: `What is the function of the salt in the mixture of charcoal, sulfur and potassium trioxonitrate(V) used to produce gunpowder?`,
        options: [`A catalyst`, `An oxidant`, `A reductant`, `A solvent`],
        ans: "B",
      },
      {
        id: 88,
        question: `Why is copper used for ornamental works? It is`,
        options: [
          `a good thermal and electrical conductor`,
          `malleable and resistant to corrosion`,
          `a transition metal`,
          `a soft metal`,
        ],
        ans: "B",
      },
      {
        id: 89,
        question: `The following statements are correct about dilute hydrochloric acid except:`,
        options: [
          `it has a pH value less than 7`,
          `it is a strong electrolyte`,
          `it gives effervescence with both magnesium and sodium trioxocarbonate(IV)`,
          `it forms acid with bases`,
        ],
        ans: "D",
      },
      {
        id: 90,
        question: `G is an element in the same group as lithium. An aqueous solution of its compound, GOH, will`,
        options: [
          `be neutral`,
          `be acidic`,
          `turn blue litmus red`,
          `have a pH greater than 7`,
        ],
        ans: "D",
      },
      {
        id: 91,
        question: `What is the role of ${formula(
          "H",
          2,
          "S"
        )} in the reaction represented by the equation below? <br />
          ${formula("SO", 2, "g")} + ${formula("H", 2, "S", "g")} -> 2${formula(
          "S",
          "s"
        )} + 2${formula("H", 2, "O", "l")}`,
        options: [
          `a precipitating agent`,
          `a bleaching agent`,
          `a reducing agent`,
          `an oxidizing agent`,
        ],
        ans: "C",
      },
      {
        id: 92,
        question: `Why is oxochlorate(I) acid used as bleach? It is`,
        options: [
          `a strong acid`,
          `an oxidizing agent`,
          `a reducing agent`,
          `a weak acid`,
        ],
        ans: "B",
      },
      {
        id: 93,
        question: `A nitrogen-containing compound that dissolves in water to give an aqueous solution having a pH less than 7 is`,
        options: [
          `${formula("H", 2, "O")}`,
          `${formula("NO")}`,
          `${formula("NO",2)}`,
          `${formula("NaNO", 3)}`,
        ],
        ans: "C",
      },
    ],
  },

  {
    /// done and enough for now
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
        id: 250,
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
        id: 680,
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
      {
        id: 1001,
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
        id: 103,
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
        id: 104,
        question:
          "How many electrons are required to equal the mass of one proton?",
        options: ["1", "23", "about 1800", "no corrrect response"],
        ans: "C",
      },
      {
        id: 105,
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
        id: 106,
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
        id: 107,
        question:
          "The atomic number for an atom containing 10 neutrons and 8 protons is",
        options: ["8", "10", "18", "no corrrect response"],
        ans: "A",
      },
      {
        id: 108,
        question:
          "An atom that has an atomic number of 11 and a mass number of 23 contains how many neutrons?",
        options: ["11", "12", "23", "no corrrect response"],
        ans: "B",
      },
      {
        id: 109,
        question: `How many electrons are present in an atom of ${isotope(
          "31",
          "15",
          "P"
        )}?`,
        options: ["15", "16", "31", "no corrrect response"],
        ans: "A",
      },
      {
        id: 110,
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
        id: 111,
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
        id: 112,
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
        id: 113,
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
        id: 114,
        question: `What is the atomic mass of a hypothetical element that exists in two isotopic forms that have masses of 8.00 amu and 10.00 amu, respectively, and percent abundances of 80.00% and 20.00%, respectively?`,
        options: ["8.40 amu", "9.00 amu", "9.20 amu", "no corrrect response"],
        ans: "A",
      },
      {
        id: 115,
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
        id: 116,
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
        id: 117,
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
        id: 118,
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
        id: 119,
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
        id: 120,
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
        id: 121,
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
        id: 122,
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
        id: 123,
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
        id: 124,
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
        id: 125,
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
        id: 126,
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
        id: 127,
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
        id: 128,
        question: `In which of the following pairs of electrons subshells does the first listed subshell have a higher energy than the second listed subshell`,
        options: [`2s, 2p`, `2s, 3s`, `3d, 2p`, "no corrrect response"],
        ans: "C",
      },
      {
        id: 129,
        question: `How many electrons can a 3d subshell accomodate?`,
        options: [`2`, `6`, `10`, "no corrrect response"],
        ans: "C",
      },
      {
        id: 130,
        question: `How many electrons can a 3d orbital accomodate`,
        options: [`2`, `6`, `10`, "no corrrect response"],
        ans: "A",
      },
      {
        id: 131,
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
        id: 132,
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
        id: 133,
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
        id: 134,
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
        id: 135,
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
        id: 136,
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
        id: 137,
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
        id: 138,
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
        id: 139,
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
        id: 140,
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
        id: 141,
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
        id: 142,
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
        id: 143,
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
      {
        id: 144,
        question: `Who postulated the theory that electrons in an atom revolve around the nucleus along certain orbits situated at various distances from the nucleus`,
        options: [
          `Neil Bohr`,
          `J.J Thompson`,
          `John Dalton`,
          "Ernest Rutherford",
        ],
        ans: "A",
      },
      {
        id: 145,
        question: `What did Milikan calculate in the oil drop experiment`,
        options: [
          `charge-to-mass ratio of the electron`,
          `mass of the electron`,
          `charge of the electron`,
          "mass of the proton",
        ],
        ans: "C",
      },
      {
        id: 146,
        question: `One of the following has no neutron`,
        options: [
          `Lithium ion`,
          `Berylium ion`,
          `Helium atom`,
          "Hydrogen atom",
        ],
        ans: "D",
      },
      {
        id: 147,
        question: `The element with highest number of valence electrons is`,
        options: [
          `${isotope("", 20, "Ca")}`,
          `${isotope("", 6, "C")}`,
          `${isotope("", 8, "O")}`,
          `${isotope("", 15, "P")}`,
        ],
        ans: "C",
      },
      {
        id: 148,
        question: `What makes ${isotope(39, 19, "X")} different from ${isotope(
          41,
          19,
          "X"
        )} is the`,
        options: [
          `electronic structure`,
          `number of protons`,
          `number of neutrons`,
          `position in the Periodic Table`,
        ],
        ans: "C",
      },
      {
        id: 149,
        question: `Pauli exclusion principle deals with`,
        options: [
          `collision theory of reaction rates`,
          `electronegativity values of elements`,
          `quantum numbers of orbitals/electrons`,
          `reversibility of equilibrium reactions`,
        ],
        ans: "C",
      },
      {
        id: 150,
        question: `Which of 3d, 4s, 4p, 4d has the lowest energy`,
        options: [`3d`, `4s`, `4p`, `4d`],
        ans: "B",
      },
      {
        id: 151,
        question: `Which of the following is used in archeology?`,
        options: [
          `${isotope(12, 6, "C")}`,
          `${isotope(13, 6, "C")}`,
          `${isotope(14, 6, "C")}`, // Carbon-14 is used in archeology for dating
          `${isotope(3, 1, "H")}`,
        ],
        ans: "C",
      },
    ],
  },

  {
    /// done and enough as well
    topic: "Chemical bonding",
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
        id: 240,
        question: `Given that P has five valence electrons and O has six valence electrons, how many total valence electrons are present in the Lewis structure for the ${ion(
          formula("PO", 4),
          2,
          "-"
        )} ion?`,
        options: [
          `11 electrons`,
          `29 electrons`,
          `31 electrons`,
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
      // {
      //   id: 47,
      //   question: `In a polar covalent bond the atom of greater electronegativity bears a`,
      //   options: [
      //     `fractional positive charge`,
      //     `fractional negative charge`,
      //     `full positive charge`,
      //     `no correct response`,
      //   ],
      //   ans: "B",
      // },
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
      {
        id: 50,
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
        id: 51,
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
        id: 52,
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
        id: 53,
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
        id: 54,
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
        id: 55,
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
        id: 56,
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
        id: 57,
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
        id: 58,
        question: `The three dimensional shape of methane is`,
        options: ["hexagonal", "trigonal", "linear", "tetrahedral", "cubical"],
        ans: "D",
      },
      {
        id: 59,
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
        id: 60,
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
        id: 61,
        question: `The atomic numbers of two elements X and Y are 12 and 9 respectively. The compound formed between the atoms of these two elements is`,
        options: ["ionic", "covalent", "neutral", "co-ordinate"],
        ans: "A",
      },
      {
        id: 62,
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
        id: 63,
        question: `The forces holding naphthalene crystal together can be overcome when naphthalene is heated to a temperature of 354K resulting in the crystals melting. These forces are known as`,
        options: ["columbic", "ionic", "covalent", "van der waals"],
        ans: "D",
      },
      {
        id: 64,
        question: `A metallic ion ${ion(
          "X",
          2,
          "+"
        )} with an inert gas structure contains 18 electrons. How many protons are there in this ion`,
        options: ["20", "18", "16", "2"],
        ans: "A",
      },
      {
        id: 65,
        question: `What are the potential oxidation numbers for an element if its atomic number is 17?`,
        options: ["-1 and 7", "-1 and 6", "3 and 5", "-2 and 6"],
        ans: "A",
      },
      {
        id: 66,
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
        id: 67,
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
        id: 68,
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
        id: 69,
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
        id: 70,
        question: `How many lone pairs of electron are there on the central atom of ${formula(
          "H",
          2,
          "O"
        )} molecules?`,
        options: ["1", "2", `3`, `4`],
        ans: "B",
      },
      {
        id: 71,
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
        id: 72,
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
        id: 73,
        question: `Which group of elements forms hydrides that are pyramidal in structure?`,
        options: [`III`, `IV`, `V`, `VI`],
        ans: "C",
      },
      {
        id: 74,
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
        id: 75,
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
        id: 76,
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
        id: 77,
        question: `Two elements, P and Q with atomic numbers 11 and 8 respectively, combine chemically to form the compound P<sub>x</sub>R<sub>y</sub>. The respective values of x and y are`,
        options: [`1 and 1`, `1 and 2`, `2 and 1`, `3 and 1`],
        ans: "C",
      },
      {
        id: 78,
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
        id: 79,
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
        id: 80,
        question: `Which of the following types of bonding does not involve the formation of new substances`,
        options: ["covalent", "metallic", "co-ordinate", "electrovalent"],
        ans: "B",
      },
      {
        id: 81,
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
        id: 82,
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
        id: 83,
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
        id: 84,
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
        id: 85,
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
        id: 86,
        question: `The weakest attractive forces that can be observed between two molecules is`,
        options: ["ionic", "covalent", "coordinate covalent", "van der waals"],
        ans: "D",
      },
      {
        id: 87,
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
        id: 88,
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
        id: 89,
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
        id: 90,
        question: `An element will readily form an electrovalent compound if its electron configuration is`,
        options: [`2:8:8`, `2:8:4`, `2:8:5`, `2:8:1`],
        ans: "D",
      },
      {
        id: 91,
        question: `The shape of the hydrocarbon compound ${formula(
          "CH",
          4
        )} is`,
        options: [`square`, `planar`, `tetrahedral`, `planar`, `linear`],
        ans: "C",
      },
      {
        id: 92,
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
        id: 93,
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
        id: 94,
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
        id: 95,
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
        id: 96,
        question: `The type of bonding in [Cu(${formula(
          "NH",
          3
        )})<sub>4</sub>]<sup>2+</sup> is`,
        options: [`coordinate`, `electrovalent`, `metallic`, `covalent`],
        ans: "A",
      },
      {
        id: 97,
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
        id: 98,
        question: `The number of lone pair of electrons in water molecule is`,
        options: [`2`, `4`, `3`, `1`],
        ans: "A",
      },
      {
        id: 99,
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
        id: 100,
        question: `The type of chemical bond that exists between potassium and oxygen in potassium oxide is`,
        options: [`ionic`, `metallic`, `covalent`, `dative`],
        ans: "A",
      },
      {
        id: 101,
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
        id: 102,
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
        id: 103,
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
        id: 104,
        question: `Which combination of atoms can form a polar covalent bond?`,
        options: [`H and Br`, `H and H`, `Na and Br`, `N and N`],
        ans: "A",
      },
      {
        id: 105,
        question: `The total number of bonded electrons in an ammonia molecule is?`,
        options: [`6`, `8`, `10`, `12`],
        ans: "A",
      },
      {
        id: 106,
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
        id: 107,
        question: `How many bond pairs are present in a water molecule?`,
        options: [`1`, `2`, `3`, `4`],
        ans: "B",
      },
      {
        id: 108,
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
        id: 109,
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
        id: 110,
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
        id: 111,
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
        id: 112,
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
        id: 113,
        question: `How many valence electrons are present in atoms of Li, a Group IA element?`,
        options: ["one", "two", "three", "no correct response"],
        ans: "A",
      },
      {
        id: 114,
        question: `How many 'dots' are present in the Lewis symbol for the element oxygen, a Group VIA element`,
        options: ["two", "four", "six", "no correct response"],
        ans: "C",
      },
      {
        id: 115,
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
        id: 116,
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
        id: 117,
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
        id: 118,
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
        id: 119,
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
        id: 120,
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
        id: 121,
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
        id: 122,
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
        id: 123,
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
        id: 124,
        question: `An atom with one valence electron would most likely form a`,
        options: [`1+ ion`, `1- ion`, `7+ ion`, "no correct response"],
        ans: "A",
      },
      {
        id: 125,
        question: `Magnesium and Fluorine would, respectively, be expected to form ions with charges of`,
        options: [`2+ and 1-`, `1+ and 2-`, `2+ and 7+`, "no correct response"],
        ans: "A",
      },
      {
        id: 126,
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
        id: 127,
        question: `The ion ${ion("O", 2, "-")} is isoelectronic with a`,
        options: [`N atom`, `F atom`, `Ne atom`, "no correct response"],
        ans: "C",
      },
      {
        id: 128,
        question: `In forming the ionic compound ${formula(
          "K",
          2,
          "O"
        )} from K (1 valence electron) and O (6 valence electrons), how many electrons does each oxygen atom require via electron transfer?`,
        options: [`one`, `two`, `three`, "no correct response"],
        ans: "B",
      },
      {
        id: 129,
        question: `In forming an ionic compound from Ca(2 valence electrons) and S(6 valence electrons), how many calcium atoms are needed to meet the "electron needs" of one S atom?`,
        options: [`one`, `two`, `three`, "no correct response"],
        ans: "A",
      },
      {
        id: 130,
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
        id: 131,
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
        id: 132,
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
        id: 133,
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
        id: 134,
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
        id: 135,
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
        id: 136,
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
        id: 137,
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
        id: 138,
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
        id: 139,
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
        id: 140,
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
        id: 142,
        question: `Which of the following is a variable charge metal?`,
        options: [`Zn`, `Ag`, `K`, "no correct response"],
        ans: "D",
      },
      {
        id: 1420,
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
        id: 143,
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
        id: 144,
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
        id: 145,
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
        id: 146,
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
        id: 147,
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
        id: 148,
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
        id: 149,
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
        id: 150,
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
        id: 152,
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
        id: 1520,
        question: `The compound ${formula("Mg", "(SCN)", 2)} contains ${ion(
          "Mg",
          2,
          "+"
        )} ions and polyatomic thiocyanate ions. WHat charge does the thiocyanate ion carry?`,
        options: [`1+`, `1-`, `2-`, "no correct response"],
        ans: "B",
      },
      {
        id: 153,
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
        id: 154,
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
        id: 155,
        question: `What is the chemical formula for the compound copper(II) nitrate?`,
        options: [
          `${formula("Cu", "NO", 3)}`,
          `${formula("Cu", formula(`(${formula("NO", 3)})`, 2))}`,
          `${formula("Cu", "(CN)", 2)}`,
          "no correct response",
        ],
        ans: "B",
      },
    ],
  },

  {
    /// more questions
    topic: "Stoichiometry",
    questions: [
      {
        id: 1,
        question:
          "How many moles of calcium carbonate are there in 2.5g of calcium carbonate <br /> { C = 12; O = 16; Ca = 40 }",
        options: [`0.0025`, `0.025`, `0.25`, `2.5`],
        ans: "B",
        remark: `mass given/molar mass => 2.5/100. Note that it is essential to know how to write chemicals from their name. It is very important.`,
      },
      {
        id: 2,
        question: "One mole of a substance contains the",
        options: [
          `atomic number of particles`,
          `faraday's number of particles`,
          `Avogadro's number of particles`, // 6.022 * 10^23
          `quantum number of particles`,
        ],
        ans: "C",
      },
      {
        id: 3,
        question:
          "The number of hydrogen ions in 9.8g of tetraoxosulphate(VI) acid solution is",
        options: [
          `6.02 X ${exp(23)}`,
          `6.02 X ${exp(22)}`,
          `1.20 X ${exp(22)}`,
          `1.20 X ${exp(23)}`,
        ],
        ans: "D", // under consideration but I am right
      },
      {
        id: 4,
        question: `What mass of ${formula(
          "SO",
          2
        )} contains the same number of molecules of 0.8g of ${formula(
          "CH",
          4
        )} <br /> { ${formula("SO", 2)} = 64g/mol; ${formula(
          "CH",
          4
        )} = 16g/mol }`,
        options: [`3.2g`, `0.32g`, `6.4g`, `0.64g`],
        ans: "A",
      },
      {
        id: 5,
        question: `One mole of a compound ${formula(
          "MHCO",
          3
        )} has a mass of 84g. Calculate the relative atomic mass of M. <br /> { H = 1; C = 12, O = 16 }`,
        options: [`61`, `42`, `26`, `23`],
        ans: "D",
      },
      {
        id: 6,
        question: `How many molecules of phosphorus (${formula(
          "P",
          4
        )}) are present in 496g of the substance? <br /> { P = 31; N<sub>A</sub> = 6.0 X ${exp(
          23
        )}${units("mol", -1)} }`,
        options: [
          `1.20 X ${exp(23)}`,
          `1.20 X ${exp(24)}`,
          `2.40 X ${exp(23)}`,
          `2.40 X ${exp(24)}`,
        ],
        ans: "D",
      },
      {
        id: 7,
        question: `Upon heating 1.25g of a solid, 280${units(
          "cm",
          3
        )} of a gas measured at S.T.P were evolved and a residue of 0.7g was left. Calculate the molar mass of the gas? [Molar volume of a gas at s.t.p = 22.4${units(
          "dm",
          3
        )}]`,
        options: [`64g`, `44g`, `32g`, `16g`],
        ans: "B",
      },
      {
        id: 8,
        question: `What is the mass of 2.3 mole of sodium`,
        options: [`53g`, `230g`, `23g`, `46g`],
        ans: "A",
      },
      {
        id: 9,
        question: `How many moles of iron(III) oxide are contained in 1kg of the compound? <br /> { Fe = 56; O = 16 }`,
        options: [`3.125 moles`, `0.3125 mole`, `0.625 mole`, `6.25 moles`],
        ans: "D",
      },
      {
        id: 10,
        question: `The number of atoms of chlorine present in 7.45g of KCl is`,
        options: [
          `6.02 X ${exp(23)}`,
          `6.02 X ${exp(22)}`,
          `7.45 X ${exp(23)}`,
          `7.45 X ${exp(22)}`,
        ],
        ans: "B",
      },
      {
        id: 11,
        question: `How many atoms of oxygen are present in 8.8g of carbon(IV) oxide?`,
        options: [
          `6.02 X ${exp(22)}`,
          `2.41 X ${exp(22)}`,
          `2.41 X ${exp(23)}`,
          `2.41 X ${exp(24)}`,
        ],
        ans: "C",
      },
      {
        id: 12,
        question: `What is the mass of potassium hydroxide present in 500${units(
          "cm",
          3
        )} of 2${units(
          "moldm",
          -3
        )} solution of the compound <br /> { K = 39; O = 16; H = 1}`,
        options: [`40g`, `56g`, `112g`, `28g`],
        ans: "B",
      },
      {
        id: 13,
        question: `The ratio of the number of molecules of 4g of hydrogen to that in 32g of oxygen is`,
        options: [`2 : 1`, `1 : 1`, `1 : 2`, `1 : 4`],
        ans: "A",
      },
      {
        id: 14,
        question: `Which of the following is the same as 24g of magnesium? <br /> { Mg = 24; H = 1; O = 16; Cl = 35.5 }`,
        options: [
          `1g of hydrogen molecules`,
          `16g of oxygen molecules`,
          `32g of oxygen molecules`,
          `35.5g of chlorine molecules`,
        ],
        ans: "C",
      },
      {
        id: 15,
        question: `The chloride of a metal (M) consists of 79.78% of chlorine by mass. What is the empirical formual of the chloride? (M = 27; Cl = 35,5)`,
        options: [
          `MCl`,
          `${formula("MCl", 2)}`,
          `${formula("MCl", 3)}`,
          `${formula("MCl", 4)}`,
        ],
        ans: "B",
      },
      {
        id: 16,
        question: `An oxide of nitrogen contains 69.6% of oxygen by mass. Its empirical formula is`,
        options: [
          `${formula("N", 2, "O", 3)}`,
          `${formula("N", 2, "O", 2)}`,
          `${formula("N", 2, "O")}`,
          `${formula("NO", 2)}`,
        ],
        ans: "D",
      },
      {
        id: 17,
        question: `Upon heating 1${units(
          "dm",
          3
        )} of a monoatomic gas, Y, it combines with 1.5${units(
          "dm",
          3
        )} of oxygen to form an oxide. The empirical formula of the oxide is`,
        options: [
          `${formula("Y", 3, "O", 2)}`,
          `${formula("Y", 2, "O", 3)}`,
          `${formula("YO", 2)}`,
          `${formula("YO", 3)}`,
        ],
        ans: "D",
        // to be solved later...
      },
      {
        id: 18,
        question: `5.00g of an oxide of a metal (M) gave 4.00g of the metal when reduced with hydrogen. What is the empirical formula of the oxide? <br /> { M = 64; O = 16 }`,
        options: [
          `${formula("M", 2, "O")}`,
          `${formula("MO")}`,
          `${formula("MO", 2)}`,
          `${formula("M", 2, "O", 3)}`,
        ],
        ans: "B",
      },
      {
        id: 19,
        question: `What is the empirical formula of an organic compound containing 40% carbon and 6.67% hydrogen by mass? <br /> { C = 12; H = 1; O = 16 }`,
        options: [
          `${formula("CH", 2)}`,
          `${formula("CH", 3)}`,
          `${formula("CH", 2, "O")}`,
          `${formula("CH", 3, "O")}`,
        ],
        ans: "C",
      },
      {
        id: 20,
        question: `An element, A, has the electronic configuration ${eConfig(
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
        )}. The combination of A with a halogen X can give compounds of formula(e)`,
        options: [
          `${formula("AX", 3)} and ${formula("AX", 5)}`,
          `${formula("AX", 3)} only`,
          `${formula("AX", 5)}`,
          `${formula("AX")} and ${formula("AX", 2)}`,
        ],
        ans: "A",
      },
      {
        id: 21,
        question: `The molar ratio of hydrogen to carbon in an organic liquid compound is 2 : 1. On evaporation at s.t.p, 0.24g of compound produced 64${units(
          "cm",
          3
        )} of vapour. What is the molecular formula of the liquid compound? <br /> { C= 12; H = 1, molar volume of a gas at s.t.p = 22.4${units(
          "dm",
          3
        )}}`,
        options: [
          `${formula("C", 4, "H", 8)}`,
          `${formula("C", 5, "H", 10)}`,
          `${formula("C", 6, "H", 6)}`,
          `${formula("C", 6, "H", 12)}`,
        ],
        ans: "D",
      },
      {
        id: 22,
        question: `Which of the following formula is correct for compounds of an element Y having a combining power of 3?`,
        options: [
          `${formula("YSO", 4)}`,
          `${formula("Y", 2, "O", 3)}`,
          `${formula("YS", 3)}`,
          `${formula("Y", 3, "Cl", 2)}`,
        ],
        ans: "B",
      },
      {
        id: 23,
        question: `What is the percentage by mass of carbon in the compound ${formula(
          "Na",
          2,
          "CO",
          3
        )}.10${formula(
          "H",
          2,
          "O"
        )}? <br /> { H = 1, C = 12, O = 16, Na = 23 }`,
        options: [`16.1`, `16.8`, `28.1`, `4.2`],
        ans: "D",
      },
      {
        id: 24,
        question: `What is the percentage by mass of aluminum in ${formula(
          "Al",
          2,
          `(${formula("SO", 4)})`,
          3
        )}? <br /> { Al = 27, S = 32, O = 16 }`,
        options: [`15.8`, `14.7`, `28.1`, `9.4`],
        ans: "A",
      },
      {
        id: 25,
        question: `What is the value of x in the molecular formula, Pb(NO<sub>3</sub>)<sub>x</sub> if the percentage by mass of nitrogen is 8.46? <br /> { Pb = 207; N = 14; O = 16 }`,
        options: [`1`, `2`, `3`, `4`],
        ans: "B",
      },
      {
        id: 26,
        question: `An element, E, forms the following compounds with bromine: ${formula(
          "EBr",
          2
        )}, ${formula("EBr", 3)} and ${formula(
          "EBr",
          4
        )}. This observation illustrates the`,
        options: [
          `law of conservation of mass`,
          `law of definite proportions`,
          `law of multiple proportions`,
          `law of chemical proportions`,
        ],
        ans: "C",
      },
      {
        id: 27,
        question: `In two separate experiments 0.18g and 0.36g of chlorine combine with a metal M, to give A and B respectively. An analysis showed that A and B contain 0.10g and 0.20g of M respectively. Which law is illustrated by the data?`,
        options: [
          `law of conservation of mass`,
          `law of constant proportions`,
          `law of multiple proportions`,
          `law of chemical proportions`,
        ],
        ans: "B",
      },
      {
        id: 28,
        question: `"All pure samples of the same chemical compound contain the same elements in the same proportion by mass" is a statement of the`,
        options: [
          `law of conservation of mass`,
          `law of definite proportions`,
          `law of multiple proportions`,
          `law of chemical proportions`,
        ],
        ans: "B",
      },
      {
        id: 29,
        question: `What is the oxidation number of nitrogen in ${formula(
          "HNO",
          2
        )}?`,
        options: [`+3`, `+2`, `+1`, `0`],
        ans: "A",
      },
      {
        id: 30,
        question: `The oxidation number of sulphur is equal to -2 in`,
        options: [
          `${formula("SO", 2)}`,
          `${ion(formula("SO", 4), 2, "-")}`,
          `${formula("S", 8)}`,
          `${formula("H", 2, "S")}`,
        ],
        ans: "D",
      },
      {
        id: 31,
        question: `The oxidation number of chlorine is zero in`,
        options: [
          `${formula("KCl")}`,
          `${formula("Cl", 2, "O")}`,
          `${formula("Cl", 2)}`,
          `${formula("NH", 4, "Cl")}`,
        ],
        ans: "C",
      },
      {
        id: 32,
        question: `The oxidation number of oxygen is different from its value in water in`,
        options: [
          `${formula("SO", 2)}`,
          `${formula("H", 2, "O", 2)}`,
          `${ion(formula("H", 3, "O"), "+")}`,
          `${ion(formula("OH"), "-")}`,
        ],
        ans: "B",
      },
      {
        id: 33,
        question: `In which of the following is gallium showing an oxidation number of +3`,
        options: [
          `${formula("NaGaO")}`,
          `${formula("NaGa", `(${formula("OH")})`, 4)}`,
          `${formula("NaGa", `(${formula("OH")})`, 3)}`,
          `${formula("NaGaO", 3)}`,
        ],
        ans: "B",
      },
      {
        id: 34,
        question: `The possible oxidation numbers of an element with atomic number 17 are:`,
        options: [`-1 and +6`, `-7 and +1`, `-3 and +5`, `-1 and +7`],
        ans: "D",
      },
      {
        id: 35,
        question: `What is the value of x for the anion. [${formula(
          "Y",
          `(${formula("CN")})`,
          6
        )}]<sup>x</sup>, if the central element (Y) has an oxidation number of +2?`,
        options: [`-1`, `-2`, `-3`, `-4`],
        ans: "D",
      },
      {
        id: 36,
        question: `Consider the following redox equation: <br />
        ${ion(formula("MnO", 4), "-")} + 5${ion("Fe", "2+")} -> ${ion(
          "Mn",
          "2+"
        )} + 5${ion("Fe", "3+")} + 4${formula("H", 2, "O")} <br />
        the oxidation number of manganese changed from`,
        options: [`+6 to +2`, `+7 to +2`, `+5 to +2`, `+1 to +2`],
        ans: "B",
      },
      {
        id: 37,
        question: `2${ion(formula("MnO", 4), "-")} + 10${ion(
          "Cl",
          "-"
        )} + 16${ion("H", "+")} -> 2${ion("Mn", "2+")} + 5${formula(
          "Cl",
          2
        )} + 8${formula(
          "H",
          2,
          "O"
        )} <br /> The changes in oxidation numbers when manganese, chloride and hydrogen ions react according to the above equation are respectively:`,
        options: [`-1, 1, 0`, `-1, -1, -1`, `-5, 1, 0`, `-1, -5, 0`],
        ans: "C",
      },
      {
        id: 38,
        question: `What type of reaction is the rusting of iron?`,
        options: [
          `Single replacement`,
          `Decomposition`,
          `Double displacement`,
          `Redox`,
        ],
        ans: "D",
      },
      {
        id: 39,
        question: `All of the following are redox reactions except`,
        options: [
          `Zn + ${formula("H", 2, "SO", 4)} -> ${formula(
            "Zn",
            "SO",
            4
          )} + ${formula("H", 2)}`,
          `${formula("Ca", `(${formula("HCO", 3)})`, 2)} -> ${formula(
            "CaCO",
            3
          )} + ${formula("H", 2, "O")} + ${formula("CO", 2)}`,
          `2${formula("H", 2)} + ${formula("O", 2)} -> 2${formula(
            "H",
            2,
            "O"
          )}`,
          `2${formula("HNO", 2)} + 2${formula("HI")} -> 2${formula(
            "H",
            2,
            "O"
          )} + 2${formula("NO")} + ${formula("I", 2)}`,
        ],
        ans: "B",
      },
      {
        id: 40,
        question: `Which of the following is a redox reaction?`,
        options: [
          `${formula("NaCl", "aq")} + ${formula("AgNO", 3, "aq")} -> ${formula(
            "NaNO",
            3,
            "aq"
          )} + ${formula("AgCl", "s")}`,
          `${formula("NaCl", "aq")} + ${formula(
            "H",
            2,
            "SO",
            4,
            "aq"
          )} -> ${formula("NaHSO", 4, "aq")} + ${formula("HCl", "aq")}`,
          `${formula("H", 2, "CO", 3, "aq")} -> ${formula(
            "H",
            2,
            "O"
          )} + ${formula("CO", 2, "g")}`,
          `2${formula("FeCl", 2, "aq")} + ${formula(
            "Cl",
            2,
            "aq"
          )} -> 2${formula("FeCl", 3, "aq")}`,
        ],
        ans: "D",
      },
      {
        id: 41,
        question: `The balancing of chemical equations is based on the law of`,
        options: [
          `conservation of energy`,
          `conservation of mass`,
          `definite proportions`,
          `multiple proportions`,
        ],
        ans: "B",
      },
      // the questions that follows requires patience to type.
      // and I will give it that patience
      {
        id: 42,
        question: `Tetraoxosulphate(VI) acid reacts with aluminium hydroxide to give a salt and water. The balanced equation for the reaction is`,
        options: [
          `${formula("H", 2, "SO", 4)} + ${formula(
            "Al",
            `(${formula("OH", 3)})`,
            3
          )} -> ${formula("Al", 2, `(${formula("SO", 4)})`, 3)} + ${formula(
            "H",
            2,
            "O"
          )}`,
          `3${formula("H", 2, "SO", 4)} + ${formula(
            "Al",
            `(${formula("OH", 3)})`,
            3
          )} -> ${formula("Al", 2, `(${formula("SO", 4)})`, 3)} + 6${formula(
            "H",
            2,
            "O"
          )}`,
          `3${formula("H", 2, "SO", 4)} + 2${formula(
            "Al",
            `(${formula("OH", 3)})`,
            3
          )} -> ${formula("Al", 2, `(${formula("SO", 4)})`, 3)} + 6${formula(
            "H",
            2,
            "O"
          )}`,
          `${formula("H", 2, "SO", 4)} + ${formula(
            "Al",
            `(${formula("OH", 3)})`,
            3
          )} -> ${formula("Al", 2, `(${formula("SO", 4)})`, 3)} + 6${formula(
            "H",
            2,
            "O"
          )}`,
        ],
        ans: "C",
      },
      {
        id: 43,
        question: `The balanced equation representing the reaction between copper and dilute trioxonitrate(v) acid is:
        <br />
        a Cu + b ${formula("HNO", "3")} -> x ${formula(
          "Cu",
          `(${formula("NO", 3)})`,
          2
        )} + y ${formula("H", 2, "O")} + 2 ${formula("NO")} <br />
        what are the values of a,b,x, and y respectively in the equation?`,
        options: [`3:8:4:3`, `3:8:3:4`, `1:4:1:4`, `4:1:4:1`],
        ans: "B",
      },
      {
        id: 44,
        question: `${ion(formula("Cr", 2, "O", 7), "2-")} + 14${ion(
          "H",
          "+"
        )} + ${ion("ne", "-")} -> 2${ion("Cr", "3+")} + 7${formula("H", 2, "O")}
        <br />
        What is the value of n in the reaction above?`,
        options: [`6`, `5`, `4`, `3`],
        ans: "A",
      },
      {
        id: 45,
        question: `Given the half equatoins:<br />
        ${formula("H", 2, "O", 2)} -> ${formula("O", 2)} + ${ion(
          "H",
          "+"
        )} + 2${ion("e", "-")}<br />
        ${ion(formula("MnO", 4), "-")} + 8${formula("H", "+")} + 5${ion(
          "e",
          "-"
        )} -> ${ion("Mn", "2+")} + 4${formula("H", 2, "O")}<br />
        The net equation for the reaction between hydrogen peroxide and tetraoxomanganate ions in acid solution is`,
        options: [
          `${formula("H", 2, "O", 2)} + ${ion("Mn", "2+")} -> ${ion(
            formula("MnO", 4),
            "-"
          )} + ${formula("O", 2)} + 2${ion("H", "+")}`,
          `${formula("H", 2, "O", 2)} + ${ion(formula("MnO", 4), "-")} + 6${ion(
            "H",
            "+"
          )} -> ${formula("O", 2)} + ${ion("Mn", "2+")} + 20${formula(
            "H",
            2,
            "O"
          )}`,
          `${formula("H", 2, "O", 2)} + ${ion(
            formula("MnO", 4),
            "-"
          )} + 40${ion("H", "+")} -> ${formula("O", 2)} + ${ion(
            "Mn",
            "2+"
          )} + 4${formula("H", 2, "O")}`,
          `5${formula("H", 2, "O", 2)} + 2${ion(
            formula("MnO", 4),
            "-"
          )} + 11${ion("H", "+")} -> 5${formula("O", 2)} + 2${ion(
            "Mn",
            "2+"
          )} + 8${formula("H", 2, "O")}`,
        ],
        ans: "D",
      },
      {
        id: 46,
        question: `Sulphur(IV) oxide acts as an oxidizing agent in`,
        options: [
          `${formula("SO", 2)} + ${formula("H", 2, "O")} -> ${formula(
            "H",
            2,
            "SO",
            3
          )}`,
          `${formula("SO", 2)} + 2${formula("HNO", 3)} -> ${formula(
            "H",
            2,
            "SO",
            4
          )} + 2${formula("NO", 2)}`,
          `${formula("SO", 2)} + ${formula("H", 2, "S")} -> 3S + 2${formula(
            "H",
            2,
            "O"
          )}`,
          `${formula("SO", 2)} + 2${formula("H", 2, "O")} + ${formula(
            "O",
            2
          )} -> 2${formula("H", 2, "SO", 4)}`,
        ],
        ans: "C",
      },
      {
        id: 47,
        question: `Consider the reactoin represented by the equation<br />
        ${formula("Mg", "s")} + ${ion("Cu", "2+")} -> ${ion(
          "Mg",
          "2+"
        )} + ${formula("Cu", "s")}
        <br />
        Which of the following statements gives the most complete description of the reaction?`,
        options: [
          `Magnesium and copper(II) ions are being reduced`,
          `Magnesium and copper(II) ions are being oxidized`,
          `Copper(II) ion are being oxidized and Magnesium reduced`,
          `Copper(II) ions are bring reduced and magnesium oxidized`,
        ],
        ans: "D",
      },
      {
        id: 48,
        question: `Which species acts as an oxidizing agent in the following redox equation?<br />
        2${ion("Fe", "2+")} + ${formula("Cl", 2)} -> 2${ion(
          "Fe",
          "3+"
        )} + 2${ion("Cl", "-")}`,
        options: [
          `${ion("Fe", "2+")}`,
          `${formula("Cl", 2)}`,
          `${ion("Fe", "3+")}`,
          `${ion("Cl", "-")}`,
        ],
        ans: "B",
      },
      {
        id: 49,
        question: `Which of the following gases acts as a reducing agent towards chlorine and as an oxidizing agent towards hydrogen sulphide?`,
        options: [
          `${formula("SO", 2)}`,
          `${formula("O", 2)}`,
          `${formula("NO")}`,
          `${formula("CO", 2)}`,
        ],
        ans: "A",
      },
      {
        id: 50,
        question: `Consider the reaction <br />
        3${formula("Cl", 2)} + 2${formula("NH", 3)} -> ${formula(
          "N",
          2
        )} + 6${formula("HCl")}<br />
        Ammonia acts as`,
        options: [
          `an oxidizing agent`,
          `a reducing agent`,
          `a catalyst`,
          `an acid`,
        ],
        ans: "B",
      },
      {
        id: 51,
        question: `For the reaction:<br />
        2${ion("Fe", "3+")} + 2${ion("Cl", "-")} -> 2${ion(
          "Fe",
          "2+"
        )} + ${formula("Cl", 2)}`,
        options: [
          `${ion("Fe", "3+")} is oxidized to ${ion("Fe", "2+")}`,
          `${ion("Cl", "-")} is reduced to ${formula("Cl", 2)}`,
          `${ion("Cl", "-")} is oxidized to ${formula("Cl", 2)}`,
          `${ion("Fe", "2+")} is reduced to ${ion("Fe", "3+")}`,
        ],
        ans: "C",
      },
      {
        id: 52,
        question: `Hydrogen peroxide acts as a reducing agent in`,
        options: [
          `${formula("H", 2, "O", 2)} + ${formula("H", 2, "S")} -> ${formula(
            "S"
          )} + 2${formula("H", 2, "O")}`,
          `${formula("H", 2, "O", 2)} + ${formula("SO", 2)} -> ${formula(
            "H",
            2,
            "SO",
            4
          )}`,
          `${formula("H", 2, "O", 2)} + 2${ion("I", "-")} -> 2${formula(
            "H",
            2,
            "O"
          )} + ${formula("I", 2)}`,
          `${formula("H", 2, "O", 2)} + ${formula("PbO", 2)} + 2${formula(
            "HNO",
            3
          )} -> ${formula("Pb", `(${formula("NO", 3)})`, 2)} + 2${formula(
            "H",
            2,
            "O"
          )} + ${formula("O", 2)}`,
        ],
        ans: "D",
      },
      {
        id: 53,
        question: `Which of the species serves as an oxidizing agent in the reaction represented by the equation below?<br />
        2${ion(formula("MnO", 4), "-")} + 10${ion("Cl", "-")} + 16${ion(
          "H",
          "+"
        )} -> 2${ion("Mn", "2+")} + 5${formula("Cl", 2)} + 8${formula(
          "H",
          2,
          "O"
        )}`,
        options: [
          `${formula("Cl", 2)}`,
          `${ion("Cl", "-")}`,
          `${ion("Mn", "2+")}`,
          `${ion(formula("MnO", 4), "-")}`,
        ],
        ans: "D",
      },
      {
        id: 54,
        question: `In the reaction <br />
        ${ion(formula("IO", 3), "-")} + 5${ion("I", "-")} + 6${ion(
          "H",
          "+"
        )} -> 3${formula("I", 3)} + 3${formula(
          "H",
          2,
          "O"
        )}, the reducing agent is`,
        options: [
          `${ion("I", "-")}`,
          `${ion(formula("IO", 3), "-")}`,
          `${ion("H", "+")}`,
          `${formula("I", 2)}`,
        ],
        ans: "A",
      },
      {
        id: 55,
        question: `${formula("Zn", "s")} + ${formula(
          ion("Cu", "2+"),
          "aq"
        )} -> ${formula(ion("Zn", "2+"), "aq")} + ${formula(
          "Cu",
          "s"
        )} <br /> From the reaction above, it can be deduced that:`,
        options: [
          `Zn is reduced`,
          `Zn is the oxidized agent`,
          `${ion("Cu", "2+")} loses electrons`,
          `${ion("Cu", "2+")} is the oxidizing agent`,
        ],
        ans: "D",
      },
      {
        id: 56,
        question: `How many electrons are added to ${ion(
          formula("MnO", 4),
          "-"
        )} when it is reduced to ${formula("Mn", "2+")}?`,
        options: [`1`, `3`, `5`, `7`],
        ans: "C",
      },
      {
        id: 57,
        question: `Which of the species in the following equation undergoes reduction? <br />
        6${ion("Fe", "2+")} + ${ion(formula("Cr", 2, "O", 7), "2-")} + 14${ion(
          "H",
          "+"
        )} -> 6${ion("Fe", "3+")} + 2${ion("Cr", "3+")} + 7${formula(
          "H",
          2,
          "O"
        )}`,
        options: [
          `${ion(formula("Cr", 2, "O", 7), "2-")}`,
          `${ion("Fe", "2+")}`,
          `${ion("H", "+")}`,
          `${ion("Fe", "3+")}`,
        ],
        ans: "A",
      },
      {
        id: 58,
        question: `How many grammes of HCl will be required to react with 5g of NaOH? {H = 1, Cl = 35.5, Na = 23, O = 16}`,
        options: [`4.6g`, `9.2g`, `10.1g`, `18.4g`],
        ans: "A",
      },
      {
        id: 59,
        question: `The burning of phosphorus in excess oxygen is represented by the equation <br /> 
        ${formula("P", 4)} + 5${formula("O", 10)} -> ${formula(
          "P",
          4,
          "O",
          10
        )}<br />
        What is the volume of oxygen at s.t.p required for the complete oxidation of 18.6g of phosphorus<br />
        {molar volume of a gas at s.t.p = 22.4${units("dm", 3)}}`,
        options: [
          `5.6${units("dm", 3)}`,
          `11.2${units("dm", 3)}`,
          `16.8${units("dm", 3)}`,
          `20.2${units("dm", 3)}`,
        ],
        ans: "C",
      },
      {
        id: 60,
        question: `5.00g of a mixture of ${formula(
          "CaCO",
          3
        )} and CaO liberated 1.32g of carbon(iv)oxide on strong heating. What is the percentage of CaO in the mixture? { C = 12, O = 16, Ca = 40 }`,
        options: [`60`, `40`, `75`, `25`],
        ans: "B",
      },
      {
        id: 61,
        question: `2g of a mixture of ${formula(
          "Na",
          2,
          "CO",
          3
        )} and NaCl were dissolved in a 250${units(
          "cm",
          3
        )} standard flask. 25${units(
          "cm",
          3
        )} portions of this solution required 26.6${units(
          "cm",
          3
        )} of 0.100moldm${units(
          "dm",
          -3
        )} HCl for neutralization. What is the percentage by mass of ${formula(
          "Na",
          2,
          "CO",
          3
        )} in the mixture?`,
        options: [`40`, `50`, `60`, `70`],
        ans: "D",
      },
      {
        id: 62,
        question: `In the reaction <br />
        ${formula("CaC", 2, "aq")} + 2${formula("H", 2, "O", "l")} -> ${formula(
          "Ca",
          `${formula("OH")}`,
          2,
          "s"
        )} + ${formula("C", 2, "H", 2)}<br />
        what is the mass of solid calcium carbide needed to produce 5.6${units(
          "dm",
          3
        )} of ethyne at s.t.p<br/>
        {G.M.V = 22.4${units("dm", -3)}}`,
        options: [`8g`, `9g`, `16g`, `18g`],
        ans: "C",
      },
      {
        id: 63,
        question: `The volume of 0.20${units("moldm", -3)} ${formula(
          "H",
          2,
          "SO",
          4
        )} that will exactly neutralize 25${units("cm", 3)} of 0.05${units(
          "moldm",
          -3
        )} NaOH solution is`,
        options: [
          `3.1${units("cm", 3)}`,
          `10.4${units("cm", 3)}`,
          `15.6${units("cm", 3)}`,
          `26.2${units("cm", 3)}`,
        ],
        ans: "A",
      },
      {
        id: 64,
        question: `Consider the equation <br />
        ${formula("Fe", "s")} + 2${formula("HCl", "aq")} -> ${formula(
          "FeCl",
          2,
          "aq"
        )} + ${formula("H", 2, "g")}<br />
        what is the mass of iron that would be required to react with 250${units(
          "cm",
          3
        )} of 0.1${units("moldm", -3)} HCl? {Fe = 56 }`,
        options: [`0.3g`, `0.5g`, `0.7g`, `0.9g`],
        ans: "C",
      },
      {
        id: 65,
        question: `2${formula("C", 4, "H", "10")} + 13${formula(
          "O",
          2
        )} -> 8${formula("CO", 2)} + 10${formula("H", 2, "O")} <br />
        From the equation above, what volume of oxygen at s.t.p. is required to burn 100${units(
          "cm",
          3
        )} of butane? [Molar volume of a gas at s.t.p = 22.4${units("dm", 3)}]`,
        options: [
          `500${units("cm", 3)}`,
          `650${units("cm", 3)}`,
          `800${units("cm", 3)}`,
          `900${units("cm", 3)}`,
        ],
        ans: "B",
      },
      {
        id: 66,
        question: `2${formula("Al", "s")} + 6${formula(
          "HCl",
          "aq"
        )} -> 2${formula("AlCl", 3, "aq")} + 3${formula("H", 2, "g")} <br />
        [Avogadro's constant = 6.0 X ${exp(23)}]<br />
        From this equation, the number of molecules of hydrogen gas produced when 0.50 mole of aluminum reacts completelt with excess HCl is`,
        options: [
          `6.0 X ${exp(23)}`,
          `4.5 X ${exp(23)}`,
          `3.0 X ${exp(24)}`,
          `4.5 X ${exp(24)}`,
        ],
        ans: "B",
      },
      {
        id: 67,
        question: `What volume of oxygen at stp would react with carbon to form 13.20g ${formula(
          "CO",
          2
        )} in the reaction represented by the equation below?<br />
        ${formula("C", "s")} + ${formula("O", 2, "g")} -> ${formula(
          "CO",
          2
        )}<br />
        {O = 16, C = 12, molar volume of a gas = 22.4${units(
          "dm",
          -3
        )} at s.t.p}`,
        options: [
          `2.24${units("dm", 3)}`,
          `4.40${units("dm", 3)}`,
          `4.48${units("dm", 3)}`,
          `6.72${units("dm", 3)}`,
        ],
        ans: "D",
      },
      {
        id: 68,
        question: `25.0${units(
          "cm",
          3
        )} of a solution containing 1.33g of ${formula(
          "Na",
          2,
          "CO",
          3
        )} in 250${units("cm", 3)} requires 24.5${units(
          "cm",
          3
        )} of a solution of ${formula(
          "H",
          2,
          "SO",
          4
        )} for complete neutralization. What is the concentration of the acid?`,
        options: [
          `0.01${units("moldm", -1)}`,
          `0.03${units("moldm", -1)}`,
          `0.05${units("moldm", -1)}`,
          `0.07${units("moldm", -1)}`,
        ],
        ans: "C",
      },
      {
        id: 69,
        question: `How many grammes of hydrogen gas would be evolved when 18g of magnesium ribbon is dissolved in 200${units(
          "cm",
          3
        )} of 2 ${units(
          "moldm",
          -3
        )} HCl solution? {H = 1; Cl = 35.5; Mg= 24 }`,
        options: [`0.40g`, `0.75`, `0.80`, `1.50`],
        ans: "A",
      },
      {
        id: 70,
        question: `2.0g of limestone was treated with excess 0.5${units(
          "moldm",
          -3
        )} HCl. The acid left at the end of the reaction required 32${units(
          "cm",
          3
        )} of 0.02${units("moldm", -3)} ${formula(
          "Na",
          2,
          "CO",
          3
        )} solution for neutralization. What is the original volume of the acid.`,
        options: [
          `20${units("cm", 3)}`,
          `40${units("cm", 3)}`,
          `60${units("cm", 3)}`,
          `80${units("cm", 3)}`,
        ],
        ans: "D",
      },
      {
        id: 71,
        question: `Zn + ${formula("H", 2, "SO", 4)} -> ${formula(
          "Zn",
          "SO",
          4
        )} + ${formula("H", 2)} <br />
        In the reaction represented by the equation above, how much of zinc would be left undissolved if 5g of zinc granule is treated with 5-${units(
          "cm",
          3
        )} of 0.500${units("moldm", -3)} ${formula(
          "H",
          2,
          "SO",
          4
        )} solution <br /> {Zn = 65, S = 32, O = 16, H = 1}`,
        options: [`4.3g`, `3.37g`, `2.37g`, `1.37g`],
        ans: "B",
      },
      {
        id: 72,
        question: `100${units("cm", 3)} each of 0.2${units(
          "moldm,-3"
        )} solution of hydrochloric acid and lead(II) trioxonitrate (V) were mixed. Assuming the lead(II) chloride is completely insoluble, the mass of leas(II) chloride precipitated is { Pb = 207, Cl = 35.5, O = 16, N = 14, H = 1}`,
        options: [`9.92g`, `8.54g`, `5.56g`, `2.78g`],
        ans: "D",
      },
      // 2 left here. this is alright for enough practice anyways...
    ],
  },

  {
    topic: "Kinetic Theory of Matter & Gas laws",
    questions: [
      {
        id: 1,
        question: `Which of the following is random motion`,
        options: [
          "planets going around the sun",
          `gas molecules colliding in a container`,
          `a lorry travelling on a straight line`,
          `an athlete running round a circular track`,
        ],
        ans: "B",
      },
      {
        id: 2,
        question: `The measure of the average kinetic energy of the molecules of a gas is the`,
        options: ["mass", `pressure`, `volume`, `temperature`],
        ans: "D",
      },
      {
        id: 3,
        question: `All of the following are the assumptions of the kinetic theory of gases except:`,
        options: [
          "gases are composed of many elastic particles called molecules",
          `the molecules are of negligible sizes`,
          `the molecules collide with one another and with the walls of the container`,
          `the molecules are in constant random motion`,
        ],
        ans: "A",
      },
      {
        id: 4,
        question: `Why are collisions between gas molecules said to be elastic?`,
        options: [
          "no loss of energy after collision",
          `molecules move apart in straight lines after collision`,
          `total momentum decreases after collision`,
          `total momentum increases after collision`,
        ],
        ans: "A",
      },
      {
        id: 5,
        question: `A gas in a container of fixed volume exerts a greater pressure, if heated, because the`,
        options: [
          "number of its molecules increases",
          `distance between its molecules increases`,
          `frequency of collision of its molecules on the walls of the container increases`,
          `molecules of the gas are compressed`,
        ],
        ans: "C",
      },
      {
        id: 6,
        question: `All of the following statements are false except:`,
        options: [
          "the collisions of molecules of a gas with one another are inelastic",
          `the volume of a gas increases as the pressure increases`,
          `the volume of a gas is inversely proportional to its absolute temperature, if pressure is constant`,
          `the average kinetic energy of the molecules of a gas is directly proportional to its temperature`,
        ],
        ans: "D",
      },
      {
        id: 7,
        question: `Under high pressure, real gases deviate from compliance with gas laws because their molecules`,
        options: [
          "experience repulsive forces",
          `have become more energetic`,
          `have become less energetic`,
          `collide inelastically`,
        ],
        ans: "C",
      },
      {
        id: 8,
        question: `The mathematical representation of Boyle's law is`,
        options: [
          "V = K/P (T,n constant)",
          "V = KP (T,n constant)",
          "V = KT (P,n constant)",
          "P = KP (V,n constant)",
        ],
        ans: "A",
      },
      {
        id: 9,
        question: `The ideal gas equation can be represented mathematically as:`,
        options: ["P = nRVT", "PT = nRV", "P = nRT/V", "PV = nR/T"],
        ans: "C",
      },
      // get an ideal gas image, just render it too...
      {
        id: 12,
        question: `An increase in the pressure of a gas at constant temperature leads to`,
        options: [
          "an increase in the density of the gas",
          "a decrease in the density of the gas",
          "a decrease in the molecular mass of the gas",
          "an increase in the number of molecules of the gas",
        ],
        ans: "A",
      },
      {
        id: 13,
        question: `Decreasing the absolute temperature of a gas will lead to`,
        options: [
          "an increase in the kinetic energy of the molecules",
          "an increase in the pressure if volume is constant",
          "a decrease in the volume if the pressure is constant",
          "an increase in the mass of the gas",
        ],
        ans: "C",
      },
      {
        id: 14,
        question: `As the pressure of a gas increases, there will be a decrease in`,
        options: ["temperature", "vapor density", "concentration", "volume"],
        ans: "D",
      },
      {
        id: 15,
        question: `If the pressure of 200${units(
          "cm",
          3
        )} of a gas is halved at constant temperature, what will be its new volume?`,
        options: [
          `400${units("cm", 3)}`,
          `200${units("cm", 3)}`,
          `100${units("cm", 3)}`,
          `50${units("cm", 3)}`,
        ],
        ans: "A",
      },
      {
        id: 16,
        question: `What is the temperature of a given mass of gas initially at 15&deg;C and 18atm, if the pressure is reduced to 6 atm at constant volume?`,
        options: [`288K`, `192K`, `96K`, `300K`],
        ans: "C",
      },
      {
        id: 17,
        question: `A gas occupying an initial volume of 2${units(
          "dm",
          3
        )} is heated and allowed to expand to 6${units(
          "dm",
          3
        )} at constant pressure. The ratio of the initial absolute temperature to the final absolute temperature is:`,
        options: [`3:1`, `1:3`, `2:1`, `1:2`],
        ans: "B",
      },
      {
        id: 18,
        question: `The temperature of a gas is 37&deg;C. At what temperature would its original volume be halved while the pressure is quadrupled?`,
        options: [`310K`, `465K`, `620K`, `775K`],
        ans: "C",
      },
      {
        id: 19,
        question: `From which of the following laws is general gas equation derived?`,
        options: [
          `Dalton's Law and Gay-lussac's Law`,
          `Boyle's Law and Charles's Law`,
          `Gay-Lussac's Law and Graham's Law`,
          `Henry's Law and Graham's Law`,
        ],
        ans: "B",
      },
      {
        id: 20,
        question: `The pressure of a gas that occupies a volume of 600${units(
          "cm",
          3
        )} at 87&deg;C is 900mmHg. What is the pressure of the gas at -33&deg;C if the volume is reduced to 300${units(
          "cm",
          3
        )}`,
        options: [`300 mmHg`, `900 mmHg`, `600 mmHg`, `1200 mmHg`],
        ans: "D",
      },
      {
        id: 21,
        question: `A gas occupies a volume of 0.75${units(
          "dm",
          3
        )} at 27&deg;C and 0.9 atm. The volume of gas at 75&deg;C and 0.9 atm is`,
        options: [
          `0.87${units("dm", 3)}`,
          `0.97${units("dm", 3)}`,
          `1.74${units("dm", 3)}`,
          `1.94${units("dm", 3)}`,
        ],
        ans: "A",
      },
      {
        id: 22,
        question: `A gas initially at 273K is heated such that its volume and pressure become twice their original values. What is the new temperature of the gas?`,
        options: [`546K`, `596K`, `1092K`, `1192K`],
        ans: "C",
      },
      {
        id: 23,
        question: `The pressure exerted by 50${units(
          "cm",
          3
        )} of oxygen gas is 500 mmHg. What would be the new volume of the gas if the pressure increases to 750 mmHg without changing the temperature?`,
        options: [
          `23.3${units("cm", 3)}`,
          `33.3${units("cm", 3)}`,
          `43.3${units("cm", 3)}`,
          `53.3${units("cm", 3)}`,
        ],
        ans: "B",
      },
      {
        id: 24,
        question: `The vapor density of a gas is`,
        options: [
          `the mass of a volume of the gas compared to an equal volume of hydrogen`,
          `the mass of a volume of the gas compared to an equal volume of helium`,
          `the mass of a volume of the gas compared to an equal volume of oxygen`,
          `the mass of a volune of the gas compared to an equal volume of water vapor`,
        ],
        ans: "A",
      },
      {
        id: 25,
        question: `A gas occupies 75${units(
          "dm",
          3
        )} at s.t.p. What volume would it occupy at 27&deg;C and 950 mmHg`,
        options: [
          `85.9${units("dm", 3)}`,
          `75.9${units("dm", 3)}`,
          `65.9${units("dm", 3)}`,
          `55.9${units("dm", 3)}`,
        ],
        ans: "C",
      },
      {
        id: 26,
        question: `A gas occupies a volume of 200${units(
          "cm",
          3
        )} at 18&deg;C and 0.9 atm. Its volume at s.t.p is:`,
        options: [
          `169${units("cm", 3)}`,
          `208${units("cm", 3)}`,
          `338${units("cm", 3)}`,
          `416${units("cm", 3)}`,
        ],
        ans: "A",
      },
      {
        id: 27,
        question: `0.79g of a gas at s.t.p occupied a volume of 250${units(
          "cm",
          3
        )}. What is the relative molecular mass of the gas? (G.M.V at s.t.p = 22.4${units(
          "dm",
          3
        )})`,
        options: [`17`, `32`, `64`, `71`],
        ans: "D",
      },
      {
        id: 28,
        question: `The pressure exerted by a sample of a gas confined in 5.86${units(
          "dm",
          3
        )} container at 20&deg;C is 4.1 atm. What is the number of moles of gas in the sample? (R = 0.082${units(
          "dm",
          3,
          "atmmol",
          -1,
          "K",
          -1
        )})`,
        options: [`1.00`, `2.00`, `3.00`, `4.00`],
        ans: "A",
      },
      {
        id: 30,
        question: `A gas occupies a volume of 5${units(
          "dm",
          3
        )} at 2 atm and 273&deg;C. The number of moles of the gas present is <br /> R = 0.082`,
        options: [`0.45 mol`, `0.33 mol`, `0.22 mol`, `0.17 mol`],
        ans: "C",
      },
      {
        id: 31,
        question: `What do equal volumes of ${formula("CH", 4)} and ${formula(
          "CO",
          2
        )} at s.t.p have in common?`,
        options: [
          `Mass`,
          `Number of molecules`,
          `Rate of diffusion`,
          `Density`,
        ],
        ans: "B",
      },
      {
        id: 32,
        question: `Two 50${units(
          "cm",
          3
        )} cylinders. I and II. contain hydrogen and oxygen respectively at the same temperature and pressure. If there are 3.0 moles of oxygen, then the mass of hydrogen is`,
        options: [`3g`, `6g`, `9g`, `12g`],
        ans: "B",
      },
      {
        id: 33,
        question: `20${units("cm", 3)} of HF gas combines with 10${units(
          "cm",
          3
        )} of a single gas. Which of the following equations correctly represent the reaction?`,
        options: [
          `2${formula("N", 2, "F", 2, "g")} + ${formula(
            "HF",
            "g"
          )} -> ${formula("N", 4, "HF", 5, "g")}`,
          `${formula("N", 2, "F", 2, "g")} + 2${formula(
            "HF",
            "g"
          )} -> ${formula("N", 2, "H", 2, "F", 5, "g")}`,
          `${formula("N", 2, "F", 2, "g")} + 2${formula(
            "HF",
            "g"
          )} -> 2${formula("NHF", 2, "g")}`,
          `${formula("N", 2, "F", 2, "g")} + ${formula("HF", "g")} -> ${formula(
            "N",
            2,
            "HF",
            3,
            "g"
          )}`,
        ],
        ans: "C",
      },
      {
        id: 34,
        question: `In which of the following reactions is Gay-Lussac's Law not applicable?`,
        options: [
          `2${formula("H", 2, "g")} + ${formula("O", 2, "g")} -> 2${formula(
            "H",
            2,
            "O",
            "g"
          )}`,
          `${formula("H", 2, "g")} + ${formula("Cl", 2, "g")} -> 2${formula(
            "HCl",
            "g"
          )}`,
          `${formula("C", "s")} + ${formula("O", 2, "g")} -> ${formula(
            "CO",
            2,
            "g"
          )}`,
          `2${formula("CO", "g")} + ${formula("O", 2, "g")} -> 2${formula(
            "CO",
            2,
            "g"
          )}`,
        ],
        ans: "C",
      },
      {
        id: 35,
        question: `100${units("cm", 3)} of hydrogen are sparked with 40${units(
          "cm",
          3
        )} of oxygen at 100&deg;C and 1 atm. The total volume of the residual gases is`,
        options: [
          `100${units("cm", 3)}`,
          `40${units("cm", 3)}`,
          `60${units("cm", 3)}`,
          `140${units("cm", 3)}`,
        ],
        ans: "A",
      },
      {
        id: 36,
        question: `20${units(
          "cm",
          3
        )} of CO are mixed and sparked with 200${units(
          "cm",
          3
        )} of air containing 21% ${formula(
          "O",
          2
        )}. What is the total volume of the resulting gases if all volumes are measured at s.t.p?`,
        options: [
          `179${("cm", 3)}`,
          `200${units("cm", 3)}`,
          `210${units("cm", 3)}`,
          `220${units("cm", 3)}`,
        ],
        ans: "C",
      },
      {
        id: 37,
        question: `40${units("cm", 3)} of hydrogen are sparked with 160${units(
          "cm",
          3
        )} of oxygen at 100&deg;C and 1 atm. The volume of oxygen left after the reaction is`,
        options: [
          `200${units("cm", 3)}`,
          `160${units("cm", 3)}`,
          `140${units("cm", 3)}`,
          `120${units("cm", 3)}`,
        ],
        ans: "C",
      },
      {
        id: 38,
        question: `50${units("cm", 3)} of hydrogen are sparked with 100${units(
          "cm",
          3
        )} of oxygen at 110&deg;C and 1 atm. If the whole reaction mixture passes through an alkaline solution of pyrogallol the volume of residual gas is`,
        options: [
          `125${units("cm", 3)}`,
          `100${units("cm", 3)}`,
          `75${units("cm", 3)}`,
          `50${units("cm", 3)}`,
        ],
        ans: "D",
      },
      {
        id: 39,
        question: `What is the partial pressure of oxygen gas collected over water at 760 mmHg and 15&deg;C if the saturation vapour pressure of water is 13 mmHg at 15&deg;C?`,
        options: [`783 mmHg`, `760 mmHg`, `747 mmHg`, `737 mmHg`],
        ans: "C",
      },
      {
        id: 40,
        question: `30${units(
          "cm",
          3
        )} of a gas was collected over water at 30&deg;C and 760 mmHg. What is the volume of the dry gas at s.t.p? (saturation vapor pressure of water at 30&deg;C = 32 mmHg)`,
        options: [
          `25${units("cm", 3)}`,
          `26${units("cm", 3)}`,
          `27${units("cm", 3)}`,
          `28${units("cm", 3)}`,
        ],
        ans: "B",
      },
      {
        id: 41,
        question: `200${units(
          "cm",
          3
        )} of nitrogen was collected over water at 22&deg;C and 770 mmHg. If the saturation vapor pressure of water at 22&deg;C was 20 mmHg. Calculate the volume of the gas at 760 mmHg and 17&deg;C.`,
        options: [
          `194${units("cm", 3)}`,
          `184${units("cm", 3)}`,
          `174${units("cm", 3)}`,
          `164${units("cm", 3)}`,
        ],
        ans: "A",
      },
      {
        id: 42,
        question: `A gaseous mixture contains 5 moles of helium, 3 moles of argon and 2 moles of nitrogen. The mole fraction of nitrogen in the mixture is`,
        options: [`2/5`, `1/2`, `3/5`, `1/5`],
        ans: "D",
      },
      {
        id: 43,
        question: `A gaseous mixture of 0.40 mol nitrogen, 0.04 mol helium and 0.60 mol argon exerts a pressure of 6.3 atm. The partial pressure of argon in the mixture is`,
        options: [`0.9 atm`, `1.8 atm`, `2.7 atm`, `3.6 atm`],
        ans: "C",
      },
      {
        id: 44,
        question: `Calculate the minimum volume of oxygen required for the complete combustion of a mixture of 20${units(
          "cm",
          3
        )} of CO and 20${units("cm", 3)} of ${formula("H", 2)}.`,
        options: [
          `10${units("cm", 3)}`,
          `20${units("cm", 3)}`,
          `40${units("cm", 3)}`,
          `50${units("cm", 3)}`,
        ],
        ans: "B",
      },
      {
        id: 45,
        question: `Hydrogen diffuses`,
        options: [
          `twice as fast as oxygen`,
          `thrice as fast as oxygen`,
          `four times as fast as oxygen`,
          `at the same rate`,
        ],
        ans: "C",
      },
      {
        id: 46,
        question: `Which of the following expressions shows the relationship between the velocity(U) of gas molecules and their relative molecular mass(M)?`,
        options: [
          `U = ${units("kM", 0.5)}`,
          `U = ${units("kM", 2)}`,
          `U = ${units("kM", -1)}`,
          `U = ${units("kM", -0.5)}`,
        ],
        ans: "D",
      },
      {
        id: 48,
        question: `If ${formula("SO", 2, "g")} and ${formula(
          "CH",
          4,
          "g"
        )} are released at the same time at the opposite ends of a tube, the rates of diffusion of ${formula(
          "SO",
          2,
          "g"
        )} and ${formula("CH", 4, "g")} will be in the ratio`,
        options: [`2:1`, `4:1`, `1:4`, `1:2`],
        ans: "D",
      },
      {
        id: 49,
        question: `Two gases E and G have densities 0.16${units(
          "gdm",
          -3
        )} and 1.44${units(
          "gdm",
          -3
        )} respectively. The relative rate of diffusion of the two gases is`,
        options: [`0.33`, `3.00`, `3.33`, `0.03`],
        ans: "B",
      },
      {
        id: 50,
        question: `A given volume of sulphur(IV) oxide diffuses in 60 seconds. How long will it take the same volume of methane to diffuse under the same conditions?`,
        options: [`20 seconds`, `30 seconds`, `40 seconds`, `60 seconds`],
        ans: "B",
      },
      {
        id: 51,
        question: `100${units("cm", 3)} of methane (${formula(
          "CH",
          4
        )}) diffuses through a porous plug in 30 seconds. How long will it take 200${units(
          "cm",
          3
        )} of oxygen to diffuse through the same porous plug under the same conditions?`,
        options: [`60 seconds`, `75 seconds`, `85 seconds`, `90 seconds`],
        ans: "C",
      },
      {
        id: 52,
        question: `Consider the gases: CO, ${formula("SO", 2)}, ${formula(
          "H",
          2,
          "S"
        )}, ${formula("NO", 2)} and ${formula(
          "O",
          2
        )}. The increasing order of rates of diffusion of equal volumes of the gases through a porous plug under the same condition is`,
        options: [
          `${formula("H", 2, "S")}, CO, ${formula("NO", 2)}, ${formula(
            "SO",
            2
          )} and ${formula("O", 2)}`,
          `${formula("O", 2)}, ${formula("SO", 2)}, ${formula(
            "H",
            2,
            "S"
          )}, CO, ${formula("NO", 2)}`,
          `${formula("SO", 2)}, ${formula("NO", 2)}, ${formula(
            "H",
            2,
            "S"
          )}, ${formula("O", 2)} and CO`,
          `CO, ${formula("O", 2)}, ${formula("H", 2, "S")}, ${formula(
            "NO",
            2
          )}, ${formula("SO", 2)}`,
        ],
        ans: "C",
      },
    ],
  },

  {
    topic: "Energetics",
    questions: [
      {
        id: 1,
        question: `Which of the following is true when metallic sodium and sodium chloride are each dissolved in water?`,
        options: [
          `Both processes evolve heat`,
          `Both processes absorb heat`,
          `Dissolution of metallic sodium is exothermic while that of sodium is endothermic`,
          `Dissolution of metallic sodium is endothermic while that of sodium chloride is exothermic`,
        ],
        ans: "C",
      },
      {
        id: 2,
        question: `A chemical reaction in which heat is absorbed is said to be`,
        options: [`thermostatic`, `isothermal`, `exothermic`, `endothermic`],
        ans: "D",
      },
      {
        id: 3,
        question: `A change is said to be endothermic if it involves`,
        options: [
          `loss of heat to the surronding`,
          `gain of heat from the surrounding`,
          `attainment of dynamic equilibrium`,
          `liberation of a gas`,
        ],
        ans: "B",
      },
      {
        id: 4,
        question: `A reaction in which &Delta;H is negative is`,
        options: [`isothermic`, `endothermic`, `adiabatic`, `exothermic`],
        ans: "D",
      },
      {
        id: 5,
        question: `For the reaction:<br />
        ${formula("C", "s")} + ${formula("O", 2, "g")} -> ${formula(
          "CO",
          2,
          "g"
        )}: &Delta;H = -393${units("kJmol", -1)}. &Delta;H is the heat of`,
        options: [`solution`, `formation`, `neutralization`, `vaporization`],
        ans: "B",
      },
      {
        id: 7,
        question: `For the reaction:<br />
        ${formula(ion(formula("H", 3, "O"), "+"), "aq")} + ${formula(
          ion(formula("OH"), "-"),
          "aq"
        )} -> 2${formula("H", 2, "O", "l")}<br />
        the heat change accompanying the process is the heat of`,
        options: [`formation`, `hydration`, `neutralization`, `combustion`],
        ans: "C",
      },
      {
        id: 8,
        question: `Which of the following statements is TRUE about the dissolution of sodium hydroxide pellets in water?`,
        options: [
          `It is an endothermic process`,
          `Heat of solution of sodium hydroxide is positve`,
          `Heat is gained from the surrounding`,
          `Heat of solution of sodium hydroxide is negative`,
        ],
        ans: "D",
      },
      {
        id: 9,
        question: `Consider the reactions:<br />
        I. ${formula("C", "s")} + ${formula("O", 2, "g")} -> ${formula(
          "CO",
          2,
          "g"
        )}; &Delta;H = -393 ${units("kJmol", -1)}<br />
        II. ${formula("H", 2, "g")} + 1/2${formula("O", 2, "g")} -> ${formula(
          "H",
          2,
          "O",
          "l"
        )}; &Delta; = -286 ${units("kjmol", -1)}<br />
        Which of the following statement is true`,
        options: [
          `More heat is evolved in (I)`,
          `More heat is evolved in (II)`,
          `More heat is absorbed in (I)`,
          `More heat is absorbed in (II)`,
        ],
        ans: "A",
      },
      {
        id: 11,
        question: `Calculate the enthalpy change for the dissolution of ${formula(
          "SO",
          3
        )} in water to give ${formula("H", 2, "SO", 4)}:<br />
        ${formula("SO", 3)} + ${formula("H", 2, "O")} -> ${formula(
          "H",
          2,
          "SO",
          4
        )}<br />
        Given ${Heat("f", formula("SO", 3))} = -395${units("kjmol", -1)}<br />
        ${Heat("f", formula("SO", 3))}  = -286${units("kjmol", -1)}<br />
        ${Heat("f", formula("SO", 3))}  = -811${units("kjmol", -1)}`,
        options: [`+130kJ`, `-130kJ`, `+1492kJ`, `-1492kJ`],
        ans: "B",
      },
      {
        id: 12,
        question: `The heat of combustion of ethene is -1430${units(
          "kjmol",
          -1
        )}. Calculate the heat of formation of the compound, given that ${Heat(
          "f",
          formula("CO", 2)
        )} and ${Heat("f", formula("H", 2, "O"))} are -393${units(
          "kjmol",
          -1
        )} and -286${units("kjmol", -1)} respectively.`,
        options: [
          `+2788${units("kjmol", -1)}`,
          `-72${units("kjmol", -1)}`,
          `+72${units("kjmol", -1)}`,
          `-2788${units("kjmol", -1)}`,
        ],
        ans: "C",
      },
      {
        id: 13,
        question: `The reduction of iron(III) oxide by aluminium is represented by the chemical equation
        ${formula("Fe", 2, "O", 3, "s")} + 2${formula("Al", "s")} -> ${formula(
          "Al",
          2,
          "O",
          3,
          "s"
        )} + 2${formula("F", 2, "s")}<br />
        What is the entropy change for the reaction if the heats of formation of ${formula(
          "Fe",
          2,
          "O",
          3
        )} and ${formula("Al", 2, "O", 3)} are -822${units(
          "kjmol",
          -1
        )} and -1670${units("kjmol", -1)} respectively`,
        options: [`-848KJ`, `-848kJ`, `+1246kJ`, `-1246Kj`],
        ans: "B",
      },
      {
        id: 14,
        question: `0.92g of ethanol raised the temperature of 100g of water from 298K to 312.3K when burned completely. What is the heat of combustion of ethanol? <br />
        {Specific heat capacity of water = 4.2${units(
          "g",
          -1,
          "K",
          -1
        )}, C = 12, H = 1, O = 16}`,
        options: [
          `+300${units("kjmol", -1)}`,
          `+3000${units("kjmol", -1)}`,
          `-300${units("kjmol", -1)}`,
          `-3000${units("kjmol", -1)}`,
        ],
        ans: "C",
      },
      {
        id: 15,
        question: `An important reaction in the contact process of making tetraoxosulphate(VI) acid is represented by the equation <br />
        2${formula("SO", 2, "g")} + ${formula("O", 2, "g")} -> 2${formula(
          "SO",
          3,
          "g"
        )}<br />
        Given that ${Heat("f", formula("SO", 2))} and ${Heat(
          "f",
          "SO",
          3
        )} are -297${units("kjmol", -1)} and -396${units(
          "kjmol",
          -1
        )} respectively. Calculate the enthalpy change of the reaction`,
        options: ["+99kJ", "-99kJ", "+198kJ", "-198kJ"],
        ans: "D",
      },
      {
        id: 16,
        question: `How much heat will be liberated if 10g of hydrogen burns in excess oxygen according to the following thermochemical equation? <br />
        ${formula("H", 2)} + 1/2${formula("O", 2)} -> ${formula(
          "H",
          2,
          "O"
        )}; &Delta;H = -286kJ`,
        options: ["-1430kJ", "-2860kJ", "-572kJ", "-286kJ"],
        ans: "A",
      },
      {
        id: 19,
        question: `Which of the following reactions is accompanied by a decrease in entropy when carried out at constant temperature?`,
        options: [
          `${formula("MgCO", 3, "s")} -> ${formula("MgO", "s")} + ${formula(
            "CO",
            2,
            "g"
          )}`,
          `${formula("N", 2, "O", "g")} -> 2${formula("NO", 2, "g")}`,
          `${formula("N", 2, "H", 4, "l")} + ${formula(
            "N",
            2,
            "O"
          )} -> 3${formula("H", 2, "g")} + 4${formula("H", 2, "O", "l")}`,
          `2${formula("SO", 2, "g")} + ${formula("O", 2, "g")} -> 2${formula(
            "SO",
            3,
            "g"
          )}`,
        ],
        ans: "D",
      },
      {
        id: 20,
        question: `A process that leads to increase in entropy is`,
        options: [
          `mixing of two solid samples`,
          `condensation of a vapor`,
          `boiling a liquid`,
          `cooling a saturated solution`,
        ],
        ans: "C",
      },
      {
        id: 21,
        question: `The enthalpy and entropy of a system are measures of`,
        options: [
          `degree of randomness and useful work respectively`,
          `heat content and useful work respectively`,
          `heat content and randomness respectively`,
          `randomness and heat content respectively`,
        ],
        ans: "C",
      },
      {
        id: 22,
        question: `The entropy change is positive in the process`,
        options: [
          `${formula("H", 2, "g")} + ${formula("I", 2, "g")} -> 2${formula(
            "HI",
            "g"
          )}`,
          `${formula("H", 2, "O", "l")} -> ${formula("H", 2, "O", "g")}`,
          `${formula("Zn", "s")} + ${ion("Cu", "2+")} -> ${ion(
            "Zn",
            "2+",
            "aq"
          )} + ${formula("Cu", "s")}`,
          `${formula("N", 2, "g")} + 3${formula("H", 2, "g")} -> ${formula(
            "NH",
            3,
            "g"
          )}`,
        ],
        ans: "B",
      },
      {
        id: 23,
        question: `The highest level of molecular disorderliness is found in`,
        options: [
          `Ice at -10&deg;C`,
          `Water at 100&deg;C`,
          `Steam at 100&deg;C`,
          `Ice at 0&deg;C`,
        ],
        ans: "C",
      },
      {
        id: 24,
        question: `A reaction is spontaneous at all temperature if`,
        options: [
          `&Delta;G = 0`,
          `&Delta;G > 0`,
          `&Delta;S < 0 and &Delta;H > 0`,
          `&Delta;S > 0 and &Delta;H < 0`,
        ],
        ans: "D",
      },
      {
        id: 25,
        question: `Which of the following decreases as steam changes to water?`,
        options: [
          `Number of molecules`,
          `Temperature of the system`,
          `Entropy of the system`,
          `Activation energy`,
        ],
        ans: "B",
      },
      {
        id: 26,
        question: `Which of the changes determines the spontaneity of a chemical reaction?`,
        options: [
          `Volume of the reactants`,
          `Free energy of the system`,
          `Entropy of the system`,
          `Enthalpy of the system`,
        ],
        ans: "B",
      },
      {
        id: 27,
        question: `For a reaction to be spontaneous, &Delta;G must be `,
        options: [`equals to &Delta;H`, `zero`, `positive`, `negative`],
        ans: "D",
      },
      {
        id: 28,
        question: `Which of the following reactions is spontaneous?`,
        options: [
          `${formula("H", 2)} + 2${formula("KCl", "s")} -> 2${formula(
            "KF",
            "aq"
          )} + ${formula("Cl", 2, "g")}`,
          `${formula("Cl", 2)} + 2${formula("KF", "aq")} -> 2${formula(
            "KCl",
            "aq"
          )} + ${formula("F", 2, "s")}`,
          `${formula("Br", 2, "g")} + 2${formula("KF", "aq")} -> 2${formula(
            "KBr",
            "aq"
          )} + ${formula("F", 2)}`,
          `${formula("I", 2, "s")} + 2${formula("KCl", "aq")} -> 2${formula(
            "KI",
            "aq"
          )} + ${formula("Cl", 2, "g")}`,
        ],
        ans: "A",
      },
      {
        id: 29,
        question: `A change is spontaneous when it`,
        options: [
          `occurs with assistance from external`,
          `is unaffected by external assistance`,
          `occurs without external assistance`,
          `occurs instanteously`,
        ],
        ans: "C",
      },
    ],
  },

  {
    topic: `Chemical kinetics`,
    questions: [
      {
        id: 1,
        question: `Consider the reaction: <br />
        ${formula("H", 2, "g")} + ${formula("I", 2, "g")} -> 2${formula(
          "HI",
          "g"
        )}<br />
        Which of the following would decrease the number of effective collisions of molecules of the reactants?`,
        options: [
          `Increase in pressure`,
          `Rise in temperature`,
          `Increase in the volume of the reaction vessel`,
          `Introductiron of a catalyst`,
        ],
        ans: "C",
      },
      {
        id: 2,
        question: `Which of the following factors will slow down the speed of the reaction represented by the equation below?<br />
        2${formula("H", 2, "O",2, "l")} -> 2${formula(
          "H",
          2,
          "O",
          "l"
        )} + ${formula("O", 2, "g")}`,
        options: [
          `Exposure of reaction vessel to sunlight`,
          `Addition of distilled water to the reaction vessel`,
          `Increase in temperature`,
          `Presence of manganese(IV) oxide`,
        ],
        ans: "B",
      },
      {
        id: 3,
        question: `${formula("N", 2, "g")} + 3${formula(
          "H",
          2,
          "g"
        )} -> 2${formula("NH", 3, "g")}<br />
        In the chemical reaction above, the substance that will increase the rate of production of ammonia is`,
        options: [
          `platinum`,
          `vanadium(V) oxide`,
          `finely divided nickel`,
          `finely divided iron`,
        ],
        ans: "D",
      },
      {
        id: 6,
        question: `The activation energy of a reaction can be reduced by`,
        options: [
          `increasing the reaction temperature`,
          `increasing the surface area of the reactants`,
          `introducing a suitable catalyst`,
          `increasing reactant concentration`,
        ],
        ans: "C",
      },
      // looking for the best place to shuffle up answers actually...
      // shuffling requires planning..
      {
        id: 10,
        question: `The presence of a catalyst in a reaction mixture changes the`,
        options: [
          `reaction pathway`,
          `enthalpy change of reaction`,
          `equilibrium position`,
          `yield of products`,
        ],
        ans: "A",
      },
      {
        id: 11,
        question: `The change that occurs when a photographic film is exposed to sunlight is`,
        options: [
          `${ion("Ag", "+")} + ${ion("Br", "+")} -> ${formula("AgBr")}`,
          `${formula("Ag")} -> ${ion("Ag", "+")} + ${ion("e", "-")}`,
          `${ion("Ag", "+")} + ${ion("e", "-")} -> Ag`,
          `${formula("AgBr")} -> ${ion("Ag", "+")} + ${ion("Br", "-")}`,
        ],
        ans: "C",
      },
      {
        id: 12,
        question: `Which of the following factors is responsible for an increase in the rate of a chemical reaction in heating?`,
        options: [
          `Increase in enthalpy`,
          `Increase in collision rate`,
          `Increase in reactant concentration`,
          `Decrease in activation energy`,
        ],
        ans: "B",
      },
      {
        id: 13,
        question: `The reaction between 10g of iron fillings and 1.0${units(
          "moldm",
          -3
        )} HCl can be made to proceed faster by`,
        options: [
          `using 0.50 ${units("moldm", -3)} acid instead`,
          `adding 1.0 ${units("moldm", -3)} NaOH`,
          `cooling the reaction vessel`,
          `adding some concentratoin HCl`,
        ],
        ans: "D",
      },
      {
        id: 14,
        question: `A rod form of a metal burns less readily in air than the finely divided form because the rod has`,
        options: [
          `different chemical properties`,
          `protective oxide coating`,
          `larger surface area exposed`,
          `smaller surface area exposed`,
        ],
        ans: "D",
      },
      {
        id: 16,
        question: `A set of conditions that can quicken a chemical reaction is`,
        options: [
          `low temperature and high reactant concentration`,
          `high temperature , presence of a catalyst and small reactant surface area`,
          `presence of a catalyst and darkness`,
          `high temperature, high reactant concentration and large reactant surface area`,
        ],
        ans: "D",
      },
      {
        id: 17,
        question: `What is the role of finely divided iron in the Haber process of manufacturing ammonia`,
        options: [
          `Reducing agent`,
          `Oxidizing agent`,
          `Dehydrating agent`,
          `Catalyzing agent`,
        ],
        ans: "D",
      },
      {
        id: 19,
        question: `Which of the reactoins of marble with dilute HCl is fastest?`,
        options: [
          `5g of marble lump at 50&deg;C`,
          `5g of marble lump at 25&deg;C`,
          `5g of marble powder at 50&deg;C`,
          `5g of marble powder at 25&deg;C`,
        ],
        ans: "C",
      },
      {
        id: 20,
        question: `${formula("Zn", "s")} + ${formula(
          "H",
          2,
          "SO",
          4
        )} -> ${formula("ZnSO", 4 < "aq")} + ${formula("H", 2, "g")}<br />
        The rate of evolution of hydrogen gas in the above reaction will be greatly increased if`,
        options: [
          `the zinc is in the form of pallets`,
          `a smaller volume of ${formula("H", 2, "SO", 4)} is used`,
          `the reaction flask is immersed in an ice bath`,
          `the zinc is in the powdered form`,
        ],
        ans: "D",
      },

      {
        id: 21,
        question: `The minimum amount of energy that colliding molecules must possess for their collsions to be effective is`,
        options: [
          `thermal energy`,
          `collision theory`,
          `activation energy`,
          `kinetic energy`,
        ],
        ans: "A",
      },

      {
        id: 18,
        question: `The times taken for the reaction sodium thiosulfate and hydrochloric acid to liberate iodine at various temperatrues are given below:<br />
        Temp(&deg;C):  30 40 50<br />
        Time(seconds): 80 40 20<br />
        It can be deduced from the results that `,
        options: [
          `for a 10&deg;C rise in temperature, the reaction rate is doubled`,
          `for a 10&deg;C rise in temperature, the reaction is tripled`,
          `for a 10&deg;C rise in temperature, the reaction rate is halved`,
          `for a 10&deg;C rise in temperature, the reaction rate is quadrupled`,
        ],
        ans: "A",
      },
    ],
  },

  {
    topic: "Chemical equilibrium",
    questions: [
      {
        id: 1,
        question: `A chemical equilibrium is established when`,
        options: [
          `concentrations of the reactants are less than those of the products`,
          `concentrations of the reactants and products remain unchanged`,
          `reactants in the system are completely used up`,
          `reactants in the system stop forming the products`,
        ],
        ans: "C",
      },
    ],
  },

  {
    topic: "Matter",
    questions: [
      {
        id: 1,
        question: `A liquid begins to boil when`,
        options: [
          `constituent particles acquire energy which make them slide over one another`,
          `constituent particles acquire energy above the average energy`,
          `constituents particles acquire energy below the average kinetic energy`,
          `constituent particles acquire a greater kinetic energy`,
        ],
        ans: "B",
      },
      {
        id: 2,
        question: `Pure water can be made to boil below 100&deg;C under`,
        options: [
          `increased volume`,
          `decreased volume`,
          `increased external pressure on it`,
          `decreased external pressure on it`,
        ],
        ans: "D",
      },
      {
        id: 5,
        question: `Ice, water and steam`,
        options: [
          `have the same physical properties`,
          `are different allotropes`,
          `are chemically alike`,
          `have different molar masses`,
        ],
        ans: "C",
      },
      {
        id: 7,
        question: `The addition of water to calcium carbide results to`,
        options: [
          `a mixture`,
          `no change`,
          `a chemical change`,
          `a physical change`,
        ],
        ans: "C",
      },
      {
        id: 8,
        question: `At the melting point of a solid, the constituent particles`,
        options: [
          `acquire energy much below the average kinetic energy`,
          `vibrate vigorously and acquire energy that overcomes the attractive forces`,
          `acquire energy slightly less than the attractive forces`,
          `acquire energy equal to the attractive forces`,
        ],
        ans: "B",
      },
      {
        id: 9,
        question: `An organic solid melts between 115&deg;C - 122&deg;C. This indicates that that the solid is`,
        options: [`pure`, `impure`, `efflorescent`, `hygroscopic`],
        ans: "B",
      },
      {
        id: 10,
        question: `A physical property is`,
        options: [
          `rusting`,
          `precipitation`,
          `neutralization`,
          `melting point`,
        ],
        ans: "D",
      },
      {
        id: 11,
        question: `An example of physical change is`,
        options: [
          `rusting of iron`,
          `souring of milk`,
          `burning of wood`,
          `dissolution of a salt in water`,
        ],
        ans: "D",
      },
      {
        id: 12,
        question: `What do allotropes have in common?`,
        options: [
          `melting point`,
          `solubility`,
          `chemical reactions`,
          `state of matter`,
        ],
        ans: "C",
      },
      {
        id: 13,
        question: `Metals conduct an electric current due to the presence of`,
        options: [
          `bounded electrons`,
          `free mobile electrons`,
          `crystal lattice structure`,
          `vacant atomic orbitals`,
        ],
        ans: "B",
      },
      {
        id: 14,
        question: `Which of the following oxides would produce an aqeuous solution having a pH less than 7?`,
        options: [
          `sodium oxide`,
          `calcium oxide`,
          `copper(II) oxide`,
          `carbon(IV) oxide`,
        ],
        ans: "D",
      },
      {
        id: 15,
        question: `The phenomenon in which carbon exists in two major forms in the solid state is known as`,
        options: [`isomorphism`, `allotropy`, `isomerism`, `isotopy`],
        ans: "B",
      },
      {
        id: 16,
        question: `Iron can be extracted from`,
        options: [`haemitite`, `cryolite`, `cassiterite`, `bauxite`],
        ans: "A",
      },
      {
        id: 17,
        question: `Diamond is used in abrasives because of its`,
        options: [`high melting point`, `lustre`, `hardness`, `density`],
        ans: "C",
      },
      {
        id: 18,
        question: `An alloy of mercury is:`,
        options: [
          `coinage bronze`,
          `soft solder`,
          `amalgam`,
          `stainless steel`,
        ],
        ans: "C",
      },
      {
        id: 19,
        question: `Which one of the following oxide is amphoteric`,
        options: [
          `MgO`,
          `${formula("CO", 2)}`,
          `${formula("Al", 2, "O", 3)}`,
          `CuO`,
        ],
        ans: "C",
      },
      {
        id: 20,
        question: `All the following statements are false except`,
        options: [
          `Metals conduct electricity while non-metals do not`,
          `Metals form basic oxides while non-metals form acidic oxides only`,
          `In the electrochemical series, metals are above hydrogen while non-metals are below hydrogen`,
          `Metals are malleable while non-metals are brittle`,
        ],
        ans: "D",
      },
      {
        id: 21,
        question: `The constituents of stainless steel are`,
        options: [
          `carbon, iron and lead`,
          `carbon, iron and chromium`,
          `carbon, iron and copper`,
          `carbon, iron and silver`,
        ],
        ans: "B",
      },
      {
        id: 22,
        question: `In which of the following pairs of elements do the two elements exhibit allotropy`,
        options: [
          `phosphorus and hydrogen`,
          `oxygen and chlorine`,
          `sulfur and nitrogen`,
          `oxygen and sulfur`,
        ],
        ans: "D",
      },
      {
        id: 23,
        question: `All the following allotropes cannot conduct electricity except`,
        options: [`rhombic sulfur`, `graphite`, `diamond`, `red phosphorus`],
        ans: "B",
      },
      {
        id: 24,
        question: `Bronze is an alloy of copper and`,
        options: [`aluminium`, `zinc`, `tin`, `iron`],
        ans: "C",
      },
      {
        id: 25,
        question: `Brass is an alloy of`,
        options: [
          `copper and zinc`,
          `copper and tin`,
          `iron and zinc`,
          `lead and aluminium`,
        ],
        ans: "A",
      },
      {
        id: 26,
        question: `Which of the following oxides is neutral?`,
        options: [
          `${formula("SO", 2)}`,
          `${formula("Al", 2, "O", 3)}`,
          `${formula("CO")}`,
          `${formula("CO", 2)}`,
        ],
        ans: "C",
      },
      {
        id: 27,
        question: `In which of the following pairs is each of the two members forms higher oxide on reacting with oxygen?`,
        options: [
          `${formula("SO", 2)} and ${formula("NO")}`,
          `${formula("CO", 2)} and ${formula("H", "2", "O")}`,
          `${formula("CO")} and ${formula("CO", 2)}`,
          `${formula("NO")} and ${formula("H", 2, "O")}`,
        ],
        ans: "A",
      },
      {
        id: 28,
        question: `An element that would combine with oxygen to form an amphoteric oxide is`,
        options: [`Mg`, `Al`, `Ag`, `Cu`],
        ans: "B",
      },
      {
        id: 29,
        question: `The following are chemical changes except`,
        options: [
          `passing of steam over heated iron`,
          `dissolution of sodium choride in water`,
          `bubbling of chlorine into a jar containing hydrogen`,
          `bubbling of chlorine into water`,
        ],
        ans: "B",
      },
      {
        id: 30,
        question: `The following are pairs of impure substances only except`,
        options: [
          `Petroleum and Rubber Latex`,
          `Ethanol and Propanone`,
          `Petroleum and Ethanol`,
          `Rubber Latex and Propanone`,
        ],
        ans: "B",
      },
      {
        id: 31,
        question: `Duralumin is an alloy consisting of`,
        options: [
          `copper, aluminium, lead and manganese`,
          `deuterium and aluminium`,
          `aluminium, copper, manganese and magnesium`,
          `nickel, gold, aluminium and copper`,
        ],
        ans: "C",
      },
      {
        id: 32,
        question: `Which of the following is an impure substance?`,
        options: [
          `Distilled water`,
          `Ethanoic acid`,
          `Sulfur powder`,
          `Bronze`,
        ],
        ans: "D",
      },
      {
        id: 33,
        question: `Given the following equations: <br />
        ${formula("Al", 2, "O", 3, "s")} + 6${formula(
          "HCl",
          "aq"
        )} -> 2${formula("AlCl", 3, "aq")} + 3${formula("H", 2, "O", "l")}<br />
        ${formula("Al", 2, "O", 3, "s")} + 2${formula(
          "KOH",
          "aq"
        )} + 3${formula("H", 2, "O", "l")} -> 2KAl${formula(
          "(OH)",
          4,
          "aq"
        )} <br />
        It can be deduced that ${formula("Al", 2, "O", 3)} is`,
        options: [
          `a neutral oxide`,
          `an acidic oxide`,
          `a basic oxide`,
          `an amphoteric oxide`,
        ],
        ans: "D",
      },
      {
        id: 34,
        question: `The passage of sulphur(IV) oxide gas into water leads to`,
        options: [
          `a mixture`,
          `an exothermic change`,
          `a chemical change`,
          `a physical change`,
        ],
        ans: "C",
      },
      {
        id: 35,
        question: `Alloys are preferred to pure metals in construction works because`,
        options: [
          `metals are malleable and ductile`,
          `alloys are mixtures of metals`,
          `metals are harder than alloys`,
          `metallic properties are improved upon in alloys`,
        ],
        ans: "D",
      },
      {
        id: 36,
        question: `The following statements about graphite are correct except that it`,
        options: [
          `is a form of carbon`,
          `contains mobile free ions`,
          `is used as a lubricant`,
          `has a layer lattice structure`,
        ],
        ans: "B",
      },
      {
        id: 37,
        question: `Which of the following metallic oxides is amphoteric?`,
        options: [`PbO`, `CuO`, `MgO`, `${formula("Fe", 2, "O", 3)}`],
        ans: "A",
      },
      {
        id: 38,
        question: `Diamond and graphite are forms of the same element (carbon) because they`,
        options: [
          `both have the same density`,
          `both conduct electricity`,
          `both form carbon(IV) oxide on combustion`,
          `are both used as lubricants`,
        ],
        ans: "C",
      },
      {
        id: 39,
        question: `The ore which aluminium is extracted is`,
        options: [`cassiterite`, `magnetite`, `malachite`, `bauxite`],
        ans: "D",
      },
      {
        id: 40,
        question: `Metals are ductile because they`,
        options: [
          `can be hammered into sheets`,
          `can be drawn into different shapes`,
          `can be alloyed`,
          `can make a sound note when struct`,
        ],
        ans: "B",
      },
      {
        id: 41,
        question: `Which of the following is not a metal ore?`,
        options: [`Haemetite`, `Graphite`, `Cassiterite`, `Bauxite`],
        ans: "B",
      },
      {
        id: 42,
        question: `Which of the following alloys is used in the building of the body of aircraft`,
        options: [`Duralumin`, `Brass`, `Bronze`, `Steel`],
        ans: "A",
      },
      {
        id: 43,
        question: `Aluminium is extracted from its ore by`,
        options: [
          `reduction with coke`,
          `oil floatation`,
          `roasting`,
          `electrolytic reduction`,
        ],
        ans: "D",
      },
      {
        id: 44,
        question: `Graphite is used as a lubricant because it`,
        options: [
          `has a sliding layer structure`,
          `has mobile free electrons`,
          `is an allotrope of carbon`,
          `has no free electrons`,
        ],
        ans: "A",
      },
      {
        id: 45,
        question: `The following gases may be dried with conc. ${formula(
          "H",
          2,
          "SO",
          4
        )} except`,
        options: [
          `${formula("SO", 2)}`,
          `${formula("NH", 3)}`,
          `${formula("HCl")}`,
          `${formula("N", 2)}`,
        ],
        ans: "B",
      },
      {
        id: 46,
        question: `Which of the following compounds is deliquescent?`,
        options: [
          `NaCl`,
          `${formula("NaNO", 3)}`,
          `${formula("Na", 2, "CO", 3)}.10${formula("H", 2, "O")}`,
          `${formula("CaCl", 2)}`,
        ],
        ans: "D",
      },
      {
        id: 47,
        question: `An anhydride is an oxide whose aqueous solution has`,
        options: [
          `a pH less than 7`,
          `no water of crystallization`,
          `hydrogen atoms`,
          `a pH grater than 7`,
        ],
        ans: "A",
      },
      {
        id: 48,
        question: `An oxide is said to be amphoteric if`,
        options: [
          `it is an amorphous oxide of a metal`,
          `it is an amorphous oxide of a non-metal`,
          `it loses its oxygen on sublimation`,
          `it behaves both as a base as well as an acid`,
        ],
        ans: "D",
      },
      {
        id: 49,
        question: `Sodium tetraoxosulfate(VI) decahydrate loses its water of crystallization on exposure to air. The process is known as`,
        options: [
          `dehydration`,
          `efflorescency`,
          `hygroscopy`,
          `deliquescency`,
        ],
        ans: "B",
      },
      {
        id: 50,
        question: `A substance commonly used for drying ammonia gas is`,
        options: [
          `concentrated tetraoxosulfate(VI) acid`,
          `magnesium trioxonitrate(V)`,
          `quicklime`,
          `anhydrous calcium carbide`,
        ],
        ans: "C",
      },
      {
        id: 51,
        question: `Which of the following substances is not hygroscopic`,
        options: [
          `NaOH pellets`,
          `conc. ${formula("H", 2, "SO", 4)}`,
          `anhydrous ${formula("FeCl", 3)}`,
          `anhydrous ${formula("Na", 2, "CO", 3)}`,
        ],
        ans: "D",
      },
      {
        id: 52,
        question: `Which of the following compounds is efflorescent?`,
        options: [
          `Concentrated ${formula("H", 2, "SO", 4)}`,
          `${formula("CuO")}`,
          `${formula("Na", 2, "CO", 3)}.10${formula("H", 2, "O")}`,
          `Fused ${formula("CaCl", 2)}`,
        ],
        ans: "C",
      },
      {
        id: 53,
        question: `The increase in mass of fused calcium chloride on exposure to the atmosphere can be attributed to the presence of`,
        options: [`moisture`, `dust particles`, `nitrogen`, `noble gases`],
        ans: "A",
      },
      {
        id: 54,
        question: `Compounds that are deliquescent are also said to be`,
        options: [`insoluble`, `efflorescent`, `anhydrous`, `hygroscopic`],
        ans: "D",
      },
      {
        id: 55,
        question: `A compound that absorbs moisture from the atmosphere and eventually forms a solution is said to be`,
        options: [`efflorescent`, `hygroscopic`, `anhydrous`, `deliquescent`],
        ans: "D",
      },
      {
        id: 56,
        question: `If two weighed salts W and X were left exposed in the laboratory overnight. In the following morning W has gained weight and X has turned into a liquid, what can be said of W and X?`,
        options: [
          `X is efflorescent`,
          `W and X are efflorescent`,
          `W and X are deliquescent`,
          `W and X are hygroscopic`,
        ],
        ans: "D",
      },
      {
        id: 57,
        question: `On exposure to dry atmosphere, the crystals of sodium trixocarbonate(IV) changed to a white powder. The phenomenon that accounts or this is?`,
        options: [`efflorescence`, `hygroscopy`, `oxidation`, `deliquescence`],
        ans: "A",
      },
      {
        id: 58,
        question: `Which one of the following contains an efflorescent, a deliquescent and a hygroscopic substance respectively`,
        options: [
          `${formula("Na", 2, "SO", 4)}, concentrated ${formula(
            "H",
            2,
            "SO",
            4
          )}, ${formula("CaCl", 2)}`,
          `${formula("Na", 2, "CO", 3)}.${formula("H", 2, "O")}, ${formula(
            "FeSO",
            4
          )}.7${formula("H", 2, "O")}, concentrated ${formula(
            "H",
            2,
            "SO",
            4
          )}`,
          `${formula("Na", 2, "CO", 3)}.10${formula("H", 2, "O")}, ${formula(
            "NaOH"
          )} pellet, concentrated ${formula("H", 2, "SO", 4)}`,
          `concentrated ${formula("H", 2, "SO", 4)}, ${formula(
            "FeSO",
            4
          )}.7${formula("H", 2, "O")}, ${formula("Mg", "Cl", 2)}`,
        ],
        ans: "C",
      },
      {
        id: 59,
        question: `Why should sodium hydroxide pellets be stored in properly closed containers? A NaOH pellets`,
        options: [
          `readily absorbs water vapor from the air`,
          `is easily oxidized by atmospheric oxygen`,
          `turns golden yellow when exposed to light`,
          `melts at a low temperature`,
        ],
        ans: "A",
      },
      {
        id: 60,
        question: `The scattering of a beam of light in a gel is known as`,
        options: [
          `dialysis`,
          `brownian motion`,
          `tyndall effect`,
          `fluorescence`,
        ],
        ans: "C",
      },
      {
        id: 61,
        question: `A mixture of two immiscible liquids can be separated by`,
        options: [
          `separating funnel`,
          `distillation`,
          `filtration`,
          `chromatography`,
        ],
        ans: "A",
      },
      {
        id: 62,
        question: `The method of sepatation employed in separating sodium chloride crystals from seawater is`,
        options: [
          `neutralization`,
          `evaporation`,
          `sedimentation`,
          `condensation`,
        ],
        ans: "B",
      },
      {
        id: 63,
        question: `The factor considered in chromatography, a method of separation, is the difference in the rate of`,
        options: [
          `diffusion of the constituents of a mixture`,
          `migration of the constituents of a mixture`,
          `reaction of the constituents of a mixture`,
          `sedimentation of the constituents of a mixture`,
        ],
        ans: "B",
      },
      {
        id: 64,
        question: `The salient difference between colloids and suspensions is the fact that while colloids`,
        options: [
          `do not scatter light, suspension do`,
          `can be separated by filtration, suspensions cannot be so separated`,
          `can be separated by a membrane, suspensions cannot`,
          `do not settle on standing, suspensions do`,
        ],
        ans: "D",
      },
      {
        id: 65,
        question: `Ammonium chloride can be separated from an impure source by`,
        options: [`distillation`, `filtration`, `decantation`, `sublimation`],
        ans: "D",
      },
      {
        id: 66,
        question: `What is the constituent that is common to both bronze and brass?`,
        options: [`zinc`, `copper`, `aluminium`, `lead`],
        ans: "B",
      },
      {
        id: 68,
        question: `The nitrogen got from the liquefaction of air is denser than that got from nitrogen containing compounds due to the fact that the former contains`,
        options: [`oxygen`, `noble gases`, `water vapor`, `carbon(IV) oxide`],
        ans: "B",
      },
      {
        id: 69,
        question: `The collision of dust particles randomly in a beam of sunlight is termed`,
        options: [
          `diffusion`,
          `dialysis`,
          `tyndall effect`,
          `brownian movement`,
        ],
        ans: "D",
      },
      {
        id: 70,
        question: `All the following factors affect the choice of methods for separation of mixtures except`,
        options: [
          `molar mass`,
          `solubility`,
          `particle size`,
          `magnetic property`,
        ],
        ans: "A",
      },
      {
        id: 71,
        question: `Which will be the residue in the reaction represented by the equation below if the reaction mixture is filtered? <br />
        ${formula("I", "aq")} + ${formula("J", "aq")} -> ${formula(
          "K",
          "s"
        )} + ${formula("M", "aq")} + ${formula("N", "aq")}`,
        options: [`I`, `J`, `K`, `M`],
        ans: "C",
      },
      {
        id: 72,
        question: `The separatory funnel technique is based on difference in`,
        options: [
          `bioling point`,
          `volatility`,
          `particle size`,
          `miscibility`,
        ],
        ans: "D",
      },
      {
        id: 73,
        question: `Which of the following mixtures can be separated by means of filtration?`,
        options: [
          `sodium chloride and potassium trioxonitrate(V)`,
          `sodium chloride and sand`,
          `sodium chloride and lead trioxonitrate(V)`,
          `sodium chloride and sugar`,
        ],
        ans: "B",
      },
      {
        id: 74,
        question: `Chlorophyll pigment can be shown to be a mixture of chemical compounds by`,
        options: [
          `crystallization`,
          `hydrolysis`,
          `sublimation`,
          `chromatography`,
        ],
        ans: "A",
      },
      {
        id: 75,
        question: `The separation of a band of ink into its various components is by`,
        options: [
          `fractional crystallization`,
          `fractional distillation`,
          `chromatography`,
          `sublimation`,
        ],
        ans: "C",
      },
      {
        id: 76,
        question: `One of the following is a mixture`,
        options: [
          `granulated sugar`,
          `sea-water`,
          `sodium chloride`,
          `iron fillings`,
        ],
        ans: "B",
      },
      {
        id: 77,
        question: `In which of the following can fractional distillation be used as a means of sepatation?`,
        options: [
          `Nitrogen from liquid air`,
          `Sodium chloride from seawater`,
          `Iodine from a solution of iodine in carbon tetrachloride`,
          `Sulfur from a solution of sulfur in carbon disulphide`,
        ],
        ans: "A",
      },
      {
        id: 78,
        question: `The following mixtures are homogenous except`,
        options: [`filtered seawater`, `air`, `flood water`, `writing ink`],
        ans: "C",
      },
      {
        id: 79,
        question: `An emulsion paint is a colloid in which`,
        options: [
          `gas or liquid particle dispersed in a liquid`,
          `liquid particles dispersed in a liquid`,
          `solid particles dispersed in a liquid`,
          `solid particles dispersed in a solid`,
        ],
        ans: "B",
      },
      {
        id: 80,
        question: `When air is passed through alkaline solution of pyrogallol, lime water and then over fused calcium chloride, the gases left are:`,
        options: [
          `oxygen and nitrogen`,
          `the noble gases and water vapor`,
          `nitrogen and noble gases`,
          `nitrogen, noble gases and carbon(IV) oxide`,
        ],
        ans: "C",
      },
      {
        id: 81,
        question: `Which of the following separation techniques is used to isolate high quality ethanol from palm wine?`,
        options: [
          `evaporation`,
          `simple distillation with a dehydrant`,
          `fractional distillation with a dehydrant`,
          `fractional distillation without a dehydrant`,
        ],
        ans: "C",
      },
      {
        id: 82,
        question: `Mist consists of`,
        options: [
          `solid particles dispersed in liquid`,
          `liquid particles dispersed in liquid`,
          `gas or liquid particles dispersed in liquid`,
          `liquid particles dispersed in gas`,
        ],
        ans: "D", // CONFIRM ANSWER
      },
      {
        id: 83,
        question: `Petroleum is refined into useful products by`,
        options: [
          `catalytic reforming`,
          `column chromatography`,
          `fractional distillation`,
          `thermal decomposition`,
        ],
        ans: "C",
      },
      {
        id: 84,
        question: `The physical property used in obtaining nitrogen and oxygen industrially from liquid air is the`,
        options: [
          `melting point`,
          `boiling point`,
          `diffusion`,
          `retention factor`,
        ],
        ans: "B",
      },
      {
        id: 85,
        question: `Soap lather is a colloidal system in which a`,
        options: [
          `gas is dispersed in a liquid`,
          `liquid is dispersed in another liquid`,
          `solid is dispersed in a liquid`,
          `liquid is dispersed in a gas`,
        ],
        ans: "A",
      },
      {
        id: 86,
        question: `A chemical reaction is involved in`,
        options: [
          `fractional distillation`,
          `precipitation`,
          `chromatography`,
          `sublimation`,
        ],
        ans: "B",
      },
      {
        id: 87,
        question: `The solute in a colloidal solution can`,
        options: [
          `sedimentate`,
          `scatter light rays`,
          `not scatter light rays`,
          `not dialyze`,
        ],
        ans: "B",
      },
      {
        id: 88,
        question: `A sample of air that has been passed through caustic soda will`,
        options: [
          `be free of noble gas`,
          `not turn lim water milky`,
          `rekindle a glowing splint`,
          `be moisture free`,
        ],
        ans: "B",
      },
      {
        id: 89,
        question: `A mixture of ${formula("KCl", "s")} and ${formula(
          "CuCO",
          3,
          "s"
        )} is best separated by`,
        options: [
          `dissolution followed by crystallization`,
          `dissolution followed by filtration`,
          `dissolution followed by sublimation`,
          `dissolution follwed by evaporation`,
        ],
        ans: "B",
      },
      {
        id: 90,
        question: `A separatory funnel can be used to separate a mixture of water and`,
        options: [
          `methanol`,
          `methylated spirit`,
          `methanoic acid`,
          `petroleum spirit`,
        ],
        ans: "D",
      },
      {
        id: 91,
        question: `A small quantity of solid ammonium chloride ${formula(
          "NH",
          4,
          "Cl"
        )}was heated gently in a test-tube, the solid gradually disappeared to produce a mixture of two gases. Later a white cloudy deposit was observed on the cooler part of the test tube. The ammonium chloride is said to have undergone`,
        options: [
          `distillation`,
          `sublimation`,
          `precipitation`,
          `evaporation`,
        ],
        ans: "B",
      },
      {
        id: 92,
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
        id: 93,
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
        id: 94,
        question: `Methanoic acid mixes with water in all proportions and has the same boiling point as water. Which of the following methods would you adopt to obtain pure water from sand and methanoic acid`,
        options: [
          `fractional distillation`,
          `filtration followed by distillation`,
          `neutralization with sodium hydroxide followed by distillation`,
          `neutralization with sodium hydroxide followed by filtration`,
          `esterification with ethanol followed by distillation`,
        ],
        ans: "C",
        // not yet solved
      },
      {
        id: 95,
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
        id: 96,
        question: `In an attempt to remove sugar from a beaker containing a quantity of sand and sugar, 2M ammonium chloride solution was accidentally added instead of water. Which of the following methods could be used to remove ammonium chloride from the mixture.`,
        options: [
          `fractional distillation`,
          `crystallization`,
          `filtration followed by sublimation`,
          `evaporation followed by sublimation`,
          `filtration`,
        ],
        ans: "D",
        remark: `The answer to this in my opinion is D because evaporation drives off water and sublimation removes ammonium chloride, which return us back to square 1, a mixture of sand and sugar again. But note that the question is particularly about the removal of ammonium chloride.`,
        // not yet solved
      },
      {
        id: 97,
        question: `Which of the following compounds and elements would sublime on exposure to the atmosphere`,
        options: [`ice`, `sulphur`, `phosphorus`, `iodine`, `potassium iodide`],
        ans: "D",
      },
      {
        id: 98,
        question: `Which of the following process does NOT lead to chemical change.`,
        options: [
          `stirring iron in sulphur(VI) acid`,
          `stirring sodium carbonate in water`,
          `stirring glucose in conc. Sulphuric acid`,
          `mixing sulphuric acid with potassium carbonate`,
          `titrating an acid against a base`,
        ],
        ans: "B",
        remark: "B is just adding salt to water which produces nothing new.",
      },
      {
        id: 99,
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
        id: 100,
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
        id: 101,
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
        id: 102,
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
        id: 103,
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
        id: 104,
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
        id: 105,
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
        id: 106,
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
        id: 107,
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
        id: 108,
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
        id: 109,
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
        id: 110,
        question: `Which of the following substances is a mixture`,
        options: [`sulphur powder`, `bronze`, `distilled water`, `ethanol`],
        ans: "B",
      },
      {
        id: 111,
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
        id: 112,
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
        id: 113,
        question: `Chromatography is used to separate components of mixtures which differs in their rates of`,
        options: [`diffusion`, `migration`, `reaction`, `sedimentation`],
        ans: "B",
      },
      {
        id: 114,
        question: `Which of the following is an example of chemical change.`,
        options: [
          `Dissolution of salt in water`,
          `Rusting of iron`,
          `Melting of ice`,
          `Separation of a mixture by distillation`,
        ],
        ans: "B",
      },
      {
        id: 115,
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
        id: 116,
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
        id: 117,
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
        id: 118,
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
        id: 119,
        question: `Pure solvents are obtained by`,
        options: [`distillation`, `condensation`, `extraction`, `evaporation`],
        ans: "A",
      },
      {
        id: 120,
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
        id: 121,
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
        id: 122,
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
        id: 123,
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
        id: 124,
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
        id: 125,
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
        id: 126,
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
        id: 127,
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
        id: 128,
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
        id: 129,
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
        id: 130,
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
        id: 131,
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
        id: 132,
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
        id: 133,
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
        id: 134,
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
        id: 135,
        question: `Which of the following is an example of a mixture?`,
        options: [`blood`, `sand`, `washing soda`, `common salt`],
        ans: "A",
      },
      {
        id: 136,
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
        id: 137,
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
        id: 138,
        question: `The presence of impurities in a solid will cause the melting point to`,
        options: [`be stable`, `be zero`, `reduce`, `increase`],
        ans: "C",
      },
      {
        id: 139,
        question: `A mixture is different from a compound because`,
        options: [
          `constituents of a compound are chemically bound together while those of a mixture are not`,
          `a mixture is always homogenous while a compound is not`,
          `a mixture can be represented by a chemical formula while a compound cannot`,
          `the properties of a compound are those of its individual constituents while those of a mixture differ from its constituents.`,
        ],
        ans: "A",
      },
      {
        id: 140,
        question: `The presence of impurities in a solid will make the melting point`,
        options: [`decrease`, `increase`, `remain unchanged`, `be zero`],
        ans: "A",
      },
      {
        id: 141,
        question: `The process whereby a gaseous body loses some of its kinetic energy to a colder body is referred to as`,
        options: [`condensation`, `melting`, `evaporation`, `freezing`],
        ans: "A",
      },
      {
        id: 142,
        question: `The separation technique that is based on the principle of solubility of a solid in two miscible liquids is`,
        options: [
          `fractional distillation`,
          `distillation`,
          `precipitation`,
          `filtration`,
        ],
        ans: "C",
      },
    ],
  },

  {
    topic: "Nuclear Chemistry",
    questions: [
      {
        id: 2,
        question: `Which of the following denotes an alpha particle`,
        options: [
          `${isotope(1, 0, "n")}`,
          `${isotope(4, 2, "He")}`,
          `${isotope(0, -1, "B")}`,
          `${isotope(9, 4, "Be")}`,
          `${isotope(1, 1, "H")}`,
        ],
        ans: "B",
      },
      {
        id: 3,
        question: `In which of the following are radioactive isotopes used?`,
        options: [
          `Scientific research`,
          `Sterilisation of equipment`,
          `Dating techniques`,
          `Treatment of cancer`,
          `All`,
        ],
        ans: "E",
      },
      {
        id: 4,
        question: `Two radioactive elements Q and S have half-life periods of 10hrs and 20hrs respectively. Therefore`,
        options: [
          `S decays faster than Q`,
          `Q is twice as stable as S`,
          `Q emits fewer particles than S`,
          `S is more stable than Q`,
          `None of the above`,
        ],
        ans: "D",
      },
      {
        id: 5,
        question: `A radioactive solid is best stored`,
        options: [
          `Under paraffin oil`,
          `Under uv light`,
          `In a cool, dark cupboard`,
          `In a box lined with lead`,
        ],
        ans: "D",
      },
      {
        id: 6,
        question: `What are the value of X and Y in the following equation: <br />
        ${isotope(234, 90, "Th")} -> ${isotope("Y", "X", "Pa")} + ${isotope(
          0,
          -1,
          "B"
        )}`,
        options: [
          `X: 91, Y: 234`,
          `X: 92, Y: 235`,
          `X: 89, Y: 236`,
          `X: 88, Y: 238`,
        ],
        ans: "A",
      },
      {
        id: 7,
        question: `What is emitted during the disintegration of Ba nucleus as shown by the equation below?<br />
        ${isotope(138, 56, "Ba")} -> ${isotope(134, 54, "X")}`,
        options: [
          `Alpha particles`,
          `Beta particles`,
          `Gamma rays`,
          `Neutrons`,
          `X-rays`,
        ],
        ans: "A",
      },
      {
        id: 8,
        question: `Nuclear reactions can be used in the following except`,
        options: [
          `Gauging the thickness of objects`,
          `Making atomic bombs`,
          `Curing cancer`,
          `Generating electricity`,
          `Purifying water`,
        ],
        ans: "E",
      },
      {
        id: 9,
        question: `A positron is represented as:`,
        options: [
          `${isotope(1, 0, "n")}`,
          `${isotope(0, -1, "B")}`,
          `${isotope(0, 1, "B")}`,
          `${isotope(1, 1, "H")}`,
          `${isotope(4, 2, "He")}`,
        ],
        ans: "C",
      },
      {
        id: 10,
        question: `What does the following equation illustrate? <br />
        ${isotope(238, 92, "U")} -> ${isotope(234, 90, "Tl")} + ${isotope(
          4,
          2,
          "He"
        )}`,
        options: [
          `Nuclear fission`,
          `Nuclear fusion`,
          `Artificial radioactivity`,
          `Spontaneous disintegration`,
          `Thermal decomposition`,
        ],
        ans: "D",
      },
      {
        id: 11,
        question: `What is the element Y in the following equation? <br />
        ${isotope(14, 7, "N")} + ${isotope(4, 2, "He")} -> ${isotope(
          1,
          1,
          "H"
        )} + Y`,
        options: [`Fluorine`, `Sodium`, `Chlorine`, `Oxygen`, `Carbon`],
        ans: "D",
      },
      {
        id: 12,
        question: `Which of the following has neither mass nor charge`,
        options: [
          `Alpha particle`,
          `Deuterium`,
          `Gamma ray`,
          `Neutron`,
          `None of these`,
        ],
        ans: "C",
      },
      {
        id: 13,
        question: `${isotope(14, 7, "N")} + X -> ${isotope(
          17,
          8,
          "O"
        )} + ${isotope(1, 1, "H")}<br /> In the above reaction, X is?`,
        options: [`neutron`, `helium atom`, `lithium atom`, `deuterium atom`],
        ans: "B",
      },
      {
        id: 14,
        question: `A particle that contains 8 protons, 9 neutrons and 7 electrons could be written as:`,
        options: [
          `${isotope(16, 8, "O")}`,
          `${ion(isotope(17, 8, "O"), "-")}`,
          `${ion(isotope(17, 9, "O"), "-")}`,
          `${ion(isotope(17, 7, "O"), "-")}`,
        ],
        ans: "B",
      },
      {
        id: 15,
        question: `Oxygen is a mixture of 2 isotopes. ${isotope(
          6,
          "",
          "O"
        )} and ${isotope(
          18,
          "",
          "O"
        )} with relative abundances of 90% and 10% respectively. The relative atomic mass of oxygen is:`,
        options: [`16.0`, `16.2`, `17.0`, `18.0`],
        ans: "B",
      },
      {
        id: 16,
        question: `Which of the following would you expect to decay by Beta emission?`,
        options: [
          `${isotope(31, 15, "P")}`,
          `${isotope(39, 19, "K")}`,
          `${isotope(72, 30, "Zn")}`,
          `${isotope(24, 11, "Na")}`,
        ],
        ans: "D",
      },
      {
        id: 18,
        question: `The radioactive isotope used in dating archaeological specimens is:`,
        options: [
          `${isotope(17, 8, "O")}`,
          `${isotope(45, 19, "K")}`,
          `${isotope(14, 6, "C")}`,
          `${isotope(4, 2, "He")}`,
        ],
        ans: "C",
      },
      {
        id: 19,
        question: `The symbol for an alpha particle is:`,
        options: [
          `${isotope(1, 0, "n")}`,
          `${isotope(2, 1, "H")}`,
          `${isotope(3, 2, "H")}`,
          `${isotope(4, 2, "He")}`,
        ],
        ans: "D",
      },
      {
        id: 20,
        question: `In the decay of ${isotope(
          234,
          "",
          "X"
        )} by alpha emission, the reaction product is:`,
        options: [
          `${isotope(230, 92, "Y")}`,
          `${isotope(234, 92, "Y")}`,
          `${isotope(232, 90, "Y")}`,
          `${isotope(234, 90, "Y")}`,
        ],
        ans: "A",
      },
    ],
  },

  {
    topic: "Electrochemistry",
    questions: [
      {
        id: 2,
        question: `The current carriers that are responsible for the conductance of aqeous copper(II) tetraoxosulfate(VI) solution are`,
        options: [`hydrated electrons`, `hydrated ions`, `ions`, `electrons`],
        ans: "C",
      },
      {
        id: 5,
        question: `Potassium chloride cannot conduct an electric current in the solid state because it`,
        options: [
          `does not contain mobile ions`,
          `is very soluble in water`,
          `is an electrovalent compound`,
          `is a neutral salt`,
        ],
        ans: "A",
      },
      {
        id: 6,
        question: `An electrolyte is`,
        options: [
          `aqueous solution of glucose`,
          `hydrogen chloride in methyl benzene`,
          `molten sodium chloride`,
          `molten candle wax`,
        ],
        ans: "C",
      },
      {
        id: 7,
        question: `Which of the following is a good conductor of electricity?`,
        options: [
          `Methylbenzene`,
          `Deionized water`,
          `Mercury`,
          `Sucrose solution`,
        ],
        ans: "C",
      },
      {
        id: 8,
        question: `What happens to the conductivity of an electrolyte as its concentration reduces? It`,
        options: [`increases`, `decreases`, `is unaffected`, `reduces to zero`],
        ans: "A",
        remark:
          "In general, the conductivity of an electrolyte(strong or weak) increases with increasing dilution or decreasing concentration",
      },
      {
        id: 9,
        question: `0.05${units(
          "moldm",
          -3
        )} of KCl conducts electricity better than 0.05${units(
          "moldm",
          -3
        )} ${formula("NH", 3)} because the solution of KCl`,
        options: [
          `is neutral`,
          `has a lower pH`,
          `is denser`,
          `contains more ions`,
        ],
        ans: "D",
      },
      {
        id: 10,
        question: `Which of the following liquids is a good conductor of an electric current?`,
        options: [
          `Aqueous solution of glucose`,
          `Aqueous solution of potassium chloride`,
          `Mixture of water and ethanol`,
          `Mixture of kerosene and petrol`,
        ],
        ans: "B",
      },
      {
        id: 11,
        question: `Consider the 0.05${units(
          "moldm",
          -3
        )} solutions of the substances<br />
        I. ethanoic acid <br />
        II. potassium ethanoate <br />
        III. ammonia <br />
        IV. ammonium chloride <br />
        Which pair of substances would show the least conductance`,
        options: [`I and II`, `I and III`, `I and IV`, `II and IV`],
        ans: "B",
      },
      {
        id: 13,
        question: `Which of the following aqeous solutions will conduct the least amount of electricity?`,
        options: [
          `1.00${units("moldm", -3)} aqueous solution of KCl`,
          `0.01${units("moldm", -3)} aqueous solution of KCl`,
          `0.01${units("moldm", -3)} aqueous solution of ethanoic acid`,
          `0.01${units("moldm", -3)} aqueous solution of glucose`,
        ],
        ans: "D",
      },
      {
        id: 14,
        question: `During electrolysis,`,
        options: [
          `negative ions are discharged at the anode by gaining sufficient electrons to become neutral`,
          `positive ions are discharged at the anode by gaining sufficient electrons to become neutral`,
          `negative ions are discharged at the anode by losing sufficient electrons to become neutral`,
          `positive ions are discharged at the anode by losing sufficient electrons to become neutral`,
        ],
        ans: "C",
      },
      {
        id: 15,
        question: `During the electrolysis of a caustic potash solution using platinum electrodes,`,
        options: [
          `alkalinity at the cathode increases`,
          `potassium metal is deposited at the anode`,
          `potassium metal is deposited at the cathode`,
          `oxygen gas is given off at the cathode`,
        ],
        ans: "A",
      },
      {
        id: 16,
        question: `In the electrolysis of aqueous solution of ${formula(
          "Na",
          2,
          "sO",
          4
        )}, which species migrate to the anode`,
        options: [
          `${ion("Na", "+")} and ${ion(formula("SO", 4), "2-")}`,
          `${ion("Na", "+")} and ${ion(formula("H"), "+")}`,
          `${ion(formula("H", 3, "O"), "+")} and ${ion(formula("OH"), "-")}`,
          `${ion(formula("SO", 4), "2-")} amd ${ion("OH", "-")}`,
        ],
        ans: "D",
      },
      {
        id: 17,
        question: `The reaction that takes place in the cathode compartment during the electrolysis of ${formula(
          "CuSO",
          4
        )} solution is`,
        options: [
          `${formula(ion("Cu", "2+"), "aq")} + 2${ion("e", "-")} -> ${formula(
            "Cu",
            "s"
          )}`,
          `2${formula(ion("H", "+"), "aq")} + 2${ion("e", "-")} -> ${formula(
            "H",
            2,
            "g"
          )}`,
          `${formula("Cu", "s")} -> ${formula(ion("Cu", "2+"), "aq")} + 2${ion(
            "e",
            "-"
          )}`,
          `${formula(ion("OH", "-"), "aq")} + ${formula(
            ion("Cl", "-"),
            "aq"
          )} -> ${formula("HCl", "aq")} + ${formula(ion("O", "2-"), "aq")}`,
        ],
        ans: "A",
      },
      {
        id: 18,
        question: `In the electrolysis of ${formula(
          "CuSO",
          4
        )} solution using carbon electrodes, the products at the anode and cathode respectively are`,
        options: [
          `hydrogen and copper`,
          `copper and hydrogen`,
          `oxygen and copper`,
          `copper and oxygen`,
        ],
        ans: "C",
      },
      {
        id: 19,
        question: `The reaction that takes place at the anode during the electrolysis of a very dilute aqueous solution of sodium chloride is`,
        options: [
          `${formula(ion("Na", "+"), "aq")} + ${ion(
            "e",
            "-"
          )} -> Na/Hg amalgam`,
          `4${formula(ion("OH", "-"), "aq")} -> 2${formula(
            "H",
            2,
            "O",
            "l"
          )} + ${formula("O", 2, "g")} + 4${ion("e", "-")}`,
          `2${formula(ion("Cl", "-"), "aq")} -> ${formula(
            "Cl",
            2,
            "g"
          )} + 2${ion("e", "-")}`,
          `${formula(ion("OH", "-"), "aq")} + ${formula(
            ion("Cl", "-"),
            "aq"
          )} -> ${formula("HCl", "aq")} + ${formula(ion("O", "2-"), "aq")}`,
        ],
        ans: "B",
      },
      {
        id: 20,
        question: `The electrolysis of ${formula(
          "CuSO",
          4
        )} solution can be used to purify crude copper if the crude copper is`,
        options: [
          `dissolved in the solution`,
          `made both the anode and the cathode`,
          `made the anode`,
          `made the cathode`,
        ],
        ans: "C",
      },
      {
        id: 21,
        question: `In the process of tin-plating a metal X, the metal X, is made the`,
        options: [
          `anode and an alternating current is used`,
          `anode and a direct current is used`,
          `cathode and an alternating current is used`,
          `cathode and a direct current is used`,
        ],
        ans: "D",
      },
      {
        id: 22,
        question: `2${formula(ion("Cl", "-"), "aq")} -> ${formula(
          "Cl",
          2,
          "g"
        )} + 2${formula(ion("e", "-"), "aq")} <br />
        The above half-cell reaction occurs at the anode during the electrolysis of conc. ${formula(
          "CuCl",
          2
        )} using carbon electrodes. This reaction is`,
        options: [
          `deionization`,
          `disproportionation`,
          `oxidation`,
          `reduction`,
        ],
        ans: "C",
      },
      {
        id: 23,
        question: `In the electrolysis of ${formula(
          "CuSO",
          4
        )} solution using platinum electrodes, the solution gets progressively`,
        options: [`amphoteric`, `acidic`, `basic`, `neutral`],
        ans: "B",
      },
      {
        id: 24,
        question: `A substance that decomposes when an electric current is passed through it is`,
        options: [
          `sucrose solution`,
          `copper rod`,
          `tetraoxosulfate(VI) acid solution`,
          `methylated spirit`,
        ],
        ans: "C",
      },
      {
        id: 25,
        question: `Which of the following reactions takes place at the anode during the electrolysis of ${formula(
          "CuSO",
          4,
          "aq"
        )} using copper electrodes`,
        options: [
          `Discharge of ${ion("Cu", "2+")}`,
          `Dissolution of copper electrode`,
          `Discharge of ${ion("OH", "-")}`,
          `Discharge of ${ion(formula("SO", 4), "2-")}`,
        ],
        ans: "B",
      },
      {
        id: 26,
        question: `Which of the following ions is discharged at the anode during the electrolysis of a concentrated solution containing ${ion(
          "H",
          "+"
        )}, ${ion("Cu", "2+")}, ${ion("OH", "-")}, and ${ion(
          "Cl",
          "-"
        )} using carbon electrodes?`,
        options: [
          `${ion("Cl", "-")}`,
          `${ion("OH", "-")}`,
          `${ion("Cu", "2+")}`,
          `${ion("H", "+")}`,
        ],
        ans: "A",
      },
      {
        id: 27,
        question: `Which of the following ions would migrate to the cathode during electrolysis?`,
        options: [
          `sodium ions`,
          `hydroxide ions`,
          `sulphide ions`,
          `chloride ions`,
        ],
        ans: "A",
      },
      {
        id: 28,
        question: `The common feature of reaction at the cathode is that`,
        options: [
          `electrons are produced`,
          `ions are oxidized`,
          `reduction is involved`,
          `the electrolyte is diluted`,
        ],
        ans: "C",
      },
      {
        id: 29,
        question: `Hydrogen and oxygen will be produced during the electrolysis (using platinum electrodes) of`,
        options: [
          `dilute copper(II) chloride solution`,
          `dilute sodium chloride solution`,
          `concentrated hydrochloric acid`,
          `glucose solution`,
        ],
        ans: "B",
      },
      {
        id: 30,
        question: `What current in amperes will deposit 5.4g of aluminum in 2 hours?<br /> [Al = 27, F= 96500${units(
          "Cmol",
          -1
        )}]`,
        options: [`2.0`, `4.0`, `6.0`, `8.0`],
        ans: "D",
      },
      {
        id: 31,
        question: `What is the quantity of electricity required to deposit 128g of copper from molten copper(II) chloride?<br /> [Cu = 64; F= 96500${units(
          "Cmol",
          -1
        )}]`,
        options: [
          `1.93 X ${exp(5)}C`,
          `3.86 X ${exp(5)}C`,
          `1.93 X ${exp(6)}C`,
          `3.86 X ${exp(6)}C`,
        ],
        ans: "B",
      },
      {
        id: 32,
        question: `Calculate the maximum weight of copper deposited on the cathode if 0.2F of electricity was passed through a solution of ${formula(
          "CuSO",
          4
        )}. [Cu = 64]`,
        options: [`32.0g`, `16.0g`, `6.4g`, `3.2g`],
        ans: "C",
      },
      {
        id: 33,
        question: `If 24,000 coulombs of electricity are required to discharge 0.25 mole of potassium from a molten potassium chloride mass, then the number of coulombs required to discharge 3 moles of lead from molten lead(II) bromide is`,
        options: [`384 000`, `576 000`, `192 000`, `288 000`],
        ans: "B",
      },
      {
        id: 34,
        question: `A current of 15.0A was passed for 30 minutes through a solution of silver trioxonitrate(V) between silver electrodes. Which of the following observations would be correct? (1F = 96500 coulombs) <br />
        I. The original ${ion(
          "Ag",
          "+"
        )} ion concentration of the solution remains unchanged. <br />
        II. The original ${ion(
          "Ag",
          "+"
        )} ion concentration of the solution decreases <br />
        III. The original ${ion(
          "Ag",
          "+"
        )} ion concentration of the solution increases <br />
        IV. 0.280 mole of silver is dissolved from the anode <br />
        IV. 0.280 mole of silver is dissolved from the cathode`,
        options: [`I only`, `I and IV only`, `I, IV, and V`, `II, IV, and V`],
        ans: "C",
      },
      {
        id: 36,
        question: `If the cost of electricity required to deposit 1g of aluminium is #4.00, how much would it cost to deposit 24g of copper? [Al = 27, Cu = 64]`,
        options: [`#27.02`, `#37.02`, `#47.02`, `#57.02`],
        ans: "A",
      },
      {
        id: 37,
        question: `What is the mass of copper deposited at the cathode by the passage of 32000 coulombs of electricity through ${formula(
          "CuSO",
          4
        )} solution using copper electrodes? [Cu = 64]`,
        options: [`21.12g`, `10.56g`, `5.28g`, `2.64g`],
        ans: "B",
      },
      {
        id: 38,
        question: `Copper(II) tetraoxosulphate(VI) is electrolysed using platinum electrodes. How many grams of copper are deposited when a current of 0.386A is passed for 50 minutes? <br />
        [Cu = 64, F= 96500C]`,
        options: [`0.924g`, `0.880g`, `0.768g`, `0.384g`],
        ans: "D",
      },
      {
        id: 39,
        question: `A quantity of electricity liberates 1.50g of aluminium from its ions. The mass of silver that will be liberated from its ions by the same quantity of electricity is <br />
        [Al = 27; Ag = 108]`,
        options: [`10.80g`, `5.40g`, `6.05g`, `3.03g`],
        ans: "C",
      },
      {
        id: 41,
        question: `If 6.4g of copper is deposited in a copper coulometer connected in series with a Hofman voltameter, the volume of oxygen liberated at stp is <br />
        [Cu = 64; O = 16; GMV at stp = 22.4${units("dm", -3)}]`,
        options: [
          `0.112${units("dm", -3)}`,
          `11.2${units("dm", -3)}`,
          `1..12${units("dm", -3)}`,
          `22.4${units("dm", -3)}`,
        ],
        ans: "C",
      },
      {
        id: 42,
        question: `If 0.1 Faraday of electricity deposited 3.2g of copper during the electrolysis of an aqueous solution, then, the number of moles of copper that will be deposited by 0.6F is <br />
        [Cu = 64]`,
        options: [`0.10`, `0.15`, `0.20`, `0.30`],
        ans: "D",
      },
      {
        id: 43,
        question: `How many kilograms of aluminium will be produced by the electrolysis of aluminium trioxonitrate(V) in a cell operating for 24 hours at 400 amperes? [Al = 27,  IF = 96500C]`,
        options: [`3.2`, `6.4`, `9.6`, `12.8`],
        ans: "A",
      },
      {
        id: 44,
        question: `A current of 0.25A flows for 16 minutes 5 seconds and deposits 0.163g of a metal X during the electrolysis of an aqueous solution of a salt of the metal. What is the charge on the metal ion? <br />
        [X = 65; IF = 96500C per mole of electrons]`,
        options: [`4`, `3`, `2`, `1`],
        ans: "C",
      },
      {
        id: 45,
        question: `What volume of oxygen measured at stp would be liberated by passing a current of 10A through acidified water for 965 seconds?<br />
        [Molar volume of a gas = 22.4${units("dm", -3)} at stp; F = 96500C]`,
        options: [
          `5.60 ${units("dm", -3)}`,
          `0.560 ${units("dm", -3)}`,
          `11.2 ${units("dm", -3)}`,
          `1.12 ${units("dm", -3)}`,
        ],
        ans: "B",
      },
      {
        id: 46,
        question: `How many moles of zinc would be deposited by passing 5F of electricity through a solution of zinc tetraoxosulfate(VI)? [1F = 96500C]`,
        options: [`1.0`, `1.5`, `2.0`, `2.5`],
        ans: "D",
      },
      {
        id: 47,
        question: `1.5F of electricity are passed through electrolytic cells containing ${ion(
          "K",
          "+"
        )}, ${ion("Zn", "2+")} and ${ion(
          "Au",
          "3+"
        )} connected in series. How many moles of each metal would be formed at the cathode of each cell?`,
        options: [
          `1.5 moles of K, 3.0 moles of Zn and 4.5 moles of Au`,
          `1.5 moles of K, 1.5 moles of Zn and 1.5 moles of Au`,
          `1.5 moles of K, 0.75 moles of Zn and 0.5 moles of Au`,
          `0.5 moles of K, 1.0 moles of Zn and 1.5 moles of Au`,
        ],
        ans: "C",
      },
      {
        id: 48,
        question: `A current of 20A is passed for 30 minutes during the electrolysis of gold(III) tetraoxosulfate(VI). The mass of gold deposited at the cathode is?<br />
        [Au = 197; F = 96500C]`,
        options: [`24.4g`, `26.5g`, `28.9g`, `32.6g`],
        ans: "A",
      },
      {
        id: 49,
        question: `What quantity of electricity will liberate 0.200 mole of oxygen molecules during the electrolysis of water? [1F = 96500C]`,
        options: [
          `96500 coulombs`,
          `77200 coulombs`,
          `51467 coulombs`,
          `25733 coulombs`,
        ],
        ans: "B",
      },
      {
        id: 50,
        question: `What is the quantity of chlorine in moles liberated when a current of 15A is passed through molten potassium chloride in 1930 seconds? [1F = 96500C]`,
        options: [
          `96500 coulombs`,
          `77200 coulombs`,
          `51467 coulombs`,
          `25733 coulombs`,
        ],
        ans: "C",
      },
      {
        id: 51,
        question: `What mass of bromine would be produced during the electrolysis of molten lead(II) bromide in which 10.35g of lead was deposited?<br />
        [Pb = 207; Br = 80]`,
        options: [`4.00g`, `7.00g`, `4.50g`, `8.00g`],
        ans: "D",
      },
      {
        id: 52,
        question: `One Faraday of electricity will produce one mole of`,
        options: [
          `chlorine molecules`,
          `oxygen molecules`,
          `hydrogen atoms`,
          `oxygen atoms`,
        ],
        ans: "C",
      },
      {
        id: 53,
        question: `The first Faraday's law of electrolysis is expressed mathematically as`,
        options: [
          `m &Proportional; 1/Q`,
          `m &Proportional; Q`,
          `m &Proportional; Q<sup>2</sup>`,
          `m &Proportional; Q<sup>1/2</sup>`,
        ],
        ans: "B",
      },
      {
        id: 54,
        question: `How many electrons (in mole) will discharge 2.0g of copper(II) ions, ${ion(
          "Cu",
          "2+"
        )}? [Cu = 64]`,
        options: [`0.03125 mole`, `0.0625 mole`, `0.0938 mole`, `32.00 mole`],
        ans: "B",
      },
      {
        id: 55,
        question: `If the overall reaction in a cell is<br />
        ${formula("Mg", "s")} + ${formula(ion("Cu", "2+"), "aq")} -< ${formula(
          ion("Mg", "2+"),
          "aq"
        )} + ${formula("Cu", "s")}. Its symbolic representation would be`,
        options: [
          `${formula("Mg", "s")}/${formula(ion("Mg", "2+"), "aq")}//${formula(
            ion("Cu", "2+"),
            "aq"
          )}/${formula("Cu", "s")}`,
          `${formula("Mg", "aq")}/${formula(ion("Mg", "2+"), "s")}//${formula(
            ion("Cu", "2+"),
            "s"
          )}/${formula("Cu", "aq")}`,
          `${formula(ion("Cu", "2+"), "s")}/${formula("Cu", "aq")}//${formula(
            "Mg",
            "aq"
          )}/${formula(ion("Mg", "2+"), "s")}`,
          `${formula("Mg", "aq")}/${formula(ion("Mg", "2+"), "aq")}//${formula(
            ion("Cu", "2+"),
            "aq"
          )}/${formula("Cu", "aq")}`,
        ],
        ans: "A",
      },
      {
        id: 56,
        question: `A feasible cell was constructed by combining the two half cells below:<br />
        ${formula(ion("Cu"), "aq")} + 2${ion("e", "-")} -> ${formula(
          "Cu",
          "s"
        )}; E&deg; = +0.34V<br />
        ${formula(ion("Fe", "2+"), "aq")} + 2${ion("e", "-")} -> ${formula(
          "Fe",
          "s"
        )}; E&deg; = -0.44V`,
        options: [`-0.78V`, `-0.10V`, `+0.10V`, `+0.78V`],
        ans: "D",
      },
      {
        id: 58,
        question: `${formula("Mg", "s")} -> ${formula(
          ion("Mg", "2+"),
          "aq"
        )} + 2${ion("e", "-")}; E&deg; = +2.37V<br />
        2${formula("Ag", "s")} -> 2${formula(ion("Ag", "+"), "aq")} + 2${ion(
          "e",
          "-"
        )}; E&deg; = -0.80V<br />
        The standard electrode potential of the magnesium -silver cell represented by the half-cell reaction above is`,
        options: [`-3.17V`, `+3.17V`, `+1.57V`, `-1.57V`],
        ans: "B",
      },
      {
        id: 59,
        question: `The most suitable method for preventing the rusting of petroleum pipelines is`,
        options: [
          `cathodic protection with magnesium`,
          `tin-plating`,
          `painting`,
          `greasing`,
        ],
        ans: "A",
      },
      {
        id: 60,
        question: `Why is iron galvanized with zinc is cathodically protected from corrosion? This is because`,
        options: [
          `zinc has a less negative reduction potential than iron`,
          `zinc has a more negative reduction potential than iron`,
          `both zinc and iron have the same reduction potential`,
          `zinc is tougher than iron`,
        ],
        ans: "B",
      },
      {
        id: 61,
        question: `The element used as an electrode in car batteries is`,
        options: [`sodium`, `potassium`, `magnesium`, `lead`],
        ans: "D",
      },
      {
        id: 62,
        question: `Which of the following metals can be used as sacrificial cathode for preventing corrosion of a length of iron pipe?`,
        options: [`Silver`, `Copper`, `Magnesium`, `Manganese`],
        ans: "C",
      },
      {
        id: 63,
        question: `Which of the following reactions is exemplified by rusting of iron?`,
        options: [
          `Decomposition`,
          `Displacement reaction`,
          `Neutralization`,
          `Redox reaction`,
        ],
        ans: "D",
      },
    ],
  },

  {
    topic: "Industrial and Environmental Chemistry",
    questions: [
      {
        id: 1,
        question: `The cheapest raw material from which an alkaline medium can be prepared is`,
        options: [`Rock salt`, `Limestone`, `Phosphate Rock`, `Bauxite`],
        ans: "A",
      },
      {
        id: 2,
        question: `Which of the following is not important in the fertilizer industry?`,
        options: [
          `Phosphate Rock`,
          `Tetraoxosulfate (VI) acid`,
          `Sodium trioxocarbonate(IV)`,
          `Natural gas`,
        ],
        ans: "C",
      },
      {
        id: 3,
        question: `A major raw material for the cement industry is:`,
        options: [
          `Sodium tetraoxosulphate(VI)`,
          `Limestone`,
          `Sand`,
          `Bauxite`,
        ],
        ans: "B",
      },
      {
        id: 4,
        question: `Brass is an alloy of`,
        options: [
          `Copper, Zinc and Lead`,
          `Copper, Zinc and Silver`,
          `Copper and Silver`,
          `Copper and Zinc`,
        ],
        ans: "D",
      },
      {
        id: 5,
        question: `Bronze is an alloy of`,
        options: [
          `Copper, and Lead`,
          `Copper and Zinc`,
          `Copper and Tin`,
          `Copper, and Silver`,
        ],
        ans: "C",
      },
      {
        id: 6,
        question: `Steel is an alloy of`,
        options: [
          `Iron, Silver and Lead`,
          `Iron and Carbon`,
          `Iron and Lead`,
          `Iron and Silver`,
        ],
        ans: "B",
      },
      {
        id: 7,
        question: `Which of the following is used as a material in the aircraft industry?`,
        options: [`Steel alloy`, `Al-Mg alloy`, `Cu-Zn alloy`, `Tin alloy`],
        ans: "B",
      },
      {
        id: 8,
        question: `Which of the following is LEAD not used for`,
        options: [
          `Battery manufacture`,
          `Petrol additive`,
          `Radiation shield`,
          `Electrical application`,
        ],
        ans: "D",
      },
      {
        id: 9,
        question: `Which of the following does not occur naturally in pure matallic form, but rather as an ore`,
        options: [`Silver`, `Gold`, `Iron`, `Platinum`],
        ans: "C",
      },
      {
        id: 10,
        question: `Corrosion is exhibited by`,
        options: [
          `Electropositive metals`,
          `Iron only`,
          `All metals`,
          `Metals below hydrogen in the electrochemical series`,
        ],
        ans: "C",
      },
      {
        id: 11,
        question: `Haemetite is an ore of`,
        options: [`Zinc`, `Lead`, `Copper`, `Iron`],
        ans: "D",
      },
      {
        id: 12,
        question: `Bauxite is an ore of`,
        options: [`Calcium`, `Sodium`, `Copper`, `Aluminium`],
        ans: "D",
      },
      {
        id: 13,
        question: `Marble is an ore of:`,
        options: [`Zinc`, `Lead`, `Calcium`, `Iron`],
        ans: "C",
      },
      {
        id: 14,
        question: `Which of the following metals is best extracted from its ore by chemical reduction`,
        options: [`Magnesium`, `Sodium`, `Iron`, `Calcium`],
        ans: "C",
      },
      {
        id: 15,
        question: `Which of the following metals is best extracted from its ore by electrolytic treatment?`,
        options: [`Sodium`, `Iron`, `Zinc`, `Tin`],
        ans: "A",
      },
      {
        id: 16,
        question: `Which of the following is a "fine" chemical`,
        options: [
          `Sodium hydroxide`,
          `Ethanol`,
          `Silver bromide`,
          `Hydrochloric acid`,
        ],
        ans: "C",
      },
      {
        id: 17,
        question: `Which of the following is a form of biotechnology`,
        options: [
          `Extraction of metals from their ores`,
          `Beer making`,
          `Battery manufacture`,
          `Jewellery manufacture`,
        ],
        ans: "B",
      },
      {
        id: 18,
        question: `Polyvinyl chloride is used to produce`,
        options: [`Bread`, `Ink`, `Kitchen utensils`, `Household pipes`],
        ans: "D",
      },
      {
        id: 19,
        question: `Permanent hard water can be softened by`,
        options: [
          `Aeration`,
          `Use of an ion-exchange resin`,
          `Chlorination`,
          `Treatment with a base`,
        ],
        ans: "B",
      },
      {
        id: 20,
        question: `Temporary hard water can be softened by`,
        options: [
          `Chlorination`,
          `Simple boiling`,
          `Passage over activated charcoal`,
          `Aeration`,
        ],
        ans: "B",
      },
      {
        id: 21,
        question: `Which of the following industries uses corn as a primary raw material?`,
        options: [`Paper`, `Brewery`, `Fertilizer`, `Detergent`],
        ans: "B",
      },
      {
        id: 22,
        question: `Which of the following is a natural component of air?`,
        options: [
          `Nitrogen(IV) oxide`,
          `Sulfur(IV) oxide`,
          `Argon`,
          `Carbon(II) oxide`,
        ],
        ans: "C",
      },
      {
        id: 23,
        question: `The function of calcium hydroxide in the treatment of municipal water supply is`,
        options: [
          `killing bacteria in the water`,
          `removing the water hardness`,
          `coagulating solid particles`,
          `controlling the pH of the water`,
        ],
        ans: "B",
      },
      {
        id: 24,
        question: `The passage of water through layers of fine sand in municipal water treatment is to`,
        options: [
          `remove water hardness`,
          `coagulate solid particles`,
          `remove dissolved gases`,
          `filter the water`,
        ],
        ans: "D",
      },
      {
        id: 25,
        question: `Which of the following is associated with global warming?`,
        options: [
          `Hydrogen sulphide`,
          `Sulphur(IV) oxide`,
          `Carbon(IV) oxide`,
          `Sulfur(IV) oxide`,
        ],
        ans: "C",
      },
      {
        id: 26,
        question: `Which of the following is a secondary air pollutant?`,
        options: [
          `Particulate dust`,
          `Sulfur(IV) oxide`,
          `Ozone`,
          `Chlorofluorocarbons`,
        ],
        ans: "C",
      },
      {
        id: 27,
        question: `A major source of ozone in the atmosphere is`,
        options: [
          `fuel combustion`,
          `Bush burning`,
          `sunlight-induced reactions of oxygen and other gases`,
          `aerosol sprays`,
        ],
        ans: "C",
      },
      {
        id: 28,
        question: `Which of the following pollutants is a major components of smog`,
        options: [
          `Carbon(II) oxide`,
          `Hydrogen sulfide`,
          `Ozone`,
          `Carbon(IV) oxide`,
        ],
        ans: "C",
      },
      {
        id: 29,
        question: `The exhaust fumes of smoky vehicles is principally due to?`,
        options: [
          `Hydrogen sulfide`,
          `Carbon(II) oxide`,
          `Lead`,
          `Carbon tetrachloride`,
        ],
        ans: "B",
      },
      {
        id: 30,
        question: `Which of the following is a major gas emitted during cement production`,
        options: [
          `Nitrogen(IV) oxide`,
          `Methane`,
          `Carbon(IV) oxide`,
          `chlorofluorocarbons`,
        ],
        ans: "C",
      },
      {
        id: 31,
        question: `Which of the following is generated during the manufacture of fertilizer?`,
        options: [
          `Hydrogen sulfide`,
          `Carbon(IV) oxide`,
          `Sulfur(IV) oxide`,
          `Lead`,
        ],
        ans: "C",
      },
      {
        id: 32,
        question: `Which of the following contributes to acid rain?`,
        options: [
          `Methane`,
          `Nitrogen(IV) oxide`,
          `Heavy metals`,
          `Hydrogen sulfide`,
        ],
        ans: "B",
      },
      {
        id: 33,
        question: `The gaseous pollutant sulfur(IV) oxide will likely be detected in the neighbourhood of:`,
        options: [
          `a factory where mercury is being extracted from its ore`,
          `a factory where aluminium is being extracted from bauxite`,
          `a factory where iron is being extracted from its ore`,
          `a factory manufacturing margarine`,
        ],
        ans: "A",
      },
      {
        id: 34,
        question: `Which of the following is emitted from aerosol sprays and air conditioners`,
        options: [
          `Hydrogen sulfide`,
          `Carbon(IV) oxide`,
          `Chlorofluorocarbons`,
          `Sulfur(IV) oxide`,
        ],
        ans: "C",
      },
      {
        id: 35,
        question: `Which of the following would be found in high concentration in the neighbourhood of a battery manufacturing factory?`,
        options: [
          `${ion("Pb", "2+")} salts`,
          `${ion("Ca", "2+")} salts`,
          `${ion("Mg", "2+")} salts`,
          `${ion("Al", "3+")} salts`,
        ],
        ans: "A",
      },
      {
        id: 36,
        question: `The most likely set of pollutants that will be produced on the accidental ignition of a plastic container of petrol is?`,
        options: [
          `${formula("CO")}, ${formula("CO", 2)} and ${formula("SO", 2)}`,
          `${formula("SO", 2)}, ${formula("CO", 2)} and ${formula("HCl")}`,
          `${formula("CO")}, ${formula("HCl")}, and ${formula("SO", 2)}`,
          `${formula("CO")}, ${formula("CO", 2)} and HCl`,
        ],
        ans: "A",
      },
      {
        id: 37,
        question: `Environmental pollution is usually a major problem in countries that have`,
        options: [
          `low population densities`,
          `great land mass`,
          `many industries`,
          `a lot of water resources`,
        ],
        ans: "C",
      },
      {
        id: 38,
        question: `Which of these is an active ingredient of fire extinguishers`,
        options: [
          `Sulfur(IV) oxide`,
          `Ammonia`,
          `Carbon(IV) oxide`,
          `Nitrogen(IV) oxide`,
        ],
        ans: "C",
      },
      {
        id: 39,
        question: `One of the most commonly determined physical parameters of water quality is`,
        options: [
          `pH`,
          `Suspended solid`,
          `Biochemical Oxygen Demand(BOD)`,
          `Coliform Count`,
        ],
        ans: "B",
      },
      {
        id: 40,
        question: `One of the most commonly determined chemical parameters of water quality is`,
        options: [
          `Temperature`,
          `Suspended solid`,
          `Biochemical Oxygen Demand(BOD)`,
          `Turbidity`,
        ],
        ans: "C",
      },
      {
        id: 41,
        question: `One of the causes of algae growth in rivers is the presence of`,
        options: [
          `Heavy metals`,
          `Pesticides`,
          `Phosphates from detergents`,
          `High particulate loading`,
        ],
        ans: "C",
      },
      {
        id: 42,
        question: `Nutrients in water bodies are considered as water pollutants because they:`,
        options: [
          `increase oxygen which aquatic organisms need for their survival`,
          `deplete oxygen which aquatic organisms need for their survival`,
          `increase other gaseous substances in the water`,
          `deplete other gaseous species in the water`,
        ],
        ans: "B",
      },
      {
        id: 43,
        question: `A good method of cleaning-up freshly-splitted oil which has not spread over a larger surface of water is by:`,
        options: [
          `spraying with hot water`,
          `dispersal with compressed air`,
          `burning off the oil layer`,
          `disinfection with chlorine`,
        ],
        ans: "C",
      },
      {
        id: 44,
        question: `Which of the following pollutants is biodegradable?`,
        options: [`Plastics`, `Sewage`, `Metal scraps`, `Lead compounds`],
        ans: "B",
      },
      {
        id: 45,
        question: `Chlorine is used in water treatment as`,
        options: [
          `a germicide`,
          `a decolourising agent`,
          `an antioxidant`,
          `a coagulating agent`,
        ],
        ans: "A",
      },
      {
        id: 46,
        question: `Addition of Copper(II) tetraoxosulphate(VI) to swimming pools is to:`,
        options: [
          `prevent the growth of algae`,
          `coagulate suspended particles`,
          `neutralize dissolved gases in the water`,
          `react with any excess chlorine present`,
        ],
        ans: "A",
      },
      {
        id: 47,
        question: `The main function of alum in purificatoin of municipal water supply is to`,
        options: [
          `control the pH of the water`,
          `kill bacteria`,
          `improve the taste of the water`,
          `coagulate solid particles`,
        ],
        ans: "D",
      },
      {
        id: 48,
        question: `Which of the following water samples will have the highest concentrations of ${ion(
          "Ca",
          "2+"
        )} ions.`,
        options: [
          `Temporary hard water after boiling`,
          `Permanent hard water after boiling`,
          `Rain water stored in a glass jar for 2 years`,
          `Permanent hard water to which zeolite has been added`,
        ],
        ans: "C",
      },
      {
        id: 49,
        question: `Which of the following water bodies will have the highest BOD value?`,
        options: [
          `Water polluted by heavy metals`,
          `Water polluted by suspended particles`,
          `Water polluted by bacteria`,
          `Water polluted by nitrates and phosphates`,
        ],
        ans: "D",
      },
      {
        id: 50,
        question: `Which of the following is likely to occur to soil as a result of bush burning`,
        options: [
          `heavy metal pollution`,
          `loss of soil nutrients`,
          `increase in pH`,
          `increase in radioactivity`,
        ],
        ans: "B",
      },
      {
        id: 100,
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
        id: 102,
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
        id: 103,
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
        id: 104,
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
        id: 105,
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
        id: 106,
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
        id: 107,
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
        id: 108,
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
        id: 109,
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
        id: 110,
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
        id: 111,
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
        id: 112,
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
        id: 113,
        question: `A quantity of air was passed through a weighed amount of alkaline pyrogallol. An increase in the weight of the pyrogallol would result from the absorption of`,
        options: [`nitrogen`, `neon`, `argon`, `oxygen`],
        ans: "D",
      },
      {
        id: 114,
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
        id: 115,
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
        id: 116,
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
        id: 117,
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
        id: 118,
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
        id: 119,
        question: `When plastics and packaging materials made from chloroethene are burnt in the open, the mixture of gases released into the atmosphere is most likely to contain`,
        options: [`ethane`, `chlorine`, `hydrogen chloride`, `ethene`],
        ans: "C",
      },
      {
        id: 120,
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
        id: 121,
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
        id: 122,
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
        id: 123,
        question: `Which of the following will have its mass increase when heated in air`,
        options: [`helium`, `magnesium`, `copper pyrites`, `glass`],
        ans: "B",
      },
      {
        id: 124,
        question: `Nitrogen obtained from the liquefaction of air has a higher density than that obtained from nitrogen-containing compounds because the former contains`,
        options: [`Water vapour`, `Oxygen`, `Carbon(IV) oxide`, `Rare gases`],
        ans: "D",
      },
      {
        id: 125,
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
        id: 126,
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
        id: 127,
        question: `The air pollutant unknown in nature is`,
        options: [`DDT`, `CO`, `HCHO`, `NO`],
        ans: "A",
      },
      {
        id: 128,
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
        id: 129,
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
        id: 130,
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
        id: 131,
        question: `Environment pollutant is worsened by the release from automobile exhausts of?`,
        options: [`water vapour`, `steam`, `smoke`, `heavy metals`],
        ans: "D",
      },
      {
        id: 132,
        question: `Phosphorus is stored under water to prevent it from`,
        options: [`dehydrating`, `becoming inert`, `smelling`, `catching fire`],
        ans: "D",
      },
      {
        id: 133,
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
        id: 159,
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
        id: 155,
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
        id: 153,
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
        id: 156,
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
        id: 157,
        question: `The nitrogen obtained from air has a density higher than the one from nitrogen-containing compounds because the one from air is contaminated with?`,
        options: [`oxygen`, `rare gases`, `carbon(IV) oxide`, `water vapor`],
        ans: "B",
      },
      {
        id: 158,
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
        id: 150,
        question: `The noble gas with a high power of fog penetration used in aerodome beacons is`,
        options: [`argon`, `helium`, `neon`, `krypton`],
        ans: "C",
      },
      {
        id: 160,
        question: `Which of the following gases makes up the largest percentage of atmospheric air`,
        options: [
          "carbon(IV) oxide",
          "Hydrogen",
          "Nitrogen",
          "Noble gases",
          "Oxygen",
        ],
        ans: "C",
      },
      {
        id: 161,
        question: `Which of the following is not a natural component of the air`,
        options: [
          "water vapor",
          "carbon(II) oxide",
          "Nitrogen",
          "Carbon(IV) oxide",
        ],
        ans: "B",
      },
      {
        id: 162,
        question: `The uncovered raw food that is sold along major roads is likely to contain some amounts of`,
        options: ["Pb", "Cu", "Ag", "Na"],
        ans: "A",
      },
    ],
  },

  {
    topic: "Acids, Bases, and Salt",
    questions: [
      {
        id: 1,
        question: `${formula("NH", 3)} + ${ion(
          formula("H", 3, "O"),
          "+"
        )} -> ${ion(formula("NH", 4), "+")} + ${formula("H", 2, "O")}<br />
        Which of the following statement is correct about the above reaction`,
        options: [
          `${formula("NH", 3)} acts as an acid`,
          `${ion(formula("NH", 4), "+")} acts as a base`,
          `${ion(formula("H", 3, "O"), "+")} acts as an acid`,
          `${ion(formula("H", 3, "O"), "+")}`,
        ],
        ans: "C",
      },
      {
        id: 2,
        question: `${formula("NaCl", "s")} + ${formula(
          "H",
          2,
          "SO",
          4,
          "l"
        )} -> ${formula("HCl", "g")} + ${formula(
          "NaHSO",
          4,
          "s"
        )}<br />In the above reaction, ${formula("H", 2, "SO", 4)} acts as`,
        options: [
          `a dehydrating agent`,
          `a strong acid`,
          `a good solvent`,
          `an oxidizing agent`,
        ],
        ans: "B",
      },
      {
        id: 3,
        question: `The number of hydroxonium ions produced by one molecule of an acid in aqeuous solution is termed as its`,
        options: [`acid strength`, `pH`, `acidity`, `basicity`],
        ans: "D",
      },
      {
        id: 4,
        question: `A weak acid is one`,
        options: [
          `which can ionize completely in aqeous solution`,
          `which has a low pH value`,
          `which is not corrosive`,
          `which can ionize partially in aqeuous solutions`,
        ],
        ans: "D",
      },
      {
        id: 5,
        question: `Propanoic acid is`,
        options: [`tribasic`, `dibasic`, `monobasic`, `unionisable`],
        ans: "C",
      },
      {
        id: 6,
        question: `A mixed acid anhydride is`,
        options: [
          `sulfur(IV) oxide`,
          `nitrogen(IV) oxide`,
          `carbon(IV) oxide`,
          `carbon(II) oxide`,
        ],
        ans: "B",
      },
      {
        id: 7,
        question: `The following are the properties of acids except`,
        options: [
          `reaction with copper to liberate hydrogen`,
          `presence of ionisable hydrogen atom(s)`,
          `evolution of ${formula("CO", 2)} with ${formula(
            "Na",
            2,
            "CO",
            3
          )} solution`,
          `pH values of less than 7`,
        ],
        ans: "A",
      },
      {
        id: 8,
        question: `An acid is a substance which interacts with water to produce`,
        options: [
          `hydrogen gas`,
          `hydroxonium ions`,
          `hydroxide ions`,
          `effervescence`,
        ],
        ans: "B",
      },
      {
        id: 9,
        question: `A species that is always present in acidified water is`,
        options: [
          `${ion(formula("OH"), "-")}`,
          `${ion(formula("NH", 4), "+")}`,
          `${ion(formula("O"), "2-")}`,
          `${ion(formula("H", 3, "O"), "+")}`,
        ],
        ans: "D",
      },
      {
        id: 11,
        question: `An aqueous solution is acidic if`,
        options: [
          `it contains less ${ion(formula("OH"), "-")} than ${ion(
            formula("H", 3, "O"),
            "+"
          )}`,
          `it contains ${ion(formula("OH"), "-")} and ${ion(
            formula("H", 3, "O"),
            "+"
          )} in the same proportion`,
          `its pH value is greater than 7`,
          `it changes the color of an indicator`,
        ],
        ans: "A",
      },
      {
        id: 12,
        question: `The following statements are all correct about dilute tetraoxosulfate(VI) acid except that it`,
        options: [
          `effervesces with magnesium`,
          `effervesces with dilute hydrochloric acid`,
          `has a pH value less than 7`,
          `is a strong electrolyte`,
        ],
        ans: "B",
      },
      {
        id: 13,
        question: `Which of the following is not a property of an acid?`,
        options: [
          `Conduction of an electric current in solution`,
          `Ability to neutralize basic oxides`,
          `Effervescence with ${formula("K", 2, "CO", 3)} solution`,
          `Formation of a salt with an acidic oxide`,
        ],
        ans: "D",
      },
      {
        id: 14,
        question: `A piece of seashell produced a colorless, odorless gas that turned limewater milky when dropped into a dilute solution of HCl. It can be inferred that the sea shell contains`,
        options: [
          `a trioxocarbonate(IV) salt`,
          `a chloride`,
          `a trioxonitrate(V) salt`,
          `a tetraoxosulfate(VI) salt`,
        ],
        ans: "A",
      },
      {
        id: 15,
        question: `A student who accidentally poured concentrated ${formula(
          "H",
          2,
          "SO",
          4
        )} on his skin during a practical class is best treated by washing the skin with`,
        options: [
          `more of the concentrated ${formula("H", 2, "SO", 4)}`,
          `potassium hydroxide solution`,
          `sodium trioxocarbonate(IV) solution followed by plenty of cold water`,
          `iodine solution`,
        ],
        ans: "C",
      },
      {
        id: 16,
        question: `An acid and its conjugate base`,
        options: [
          `are oppositely charged`,
          `differ only by a hydroxide ion`,
          `differ only by an electron`,
          `differ only by a proton`,
        ],
        ans: "D",
      },
      {
        id: 17,
        question: `Concentrated ${formula(
          "H",
          2,
          "SO",
          4
        )} differs from concentrated ${formula("HNO", 3)} in`,
        options: [
          `the ability to liberate ${formula("CO", 2)} from ${ion(
            formula("CO", 3),
            "-"
          )}`,
          `the action as an oxidizing agent`,
          `the ability to conduct an electric current on dilution`,
          `the ability to dehydrate compounds`,
        ],
        ans: "D",
      },
      {
        id: 18,
        question: `Hydrogen sulfide behaves as an acid in`,
        options: [
          `2${formula("FeCl", 3)} + ${formula("H", 2, "S")} -> 2${formula(
            "FeCl",
            2
          )} + 2HCl + S`,
          `2${formula("NaOH")} + ${formula("H", 2, "S")} -> ${formula(
            "Na",
            2,
            "S"
          )} + 2${formula("H", 2, "O")}`,
          `${formula("H", 2, "SO", 4)} + ${formula("H", 2, "S")} -> ${formula(
            "SO",
            2
          )} + 2${formula("H", 2, "O")} + S`,
          `${formula("SO", 2)} + 2${formula("H", 2, "S")} -> ${formula(
            "H",
            2,
            "O"
          )} + 3S`,
        ],
        ans: "B",
      },
      {
        id: 19,
        question: `Which of the following aqueous solutions would change the color of blue litmus paper?`,
        options: [
          `Potassium chloride`,
          `Sodium hydroxide`,
          `Chlorine`,
          `Sodium trioxocarbonate(IV)`,
        ],
        ans: "C",
      },
      {
        id: 20,
        question: `${formula("HNO", 3)} behaves as a typical acid in`,
        options: [
          `${formula("MgO")} + 2${formula("HNO", 3)} -> ${formula(
            "Mg",
            `(${formula("NO", 3)})`,
            2
          )} + ${formula("H", 2, "O")}`,
          `S + 6${formula("HNO", 3)} -> ${formula(
            "H",
            2,
            "SO",
            4
          )} + 6${formula("NO", 2)} + 2${formula("H", 2, "O")}`,
          `P + 5${formula("HNO", 3)} -> ${formula(
            "H",
            3,
            "PO",
            4
          )} + 5${formula("NO", 2)} + ${formula("H", 2, "O")}`,
          `3Cu + 8${formula("HNO", 3)} -> ${formula(
            "Cu",
            `(${formula("NO", 3)})`,
            2
          )} + 2NO + 4${formula("H", 2, "O")}`,
        ],
        ans: "A",
      },
      {
        id: 21,
        question: `A colorless odorless gas, which turned limewater milky, was evolved when a sample of gastric juice was treated with potassium trioxocarbonate(IV). It can be inferred that gastric juice is`,
        options: [`neutral`, `acidic`, `basic`, `amphoteric`],
        ans: "B",
      },
      {
        id: 22,
        question: `The solid substance that would dissolve in hot dilute ${formula(
          "H",
          2,
          "SO",
          4
        )} without effervescence, to give a blue solution is`,
        options: [
          `copper alloy`,
          `copper chip`,
          `${formula("CuCO", 3)}`,
          `CuO`,
        ],
        ans: "D",
      },
      {
        id: 23,
        question: `The reaction involved in the removal of rust from iron by treatment with ${formula(
          "H",
          2,
          "SO",
          4
        )} is`,
        options: [
          `oxidation of rust`,
          `hydrolysis of rust`,
          `acid-base reaction`,
          `dehydration of rust`,
        ],
        ans: "C",
      },
      {
        id: 24,
        question: `Neutralization is a reaction between ${ion(
          formula("OH"),
          "-"
        )} and`,
        options: [
          `${ion(formula("SO", 4), "2-")}`,
          `${ion(formula("H", 3, "O"), "+")}`,
          `${ion("Cl", "-")}`,
          `${ion(formula("NO", 3), "-")}`,
        ],
        ans: "B",
      },
      {
        id: 25,
        question: `A general method of preparing acids is`,
        options: [
          `dissolution of a metallic oxide in water`,
          `reaction between an anhydride and water`,
          `direct combination of constituent elements`,
          `double decomposition involving a salt solution`,
        ],
        ans: "B",
      },
      {
        id: 26,
        question: `A neutralization reaction is the`,
        options: [
          `addition of hydrochloric acid to water`,
          `addition of hydrochloric acid to sodium chloride`,
          `addition of hydrochloric acid to sodium hydroxide`,
          `addition of sodium chloride to potassium chloride`,
        ],
        ans: "C",
      },
      {
        id: 27,
        question: `The reaction between KOH and ${formula(
          "NO",
          2
        )} produces water and`,
        options: [
          `${formula("KNO", 3)}`,
          `${formula("KNO", 2)}`,
          `${formula("HNO", 3)}`,
          `${formula("KNO", 3)} and ${formula("KNO", 2)}`,
        ],
        ans: "D",
      },
      {
        id: 28,
        question: `Which of the following elements can be used to make a container for storing sodium hydroxide?`,
        options: [`Zinc`, `Lead`, `Copper`, `Aluminium`],
        ans: "C",
      },
      {
        id: 29,
        question: `A metal that cannot produce hydrogen from alkaline solutions is`,
        options: [`Tin`, `Iron`, `Aluminium`, `Zinc`],
        ans: "B",
      },
      {
        id: 30,
        question: `The molecular formula of the compound ultimately produced when solid sodium hydroxide is exposed to air is`,
        options: [
          `${formula("Na", 2, "CO", 3)}`,
          `${formula("NaHCO", 3)}`,
          `${formula("NaOH")}.${formula("H", 2, "O")}`,
          `${formula("NaOH")}.${formula("N", 2)}`,
        ],
        ans: "B",
      },
      {
        id: 31,
        question: `Which of the properties<br />
        I. slippery to touch <br />
        II. sour taste <br />
        III. yields hydrogen with reactive metals <br />
        IV. has pH greater than 7 <br />
        V. turns methyl orange to yellow <br />
        are not typical properties of an alkali`,
        options: [
          `I, II, and III`,
          `I, III, and V`,
          `III and IV`,
          `II and III`,
        ],
        ans: "D",
      },
      {
        id: 32,
        question: `An acid salt is`,
        options: [
          `${formula("FeSO", 4)}.7${formula("H", 2, "O")}`,
          `${formula("NaHSO", 4)}`,
          `${formula(`(${formula("NH", 4)})`, 2, "SO", 4)}`,
          `${formula("CH", 3, "COONa")}`,
        ],
        ans: "B",
      },
      {
        id: 33,
        question: `A normal salt is`,
        options: [
          `${formula(`(${formula("NH", 4)})`, 2, "SO", 4)}`,
          `${formula("NaHSO", 4)}`,
          `${formula("Mg(OH)Cl")}`,
          `${formula("Mg", `(${formula("HCO", 3)})`, 2)}`,
        ],
        ans: "A",
      },
      {
        id: 34,
        question: `Which of the following salts, when dissolved in water will not give the corresponding pH value?`,
        options: [
          `${formula("KCl")}, pH = 7`,
          `${formula("K", 2, "CO", 3)}, pH > 7`,
          `${formula("KHCO", 3)}, pH < 7`,
          `${formula("K", 2, "SO", 4)}, pH = 7`,
        ],
        ans: "C",
      },
      {
        id: 35,
        question: `Which of the following are the products of the reaction between dilute aqueous solutions of lead(II) trioxonitrate(V) and sodium chloride?`,
        options: [
          `${formula("PbO", "s")} + ${formula(
            ion("Na", "+"),
            "aq"
          )} + ${formula(ion("Cl", "-"), "aq")} + ${formula("NO", 2, "g")}`,
          `${formula("PbCl", 2, "s")} + ${formula(
            ion("Na", "+"),
            "aq"
          )} + ${formula("NO", 3, "g")}`,
          `${formula("Cl", 2, "g")} + ${formula("NO", 2, "g")} + ${formula(
            "PbCl",
            2,
            "s"
          )}`,
          `${formula("PbO", "s")} + ${formula(
            ion("Cl", "-"),
            "aq"
          )} + ${formula("NaNO", 3, "aq")}`,
        ],
        ans: "B",
      },
      {
        id: 36,
        question: `Which of the following salts cannot be prepared by a double decomposition reaction?`,
        options: [
          `${formula("BaCO", 3)}`,
          `${formula("PbCl", 2)}`,
          `${formula("KCl")}`,
          `${formula("AgCl")}`,
        ],
        ans: "C",
      },
      {
        id: 37,
        question: `Which of the following salts crystallizes with water of crystallization?`,
        options: [
          `${formula("NaCl")}`,
          `${formula("AgNO", 3)}`,
          `${formula("CaCO", 3)}`,
          `${formula("CuSO", 4)}`,
        ],
        ans: "D",
      },
      {
        id: 38,
        question: `The insoluble salt formed when silver trioxonitrate(V) solution is mixed with sodium chloride solution is`,
        options: [
          `${formula("AgNO", 3)}`,
          `${formula("NaNO", 3)}`,
          `${formula("NaCl")}`,
          `${formula("AgCl")}`,
        ],
        ans: "D",
      },
      {
        id: 39,
        question: `A complex salt is`,
        options: [
          `${formula("KAl", `(${formula("SO", 4)})`, 2)}.12${formula(
            "H",
            2,
            "O"
          )}`,
          `[Cu(${formula("NH", 3)})<sub>4</sub>]${formula("Cl", 2)}`,
          `${formula("K", 2, "S", 3, "O", 3)}.5${formula("H", 2, "O")}`,
          `${formula("Mg(OH)Cl")}`,
        ],
        ans: "B",
      },
      {
        id: 40,
        question: `The most stable method for preparing lead(II) tetraoxosulfate(VI) is by`,
        options: [
          `action of dilute ${formula("H", 2, "SO", 4)} on ${formula(
            "PbCl",
            2
          )}`,
          `mixing aqueous solutions of ${formula(
            "Pb",
            `(${formula("NO", 3)})`,
            2
          )} with ${formula("Na", 2, "SO", 4)}`,
          `action of dilute ${formula("H", 2, "SO", 4)} on lead`,
          `action of dilute ${formula("H", 2, "SO", 4)} on ${formula(
            "PbCO",
            3
          )}`,
        ],
        ans: "B",
      },
      {
        id: 41,
        question: `Alums are`,
        options: [`acid salts`, `basic salts`, `double salts`, `complex salts`],
        ans: "C",
      },
      {
        id: 42,
        question: `Which of the following is not a suitable method of preparing simple salt`,
        options: [
          `Hydrogenation`,
          `Neutralization`,
          `Double decomposition`,
          `Reaction of acid with a metal`,
        ],
        ans: "A",
      },
      {
        id: 43,
        question: `Which of the following is not a normal salt?`,
        options: [
          `${formula("KHCO", 3)}`,
          `${formula("K", 2, "SO", 3)}`,
          `${formula("K", 3, "PO", 4)}`,
          `${formula("KCl")}`,
        ],
        ans: "A",
      },
      {
        id: 44,
        question: `A general method of preparing insoluble salts is by`,
        options: [
          `adding an acid to an active metal`,
          `adding an acid to a trioxocarbonate`,
          `adding an acid to an oxide`,
          `double decomposition`,
        ],
        ans: "D",
      },
      {
        id: 45,
        question: `Which of the following mixtures will not produce a precipitate?`,
        options: [
          `${formula("Cu", `(${formula("NO", 3)})`, 2, "aq")} and ${formula(
            "NaOH",
            "aq"
          )}`,
          `${formula("CaCl", 2, "aq")} and ${formula("AgNO", 3, "aq")}`,
          `${formula("HCl", "aq")} and ${formula("KNO", 3, "aq")}`,
          `${formula("BaCl", 2, "aq")} and ${formula("H", 2, "SO", 4, "aq")}`,
        ],
        ans: "C",
      },
      {
        id: 46,
        question: `What is the solubility of a substance A if 50${units(
          "cm",
          3
        )} of a saturated solution contains 8.0g of A? [A = 60${units(
          "gmol",
          -1
        )}]`,
        options: [
          `3.67 ${units("moldm", -3)}`,
          `2.67 ${units("moldm", -3)}`,
          `1.67 ${units("moldm", -3)}`,
          `0.67 ${units("moldm", -3)}`,
        ],
        ans: "C",
      },
      {
        id: 48,
        question: `15.3g of a sample of ${formula(
          "KClO",
          3
        )} was required to make a saturated solution with 50${units(
          "cm",
          3
        )} of water at 25&deg;C. What is the solubility of the salt at 25&deg;C? [K = 39, Cl = 35.5, O = 16]`,
        options: [
          `2.5 ${units("moldm", -3)}`,
          `2.0 ${units("moldm", -3)}`,
          `1.5 ${units("moldm", -3)}`,
          `1.0 ${units("moldm", -3)}`,
        ],
        ans: "A",
      },
      {
        id: 49,
        question: `When 100${units(
          "cm",
          3
        )} of a saturated solution of a substance S (molar mass 342g) at 38&deg;C was evaporated to dryness, 68.4g of dry solid was obtained. The solubility of S at 38&deg;C is`,
        options: [
          `1.0 ${units("moldm", -3)}`,
          `2.0 ${units("moldm", -3)}`,
          `3.0 ${units("moldm", -3)}`,
          `4.0 ${units("moldm", -3)}`,
        ],
        ans: "B",
      },
      {
        id: 50,
        question: `10g of ${formula(
          "CuSO",
          4
        )} was required to saturate 50g of water at 180&deg;C. What is the solubility(${units(
          "moldm",
          -3
        )}) of the salt at 180&deg;C? <br />
        [Cu = 63.5; S = 32; O = 16]`,
        options: [
          `0.04 ${units("moldm", -3)}`,
          `0.54 ${units("moldm", -3)}`,
          `0.82 ${units("moldm", -3)}`,
          `1.04 ${units("moldm", -3)}`,
        ],
        ans: "D",
      },
      {
        id: 52,
        question: `Potassium chloride has a zero solubility product value because of its`,
        options: [
          `insolubility`,
          `low solubility`,
          `high solubility`,
          `neutral nature`,
        ],
        ans: "C",
      },
      {
        id: 53,
        question: `20.2g of a salt, P (molar mass 101${units(
          "gmol",
          -1
        )}) dissolved in 100g of water at 25&deg;C. Its solubility (${units(
          "moldm",
          -3
        )}) at this temperature is`,
        options: [`0.16`, `0.20`, `1.66`, `2.0`],
        ans: "C",
      },
      {
        id: 54,
        question: `105g of ${formula("CaCl", 2)} was placed in 50${units(
          "cm",
          3
        )} of water to give a saturated solution at 25&deg;C. If the solubility of the salt is 8.5${units(
          "moldm",
          -3
        )} at this temperature. what is the mass of the salt left undissolved at the given temperature? <br />
        [Ca = 40; Cl = 35.5]`,
        options: [`57.8g`, `58.7g`, `58.9g`, `59.8g`],
        ans: "A",
      },
      {
        id: 55,
        question: `Determine the solubility (g per 100g water) of a substance using the following results: <br />
        Mass of flask alone = 50.52g <br />
        Mass of flask and saturated solution = 92.55g <br />
        Mass of flask and solute = 58.27g`,
        options: [`226.0`, `92.55`, `34.28`, `22.60`],
        ans: "B",
      },
      {
        id: 56,
        question: `Generally speaking, the solubility of a solute in water increases with an increase in temperature because`,
        options: [
          `the dissolution of most solutes is exothermic`,
          `the dissolution of most solutes is endothermic`,
          `more solute particles dissociate at higher temperature`,
          `more solute particles collide with one another`,
        ],
        ans: "B",
      },
      {
        id: 57,
        question: `Methyl orange in a solution of pH 12 is`,
        options: [`orange`, `colorless`, `yellow`, `red`],
        ans: "C",
      },
      {
        id: 58,
        question: `Phenolphthalein in a solution of pH 2.5 is`,
        options: [`yellow`, `pink`, `red`, `colorless`],
        ans: "D",
      },
      {
        id: 59,
        question: `In general, the solubility of a gas`,
        options: [
          `increase with increasing temperature`,
          `decreases with increasing temperature`,
          `is independent of temperature`,
          `doubles with a temperature rise of 10&deg;C`,
        ],
        ans: "B",
      },
    ],
  },

  {
    topic: "Experimental Chemistry",
    questions: [
      {
        id: 1,
        question: `What is the best method for obtaining pure solvents?`,
        options: [`Evaporation`, `Filtration`, `Distillation`, `Sublimation`],
        ans: "C",
      },
      {
        id: 2,
        question: `50${units(
          "cm",
          3
        )} of air is passed through an alkaline solution of pyrogallol in an experiment. The decreae in the volume of air is`,
        options: [
          `1.05 ${units("cm", 3)}`,
          `10.5 ${units("cm", 3)}`,
          `15.0 ${units("cm", 3)}`,
          `21.0 ${units("cm", 3)}`,
        ],
        ans: "B",
      },
      {
        id: 3,
        question: `The reagent that removes ${formula(
          "CO",
          2
        )} from a mixture of ${formula("CO", 2)} and ${formula("N", 2)} is`,
        options: [
          `alkaline pyrogallol`,
          `bromine water`,
          `concentrated ${formula("H", 2, "SO", 4)}`,
          `aqueous KOH`,
        ],
        ans: "D",
      },
      {
        id: 4,
        question: `The fountain experiment can best be demonstrated by the use of`,
        options: [
          `nitrogen(I) oxide and ammonia`,
          `hydrogen chloride and ammonia`,
          `nitrogen and nitrogen(I) oxide`,
          `chlorine and ammonia`,
        ],
        ans: "B",
      },
      {
        id: 5,
        question: `Which color is imparted to a flame by calcium ion?`,
        options: [`Brick-red`, `Yellow`, `Blue`, `Lilac`],
        ans: "A",
      },
      {
        id: 6,
        question: `A solution that will impart a green color to a flame and give a white precipitate with dil. ${formula(
          "HNO",
          3
        )} followed by aqueous ${formula("AgNO", 3)} is`,
        options: [
          `NaCl`,
          `${formula("NH", 4, "Cl")}`,
          `${formula("CaCl", 2)}`,
          `${formula("CuCl", 2)}`,
        ],
        ans: "D",
      },
      {
        id: 7,
        question: `A compound that would give a lilac flame coloration and a white precipate with aqueous barium chloride followed by dilute hydrochloric acid is`,
        options: [
          `KCl`,
          `${formula("K", 2, "SO", 4)}`,
          `${formula("NaCl")}`,
          `${formula("CuCl", 2)}`,
        ],
        ans: "B",
      },
      {
        id: 8,
        question: `A solution X, when added to another solution containing chloride ions, gives a white precipitate which is soluble on boiling. Solution X contains`,
        options: [
          `${ion("Cu", "2+")} ions`,
          `${ion("Zn", "2+")} ions`,
          `${ion("Al", "3+")} ions`,
          `${ion("Pb", "2+")} ions`,
        ],
        ans: "D",
      },
      {
        id: 9,
        question: `An aqueous solution gives a white precipitate which dissolves in excess reagent solution when treated with both sodium hydroxide solution and aqueous ammonia. The cation present in the aqueous solution is`,
        options: [
          `${ion("Zn", "2+")} ions`,
          `${ion("Al", "3+")} ions`,
          `${ion("Pb", "2+")} ions`,
          `${ion("Ca", "2+")} ions`,
        ],
        ans: "A",
      },
      {
        id: 10,
        question: `Why does a solution containing zinc ions give a white precipitate which dissolves in excess on adding sodium hydroxide solution?`,
        options: [
          `Sodium hydroxide is a strong base`,
          `Zinc hydroxide is a strong base`,
          `Zinc hydroxide reacts with sodium hydroxide to form a complex ion`,
          `Zinc hydroxide is water soluble`,
        ],
        ans: "C",
      },
      {
        id: 11,
        question: `Which of the following aqueous solutions would give a precipitate when treated with sodium hydroxide solution?`,
        options: [
          `${formula("NH", 4, "Cl", "aq")}`,
          `${formula("AlCl", 3, "aq")}`,
          `${formula("K", 2, "CO", 3, "aq")}`,
          `${formula("CH", 3, "COOK", "aq")}`,
        ],
        ans: "B",
      },
      {
        id: 12,
        question: `Which of the following aqueous solutions would give a precipitate soluble in excess ammonia solution?`,
        options: [
          `${formula(`(${formula("NH", 4)})`, 2, "SO", 4, "aq")}`,
          `${formula("Al", 2, `(${formula("SO", 4)})`, 3, "aq")}`,
          `${formula("Pb", `(${formula("NO", 3)})`, 2, "aq")}`,
          `${formula("CuSO", 4, "aq")}`,
        ],
        ans: "D",
      },
      {
        id: 13,
        question: `Addition of sodium hydroxide solution to a solution of iron(III) chloride gives`,
        options: [
          `a deep blue precipitate`,
          `a brown precipitate`,
          `a green solution`,
          `a colorless solution`,
        ],
        ans: "B",
      },
      {
        id: 14,
        question: `Which of the following is false about ammonium salts`,
        options: [
          `Evolution of ammonia on warming with alkalis`,
          `Decomposition by heat`,
          `Aqueous solution is neutral to litmus`,
          `High solubility in water`,
        ],
        ans: "C",
      },
      {
        id: 15,
        question: `Which of the following is the best laboratory reagent which can be used to distinguish a solution containing ${ion(
          "Zn",
          "2+"
        )} from separate solutions containing ${ion("Pb", "2+")} or ${ion(
          "Al",
          "3+"
        )}?`,
        options: [
          `Ca(${formula("OH")})<sub>2(aq)</sub>`,
          `${formula("Na", 2, "CO", 3, "aq")}`,
          `${formula("NaOH", "aq")}`,
          `${formula("NH", 3, "aq")}`,
        ],
        ans: "D",
      },
      {
        id: 17,
        question: `A solution that will give a white precipitate with a solution of barium chloride acidified with hydrochloric acid is`,
        options: [
          `potassium sulfide`,
          `potassium trioxocarbonate(IV)`,
          `potassium tetraoxosulfate(VI)`,
          `potassium trioxocarbonate(IV)`,
        ],
        ans: "C",
      },
      {
        id: 18,
        question: `Which of the following ions is confirmed by positive brown ring test?`,
        options: [
          `${ion(formula("NO", 3), "-")}`,
          `${ion(formula("NO", 2), "-")}`,
          `${ion(formula("Fe"), "2+")}`,
          `${ion(formula("SO", 3), "2-")}`,
        ],
        ans: "A",
      },
      {
        id: 19,
        question: `Which of the following salts will produce a pungent smelling gas which turns acidified ${formula(
          "K",
          2,
          "Cr",
          2,
          "O",
          7
        )} solution from orange to green, on treatment with dilute hydrochloric acid?`,
        options: [
          `${formula("Na", 2, "S")}`,
          `${formula("Na", 2, "SO", 4)}`,
          `${formula("Na", 2, "CO", 3)}`,
          `${formula("Na", 2, "SO", 3)}`,
        ],
        ans: "D",
      },
      {
        id: 20,
        question: `Three solutions contain ${ion(
          formula("SO", 4),
          "2-"
        )}, ${ion(formula("CO", 3), "2-")} and ${ion(
          "S",
          "2-"
        )} ions respectively. Which of the following reagents can be added to each of them in order to identify just one of them completely`,
        options: [
          `Aquous NaOH`,
          `Aqueous ${formula("BaCl", 2)}`,
          `Dilute HCl`,
          `Aqueous ${formula("NH", 3)}`,
        ],
        ans: "C",
      },
      {
        id: 21,
        question: `Which of the following equations rationalizes the observation that the white precipitate formed when ${formula(
          "CO",
          2,
          "g"
        )} is bubbled into lime-water disappears on passing the gas for a long time?`,
        options: [
          `${formula("Ca", `(${formula("OH")})`, 2, "aq")} + ${formula(
            "CO",
            2,
            "g"
          )} -> ${formula("CaCO", 3, "s")} + ${formula("H", 2, "O", "l")}`,
          `${formula("CaCO", 3, "s")} + ${formula(
            "H",
            2,
            "O",
            "l"
          )} -> ${formula("CO", 2, "g")} -> ${formula(
            "Ca",
            `(${formula("HCO", 3)})`,
            2,
            "aq"
          )}`,
          `${formula("CO", 2, "g")} -> ${formula("CO", 2, "s")}`,
          `${ion("Ca", "2+")} + 2${ion(formula("OH"), "-")} -> ${formula(
            "Ca",
            `(${formula("OH")})`,
            2,
            "aq"
          )}`,
        ],
        ans: "B",
      },
      {
        id: 22,
        question: `The gas evolved when dilute HCl is added to iron(II) sulfide solid`,
        options: [
          `rekindles a glowing splint`,
          `turns moist red litmus paper blue`,
          `turns leaf(II) ethanoate paper black`,
          `turns lime-water milky`,
        ],
        ans: "C",
      },
      {
        id: 23,
        question: `Chlorine gas is best collected`,
        options: [
          `by upward displacement of air`,
          `by downward displacement of air`,
          `over water`,
          `under water`,
        ],
        ans: "A",
      },
      {
        id: 24,
        question: `Which of the following is lime-water?`,
        options: [
          `${formula("Ca", `(${formula("HCO", 3)})`, 2, "s")}`,
          `${formula("Ca", `(${formula("HCO", 3)})`, 2, "aq")}`,
          `${formula("Ca", `(${formula("OH")})`, 2, "s")}`,
          `${formula("Ca", `(${formula("OH")})`, 2, "aq")}`,
        ],
        ans: "D",
      },
      {
        id: 25,
        question: `A gas which will rekindle a brightly glowing splint is`,
        options: [
          `NO`,
          `${formula("N", 2, "O")}`,
          `${formula("NO", 2)}`,
          `${formula("N", 2, "O", 4)}`,
        ],
        ans: "D",
      },
      {
        id: 26,
        question: `Which of the following gases would turn acidified ${formula(
          "K",
          2,
          "Cr",
          2,
          "O",
          7
        )} solution from orange to green?`,
        options: [
          `Hydrogen chloride`,
          `Hydrogen sulfide`,
          `Sulfur(IV) oxide`,
          `Sulfur(VI) oxide`,
        ],
        ans: "C",
      },
      {
        id: 27,
        question: `A gas that can be collected over water in the laboratory is`,
        options: [`Hydrogen chloride`, `Ammonia`, `Sulfur(IV) oxide`, `Oxygen`],
        ans: "D",
      },
      {
        id: 28,
        question: `A salt sample was added to cold dilute HCl. The gas evolved turned acidified ${formula(
          "K",
          2,
          "Cr",
          2,
          "O",
          7
        )} solution green. It can be inferred that the salt sample contains?`,
        options: [
          `${ion(formula("SO", 4), "2-")}`,
          `${ion(formula("SO", 3), "2-")}`,
          `${ion(formula("CO", 3), "2-")}`,
          `${ion(formula("S"), "2-")}`,
        ],
        ans: "B",
      },
      {
        id: 29,
        question: `If chlorine gas is tested with a damp startch-iodide paper, the paper turns`,
        options: [`green`, `pale red`, `black-blue`, `orange`],
        ans: "C",
      },
      {
        id: 30,
        question: `An apparatus used in the laboratory for intermittent production of gases without heating is`,
        options: [
          `U-tube`,
          `Liebig condenser`,
          `aspirator`,
          `Kipp's apparatus`,
        ],
        ans: "D",
      },
      {
        id: 31,
        question: `The gas evolved when ${formula(
          "Na",
          2,
          "SO",
          3
        )} is warmed with dilute HCl is`,
        options: [
          `${formula("SO", 2)}`,
          `${formula("SO", 3)}`,
          `${formula("H", 2, "S")}`,
          `${formula("HCl")}`,
        ],
        ans: "A",
      },
      {
        id: 32,
        question: `A substance that reacts with dilute HCl to produce a gas that blackens damp lead(II) ethanoate paper is`,
        options: [
          `sodium trioxocarbonate`,
          `copper(II) oxide`,
          `iron(II) sulfide`,
          `sodium trioxosulfate(VI)`,
        ],
        ans: "C",
      },
      {
        id: 33,
        question: `Which of the following gases can best be collected by downward displacement of air`,
        options: [`Oxygen`, `Ammonia`, `Sulfur(IV) oxide`, `Carbon(IV) oxide`],
        ans: "B",
      },
      {
        id: 34,
        question: `The following are properties of trioxonitrate(V) salts except`,
        options: [
          `effervescence with saturated ${formula("K", 2, "CO", 3)} solution`,
          `high solubility in cold water`,
          `positive reaction to the brown ring test`,
          `decomposition on being strongly heated`,
        ],
        ans: "A",
      },
      {
        id: 35,
        question: `Which of the followning substances can be used to identify water?`,
        options: [
          `${formula("Na", 2, "SO", 4, "aq")}`,
          `${formula("CuCO", 3, "aq")}`,
          `${formula("Na", 2, "CO", 3, "s")}`,
          `${formula("CuSO", 4, "s")}`,
        ],
        ans: "D",
      },
      {
        id: 36,
        question: `Which of the following reactions serves as the confirmatory test for alkanoic acids in organic qualitative analysis?`,
        options: [
          `Reaction with saturated ${formula(
            "NaHCO",
            3
          )} solution to evolve a gas which turns lime-water milky`,
          `Reaction with an alkanol in the presence of some drops of conc. ${formula(
            "H",
            "2",
            "SO",
            4
          )} to conc. ${formula(
            "H",
            2,
            "SO",
            4
          )} to form an alkanoate (fruity odour)`,
          `Reaction with an alkali to form a salt and water`,
          `Reaction with an electropositive metal to liberate a gas which pops with a lighted splint`,
        ],
        ans: "B",
      },
      {
        id: 37,
        question: `The presence of unsaturated in an organic compound can be confirmed by the use of the reagent.`,
        options: [
          `Tollen's reagent`,
          `Fehling's solution`,
          `Bromine water`,
          `Million's reagent`,
        ],
        ans: "C",
      },
      {
        id: 38,
        question: `Which of the aqueous solutions of the following substances would turn starch-iodide paper blue-black?`,
        options: [
          `An oxidizing agent`,
          `A reducing agent`,
          `An acid`,
          `A base`,
        ],
        ans: "A",
      },
      {
        id: 39,
        question: `Which of the following organic compounds would give an effervescemce with sodium hydrogentrioxocarbonate(IV) solution`,
        options: [
          `An alkali`,
          `An alkanone`,
          `An alkanioc acid`,
          `An alkanoate`,
        ],
        ans: "C",
      },
      {
        id: 40,
        question: `An aqueous solution of a salt that would not give a precipitate with a few drops of sodium hydroxide solution is`,
        options: [
          `${formula("KAl", `${formula("SO", 4)}`, 2)}.12${formula(
            "H",
            2,
            "O"
          )}`,
          `${formula("K",4,"Fe",`(${formula("CN")})`,6)}`,
          `${formula("CuSO",4)}.5${formula("H",2,"O")}`,
          `${formula("Zn",`(${formula("NO",3)})`,2)}`,
        ],
        ans: "B",
        // INSERT RIGHT ANSWER
      },
      {
        id: 41,
        question: `Heating a reducing sugar with Fehling's solution will lead to the production of`,
        options: [
          `deep blue solution`,
          `fruity odour`,
          `brick-red precipitate`,
          `black mass`
        ],
        ans: "C",
        // INSERT RIGHT ANSWER
      },
      {
        id: 42,
        question: `A compound that gives a yellow residue when heated is`,
        options: [
          `${formula("Zn","CO",3)}`,
          `${formula("PbCO",3)}`,
          `${formula("CuCO",3)}`,
          `${formula("Na",2,"CO",3)}`
        ],
        ans: "A",
        // INSERT RIGHT ANSWER
      },
      {
        id: 43,
        question: `A metal, oxygen and nitrogen(IV) oxide are produced on heating`,
        options: [
          `${formula("NaNO",3)}`,
          `${formula("AgNO",3)}`,
          `${formula("Pb",`(${formula("NO",3)})`,2)}`,
          `${formula("Cu",`(${formula("NO",3)})`,2)}`,
        ],
        ans: "B",
        // INSERT RIGHT ANSWER
      },
      {
        id: 44,
        question: `On carefully heating ${formula("NH",4,"NO",3)} crystals in a hard glass flask, the products are`,
        options: [
          `NO and ${formula("NO",2)}`,
          `${formula("NO",2)} and ${formula("NH",3)}`,
          `${formula("N",2,"O")} and ${formula("NO",2)}`,
          `${formula("N",2,"O")} and steam`,
        ],
        ans: "D",
        // INSERT RIGHT ANSWER
      },
      {
        id: 45,
        question: `Which of the following compounds would not produce oxygen on heating?`,
        options: [
          `${formula("NaClO",3)}`,
          `${formula("NaNO",3)}`,
          `${formula("NaNO",2)}`,
          `${formula("AgNO",3)}`,
        ],
        ans: "C",
        // INSERT RIGHT ANSWER
      },
      {
        id: 46,
        question: `On strongly heating sodium trioxonitrate(V), one of the products is`,
        options: [
          `sodium metal`,
          `sodium oxide`,
          `sodium dioxonitrate(III)`,
          `nitrogen(IV) oxide`,
        ],
        ans: "C",
        // INSERT RIGHT ANSWER
      },
      {
        id: 47,
        question: `A compound that decomposes on heating to give oxygen as the only gaseous product is`,
        options: [
          `${formula("NH",4,"NO",3)}`,
          `${formula("Pb",`(${formula("NO",3)})`,2)}`,
          `${formula("Cu",`(${formula("NO",3)})`,2)}`,
          `${formula("KNO",3)}`,
        ],
        ans: "D",
        // INSERT RIGHT ANSWER
      },
      {
        id: 48,
        question: `Which of the following is the best way to distinguish between ${formula("Na",2,"CO",3)} and ${formula("NaHCO",3)}?`,
        options: [
          `Dissolving in water`,
          `Heating`,
          `Adding an acid`,
          `Exposing to air`,
        ],
        ans: "B",
        // INSERT RIGHT ANSWER
      },
      {
        id: 49,
        question: `A salt that is stable to heat is`,
        options: [
          `${formula("Na",2,"CO",3)}`,
          `${formula("KHCO",3)}`,
          `${formula("Hg",`(${formula("NO",3)})`,2)}`,
          `${formula("NH",4,"NO",3)}`,
        ],
        ans: "A",
        // INSERT RIGHT ANSWER
      },
      {
        id: 50,
        question: `A suitable indicator in the titration of potassium trioxocarbonate(IV) solution against hydrochloric acid (complete neutralization) is`,
        options: [
          `universal indicator`,
          `litmus paper`,
          `phenolphthelein`,
          `methyl orange`,
        ],
        ans: "D",
        // INSERT RIGHT ANSWER
      },
      {
        id: 51,
        question: `Calculate the mass of potassium trioxocarbonate(IV) in 250${units("cm",3)} of 0.100 ${units("mol dm",-3)} solution. [${formula("K",2,"CO",3)} = 138${units("g mol",-1)}]`,
        options: [
          `1.85g`,
          `2.50g`,
          `3.45g`,
          `4.30g`,
        ],
        ans: "C",
        // INSERT RIGHT ANSWER
      },
      {
        id: 52,
        question: `What volume of 0.200 ${units("moldm",-3)} ${formula("H",2,"SO",4)} will be required to neutralize 25${units("cm",3)} of 0.100 ${units("moldm",-3)} NaOH solution?`,
        options: [
          `3.20 ${units("cm",3)}`,
          `6.25 ${units("cm",3)}`,
          `12.50 ${units("cm",3)}`,
          `15.75 ${units("cm",3)}`,
        ],
        ans: "B",
        // INSERT RIGHT ANSWER
      },
      {
        id: 53,
        question: `25${units("cm",-3)} of a solution containing 1.06g of anhydrous ${formula("Na",2,"CO",3)} in 200${units("cm",3)} requires 20${units("cm",-3)} of an aqueous solution of ${formula("H",2,"SO",4)}. What is the concentration of the acid solution in ${units("moldm",-3)}? [${formula("Na",2,"CO",3)} = 106${units("gmol",-1)}]`,
        options: [
          `0.125`,
          `0.0625`,
          `0.0313`,
          `0.0105`
        ],
        ans: "B",
        // INSERT RIGHT ANSWER
      },
      {
        id: 54,
        question: `3.75g of an acid, HX, was made up to 500${units("cm",3)} with distilled water. 20${units("cm",3)} of this solution required 25${units("cm",3)} of 0.100 ${units("moldm",-3)} NaOH solution for equivalence. What is the molar mass of the acid`,
        options: [
          `30${units("g mol",-1)}`,
          `36.5${units("g mol",-1)}`,
          `50${units("g mol",-1)}`,
          `60${units("g mol",-1)}`,
        ],
        ans: "D",
        // INSERT RIGHT ANSWER
      },
      {
        id: 55,
        question: `25${units("cm",3)} of a 0.05${units("mol dm",-3)} solution of ${formula("K",2,"CO",3)} requires 24,0${units("cm",3)} of a solution of HCl for complete neutralization. What is the concentration of the HCl solution?`,
        options: [
          `0.125${units("mol dm",-3)}`,
          `0.104${units("mol dm",-3)}`,
          `0.052${units("mol dm",-3)}`,
          `0.026${units("mol dm",-3)}`,
        ],
        ans: "B",
        // INSERT RIGHT ANSWER
      },
      {
        id: 56,
        question: `The volume of 0.200 ${units("mol dm",-3)} ${formula("H",2,"SO",4)} solution needed to dissolve 5.72g of sodium trioxocarbonate(IV) decahydrate is`,
        options: [
          `20 ${units("cm",3)}`,
          `50 ${units("cm",3)}`,
          `100 ${units("cm",3)}`,
          `200 ${units("cm",3)}`,
        ],
        ans: "C",
        // INSERT RIGHT ANSWER
      },
      {
        id: 57,
        question: `22.5 ${units("cm",3)} of 0.08 ${units("mol dm",-3)} ${formula("H",2,"SO",4)} solution requires 25 ${units("cm",3)} of potassium hydroxide solution for complete neutralization. What is the molar concentration of the KOH solution?`,
        options: [
          `0.146 ${units("mol dm",-3)}`,
          `0.156 ${units("mol dm",-3)}`,
          `0.166 ${units("mol dm",-3)}`,
          `0.186 ${units("mol dm",-3)}`,
        ],
        ans: "A",
        // INSERT RIGHT ANSWER
      },
      {
        id: 58,
        question: `160 ${units("cm",3)} of distilled water is added to 40 ${"cm",3} of 0.500 ${units("mol dm", -3)} ${formula("H",2,"SO",4)} solution, What is the concentration of the diluted solution?`,
        options: [
          `0.400 ${units("mol dm",-3)}`,
          `0.300 ${units("mol dm",-3)}`,
          `0.200 ${units("mol dm",-3)}`,
          `0.100 ${units("mol dm",-3)}`,
        ],
        ans: "D",
        // INSERT RIGHT ANSWER
      },
      {
        id: 59,
        question: `The appropriate concentration of the solution of the solution formed when 5g of potassium hydroxide is dissolved in 250 ${units("cm",3)} water is?`,
        options: [
          `0.20 ${units("mol dm",-3)}`,
          `0.30 ${units("mol dm",-3)}`,
          `0.40 ${units("mol dm",-3)}`,
          `0.50 ${units("mol dm",-3)}`,
        ],
        ans: "C",
        // INSERT RIGHT ANSWER
      },
      {
        id: 60,
        question: `The concentration of a solution containing 2.56g of sodium trioxocarbonate(IV) per 50 ${units("cm",3)} of solution is`,
        options: [
          `0.5 ${units("mol dm",-3)}`,
          `0.4 ${units("mol dm",-3)}`,
          `0.2 ${units("mol dm",-3)}`,
          `0.1 ${units("mol dm",-3)}`,
        ],
        ans: "A",
        // INSERT RIGHT ANSWER
      },
    ],
  },

  {
    topic: "Nomenclature",
    questions: [
      {
        id: 1,
        question: `Which element is named first in a binary compound of S and Cl`,
        options: ["S", "Cl"],
        ans: `A`,
      },
      {
        id: 2,
        question: `Which element is named first in a binary compound of O and S`,
        options: ["O", "S"],
        ans: `B`,
      },
      {
        id: 3,
        question: `Which element is named first in a binary compound of O and Xe`,
        options: ["O", "Xe"],
        ans: `B`,
      },
      {
        id: 4,
        question: `Which element is named first in a binary compound of S and I`,
        options: ["S", "I"],
        ans: `A`,
      },
      {
        id: 5,
        question: `The name of the compound ${formula("IF")} is`,
        options: [
          "Iodine Fluorine",
          "Monoiodine monofluoride",
          "Iodine monofluoride",
          "Iodine fluoride",
        ],
        ans: `C`,
      },
      {
        id: 6,
        question: `The name of the compound ${formula("NO")} is`,
        options: [
          "Nitrogen oxygen",
          "Nitrogen oxide",
          "Nitrogen monoxide",
          "Mononitrogen oxide",
        ],
        ans: `C`,
      },
      {
        id: 7,
        question: `The name of the compound ${formula("NO")} is`,
        options: [
          "Nitrogen oxygen",
          "Nitrogen oxide",
          "Nitrogen monoxide",
          "Mononitrogen oxide",
        ],
        ans: `C`,
      },
      {
        id: 8,
        question: `The name of the compound ${formula("SO", 3)} is`,
        options: [
          "Sulphur trioxide",
          "Sulphur oxide",
          "Sulphur tetroxide",
          "Sulphuric oxide",
        ],
        ans: `A`,
      },
      {
        id: 9,
        question: `The name of the compound ${formula("CO", 2)} is`,
        options: [
          "Carbon dioxygen",
          "Carbon trioxide",
          "Monocarbon dioxide",
          "Carbon dioxide",
        ],
        ans: `D`,
      },
      {
        id: 10,
        question: `The name of the compound ${formula("As", 2, "O", 5)} is`,
        options: [
          "Arsenic pentoxide",
          "Diarsenic pentoxide",
          "Arsenic oxide",
          "Arsenous acid",
        ],
        ans: `B`,
      },
      {
        id: 11,
        question: `The name of the compound ${formula("H", 2, "S")} is`,
        options: [
          "Dihydrogen monosulfide",
          "Hydrogen sulfide",
          "Hydrogen monosulfide",
          "Sulphuric acid",
        ],
        ans: `B`,
      },
      {
        id: 12,
        question: `The name of the compound ${formula("Si", "Cl", 4)} is`,
        options: [
          "Silicon tetrachloride",
          "Silicon tetrachlorine",
          "Monosilicon chloride",
          "Silicon chloride",
        ],
        ans: `A`,
      },
      {
        id: 13,
        question: `The name of the compound ${formula("PBr", 5)} is`,
        options: [
          "Phosphate acid",
          "Phosphorus pentbromide",
          "Phosphorus pentabromide",
          "Phosphorus bromide",
        ],
        ans: `C`,
      },
      {
        id: 14,
        question: `The name of the compound ${formula("P", 4, "O", 10)} is`,
        options: [
          "tetraphosphorus decoxide",
          "Monophosphate decoxide",
          "Monophosphorus decoxide",
          "Phosphoric acid",
        ],
        ans: `A`,
      },
      {
        id: 15,
        question: `The formula for Dinitrogen pentoxide is`,
        options: [
          `${formula("NO", 5)}`,
          `${formula("N", 2, "O")}`,
          `${formula("N", 2, "O", 5)}`,
          `${formula("N", 3, "O", 6)}`,
        ],
        ans: `C`,
      },
      {
        id: 16,
        question: `The formula for Tetrarsenic hexoxide is`,
        options: [
          `${formula("As", 4, "O", "6")}`,
          `${formula("As", 3, "O", 3)}`,
          `${formula("As", 2, "O", 3)}`,
          `${formula("As", 6, "O", 8)}`,
        ],
        ans: `A`,
      },
      {
        id: 17,
        question: `The name of ${ion("Co", 2, "+")} is`,
        options: [`Cobalt`, `Cobalt(II)`, `cobalt ion`, `Cobalt(II) ion`],
        ans: `D`,
      },
      {
        id: 18,
        question: `What is the charge of chromium ion in the compound ${formula(
          "CrCl",
          2
        )}`,
        options: [`1+`, `2+`, `3+`, `4+`],
        ans: `B`,
      },
      {
        id: 19,
        question: `What is the charge on the anion in (${formula(
          "NH",
          4
        )})<sub>3</sub>${formula("VO", 4)}?`,
        options: [`1-`, `2-`, `3-`, `4-`],
        ans: `C`,
      },
      {
        id: 20,
        question: `The formula of Magnesium sulfide is`,
        options: [
          `${formula("Mg", 2, "S")}`,
          `${formula("Mg", "S")}`,
          `${formula("MgS", 2)}`,
          `${formula("Mg", "S", 3)}`,
        ],
        ans: `B`,
      },
      {
        id: 21,
        question: `The formula of Sodium iodide is`,
        options: [
          `${formula("Na", 2, "I")}`,
          `${formula("Na", "I")}`,
          `${formula("Na", "I", 2)}`,
          `${formula("Na", 2, "I", 3)}`,
        ],
        ans: `B`,
      },
      {
        id: 22,
        question: `The formula of Lead(IV) oxide is`,
        options: [
          `${formula("Pb", 4, "O")}`,
          `${formula("Pb", "O", 4)}`,
          `${formula("Pb", "O", 2)}`,
          `${formula("Pb", 2, "O", 4)}`,
        ],
        ans: `C`,
      },
      {
        id: 23,
        question: `The formula of Aluminum oxide is`,
        options: [
          `${formula("Al", "O")}`,
          `${formula("Al", "O", 3)}`,
          `${formula("Al", 2, "O", 3)}`,
          `${formula("Al", "O", 3)}`,
        ],
        ans: `C`,
      },
      {
        id: 24,
        question: `The name of ${formula("Cr", 2, "O", 3)} is`,
        options: [
          `Dichromium trioxide`,
          `Chromium trioxide`,
          `Chromium(III) oxide`,
          `Chromium oxide`,
        ],
        ans: `C`,
      },
      {
        id: 25,
        question: `The name of ${formula("Al", 2, "O", 3)} is`,
        options: [
          `Aluminum trioxide`,
          `Aluminum(III) oxide`,
          `Dialuminum oxide`,
          `Aluminum oxide`,
        ],
        ans: `D`, // this is simply the answer...
      },
      {
        id: 26,
        question: `The name of CuS and ${formula(
          "Cu",
          2,
          "S"
        )} are respectively?`,
        options: [
          `Copper sulfide and Dicopper sulfide`,
          `Copper(I) sulfide and Copper(II) sulfide`,
          `Copper(II) sulfide and Copper(I) sulfide`,
          `Cuprite and Culprous`,
        ],
        ans: `C`, // this is simply the answer...
      },
      {
        id: 27,
        question: `Which of these is named wrongly<br />
        A. ${ion(formula("SO", 4), 2, "-")} : Sulfate ion,<br />
        B. ${ion(formula("CO", 3), 2, "-")} : Carbonite ion,<br />
        C. ${ion(formula("NO", 3), "", "-")} : Nitrous ion,<br />
        D. ${ion(formula("ClO", 3), "", "-")} : Chlorite ion`,
        options: [`A only`, `B, C, and D`, `A, and B`, `B, and C`],
        ans: `B`, // this is simply the answer...
      },
      {
        id: 28,
        question: `Name ${formula("NaNO", 3)}`,
        options: [
          `Sodium nitrogen oxide`,
          `Sodium(I) nitrate`,
          `Sodium nitrate`,
          `Sodium trinitrate`,
        ],
        ans: `C`, // this is simply the answer...
      },
      {
        id: 29,
        question: `The formula for cobalt(III) hypochlorite.`,
        options: [
          `${formula("Co", "(ClO)", 3)}`,
          `${formula("Co", 2, "(ClO)", 3)}`,
          `${formula("Co", "(ClO)")}`,
          `${formula("Co", "(ClO)", 4)}`,
        ],
        ans: `A`, // this is simply the answer...
      },
      {
        id: 30,
        question: `The name of ${formula("HNO", 3)} is`,
        options: [
          `Hydrogen nitrate acid`,
          `Nitric acid`,
          `Nitrous acid`,
          `Nitrogen oxalic acid`,
        ],
        ans: `B`, // this is simply the answer...
      },
      {
        id: 31,
        question: `The name of ${formula("HClO", 4)} is`,
        options: [
          `Chlorate acid`,
          `Perchlorate acid`,
          `Perchloric acid`,
          `chloric acid`,
        ],
        ans: `C`,
      },
      {
        id: 32,
        question: `The formula of Hypophosphorus acid is`,
        options: [
          `${formula("H", 3, "PO", 2)}`,
          `${formula("H", "PO", 2)}`,
          `${formula("H", 2, "PO", 2)}`,
          `${formula("H", 2, "PO", 3)}`,
        ],
        ans: `A`,
      },
      {
        id: 33,
        question: `The name of ${formula("CuSO", 4)}.5${formula(
          "H",
          2,
          "O"
        )} is`,
        options: [
          `Copper(II) sulphate pentahydrate`,
          `Copper(I) sulphate tetrahydrate`,
          `Copper sulfate pentahydrate`,
          `Copper sulfate tetrahydrate`,
        ],
        ans: `A`,
      },
      {
        id: 34,
        question: `Which of the following is mapped wrongly`,
        options: [
          `${ion(formula("NO", 2), "-")} -> nitrite ion`,
          `${ion("ClO", 4, "-")} -> perchlorate ion`,
          `${ion(formula("Cr", 2, "O", 7), 2, "-")} -> dichromate ion`,
          `${ion("CN", "", "-")} -> carbon nitride ion`,
        ],
        ans: `D`,
      },
      {
        id: 35,
        question: `The name of ${formula("CuClO")} is?`,
        options: [
          `Copper hypochlorite`,
          `Copper(I) hypochlorite`,
          `Copper hypochloride`,
          `Copper(I) hypochloride`,
        ],
        ans: `B`,
      },
      {
        id: 36,
        question: `The name of ${formula("Hg", 2, "SO", 4)} is?`,
        options: [
          `Mercury(II) sulfide`,
          `Mercury(I) sulfate`, // hmmmm...
          `Mercury(I) sulfide`,
          `Mercury(II) sulfate`,
        ],
        ans: `B`,
      },
      {
        id: 37,
        question: `The name of ${formula("Li", 2, "S")} is?`,
        options: [
          `Dilithium sulfate`,
          `Lithium sulfate`,
          `Lithium sulfide`,
          `Dilithium sulfide`,
        ],
        ans: `C`,
      },
      {
        id: 38,
        question: `What is the formula for potassium fluoride?`,
        options: [
          `${formula("KF", 2)}`,
          `${formula("KF")}`,
          `${formula("K", 2, "F")}`,
          `${ion("KF", "", "-")}`, // making sense
        ],
        ans: `B`,
      },
      {
        id: 39,
        question: `What prefix is used if there are three atoms of an element in a given compound`,
        options: [
          `Mono-`,
          `Tri-`,
          `Di-`,
          `Tetra-`, // making sense
        ],
        ans: `B`,
      },
      {
        id: 40,
        question: `If a compound is made from a metal element and a non-metal element, which element goes first in the name?`,
        options: [
          "Non-metal element",
          "Metal element",
          "It's alphabetical",
          "It's based on their position in the periodic table",
        ],
        ans: `B`,
      },
    ],
  },

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
    topic: `Introduction to organic chemistry`,
    questions: [
      {
        id: 1,
        question: "The following are members of the alkane series except?",
        options: [
          `${formula("C",2,"H",6)}`,
          `${formula("C",8,"H",18)}`, 
          `${formula("C",12,"H",24)}`, 
          `${formula("C",15,"H",32)}`
        ],
        ans: "C",
        remark: `An alkane takes the formula CnH2n+2`
      },
      {
        id: 2,
        question: "An alkanol is?",
        options: [
          `${formula("C",2,"Cl",3)}`,
          `${formula("CH",3,"OH")}`, 
          `${formula("HCOOOH")}`, 
          `${formula("CH",3,"CHO")}`
        ],
        ans: "B",
        remark: "An alkannol take the form of R-OH"
      },
      {
        id: 3,
        question: "The general formula of an haloalkane is",
        options: [
          `C<sub>n</sub>H<sub>2n+2</sub>X`,
          `C<sub>n</sub>H<sub>2n-2</sub>X`,
          `C<sub>n</sub>H<sub>2n-1</sub>X`,
          `C<sub>n</sub>H<sub>2n+1</sub>X`,
        ],
        ans: "D",
      },
      {
        id: 4,
        question: "Consecutive members of the alkyne homologous series differ by",
        options: [
          `${formula("CH",4)}`,
          `${formula("CH",3)}`,
          `${formula("CH",2)}`,
          `${formula("CH")}`,
        ],
        ans: "C",
      },
      {
        id: 5,
        question: "An alkanoic acid is represented by",
        options: [
          `${formula("R-C(OR)O")}`,
          `${formula("R-COOH")}`,
          `${formula("RCHO")}`,
          `${formula("R-C(OCOR)O")}`,
        ],
        ans: "B",
      },
      {
        id: 7,
        question:  `Which of the following functional groups is present in an organic compound which gives bubbles on treatment with a saturated solution of ${formula("NaHCO",3)}?`,
        options: [
          `Carboxyl group`,
          `Carboalkoxyl group`,
          `Carbonyl group`,
          `Amino group`,
        ],
        ans: "A",
      },
      {
        id: 9,
        question:  `Which of the following is the general formula of alkanones?`,
        options: [
          `RCOR'`,
          `RCOOR'`,
          `RCHO`,
          `RCOOH`,
        ],
        ans: "A",
      },
      {
        id: 11,
        question:  `Which of the following is an aromatic compound`,
        options: [
          `${formula("C",6,"H",14)}`,
          `${formula("C",6,"H","5","Cl")}`,
          `${formula("C",6,"H",13,"Cl")}`,
          `${formula("C",6,"H",13,"OH")}`,
        ],
        ans: "B",
      },
      {
        id: 12,
        question:  `If one mole of a hydrocarbon contains 4g of hydrogen and its molar mass is 40${units("g mol", -1)}. What is the homologous series of the compound? (C = 12; H = 1.0)`,
        options: [
          `Arene`,
          `Alkane`,
          `Alkene`,
          `Alkyne`,
        ],
        ans: "D",
      },
      {
        id: 13,
        question:  `Homologous have the same`,
        options: [
          `empirical formula`,
          `structural formula`,
          `general formula`,
          `molecular formula`,
        ],
        ans: "C",
      },
      {
        id: 15,
        question:  `The pair of compounds that belong to the same homologous series is`,
        options: [
          `${formula("C",3,"H",6)} and ${formula("C",4,"H",8)}`,
          `${formula("C",3,"H",6)} and ${formula("C",4,"H",10)}`,
          `${formula("C",3,"H",4)} and ${formula("C",6,"H",8)}`,
          `${formula("C",3,"H",6)} and ${formula("C",4,"H",6)}`,
        ],
        ans: "A",
      },
      {
        id: 18,
        question:  `The general formula for the alkanoates is`,
        options: [
          `RCHO`,
          `${formula("R",2,"CO")}`,
          `RCOOR'`,
          `ROH`,
        ],
        ans: "C",
      },
      {
        id: 19,
        question:  `One of the characteristics of homologues is`,
        options: [
          `existence in the same physical state`,
          `possession of different reactive centres`,
          `possession of the same molar mass`,
          `similarity in methods of preparation`,
        ],
        ans: "D",
      },
      {
        id: 20,
        question:  `${formula("C",4,"H",6)} belongs to the same homologous series as`,
        options: [
          `${formula("C",6,"H","8")}`,
          `${formula("C",6,"H","10")}`,
          `${formula("C",6,"H","12")}`,
          `${formula("C",6,"H","14")}`,
        ],
        ans: "B",
      },
      {
        id: 21,
        question:  `What is the general molecular formula of hydrocarbons that react with ammoniacal copper(I) chloride solution?`,
        options: [
          `C<sub>n</sub>H<sub>2n+2</sub>`,
          `C<sub>n</sub>H<sub>2n-2</sub>`,
          `C<sub>n</sub>H<sub>2n</sub>`,
          `C<sub>n</sub>H<sub>n</sub>`,
        ],
        ans: "B",
      },
      {
        id: 24,
        question:  `The four main classes of hydrocarbons are`,
        options: [
          `methane, ethene, ethyne, and benzene`,
          `ethane, ethene, ethyne, and toluene`,
          `cycloalkanes, cycloalkenes, alkynes and arenes`,
          `alkanes, alkenes, alkynes and aromatics`,
        ],
        ans: "D",
      },
      {
        id: 25,
        question:  `Three liquid hydrocarbons, E, F, and G were subjected to burning in air on a spoon in turn. E and F burnt with sooty flames while G did not. F was able to discharge the color of bromine water whereas E and G could not. Which of the liquids would be aromatic in nature`,
        options: [
          `E`,
          `F`,
          `G`,
          `none`
        ],
        ans: "A",
      },
      {
        id: 26,
        question:  `Which of the following tests can be used to distinguish aromatic from aliphatic hydrocarbons?`,
        options: [
          `Polymerization reaction`,
          `Action of bromine water`,
          `Burning in air`,
          `Action of iodine solution`
        ],
        ans: "C",
      },
      {
        id: 27,
        question:  `Both addition reactions and substition reactions can be undergone by`,
        options: [
          `Ethene`,
          `Benzene`,
          `Hexane`,
          `Propane`
        ],
        ans: "B",
      },
      {
        id: 28,
        question:  `Which of the following gas does not decolorize bromine water?`,
        options: [
          `${formula("C",3,"H",6)}`,
          `${formula("C",3,"H",4)}`,
          `${formula("C",3,"H",8)}`,
          `${formula("C",3,"H",10)}`,
        ],
        ans: "D",
      },
      {
        id: 29,
        question:  `Ethene produces less soot than benzene on burning because ethene`,
        options: [
          `has a lower molar mass`,
          `has a lower degree of unsaturation`,
          `is a gas at room temperature`,
          `undergoes addition reactions only`,
        ],
        ans: "B",
      },
      {
        id: 30,
        question:  `The carbon atoms in ethyne are`,
        options: [
          `sp hybridized`,
          `sp<sup>2</sup> hybridized`,
          `sp<sup>3</sup> hybridized`,
          `dsp<sup>3</sup> hybridized`,
        ],
        ans: "A",
      },
      {
        id: 31,
        question:  `The hybridization of each of the carbon atoms in ethene is`,
        options: [
          `d<sup>2</sup>sp<sup>3</sup>`,
          `dsp<sup>3</sup>`,
          `sp<sup>3</sup>`,
          `sp<sup>2</sup>`,
        ],
        ans: "D",
      },
      {
        id: 32,
        question:  `The carbon atoms in propane are`,
        options: [
          `not hybridized`,
          `sp<sup>3</sup> hybridized`,
          `sp<sup>2</sup> hybridized`,
          `sp hybridized`,
        ],
        ans: "B",
      },
      {
        id: 33,
        question:  `Which of the following orbitals of carbon are mixed during hybridization?`,
        options: [
          `1s and 2s`,
          `1s and 2p`,
          `2s and 2p`,
          `2s and 3p`,
        ],
        ans: "C",
      },
      {
        id: 34,
        question:  `The orbitals that overlap in methane are`,
        options: [
          `s and s`,
          `sp<sup>2</sup> and s`,
          `sp<sup>3</sup> and s`,
          `sp and s`,
        ],
        ans: "C",
      },
      {
        id: 37,
        question:  `An organic compound is 53.1% C; 6.2% H; 12.4% N and 28.3% O by mass. Calculate the molecular formula of the compound if its vapour density is 56.5 <br /> {C = 12, H = 1, O = 16}`,
        options: [
          `${formula("C",5,"H",7,"NO",2)}`,
          `${formula("C",5,"H",6,"NO",2)}`,
          `${formula("C",3,"H",6,"NO",2)}`,
          `${formula("C",3,"H",7,"NO",2)}`,
        ],
        ans: "A",
      },
      {
        id: 38,
        question:  `What is the empirical formula of an organic compound containing 40.1%C and 6.6% H?`,
        options: [
          `${formula("C",2,"HO")}`,
          `${formula("CH",3,"O")}`,
          `${formula("CH",2,"O")}`,
          `${formula("C",2,"H",3,"O")}`,
        ],
        ans: "C",
      },
      {
        id: 39,
        question:  `A hydrocarbon with vapor density 21 contains 36g of carbon in one mole. What is the homologous series of the hydrocarbons?`,
        options: [
          `Aromatic`,
          `Alkynes`,
          `Alkanes`,
          `Alkenes`,
        ],
        ans: "D",
      },
      {
        id: 40,
        question:  `A sample of a hydrocarbon burns in excess oxygen to yield 0.22g of ${formula("CO",2)} amd 0.09g of ${formula("H",2,"O")}. The empirical formula of the compound is?`,
        options: [
          `CH`,
          `${formula("CH",2)}`,
          `${formula("CH",3)}`,
          `${formula("C","2","H",3)}`,
        ],
        ans: "B",
      },
      {
        id: 41,
        question:  `0.06g of a monobasic organic acid having the general formula C<sub>n</sub>H<sub>2n+1</sub>COOH was neutralized by 100${units("cm",3)} of 0.01${units("mol dm",-3)} NaOH solution. The molecular formula of the acid is`,
        options: [
          `${formula("C",4,"H",9,"COOH")}`,
          `${formula("C",3,"H",7,"COOH")}`,
          `${formula("C",2,"H",5,"COOH")}`,
          `${formula("CH",3,"COOH")}`,
        ],
        ans: "D",
      },
      {
        id: 42,
        question:  `The relative molecular mass of a compound which has empirical formula ${formula("CH",2,"O")} is`,
        options: [
          `180`,
          `145`,
          `126`,
          `42`,
        ],
        ans: "A",
      },
      {
        id: 43,
        question:  `A hydrocarbon containing 81.8% carbon has a vapor density of 22. Its molecular formula is?`,
        options: [
          `${formula("CH",4)}`,
          `${formula("C",2,"H",6)}`,
          `${formula("C",3,"H",6)}`,
          `${formula("C",4,"H",10)}`,
        ],
        ans: "C",
      },
      {
        id: 44,
        question:  `The relative molecular mass of an organic compound is 54. If its empirical formula is ${formula("C",2,"H",3)}, the compound is an`,
        options: [
          `Aromatic`,
          `Alkyne`,
          `Alkene`,
          `Alkane`,
        ],
        ans: "B",
      },
      {
        id: 45,
        question:  `The molecular formula of a compound is ${formula("C",4,"H",8,"N",2,"O",2)}. Its empirical formula is`,
        options: [
          `${formula("CH",2,"NO")}`,
          `${formula("C",4,"H",8,"N",2,"O",2)}`,
          `${formula("C",4,"H",8,"NO")}`,
          `${formula("C",2,"H",4,"NO")}`,
        ],
        ans: "D",
      },
      {
        id: 46,
        question:  `What is the molecular formula of a compound which has empirical formula ${formula("C",5,"H",7,"N")} and the relative molecular mass 162?`,
        options: [
          `${formula("C",20,"H",28,"N",4)}`,
          `${formula("C",15,"H",21,"N",3)}`,
          `${formula("C",20,"H",41,"N",2)}`,
          `${formula("C",5,"H",7,"N")}`,
        ],
        ans: "C",
      },
      {
        id: 49,
        question:  `How many structural isomers can be drawn for the molecular formula ${formula("C",3,"H",8,"O")}`,
        options: [
          `1`,
          `2`,
          `3`,
          `4`
        ],
        ans: "C",
      },
      {
        id: 51,
        question:  `How many isomeric cycloalkanes can be drawn for the molecular formula ${formula("C",4,"H",8)}`,
        options: [
          `1`,
          `2`,
          `3`,
          `4`,
        ],
        ans: "B",
      },
      {
        id: 52,
        question:  `The number of structural isomers that can be written for the alkyl chloride, ${formula("C",4,"H",9,"Cl")} is`,
        options: [
          `2`,
          `3`,
          `4`,
          `5`,
        ],
        ans: "D",
      },
      {
        id: 88,
        question:  `A characteristic reaction of unsaturated hydrocarbons is`,
        options: [
          `substitution`,
          `polymerization`,
          `neutralization`,
          `elimination`,
        ],
        ans: "B",
      },
      {
        id: 89,
        question:  `In which of the following polymers is nitrogen present?`,
        options: [
          `Polyvinyl chloride`,
          `Polythene`,
          `Nylon`,
          `Starch`,
        ],
        ans: "C",
      },
      {
        id: 84,
        question:  `The polymerization of 2-chlorobuta-1,3-diene in the presence of sodium gives a synthetic rubber known as`,
        options: [
          `neoprene`,
          `chloroprene`,
          `teflon`,
          `polythene`,
        ],
        ans: "A",
      },
      {
        id: 87,
        question:  `Terylene is synthesized by copolymerizing benzene-1,4-dicarboxylic acid(terephthalic acid) and ethane-1,2-diol. The reaction involved in this synthesis is`,
        options: [
          `substitution`,
          `addition`,
          `elimination`,
          `condensation`,
        ],
        ans: "D",
      },
      {
        id: 67,
        question:  `Alkanols have relatively high boiling points because of`,
        options: [
          `covalent bonding`,
          `ionic bonding`,
          `hydrogen bonding`,
          `dipole-dipole attractions`,
        ],
        ans: "C",
      },
      {
        id: 68,
        question:  `The solubility of glucose in water is due to`,
        options: [
          `crystalline structure`,
          `hydrogen bonding`,
          `covalent structure`,
          `low melting point`,
        ],
        ans: "B",
      },
      {
        id: 69,
        question:  `Which of the following alkanes has the highest boiling point`,
        options: [
          `Propane`,
          `Pentane`,
          `Hexane`,
          `Heptane`,
        ],
        ans: "D",
      },
      {
        id: 71,
        question:  `The reaction between an alkanol and an alkanoic acid in the presence of an acid catalyst is known as`,
        options: [
          `neutralization`,
          `hydration`,
          `esterification`,
          `dehydration`,
        ],
        ans: "C",
      },
      {
        id: 72,
        question:  `In which of the following pairs is all members made by the process of polymerization`,
        options: [
          `Soap and Petrol`,
          `Artificial rubber and nylon`,
          `Margarine and ethanol`,
          `Soap and nylon`,
        ],
        ans: "B",
      },
      {
        id: 73,
        question:  `Rapid oxidation with bromine water is given by`,
        options: [
          `alkanes`,
          `alkanols`,
          `alkanoic acids`,
          `alkenes`,
        ],
        ans: "D",
      },
      {
        id: 74,
        question:  `When a heavy fraction from petroleum is heated at high temperature, a lower boiling liquid is obtained. This process is known as`,
        options: [
          `fractional distillation`,
          `polymerization`,
          `cracking`,
          `refining`,
        ],
        ans: "C",
      },
      {
        id: 77,
        question:  `When an alkanol is heated with excess conc. ${formula("H",2,"SO",4)}, the alkanol is`,
        options: [
          `reduced to an alkene`,
          `oxidized to an alkene`,
          `dehydrated to an alkene`,
          `polymerized to a macromolecule`,
        ],
        ans: "C",
      },
      {
        id: 78,
        question:  `The reaction between ethanoic acid and potassium hydroxide illustrates`,
        options: [
          `hydroxylation`,
          `neutralization`,
          `acidification`,
          `esterification`,
        ],
        ans: "B",
      },
      {
        id: 81,
        question:  `The characteristic reaction of alkanals and alkanones(carbonyl compounds) is`,
        options: [
          `addition`,
          `substitution`,
          `elimination`,
          `neutralization`,
        ],
        ans: "A",
      },
    ]
  },

  {
    topic: "IUPAC Nomenclature Of Organic compounds",
    questions: [
      {
        id: 1,
        question: `The IUPAC name for ${formula("CH",3)}${formula("CH")}(${formula("CH",3)})-${formula("CH",2)}-${formula("CH",2)}-${formula("CH",3)} is`,
        options: [
          `1-methylhexane`,
          `1,1-dimethylbutane`, 
          `4-methylpentane`, 
          `2-methylpentane`
        ],
        ans: "D",
      },
      {
        id: 2,
        question: `The IUPAC name for the compound ${formula("CH",3)}-C(Br)(${formula("CH",3)})-${formula("CH",2)}-${formula("CH",3)} is`,
        options: [
          `2-bromoisopentane`,
          `3-bromoisopentane`, 
          `2-bromo-2-methylbutane`, 
          `1-bromo-1,1-dimethylpropane`
        ],
        ans: "C",
      },
      {
        id: 3,
        question: `The IUPAC name for the compound <br />
        ${formula("CH",3)}-${formula("CH",2)}-C(${formula("CH",3)})(${formula("CH",3)})-${formula("CH",2)}-${formula("CH",2)}-${formula("CH",3)}`,
        options: [
          `isoheptane`,
          `3,3-dimethylhexane`, 
          `4-methylhexane`, 
          `heptane`
        ],
        ans: "B",
      },
      {
        id: 4,
        question: `The compound <br />
        ${formula("CH",3)}-${formula("CH",2)}-${formula("CH")}(${formula("CH",2,"Cl")})-${formula("CH",3)} is`,
        options: [
          `1-chloro-2-methylpentane`,
          `1-chloro-2-methylbutane`, 
          `1-chloromethylbutane`, 
          `1-chloro-2-ethyl-2-methylethane`
        ],
        ans: "B",
      },
      {
        id: 5,
        question: `The IUPAC nomenclature for the compound <br />
        ${formula("CH",3)}-C(${formula("CH",3)})(${formula("CH",3)})-${formula("CH",2)}-${formula("CH")}(${formula("CH",3)})-${formula("CH",2)}-${formula("CH",3)} is`,
        options: [
          `trimethylhexane`,
          `3,5,5-trimethylhexane`, 
          `1,1,1,3-tetramethylpentane`, 
          `2,2,4-trimethylhexane`
        ],
        ans: "D",
      },
      {
        id: 6,
        question: `${formula("CH",3)}-CH(${formula("CH",3)})-CH(${formula("CH",2)}-${formula("CH",3)})-${formula("CH",2)}-${formula("CH",2)}-${formula("CH")}(${formula("CH",3)})${formula("CH",3)}<br />
        The IUPAC name for the organic compound with the above structural formula is`,
        options: [
          `3-ethyl-2,6-dimethylheptane`,
          `5-ethyl-2,6-dimethylheptane`, 
          `4-ethyl-1,1,5-trimethylhexane`, 
          `3-ethyl-2,6,6-trimethylhexane`
        ],
        ans: "A",
      },
      {
        id: 7,
        question: `What is the IUPAC name of the following compound<br />
        ${formula("CH",3)}-${formula("CH",2)}-${formula("CH")}(Br)-${formula("CH")}(${formula("CH",3)})-${formula("CH",2)}-${formula("CH",3)}`,
        options: [
          `3-methyl-4-bromohexane`,
          `3-bromo-4-methylhexane`, 
          `3-bromo-3-methylhexane`, 
          `3,4-bromomethylhexane`
        ],
        ans: "B",
      },
      {
        id: 8,
        question: `The IUPAC names for the compounds ${formula("CH",3,"CH")}=${formula("CH",2)} and ${formula("HOCH",2,"CH",2,"OH")} are respectively`,
        options: [
          `propylene and ethylene glycol`,
          `propene and ethyl alcohol`, 
          `propene and ethane-1,2-diol`, 
          `propylene and ethane-1,2-diol`
        ],
        ans: "C",
      },
      {
        id: 9,
        question: `The IUPAC name for the compound <br />
        ${formula("CH",3)}-${formula("CH",2)}-${formula("CH",2)}-C(${formula("CH",3)})=C(${formula("CH",3)})(${formula("CH",3)})`,
        options: [
          `3,5-dimethylhex-4-ene`,
          `1,1,2-trimethylpent-1-ene`, 
          `2,3-dimethylhex-2,3-ene`, 
          `2,3-dimethylhex-2-ene`
        ],
        ans: "D",
      },
      {
        id: 10,
        question: `${formula("C",2,"H",5)}-C(${formula("CH",3)})=CH(${formula("CH",3)})`,
        options: [
          `3-methylpent-2-ene`,
          `3-methylpent-3-ene`, 
          `1,2-dimethylbut-1-ene`, 
          `3,4-dimethylbut-3-ene`
        ],
        ans: "A",
      },
      {
        id: 11,
        question: `The IUPAC name for the compound<br />
        ${formula("CH",3)}-CH(${formula("CH",3)})-${formula("CH",2)}-CH=CH-${formula("CH",3)}`,
        options: [
          `2-methylhex-1-ene`,
          `5-methylhex-2-ene`, 
          `2-methylhex-2-ene`, 
          `5-methylhex-4-ene`
        ],
        ans: "B",
      },
      {
        id: 12,
        question: `What is the IUPAC name for the compound<br />
        ${formula("CH",3,"CH")}=C(${formula("CH",2,"CH",3)})(${formula("CH",2,"CH",2,"Cl")})`,
        options: [
          `1-chloro-3-ethylpent-3-ene`,
          `5-chloro-3-ethylpent-2,3-ene`, 
          `5-chloro-3-ethlypent-2-ene`, 
          `1-ethyl-1-chloroethylpropene`
        ],
        ans: "C",
      },
      {
        id: 13,
        question: `The structure of trans-3-methylpent-2-ene is`,
        options: [
          `${formula("CH",3,"CH",2)}-C${formula("CH",3)}=${"CH","CH",3}`,
          `(${formula("CH",3)})(${formula("CH",3)})C=C(H)(${formula("CH",3)})`, 
          `(${formula("CH",3)})(${formula("CH",3,"CH",2)})C=C(${formula("CH",3)})(H)`, 
          `(${formula("CH",3)})(${formula("CH",3)})C=C(${formula("CH",3)})${formula("CH",3)}`
        ],
        ans: "B",
      },
      {
        id: 14,
        question: `${formula("CH",3)}-C(${formula("CH",2,"CH",3)})=CH-${formula("CH",2)}-C(${formula("CH",3)})(${formula("CH",2,"CH",3)})-${formula("CH",3)} <br /> The IUPAC name for the hydrocarbon is`,
        options: [
          `2,5-diethyl-5-methylhex-2-ene`,
          `2,5-dimethyl-2-methylhex-4-ene`,
          `3,3,6-trimethlyoct-5-ene`,
          `3,6,6-trimethyloct-3-ene`
        ],
        ans: "D",
      },
      {
        id: 15,
        question: `${formula("CH",3)}-${formula("CH",2)}-C(${formula("CH",3)})(${formula("CH",3)})-CH=${formula("CH",2)}<br /> The IUPAC name of the hydrocarbon above is`,
        options: [
          `3,3-dimethylpent-1-yne`,
          `3,3-dimethylpent-1-ene`,
          `3,3-dimethylpent-4-yne`, // this will ensure no duplicate is present. lolzzzz.
          `3,3-dimethylpent-4-ene`
        ],
        ans: "B",
      },
      {
        id: 16,
        question: `What is the IUPAC nomenclature for the compound (${formula("CH",3)})<sub>2</sub>CHCH=CH${formula("CH",3)}?`,
        options: [
          `2-methylpent-3-ene`,
          `1,1,3-trimethylpropene`,
          `4-methylpent-2-ene`,
          `4,4-dimethylbut-2-ene`
        ],
        ans: "C",
      },
      {
        id: 17,
        question: `What is the IUPAC name of a compound which has the following structure?<br />
        ${formula("CH",3)}-${formula("CH",2)}-${formula("CH",2)}-CH=C(${formula("CH",3)})${formula("CH",2,"CH",3)}`,
        options: [
          `3-methylhept-3-ene`,
          `1-ethyl-1-methylpent-1-ene`,
          `2-ethylhex-1-ene`,
          `1,3-diethyl-1-methylpropene`
        ],
        ans: "A",
      },
      {
        id: 18,
        question: `The IUPAC name for the compound ${formula("CH",3)}-${formula("CH",2)}-C(${formula("CH",2,"CH",2)})=${formula("CH",2)}`,
        options: [
          `Hex-1-ene`,
          `1,1-diethylethene`,
          `3-ethylbut-3-ene`,
          `2-ethylbut-1-ene`
        ],
        ans: "D",
      },
      {
        id: 19,
        question: `The compound with the structure:<br />
        ${formula("CH",3)}-${formula("CH",2)}-CH=C(Br)-${formula("CH",3)}<br />
        has the IUPAC name`,
        options: [
          `2-bromopent-3-ene`,
          `2-bromopent-2-ene`,
          `4-bromopent-3-ene`,
          `4-bromopent-2-ene`
        ],
        ans: "B",
      },
      {
        id: 20,
        question: `What are the correct IUPAC names for HC&#8801;CH and ${formula("CH",3,"COOCH",2,"CH",3)}?`,
        options: [
          `Acetylene and ethyl acetate`,
          `Acetylene and methyl acetate`,
          `Ethyne and ethyl acetate`,
          `Ethyne and methyl ethanoate`
        ],
        ans: "C",
      },
      {
        id: 21,
        question: `The IUPAC name for the compound:<br />
        ${formula("CH",3)}-${formula("CH",2)}&#8801;C-${formula("CH",3)}`,
        options: [
          `1,2-dimethylethyne`,
          `methylpropyne`,
          `but-1-yne`,
          `but-2-yne`
        ],
        ans: "D",
      },
      {
        id: 22,
        question: `What is the IUPAC name of the compound below?<br />
        ${formula("CH",3)}-${formula("CH")}(${formula("CH",2,"CH",3)})-C(${formula("CH",3)})-C&#8801;CH`,
        options: [
          `3,4-dimethylhex-1-yne`,
          `3,4-dimethylhex-5-yne`,
          `4-ethyl-3-methylpent-1-yne`,
          `2-ethyl-3-methylpent-4-yne`
        ],
        ans: "A",
      },
      {
        id: 23,
        question: `What is the IUPAC name of the compound below <br />
        ${formula("CH",3)}-${formula("CH",2)}-${formula("CH",2)}-${formula("CH")}(OH)-C(${formula("CH",3)})<sub>3</sub>`,
        options: [
          `1,1,1-trimethlypentan-2-ol`,
          `5,5,5-trimethylpentan-4-ol`,
          `2,2-dimethylhexan-3-ol`,
          `5,5-dimethylhexan-4-ol`
        ],
        ans: "C",
      },
      {
        id: 24,
        question: `The IUPAC name for the compound is <br />
        ${formula("CH",2)}(OH)-CH(OH)-${formula("CH",2)}(OH)`,
        options: [
          `propanetriol`,
          `propane-1,2,3-triol`,
          `glycerol`,// perhaps this is the common name, not the IUPAC name
          `glycerine`
        ],
        ans: "B",
        remark: `Please note that although (B) is the IUPAC name of this structure, it is mostly referred to as (C) <strong>Glycerol</strong>`
      },
      {
        id: 25,
        question: `Which of the following is the structural formula of propanoic acid`,
        options: [
          `${formula("CH",3)}-${formula("CH",2)}-CHO`,
          `${formula("CH",3)}-CO(${formula("CH",3)})`,
          `${formula("CH",3)}-${formula("CH",2)}-COOH`,
          `${formula("CH",3)}-${formula("CH",2)}-CO${formula("CH",3)}`
        ],
        ans: "C",
      },
      {
        id: 26,
        question: `Which of the follwoing represents propyl methanoate`,
        options: [
          `${formula("CH",3,"CH",2,"CH",2,"COOH")}`,
          `${formula("HCOOCH",2,"CH",3)}`,
          `${formula("CH",3,"COOCH",2,"CH",2,"CH",3)}`,
          `${formula("HCOOCH",2,"CH",2,"CH",3)}`
        ],
        ans: "D",
      },
      {
        id: 27,
        question: `The IUPAC name of the compound is <br />
        ${formula("H",3,"C")}-C(${formula("CH",3)})(${formula("CH",2,"CH",3)})-COOH`,
        options: [
          `2-ethyl-2-methylpropanoic acid`,
          `2,2-dimethylbutanoic acid`,
          `2-ethyl-2,2-dimethylethanoic acid`,
          `1-hydroxy-2,2-dimethylpropan-1-one`
        ],
        ans: "B",
      },
      {
        id: 28,
        question: `Which of the following is the structural formula for but-2-enoic acid`,
        options: [
          `${formula("CH",3)}CH=C(COOH)-${formula("CH",3)}`,
          `${formula("CH",3,"CH",2,"CH",2,"COOH")}`,
          `${formula("CH",3,"CH")}=CHCOOH`,
          `${formula("CH",2)}=CH-${formula("CH",2,"COOH")}`
        ],
        ans: "C",
      },
      {
        id: 29,
        question: `The IUPAC name for the compound is<br />
        (${formula("CH",3)})<sub>2</sub>CHCH(${formula("CH",3)})COOH`,
        options: [
          `2,3-dimethylbutanoic acid`,
          `2-methylbutanoic acid`,
          `2-methylpentanoic acid`,
          `2,3,3-trimethylpropanoic acid`
        ],
        ans: "A",
      },
      {
        id: 30,
        question: `The IUPAC name for <br />
        ${formula("H",2,"N")}-${formula("CH",2)}-${formula("CH",2)}-COOH is`,
        options: [
          `1-aminopropanoic acid`,
          `3-aminopropanoic acid`,
          `1-amino-3-hydroxypropan-3-one`,
          `3-amino-1-hydroxypropan-3-one`,
        ],
        ans: "B",
      },
      {
        id: 31,
        question: `The IUPAC name for ${formula("CH",3)}(${formula("CH",3)})<sub>2</sub>COO${formula("CH",3)} is`,
        options: [
          `ethyl ethanoate`,
          `methyl propanoate`,
          `butyl methanoate`,
          `methyl butanoate`,
        ],
        ans: "D",
      },
    ]
  },

  {
    topic: "Bifunctional families and organic giant molecules",
    questions: [
      {
        id: 1,
        question: `Which of the following process can convert starch to ethanol`,
        options: [`Cracking`, `Cooking`, `Esterification`, `Fermentation`],
        ans: "D",
      },
      {
        id: 2,
        question: `Starch and cellulose are`,
        options: [`sugars`, `polymers`, `isomers`, `hydrocarbons`],
        ans: "B",
      },
      {
        id: 3,
        question: `Which of the following is the chief component of cotton`,
        options: [`Cellulose`, `Starch`, `Proteins`, `Sucrose`],
        ans: "A",
      },
      {
        id: 4,
        question: `${formula("C",12,"O",11)} + ${formula("H",2,"O")} -> 2${formula("C",6,"H",12,"O",6)}<br />
        What is the function of maltase in the above reaction?`,
        options: [
          `A reducing agent`, 
          `An oxidizing agent`, 
          `A catalyst`, 
          `A dehydrating agent`
        ],
        ans: "C",
      },
      {
        id: 5,
        question: `When sucrose reacts with concentrated tetraoxosulfate(VI) acid, one of the products is`,
        options: [
          `Carbon(II) oxide`, 
          `Carbon(IV) oxide`, 
          `Charcoal`, 
          `Coal tar`
        ],
        ans: "C",
      },
      {
        id: 6,
        question: `Which of the following carbohydrates is a polysaccharide?`,
        options: [
          `Laevulose`, 
          `Insulin`, 
          `Dextrose`, 
          `Lactose`
        ],
        ans: "B",
      },
      {
        id: 7,
        question: `An example of disaccharide is`,
        options: [
          `Starch`, 
          `Cellulose`, 
          `Fructose`, 
          `Sucrose`
        ],
        ans: "D",
      },
      {
        id: 8,
        question: `Which of the following would give a positive reaction to Fehling's test?`,
        options: [
          `Reducing sugars`, 
          `Non-reducing sugars`, 
          `Starch`, 
          `Cellulose`
        ],
        ans: "A",
      },
      {
        id: 9,
        question: `The following statements about proteins are false except:`,
        options: [
          `They give brick-red precipitates with a hot Fehling's solution`, 
          `They hydrolyze to yield glucose units`, 
          `They contain peptide linkages`, 
          `They are not giant molecules`
        ],
        ans: "C",
      },
      {
        id: 10,
        question: `${formula("C",6,"H",12,"O",6)} -> 6${formula("C","s")} + 6${formula("H",2,"O")} <br />
        The role of ${formula("H",2,"SO",4)} in the above reaction is that of a`,
        options: [
          `strong acid`, 
          `dehydrating agent`, 
          `oxidizing agent`, 
          `catalyst`
        ],
        ans: "B",
      },
      {
        id: 11,
        question: `Which of the following is suitable for the hydrolysis of complex sugars at room temperature?`,
        options: [
          `reductants`, 
          `alkaline bases`, 
          `mineral acids`, 
          `enzymes`
        ],
        ans: "D",
      },
      {
        id: 12,
        question: `A sugar is charred when it is`,
        options: [
          `fermented`, 
          `dehydrated`, 
          `hydrolyzed`, 
          `esterified`
        ],
        ans: "B",
      },
      {
        id: 13,
        question: `Which of the following substances would give a positive reaction to Buiret's test?`,
        options: [
          `starch`, 
          `cellulose`, 
          `protein`, 
          `fat`
        ],
        ans: "C",
      },
      {
        id: 14,
        question: `The reaction between a protein and a mineral acid solution is`,
        options: [
          `fermentation`, 
          `polymerization`, 
          `addition`, 
          `hydrolysis`
        ],
        ans: "D",
      },
      {
        id: 15,
        question: `Which of the following reagents is not used for the identification of a protein?`,
        options: [
          `Tollen's reagent`, 
          `Million's reagent`, 
          `${formula("NaOH","aq")} and ${formula("CuSO",4,"aq")}`, 
          `conc. ${formula("HNO",3)}`
        ],
        ans: "A",
      },
      {
        id: 16,
        question: `A carbohydrate that needs to be hydrolyzed before it shows reducing property is`,
        options: [
          `glucose`, 
          `fructose`, 
          `maltose`, 
          `sucrose`
        ],
        ans: "D",
      },
      {
        id: 17,
        question: `E and F are two organic substances. If E became charred with conc. ${formula("H",2,"SO",4)} and F gave a red precipitate with Million's reagent, it can be inferred that`,
        options: [
          `E is a protein and F is a carbohydrate`, 
          `E is a carbohydrate and F is a protein`, 
          `E is an amino acid and F is a carbohydrate`, 
          `E is a fat and F is an amino acid`
        ],
        ans: "B",
      },
      {
        id: 18,
        question: `Which of the following is the monoatomic unit of protein molecules?`,
        options: [
          `hydrochloric acid`, 
          `ethanoic acid`, 
          `amino acid`, 
          `palmitic acid`
        ],
        ans: "C",
      },
      {
        id: 19,
        question: `Which of the following sugars is present in milk`,
        options: [
          `Glucose`, 
          `Lactose`, 
          `Fructose`, 
          `Sucrose`
        ],
        ans: "B",
      },
      {
        id: 20,
        question: `Large molecules are degraded into smaller molecules in`,
        options: [
          `hydrolysis of cellulose`, 
          `condensation of monosaccharides`, 
          `vulcanization of rubber`, 
          `esterification`
        ],
        ans: "A",
      },
      {
        id: 21,
        question: `Which of the following statements is false about enzymes? They`,
        options: [
          `alter the rate of biochemical reactions`, 
          `are specific in action`, 
          `remain unchanged chemically at the end of the reaction`, 
          `shift the equilibrium position in a reversible reaction`
        ],
        ans: "D",
      },
      {
        id: 22,
        question: `A carbohydrate that does not usually occur in the crystalline form is`,
        options: [
          `glucose`, 
          `maltose`, 
          `cellulose`, 
          `sucrose`
        ],
        ans: "C",
      },
      {
        id: 23,
        question: `The complete enzyme hydrolysis of starch yields`,
        options: [
          `dextrin`, 
          `glucose`, 
          `maltose`, 
          `fructose`
        ],
        ans: "B",
      },
      {
        id: 25,
        question: `A process that involves the decomposition of a sugar by enzymic action is`,
        options: [
          `fermentation`, 
          `dehydration`, 
          `polymerization`, 
          `saponification`
        ],
        ans: "A",
      },
      {
        id: 26,
        question: `Maltose and lactose are classified as carbohydrates because they`,
        options: [
          `are soluble in water`, 
          `become charred on dehydration`, 
          `provide instant energy`, 
          `conform to the general molecular C<sub>x</sub>H<sub>2y</sub>O<sub>y</sub>`
        ],
        ans: "D",
      },
      {
        id: 27,
        question: `Which of the following is not a gaint molecule?`,
        options: [
          `Protein`, 
          `Sucrose`, 
          `Starch`, 
          `Enzyme`
        ],
        ans: "B",
      },
      {
        id: 28,
        question: `Compound Z was boiled with dilute tetraoxosulphate(VI) acid for some time. The products were found to be amino acids <br />
        Compound Z was probably`,
        options: [
          `cellulose`, 
          `starch`, 
          `protein`, 
          `rubber`
        ],
        ans: "C",
      },
      {
        id: 29,
        question: `Compound Z was boiled with dilute tetraoxosulphate(VI) acid for some time. The products were found to be amino acids <br />
        What type of reaction was involved between compound Z and dilute ${formula("H",2,"SO",4)}`,
        options: [
          `Neutralization`, 
          `Esterification`, 
          `Condensation`, 
          `Hydrolysis`
        ],
        ans: "D",
      },
      {
        id: 30,
        question: `Compound Z was boiled with dilute tetraoxosulphate(VI) acid for some time. The products were found to be amino acids<br />
        Which of the following methods is most suitable for separating and dehydrating the amino acids formed between compound Z and dilute ${formula("H",2,"SO",4)}`,
        options: [
          `Neutralization`, 
          `Esterification`, 
          `Condensation`, 
          `Hydrolysis`
        ],
        ans: "B",
      },
    ]
  },

  {
    topic: "Other organic families",
    questions: [
      {
        id: 1,
        question: `Which of the following compounds is tertiary alkanol?`,
        options: [
          `${formula("CH",3)}-${formula("CH",2)}-${formula("CH",2)}-${formula("CH(OH)")}-${formula("CH",3)}`, 
          `${formula("CH",3)}-${formula("CH",2)}-${formula("CH",2)}-C(${formula("CH",3)})(OH)-${formula("CH",3)}`, 
          `${formula("CH",3)}-${formula("CH",2)}-${formula("CH",2)}-${formula("CH",2)}-${formula("CH",2)}-${formula("OH")}`, 
          `${formula("CH",3)}-CH(${formula("CH",3)})-${formula("CH",2)}-${formula("CH",2)}-${formula("OH")}`
        ],
        ans: "B",
      },
      {
        id: 2,
        question: `Ethanol is obtained from sugars by`,
        options: [
          `saponification`, 
          `dehydration`, 
          `esterification`, 
          `fermentation`
        ],
        ans: "D",
      },
      {
        id: 3,
        question: `The raw material for a large scale production of ethanol is`,
        options: [
          `starch`, 
          `ethane`, 
          `ethyne`, 
          `benzene`
        ],
        ans: "A",
      },
      {
        id: 4,
        question: `Which of the following compounds is the by-product of the fermentation of sugar to ethanol?`,
        options: [
          `propanol`, 
          `propane-1,2,3-triol`, 
          `carbon(IV) oxide`, 
          `carbon(II) oxide`
        ],
        ans: "C",
      },
      {
        id: 5,
        question: `A secondary alkanol is`,
        options: [
          `${formula("CH",2)}=CH-${formula("CH",2)}-OH`, 
          `${formula("CH",3)}-CH(OH)-${formula("CH",3)}`, 
          `${formula("CH",2)}(OH)-${formula("CH",2)}-OH`, 
          `${formula("CH",3)}-${formula("CH",2)}-${formula("CH",2)}-OH`
        ],
        ans: "B",
      },
      {
        id: 6,
        question: `Fermentation is the decomposition of`,
        options: [
          `sugar to non-sugar in the presence of yeast`, 
          `ethanol to sugar in the presence of yeast`, 
          `sugar to ethanol in the presence of yeast`, 
          `non-sugar to sugar in the presence of yeast`
        ],
        ans: "C",
      },
      {
        id: 7,
        question: `A dihydric alkanol is`,
        options: [
          `ethanol`, 
          `glycerol`, 
          `phenol`, 
          `glycol`
        ],
        ans: "D",
      },
      {
        id: 8,
        question: `The method used to separate ethanol from the mother liquor obtained in fermentation of simple sugars is`,
        options: [
          `fractional crystallization`, 
          `fractional distillation`, 
          `filtration`, 
          `centrifugation`
        ],
        ans: "B",
      },
      {
        id: 9,
        question: `${formula("CH",3)}-${formula("CH",2)}-C(${formula("CH",2,"CH",3)})(OH)-${formula("CH",2)}-${formula("CH",3)}<br />
        The type of alkanol shown above is`,
        options: [
          `primary alkanol`, 
          `secondary alkanol`, 
          `tertiary alkanol`, 
          `trihydric alkanol`
        ],
        ans: "C",
      },
      {
        id: 10,
        question: `The organic product of the reaction between propanoic acid and ethanol in the presence of an acid catalyst is`,
        options: [
          `propyl propanoate`, 
          `propyl ethanoate`, 
          `ethyl propanoate`, 
          `ethyl ethanoate`
        ],
        ans: "C",
      },
      {
        id: 11,
        question: `The product of the reaction between excess ethanol and conc. ${formula("H",2,"SO",4)} at 145&deg;C is`,
        options: [
          `ethene`, 
          `ethanoic acid`, 
          `diethyl tetraoxosulfate(VI)`, 
          `ethoxyethane`
        ],
        ans: "D",
      },
      {
        id: 12,
        question: `A secondary alkanol reacts with acidified ${formula("KMnO",4)} solution to form an`,
        options: [
          `alkanone`, 
          `alkanal`, 
          `alkanoic acid`, 
          `alkene`
        ],
        ans: "A",
      },
      {
        id: 13,
        question: `Dehydration of propan-1-ol produces`,
        options: [
          `propanoic acid`, 
          `propanal`, 
          `propene`, 
          `propane-1,2,3-triol`
        ],
        ans: "C",
      },
      {
        id: 14,
        question: `The gas evolved when alkanols react with sodium is`,
        options: [
          `oxygen`, 
          `carbon(IV) oxide`, 
          `nitrogen`, 
          `hydrogen`
        ],
        ans: "D",
      },
      {
        id: 15,
        question: `A drunkard's breath carries a significant level of ethanol. The color change observed when this breath is passed into acidified ${formula("K",2,"Cr",2,"O",7)} solution is`,
        options: [
          `orange to pink`, 
          `orange to purple`, 
          `orange to green`, 
          `orange to blue`
        ],
        ans: "C",
      },
      {
        id: 16,
        question: `The oxidatin of ${formula("CH",3)}-${formula("CH",2)}-CH(${formula("CH",2,"CH",3)})(OH) gives`,
        options: [
          `pentanal`, 
          `pentan-3-one`, 
          `pentan-2-one`, 
          `pentanoic acid`
        ],
        ans: "B",
      },
      {
        id: 17,
        question: `Complete oxidation of butan-1-ol gives`,
        options: [
          `butanal`, 
          `butanone`, 
          `butan-2-ol`, 
          `butanoic acid`
        ],
        ans: "D",
      },
      {
        id: 18,
        question: `Which of the following equations represents the reaction occuring in fresh palm wine?`,
        options: [
          `${formula("C",6,"H",12,"O",6)} -> 2${formula("C",2,"H",5,"OH")} + 2${formula("CO",2,"g")} [Catalyst: zymase]`, 
          `${formula("C",12,"H",22,"O",11)} + ${formula("H",2,"O")} -> 2${formula("C",6,"H",12,"O",6)} [Catalyst: maltase]`, 
          `${formula("C",2,"H",5,"OH")} -> ${formula("CH",2)}=${formula("CH",2)} + ${formula("H",2,"O")}`, 
          `2${formula("C",2,"H",5,"OH")} -> ${formula("C",2,"H",5)}-O-${formula("C",2,"H",5)} + ${formula("H",2,"O")}`
        ],
        ans: "A",
      },
      {
        id: 19,
        question: `The product of the reaction between propan-2-ol and hot sodium monoxoiodate(I) solution is`,
        options: [
          `propanal`, 
          `2-iodopropane`, 
          `triiodomethane`,
          `trichloromethane`
        ],
        ans: "C",
      },
      {
        id: 20,
        question: `2(${(formula("C",6,"H",10,"O",5))})<sub>n</sub> + n${formula("H",2,"O")} -> n${formula("C",12,"H",22,"O",11)} [Catalyst: diastase] <br />
        In this reaction, diastase is`,
        options: [
          `a catalyst`, 
          `a reducing agent`, 
          `an oxidizing agent`,
          `a dehydrating agent`
        ],
        ans: "A",
      },
      {
        id: 21,
        question: `A liquid that is neutral to litmus but gives a colorless gas with metallic sodium must be an`,
        options: [
          `alkene`, 
          `alkane`, 
          `alkanoate`,
          `alkanol`
        ],
        ans: "D",
      },
      {
        id: 22,
        question: `Why does palm-wine turn sour with time? This is because`,
        options: [
          `it is naturally adulterated by the sellers`, 
          `it is naturally acidic`, 
          `microbial activity results in the production of ethanoic acid within it`,
          `it is an acid anhydride`
        ],
        ans: "C",
      },
      {
        id: 23,
        question: `When sodium is added to propan-1-ol, the products are`,
        options: [
          `Sodium propoxide and water`, 
          `Sodium propoxide and hydrogen`, 
          `Sodium hydroxide and water`,
          `Sodium hydroxide and hydrogen`
        ],
        ans: "B",
      },
      {
        id: 24,
        question: `One of the products of combustion of ethanol in excess air is`,
        options: [
          `oxygen`, 
          `hydrogen`, 
          `carbon(IV) oxide`,
          `carbon`
        ],
        ans: "C",
      },
      {
        id: 25,
        question: `If a compound reacts with excess acidified ${formula("K",2,"Cr",2,"O",7)} to form an alkanoic acid, the compound is an`,
        options: [
          `alkene`, 
          `alkyne`, 
          `amine`,
          `alkanol`
        ],
        ans: "D",
      },
      {
        id: 26,
        question: `A compound that reacts readily with sodium to liberate hydrogen is`,
        options: [
          `${formula("CH",3,"COCH",2,"CH",3)}`, 
          `${formula("CH",3,"CH",2,"CH",2,"CH",3)}`, 
          `${formula("CH",3,"CH",2,"CH",2,"CHO")}`,
          `${formula("CH",3,"CH(OH)CH",2,"CH",3)}`
        ],
        ans: "D",
      },
      {
        id: 27,
        question: `A metal that reacts with alkanols to liberate hydrogen gas is`,
        options: [
          `iron`, 
          `potassium`, 
          `zinc`,
          `lead`
        ],
        ans: "B",
      },
      {
        id: 28,
        question: `Which of the following reagents can be used to differentiate alkanals from alkanones?`,
        options: [
          `Hydrogen cyanide`, 
          `Sodium hydrogentrioxosulfate(IV)`, 
          `Fehling's reagent`,
          `2,4-dinitriphenylhydrazine`
        ],
        ans: "C",
      },
      {
        id: 31,
        question: `An organic compound that undergoes reactions with both hydrogen cyanide and phenylhydrazine is an`,
        options: [
          `alkane`, 
          `alkyne`, 
          `alkanol`,
          `alkanal`
        ],
        ans: "D",
      },
      {
        id: 32,
        question: `The role played by conc. ${formula("H",2,"SO",4)} in the esterification of an alkanoic acid with an alkanol is that of a`,
        options: [
          `reducing agent`, 
          `dehydrating agent`, 
          `catalyst`,
          `solvent`
        ],
        ans: "C",
      },
      {
        id: 33,
        question: `Alkanoates are produced by the reaction of alkanols with`,
        options: [
          `alkanoic acids`, 
          `haloalkanes`, 
          `alkoxyalkanes`,
          `potassium`
        ],
        ans: "A",
      },
      {
        id: 34,
        question: `The products of the photochlorination of ethanoic acid are`,
        options: [
          `${formula("CH",3,"COOCl")} + HCl`, 
          `${formula("CH",3,"COCl")} + HOCl`, 
          `${formula("ClCH",2,"COCl")} + HCl`,
          `${formula("ClCH",2,"COOH")} + HCl`
        ],
        ans: "D",
      },
      {
        id: 35,
        question: `${formula("CH",3,"CH",2,"COOH")} + ${formula("CH",3,"CH",2,"OH")} -> G + H [Catalyst: conc ${formula("H",2,"SO",4)}]`,
        options: [
          `${formula("CH",3,"CH",2,"COCH",2,"CH",2,"CH",3)} and ${formula("H",2,"O",2)}`, 
          `${formula("CH",3,"COCH",2,"CH",2,"CH",3)} and ${formula("H",2,"O",2)}`,
          `${formula("CH",3,"CH",2,"COO","CH",2,"CH",3)} and ${formula("H",2,"O")}`, 
          `${formula("CH",3,"COO","CH",2,"CH",2,"CH",3)} and ${formula("H",2,"O")}` 
        ],
        ans: "C",
      },
      {
        id: 36,
        question: `A salt is formed when sodium hydroxide reacts with`,
        options: [
          `(${formula("CH",3)})<sub>2</sub>CHOH`,
          `(${formula("CH",3)})<sub>2</sub>CH-COOH`,
          `(${formula("CH",3)})<sub>2</sub>C=${formula("CH",2)}`,
          `${formula("C",12,"H",22,"O",11)}`,
        ],
        ans: "B",
      },
      {
        id: 37,
        question: `An alkanoic acid is`,
        options: [
          `${formula("CH",3,"CH",2,"CH",2,"OH")}`,
          `${formula("CH",3,"CH",2,"CHO")}`,
          `${formula("HCOOH")}`,
          `${formula("CH",3,"COCH",3)}`,
        ],
        ans: "C",
      },
      {
        id: 38,
        question: `Which of the following alkanols will not yield alkanoic acids on reacting with excess acidified ${formula("K",2,"Cr",2,"O",7)}?`,
        options: [
          `(${formula("CH",3)})<sub>3</sub>COH`,
          `(${formula("CH",3)})<sub>2</sub>CH${formula("CH",2,"OH")}`,
          `(${formula("CH",3)})<sub>3</sub>C${formula("CH",2,"OH")}`,
          `${formula("CH",3,"CH",2,"OH")}`
        ],
        ans: "A",
      },
      {
        id: 39,
        question: `The reaction that produces alkanoic acids is`,
        options: [
          `combustion of alkanes`,
          `hydration of alkynes`,
          `dehydration of alkanols`,
          `oxidation of alkanals`
        ],
        ans: "D",
      },
      {
        id: 40,
        question: `${formula("HCOOCH",2,"CH",3)} is produced by the reaction between`,
        options: [
          `methanol and ethanoic acid`,
          `ethanol and methanoic acid`,
          `ethanol and ethanoic acid`,
          `methanol and methanoic acid`
        ],
        ans: "B",
      },
      {
        id: 41,
        question: `Hardened oil can be made by`,
        options: [
          `heating the oil with a catalyst`,
          `heating the oil with an alkali and a catalyst`,
          `heating the oil with hydrogen and a catalyst`,
          `heating the oil alone`
        ],
        ans: "C",
      },
      {
        id: 42,
        question: `Fats and oils are`,
        options: [
          `substitution products of fatty acids and glycerol`,
          `addition products of fatty acids and glycerol`,
          `elimination products of fatty acids and glycerol`,
          `condensation products of fatty acids and glycerol`
        ],
        ans: "D",
      },
      {
        id: 43,
        question: `Which process is involved in the conversion of an oil into margarine`,
        options: [
          `Dehydration`,
          `Hydrogenation`,
          `Oxidation`,
          `Halogenation`
        ],
        ans: "B",
      },
      {
        id: 44,
        question: `The reaction between glycerol and three fatty acids is?`,
        options: [
          `saponification`,
          `hydrolysis`,
          `esterification`,
          `polymerization`
        ],
        ans: "C",
      },
      {
        id: 45,
        question: `The organic product obtained between the reaction of a glycerol and three fatty acids is?`,
        options: [
          `an alkanoate`,
          `an alkanol`,
          `a primary alkanol`,
          `an alkanone`
        ],
        ans: "A",
      },
      {
        id: 46,
        question: `The products of the alkaline hydrolysis of naturally occuring fats and oils are`,
        options: [
          `alkanoates`,
          `butter and glycerol`,
          `detergents and glycerol`,
          `soaps and glycerol`
        ],
        ans: "D",
      },
      {
        id: 47,
        question: `Which alkanol is obtained from the production of soap?`,
        options: [
          `methanol`,
          `ethanol`,
          `glycerol`,
          `glycol`
        ],
        ans: "C",
      },
      {
        id: 48,
        question: `The reaction that takes place when olive oil is heated with caustic potash to form foams is known as?`,
        options: [
          `esterification`,
          `saponification`,
          `neutralization`,
          `hydrolysis`
        ],
        ans: "B",
      },
      {
        id: 49,
        question: `The general formula of typical detergents is`,
        options: [
          `${ion("RCOO","-")}${ion("Na","+")}`,
          `RCOOH`,
          `${ion(formula("RSO",3),"-")}${ion("Na","+")}`,
          `ROH`
        ],
        ans: "C",
      },
      {
        id: 50,
        question: `Detergents are preferred to soap for washing in hard water because`,
        options: [
          `detergents form more lather than soap`,
          `detergents form soluble salts with hard water`,
          `soaps are more difficult to manufacture`,
          `detergents contain more additives than soap`
        ],
        ans: "B",
      },
      {
        id: 51,
        question: `Which of the following statement is FALSE of the complete hydrolysis of a triglyceride by potassium hydroxide?`,
        options: [
          `1 mole of glycerol is produced`,
          `3 moles of soap are formed`,
          `Conc. ${formula("H",2,"SO",4)} is necessary as a catalyst`,
          `3 moles of KOH are required for each mole of triglyceride`
        ],
        ans: "C",
      },
      {
        id: 52,
        question: `What is the role of sodium chloride in the manufacture of soap?`,
        options: [
          `To make the soap antiseptic`,
          `To separate the soap from glycerol`,
          `To react with glycerol`,
          `To decolorize the soap`
        ],
        ans: "B",
      },
      {
        id: 53,
        question: `The ash, used for making black soap, is a source of`,
        options: [
          `sodium ions`,
          `sodium chloride`,
          `glycerol`,
          `potassium ions`
        ],
        ans: "D",
      },
      {
        id: 54,
        question: `The compound formed when the two end alkyl groups of propyl ethanoate are interchanged is`,
        options: [
          `methyl propanoate`,
          `ethyl propanoate`,
          `methyl butanoate`,
          `ethyl butanoate`
        ],
        ans: "C",
      },
      {
        id: 55,
        question: `A product of the hydrolysis of propyl ethanoate with aqueous potassium hydroxide is`,
        options: [
          `ethanoic acid`,
          `potassium ethanoate`,
          `propanoic acid`,
          `potassium propanoate`
        ],
        ans: "B",
      },
      {
        id: 56,
        question: `The compounds used widely in the manufacture of flavors and perfumes are`,
        options: [
          `alkanoates`,
          `alkanones`,
          `sugars`,
          `alkenes`
        ],
        ans: "A",
      },
      {
        id: 57,
        question: `What are the products of the reaction between ethyl ethanoate and ammonia?`,
        options: [
          `Aminoethane and ethanol`,
          `Aminomethane and propan-1-ol`,
          `Ethanamide and ethanol`,
          `Methanamide and propan-1-ol`
        ],
        ans: "C",
      },
      {
        id: 58,
        question: `A tertiary amine is`,
        options: [
          `N- methylaminoethane`,
          `N,N-dimethylaminoethane`,
          `aminoethane`,
          `N-ethylaminoethane`
        ],
        ans: "B",
      },
    ]
  },

  {
    topic: "Hydrocarbons",
    questions: [
      {
        id: 1,
        question: `A hydrocarbon which contains the maximum number of hydrogen atoms for every carbon atom is said to be`,
        options: [
          `aliphatic`,
          `aromatic`,
          `saturated`,
          `unsaturated`
        ],
        ans: "C",
      },
      {
        id: 2,
        question: `Which of the following is unsaturated?`,
        options: [
          `Hexane`,
          `Benzene`,
          `2-methylpentane`,
          `Cyclohexane`
        ],
        ans: "B",
      },
      {
        id: 3,
        question: `The following are hydrocarbons except`,
        options: [
          `pentane`,
          `pent-1-ene`,
          `pent-1-yne`,
          `pentan-1-ol`
        ],
        ans: "D",
      },
      {
        id: 4,
        question: `C<sub>x</sub>H<sub>y</sub> + 5${formula("O",2)} -> 3${formula("CO",2)} + 4${formula("H",2,"O")}<br /> In the reaction above C<sub>x</sub>H<sub>y</sub> is`,
        options: [
          `an alkyne`,
          `an alkene`,
          `an alkane`,
          `aromatic`
        ],
        ans: "C",
      },
      {
        id: 5,
        question: `One mole of a hydrocarbon contains 8g of hydrogen. If the relative molecular mass is 92, the hydrocarbon is [C = 12, H = 1]`,
        options: [
          `aromatic`,
          `an alkane`,
          `an alkene`,
          `an alkyne`
        ],
        ans: "A",
      },
      {
        id: 6,
        question: `Which of the following hydrocarbons burns in air with a sooty flame?`,
        options: [
          `${formula("C",3,"H",8)}`,
          `${formula("C",4,"H",10)}`,
          `${formula("C",5,"H",12)}`,
          `${formula("C",6,"H",6)}`
        ],
        ans: "D",
      },
      {
        id: 7,
        question: `2C<sub>x</sub>H<sub>y</sub> + 11${formula("O",2)} -> 8${formula("CO",2)} + 6${formula("H",2,"O")} <br />
        In hydrocarbon, C<sub>x</sub>H<sub>y</sub>, in the reaction above is:`,
        options: [
          `cyclobutane`,
          `butyne`,
          `butene`,
          `butane`
        ],
        ans: "B",
      },
      {
        id: 8,
        question: `In which of the following methods can alkenes be prepared?`,
        options: [
          `Heating the ammonium salt of an alkanoic acid`,
          `Heating a haloalkane with alcoholic KOH solution`,
          `Heating the sodium salt of an alkanoic acid with sodalime`,
          `Heating an alkanol with excess conc. ${formula("H",2,"SO",4)}`
        ],
        ans: "C",
      },
      {
        id: 9,
        question: `Heating of sodalime with ${formula("CH",3,"CH",2,"CH",2,"COONa")} produces`,
        options: [
          `Propane`,
          `Butane`,
          `Pentane`,
          `Hexane`
        ],
        ans: "A",
      },
      {
        id: 10,
        question: `The reaction between alkanes and the halogens is`,
        options: [
          `Polymerization`,
          `Oxidation`,
          `Addition`,
          `Substitution`
        ],
        ans: "D",
      },
      {
        id: 11,
        question: `The combustion of methane is represented by the stoichiometric equation: <br />
        ${formula("CH",4)} + 2${formula("O",2)} -> ${formula("CO",2)} + 2${formula("H",2,"O")}<br />
        What amount of oxygen will be required for the complete combustion of 5 mole of methane?`,
        options: [
          `10 mole`,
          `5 mole`,
          `3 mole`,
          `1 mole`
        ],
        ans: "A",
      },
      {
        id: 12,
        question: `Which of the following reactions can be used to distinguish aliphatic from aromatic hydrocarbons?`,
        options: [
          `Action of bromine water`,
          `Action of heat`,
          `Action of ammoniacal copper(I) chloride`,
          `Treatment with conc. ${formula("H",2,"SO",4)}`
        ],
        ans: "B",
      },
      {
        id: 13,
        question: `Which of the following statements is true about alkanes?`,
        options: [
          `They are all liquids`,
          `Their general molecular formula is C<sub>n</sub>H<sub>2n</sub>`,
          `They are hydrocarbons`,
          `They are very reactive compounds`
        ],
        ans: "C",
      },
      {
        id: 14,
        question: `Which of the following compounds is not a product of the action of chlorine on methane in sunlight?`,
        options: [
          `${formula("CCl",4)}`,
          `${formula("CHCl",3)}`,
          `${formula("CH",3,"CH",3,"Cl")}`,
          `${formula("CH",3,"Cl")}`
        ],
        ans: "C",
      },
      {
        id: 15,
        question: `Most of the fatal explosions in coal mines are caused by`,
        options: [
          `Ethane`,
          `Ethene`,
          `Ethyne`,
          `Methane`
        ],
        ans: "D",
      },
      {
        id: 16,
        question: `The type of reaction that takes place between propene and a halogen is`,
        options: [
          `substitution`,
          `addition`,
          `elimination`,
          `polymerization`
        ],
        ans: "B",
      },
      {
        id: 17,
        question: `The product of the reaction between ethene and chlorine is`,
        options: [
          `1,2-dichloroethane`,
          `1,1-dichloroethane`,
          `1,2-dichloroethane`,
          `1,1-dichloroethane`
        ],
        ans: "A",
      },
      {
        id: 18,
        question: `${formula("CH",3,"CH",2,"CH",2,"OH")} -> ${formula("CH",3,"CH")}=${formula("CH",2)} + ${formula("H",2,"0")} <br /> The reagent that can be used to carry out the conversion above is`,
        options: [
          `ammoniacal silver trioxonitrate(V)`,
          `hydrogen in the presence of nickel`,
          `hot, concentrated ${formula("H",2,"SO",4)}`,
          `alcoholic KOH`
        ],
        ans: "C",
      },
      {
        id: 19,
        question: `Petroleum fractions produce ethene by`,
        options: [
          `reforming`,
          `cracking`,
          `distillation`,
          `polymerization`
        ],
        ans: "B",
      },
      {
        id: 20,
        question: `The reaction of but-1-ene with bromine gives`,
        options: [
          `1,1-dibromobutane`,
          `1,2-dibromobutane`,
          `2,2-dibromobutane`,
          `3,4-dibromobutane`
        ],
        ans: "B",
      },
      {
        id: 21,
        question: `Consider the reaction: <br />
        ${formula("CH",3,"CH",2,"CH")}=${formula("CH",2)} -> ${formula("CH",3,"CH",2,"CH(OH)","CH",2,"OH")} <br />
        The reagent used for this conversion is`,
        options: [
          `aqueous ${formula("NH",3)}`,
          `aqueous NaOH`,
          `dil. ${formula("H",2,"SO",4)}`,
          `acidified ${formula("KMnO",4)}`
        ],
        ans: "D",
      },
      {
        id: 22,
        question: `Propene undergoes mainly addition reactions because it is`,
        options: [
          `A covalent compound`,
          `A hydrocarbon`,
          `Unsaturated`,
          `A gas`
        ],
        ans: "C",
      },
      {
        id: 23,
        question: `The compound used as "antifreeze" in car radiators in cold regions of the world is`,
        options: [
          `ethanol`,
          `ethane-1,2-diol`,
          `ethanal`,
          `propane-1,2-diol`
        ],
        ans: "B",
      },
      {
        id: 24,
        question: `Catalytic hydrogenation of alkenes produces`,
        options: [
          `arenes`,
          `alkanes`,
          `alkynes`,
          `alkanals`
        ],
        ans: "B",
      },
      {
        id: 25,
        question: `How many moles of oxygen are required to burn one mole of ${formula("C",5,"H",10)} completely?`,
        options: [
          `7.5`,
          `7.0`,
          `6.5`,
          `6.0`
        ],
        ans: "A",
      },
      {
        id: 28,
        question: `The monomeric unit of the natural rubber is`,
        options: [
          `Butane`,
          `Buta-1,3-diene`,
          `2-Methylbuta-1,3-diene`,
          `ethene`
        ],
        ans: "C",
      },
      {
        id: 29,
        question: `One of the important uses of polyvinyl chloride (PVC) is the production of`,
        options: [
          `Books`,
          `Pipes`,
          `Pencils`,
          `Ink`
        ],
        ans: "B",
      },
      {
        id: 30,
        question: `The role of sulfur in vulcanization of rubber is to`,
        options: [
          `act as a catalyst`,
          `break down rubber polymer`,
          `increase the length of polymeric chain or rubber`,
          `bind parallel long rubber chains together`
        ],
        ans: "D",
      },
      {
        id: 31,
        question: `The purpose of sulphur in vulcanization of rubber is mainly to make it`,
        options: [
          `darker`,
          `softer`,
          `tougher`,
          `more attractive`
        ],
        ans: "C",
      },
      {
        id: 32,
        question: `The plastic material which cannot be softened by heat is said to be`,
        options: [
          `Biodegradable`,
          `Ductile`,
          `Thermoset`,
          `Thermoplastic`
        ],
        ans: "C",
      },
      {
        id: 33,
        question: `The quality of natural rubber is improved by heating it with`,
        options: [
          `nickel catalyst`,
          `chlorine`,
          `hydrogen`,
          `sulfur`
        ],
        ans: "D",
      },
      {
        id: 34,
        question: `A constituent of the flame used by welders in cutting metals is`,
        options: [
          `ethane`,
          `ethene`,
          `ethyne`,
          `propene`
        ],
        ans: "C",
      },
      {
        id: 35,
        question: `Uncontrolled hydrogenation of ethyne yields`,
        options: [
          `ethane`,
          `ethene`,
          `propane`,
          `benzene`
        ],
        ans: "A",
      },
      {
        id: 36,
        question: `A compound that can give a precipitate on treatment with an aqueous ammoniacal solution of copper(I) chloride is`,
        options: [
          `${formula("CH",3,"C")}&#8801;C${formula("CH",3)}`,
          `${formula("HC")}&#8801;C-${formula("CH",2,"CH",3)}`,
          `${formula("CH",3,"CH")}=${formula("CHCH",3)}`,
          `${formula("H",2,"C")}=${formula("CH")}-${formula("CH",2,"CH",3)}`
        ],
        ans: "B",
      },
      {
        id: 37,
        question: `When a lump of calcium carbide is dropped into water in a container and the gas produced is passed through a jet and then ignited, the flame produced is called an`,
        options: [
          `oxymethane flame`,
          `oxyethane flame`,
          `oxyethene flame`,
          `oxyethyne flame`
        ],
        ans: "D",
      },
      {
        id: 38,
        question: `Consider the compound:<br />
        ${formula("CH",3)}-${formula("CH",2)}-CH=${formula("CH",2)}-C&#8801;CH<br />
        An acidic hydrogen is attached to carbon number<br />
        HINT: Number from the end with triple bond`,
        options: [
          `1`,
          `3`,
          `5`,
          `7`
        ],
        ans: "A",
      },
      {
        id: 40,
        question: `What mass of bromine will be required to completely react with 2.7g of but-1-yne?<br />
        [C = 12, H = 1, Br = 80]`,
        options: [
          `20g`,
          `16g`,
          `12g`,
          `8g`
        ],
        ans: "B",
      },
      {
        id: 41,
        question: `A compound that reacts with sodium metal as well as ammoniacal silver or copper(I) salt is`,
        options: [
          `${formula("CH",3,"CH",2,"CH0,3")}`,
          `${formula("CH",3,"CH")}=${formula("CH",2)}`,
          `${formula("CH",3,"C")}&#8801;C${formula("CH",3)}`,
          `${formula("CH",3,"C")}&#8801;CH`
        ],
        ans: "D",
      },
      {
        id: 42,
        question: `The final product of the reaction of propyne with hydrogen bromide is`,
        options: [
          `${formula("CH",3)}-C(Br)=${formula("CH",2)}`,
          `${formula("CH",3)}-C(Br)<sub>2</sub>${formula("CH",3)}`,
          `${formula("CH",3,"CH",2,"CH")}(Br)<sub></sub>`,
          `${formula("CH",3,"CH(Br)","CH",2,"Br")}`
        ],
        ans: "B",
      },
      {
        id: 43,
        question: `The laboratory preparation of ethyne involves the action of water on`,
        options: [
          `calcium hydride`,
          `calcium oxide`,
          `calcium carbide`,
          `sand`
        ],
        ans: "C",
      },
      {
        id: 44,
        question: `The reaction involved in the decolorization of bromine vapor by ethyne is`,
        options: [
          `Polymerization`,
          `Elimination`,
          `Substitution`,
          `Addition`
        ],
        ans: "D",
      },
      {
        id: 45,
        question: `A brown precipitate is given when ammoniacal copper(I) chloride is treated with`,
        options: [
          `HC&#8801;C${formula("CH",2,"CH",3)}`,
          `${formula("H",2,"C")}=CH${formula("CH",2,"CH",3)}`,
          `${formula("CH",3,"CH")}=CHOH`,
          `${formula("CH",3)}-${formula("CH",2)}-CHO`
        ],
        ans: "A",
      },
      {
        id: 46,
        question: `The reaction between ethyne and ammoniacal copper(I) chloride is`,
        options: [
          `Addition`,
          `Substitution`,
          `Elimination`,
          `Polymerization`
        ],
        ans: "B",
      },
      {
        id: 47,
        question: `The reaction between pent-2-yne and bromine is`,
        options: [
          `A substitution reaction`,
          `A reduction reaction`,
          `An addition reaction`,
          `An elimination reaction`
        ],
        ans: "C",
      },
      {
        id: 48,
        question: `What mass of bromine will saturate 3.3g of pent-3-ene-1-yne? [C = 12, H = 1, Br = 80]`,
        options: [
          `24.0g`,
          `32.0g`,
          `40.0g`,
          `48.0g`
        ],
        ans: "A",
      },
      {
        id: 49,
        question: `Waste plastic materials pollute the environment because they are`,
        options: [
          `inflammable`,
          `water-insoluble`,
          `non-biodegradable and thus accumulate in the soil`,
          `are not active`
        ],
        ans: "C",
      },
      {
        id: 51,
        question: `The polymerization product of ethyne is`,
        options: [
          `cyclohexane`,
          `cyclohexene`,
          `cyclohex-1,3-diene`,
          `benzene`
        ],
        ans: "D",
        // already solved, D is the answer
      },
      {
        id: 52,
        question: `Hexane and benzene can both`,
        options: [
          `undergo addition reactions`,
          `undergo substitution reactions`,
          `undergo elimination reaction`,
          `decolorize bromine water`
        ],
        ans: "B",
      },
      {
        id: 54,
        question: `An unsaturated compound is`,
        options: [
          `2-chloroethane`,
          `toluene`,
          `2-chloropentane`,
          `2,2-dimethylpropane`
        ],
        ans: "B",
      },
      {
        id: 53,
        question: `An aromatic compound is`,
        options: [
          `${formula("C",6,"H","Br")}`,
          `${formula("C",6,"H",13,"OH")}`,
          `${formula("C",6,"H",5,"Cl")}`,
          `${formula("C",6,"H",14)}`
        ],
        ans: "C",
      },
      {
        id: 55,
        question: `What is the product of the catalytic hydrogenation of benzene?`,
        options: [
          `Hexane`,
          `Hexene`,
          `Cyclohexane`,
          `Cyclohexane`
        ],
        ans: "D",
      },
      {
        id: 56,
        question: `An elimination reaction occurs when 1-chloropropane is converted to`,
        options: [
          `propene`,
          `propan-1-ol`,
          `2-chloropropanone`,
          `propanoic acid`
        ],
        ans: "A",
      },
      {
        id: 57,
        question: `Why is cracking process very important in the petroleum industry? It yields more?`,
        options: [
          `engine fuels`,
          `bitumen`,
          `fuel oil`,
          `paraffin wax`
        ],
        ans: "A",
      },
      {
        id: 58,
        question: `The quality of petrol as an engine fuel improves with an increase in the amount of`,
        options: [
          `straight chain alkanes`,
          `straight chain alkenes`,
          `branched chain alkanes`,
          `branched chain alkenes`
        ],
        ans: "C",
      },
      {
        id: 59,
        question: `The performance of a fuel is the same as that of a mixture of 60g of 2,2,4-trimethylpentane and 40g of heptane. What is the octane number of the fuel`,
        options: [
          `100`,
          `60`,
          `20`,
          `40`
        ],
        ans: "B",
      },
      {
        id: 60,
        question: `Why is it not desirable to use lead(IV) tetraethyl as anti-knock additive for petrol`,
        options: [
          `it is explosive`,
          `it lowers the octane rating of petrol`,
          `it produces air pollutants which are expelled from automobiles exhausts`,
          `it is very expensive`
        ],
        ans: "C",
      },
      {
        id: 61,
        question: `An alkane in the production industry which is undesirable because it is prone to knocking is`,
        options: [
          `octane`,
          `2,2,4-trimethylpentane`,
          `2,2,4-trimethlyheptane`,
          `heptane`
        ],
        ans: "D",
      },
      {
        id: 62,
        question: `Which of the following methods is used to separate crude-oil into its components`,
        options: [
          `Catalytic cracking`,
          `Catalytic reforming`,
          `Fractional distillation`,
          `Column chromatography`
        ],
        ans: "C",
      },
      {
        id: 63,
        question: `The main constituents of petrol are`,
        options: [
          `alkanoic acids`,
          `hydrocarbons`,
          `alkanols`,
          `polymers`
        ],
        ans: "B",
      },
      {
        id: 64,
        question: `More petrol is obtained from long chain hydrocarbons by the process known as`,
        options: [
          `Cracking`,
          `Distillation`,
          `Reduction`,
          `Oxidation`
        ],
        ans: "A",
      },
      {
        id: 65,
        question: `Which of the fraction of crude-oil is used as jet fuel?`,
        options: [
          `Ligroin`,
          `Petroleum gas`,
          `Gasoline`,
          `Kerosene`
        ],
        ans: "D",
      },
      {
        id: 66,
        question: `The compound used as a gaseous fuel is`,
        options: [
          `${formula("CH",3,"CH",2,"C")}&#8801;CH`,
          `${formula("CH",3,"C(Br)",2,"CH",2,"CH",3)}`,
          `${formula("CH",3,"CH",2,"CH",2,"CH",3)}`,
          `${formula("CH",3,"CH",2,"CH",2,"CH",2,"OH")}`
        ],
        ans: "C",
      },
      {
        id: 67,
        question: `The hydrocarbon ${formula("C",14,"H",30)} is likely to be a constituent of the fraction of crude-oil called`,
        options: [
          `Petroleum gas`,
          `Ligroin`,
          `Petrol`,
          `Gas oil`
        ],
        ans: "D",
      },
      {
        id: 68,
        question: `Why is carbon often deposited in the exhaust-pipe of cars`,
        options: [
          `Presence of carbon in petrol`,
          `Incomplete combustion of petrol`,
          `Presence of additives in petrol`,
          `Complete combustion of petrol`
        ],
        ans: "B",
      },
    ]
  }

  // splitting the organic chemistry up is the only to ensure that everyone do a lot of O.C.
];

// if it's not working rn, I will have to read sth else... shey u understand...
// I will have to read and not type...

//
// this is a wonderful project... lol. I am serious

// the general test thing is not choosing at runtime, it's just going to choose randomly before it starts. You know, given an arbitrary number of topics, select 40 random questions before starting...
// makes sense...
export { chemistryQuestions };

// What does this mean for me?
// it's got to translate to something meaningful for me you know...

function Heat(type, compound) {
  return `&Delta;H&deg;<sub>${type}</sub>(${compound})`;
}

// console.log(chemistryQuestions.reduce((a,b) => a + b.questions.length, 0))
// 921 questions. wow... makes sense....
