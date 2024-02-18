const { A, B, C, D, E, c } = { A: "A", B: "B", C: "C", D: "D", E: "E", c: "C" }; // should work perfectly

// I will be editing the biology questions, making necessary research to the questions, and essentially becoming more cool. Lolz.. All these things are just cause and effect stuff. Reading the textbook can be quite boring. But making research will be fun instead. Thank you so much.

let biologyQuestions = [
    // biology questions under review... thank you. one by one...
  {
    topic: "The Cell Structure And Functions Of Cell Components",
    questions: [
      {
        id: 1,
        question:
          "Which of the following is characteristic of the animal cell?",
        options: [
          "presence of chloroplasts",
          "Possession of a cellulose cell wall",
          "Absence of large vacuoles",
          "Presence of large vacuoles",
          "Presence of chromosomes",
        ],
        ans: C,
        remark:
          "Animal and plant cells have vacoules but the vacoule of animal cells are is small, unlike the vacoules of plant cells which is large.",
      },
      {
        id: 2,
        question: "The vacuole of a plant cell is:",
        options: [
          "A large empty space",
          "Smaller than that of an animal cell",
          "Filled with air",
          "An ordinary vacuum",
          "Surrounded by a membrane",
        ],
        ans: E,
        remark:
          "The vacoule of a plant cell is surrounded by a membrane called <strong>Tonoplast</strong>",
      },
      {
        id: 3,
        question:
          "The part of the cell solely responsible for respiration is the:",
        options: [
          "Nucleus",
          "Nucleolus",
          "Mitochondria",
          "Golgi apparatus",
          "Endoplasmic reticulum",
        ],
        ans: C,
        remark:
          "Mitochodria is the power house of the cell which is responsible for respiration => the breakdown of glucose to give energy in form of ATP",
      },
      {
        id: 4,
        question:
          "Which of these combinations is common to plant and animal cells?",
        options: [
          "Centriole, middle lamella, Golgi bodies, mitochondrion",
          "Cytoplasm, sap vacuole, starch grains, leucoplasts",
          "Plasma membranes, chromosome, mitochondria, lysosomes",
          "Nucleus, nucleolus, cellulose cell wall, endoplasmic reticulum",
          "Cytoplasm, centriole, cell wall, nucleolus",
        ],
        ans: C,
        remark:
          "Only animal cells possess centriole, and only plant cells possess chloroplast, sap vacoule, and cell wall.",
      },
      {
        id: 5,
        question: "Where is energy produced in a cell?",
        options: [
          "Nucleus",
          "Nucleolus",
          "Lysosomes",
          "Chloroplast",
          "Mitochondria",
        ],
        ans: E,
        remark: "mitochondria is always associated with energy production",
      },
      {
        id: 6,
        question:
          "Which of the following cell constituents is NOT common to both plants and animals?",
        options: [
          "Mitochondria",
          "Chloroplasts",
          "Ribosomes",
          "Golgi apparatus",
          "Vacuoles",
        ],
        ans: B,
        remark:
          "Only plant cells contains chloroplasts. Animal cells cannot photosynthesize.",
      },
      {
        id: 7,
        question: "The function of endoplasmic reticulum is:",
        options: [
          "Protein synthesis",
          "Intracellular transport of materials",
          "Digestion and destruction of foreign bodies",
          "Production of energy from glucose",
        ],
        ans: B,
        // remark: ""
      },
      {
        id: 8,
        question:
          "The oxidative part of the respiration process takes place in the:",
        options: [
          "Mitochondria",
          "Ribosomes",
          "endoplasmic reticulum",
          "Golgi bodies",
        ],
        ans: A,
        remark:
          "the oxidaive part of respiration takes place in the mitochondrion",
      },
      {
        id: 9,
        question: "The function of ribosomes in cells is:",
        options: [
          "Protein synthesis",
          "Starch synthesis",
          "Transport of materials",
          "Lipid storage",
        ],
        ans: A,
        remark:
          "ribosomes, dispersed in the cytoplasm of the cell, helps synthesize proteins. In another word, they are protein-manufacturing engines.",
      },
      {
        id: 10,
        question:
          "Which of the following structures is common to Euglena, white blood cell, and Amoeba?",
        options: ["Vacuole", "Cell wall", "Cilla", "Cell membrane"],
        ans: D,
        remark: "All have cell membrane.",
      },
      // this is an image problem
      // {
      //     id:11,
      //     question: "Which of the labelled parts of the cell contains ribonucleic acid?",
      //     options: ["'1", '2', "3", "5"],
      //     ans: null,
      // },
      {
        id: 12,
        question: "The organelle involved in tissue respiration is the:",
        options: [
          "Endoplasmic reticulum",
          "Ribosome",
          "Golgi body",
          "Mitochondrion",
        ],
        ans: D,
        remark: "respiration always involve mitochondria",
      },
      {
        id: 13,
        question:
          "Which of the following organelles are likely to be present in cells that are actively respiring and photosynthesizing?",
        options: [
          "Mitochondria and chloroplast",
          "Lysosomes and ribosomes",
          "Nucleolus and centrioles",
          "Golgi apparatus and endoplasmic reticulum",
        ],
        ans: A,
        remark: "respiring => mitochondria, photosynthesizing => chloroplast",
      },
      {
        id: 14,
        question:
          "The membrane surrounding the vacuole in a plant cell is called the:",
        options: [
          "Plasmalemma",
          "Tonoplast",
          "Nuclear membrane",
          "Endoplasmic reticulum",
        ],
        ans: B,
        remark: "tonoplast",
      },
      {
        id: 15,
        question:
          "The nucleus is considered the control organelle of a cell because it:",
        options: [
          "Contains the genetic material",
          "Contains the nuclear sap",
          "Is bounded by the nuclear membrane",
          "Is located at the centre of the cell ",
        ],
        ans: A,
        remark:
          "the DNA is the blueprint of the future of an organism. DNA is transcribed into mRNA, which goes to ribosome to make proteins, and proteins (enzymes) directs and speed up biological activities. And note, the DNA is found in the nucleus.",
      },
      {
        id: 16,
        question:
          "The structure that is most commonly identified in all living cells under the light microscope is the:",
        options: ["Mitochondrion", "Chloropplast", "Nucleus", "Ribosome"],
        ans: C,
        remark: "the nucleus is quite conspicuous",
      },
      // TO ASK CHATGPT
      {
        id: 17,
        question: "In plant cells, the chloroplasts are located:",
        options: [
          "Inside the cell wall",
          "Outside the protoplasm",
          "Within the vacuole",
          "Within the cytoplasm",
        ],
        ans: D,
        remark: "chloroplasts reside in the cytoplasm of a cell.",
      },
      {
        id: 18,
        question: "The structures found only in plant cells are:",
        options: [
          "Cell membrane and crytoplasms",
          "Chromatin and nucleolus",
          "Cell wall and chloroplast",
          "Cell membrabne and lysosome",
        ],
        ans: C,
      },
      {
        id: 19,
        question: "The organelle common to both plant and animal cell is the:",
        options: ["Centriole", "Plasmalemma", "Cell wall", "Chloroplast"],
        ans: B,
      },
      {
        id: 20,
        question:
          "Which of the following is likely to have a higher concentration of mitochondria?",
        options: [
          "Sperm cell",
          "Egg cell",
          "Red blood cell",
          "White blood cell",
        ],
        ans: A,
      },
      {
        id: 21,
        question: "The role of the Golgi complex in an eukaryotic cell is to:",
        options: [
          "Conduction in and out of the cell",
          "Transport genetic material out of the cell",
          "provide attachment for ribosonmal granules",
          "Transport organic materiaL in and out of the cell",
        ],
        ans: D,
      },
      // the reason I go for cell wall is that I don't think onions have chloroplasts
      {
        id: 22,
        question:
          "The cell of an onion bulb can be differentiated from a check cell by the presence of:",
        options: ["Plasmalemma", "Chloroplast", "Cell wall", "Nucleus"],
        ans: C,
      },
      // this one is kind of straight forward...
      // sleeping at home is not possible anymore...
      // we stay at raph till God knows when
      {
        id: 23,
        question: "In a cell, the genes are carried:",
        options: [
          "Nuclear membranes",
          "Chromatin threads",
          "Lysosomes",
          "Mitochondria",
        ],
        ans: B,
      },
      {
        // needs some research here
        id: 24,
        question: "Which of the following characterizes a mature plant cell?",
        options: [
          "The nucleus is pushed to the centre of the cell",
          "The cell wall is made up of the cellulose",
          "The nucleus is small and irregular in shape",
          "The cytoplasm fill up the entire cell space",
        ],
        ans: D,
      },
      {
        id: 25,
        question:
          "Which of the following is NOT a function of the nucleus of a cell?",
        options: [
          "It translates genetic information for the manufacture of proteins",
          "It stores and carries hereditary information",
          "It is a reservoir of energy for the cell",
          "It controls the life process of the cell",
        ],
        ans: C,
      },
      {
        id: 26,
        question:
          "The organelles present in the cells that are actively respiring and photosythesizing are:",
        options: [
          "Golgi appararatus and endolplasmic reticulum",
          "Nucleus and centrioles",
          "Mitochondria and chloroplast",
          "Lysosomes and ribosomes",
        ],
        ans: C,
      },
      {
        id: 27,
        question:
          "The part of the cell solely responsible for respiraton is the:",
        options: ["Nucleus", "Nucleolus", "Mitochondria", "Golgi apparatus"],
        ans: C,
      },
      {
        // cytoplasm is the answer here...
        id: 28,
        question: "The enzymes of the glycolytic pathways are located in the:",
        options: ["Mitochondria", "Gastric juice", "Plasma", "Cytoplasm"],
        ans: D,
      },
      {
        id: 29,
        question:
          "Which of the following does a virus have in common with animal cells?",
        options: ["Nucleus", "DNA", "Glycogen", "Cytoplasm"],
        ans: B,
      },
      {
        id: 30,
        question:
          "The hereditary characters in plants and animals are located on the:",
        options: ["Gene", "Nucleus", "Chromosomes", "Cell"],
        ans: C,
      },
      {
        id: 31,
        question:
          "The component of the cell that determines paternity resides in the:",
        options: ["Centrosome", "Ribosome", "Nucleus", "Mitochondria"],
        ans: C,
      },
      {
        id: 32,
        question: "The part of the cell where respiration occurs is the:",
        options: ["Mitochondria", "Ribsome", "Gogi body", "Lysosome"],
        ans: A,
        remark: "mito...",
      },
      {
        id: 33,
        question:
          "One of the following contains digestive enzymes in the cell:",
        options: ["Endoplasmic reticulum", "Nucleus", "Lysosome", "Centrosome"],
        ans: C,
        remark:
          "The lysosome is the organelle that helps destroy enemies in the cell. It kill by digesting them with its digestive enzyme.",
      },
      {
        id: 34,
        question:
          "One of the basic differences between a plant and animal cell is?",
        options: [
          "Possession of chloroplast in plant, none in animal cell",
          "Presence of nuclear membrane in animal cell only",
          "Presence of cell wall in animal, none in plant",
          "Possession of nuclear membrane in plant cell only",
        ],
        ans: A,
        remark:
          "Chloroplast only exists in plant cell. Can you photosynthesize?",
      },
      {
        id: 35,
        question:
          "The organelle decribed as the powerhouse of the cell is the:",
        options: ["Mitochondria", "Golgi body", "Vacuole", "Nucleolus"],
        ans: A,
        remark:
          "the mitochondria is the power house of the cell. It is the location where energy is produced.",
      },
      {
        id: 36,
        question: "The importance of cellular respiration is to:",
        options: [
          "Produce NADH",
          "Eliminate carbon (IV) Oxide",
          "Produce ATP",
          "Eliminate glucose",
        ],
        ans: C,
        remark: "produce atp(energy)",
      },
      // red blood cells don't have nucleus
      {
        id: 37,
        question: "Which of the following doesn't have a nucleus?",
        options: ["Leukocyte", "Erythrocytes", "Plasma", "Platelet"],
        ans: B,
        remark: "a mature red blood cell(a.k.a. erythrocyte) lacks a nucleus",
      },
    ],
  },
// will work on this tmrw...
  {
    topic: "Living Organisms And Level Of Organisation",
    questions: [
      {
        id: "tjfdj4",
        question: "All living organisms",
        options: ["Photosynthesize", "Respire", "Move", "Feed", "Transpire"],
        ans: B,
      },
      {
        id: "fdoijri",
        question: "A group of similar cells performing the same function is",
        options: [
          "An organ",
          "A system",
          "Tissue",
          "An organelle",
          "An enzyme",
        ],

        ans: C,
      },
      {
        id: "dfortofgopd",
        question: "A tissue can best be defined as",
        options: [
          "An aggregate of similar cells",
          "Aggregate of cells performing a similar function",
          "An aggregate of similar cells performing the same function",
          "A mixture of different cell types performing the same function",
        ],

        ans: C,
      },
      {
        id: "fgotriodf",
        question: "Which of the following is an organ?",
        options: ["Guard cell", "Liver", "Xylem bundle", "Blood"],

        ans: B,
      },
      {
        id: "jfjrtoi",
        question:
          "Which of the following organism does not exist as a single free living cell?",
        options: ["Paramecium", "Volvox", "Amoeba", "Chlamydomonas"],
        ans: B,
      },
      {
        id: "fdronbnoinwnefonwenf",
        question: "An Amoeba and an unlaid chicken eggs are:",
        options: ["Animal tissues", "Organelles", "Single cell", "Organisms"],
        ans: C,
      },
      {
        id: "saione4inndsvio34",
        question: "The rods in the retina of the eyes are examples of",
        options: ["Cells", "Tissues", "Organs", "Systems"],
        ans: A,
      },
      {
        id: "dskmekl12",
        question:
          "A characteristic that can possibly be shared by both living and non-living organisms is",
        options: [
          "Locomotion",
          "Irritability",
          "Increase in biomass",
          "Increase in size",
        ],
        ans: D,
      },
      {
        id: "dfnerv ",
        question: "A characteristic exhibited by all living organisms is",
        options: [
          "Sexual reproduction",
          "Aeroic respiration",
          "The ability to move from one place o another",
          "The ability to remove unwanted substances",
        ],
        ans: D,
      },
      {
        id: "kdfklmre",
        question: "What is the level of organization of an onion bulb?",
        options: ["Tissue", "Organ", "Systemic", "Organismal"],
        ans: B,
      },
      {
        id: 11,
        question: "The lowest level of organization in living organisms is",
        options: ["Tissue", "Organ", "Cell", "System"],
        ans: C,
      },
      {
        id: "fmdonr",
        question:
          "Which of the following is the most complex according to their cellular level of organization? ",
        options: ["Heart", "Hair", "Euglena", "Hydra"],
        ans: A,
      },
      {
        id: "12345",
        question: "Which of the following organisms is multicelllular? ",
        options: ["Chlamydomonas", "Spirogyra", "Amoeba", "Euglena"],
        ans: B,
      },
      {
        id: "dsvnergnofd ",
        question: "Which of the following organ level of organisation?",
        options: [
          "Volvox sp",
          "Paramecium candatum",
          "Hydra viridis",
          "Onion bulb",
        ],
        ans: D,
      },
      {
        id: "kdlnvnr ",
        question: "Which of the following is an organ?",
        options: ["Guard cell", "Liver", "Xylem bundle", "Blood"],
        ans: B,
      },
      {
        id: "dsoverkfmbf",
        question: "The cell of a bacterium is described as",
        options: ["Unicellular", "Eukaryotic", "Prokaryotic", "Multicellular"],
        ans: C,
      },
      {
        id: "sdnf",
        question: "The most primitive among these is?",
        options: ["Fern", "Flowering plants", "Fungus", "Cones"],
        ans: D,
      },
      {
        id: "dnsns",
        question: "At which level of organization is mammalia heart?",
        options: ["Tissue", "Organ", "Cell", "System"],
        ans: B,
      },
    ],
  },
//   done and dusted
  {
    topic: "The Cell And Its Environment",
    questions: [
      {
        id: 1,
        question:
          "A spirogyra cell was placed in a solution X and after 1 minute the cell had been plasmolysed, solution X was",
        options: [
          "Tap water",
          "A very strong sugar solution",
          "A weak sugar solution",
          "A very weak salt solution",
          "Distilled water",
        ],
        ans: B,
        remark: `<p>If a Spirogyra cell becomes plasmolyzed after being placed in a solution X within just 1 minute, we can infer that solution X is hypertonic to the cell's cytoplasm. Plasmolysis occurs when a cell loses water due to being placed in a hypertonic solution, causing the cytoplasm to shrink away from the cell wall. Therefore, solution X must have a higher solute concentration than the cell's cytoplasm.</p>
        <p>The hypertonic solution X would have a higher concentration of solutes compared to the cytoplasm of the Spirogyra cell. This could be due to the presence of salts or other dissolved substances in solution X, which create an osmotic gradient that causes water to move out of the cell, leading to plasmolysis.</p>`
      },
      {
        id: 2,
        question: "The movement of molecules from a region of higher concentration to a region of lower concentration is",
        options: [
          "Diffusion",
          "Transpiration",
          "Osmosis",
          "Translocation",
          "Plasmolysis",
        ],
        ans: A,
        remark: `<p><strong>The movement of molecules from a region of higher concentration to a region of lower concentration is called "diffusion."</strong> This process occurs spontaneously and is driven by the random motion of molecules. In diffusion, molecules move down their concentration gradient, meaning they move from areas of higher concentration to areas of lower concentration until equilibrium is reached and there is no net movement of molecules. Diffusion is a fundamental process in various biological, chemical, and physical systems and plays a crucial role in processes such as gas exchange in the lungs, nutrient absorption in cells, and the mixing of substances in solutions.</p>`
      },
      {
        id: 3,
        question:
          "A fresh kolanut weighing 1g was put into salt solution. After 3 hours, the kolanut weighed 1.2g. This simple experiment demonstrate that",
        options: [
          "The salt solution is more concentrated than the cell sap of the kolanut",
          "The cell sap of the kolanut is more concentrated than the salt soluion",
          "The salt solution has the same concentration as the cell sap of the Kolanut",
          "Kolanut cells can multiply in water",
          "The kolanut lost some water molecules to the salt solution",
        ],
        ans: B,
        remark: `<p>
        If the kolanut gained weight from 1 gram to 1.2 grams after being immersed in the salt solution for 3 hours, then the solution surrounding the kolanut must be hypotonic</p>
        <p>In a hypotonic solution, the concentration of solutes is lower outside the kolanut compared to inside. Therefore, water moves from the solution into the kolanut by osmosis, resulting in the kolanut gaining weight as it absorbs water from the surrounding solution.</p>
        <p>This experiment demonstrates osmosis, with water moving from a region of lower solute concentration (the solution) to a region of higher solute concentration (the kolanut).</p>`
      },
      {
        id: 4,
        question:
          "The filaments of Spirogyra were put into equal volume of sugar solution X and Y. After 5 minutes, filaments from X solution had their cell contents rounded up while those from Y were unaffected. The experiment shows that",
        options: [
          "Solution X was stronger than Y",
          "Solution Y was stronger than X",
          "Spirogyra used up the sugar in solution X",
          "Solution X is good for stimulating sexual reproduction in Spirogyra",
          "Solution Y was less contaminated than X",
        ],
        ans: A,
      },
      {
        id: 5,
        question:
          "If an isolated living cell is left in distilled water for two hours, it is likely to",
        options: [
          "Lose some of its water to surrounding water",
          "Lose all of its water to the surrounding water",
          "Reproduce by binary fission",
          "cytolysis may occur",
        ],
        remark: `<p>If an isolated living cell is left in distilled water for two hours, it is likely to swell and potentially burst. This is because distilled water is hypotonic compared to the cell's cytoplasm, meaning it has a lower concentration of solutes.</p>
        <p>In a hypotonic solution, water moves into the cell through osmosis, from the area of lower solute concentration (the surrounding distilled water) to the area of higher solute concentration (the cell's cytoplasm). As a result, the cell gains water, causing it to swell. If the swelling continues beyond the cell's capacity to expand, it may eventually burst, a process known as <strong>cytolysis</strong>.</p>
        <p>Therefore, leaving an isolated living cell in distilled water for an extended period of time can lead to swelling and potential bursting of the cell.</p>`,
        ans: D,
      },
      {
        id: 6,
        question:
          "Which of the following will NOT allow osmosis to take place?",
        options: [
          "Pig's bladder",
          "Cellophane",
          "Transparent polythene",
          "Cow's bladder",
        ],
        ans: C,
        remark: `<p>Osmosis occurs through semi-permeable membranes, which allow the passage of solvent molecules (usually water) while restricting the passage of solute molecules. Let's analyze each option:</p>
        <ol>
        <li>Pig's bladder: This can allow osmosis to take place if it is a semi-permeable membrane</li>
        <li>Cellophane: Cellophane is a semi-permeable membrane and would allow osmosis.</li>
        <li>Transparent polythene: Polythene is typically impermeable to water and solutes, so it would not allow osmosis.</li>
        <li>Cow's bladder: If the cow's bladder is intact and acts as a semi-permeable membrane, it could allow osmosis.</li>
        </ol>`
      },
      {
        id: 7,
        question: "Osmosis can be defined as the movement of",
        options: [
          "molecules from solution of high concentration to low concentration",
          "Molecules from solution of low concentration",
          "Water across a semi-permeablle membrane from solution of low concentration to high concentration",
          "Water across a semi-permeable membrane from solution of high concentration to low concentration",
        ],
        ans: C,
        remark: "Osmosis is the spontaneous movement of solvent molecules through a semi-permeable membrane from a region of lower solute concentration to a region of higher solute concentration, in order to equalize the solute concentrations on both sides of the membrane. This process continues until equilibrium is reached, where there is an equal concentration of solute on both sides of the membrane, and there is no net movement of solvent molecules. Osmosis is a fundamental process in biology and plays a crucial role in various physiological processes, such as the movement of water in plant cells, kidney function, and maintaining fluid balance in organisms."
      },
      {
        id: 8,
        question:
          "When a Spirogyra cell is immersed in a salt solution more concentrated than its cell sap, it",
        options: [
          "Remains unchanged",
          "Takes up water and bust",
          "Absorbs a litle water",
          "Loses water and shrivel", // normal thing... because 
          "Becomes turgid",
        ],
        remark: `<p>When a Spirogyra cell is immersed in a salt solution more concentrated than its cell sap (hypertonic solution), the following changes may occur:</p>
        <ol>
        <li><strong>Water Loss:</strong> Water will tend to move out of the Spirogyra cell due to osmosis, moving from an area of <em>lower solute concentration</em> (inside the cell) to an area of <em>higher solute concentration</em> (outside the cell). This can cause the cell to lose water and shrink in size.</li>
        <li><strong>Plasmolysis:</strong> As water leaves the cell, the protoplasm and cytoplasmic membrane may shrink away from the cell wall, a process known as plasmolysis. This results in the cytoplasm pulling away from the cell wall, which can affect the cell's shape and structural integrity.</li>
        <li><strong>Reduced Turgor Pressure:</strong> Turgor pressure, the pressure exerted by the cell contents against the cell wall, decreases as water leaves the cell. This can lead to wilting or flaccidity of the Spirogyra cell.</li>
        <li><strong>Potential Damage:</strong> Prolonged exposure to hypertonic solutions can potentially damage the cell membrane and other cellular structures due to dehydration and loss of turgor pressure.</li>
        </ol>`,
        ans: D,
      },
      {
        id: 9,
        question: "Minerals salt can be absorbed into the roots by",
        options: [
          "Osmosis only",
          "Osmosis and diffusion",
          "Diffusion and active transport", // makes sense
          "Diffusion only",
        ],
        remark: `<p>
        Mineral salts can be absorbed into the roots of plants through a process called "root uptake" or "root absorption." This process involves several mechanisms:</p>
        <ol>
        <li><strong>Passive Diffusion:</strong> Some mineral ions can move across the root cell membranes passively, driven by concentration gradients. This is especially true for ions like potassium and nitrate.</li>
        <li><strong>Active Transport:</strong> Many mineral ions are absorbed against their concentration gradient through active transport mechanisms, requiring the expenditure of energy (usually in the form of ATP). This allows the plant to accumulate essential ions even when their concentration in the soil solution is low. Examples of ions absorbed through active transport include calcium, magnesium, and iron.</li>
        <li><strong>Facilitated Diffusion:</strong> Some ions may require carrier proteins to assist in their movement across the root cell membranes. This process, known as facilitated diffusion, still relies on concentration gradients but is aided by specific proteins.</li>
        </ol>
        <p>Overall, the root uptake of mineral salts is crucial for the growth, development, and overall health of plants, providing them with essential nutrients necessary for various physiological processes.</p>`,
        ans: C,
      },
      {
        id: 10,
        question:
          "The process by which a red blood cell placed in distilled water absorbs until it bursts and released its contents into the surroundings is know as",
        options: ["Osmosis", "Plasmolysis", "Turgidity", "Haemolysis"],
        remark: `<p>Hemolysis, also spelled haemolysis, refers to the rupture or destruction of red blood cells (erythrocytes), leading to the release of hemoglobin into the surrounding fluid. This can occur due to various factors such as osmotic stress, exposure to toxins or chemicals, immune-mediated destruction, or physical trauma. Hemolysis can result in the release of cellular contents, including hemoglobin, potassium, and other intracellular components, into the bloodstream or surrounding tissue. It is an important phenomenon to consider in medical diagnostics, as abnormal levels of hemolysis can indicate underlying health conditions or affect the accuracy of laboratory tests.</p>
        <p>Compare and contrast <strong>cytolysis</strong> and <strong>hemolysis</strong></p>`,
        ans: D,
      },
      {
        id: 11,
        question:
          "Salts and water are absorbed in the roots and transported to the leaves by",
        options: [
          "Diffusion through the xylem tissues",
          "Osmosis through the phloem tissues",
          "Diffusion through the phloem issues",
          "Osmosis through the xylem tissues",
        ],
        remark: `Salts and water are absorbed in the roots and transported to the leaves primarily through the xylem tissues through osmosis`,
        ans: D,
      },
      {
        id: 12,
        question:
          "When a marine fish was taken from the ocean and put in a tank of fresh water, it died after a short period because",
        options: [
          "The tank was too small compared to the large ocean", // funny
          "The body cells of fish swelled and bust as a result of hypotonic fresh water",
          "The body cells of fish shrank as their sap was hypertonic to the fresh water",
        ],
        remark: `<p>When a marine fish is placed in a tank of fresh water, it can die due to a condition known as "osmotic shock" or "osmotic stress". The reason for this is as follows:</p>
        <ol>
        <li><strong>Difference in Osmotic Pressure:</strong> Marine fish live in a hypertonic environment, meaning the concentration of salts (solute) in the ocean water is higher than the concentration of salts inside their bodies (cytoplasm). On the other hand, fresh water is hypotonic, with a lower concentration of salts compared to the fish's body fluids.</li>
        <li><strong>Water Movement:</strong> Due to the difference in osmotic pressure, water moves into the fish's body through osmosis. In other words, water rushes into the fish's cells to try to equalize the concentration of salts between the fish's body and the surrounding fresh water.</li>
        <li><strong>Cell Swelling and Damage:</strong> The influx of water into the fish's cells causes them to swell. While some swelling is tolerable, excessive swelling can lead to cellular damage, particularly in sensitive tissues such as the gills and internal organs.</li>
        <li><strong>Disruption of Physiological Processes:</strong> The osmotic imbalance can disrupt important physiological processes such as ion regulation, kidney function, and gas exchange. This disruption can ultimately lead to organ failure and death.</li>
        </ol>
        <p>In summary, when a marine fish is placed in fresh water, the osmotic stress caused by the influx of water into its cells can lead to cellular damage, organ failure, and ultimately death</p>`,
        ans: B,
      },
      {
        id: 13,
        question:
          "What will happen when two equal sized pieces of unripe pawpaw labelled X and Y are dropped into equal volumes of concentrated salt solution and distilled water respectively?",
        options: [
          "Pawpaw X will become turgid",
          "Both will increase in size",
          "Pawpaw Y will become turgid",
          "Both will decrease in size",
        ],
        remark: `<p>When two equal-sized pieces of unripe pawpaw, labeled X and Y, are dropped into equal volumes of concentrated salt solution and distilled water respectively, the following is likely to happen:</p>
        <ol>
        <li>
        <p>Piece X in concentrated salt solution(Hypertonic):</p>
        <ul>
        <li>The concentrated salt solution is hypertonic compared to the cells of the unripe pawpaw.</li>
        <li>Water will move out of the cells of piece X through osmosis, from an area of lower solute concentration (inside the cells) to an area of higher solute concentration (the salt solution).</li>
        <li>As a result, piece X will lose water and may shrink or become dehydrated.</li>
        </ul>
        </li>
        <li>
        <p>Piece Y in distilled water(Hypotonic):</p>
        <ul>
        <li>Distilled water is hypotonic compared to the cells of the unripe pawpaw.</li>
        <li>Water will move into the cells of piece Y through osmosis, from an area of higher solute concentration (the distilled water) to an area of lower solute concentration (inside the cells).</li>
        <li>As a result, piece Y will gain water and may swell or become turgid.</li>
        </ul>
        </li>
        </ol>
        <p>In summary, piece X in the concentrated salt solution will likely lose water and shrink, while piece Y in distilled water will likely gain water and swell. This demonstrates the principles of osmosis, where water moves across a semi-permeable membrane from a region of lower solute concentration to a region of higher solute concentration.</p>`,
        ans: C,
      },
      {
        id: 14,
        question:
          "A marine protozoan is likely to have no contractile vacuole mainly because the cytoplasm is",
        options: [
          "Isotonic to sea water",
          "Hypotonic to sea water",
          "Impervious to sea water",
        ],
        ans: A,
        remark: `<p>A marine protozoan is likely to have no contractile vacoule mainly because the cytoplasm is isotonic or hypertonic to the surrounding seawater.</p>
        <p>Contractile vacuoles are specialized structures found in many freshwater protozoa and some lower plants, responsible for regulating the water content and osmotic balance within the cell by expelling excess water. In freshwater environments, where the surrounding water is hypotonic compared to the cell's cytoplasm, water tends to move into the cell through osmosis, causing it to swell. Contractile vacuoles help maintain the cell's internal osmotic balance by collecting and expelling excess water.</p>
        <p>However, in marine environments, such as seawater, the concentration of solutes (such as salts) is typically higher than that of the cytoplasm of marine protozoa. Therefore, water tends to move out of the cell into the surrounding seawater, reducing the risk of cytoplasmic swelling or bursting due to osmotic influx. Consequently, marine protozoa living in isotonic or hypertonic environments may not require contractile vacuoles for osmoregulation, as the surrounding seawater helps maintain their internal osmotic balance.</p>`
      },
      {
        id: 15,
        question: "Which of the following can cause shrinkage of living cells?",
        options: [
          "Deionized water",
          "Hypertonic solution",
          "Hypotonic solution",
          "Isotonic solution",
        ],
        remark: "Hypertonic solution will cause shrinkage to a living cell because it has higher solute concentration than the cell, hence, water flows from the cell to the solution leading to shrinkage.",
        ans: B,
      },
      {
        id: 16,
        question:
          "When a cell is placed in solution and the size of the cell increases, the concentration of solution is said to be",
        options: ["Isotonic", "Dilute", "Hypotonic", "Hypertonic"],
        remark: `<p>When a cell is placed in a solution and its size increases, it indicates that the solution is hypotonic.</p>
        <p>In a hypotonic solution, the concentration of solutes outside the cell is lower than the concentration of solutes inside the cell. As a result, water moves into the cell through osmosis, causing the cell to swell and potentially leading to bursting if the cell cannot accommodate the influx of water.
        </p>
        <p>Therefore, an increase in the size of the cell when placed in a solution suggests that the solution has a lower concentration of solutes compared to the cytoplasm of the cell, making it hypotonic.</p>`,
        ans: C,
      },
      {
        id: 17,
        question:
          "A red blood cell placed in distilled water undergoes haemolysis because of",
        options: ["Exosmosis", "Endo-osmosis", "Diffusion", "Capillarity"],
        ans: B,
        remark:`<p>Haemolysis occurs because of endo-osmosis which refers to the movement of solvent molecules (usually water) from an external solution or environment into the interior of a cell or a structure through osmosis .</p>`
      },
    ],
  },

  {
    topic: "Evolution Among Viruses Monera, Protista And Fungi",
    questions: [
      {
        id: 1,
        question: "Euglena may be classified as a plant because it",
        options: [
          "Has chloroplast",
          "Has a gullet",
          "Lives in a pond",
          "Possesses a flagellum",
          "Has a pellicle",
        ],
        ans: A,
      },
      {
        id: 2,
        question:
          "Rhizopus (or mucor) obtains its food from dead organic matter extracellularly. It is said to be",
        options: [
          "A faculatative parasite",
          "A saprophyte",
          "An obligate parasite",
          "A commensal",
          "An autotroph",
        ],
        ans: B,
      },
      {
        id: 3,
        question:
          "Which one of the following options is not true for Mucor or Rhizopus?",
        options: [
          "Grows on moist dead organic matter",
          "Is a plant",
          "Has cellulose cell wall",
          "Reproduces asexually by producing spore",
        ],
        ans: C,
      },
      {
        id: 4,
        question:
          "Which of the following statements is not true of paramecium?",
        options: [
          "It is slipper-shaped",
          "The anterior end is blunt",
          "The gullet is lined with cilia",
          "It has an anal pore",
          "Its food vacuole is not stationary",
        ],
        ans: C,
      },
      {
        id: 5,
        question: "One of the following statements is not true of viruses",
        options: [
          "They are microrganisms",
          "They are smaller than bacteria",
          "They can be seen with an ordinary light microscope",
          "They cause obacco disease",
        ],
        ans: C,
      },
      {
        id: 6,
        question:
          "In Nucor or Rhizopus carbohydrate is absorbed in the form of",
        options: ["Starch", "Sucrose", "Glucose", "Glycogen", "Arabinose"],
        ans: C,
      },
      {
        id: 7,
        question: "In rhizopus, carbohydrate is stored in the form of",
        options: ["Glucose", "Paramylum", "Glycogen", "Starch", "Oil"],
        ans: C,
      },
      {
        id: 8,
        question:
          "In which of the following groups of animals are flagella and cilia found?",
        options: [
          "Flatworms",
          "Annelids",
          "Coelenterates",
          "Protozoa",
          "Nematodes",
        ],
        ans: D,
      },
      {
        id: 9,
        question: "Which of the following is NOT true of Mucor? It",
        options: [
          "Contains chlorophyll",
          "Grows saprophytically",
          "Bears spores in sporangium",
          "Consists of hyphae",
          "Reproduces by conjugation",
        ],
        ans: A,
      },
      {
        id: 10,
        question: "Viruses are regarded as non-living because they",
        options: [
          "Can neither reproduce asexually not sexually",
          "Cannot survive in their respective environments",
          "Do not possess characteristics that can be transmited from one generation to the next",
          "Can neither respire nor",
        ],
        ans: D,
      },
      {
        id: 11,
        question:
          "Which of the following features of Euglena is found only in animals?",
        options: ["Paramylon granules", "Flagellum", "Pellicle", "Pyrenoid"],
        ans: C,
      },
      {
        id: 12,
        question: "The hypha of Rhizopus is said to be coenocytic because it",
        options: [
          "Does not contain chlorophyll",
          "Has no cross wall",
          "Is vacuolated",
          "Stores oil globules",
        ],
        ans: B,
      },
      {
        id: 13,
        question:
          "Spirogyra, Euglena and chlamydomonas share many characeristic EXCEPT",
        options: ["Nutrition", "Reproduction", "Mobility", "Irritability"],
        ans: C,
      },
      {
        id: 14,
        question: "What is the function of trichocyst in paramecium?",
        options: ["Movement", "Defence", "Excretion", "Reproduction"],
        ans: B,
      },
      {
        id: 15,
        question: "When a virus is placed in a non-living medium it",
        options: [
          "Becomes dehydrated",
          "Forms spores",
          "Form flagella",
          "Becomes crystallized",
        ],
        ans: D,
      },
      {
        id: 16,
        question:
          "A multinucleate body without internal cell boundaries is characteristic of",
        options: ["Bryophytes", "Fungi", "Algae", "Gymnosperms"],
        ans: B,
      },
      {
        id: 17,
        question: "Viruses are considered to be living organisms because they",
        options: [
          "Possess tranmittable characters",
          "Move from one place to another",
          "Respond to one stimulation",
          "Ingest food materials",
        ],
        ans: A,
      },
      {
        id: 18,
        question:
          "Which of the following characteristics is common to Amoeba and paramecium?",
        options: ["Oral groove", "Trichocyst", "Contractile vacuole", "Cilia"],
        ans: C,
      },
      {
        id: 19,
        question: "Which of the following are non-green plants?",
        options: ["Euglena", "Fungi", "Spirogyra", "Angiosperms"],
        ans: C,
      },
      {
        id: 20,
        question:
          "One of the features which adapts paramecium to its environment is the possession of",
        options: ["A regular shape", "Two nuclei", "Cilia", "A pellicle"],
        ans: C,
      },
      {
        id: 21,
        question:
          "In which of the following organisms does a single cell prforms all the functions of movement, nutrition, growth, excretion and photosynthesis?",
        options: ["Paramecium", "Euglena", "Amoeba", "Spirogyra"],
        ans: B,
      },
      {
        id: 22,
        question: "The spores of mucor are dispersed by",
        options: ["Water", "Wind", "Insects", "Explosive mechanism"],
        ans: B,
      },
      {
        id: 23,
        question: "Members of the phylum protozoa use the contractile vacuole",
        options: [
          "To remove excess food",
          "For movement",
          "To remove excess water",
        ],
        ans: D,
      },
      {
        id: 24,
        question:
          "Which of the followin is TRUE of the process of conjugation in paramecium?",
        options: [
          "Miao-nucleus disintegrates",
          "Each ex-conjugant divides only once",
          "Each micronucleus divides twice",
        ],
        ans: D,
      },
      {
        id: 25,
        question: "Virus differ from all forms of life because they",
        options: [
          "Have a thick cell wall",
          "Feed on waste products of other organisms cause infectious diseases",
          "Require other living cells to multiply",
        ],
        ans: D,
      },
      {
        id: 26,
        question: "The procaryotic cell type is characterized by a",
        options: [
          "Complex cytoplasm which different regions are poorly defined",
          "Localization of differ regions of the cell into tissue",
          "Collection of organelles and macromolecular complexes",
          "Simple cytoplasm with welldefined region",
        ],
        ans: A,
      },
      {
        id: 27,
        question: "The most recently evolved structure in animals is the",
        options: ["Hair", "Cillium", "Scale", "Feather"],
        ans: A,
      },
      {
        id: 28,
        question:
          "The order in which organic evolution as progressed in plants is",
        options: [
          "Thallophyta, Schizophyta",
          "Schizophyta, Thallophyta, Bryophyta, Periodophya and Spermatophyta",
          "Ptridophyta, Spermatophyta, Thallophyta, Schizophyta and Bryophyta",
          "Bryophyta, pteridophyta, Spermatophyta, Thallophyta and schizophyta",
        ],
        ans: B,
      },
      {
        id: 29,
        question: "Which of the following groups is the most advanced?",
        options: ["Pteridophytes", "Bryophytes", "Thallophytes", "Gymnosperms"],
        ans: D,
      },
      {
        id: 30,
        question: "The animals that move by means of flagella include",
        options: [
          "Chlamydomonas and Euglena",
          "Planaria and Amoeba",
          "Amoeba and hydra",
          "Paramecium and planaria",
        ],
        ans: A,
      },
      {
        id: 31,
        question:
          "The umbrella-shape fruiting body of a fully developed mushroom is the",
        options: ["Pileus", "Mycelium", "Basidium", "Stipe"],
        ans: A,
      },
      {
        id: 32,
        question:
          "The similarity among organisms belonging to the same group will be least within each",
        options: ["Family", "Order", "Kingdom", "Species"],
        ans: C,
      },
      {
        id: 33,
        question:
          "The cell component that is present in prokaryotic cell is the",
        options: [
          "Chloroplast",
          "Ribosome",
          "Mitochondrion",
          "Nuclear envelop",
        ],
        ans: B,
      },
      {
        id: 34,
        question: "A plant-like feature in Euglena is the",
        options: ["Pellicle", "Pigment spot", "Large spot", "Gullet"],
        ans: B,
      },
      {
        id: 35,
        question:
          "The most common charateristics of the fungal hyphae is the possession of",
        options: [
          "Cell-like compartments with one nucleus each",
          "Cell walls that are both rigid and chitinous",
          "A multicellular mycelium in the subtrate",
          "Cell-like partitions formed by cross-walls",
        ],
        ans: B,
      },
      {
        id: 36,
        question: "The hyphal wall of fungi is rigid owing to the presece of",
        options: ["Cell wall", "lignin", "Cellulose", "Chitin"],
        ans: D,
      },
      {
        id: 37,
        question: "the chromosomes of members of the kingdom Monera within the",
        options: ["Nucleoplasm", "Cytoplasm", "Nucleus", "Nucleolus"],
        ans: B,
      },
      {
        id: 38,
        question:
          "In terms of the number of individuals, which of the following taxa is most inclusive?",
        options: ["Order", "Family", "Class", "Species"],
        ans: C,
      },
      {
        id: 39,
        question: "A blue green alga is not a protopythte because",
        options: [
          "It is aquatic",
          "Its cells are prokaryotic",
          "It cannot move",
          "It is not a green plant",
        ],
        ans: B,
      },
      {
        id: 40,
        question:
          "Which of the following is the groups of cells is devoid of true nuclei?",
        options: ["Algae", "Monera", "Fungi", "Genus"],
        ans: B,
      },
      {
        id: 41,
        question:
          "The fungi are a distinct group of eukaryotes mainly because they have",
        options: [
          "Spores",
          "No chlorophyll",
          "Many fruiting bodies",
          "Sexual and sexual reproduction",
        ],
        ans: C,
      },
      {
        id: 42,
        question: "The organ which is sensitive to light in Euglena is",
        options: ["Flagellum", "Chloroplast", "Eyespot", "Gullet"],
        ans: C,
      },
      {
        id: 43,
        question: "Which of the following is the simplest living organism?",
        options: ["Virus", "Amoeba", "Chlamydromonas", "Pramecium"],
        ans: A,
      },
      {
        id: 44,
        question: "Fungi are referred to as heterotrophs because they",
        options: [
          "Lack chlorophyll",
          "Have mycelium",
          "Lack roots",
          "Are filamentous",
        ],
        ans: A,
      },
      {
        id: 45,
        question: "In Mucor or Rhizopus, carbohydrate is absorbed in form of",
        options: ["Starch", "Sucrose", "Glucose", "Glycogen"],
        ans: C,
      },
      {
        id: 46,
        question:
          "The ype asexual reprodution that is common to boh paramecium and protist is",
        options: ["Fragmentation", "Budding", "Sporulaion", "fission"],
        ans: D,
      },
      {
        id: 47,
        question: "The simplest form of reproduction is",
        options: [
          "Conjugation",
          "Budding",
          "Spore formation",
          "Binary fission",
        ],
        ans: D,
      },
      {
        id: 48,
        question: "What is the function of trichocyst in paramecium?",
        options: ["Movement", "Defence", "Excretion", "Resproduction"],
        ans: B,
      },
      {
        id: 49,
        question: "An organism which exhibits extra-cellular digestion is",
        options: ["Spirogyra", "Paramecium", "Amoeba", "Rhizopus"],
        ans: D,
      },
      {
        id: 50,
        question: "The shape of a Bacillus is",
        options: ["Cocci", "Vibrio", "Rod", "Spirochetes"],
        ans: C,
      },
      {
        id: 51,
        question:
          "The type of reproduction that is common to both hydra and yeast is",
        options: ["Grafting", "Budding", "Conjugation", "Binary fission"],
        ans: B,
      },
      {
        id: 52,
        question: "Blue-green algea belongs to what kingdom?",
        options: ["Plantae", "Fungi", "Moneran", "Protista"],
        ans: C,
      },
      {
        id: 53,
        question: "The soil type that has highest capillarity is",
        options: ["Clay", "Loam", "Humus", "Sand"],
        ans: B,
      },
    ],
  },

  {
    topic: "Evolution among plants",
    questions: [
      {
        id: 1,
        question:
          "The following events take place during conjugation in spirogyra 1. The protoplasm in each of the conjugating cells separated from the call wall to form a gamete; the gamate of one filament passes through the conjugation tube to meet the gamete of the other filament 2. The zygote soon become surrounded by a thick brown wall to become zygospore which Bursts after a short rest and germinates to produce a new filament 3. The nucei of the gametes fuse to form a zygote 4. The protuberances meet and where they touch the cell-wall disappears so that a conjugation tube joining the two cells is formed 5. Protuberances appear on the walls of cells of two filaments of anoher. Now, what is the correct sequence in which the above events occur?",
        options: [
          "1,2,3,4,5",
          "1,2,4,5,3",
          "3,4,5,2,1",
          "5,4,1,3,2,",
          "5,4,3,1,2",
        ],
        ans: D,
      },
      {
        id: 2,
        question: "One of the following statements is NOT true of spirogyra",
        options: [
          "It is a simple multicellular plant",
          "During conjugation, its gametes, which are structurally and physiologically similar, fuse to form zygote",
          "It possesses spiral chloroplast which enables the plant to photosynthesize",
          "Its cells are protected externally by a layer of mucilage",
          "There are pyrenoids along the chloroplast",
        ],
        ans: B,
      },
      {
        id: 3,
        question:
          "One of the common feature of the fungi, algae, mosses and ferns is that they",
        options: [
          "Are photosynthetic",
          "Show alternation of generation",
          "Reproduce by means of conjugation",
          "Can survive dry conditionns",
          "Have no seeds",
        ],
        ans: E,
      },
      {
        id: 4,
        question:
          "Which of the following represents the evolutionary sequence in these plants? 1. Flowering plants 2. Ferns, 3. Mosses, 4. Algae, 5. Conifers",
        options: [
          "2->1->4->3->5",
          "5->4->3->2->1",
          "2->4->5->1->3",
          "3->2->4->5->1",
          "4->3->2->5->1",
        ],
        ans: E,
      },
      {
        id: 5,
        question:
          "Mosses, liverworts and ferns can be grouped together because they",
        options: [
          "Are all aquatic plants",
          "All growing deserts",
          "Are seedless plants",
          "Have undifferentiated plants bodies",
          "All produce colourless flowers",
        ],
        ans: C,
      },
      {
        id: 6,
        question:
          "Spirogyra and Mucor can be grouped together as Thallophyta because",
        options: [
          "They are unicellular organism",
          "Their spores could be dispersed by wind",
          "They are capable of living independent lives",
          "They reproduce sexually only",
          "Their bodies are made up of thallus and filaments alternatively",
        ],
        ans: E,
      },
      {
        id: 7,
        question:
          "Which of the following is INCORRECT the prothallus of a fern",
        options: [
          "Is a flattened heart-shape suture",
          "Is green because its cells contain chloroplasts",
          "The dominat plant",
          "Bears the sexual organs",
          "Is attached to the ground by numerous rhizoids",
        ],
        ans: C,
      },
      {
        id: 8,
        question: "In spirogyra, the pyrenoid",
        options: [
          "Excrete waste products",
          "Is suspended by cytoplasmic strands",
          "The dominate plant",
          "Bears the sexual organs",
          "Is attached to the ground by numerous rhizoids",
        ],
        ans: D,
      },
      {
        id: 9,
        question: "Byrophytes are different from flowing plants because they",
        options: [
          "live in moist habitats",
          "Are small plants",
          "Have small leaves",
          "Have no vascular tissues",
        ],
        ans: C,
      },
      {
        id: 10,
        question:
          "In lower plants like mosses, the structure which prforms the functions of roots of higher plants is called",
        options: ["Root hairs", "Rootles", "Hyphae", "Rhizoids", "Thalli"],
        ans: D,
      },
      {
        id: 11,
        question: "Which of the following is NOT true of spirogyra?",
        options: [
          "Reproduces by conjugation",
          "Reproduces by fragmentation",
          "Consists of branched filaments",
          "Consists of unbranched filaments",
        ],
        ans: C,
      },
      {
        id: 12,
        question:
          "In a plant exhibiting alternation d generations, the diploid multicellular stage is knows as",
        options: ["Gametophyte", "Spermatophyte", "Holophyte", "Sporophyte"],
        ans: D,
      },
      {
        id: 13,
        question:
          "A characteristic that distinguishesbryophytes from flowering plants is the",
        options: [
          "Possession of true stems and leaves",
          "Ability to reproduce asexually",
          "Absence of vascular tissues",
          "Ability to grows in moist habitats",
        ],
        ans: C,
      },
      {
        id: 14,
        question: "In most true ferns sporangia are grouped into",
        options: ["Indusium", "Fronds", "Prothalli", "Sori"],
        ans: D,
      },
      {
        id: 15,
        question: "In the reproduction of mosses, waer is essential because",
        options: [
          "They live in moist habitats",
          "They cannot reproduce without water",
          "The male gametes must swim to fertilize the ovum",
          "They produce spores",
        ],
        ans: C,
      },
      {
        id: 16,
        question: "The term Thallophyta refers to",
        options: [
          "Ferns and mosses",
          "Algae and fungi",
          "Mosses and liverworts",
          "Fungi and ferns",
        ],
        ans: B,
      },
      {
        id: 17,
        question:
          "The prothallus of a fern is equivalent to the gametophyte generation of moss because it",
        options: [
          "Is inconspicuous",
          "Has rhizoids",
          "Bears sexual organs",
          "Is multicellular",
        ],
        ans: C,
      },
      {
        id: 18,
        question:
          "The algae, bryophytes and pteridophytes are similar in that they",
        options: [
          "Are sea weeds",
          "Have no vascular tissues",
          "Require moisture for fertilization",
          "Are microscopic plants",
        ],
        ans: C,
      },
      {
        id: 19,
        question: "The spores of ferns are dispersed by",
        options: ["Wind", "Water", "Insect", "Explosive mechanism"],
        ans: A,
      },
      {
        id: 20,
        question: "In bryophytes, sex organs are produced in the",
        options: ["Gametphyte", "Rhizoid", "Protonema", "Sporophyte"],
        ans: A,
      },
      {
        id: 21,
        question:
          "Which of the following are differntiated into true roots, stems and leaves?",
        options: ["Algae", "Schizophyta", "Pteridophyta", "Bryophyta"],
        ans: C,
      },
      {
        id: 22,
        question: "The annulus of fern sporangium helps in",
        options: [
          "Spore dispersal",
          "Conduction of minerals salt",
          "Trapping or light energy",
          "Water retention",
        ],
        ans: A,
      },
      {
        id: 23,
        question:
          "Which of the following cerrectly summarizes the life cycle of a fern plant?",
        options: [
          "Spore->prothallus->thallus->sporangium",
          "Male and female->gametangia->zygospore->sporangium->spores",
          "Spore->thallus->spermatozoa->ovum->sporangium",
          "prothallus->spermatozoid->egg->cell->leafy plant->sporangiospore",
        ],
        ans: A,
      },
      {
        id: 24,
        question:
          "in which of these features do bryophytes differ from peridophytes?",
        options: [
          "Absence of flower",
          "Aiternation of generation",
          "Dependence on water for reproduction",
          "presence of a vascular system",
        ],
        ans: D,
      },
      {
        id: 25,
        question:
          "Which of the following organs or cell components are common to both the sporophyte and the gametophyte of a fern?",
        options: ["Rhizoids", "Roots", "Chloroplasts", "Leaves"],
        ans: C,
      },
      {
        id: 26,
        question:
          "Which is the correct order in an evolutionary sequence for the following plants groups?",
        options: [
          "Bacteria->fern->algae->mosses->seed plant",
          "Bateria->ferns->mosses->algae->seed plant",
          "Bacteria->algae->mosses->fern->seed plant",
          "Bacteria->mosses->algae->ferns->seed plant",
        ],
        ans: C,
      },
      {
        id: 27,
        question:
          "One commoon characteristic of fungi algae, mosses and ferns is that they",
        options: [
          "show alternation of generations",
          "reproduce sexually by conjugation",
          "produce spores hat are dispersed",
          "possess chlorophyll in their tissue",
        ],
        ans: C,
      },
      {
        id: 28,
        question: "Which of the following perform similar functions?",
        options: [
          "Ascospores and ascocarp",
          "antherozoids and rhizoid",
          "Sorus and indusium",
          "Srobili and inflorescene",
        ],
        ans: C,
      },
      {
        id: 29,
        question: "In ferns, the sporophyte",
        options: [
          "Develop from a haploid zygote",
          "Reproduce sexually to produce spores",
          "Is haploid and dependent on the gametophyte",
          "Diploid and independent of the gametophyte",
        ],
        ans: D,
      },
      {
        id: 30,
        question:
          "In which of the following organism does each cell combine the function of nutrition, reproduction and growth",
        options: ["Rhizopus", "Dryopteris", "Brachymenium", "Spirogyra"],
        ans: D,
      },
      {
        id: 31,
        question:
          "One distinctive feature in the life history of liverworts is that they exhibit",
        options: [
          "Alternation of generation",
          "Vegetative reproduction",
          "Asexual reproduction",
          "Sexual reproduction",
        ],
        ans: A,
      },
      {
        id: 32,
        question:
          "The absence of special food and water-conducting system restricts the body size in",
        options: [
          "Algae, liveworts and mosses",
          "liverworts, mosses and fern",
          "The bryophytes and the pteridophytes",
        ],
        ans: A,
      },
      {
        id: 33,
        question: "The dominant phase in life cycle of a bryophyte is the",
        options: ["Gametangium", "Sporophyte", "Gametophyte", "Prothallus"],
        ans: c,
      },
      {
        id: 34,
        question: "A water medium is necessary for fertilization in",
        options: ["Fungi", "Conifers", "Ferns", "Angiosperms"],
        ans: C,
      },
      {
        id: 35,
        question:
          "Alternation of asexual and sexual modes of reproduction is found in",
        options: ["Blue-green algae", "Euglena", "Fern", "Maize"],
        ans: C,
      },
      {
        id: 36,
        question: "The dominant phase in the life cycle of a fern is the",
        options: ["Prothallus", "Sporophyte", "Antheridium", "Gametophyte"],
        ans: B,
      },
      {
        id: 37,
        question: "In bryophytes, sex organs are produced in the",
        options: ["Phizoidrotonema", "Sporophyte", "Gametophyte", "Rhizoid"],
        ans: C,
      },
      {
        id: 38,
        question: "seed plants are divided into",
        options: [
          "monocotyledons and cotyledons",
          "thallophytes and bryophytes",
          "tracheophytes and ferns",
          "anglosperms and gymnosperms",
        ],
        ans: D,
      },
      {
        id: 39,
        question: "Alternation of generation is a feature shown in",
        options: ["mosses", "fungi", "grasses", "conifers"],
        ans: A,
      },
      {
        id: 40,
        question: "The spores of ferns are disperse by",
        options: ["wind", "water", "insecs", "explosive mechanism"],
        ans: A,
      },
      {
        id: 41,
        question: "which of the following is the most advace plant?",
        options: ["merchantia", "dryopteris", "chamydomona", "spirogyra"],
        ans: B,
      },
      {
        id: 42,
        question: "Double fertilization is a unique feature of",
        options: ["angiosperm", "bryophytes", "pteridophytes", "algae"],
        ans: A,
      },
      {
        id: 43,
        question: "Asexual reproduction in spirogya is by",
        options: ["fragmentation", "binary fission", "conjugation", "budding"],
        ans: A,
      },
      {
        id: 44,
        question: "The annulus of fern sporangium helps in",
        options: [
          "spore disperseal",
          "conduction of mineral salt",
          "trapping of light energy",
          "water retention",
        ],
        ans: A,
      },
      {
        id: 45,
        question: "Which of the generation is in which of these?",
        options: ["ferns", "fungi", "coelenterate", "moneran"],
        ans: A,
      },
      {
        id: 46,
        question: "Which of the following are thallophytes?",
        options: [
          "mosses and ferns",
          "mosses and liverworts",
          "fungi and algae".charAt,
          "fungi and ferns",
        ],
        ans: A,
      },
    ],
  },

  {
    topic: "Higher Plants",
    questions: [
      {
        id: 1,
        question: "one of the signficant between roots and stem is that",
        options: [
          "branch root originate in the pericycle while branch stems do not",
          "stems are always above the ground while roots are always below the ground",
          "stem are positive geotropic while roots are negative geotropic",
          "stem are sometimes used in storage and roots are never so used",
          "stem grow in both length and circumference while root grow only in length",
        ],
        ans: A,
      },
      {
        id: 2,
        question: "roots hair are developed from the",
        options: ["root apex", "epidermis", "vascuar bundles", "endodermis"],
        ans: B,
      },
      {
        id: 3,
        question:
          "in a dicot leaf, guard cells differ from other epidermal cells because they",
        options: [
          "have no definite shape",
          "lack nuclei",
          "are snaler",
          "contain chloreplast",
          "lack vacuole",
        ],
        ans: D,
      },
      {
        id: 5,
        question: "herbs differ from shrubs because they",
        options: [
          "do not produce fruis",
          "are useful to herbalists",
          "do not become woody",
          "are only annuals",
          "are only perennials",
        ],
        ans: C,
      },
      {
        id: 6,
        question:
          "which of the following is not a characteristic of monocot plants?",
        options: [
          "occurrence of secondary thickening",
          "parallel venation",
          "scattered vascular bundles",
          "flora parts arranged in threes",
          "perianth is usually insignificant",
        ],
        ans: A,
      },
      {
        id: 6,
        question:
          "which of the following statements is NOT not true of he piliferous layer of a root?",
        options: [
          "it has a very thin cuticle",
          "is the outermost layer of the cortex",
          "may bear root hairs",
          "breaks down as the roots ages",
          "is replaced by cork in old roots",
        ],
        ans: A,
      },
      {
        id: 7,
        question: "which of the following is seed bearing?",
        options: [
          "mosses",
          "whisting pine",
          "algal filaments",
          "liverwort",
          "fern fronds",
        ],
        ans: A,
      },
      {
        id: 8,
        question: "in an angiosperm leaf, the xylem is",
        options: [
          "beside the phloem",
          "surrounded by the phloem",
          "above the phloem",
          "around the phloem",
          "in separate bundles from phloem",
        ],
        ans: C,
      },
      {
        id: 9,
        question:
          "which of the following pals are fully adapted to terrestrial life?",
        options: [
          "ferns and algae",
          "fern and mosses",
          "cryophyte and flowering plants",
          "flowering plans and conifers",
        ],
        ans: D,
      },
      {
        id: 10,
        question:
          "which of the following is common to a dicotylendonous stem and a monocotyledonous root?",
        options: [
          "medulary rays",
          "central pith",
          "wide cortex",
          "narrow cortex",
          "pericyclic fibres",
        ],
        ans: B,
      },
      {
        id: 11,
        question:
          "the stem differs from the root in having the xylem and phloem strands",
        options: [
          "on the same radii",
          "scattered",
          "on alternated radii",
          "towards the pith",
        ],
        ans: A,
      },
      {
        id: 12,
        question:
          "the correct sequence of tissue in the anatomy of a young dicotyledonoes stem from inside to outside is",
        options: [
          "pith, phloem, cambium, xylem, parenchyma, collenchyma and epidermis",
          "xylem, phloem, cambium, cortex, endodermis, collenchyma and epidermis",
          "pith, xylem, cambium, phloem, collenchyma, parenchyma and epidermis",
          "phloem, xylem, cambium, cortex, encodermis, collenchyma and epidermis",
        ],
        ans: C,
      },
      {
        id: 13,
        question:
          "secondary thickening is initiated in a dicotyledonous stem by the",
        options: [
          "xylem parenchyma",
          "secondary phloem",
          "endodermis",
          "cambium",
        ],
        ans: D,
      },
      {
        id: 14,
        question:
          "which of the following statement gives the BEST description of bark?",
        options: [
          "tissues outside the vascular cambium",
          "cork like tissues found in stems",
          "brown tissues never found in primary growth",
          "cork-like tissues of old trees",
        ],
        ans: B,
      },
      {
        id: 15,
        question:
          "in the transverves section of the leaf of maize vascular bundles are arranged in",
        options: ["arrow", "one circle", "alternate positions", "two circles"],
        ans: B,
      },
      {
        id: 16,
        question: "Double fertilization is unique feature of",
        options: ["angiosperms", "bryophytes", "pteridophytes", "algae"],
        ans: B,
      },
      {
        id: 17,
        question:
          "anglosperms and gymnosperms belong to the plant group knows as",
        options: ["schizophyta", "bryophyta", "pteridophyta", "spermatophyta"],
        ans: D,
      },
      {
        id: 18,
        question: "To faciliate gaseous exchange, breathing roots have",
        options: ["stomata", "mictochondria", "cuticle", "lenticles"],
        ans: D,
      },
      {
        id: 19,
        question:
          "A wide pith with a ring of condoctin tissue is characeristic of roots of",
        options: ["maize", "sunflower", "bean", "okra"],
        ans: B,
      },
      {
        id: 20,
        question: "Stomata pores open when there is",
        options: [
          "an increase in the sugar content of guard cells",
          "a decrease in the osmotic concenration of guard cells",
          "a decrease in the sugar conten of mesopyhll cells",
          "an increase in he sugar content of mesophyll cells",
        ],
        ans: A,
      },
      {
        id: 21,
        question:
          "which of the following structures is capable of producing more tissues in the stem of a herbaceous flowing plant?",
        options: ["epidermis", "pericycle", "xylem", "cambium"],
        ans: c,
      },
      {
        id: 22,
        question:
          "which of the following features are all associated with monocots?",
        options: [
          "fibrous roots aystem, branched network of veins and one seed leaf",
          "fibrous roots system, two seed leaves and flora parts in threes",
          "one seed leaf, petals in threes or groups or hrees and parallel venation of leaves",
          "one seed leaf, one-veied leaves and petals in three or multiple of three",
        ],
        ans: C,
      },
      {
        id: 23,
        question:
          "Peripherial arrangement iof vascular tissues in dicots is a characteristic of the internal structure of the",
        options: ["leaf", "petiole", "stem", "roots"],
        ans: C,
      },
      {
        id: 24,
        question: "mos monocots are easily recognized by their",
        options: [
          "short leaves with petioles",
          "long and sword-like leaves",
          "long and palm-like leavves",
          "short leaves with many veinlets",
        ],
        ans: B,
      },
      {
        id: 25,
        question:
          "in the internal structure of plants, a wide pith in the centre is coomon to",
        options: [
          "dicot stems and monocot stem",
          "dicot stems and monocot roots",
          "dicot roots and monocot roots",
          "dicot roots and monocot stems",
        ],
        ans: B,
      },
      {
        id: 27,
        question: "Angiosperms and gymnosperms belong to the class",
        options: ["schizophyta", "spermatophyta", "pteridophyta", "bryophyta"],
        ans: B,
      },
      {
        id: 28,
        question:
          "In the traverse section of a dicot sterm the region lying between the endodermis and vascular bundle is the",
        options: ["parenchyma", "pericycle", "phloem", "hypodermis"],
        ans: B,
      },
      {
        id: 29,
        question: "Monocot stems differ from dicot stems in tha monoots have",
        options: [
          "no cambium",
          "no pith",
          "fewer vascular bundles",
          "phloems with parenchyma",
        ],
        ans: A,
      },
      {
        id: 30,
        question: "The opening and dosing of the stoma are regulated by",
        options: ["transpiration", "respiration", "diffusion", "osmosis"],
        ans: D,
      },
      {
        id: 31,
        question:
          "In  dicotylendons stem, the zone between the epidermis and the pericycle is the",
        options: ["cortex", "stele", "phloem", "xylem"],
        ans: A,
      },
      {
        id: 31,
        question:
          "Which of the following is true of the transverse section of a dicot stem?",
        options: [
          "the xylem is more interiorlyy located than the phloem",
          "the cambium lies beween the cortex and vascular bundles",
          "vascular bundles are randomly scattered within the cortex",
          "the epidermis completely encircled by the cortex",
        ],
        ans: A,
      },
      {
        id: 32,
        question: "Seed plants are divided into ",
        options: [
          "monocotyledons and dicotyledons",
          "tracheophytes and ferns",
          "tracheophytes and bryophytes",
          "angiosperms and gymonosperms",
        ],
        ans: D,
      },
      {
        id: 33,
        question:
          "Plants that shows secondary growth are usually found among the",
        options: ["halophye", "pteridophye", "monocotyledons", "dicotyledons"],
        ans: D,
      },
      {
        id: 34,
        question:
          "Which of the following plants structures lacks a waterproof cuticle?",
        options: ["leaf", "stem", "root", "shoot"],
        ans: C,
      },
      {
        id: 35,
        question:
          "Which of the following plant secondary thickening in plants?",
        options: [
          "colenchyma and xylem cells",
          "vascular cambium and colenchyma cells",
          "vascular cambium and cork canbium",
          "cork cambium and cork sclerenchyma",
        ],
        ans: C,
      },
      {
        id: 36,
        question:
          "Seed plants are the most dominant vegatation on land because of",
        options: [
          "their motile gametes",
          "their ability to photosythesize",
          "efficient seed dispersal",
          "availability of water",
        ],
        ans: C,
      },
      {
        id: 37,
        question:
          "In the transverse section of the leaf maize vascular bundles are arranged in",
        options: ["row", "one circle", "alternate positions", "two circle"],
        ans: B,
      },
      {
        id: 38,
        question:
          "The layer of dicot stem impermeable to liquids and gases is the?",
        options: ["cambium", "cortex", "cuticle", "endodermis"],
        ans: D,
      },
    ],
  },

  {
    topic: "Evolution Among Invertebrates",
    questions: [
      {
        id: 1,
        question:
          "Which of the following animal is NEVER a secondary host of tapeworms?",
        options: ["cow", "fish", "pig", "man", "dog"],
        ans: D,
      },
      {
        id: 2,
        question:
          "The two types of human tapeworms can be distinguished by the presence or absence of",
        options: ["scolex", "hook", "head", "sucker", "proglottis"],
        ans: B,
      },
      {
        id: 3,
        question: "A tapeworm has no alimentary canal because",
        options: [
          "it is autotrophic",
          "it does not feed",
          "it has no enzymes",
          "is body absorbs digested food",
          "the suckers on the scolex suck blood",
        ],
        ans: D,
      },
      {
        id: 4,
        question:
          "Flatworms and roundworms are said to be invertebraes because",
        options: [
          "they are small animals",
          "they can live inside the vertebrates of some of them are unicellular",
          "they have backbones",
          "they are parasitic",
        ],
        ans: D,
      },
      {
        id: 5,
        question: "Which of these worms is beneficial to man?",
        options: [
          "hookworm",
          "tapeworm",
          "pundworm",
          "earthworm",
          "guinea worm",
        ],
        ans: D,
      },
      {
        id: 6,
        question: "Exoskeleton is NOT found in the",
        options: [
          "maggot",
          "mosquito larva",
          "earthworm",
          "caterpillar",
          "termite",
        ],
        ans: C,
      },
      {
        id: 7,
        question:
          "The part used by tapeworm to fasten itself to host's intensine are the",
        options: [
          "neck and sucker",
          "hooks and suckers",
          "rostellum and suckers",
          "young proglottis and neck",
          "rostellum, hooks and suckers",
        ],
        ans: B,
      },
      {
        id: 8,
        question: "Which of the animals is radically symmetrical?",
        options: ["squid", "hydra", "snail", "cockroach"],
        ans: B,
      },
      {
        id: 9,
        question: "Which of the following lack chaetae, tentacles and antennae",
        options: ["snail", "crab", "millipede", "earthworm"],
        ans: B,
      },
      {
        id: 10,
        question: "A good example of diploblatic organism is",
        options: ["amoeba", "hydra", "earthworm", "roundworm"],
        ans: B,
      },
      {
        id: 11,
        question: "The function of the clitellum in the earthworm is to",
        options: [
          "aid digestion",
          "prevent desication",
          "assit locomotion",
          "secret cocoon",
        ],
        ans: D,
      },
      {
        id: 12,
        question:
          "In tapeworm, the two structure that run through the length or the body are the",
        options: [
          "nerves cord and excretory duct",
          "sperm duct and nerve cord",
          "genital pore and excretory duct",
          "sperm duct and genital pore",
        ],
        ans: A,
      },
      {
        id: 13,
        question: "Which of the following NOT charateristics of snail?",
        options: [
          "bilateral symmetry",
          "chitinous exoskeleton",
          "muscular foot",
          "soft unsegmented body in mantle",
        ],
        ans: B,
      },
      {
        id: 14,
        question: "The following organisms are hermaphrodites EXCEPT",
        options: ["snail", "taenia", "schistosoma", "earthworm"],
        ans: C,
      },
      {
        id: 15,
        question: "Parasitic forms are NOT found among",
        options: ["platyhelminithes", "nematodes", "mollusccs", "annelids"],
        ans: c,
      },
      {
        id: 16,
        question:
          "Which of the following set of organism represent the current trend from simple to complex structural oraganization? 1. mollusca 2. platyhelminthes 3. nematoda 4. prtozoa",
        options: ["4123", "4321", "4213", "4231"],
        ans: D,
      },
      {
        id: 17,
        question: "A charateristic of the phylum coelenterate is that",
        options: [
          "most of then marine",
          "they posses a gut with a single opening",
          "they posses numerous pores on the body",
          "they are bilateral symmetrical",
        ],
        ans: B,
      },
      {
        id: 18,
        question:
          "Which of the following phyla have members with both internal and external sergmentation?",
        options: ["platyhelminthes", "nematoda", "algae", "mollusca"],
        ans: C,
      },
      {
        id: 19,
        question: "The body of snail is divided into head",
        options: [
          "thorax and abodmen",
          "visceral mass and abodmen",
          "thorax and foot",
          "visceral mass and foot",
        ],
        ans: D,
      },
      {
        id: 20,
        question: "Hydra removes undigested food by",
        options: [
          "paasing it through annus",
          "means of a contractile vacuole",
          "passing it through the mouth",
          "degesting it through the body surface",
        ],
        ans: B,
      },
      {
        id: 21,
        question:
          "Which of the following group of invertebrates reproduce by budding?",
        options: ["Arthropoda", "annelida", "mollusca", "coelenterata"],
        ans: D,
      },
      {
        id: 22,
        question: "In the tapeworm, the suckers on the scolex are used for",
        options: [
          "sucking the blood of the host",
          "holding fast to the host",
          "reproduction",
          "locomotion",
        ],
        ans: B,
      },
      {
        id: 23,
        question: "Sting cells noramlly found in",
        options: ["flatworm", "hydra", "snails", "paramecium"],
        ans: B,
      },
      {
        id: 24,
        question: "In earthworm, the cocoon is secreted by the",
        options: ["chaeta", "protomium", "peristomium", "clitellum"],
        ans: D,
      },
      {
        id: 25,
        question: "The respiration organ in the land snail is the",
        options: ["tentancle", "foot", "mantle"],
        ans: B,
      },
      {
        id: 26,
        question:
          "A major difference between platyhelminthes and coelenteraes is that platyhelminthes",
        options: [
          "are multicelluar",
          "have develop a mesoderm",
          "reproduce sexually",
          "reproduce asexually",
        ],
        ans: B,
      },
      {
        id: 27,
        question:
          "The essential structural difference between hydra and tapeworm is that while hydra,",
        options: [
          "has tentacles, tapeworm is parasitic",
          "is diploblasic, tapeworm is triploblastic",
          "has a mouth, tapeworm feeds by suckers",
          "has mesoderm, tapeworm has mesogloea",
        ],
        ans: B,
      },
      {
        id: 28,
        question:
          "The soil swallowed the earthworm to form the worm cast is ground up in the",
        options: ["clitellum", "prostomium", "mouth", "gizzard"],
        ans: D,
      },
      {
        id: 29,
        question: "The cnidoblas cells found in hydra are use for",
        options: [
          "reproduction",
          "offence and defence",
          "locomtion and nurtition",
          "food collection",
        ],
        ans: B,
      },
      {
        id: 30,
        question: "Annelids differ from nematodes in that they",
        options: [
          "exhibit bilateral symmetry",
          "are triplibastic",
          "are matamerically segmented",
          "posses complete digestive system",
        ],
        ans: C,
      },
      {
        id: 31,
        question: "In snails, the hard calcareous shell are secreted by the",
        options: ["radula", "ctenidium", "pneumostome", "mantle"],
        ans: c,
      },
      {
        id: 32,
        question: "The habitat of cysticercus of taenia solium is",
        options: [
          "alimentary canal of cattle",
          "muscles of pig",
          "alimentary canal or pig",
          "muscles of casttle",
        ],
        ans: B,
      },
      {
        id: 33,
        question:
          "The division of a body into two equal halves along a longitudinal plane is called",
        options: [
          "a bilateral symmentary",
          "traverse section",
          "radial symmetary",
          "longitudinal section",
        ],
        ans: A,
      },
      {
        id: 34,
        question: "Coelom is absent in the class of animals ermed",
        options: ["mollusca", "reptila", "arthropoda", "coelenterata"],
        ans: D,
      },
      {
        id: 35,
        question: "An example of a radially symmetrical organism is",
        options: ["planaria", "hydra", "tapeworm", "roundworm"],
        ans: B,
      },
      {
        id: 36,
        question: "The leech and earthworm belong to the",
        options: ["molluscs", "crustaceans", "arachnids", "annelids"],
        ans: B,
      },
      {
        id: 37,
        question:
          "One primitive feature of the coelenterates is the possession of",
        options: [
          "a dorsal mouth",
          "radial symmetry",
          "bilateral symmetry",
          "a false foot",
        ],
        ans: B,
      },
      {
        id: 38,
        question: "Radial symmetry is a feature common to the",
        options: [
          "platyhelminthes",
          "nematodes",
          "coelenterates",
          "arthropods",
        ],
        ans: C,
      },
      {
        id: 39,
        question:
          "Which of the following is the most advanced in the evolutionary trend of animals?",
        options: ["liver fluke", "earhworm", "snail", "cockroach"],
        ans: D,
      },
      {
        id: 40,
        question:
          "An animal body that can be cut along its axis in any plane to give two identical part is said to be",
        options: [
          "radically symmetrical",
          "bilateral symmetrical",
          "asymmetrical",
          "symmetry",
        ],
        ans: A,
      },
      {
        id: 41,
        question: "Tanenia solium can be found in",
        options: ["goat", "dog", "pig", "cow"],
        ans: C,
      },
      {
        id: 43,
        question:
          "The nephiridium is used in which of the following organisms ",
        options: ["roundworms", "flatworms", "earthworms", "insects"],
        ans: C,
      },
      {
        id: 44,
        question: "The flame cell excretory prgan of",
        options: ["arthropoda", "crutaceans", "fatworms", "molluscs"],
        ans: C,
      },
    ],
  },

  {
    topic: "The Arthropods",
    questions: [
      {
        id: 1,
        question: "Which of these is not true of the insect? The possession of",
        options: [
          "two pairs of antennae",
          "jointed appendages",
          "exoskeleton body",
        ],

        ans: "a",
      },
      {
        id: 2,
        question:
          "Insects show considerable powers of water conservation. This is due to the fact that",
        options: [
          "the chitinous cuticle is impregnaed with tanned proteins",
          "nitrogenous waste is eliminated as urea",
          "chitin is impermeable to water",
          "the malphigian tubules are impermeable to water",
          "the cuticle is covered with wax",
        ],

        ans: "c",
      },
      {
        id: 3,
        question:
          "A mosquito which produces eggs which float, and whose larve lie horizontal to the water surface, also rests at an angle on a vertical surface. This type of mosquito is",
        options: [
          "Aedes Anopheles",
          "Culex",
          "Tiger mosquito",
          "none of the above",
        ],

        ans: "b",
      },
      {
        id: 4,
        question:
          "Which of the following insects has an incomplete metamorphosis during its life cycle?",
        options: ["Butterfly", "Bee", "Mosquito", "Housefly", "Grasshopper"],

        ans: "e",
      },
      {
        id: 5,
        question: "Which of these statements is NOT true of insects?",
        options: [
          "they are anthropods",
          "their body is divided into three distint regions of head, thorax and abdomen",
          "their thorax comprises three segments, only two of which bear a pair of appendages each",
          "respiration is by means of trachea",
          "they undergo metamorphosis",
        ],

        ans: "c",
      },
      {
        id: 6,
        question: "A centipede differs from a millipede by its",
        options: [
          "colour",
          "numerous abdominal segment",
          "paired legs on each abdominal segment",
          "poison claws",
          "cylindrical body",
        ],

        ans: "d",
      },
      {
        id: 7,
        question: "Jointed skeleton is absent in the",
        options: ["cockroach", "spider", "milipede", "snail", "dragon fly"],

        ans: "d",
      },
      {
        id: 8,
        question:
          "Which of the following invertebrates does NOT possess antennae?",
        options: ["centipde", "crustacean", "milipede", "insect", "spider"],
        // the spider doesn't have an antennae actually...
        ans: "e",
      },
      {
        id: 9,
        question: "Each of the following is an anthropod EXCEPT the",
        options: ["crab", "spider", "snail", "milipede", "cockroach"],

        ans: "c",
      },
      {
        id: 10,
        question: "Incomplete metamorphosis occurs in the",
        options: ["butterfly", "grasshopper", "mosquito", "housefly"],

        ans: "b",
      },
      {
        id: 11,
        question:
          "When the original king and queen of termites die, they are replace by",
        options: [
          "the king and queen of another colony",
          "some adult reproductive from another colony",
          "some adult workers which are specially fed to breed",
          "developing nymphs nurtured as secondary reproductive",
        ],

        ans: "d",
      },
      {
        id: 12,
        question: "The male cockroach differ from female by having",
        options: [
          "mandibles",
          "a pair of styles",
          "spiracles",
          "a pair of cerci",
        ],

        ans: "b",
      },
      {
        id: 13,
        question: "The crayfish is an arthropod because",
        options: [
          "its body consist of a cephalothorax and an abdomen",
          "it has pair of antennae and antennules",
          "every segment of is body carries a pair of appendages",
          "its body is covered with an exoskeleton made of chitin",
        ],

        ans: "d",
      },
      {
        id: 14,
        question:
          "In the life history of a butterfly, destruction of crops is caused by the",
        options: ["maggot", "nymph", "caterpillar", "pupa"],

        ans: "c",
      },
      {
        id: 15,
        question: "Insects and milipede have many features in common EXCEPT",
        options: [
          "exoskeleton",
          "jointed, appendages",
          "compound eyes",
          "segmented body",
        ],

        ans: "c",
      },
      {
        id: 16,
        question:
          "Which of the following is a common characteristic in crustaceans?",
        options: [
          "possession of a pair of antennae",
          "possession of two pairs of antennae",
          "each segment has a pair of walking legs",
          "four pairs of walking legs on the cephalothorax",
        ],

        ans: "b",
      },
      {
        id: 17,
        question: "The pedipalpi in spiders are used for",
        options: ["grasping", "walking", "feeling", "web spinning"],

        ans: "a",
      },
      {
        id: 18,
        question: "The function of maxillipeds in crayfish is to aid",
        options: ["walking", "swimming", "feeding", "respiration"],

        ans: "c",
      },
      {
        id: 19,
        question:
          "Which of the following insects undergoes incomplete metamorphosis?",
        options: ["mosquito", "termite", "housefly", "moth"],

        ans: "b",
      },
      {
        id: 20,
        question: "The butterfly is of great economic importance because",
        options: [
          "of its use in scientific studies",
          "it sucks nectar from lower",
          "it adds to the beauty of the environment",
          "it pollinates flower of crops and other plants",
        ],

        ans: "d",
      },
      {
        id: 21,
        question:
          "Which of the following insects lay its eggs in horny, purse-like cases?",
        options: ["mosquito", "butterfly", "termite", "cockroach"],

        ans: "d",
      },
      {
        id: 22,
        question:
          "The group of insects that undergoes complete metamorphosis is",
        options: [
          "houseflies",
          "beetles and cockroaches",
          "cockroaches, grasshoppers, and bees",
          "aphids, grasshoppers and butterflies",
        ],

        ans: "c",
      },
      {
        id: 23,
        question: "The three classes in termitarium are",
        options: [
          "soldiers, queen and workers",
          "workers, soldiers and reproductive",
          "soldiers, workers and kings",
          "kings, queen and soldiers",
        ],

        ans: "b",
      },
      {
        id: 24,
        question:
          "The ability of the cockraoch to live in cracks and crevices is enhanced by the possession of",
        options: [
          "wings and segments body",
          "compound eyes",
          "claws on the legs",
          "dorso-ventrally flattened body",
        ],

        ans: "d",
      },
      {
        id: 25,
        question: "The case of termites that lacks pigmentation is the",
        options: ["king", "worker", "solder", "queen"],

        ans: "b",
      },
      {
        id: 26,
        question: "In the honey bee colony, the drones are",
        options: [
          "sterile males with reduced mouths parts",
          "sterile males with well developed mouth parts",
          "fertile males wih reduced mouth part",
          "fertile males with well developed mouth parts",
        ],

        ans: "c",
      },
      {
        id: 27,
        question: "The group of Arthropods hat has no antennae is the",
        options: ["crustaceans", "chilopoda", "arachinda", "diplopod"],

        ans: "c",
      },
      {
        id: 28,
        question:
          "The jointed structure in insects that bears organs which are sensitive to touch, smell and vibration is the",
        options: ["maxilla", "labium", "antenna", "abdomen"],

        ans: "c",
      },
      {
        id: 29,
        question: "Water fleas, wood lice and barnacles belong to the group",
        options: ["Arachnida", "Crustacea", "Insecta", "Chilopoda"],

        ans: "b",
      },
      {
        id: 30,
        question: "The role of male adult honey bee is to",
        options: [
          "dean the hive",
          "ventilate the hives",
          "mate with the queen",
          "care for the young",
        ],

        ans: "c",
      },
      {
        id: 31,
        question: "When oil is poured into breeding site of a mosquito, it",
        options: [
          "deprives the larvee of water",
          "kits the adults",
          "suffocates the pupae",
          "slow down egg development",
        ],

        ans: "c",
      },
      {
        id: 32,
        question:
          "A features of the caste systems of bees and termites is that",
        options: [
          "the workers are sterile",
          "the kings are bigger than the queen",
          "only the worker performe duties",
          "nuptial fight is performed by all members",
        ],

        ans: "a",
      },
      {
        id: 33,
        question: "Jointed skeleton is absent in the",
        options: ["cockroach", "spider", "miliped", "snail", "dragon fly"],

        ans: "d",
      },
      {
        id: 34,
        question:
          "Insects are considered the most successful among the invertebrates because they",
        options: [
          "possess exoskeletes",
          "survive in various environmental conditions",
          "have wings for flight",
          "possess the ability to change their forms",
        ],

        ans: "b",
      },
      {
        id: 35,
        question: "The larva stage of a mosquito is called",
        options: ["wrggler", "grub", "maggot", "caterpillar"],

        ans: "a",
      },
      {
        id: 36,
        question:
          "The function of the long-winged reproductive in a termite colony is to",
        options: [
          "disperse the population",
          "feed the young",
          "participate in swarming",
          "protect the young",
        ],

        ans: "a",
      },
      {
        id: 37,
        question:
          "The stage in the life history of a moth responsible for destruction of agricultural crops is the",
        options: ["nymph", "imago", "pupa", "caterpillar"],

        ans: "d",
      },
      {
        id: 38,
        question:
          "The only cate in the termite colony whose members can feed themselves are the",
        options: ["reproductive", "the workers", "nymph", "soldiers"],

        ans: "b",
      },
      {
        id: 39,
        question:
          "The process of shedding the exoskeleton of an arthropod is known",
        options: ["metamorphosis", "instar formation", "ecdysis", "tagmosis"],

        ans: "c",
      },
      {
        id: 40,
        question:
          "Which of the following is common to the mosquito, housefly and blackfly?",
        options: [
          "They undergo complete metamorphosis",
          "they are parasite of man",
          "their immature stage are aquatic",
          "their adults have two pairs of wings",
        ],

        ans: "a",
      },
      {
        id: 41,
        question:
          "The most abundan group of organisms in the animal kingdom is",
        options: ["mammalia", "aves", "aninelida", "insectad"],

        ans: "d",
      },
      {
        id: 42,
        question:
          "Which of the following animals is most adapted for water conservation?",
        options: ["earthworms", "mammals", "flatworms", "insects"],

        ans: "d",
      },
      {
        id: 43,
        question:
          "The main distinguishing features between the soldier termite and oher members of the caste are the",
        options: [
          "presence or wings, possession of a large thorax and a small head",
          "absence of wings, possession of strong mandibles and a large head",
          "absence of wings, possession of big head and absence of mandible",
          "presence of wings, possession of a small head and large thorax",
        ],

        ans: "b",
      },
      {
        id: 44,
        question:
          "The adaptive importance of nuptial flight from termite colonies is to",
        options: [
          "ensure cross-breeding between members of one colony to another",
          "excel the reproductive in order to establish new colonies",
          "provide abundant food for birds and other animals during the early rains",
        ],

        ans: "c",
      },
      {
        id: 45,
        question:
          "The significance of a very large number of termites involved in nuptial swarming is to",
        options: [
          "provide birds with plenty of food",
          "ensure their perpetuation despite predatory pressure",
          "search for a favourable place to breed",
          "ensure that every individual gets a mate",
        ],

        ans: "a",
      },
      {
        id: 46,
        question:
          "Which of the folowing distinguished a butterfly from a moth?",
        options: [
          "both are active during the day",
          "they have similar antennae",
          "the abdomen of a moth is fatter that that of butterfly",
          "the wings of butterfly rest horizontally but those of moth rest vertically",
        ],

        ans: "c",
      },
      {
        id: 47,
        question:
          "Which of the following describes a characteristic of arthropods?",
        options: [
          "The organism has a pair of jointed appendages",
          "the body is not divided into a number of  segments. The body is covered by chitin",
          "the organism find it easy to grow freely",
        ],

        ans: "c",
      },
      {
        id: 48,
        question: "Proboscis is a structure that is mostly found",
        options: ["tapeworms", "amphibians", "moluluscs", "insects"],

        ans: "d",
      },
      {
        id: 49,
        question:
          "Which of these oragnisms partly digest its food extracellularly?",
        options: ["Housefly", "cockroach", "termit", "mosquito"],

        ans: "c",
      },
      {
        id: 50,
        question: "The pupa stage of the butterfly is known as",
        options: ["larva", "maggot", "grub", "chrysalis"],

        ans: "d",
      },
      {
        id: 51,
        question: "Green glands are found among",
        options: ["annelids", "molluscs", "arachnids", "crustaceans"],

        ans: "d",
      },
      {
        id: 52,
        question: "Which of the following insect possess boring mouthpart",
        options: ["butterfly", "aphid", "weevil", "cockroach"],

        ans: "c",
      },
      {
        id: 53,
        question: "Competition is reduced in housefly by",
        options: [
          "the adult laying fewer eggs",
          "the majority of the layed eggs not hatched",
          "little diffrence between larva and adult",
          "males not fertilizing majority of the eggs",
        ],

        ans: "d",
      },
    ],
  },

  {
    topic: "The Vertebrates Pisces. Amphibians. Reptiles",
    questions: [
      {
        id: 1,
        question:
          "During the movement of fish A. to target B, one of these parts is not involve",
        options: ["7", "5", "3", "6", "10"],

        ans: "e",
      },
      {
        id: 2,
        question:
          "The features that distinguishs the toad or frog from a fish is the absence of",
        options: [
          "scales",
          "lungs",
          "paired appendages",
          "a tail",
          "skin glands",
        ],

        ans: "a",
      },
      {
        id: 3,
        question:
          "Which of these is not associated with a tadpole stages of the toad of frog?",
        options: [
          "V-shaped gland",
          "operculum",
          "external gills",
          "jelly",
          "shell",
        ],

        ans: "e",
      },
      {
        id: 4,
        question:
          "Some of the features of an animals are scales, teeth, nares and backbone. The animal is likely to be a toad",
        options: ["toad", "bird", "lizard", "rat", "bat"],
        ans: "c",
      },
      {
        id: 5,
        question: "Which of the following animals is cold-blooded?",
        options: ["Cat", "lizard", "whale", "bird", "horse"],
        ans: "b",
      },
      {
        id: 6,
        question: "The main function of the swim-bladder is for",
        options: [
          "swimming",
          "dectecting sound",
          "buoyancy",
          "breathing",
          "reproduction",
        ],
        ans: "c",
      },
      {
        id: 7,
        question:
          "When an operculate fish breathes it takes in water through the",
        options: [
          "mouth and passes i out through the same",
          "mouth and passes it out through the operculum",
          "operculum and passes it out through the mouth",
          "operculum and passes it out through the nostrill",
          "nostrils and passes it out through the operculum",
        ],
        ans: "b",
      },
      {
        id: 8,
        question:
          "Which of the following structures is NOT found in the female Agama lizard?",
        options: [
          "pre-natal pads",
          "eardrum",
          "gular fold",
          "nasal scale",
          "nuchal crest",
        ],
        ans: "a",
      },
      {
        id: 9,
        question: "The male toad differs from the female by having",
        options: [
          "vocal sacs",
          "shoter hind limbs",
          "longerfore limbs",
          "bulging eyes",
          "nicating membrane",
        ],
        ans: "a",
      },
      {
        id: 10,
        question: "The dorsal and anal fish of fish are used for",
        options: [
          "upward movements",
          "ontrolling rolling movements",
          "downward movement",
          "steering",
          "buoyancy",
        ],
        ans: "e",
      },
      {
        id: 11,
        question:
          "In fish the sense organs which detect movements in the water are located within the",
        options: ["gills", "operculum", "nostrils", "medians", "lateral line"],
        ans: "e",
      },
      {
        id: 12,
        question:
          "At what stage in the life history of a toad is its mode of breathing similar to that of a fish?",
        options: [
          "Tadpole stage",
          "External gill",
          "Adult stage",
          "inernal gill stage",
          "larval stage",
        ],
        ans: "a",
      },
      {
        id: 13,
        question: "Fishes are cold blooded because their body temperature is",
        options: [
          "constantly high",
          "dependent on that of their surroundings",
          "regulated at will",
        ],
        ans: "c",
      },
      {
        id: 14,
        question: "The fins making up the limbs of the bony fish are",
        options: [
          "caudal and ventral",
          "ventral and pelvic",
          "pelvic and pectoral",
          "pectoral and dorsal",
        ],
        ans: "c",
      },
      {
        id: 15,
        question:
          "The long and coiled intestine of a young tadpole is an adaptation to its",
        options: [
          "herbivorous diet",
          "carnivorous diet",
          "aquatic habiat",
          "insectivorous habit",
        ],
        ans: "a",
      },
      {
        id: 16,
        question: "The major function of swim-bladder in fishes is",
        options: ["breathing", "buoyance", "swimming", "diving"],
        ans: "b",
      },
      {
        id: 17,
        question: "Which of the following animals has homodont dentition?",
        options: ["Rats", "Man", "Lizard", "Pigeon"],
        ans: "c",
      },
      {
        id: 18,
        question:
          "In which of the following does external fertilization take place?",
        options: ["toad", "lizard", "bird", "cockroach"],
        ans: "a",
      },
      {
        id: 19,
        question: "The gill rakers of fishes take part in",
        options: ["feeding", "respiration", "swimming", "diffusion"],
        ans: "a",
      },
      {
        id: 20,
        question: "Cold blooded animals are referred to as",
        options: [
          "poikilotihermic",
          "homoiothermic",
          "polythermic",
          "homeostasis",
        ],
        ans: "a",
      },
      {
        id: 21,
        question:
          "Which of the organism has lost the pentadactyl limb structure?",
        options: ["Bat", "fish", "frog", "pigeon"],
        ans: "b",
      },
      {
        id: 22,
        question:
          "Which of the following combinations differentiates a bony fish from a cartilaginous fish? I. presence of gills II. Absence of gill slits III. Possession or bony skeleton. IV Possession of lateral compressed body. V possession of dorso-vertrally compressed body",
        options: ["I, II, and III", "I, III and IV", "II, III, and V"],
        ans: "c",
      },
      {
        id: 23,
        question:
          "Which is the most important adaptation of a bony fish to life in water?",
        options: [
          "The possesion of a streamlined shape",
          "the presence of overlapping scales",
          "tthe covering of the body by thin film of shine",
          "the possession or a caudal fin",
        ],
        ans: "a",
      },
      {
        id: 24,
        question:
          "In which of the following groups of vertebrates would the largest amount of yolk be found in the egg?",
        options: ["Mammals", "Fishes", "Amphibians", "Reptiles"],
        ans: "d",
      },
      {
        id: 25,
        question:
          "In which of the following groups vertebrates does the skin function as a respiratory surface?",
        options: ["Rats", "Lizard", "Fish", "Frog"],
        ans: "d",
      },
      {
        id: 26,
        question:
          "The structures that prevent food particles from escaping through the fish gills are called gill",
        options: ["arches", "filaments", "rakers", "lameliae"],
        ans: "c",
      },
      {
        id: 27,
        question:
          "The possession of scales, layin of eggs with shells and bony structure of the head are charactristics shared by",
        options: [
          "birds and reptiles",
          "fishes and birds",
          "reptiles and fishes",
          "birds and molluscs",
        ],
        ans: "a",
      },
      {
        id: 28,
        question:
          "The key event in the transition of the amphibians from water to land is the",
        options: [
          "replacement of the gills with lungs",
          "possession of the webbed limbs",
          "developmen of long hind",
          "limbs",
          "possession of tympanic membrane",
        ],
        ans: "a",
      },
      {
        id: 29,
        question:
          "The ste of fins that controls steering, balancing and change of direction and pitch in fish is",
        options: [
          "dorsal and anal",
          "pectorial and pelvic",
          "caudal and dorsal",
          "anal and pelvic",
        ],
        ans: "b",
      },
      {
        id: 30,
        question: "Amphibians are normally found",
        options: [
          "on dry land and in water",
          "in water and on moist land",
          "on moist land",
          "in water",
        ],
        ans: "b",
      },
      {
        id: 31,
        question: "The presence of endoskeleton is characteristic of",
        options: ["invertebrate", "vertebrate", "insecta", "coelenterata"],
        ans: "b",
      },
      {
        id: 32,
        question:
          "I Rattus rattus II. Agama agama III. Bufo regularis IV. Tilapia zilli The order of evelutionary advancement of the above vertebrates is",
        options: [
          "I, I, II, V",
          "I, IV,, III, II",
          "II, II, V, I",
          "IV, III, II, I",
        ],
        ans: "d",
      },
      {
        id: 33,
        question: "In lizards, the lowering of the gular told is used to",
        options: [
          "catch insects",
          "attract mates",
          "defend their territory",
          "frighten enemies",
        ],
        ans: "b",
      },
      {
        id: 34,
        question: "The main function of the caudal fin in Tilapia is to",
        options: [
          "propel it forward in water",
          "steer it while changing direction",
          "balance it in water",
          "enable it to float in water",
        ],
        ans: "a",
      },
      {
        id: 35,
        question: "An example of a fish that aestivates is",
        options: ["shark", "croaker", "lung fish", "cat fish"],
        ans: "c",
      },
      {
        id: 36,
        question:
          "Which of the following is used mainly for balancing in fish?",
        options: [
          "The caudal fin",
          "The pectoral fin",
          "The anal fin",
          "The dorsal fin",
        ],
        ans: "d",
      },
      {
        id: 37,
        question:
          "The most important characteristic that makes reptiles to cnquer terrestrial habitas is he possession of",
        options: ["long tail", "scaly skin", "sharp caw", "amniotic egg"],
        ans: "b",
      },
      {
        id: 38,
        question: "The first terrestrial vertebrates evolved form",
        options: ["pisces", "reptilia", "amphibian", "mammalia"],
        ans: "a",
      },
      {
        id: 39,
        question:
          "The feature that makes locomotion in water easy for fish is the",
        options: [
          "scaly body",
          "slimy body",
          "streamlined body",
          "lateral line",
        ],
        ans: "c",
      },
      {
        id: 40,
        question: "The function of the red head in male Agama lizards is to",
        options: [
          "attract female lizards for mating purposes",
          "warn predators of the distastefulness of the animal",
          "conceal and camouflag the animal from predators",
          "scale other males from the territory",
        ],
        ans: "a",
      },
      {
        id: 41,
        question: "The basking of Agama lizards in the sun is to",
        options: [
          "change the colour of their body",
          "raise their body temperature to become active",
          "fight to defend their territories",
          "attract the female for courtship",
        ],
        ans: "b",
      },
      {
        id: 42,
        question: "An example of poikilothermic organisms is a",
        options: ["lizard", "cockroach", "rabbit", "bird"],
        ans: "a",
      },
      {
        id: 43,
        question:
          "The sequence of the one-way gaseous exchange mechanism in a fish is",
        options: [
          "gills->operculum->mouth",
          "mouth->gills->operculum",
          "operculum->mouth->gills",
          "mouth->operculum->gills",
        ],
        ans: "b",
      },
      {
        id: 44,
        question: "Cold blooded animala sre reffered to as",
        options: ["poikilo themic", "homthermoc", "polythermi", "homeostatic"],
        ans: "a",
      },
      {
        id: 45,
        question: "Which of the following animals is cold-blooded?",
        options: ["Cat", "Lizard", "Whale", "Bird"],
        ans: "b",
      },
      {
        id: 46,
        question: "A reptile always lays its eggs",
        options: ["on trees", "on land", "in water", "in swamps"],
        ans: "b",
      },
      {
        id: 47,
        question: "The red head of Agama lizard is adapted for ",
        options: [
          "warning enemies",
          "conserving water",
          "securing mates",
          "escape",
        ],
        ans: "c",
      },
    ],
  },

  {
    topic: "The Vertebrate II-Birds And Mammals",
    questions: [
      {
        id: 1,
        question:
          "A trawler on a fishing trip landed a type of animal wih hairs on its body. This animal could have been",
        options: ["an amphibian", "reptile", "a shark", "a mammal", "seagull"],
        ans: "d",
      },
      {
        id: 2,
        question: "Which of these is not a part of the feather of a bird?",
        options: [
          "wing",
          "aftershaft",
          "inferior umbilicus",
          "vane",
          "barbule",
        ],
        ans: "a",
      },
      {
        id: 3,
        question: "Which of the following is NOT metamerically segmented?",
        options: ["Tapeworm", "Earthworm", "Centipede", "Crayfish", "Shark"],
        ans: "a",
      },
      {
        id: 4,
        question:
          "An homiothermc animal kept a room where the temperature is lower than the body temperatur may lose heat by four physical processes. Which of the following processes is not connected with body temperature regulattion?",
        options: [
          "Radiation",
          "sweat",
          "Evaporation",
          "Conduction",
          "Convention",
        ],
        ans: "b",
      },
      {
        id: 5,
        question:
          "Which of the following adaptations is Not concerned with the flight of birds",
        options: [
          "stremlined shape",
          "presence of poewerful muscles",
          "reduced body weight",
          "broad sternum",
          "webbed feet",
        ],
        ans: "e",
        userAnswer: null,
      },
      {
        id: 6,
        question: "In mammals, the function of the sebaceous gland is to",
        options: [
          "produce sweat",
          "secrete sodium",
          "secrete water",
          "produce an oily substance",
          "manufacture vitamin",
          "for the skin",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 7,
        question:
          "For effective functioning of a bird's quill feather, hooks fits on the ridges of the",
        options: ["vane", "rachis", "barbules", "barbs"],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 8,
        question: "A feature which adapts birds to filght is the possession of",
        options: [
          "scaly legs",
          "liht bones",
          "two walkin legs",
          "a pointed beak",
        ],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 9,
        question: "In which of the following oraisms would glycogen be stored?",
        options: ["spirogyra", "chamydomonas", "rattus", "magnifera"],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 10,
        question:
          "Birds maintain their body temperature with the help of their",
        options: [
          "blood which maintains constant temperature",
          "feathers which cover the body skin which coserves moisture",
          "veins which transport fluid of constan temperature to all body tissues.",
        ],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 11,
        question:
          "The mammalian organ which as a digestive and as an endocrine organ is",
        options: ["esophagus", "liver", "pancreas", "spleem"],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 12,
        question: "A distinguishing feature of mammals is the possession of",
        options: ["skin", "scale", "nail", "hair"],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 13,
        question:
          "In dissection, the rib cage of a mammal has o be opened in order to expose the",
        options: ["diaphragm", "liver", "heart", "sternum"],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 14,
        question:
          "In mammals, the organ which performs disgestive and endocrine function is the",
        options: ["liver", "pancreas", "gastric gland", "salivary gland"],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 15,
        question:
          "A characteristics of vertebrates tha is unique to mammals is",
        options: [
          "the presence or pentadacyl limbs",
          "parental care",
          "the possession of scrotum",
          "pulmonary circulation",
        ],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 16,
        question:
          "Complex social behaviour and oraganization are found mostly in",
        options: ["insecs", "birds", "reptiles", "mammals"],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 17,
        question: "Viviparity occurs mainly in the ",
        options: ["mammals", "reptiles", "Aves", "amphibians"],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 18,
        question:
          "Which of the following pairs of organs is located in the anterior half of the mammalian body cavity?",
        options: [
          "Kidneys and lungs",
          "heart and ovary",
          "lungs and hearts",
          "kidneys and heart",
        ],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 19,
        question: "A peculiar characteristics of mammals is that they",
        options: [
          "have teeth",
          "are warm-blooded",
          "have lungs",
          "sebaceous glands",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 20,
        question:
          "The eggs of birds contain relatively larger quantities of yolk than those of amphibians and reptiles because birds are",
        options: [
          "generally bigger in size",
          "embryonic development is longer in birds",
          "those of birds are fertilized internally",
          "birds lay shelled eggs",
        ],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 21,
        question:
          "A characteristic that exemplifies the evolutionary advancement of mammals over other vertebrates is the",
        options: [
          "Viviparous mode of reproduction",
          "Possession of paired limbs",
          "terrestrial mode of life",
          "Possession of a heart",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 22,
        question:
          "The part of a domestic fowl responsible for preventing heat loss is the",
        options: ["filoplume", "contour feather", "down feather", "quill"],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 23,
        question: "Parental care is exhibited by",
        options: ["snails", "earthworms", "birds", "toads"],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 24,
        question: "In which of the following possesses mammary gland?",
        options: ["Dogfish", "Whale", "Shark", "Catfish"],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 25,
        question:
          "In which of the following groups of vertebrates is parental care mostly exhibited?",
        options: ["Aves", "Mammalia", "Reptilia", "Amphibia"],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 26,
        question:
          "The feature that links birds to reptiles in evolution is the possession of",
        options: ["feathers", "beak", "skeleton", "scales"],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 27,
        question:
          "Which of the following types of feathers is used for flight in birds?",
        options: ["filoplume", "covert", "down", "Quill"],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 28,
        question: "The largest amount of yolk is found in the egg of",
        options: ["amphibians", "pisces", "reptiles", "aves"],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 29,
        question: "In which of the following organisms would glycogen stored?",
        options: ["Spirogyra", "Chlamydomonas", "Ratus", "magnifera"],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 30,
        question: "A distinguishing feature of mammals is the possession of",
        options: ["skin", "scale", "nail", "hair"],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 31,
        question: "Terrestrial vertebrates respire with the aid of",
        options: ["Gills", "Lungs", "Skin", "Nostril"],
        ans: "b",
        userAnswer: null,
      },
    ],
  },

  {
    topic: "Plant Nutrition",
    questions: [
      {
        id: 1,
        question: "The oxygen given off during he process is dervived from",
        options: ["sunlight", "chlorophyll", "carbon dioxide", "atmosphere"],
        ans: "e",
        userAnswer: null,
      },
      {
        id: 2,
        question:
          "Which of these elements is required by plants in small quanities only?",
        options: ["boron", "nitrogen", "phosphorus", "magnesium", "potassium"],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 3,
        question: "Which of theses is a direct photosynthetic product?",
        options: ["glucose", "starch", "protein", "fats", "laex"],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 4,
        question: "An organism which lives on the remains of a dead plant is",
        options: [
          "an endo parasite",
          "a saprophyte",
          "commensal",
          "a symbiont",
          "an eco parasie",
        ],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 5,
        question:
          "Which of the substance listed below is a race element for plants?",
        options: ["Potassium", "Sodium", "Copper", "Phosphate", "Nitrate"],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 6,
        question:
          "Alkaline pyrogallol was used in an experimenr must have been connected with",
        options: [
          "execretion",
          "gemination",
          "ranpiration",
          "digestion",
          "photosythesis",
        ],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 7,
        question: "A green plant growing in a compost pi is feeding",
        options: [
          "holozoically",
          "parasitically",
          "saprophytically",
          "holophytically",
          "in none of the above ways",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 8,
        question: "he mushroom is an organism which feeds",
        options: [
          "parasitically",
          "saprophytically",
          "holozoically",
          "symbiotically",
          "autotrophically",
        ],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 9,
        question: "Some of the major elements required by plants are",
        options: [
          "potassium, nitrogen, phosphorus, sodium, calcium",
          "nirogen, phosphorus, molybdenum, sodium, calcium",
          "potassium, phosphorus, molybdenum, sodium, calcium",
          "poassium, nitrogen, iron, sodium, calcium",
          "potassium, nitrogen, phosphorus, sillicon, cadmium",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 10,
        question:
          "Which of the following elements are necassary for the formtion of chlorophyll in plant?",
        options: [
          "Magnesium and iron",
          "Calcium and potassium",
          "Calcium and sulphur",
          "Potassium and phosphorus",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 11,
        question:
          "Which of the following statements is NOT true of insectivorous plants?",
        options: [
          "They obtain part of heir food by trapping and feeding on insects",
          "They atract insects simply because of pollution",
          "They can grow in soil poor in ntrogenous salts",
          "They can supplement the nitrogen supply by feeding on insects",
          "Examples include butterworts, Sundews and pitcher plants",
        ],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 12,
        question:
          "A young plan showing yellow leaves is likely to be deficient in",
        options: ["calcium", "magnesium", "potassium", "boron", "molybdenum"],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 13,
        question:
          "Oxygen liberated during photosynthesis has been demonstrated to come from",
        options: ["carbon dioxide", "air", "water", "chlorophyll"],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 14,
        question:
          "In demonstrating the importance of mineral elements in the plants, tthe culture bottle must be darkened to",
        options: [
          "prevent algal growth in culture solution",
          "allow root growth",
          "prevent breakdown of mineral elements",
          "prevent phoosythesis in the root",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 15,
        question:
          "In the standard experiment to show that oxygen is given off during photosythesis, sodium bicarbonate is used to",
        options: [
          "neutralize the acid in water",
          "supply mineral salts o water plant",
          "supply carbondioxide for photosythesis",
          "kill microorganism in water",
        ],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 16,
        question: "If a healthy potted plan is continuous kept in dim of light",
        options: [
          "the rate of respiration may equal that of photosythesis",
          "more carbon dioxide and water are taken in",
          "respiration may be halted",
          "the volume of oxygen release iincrease",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 17,
        question:
          "The seedling in a rice field were found to have hin lanky growth with reddish leaves and poor root development. This is because te soil lacks",
        options: ["Sulphur", "Phosphorus", "Potassium", "iron"],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 18,
        question: "The first step in the process of photosynthesis is tthe",
        options: [
          "acivation of the clorophyll",
          "Photolysis of water",
          "reduction of carbondioxide",
          "formation of sugar",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 18,
        question: "The first step in the process of photosynthesis is tthe",
        options: [
          "acivation of the clorophyll",
          "Photolysis of water",
          "reduction of carbondioxide",
          "formation of sugar",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 19,
        question: "Ettiolation is caused by the influence of",
        options: ["mineral salts", "starch", "oxygen", "light"],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 20,
        question:
          "Which of the following is formed immediately afer the first product of photosynthesis?",
        options: ["lipid", "sarch", "carbondioxide", "light"],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 21,
        question:
          "Inerveinal chlorosis is normal associated with the deficiency of",
        options: ["magnesium", "poassium", "iron", "calcium"],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 22,
        question: "Carnivorous plants are usually found in area",
        options: [
          "which is deficien in nitrate",
          "which are deficient in oxygen",
          "with low PH",
          "where inects are abundant",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 23,
        question:
          "Green plants are distinguished from other living organism by their ability to",
        options: [
          "make use of water",
          "make use of oxygen",
          "respond o sunlight",
          "manufacture their own food",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 24,
        question:
          "The failure of transport and respiratory systems in plants as well as he presence oof reddish colour in stems and leaves resul from the deficiency of ",
        options: ["magnesium", "nitrogen", "potassium", "phosphorus"],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 25,
        question:
          "In a drought situation, plants suffer from water sress which could result in",
        options: [
          "reduced biochemical activities",
          "enhanced chemical activities",
          "enhance microbial activities",
          "reduced phototropic activities",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 26,
        question:
          "In an experiment to investigate the effect of nitrogen on the growth of plans, the substrate should be a medium of",
        options: ["washed and sand", "sawdust", "cow dung", "day soil"],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 27,
        question: "Trace elements are required by plants mainly for the",
        options: [
          "formation of pigments and enzymes",
          "producion of energy and hormones",
          "manufacture of proteins",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 28,
        question:
          "The manufacture of carbohydrates by plants takes place only in",
        options: [
          "the leaves",
          "the green stems",
          "chlorophyllous parts",
          "flowering plants",
        ],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 29,
        question:
          "In a water culture experiment, a plant showed poor growth and yellowing of the leaves. These may be due to deficiency of",
        options: ["copper", "iron", "magnesium", "calcium"],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 30,
        question: "The dark reaction of photosynthesis involves",
        options: [
          "fixattion of carbon (IV) oxide to give a sixcarbon sugar",
          "fixation of carbon (IV) oxide to produce glucose using ATP",
          "he fixation of carbon (IV) oxide on chlorophyll using hydrogen",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 31,
        question:
          "The modes of nutrition in Nitrobacter, Ascaris and Homo sapines respectively are",
        options: [
          "photosynthetic, parasitic, and holozoic",
          "chemosynthetic, parasitic and holozoic",
          "photosynthetic, parasiic and heterophytic",
          "chemosynthetic, heterophytic and holozoic",
        ],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 32,
        question:
          "Yellowing of leaves is a sympom associated with deficiency of",
        options: [
          "iron",
          "calcium and megnesium",
          "nirogen, sulphur and poassium",
          "sulphur, phosphorus and iron",
          "megnesium, nitrogen and iron",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 33,
        question: "A seedling grown in the dark is likely to be",
        options: ["etiolated", "dormant", "surdy", "stunted"],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 34,
        question:
          "Which of the following statements is correct about the plant experiment?",
        options: [
          "The flask must be of the conical type",
          "caustic soda can be replaced with distilled water",
          "The leaves outside the flask serve as conrol",
          "The enclosed leaf will lose its green colour",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 35,
        question: "The experimenal set-up can be used to demonstrate that",
        options: [
          "light is necessary for photosynthesis",
          "oxygen is necesary for photosynthesis",
          "phoosythesis occurs in leaves of plants",
          "carbon (IV) oxide is necessary for photosynthesis",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 36,
        question: "The dark reaction of photosynthesis involves the",
        options: [
          "reduction of crbon (IV) oxide to organic compounds",
          "release of oxygen and the splitting of water",
          "Photolysis of water and the production of starch",
          "splitting of water into hydrogen irons",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 37,
        question: "The photosythetic pigments include",
        options: [
          "chlorophyll and carotenoids",
          "chlorophyll and cytochromes",
          "melanin and heamoglobin",
          "carotenoids and heamoglobi",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 38,
        question:
          "Stunted growth and poor root development are a result of a defiiency in",
        options: ["Sulphur", "phosphorus", "calcium", "iron"],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 39,
        question: "Insectivorous plants trap nd kill their prey to derive",
        options: ["phosphorus", "calcium", "nitrogen", "zinc"],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 40,
        question:
          "Which of the following is an example of a carnivorous plant?",
        options: ["Hydra", "Bladderwort", "yeast", "spirogyra"],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 41,
        question:
          "The mode of nutrition of sundew and bladderwort can be dsecribed as",
        options: ["saprophytic", "holozpic", "chemosyntheic", "autotrophic"],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 42,
        question:
          "Chemosynthetic organisms are capable of manufacturing their food from simple inorganic substances through the process of",
        options: [
          "dentrification",
          "reduction",
          "phosphororylation",
          "oxidation",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 43,
        question:
          "In plants, which of the following is required in minute quantities for growth?",
        options: ["Copper", "Potassium", "Phosphorus", "sodium"],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 44,
        question:
          "Which of the following organisms is both parasitic and autotrophic?",
        options: ["Sundew", "Loranthus", "Rhizopus", "Tapeworm"],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 45,
        question:
          "During the manufacture of food by plant, which of the following organims use energy from the sun?",
        options: [
          "sulphur bacteria",
          "Nitrosomonas",
          "Nitrobacter sp",
          "Anabaena",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 46,
        question:
          "Plants that have special devices for trapping and digesting insects are",
        options: ["symbiotic", "parasitic", "saprophyrytic", "carnivorous"],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 47,
        question:
          "Which of the substances lised below is a race element for plants?",
        options: ["potassium", "sodium", "copper", "phosphate"],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 48,
        question:
          "When testing for the presence of sarch in a leaf, the reason for dipping the decolorized leaf in hot waer is to",
        options: [
          "detect the starch",
          "kill the leaf",
          "soften the leaf",
          "remove the chlorophyll",
        ],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 49,
        question: "Etiolation is caused by the influence of",
        options: ["minerals salts", "waer", "carbondioxide", "light"],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 50,
        question: "The oxygen release during photosynthesis comes from",
        options: ["carbon dioxide", "sunlight", "chlorophyll", "water"],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 51,
        question: "Leaf to be tested for starch is placed in alcochol to",
        options: ["soften it", "decolourize it", "harden it", "cool it"],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 52,
        question:
          "A plant that becomes pale because it does not receive enough light is said to be",
        options: ["variegated", "evergreen", "etiolaed", "malnourished"],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 53,
        question: "The type of nutrition found in Rhizopus and mushroom is",
        options: ["holozoic", "parasitic", "carnivorous", "saprophyt"],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 4,
        question: "",
        options: [""],
        ans: "",
        userAnswer: null,
      },
    ],
  },

  {
    topic: "Animal nutrition and food substances",
    questions: [
      {
        id: 4,
        question:
          "In testing for glucose, the necessary reagent and the condition under which the reagent react best are",
        options: [
          "fehling's reagent, in the cold",
          "million's reagent, boiled",
          "fehling's reagent in acid medium, heated",
          "iodine solution, boiled",
          "fehling's reagent in neural or alkaline medium, boiled",
        ],
        ans: "e",
        userAnswer: null,
      },
      {
        id: 5,
        question:
          "If benedic's solution gives a positive result in a food test, the food contains",
        options: ["sugar", "protein", "oil", "fat", "cellulose"],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 6,
        question: "The deficiency of vitamin D  leads to",
        options: ["scurvy", "pellagra", "rickets", "beriberi", "polio"],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 7,
        question:
          "Which of the substances is likely to be deficient in the diet of a personhaving goiter?",
        options: ["Potassium", "Calcium", "iodine", "Sodium", "Phosphorus"],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 8,
        question: "Kwashiorkor is caused by severe deficiency of",
        options: ["water", "oil", "drugs", "proteins", "sugars"],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 9,
        question:
          "Which of the following pairs are the products of sucrose hydrolysis?",
        options: [
          "Glucose + glucose",
          "Fructose +fructose",
          "Glucose + frucose",
          "Galactose + fructose",
          "fructose + galactose",
        ],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 10,
        question:
          "if an organic compound has its Hydrogen: Oxygen ration as 2:1, it is likely o be",
        options: [
          "a protein",
          "carbohydrate",
          "a fat",
          "a fatty acid and glycerol",
          "an amino acid",
        ],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 11,
        question:
          "A mixture of mercurous and mercuric nitrates is added to a food substance. A. white precipitate is formed which on gentle heating turns red. The food substance is",
        options: ["protein", "oil", "carbohydrate", "fat", "fatty acid"],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 12,
        question:
          "In a Biuret tes, some protein was mixed with sodium hydroxide solution which of the following chemicals should be added to the mixture for a positive result?",
        options: [
          "Mercurous",
          "Mercuric nitrate",
          "sodium carbonate",
          "Ammonium hydroxide",
        ],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 13,
        question:
          "Fehling's solution will readily change colour from blue to a reddish colour when it is",
        options: [
          "Mixed with sugar solution in the cold",
          "warmed or heated by itself",
          "mixed with reducing sugar in the cold",
          "warmed or heated with a complex solution",
          "warmed with a solution or reducing sugar",
        ],
        ans: "e",
        userAnswer: null,
      },
      {
        id: 14,
        question:
          "a food substance which produce red colouration with sudan III contains",
        options: ["protein", "sugar", "starch", "cellulose", "fat"],
        ans: "e",
        userAnswer: null,
      },
      {
        id: 15,
        question: "if calcium is deficient in food this may cause",
        options: [
          "anaemia",
          "retarded growth",
          "sterility",
          "goitre",
          "beriberi",
        ],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 16,
        question: "Which of these is a trace elements?",
        options: ["iron", "copper", "calcium", "sulphur"],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 17,
        question: "The main organic substances found in the human body are",
        options: [
          "carbohydrates, proeins and salts",
          "salts, fats and protein",
          "fats, carbohydrate and protein",
          "salts, fats and carbohydrate",
        ],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 18,
        question:
          "Which of the following elements is essential for the formation of haemoglobn?",
        options: ["sodium", "potassium", "Calcium", "iron"],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 19,
        question: "The severe deficiency of vitamin C leads to",
        options: ["Kwashiorkor", "beriberi", "pellagra", "scurvy"],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 20,
        question:
          "In addition to the high calories derived from fas and oils, they are",
        options: [
          "used in producing new cells",
          "necessary for enzyme formation",
          "used as insulators from cold",
          "required for growth",
        ],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 21,
        question:
          "The extract from a food substance reacting with sodium hydroxide and copper sulphate solutions will produce violet to purple coloration if",
        options: [
          "fats are present",
          "carbohydrate is present",
          "protein is prsent",
          "reducing sugar is present",
        ],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 22,
        question:
          "The vitamin which is important in the formation of the retina pigments is",
        options: ["vitamin A", "vitamin B", "vitamin C", "vitamin"],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 23,
        question:
          "The most important substances necessary for the mainenance of life are carbon, oxygen",
        options: [
          "hydrogen, soil and enzymes",
          "hydrogen, salt and water",
          "nitrogen, salt and soil",
          "nitrogen, salt and water",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 24,
        question:
          "The mode of nutrition in which digestion is extracellular is",
        options: ["holophytic", "parasitic", "holozoic", "saprophytic"],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 25,
        question:
          "Which of the following food substances will produce a brick red colour when warmed with benedict's solution",
        options: ["Glucose", "Starch", "Egg white", "Maltose"],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 26,
        question: "The element common to protein, carbohydrate and lipid is",
        options: ["hydrogen", "sulphur", "nitrogen", "phosphorus"],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 27,
        question:
          "Osmic acid boiled with a solution of food substance gave a black precipiate. This indicated the presence of",
        options: ["fats and oils", "proteins", "amino acids", "starch"],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 28,
        question: "Which vitamin plays an important role in blood clotting?",
        options: ["Vitamin A", "Vitamin K", "Vitamin B12", "Vitamin"],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 29,
        question:
          "A food substance was treated with a few drops of sudan III solution and a red coloration was obtain. The food contained",
        options: ["protein", "starch", "fat", "mineral salt"],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 30,
        question:
          "The elemen that is essential for the coagulation of blood is",
        options: ["potassium", "calcium", "phosphorus", "iron"],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 31,
        question:
          "In million's test, when the reagent is added to a protein food item, a white precipiate is produce which turns",
        options: [
          "blue on heating",
          "yellow on heating",
          "gren on heating",
          "red on heating",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 32,
        question: "The richest sources of Vitamin A are",
        options: [
          "palm oil and groundnut oil",
          "palm oil and carrots",
          "rice and groundnut oil",
          "oranges and carrots",
        ],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 33,
        question:
          "The production of  violet coloration, when dilue NaOH solution is added to a solution of food substance, followed by drops of 1%cuso4 SOLUTION WHILE MAKING INDICATES THE PRESENCE OF",
        options: ["protein", "carbohydrate", "fats", "reducing sugar"],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 34,
        question:
          "The greatest amount of energy will be obtained by the oxidation of 100Kg of",
        options: ["meat", "butter", "Sugar", "biscuits"],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 35,
        question: "The mode of feeding in Amoeba and Hydra is",
        options: ["heterotrophic", "holophytic", "autotrophic", "symbiotic"],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 36,
        question:
          "When specimen X is mixed with few drops of iodine solution, appearance or a blue-black colour confirms that X is",
        options: ["Galactose", "Starch", "Sucrose", "Glucose"],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 37,
        question:
          "The capture and digestion of insects by a pitcher plant is a special form of nutrition termed",
        options: [
          "Autotrophic",
          "heterotrophic",
          "chemosynthetic",
          "saprophytic",
        ],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 38,
        question: "A person that is obese must avoi meals containing",
        options: [
          "carrots and oranges",
          "margarine and butter",
          "beef and beans",
          "rice and yam",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 39,
        question: "All living cells require water because it ",
        options: [
          "it is a medium for all metabolic reactions",
          "is a medium that neutralizes acids in cells",
          "is the main source of energy for the diseases in cells",
        ],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 40,
        question: "Night-blindnes result from a deficiency of",
        options: ["Vitamain E", "Viamin A", "Vitamin K", "Vitamin C"],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 41,
        question:
          "When a mixture of a food substance and benedict's solution was warmed, the solution changed from blue to brick-red. This indicate the presence of",
        options: ["fatty acid", "sucrose", "amino acid", "reducing sugar"],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 42,
        question:
          "I Parasitism-Sundew, II Autotrophism-Amoeba, III Saprophytism-Algae, IV Heterorophism-Agama. Which of the following modes or nutrition is correctly matched with the organism that exhibits it?",
        options: ["IV", "I", "II", "III"],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 43,
        question: "Which of the following is a polysaccharide?",
        options: ["Glucose", "Sucrose", "Maltose", "Cellulose"],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 44,
        question:
          "The greatest amount of energy will be obtain by the oxidation of 100Kg of",
        options: ["meat", "butter", "sugar", "biscuits"],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 45,
        question:
          "Which of the following is lacking in the diet of a person with Kwashiorkor?",
        options: ["Proteins", "Carbohydrate", "Minerals", "Vitamin"],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 46,
        question:
          "The vitamin which is important in the formation of the retina pigment is",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "vitamin D"],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 47,
        question: "The element common to prtein, carbohydrate and lipid is",
        options: ["hydrogen", "sulphur", "nitrogen", "phosphorus"],
        ans: "a",
        userAnswer: null,
      },
    ],
  },

  {
    topic: "Digestive system, Digestive enzyme and Dentition",
    question: [
      {
        id: 1,
        question: "When proteins are broken down they also provide",
        options: ["oxygen", "carbohydrate", "energy", "amino acids", "enzyme"],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 2,
        question:
          "The mammalian stomach can carry out a number of process except",
        options: [
          "adsorbtion of glucose",
          "secretion of hydrochloric",
          "secrecion of gastric juice",
          "churning of food",
          "productiion of trypsin",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 3,
        question:
          "Which of these is terminal portion of the alimentry canal of a mammal",
        options: ["oesophangus", "somach", "rectum", "colon", "appendix"],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 4,
        question: "Which of these is not enzyme?",
        options: ["Pepsin", "Gastric", "Amylase", "Chymotrypsin", "Trypsin"],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 5,
        question: "he digestive enzymes that coagulates protein in milk is",
        options: ["pyalin", "pepsin", "renin", "trypsin", "amylase"],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 6,
        question:
          "The arrangements below are steps proein digestion. Which is the correc sequense? a-polypeptides, b-protein, c-amino acids, d-pepetones",
        options: [
          "a-->b->c->d",
          "c->d->a->d",
          "b->c->a->d",
          "b->d->a->c",
          "b->a->c->d",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 7,
        question: "Which of the following organs produces bile?",
        options: ["Gall bladder", "Pancreas", "Spleen", "Liver", "Stomach"],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 8,
        question: "Which of the food substances is digested in the stomach?",
        options: [
          "Carbohydrate",
          "Fats and oil",
          "Fats and protein",
          "Protein",
          "Carbohydrate and fats",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 9,
        question: "The kind of food use for tearing food materials is the",
        options: ["fang", "cannies", "premolar", "carnassial", "incisor"],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 10,
        question: "Milk protein is hydrolysed by",
        options: ["renin", "amylase", "lipase", "lactase", "pepsin"],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 11,
        question: "All the following are digestive enzymes except",
        options: ["bile", "lipase", "maltase", "pepsin", "ptyalin"],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 12,
        question:
          "The correct route for a piece of bread eaten by a mammals is",
        options: [
          "orqal cavity-oesophagus-ileum-rectum",
          "oral cavity-stomach-oesophagus-duodenum-ileum-rectum",
          "oral cavity-oesophagus-dudenum-stomach-ileum-rectum",
          "oral caviy oesophagus-ileum-stomach-duodenum-rectum",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 13,
        question:
          "In the enzyme reactions: starch->sugar in the presenceof amylase, starch is reffered to the",
        options: [
          "substract",
          "product",
          "enzyme-substract complex",
          "reaction mixture",
        ],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 14,
        question:
          "if a gall bladder of a man is removed by surgery, which of the following process will be seriously affected?",
        options: [
          "Digestion of fats and oil",
          "formation of urea",
          "Digestion of fats",
          "conversion of protein",
          "storage and release of urine",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 15,
        question: "The maintainace pancreas is involve with the",
        options: [
          "digestion of food only",
          "digestion and absorbtion of food",
          "digestion of food and regulation of blood sugar",
          "digetion of food production hormones and the regulation of blood sugar",
          "digestion of food and regulation of insulin",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 16,
        question:
          "Which of the following about dentition of a man is INCORRECT? Man has",
        options: [
          "more molars than incisor",
          "no diastema",
          "the same number of teeth on upper and lower jaws",
          "a total thirty two teeth",
          "a total of six molars",
        ],
        ans: "e",
        userAnswer: null,
      },
      {
        id: 17,
        question: "The mouth part of housefly are adapted for",
        options: [
          "lapping and sponging",
          "sucking and chewing",
          "piercing amd sucking",
          "chewing and lapping",
          "biting and chewing",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 18,
        question: "Which of the following statement is not true of enzyme?",
        options: [
          "They are protein",
          "They need cofactor to activate them",
          "They are sensitive to hydrogen ion",
          "They can withstand high temperature",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 19,
        question: "Pepsin is a digestive enzyme which break",
        options: [
          "cellulose into glucose molecule",
          "carbohydrate ino simple sugars",
          "protein into peptones",
          "fats ino glycerol and fatty acids",
          "surcose into glucose and fructose",
        ],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 20,
        question:
          "The removal of a man pancreas by surgeical operation can affect only he digestion of",
        options: [
          "starch",
          "starch, protein and fats",
          "oils and fats",
          "proteins",
          "carbohydrate and fats",
        ],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 21,
        question:
          "The prsence of diastema in he jawbone indicate tha the mammal lacks the tteeth suitable for",
        options: ["cutting", "chewing and tearing", "cutting and grinding"],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 22,
        question:
          "Which of the following represen the sequences of protein hydrolysis? 1. Polypeptides 2. Amino acids 3.proteins 4. Peptones",
        options: [
          "3->1->2->4",
          "3->2->>4->1",
          "3->4->2->1",
          "3->4->1->2",
          "3->1->4>2",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 23,
        question:
          "Partially digestion food ready to leave the stomach is reffered to as",
        options: ["chyme", "curd", "glycogen", "paste", "roughage"],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 24,
        question: "The three organs that are situated close to the stomach are",
        options: [
          "kidney, liver and gall bladder",
          "pancreas, liver and kindey",
          "liver, kidney and spleen",
          "gall bladder, pancreas and spleen",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 25,
        question:
          "Evidence that a tooth is a living part of the mammalian body can be found within the",
        options: ["gum", "pulp cavity", "cement", "enameal"],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 26,
        question:
          "Which of the following lis of organs is dirctly involve in nurtrition?",
        options: [
          "Oesophagus, bronchus, stomach, pancreas and anus",
          "Spleen, pharynx, duodenum, jejunum and rectum",
          "Teeth, oesophagus, ileum lungs and large intestine",
          "Salivary gland, liver, stomach, villi and colon",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 27,
        question: "If an animal has diastema, it would NOT possess",
        options: ["incisors", "canines", "premolars", "molars"],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 28,
        question:
          "If the gall bladder of a mammals is damaged, which of the following will be most seriously affected?",
        options: [
          "Glycolysis",
          "Digestion of starch",
          "Digesion of fats and oils",
          "Digestion of proteins",
        ],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 29,
        question:
          "Which of the following will be first digested if ingested at the same time?",
        options: [
          "Cooked beans",
          "Cooked rice",
          "Cod liver oil",
          "Roasted beef",
        ],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 30,
        question: "The pancreatic juice contains the enzmyes amlopsin",
        options: [
          "pepsin and trypsinogen",
          "rennin and steapsin",
          "steapsin and trypsinogen",
          "steapsin and ptyalin",
        ],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 31,
        question:
          "The organ which secrets digestive enzymes as well as hormone is the",
        options: ["liver", "salivary gland", "pancreas", "spleen"],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 32,
        question: "The villus in the small intestine is significant because it",
        options: [
          "increase the surface area for absorbtion",
          "increase the surface area for digestion",
          "assist in mixing digestion food",
          "assist in filtering undigested food",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 33,
        question: "One of the accessory organs of the digestive system is the",
        options: ["kidney", "spleen", "liver", "lung"],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 34,
        question: "The crown of the mammalian tooth is covered with",
        options: ["cement", "dentine", "caries", "enamel"],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 35,
        question: "hich enzymes are contained in the pancreatic juice?",
        options: [
          "Ptyalin, lipase and pepsin",
          "Malase, erepsin and trypsin",
          "Rennin, sucrase and lipase",
          "Amylase, lipase and trypsin",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 36,
        question:
          "The end product of the digestion of fats and oils in mammals are",
        options: [
          "maltose and fatty acids",
          "amino acids and glucose",
          "fatty acids and fructose",
          "fatty acids and glycerin",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 37,
        question:
          "The activity of ptyalin is likely to decrease with an increase in the concentration of",
        options: ["oxygen", "starch", "protein", "acid"],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 38,
        question: "The part of the stomach nearer the gulle is called the",
        options: [
          "epiglottis",
          "cardiac sphincter",
          "duodenum",
          "pylosic sphincter",
        ],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 39,
        question:
          "The group of insects tha have mouth pars adaped for both piercing and sucking is",
        options: [
          "cockroaches, aphids and mosquitoes",
          "aphids, houseflies and moths",
          "mosquitoes, tsese flies and aphids",
          "aphids, beetle and grasshopper",
        ],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 40,
        question: "The enzyme invertase will hudrolyze surcose to give",
        options: [
          "maltase and glucose",
          "glycerol and fatty acids",
          "glucose and fructose",
          "mannose and galactose",
        ],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 41,
        question:
          "The carnassials teeth of a carnivorous animal consists of the",
        options: [
          "last upper premolar and the first lower molar",
          "upper molar and the last lower molar",
          "first upper premolar and the first lower molar",
          "first upper molar and the firs lower molar",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 42,
        question:
          "Examples of organisms in which exracellular digesion occurs are",
        options: [
          "Fungus, loranthus and housefly",
          "Rhizopus, sponges and earthworm",
          "Roundworm, tapeworm and Hydra",
          "Rhizopus, housefly and Hydra",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 43,
        question:
          "The organ located within the duodenal loop in he mammal is the",
        options: ["spleen", "pancreas", "liver", "gall bladder"],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 44,
        question:
          "The part of mammalian digestive system where absorption of nutrients take place is the",
        options: ["illeum", "colon", "oesophagus", "duodenum"],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 45,
        question:
          "An insect with a mandibulate mouth part will obtain its food by",
        options: [
          "biting and chewing",
          "chewing and sucking",
          "chewing",
          "sucking",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 46,
        question: "The gall bladder of a mammal has a duct connected to the",
        options: ["liver", "duodenum", "small intestine", "pancreas"],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 47,
        question:
          "The breakdown of fats and oils into simpler adsorbable compounds is catalyzes by enzymes called",
        options: ["lipases", "hydrolases", "amylases", "peptidases"],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 48,
        question: "Rodents gnaw on food with their",
        options: [
          "molar teeth",
          "strong jaws",
          "flat-ridged teeth",
          "chisellike front teeh",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 49,
        question: "The pancreas secretes enzymes for the digestion of",
        options: [
          "fats, protein and carbohydrate",
          "fats, vitamin and celluose",
          "fats, carbohydrate and vitamins",
          "proteins, celluose and minerals",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 50,
        question: "The order of passasge of food in the digestive system is",
        options: [
          "illeum-caecumlarge intenstine-rectum",
          "ileum-colon-caecum-rectum",
          "large intestine-illeum-rectum",
          "colon-caecum-ileum-rectum",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 51,
        question:
          "In the alimentary system of a bird, the function of teeh is carried out by",
        options: ["crop", "beak", "gizzard", "tongue"],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 52,
        question: "Chewing the cud is an adaptation peculiar to",
        options: ["herbivores", "omnivores", "rodents", "ruminats"],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 53,
        question:
          "The part of alimentary system of a bird where food is ground into small particles is the",
        options: ["cloaco", "stomach", "crop", "gizzard"],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 54,
        question: "The part of the human gut that has an aidic content is the",
        options: ["duodenum", "ileum", "colon", "stomach"],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 55,
        question:
          "The conversion of a nutrien ino a molecule in the body of a consumer is referred to as",
        options: ["absorption", "inhibition", "digestion", "assimilation"],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 56,
        question:
          "I. Test tube containing cane sugar and water. II. Test tube containing cane sugar and dilute acid. III. Test tube containing cane sugar and its degrading enzyme. In which of the test tubes will glucose be detected after complete hydrolysis?",
        options: [
          "I only",
          "I, II, and, III",
          "I and II only",
          "II and III only",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 57,
        question:
          "I. Test tube containing cane sugar and water, II. Test tube containing cane sugar and dilute acid, III. Test tube containing cane sugar and its degrading enzyme. The enzyme involved in the hydrolysis is",
        options: ["sucrase", "maltase", "rennin", "erepsin"],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 58,
        question: "An example of a filer-feeding animal is",
        options: ["whale", "mosquito", "shark", "butterfly"],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 59,
        question:
          "A function of the hydrochloric acid produced in the human stomach during digestion is to",
        options: [
          "neutralise the effect of bile",
          "coagulate milk protein and emulsify fats",
          "stop the action of ptyalin",
          "break up food into smaller particles",
        ],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 60,
        question:
          "The process in which complex substances are broken down into simpler ones is referred to as",
        options: ["catabolism", "metabolism", "tropism", "anabolism"],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 61,
        question: "The enzyme that is present in the saliva is",
        options: ["lipase", "pepsin", "ptyalin", "rennin"],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 62,
        question:
          "Which of the following organs regulates the amount of amino acids and glucose in the body?",
        options: ["kidney", "liver", "pancreas", "spleen"],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 63,
        question: "Which of the following animal has homodont dentition?",
        options: ["Rat", "Man", "Lizard", "Pigeon"],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 64,
        question:
          "he activity of ptyalin is likely to decrease with an increase in the concentration of",
        options: ["oxygen", "starch", "protein", "acid"],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 65,
        question: "The hepatic portal vein is unique because it",
        options: [
          "carries deoxygenated blood",
          "begins and ends with capillaries",
          "is the largest vein in mammals",
          "carries degested food",
        ],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 66,
        question: "The degestive enyme found in the ileum is",
        options: ["trypsin", "pepsin", "erepsin", "renin"],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 67,
        question: "Which organs produces bile in the human body?",
        options: ["liver", "gall bladder", "kidney", "pancreas"],
        ans: "a",
        userAnswer: null,
      },
    ],
  },

  {
    topic: "Supporting Tissues In Plants And Movement",
    question: [
      {
        id: 1,
        question: "One of the functions of the xylem is",
        options: [
          "strengthening the stem",
          "manufacturing food",
          "reducing loss of water",
          "conducting manufactured food",
          "storing unused sugar",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 2,
        question: "The cilia in paramecium are used for",
        options: [
          "respiring",
          "locomotion",
          "protection",
          "regulating food intake",
          "excretion",
        ],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 3,
        question:
          "In a phototrophic experiment, young seedlings in a box were subjected to light from one direction. The seedlings continued to grow erect. Which of the followin statement is correct?",
        options: [
          "Only the tips of the seedling received light",
          "The light was not strong enough",
          "The seedlings were rather too young",
          "The tips of the seedling may have been covered",
          "The box containing the seedling should have been placed on a laboratory bench",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 4,
        question:
          "Which of these tissues severs the function of support and water conduction?",
        options: [
          "Parenchyma",
          "collenchyma",
          "sclerenchyma",
          "xylem",
          "phloem",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 5,
        question:
          "The tips of some rice seedlings were cut off while some were left intact. Both were covered with a container which had only one small hole to allow light through. After twenty-four hours it was observed that",
        options: [
          "the cut tips bent away from the light",
          "the cut tips bent towards source of light",
          "the intact tips bent away from the light",
          "the intact tips bent towards light",
          "both tips bent away from light",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 6,
        question:
          "Whih of these instruments is used to demonstrate the response of roots and shoots to gravity?",
        options: ["klinostat", "Manometer", "Potometer", "Photometer"],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 7,
        question:
          "Growing yam tendrils climb for support. This growth response is",
        options: [
          "haptotropism",
          "geotropism",
          "phototropism",
          "hydrotropism",
          "chemotropism",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 8,
        question: "Roots of plants are normally",
        options: [
          "positively phototrophic",
          "negatively geotropic",
          "negatively hydrotrophic",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 9,
        question:
          "The movement of ar of a plant in response to external stimulus of no particular direction",
        options: [
          "taxism",
          "tropism",
          "Haptotropic movement",
          "nastic movement",
          "phototropism",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 10,
        question:
          "In a positive phototropic response of a coleoptile, the region of greatest curvature is brought about by",
        options: [
          "movement of auxin away from the region of curvature",
          "even distribution of auxins in all parts of the coleoptile",
          "inhibition of growth by auxins in the region of smaller curvature",
          "concentrationof auxins in the region of curvature",
          "absence of auxins in he coleoptitle",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 11,
        question: "Nastic movement is",
        options: [
          "response to light stimulus",
          "non-directional",
          "directional",
          "response to internal stimulus",
        ],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 12,
        question:
          "An instrument that can be used to demonstrate phototropism and geotropism in plants is the",
        options: ["auxanometer", "photometer", "klinostat", "photometer"],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 13,
        question:
          "The growth of a coleoptile towards unilateral light source is due to",
        options: [
          "rapid rate of photosythesis",
          "unequal distribution of auxins",
          "the effects of photolysis",
        ],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 14,
        question: "Scleranchyma cells are lignified to",
        options: [
          "strengthen and support the plant",
          "transport synthesized food",
          "conduct water and salt",
          "protect the plant from injury",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 15,
        question: "Parenchyma cells severs as supporting tissues when ",
        options: [
          "they contain chloroplasts",
          "have crystals",
          "become flaccid",
          "become turgid",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 16,
        question: "Taxism differs from tropism because",
        options: [
          "The whole orgganism is affected",
          "it is a directional movement",
          "it is a response to multi-directional stimuli",
          "part of the organism is affected",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 17,
        question:
          "The movement of the whole organism to an external stimulus is termed",
        options: [
          "tropism",
          "a taxis",
          "a nastic movement",
          "a phototrophic movement",
        ],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 18,
        question:
          "The response shown by the tips of the root and shoot of a plant to he stimulus of gravity is",
        options: [
          "haptotropism",
          "photototropism",
          "hydrotropism",
          "geotropism",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 19,
        question: "The phloem parenchyma is sometimes used for",
        options: [
          "food storage",
          "supporting the stem",
          "production of the sieve tube",
          "transporing water",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 20,
        question:
          "When a healthy shoot of a flowering plant is illuminated from one side, auxin accumulate on the",
        options: [
          "non-illuminated side of the shoot",
          "illuminated side of the shoot",
          "upper side of the shoot",
          "lower side of the shoot",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 21,
        question:
          "A plant parenchyma cell also acts as a suppoeting tissue when it",
        options: [
          "becomes flaccid",
          "contains crystals",
          "becomes turgid",
          "is pigmented",
        ],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 22,
        question:
          "The ability of a living organism to detect and respond to changes in the enviroment is referred to as",
        options: ["growth", "taxis", "locomotion", "irritability"],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 23,
        question:
          "The movement of part of a plant in response to external stimulus of no particular drection is",
        options: [
          "taxism",
          "tropism",
          "haptotropic movement",
          "nastic movement",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 24,
        question: "Nastic movement is",
        options: [
          "response to light stimulus",
          "non-directional",
          "directional",
          "response to internal stimulus",
        ],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 25,
        question:
          "The ability of a living organism to detect and respond to changes in the environment is referred to as",
        options: ["locomotion", "taxis", "irritability", "growth"],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 26,
        question:
          "The movement response of a cockroach away from a light source is",
        options: [
          "negative phototaxism",
          "positive phototaxism",
          "negative phototropism",
          "positive phototropism",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 27,
        question: "The outer-most tissue of the herbaceous roots is the",
        options: ["cuticle", "pericycle", "epidermis", "endodermis"],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 28,
        question:
          "The respective tissues that transport water and manufactured food in plants are",
        options: [
          "xylem and phloem",
          "phloem and tracheid",
          "phloem and xylem",
          "xylem and tracheid",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 29,
        question:
          "The movement of the whole organism to an external stimulus is termed",
        options: ["tropism", "a taxis", "a nastic movement", "a phototropic"],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 30,
        question:
          "In the root vascular system, the stele is directly surrounded by the",
        options: ["pericycle", "cortex", "endodermis", "parenchyma"],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 31,
        question: "A plant tissue that carries water and mineral salt is the",
        options: ["xylem", "cortex", "phloem", "cambium"],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 32,
        question:
          "Which of these instruments is used to demonstrate the response of roots and shoots to gravity?",
        options: ["Klimostat", "Manometer", "potometer", "photometer"],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 33,
        question:
          "Which of the following can be used in demonstrating Geotropism and Phototropism?",
        options: ["klinostat", "potometer", "seechi Disc", "Anemometer"],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 34,
        question: "Growth response of a plant to light gradient is known as",
        options: [
          "nastic movement",
          "geotropism",
          "hydrotropism",
          "phototropism",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 35,
        question: "Shoot of a plant is",
        options: [
          "positive phototropism and negative geotropism",
          "Negaive phototropism and positive geotropism",
          "Negative phototropism and Neagtive geotropism",
          "Positive phototropism and positive geotropism",
        ],
        ans: "a",
        userAnswer: null,
      },
    ],
  },

  {
    topic: "Supporting Tissues In Animals",
    questions: [
      {
        id: 1,
        question:
          "Which of these skeletons is most appropriate to the cockroach?",
        options: [
          "Hydrostatic skeleton",
          "Exoskeleton",
          "Endoskeleton",
          "Cartilaginous skeleton",
          "Bony skeleton",
        ],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 2,
        question:
          "Which of these is not associated with the movement of toad, reptile or birds?",
        options: ["Hopping", "Bopping", "Flapping", "Gliding", "Pecking"],
        ans: "e",
        userAnswer: null,
      },
      {
        id: 3,
        question:
          "Which of the structures listed below is peculiar to the Axis vertebra?",
        options: [
          "Odontoid process",
          "Anterior zygapopnysis",
          "posterior zygapophysis",
          "lateral spine",
          "centrum",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 4,
        question: "The joint between the atlas and axis vertebrae allows for",
        options: [
          "rotary movements only",
          "up and down or nodding movements only",
          "rotatory and nodding movements",
          "no movement at all",
          "slight movement",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 5,
        question:
          "In animals, cilia, flagella, pseudopodia, and chaetae, can be used for",
        options: [
          "reprodution",
          "fightting enemies",
          "attachment to plant",
          "locomotion",
          "locating",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 6,
        question: "The tissue which connects a muscle to a bone is a",
        options: [
          "cartilage",
          "Muscle fibre",
          "Tendon",
          "ligament",
          "connecting fibre",
        ],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 7,
        question: "The thoracic vertebrae of a mammal are characterized by the",
        options: [
          "vertebraterial canal",
          "prominent neural arch",
          "prominent transverse process",
          "prominent neural spine",
          "prominent centrum",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 8,
        question: "Which vertebra has a projection called odontoid process?",
        options: ["Atlas", "Axis", "Thoracic", "Caudal"],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 9,
        question:
          "Starting from the skull end, the vertebrae are arranged in the following order:",
        options: [
          "axis, atlas, cervical, thoracic and lumbar",
          "atlas, cervical, axis, horacic and lumbar",
          "atlas, axis, thoracic, cervical and lumbar",
          "atlas, horacic, cervical, axis and lumbar",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 10,
        question:
          "Which of the following types of vertebrae occuring equal numbers n the rabbit, rat and man?",
        options: ["Caudal", "Thoracic", "Lumbar", "Cervcal", "Sacral"],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 11,
        question:
          "The axial skeleton of a mammal does not include the bones of the",
        options: ["skull", "tail", "limbs", "back", "neck"],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 12,
        question: "The appendicular skeleton is made up of the",
        options: [
          "limbs",
          "skull and limbs",
          "phalanges",
          "ulna and radius",
          "girdles and limbs",
        ],
        ans: "e",
        userAnswer: null,
      },
      {
        id: 13,
        question:
          "Two main distinguishing features of the cervical vertebra are the presence of",
        options: [
          "short neural spine and vertebrarterial canal",
          "prezygapophysis and cervical ribs",
          "large centrum and cervical ribs",
          "vertebrarterial canal and large centrum",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 14,
        question:
          "The lumbar vertebra when compared with a thoracic vertebra has a",
        options: [
          "longer neural spine",
          "wider neural canal",
          "thicker centrum",
          "shorter transverse process",
        ],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 15,
        question: "Muscles are indirectly attached to bones by means of",
        options: ["Ligaments", "membranes", "tendons", "sutures"],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 16,
        question: "Which of the following vertebrate lays a centrum?",
        options: ["Atlas", "Axis", "Thoracic", "Lumbar"],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 17,
        question:
          "The bones of the neck on which the skull rests is known as the",
        options: ["odontoid process", "axis", "atlas", "occipital condyle"],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 18,
        question:
          "Which of the following is the correct order of the vertebrae along he spinal column?",
        options: [
          "Axis atlas tthoracic lumbar cervical sacral",
          "Atlas cervica axis thoracic lumbar sacra",
          "Atlas axis cervical thoracic lumbar sacral",
          "Axis cervical thoracic sacral lumbar",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 19,
        question: "During the bending of the arm, the biceps muscle",
        options: [
          "Contracts and he rieps muscle relaxes",
          "relaxes and the triceps muscle contracts",
          "and the triceps muscle contract",
          "and the triceps muscle relax",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 20,
        question:
          "A band of connective tissue linking two bones in a joint is known as",
        options: ["tendon", "cartilage", "synovial membrane", "ligament"],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 21,
        question:
          "The appendicular skeleton is composed of the pectoral girdle",
        options: [
          "pelvic girdle, fore and hind limbs",
          "pelvic girdle and fore limbs",
          "lumbar vertebrae and pelvic girdle",
          "lumbar vertebrae, fore and hind limbs",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 22,
        question:
          "Which of the following is not a function of the mammalian skeleton?",
        options: ["protection", "Respiration", "Transportation", "support"],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 23,
        question: "The organism that has a hydrostatic skeleton is",
        options: ["Tilapia", "Hydra", "Mosquito larva", "Earthworm"],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 24,
        question:
          "The chitin in the exoskeleton or many arthropod is strengthened by",
        options: ["alcium compounds", "organic salts", "lipids", "proteins"],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 25,
        question: "The scapula and the ischium are part of the",
        options: [
          "pectoral girdle",
          "pelvic girrdle",
          "appendicular skeleton",
          "ind limb",
        ],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 26,
        question:
          "The transition from amphibians to mammals involves the limbs becoming are applied to support the weight more effectivel requiring modifications in the",
        options: [
          "collar bones and coccyx",
          "pectoral and pelvic girdles",
          "scapulae and claicles",
          "vertebrae and sternum",
        ],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 27,
        question:
          "Hydrostatic skeleton is the type of supporting system found in",
        options: ["mammals", "reptiles", "oligochaete", "arthopods"],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 28,
        question:
          "A unique characteristic of the cervical vetebrae is the process of",
        options: [
          "large centrum",
          "long transverse processes",
          "zygapophysis",
          "vertebrarterial canal",
        ],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 29,
        question: "The axial skeleton is the",
        options: [
          "skull, ribs, vertebral column and beast bone",
          "skull, humerus, vertebral column and ribs",
          "breast bone, cavicle, ribs and vertebral column",
          "femur, sternum, ulna and skull",
        ],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 30,
        question:
          "The two halves of the pelvic girdle are joined together at the",
        options: ["ileum", "pubis", "obturator foramen", "pubis symphysis"],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 31,
        question:
          "The main structures in vertebrates that supports and protects the body is the",
        options: ["ligament", "muscle", "joint", "skeleton"],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 32,
        question:
          "The chitin in the exoskeleton of many anthropods is strengthened by",
        options: ["proteins", "calcium compounds", "organic salts", "lipids"],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 33,
        question:
          "Which of these is not associated with the movement of the toad, reptile or birds?",
        options: ["Hopping", "Bopping", "Flapping", "Gliding"],
        ans: null,
        userAnswer: null,
      },
      {
        id: 34,
        question: "The organism that has a hydrostatic skeleton is",
        options: ["Tilapia", "Hydra", "Mosquito larva", "Earthworm"],
        ans: "d",
        userAnswer: null,
      },
      {
        id: 35,
        question: "Suture joint is found in the",
        options: ["hip", "ankle", "skull", "elbow"],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 36,
        question: "The vertebrae that allows the skull to nod and rotate are",
        options: [
          "axis and cervical",
          "atlas and thoracic",
          "axis and atlas",
          "atlas and cervical",
        ],
        ans: "c",
        userAnswer: null,
      },
      {
        id: 37,
        question: "Which of the following vertebrae is entirely centrum?",
        options: ["cervical", "caudal", "thoracic", "lumbar"],
        ans: "b",
        userAnswer: null,
      },
      {
        id: 38,
        question:
          "The structure that protects articulating surfaces of bones at a joint to prevent it from being worn out is?",
        options: ["cartilage", "synovial membrane", "Synovial fluid", "Tendon"],
        ans: "a",
        userAnswer: null,
      },
      {
        id: 39,
        question:
          "The vertebrate with a large centrum and support most of the body weight is the",
        options: [
          "sacrum",
          "cervical vertebrate",
          "thoracic vertebrate",
          "lumber bvertebrae",
        ],
        ans: "d",
        userAnswer: null,
      },
    ],
  },
];

export { biologyQuestions }; // making sense now.
