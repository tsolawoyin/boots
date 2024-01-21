const {A, B, C, D, E, c} = {A: "A", B: "B", C: "C", D: "D", E: "E", c:"C" } // should work perfectly

let biologyQuestions = [
    {
        topic: "The Cell Structure And Functions Of Cell Components",
        questions:[
            {
                id:1,
                question: "Which of the following is characteristic of the animal cell?",
                options: ["presence of chloroplasts", "Possession of a cellulose cell wall", "Absence of large vacuoles", "Presence of large vacuoles", "Presence of chromosomes"],
                ans: C,
            },
            {
                id:2,
                question: "The vacuole of a plant cell is:",
                options: ["A large empty space", "Smaller than that of an animal cell", "Filled with air", "An ordinary vacuum", "Surrounded by a membrane"],
                ans: E,
            },
            {
                id:3,
                question: "The part of the cell solely responsible for respiration is the:",
                options: ["Nucleus", "Nucleolus", "Mitochondria", "Golgi apparatus", "Endoplasmic reticulum"],
                ans: C,
            },
            {
                id:4,
                question: "Which of these combinations is common to plant and animal cells?",
                options: ["Centriole, middle lamella, Golgi bodies, mitochondrion", "Cytoplasm, sap vacuole, starch grains, leucoplasts", "Plasma membranes, chromosome, mitochondria, lysosomes", "Nucleus, nucleolus, cellulose cell wall, endoplasmic reticulum", "Cytoplasm, centriole, cell wall, nucleolus"],
                ans: C,
            },
            {
                id:5,
                question: "Where is energy produced in a cell?",
                options: ["Nucleus", "Nucleolus", "Lysosomes", "Chloroplast", "Mitochondria"],
                ans: E,
            },
            {
                id:6,
                question: "Which of the following cell constituents is NOT common to both plants and animals?",
                options: ["Mitochondria", "Chloroplasts", "Ribosomes", "Golgi apparatus", "Vacuoles"],
                ans: B,
            },
            {
                id:7,
                question: "The function of endoplasmic reticulum is:",
                options: ["Protein synthesis", "Intracellular transport of materials", "Digestion and destruction of foreign bodies", "Production of energy from glucose"],
                ans: B,
            },
            {
                id:8,
                question: "The oxidative part of the respiration process takes place in the:",
                options: ["Mitochondria", "Ribosomes", "endoplasmic reticulum", "Golgi bodies"],
                ans: A,
            },
            {
                id:9,
                question: "The function of ribosomes in cells is:",
                options: ["Protein synthesis", "Starch synthesis", "Transport of materials", "Lipid storage"],
                ans: A,
            },
            {
                id:10,
                question: "Which of the following structures is common to Euglena, white blood cell, and Amoeba?",
                options: ["Vacuole", "Cell wall", "Cilla", "Cell membrane"],
                ans: D,
            },
            // this is an image problem
            // {
            //     id:11,
            //     question: "Which of the labelled parts of the cell contains ribonucleic acid?",
            //     options: ["'1", '2', "3", "5"],
            //     ans: null,
            // },
            {
                id:12,
                question: "The organelle involved in tissue respiration is the:",
                options: ["Endoplasmic reticulum", "Ribosome", "Golgi body", "Mitochondrion"],
                ans: D,
            },
            {
                id:13,
                question: "Which of the following organelles are likely to be present in cells that are actively respiring and photosynthesizing?",
                options: ["Mitochondria and chloroplast", "Lysosomes and ribosomes", "Nucleolus and centrioles", "Golgi apparatus and endoplasmic reticulum"],
                ans: A,
            },
            {
                id:14,
                question: "The membrane surrounding the vacuole in a plant cell is called the:",
                options: ["Plasmalemma", "Tonoplast", "Nuclear membrane", "Endoplasmic reticulum"],
                ans: B,
            },
            {
                id:15,
                question: "The nucleus is considered the control organelle of a cell because it:",
                options: ["Contains the genetic material", "Contains the nuclear sap", "Is bounded by the nuclear membrane", "Is located at the centre of the cell "],
                ans: A,
            },
            {
                id:16,
                question: "The structure that is most commonly identified in all living cells under the light microscope is the:",
                options: ["Mitochondrion", "Chloropplast", "Nucleus", "Ribosome"],
                ans: C,
            },
            // TO ASK CHATGPT
            {
                id:17,
                question: "In plant cells, the chloroplasts are located:",
                options: ["Inside the cell wall", "Outside the protoplasm", "Within the vacuole", "Within the cytoplasm"],
                ans: D,
            },
            {
                id:18,
                question: "The structures found only in plant cells are:",
                options: ["Cell membrane and crytoplasms", "Chromatin and nucleolus", "Cell wall and chloroplast", "Cell membrabne and lysosome"],
                ans: C,
            },
            {
                id:19,
                question: "The organelle common to both plant and animal cell is the:",
                options: ["Centriole", "Plasmalemma", "Cell wall", "Chloroplast"],
                ans: B,
            },
            {
                id:20,
                question: "Which of the following is likely to have a higher concentration of mitochondria?",
                options: ["Sperm cell", "Egg cell", "Red blood cell", "White blood cell"],
                ans: A,
            },
            {
                id:21,
                question: "The role of the Golgi complex in an eukaryotic cell is to:",
                options: ["Conduction in and out of the cell", "Transport genetic material out of the cell", "provide attachment for ribosonmal granules", "Transport organic materiaL in and out of the cell"],
                ans: D,
            },
            // the reason I go for cell wall is that I don't think onions have chloroplasts
            {
                id:22,
                question: "The cell of an onion bulb can be differentiated from a check cell by the presence of:",
                options: ["Plasmalemma", "Chloroplast", "Cell wall", "Nucleus"],
                ans: C,
            }, 
            // this one is kind of straight forward...
            // sleeping at home is not possible anymore... 
            // we stay at raph till God knows when
            {
                id:23,
                question: "In a cell, the genes are carried:",
                options: ["Nuclear membranes", "Chromatin threads", "Lysosomes", "Mitochondria"],
                ans: B,
            }, 
            {
                // needs some research here
                id:24,
                question: "Which of the following characterizes a mature plant cell?",
                options: ["The nucleus is pushed to the centre of the cell", "The cell wall is made up of the cellulose", "The nucleus is small and irregular in shape", "The cytoplasm fill up the entire cell space"],
                ans: D,
            }, 
            {
                id:25,
                question: "Which of the following is NOT a function of the nucleus of a cell?",
                options: ["It translates genetic information for the manufacture of proteins", "It stores and carries hereditary information", "It is a reservoir of energy for the cell", "It controls the life process of the cell"],
                ans: C,
            }, 
            {
                id:26,
                question: "The organelles present in the cells that are actively respiring and photosythesizing are:",
                options: ["Golgi appararatus and endolplasmic reticulum", "Nucleus and centrioles", "Mitochondria and chloroplast", "Lysosomes and ribosomes"],
                ans: C,
            }, 
            {
                id:27,
                question: "The part of the cell solely responsible for respiraton is the:",
                options: ["Nucleus", "Nucleolus", "Mitochondria", "Golgi apparatus"],
                ans: C,
            }, 
            {
                // cytoplasm is the answer here...
                id:28,
                question: "The enzymes of the glycolytic pathways are located in the:",
                options: ["Mitochondria", "Gastric juice", "Plasma", "Cytoplasm"],
                ans: D,
            }, 
            {
                id:29,
                question: "Which of the following does a virus have in common with animal cells?",
                options: ["Nucleus", "DNA", "Glycogen", "Cytoplasm"],
                ans: B,
            }, 
            {
                id:30,
                question: "The hereditary characters in plants and animals are located on the:",
                options: ["Gene", "Nucleus", "Chromosomes", "Cell"],
                ans: C,
            }, 
            {
                id:31,
                question: "The component of the cell that determines paternity resides in the:",
                options: ["Centrosome", "Ribosome", "Nucleus", "Mitochondria"],
                ans: C,
            }, 
            {
                id:32,
                question: "The part of the cell where respiration occurs is the:",
                options: ["Mitochondria", "Ribsome", "Gogi body", "Lysosome"],
                ans: A,
            }, 
            {
                id:33,
                question: "One of the following contains digestive enzymes in the cell:",
                options: ["Endoplasmic reticulum", "Nucleus", "Lysosome", "Centrosome"],
                ans: C,
            }, 
            {
                id:34,
                question: "One of the basic differences between a plant and animal cell is?",
                options: ["Possession of chloroplast in plant, none in animal cell", "Presence of nuclear membrane in animal cell only", "Presence of cell wall in plant, none in animal cell", "Possession of nuclear membrane in plant cell only"],
                ans: A,
            }, 
            {
                id:35,
                question: "The organelle decribed as the powerhouse of the cell is the:",
                options: ["Mitochondria", "Golgi body", "Vacuole", "Nucleolus"],
                ans: A,
            }, 
            {
                id:36,
                question: "The importance of cellular respiration is to:",
                options: ["Produce NADH", "Eliminate carbon (IV) Oxide", "Produce ATP", "Eliminate glucose"],
                ans: C,
            }, 
            // red blood cells don't have nucleus
            {
                id:37,
                question: "Which of the following doesn't have a nucleus?",
                options: ["Leukocyte", "Erythrocytes", "Plasma", "Platelet"],
                ans: B,
            }, 

        ]
        
    },

    {
        topic: "Living Organisms And Level Of Organisation",
        questions: [
            {
                    id:1,
                    question: "All living organisms",
                    options: ["Photosynthesize", "Respire", "Move", "Feed", "Transpire"],
                    ans: B,
                },
            {
                    id:2,
                    question: "A group of similar cells performing the same function is",
                    options: ["An organ", "A system", "Tissue", "An organelle", "An enzyme"],

                    ans: C,
                },
            {
                    id:3,
                    question: "A tissue can best be defined as",
                    options: ["An aggregate of similar cells", "Aggregate of cells performing a similar function", "An aggregate of similar cells performing the same function", "A mixture of different cell types performing the same function"],

                    ans: C,
                },
            {
                    id:4,
                    question: "Which of the following is an organ?",
                    options: ["Guard cell", "Liver", "Xylem bundle", "Blood"],

                    ans: B,
                },
            {
                    id:5,
                    question: "Which of the following organism does not exist as a single free living cell?",
                    options: ["Paramecium", "Volvox", "Amoeba", "Chlamydomonas"],
                    ans: B,
                },
            {
                    id:6,
                    question: "An Amoeba and an unlaid chicken eggs are:",
                    options: ["Animal tissues", "Organelles", "Single cell", "Organisms"],
                    ans: C,
                },
            {
                    id:7,
                    question: "The rods in the retina of the eyes are examples of",
                    options: ["Cells", "Tissues", "Organs", "Systems"],
                    ans: A,
                },
            {
                    id:8,
                    question: "A characteristic that can possibly be shared by both living and non-living organisms is",
                    options: ["Locomotion", "Irritability", "Increase in biomass", "Increase in size"],
                    ans: D,
                },
            {
                    id:9,
                    question: "A characteristic exhibited by all living organisms is",
                    options: ["Sexual reproduction", "Aeroic respiration", "The ability to move from one place o another", "The ability to remove unwanted substances"],
                    ans: D,
                },
            {
                    id:10,
                    question: "What is the level of organization of an onion bulb?",
                    options: ["Tissue", "Organ", "Systemic", "Organismal"],
                    ans: B,
                },
            {
                    id:11,
                    question: "The lowest level of organization in living organisms is",
                    options: ["Tissue", "Organ", "Cell", "System"],
                    ans: C,
                },
            {
                    id:12,
                    question: "Which of the following is the most complex according to their cellular level of organization? ",
                    options: ["Heart", "Hair", "Euglena", "Hydra"],
                    ans: A,
                },
            {
                    id:13,
                    question: "Which of the following organisms is multicelllular? ",
                    options: ["Chlamydomonas", "Spirogyra", "Amoeba", "Euglena"],
                    ans: B,
                },
            {
                    id:14,
                    question: "Which of the following organ level of organisation?",
                    options: ["Volvox sp", "Paramecium candatum", "Hydra viridis", "Onion bulb"],
                    ans: D,
                },
            {
                    id:15,
                    question: "Which of the following is an organ?",
                    options: ["Guard cell", "Liver", "Xylem bundle", "Blood"],
                    ans: B,
                },
            {
                    id:16,
                    question: "The cell of a bacterium is described as",
                    options: ["Unicellular", "Eukaryotic", "Prokaryotic", "Multicellular"],
                    ans: C,
                },
            {
                    id:17,
                    question: "The most primitive among these is?",
                    options: ["Fern", "Flowering plants", "Fungus", "Cones"],
                    ans: D,
                },
            {
                    id:18,
                    question: "At which level of organization is mammalia heart?",
                    options: ["Tissue", "Organ", "Cell", "System"],
                    ans: B,
                },
        ]
    },

    {
        topic: "The Cell And Its Environment",
        questions: [
                {
                    id:1,
                    question: "A spirogyra cell was placed in a solution X after 1 minute the cell had been plasmolysed, solution X was",
                    options: ["Tap water", "A very strong sugar solution", "A weak sugar solution", "A very waek salt solution", "Distilled water"],

                    ans: B,
                },
                {
                    id:2,
                    question: "The movement of molecules from a region of higher concentration is to a region of lower concentration is",
                    options: ["Diffusion", "ranspiration", "Osmosis", "Translocation", "Plasmolysis"],

                    ans: A,
                },
                {
                    id:3,
                    question: "A fresh kolanut weighing 1g was put into salt solution. After 3hours, the kolanut weighed 1.2g. This simple experiment demonstrate that",
                    options: ["The salt solution is more concentrate thantyhe cell sap of the kolanut", "The cell sap of the kolanut is more concentrated than the salt soluion", "The salt solution has the same concentration as the cell sap of the Kolanut", "Kolanut cells can multiply in water", "The kolanut lost some water molecules to the salt solution"],

                    ans: B,
                },
                {
                    id:4,
                    question: "The filaments of Spirogyra were put into equal volume of sugar solution X and Y. After 5 minutes, filaments from X solution had their cell contents rounded up while those from Y were unaffected. The experiment shows that",
                    options: ["Solution X was stronger than Y", "Solution Y was stronger than X", "Spirogyra used up the sugar in solution X", "Solution X is good for stimulating sexual reproduction in Spirogyra", "Solution Y was less contaminated than X"],

                    ans: A,
                },
                {
                    id:5,
                    question: "If an isolated living cell is left in distilled water for two hours, it is likely to",
                    options: ["Lose some its water to surrounding water", " Lose all of its water to the surrounding water", "Reproduce by binary fission", "Become  more turgid", "Die due to excess water"],

                    ans: D,
                },
                {
                    id:6,
                    question: "Which of the following will NOT allow osmosis to take place?",
                    options: ["Pig's bladder", "Cellophane", "Parchment paper", "Transparent polythene", " Cow's bladder"],

                    ans: D,
                },
                {
                    id:7,
                    question: "Osmosis can be defined as the movement of",
                    options: ["molecules from solution of high concentration to low concentration", "Molecules from solution of low concentration", "Water across a semi-permeablle membrane from solution of low concentration to high concentration", "Water across a semi-permeable membrane from solution of high concentration to low concentration"],

                    ans: D,
                },
                {
                    id:8,
                    question: "When a Spirogyra cell is immersed in a salt solution more concentration han its cell sap, it",
                    options: ["Remains unchanged", "Takes up water and bust", "Absorbs a litle water", "Loses water and shrivel", "Becomes turgid"],

                    ans: D,
                },
                {
                    id:9,
                    question: "Minerals salt can be absorbed into the roots by",
                    options: ["Osmosis only", "Osmosis and diffusion", "Diffusion and active transport", "Diffusion only"],

                    ans: C,
                },
                {
                    id:10,
                    question: "The process by which a red blood cell placed in distilled water absorbs untill it bursts and released its contents into the surroundings is know as",
                    options: ["Osmosis", "Plasmolysis", "Turgidity", "Haemolysis"],

                    ans: D,
                },
                {
                    id:11,
                    question: "Salts and water are absorbed in the roots and transported to the leaves by",
                    options: ["Diffusion through the xylem tissues", "Osmosis through the phloem tissues", "Diffusion through the phloem issues", "Osmosis through the xylem tissues"],

                    ans: D,
                },
                {
                    id:12,
                    question: "When a marin fish was taken from he ocean and pu in a tank of fresh water, it died after a short period because",
                    options: ["The tank was too small compared to the large ocean", "The body cells of fish swelled and bust as a result of hypotonic fresh water", "The body cells of fish shrank as their sap was hypertonic to be fresh water"],

                    ans: B,
                },
                {
                    id:13,
                    question: "What will happen when two equal sized pieces of unripe pawpaw labelled X and Y are dropped into equal volumes of concentrated salt solution and distilled water respectively?",
                    options: ["Pawpaw X will turgid", "Both will increase in size", "Pawpaw Y will become turgid", "Both will decrease in size"],

                    ans: C,
                },
                {
                    id:14,
                    question: "A marine protozoan is likely to have no contractile vacuole mainly because the cytoplasm is",
                    options: ["Isotonic to sea water", "Hypoonic to sea water", "Imperviou to sea water"],

                    ans: A,
                },
                {
                    id:15,
                    question: "Which of the following can cause shrinkage of living cells?",
                    options: ["Deionized water", "Hypertonic solution", "Hypotonic solution", "Isotonic solution"],

                    ans: B,
                },
                {
                    id:16,
                    question: "When a cell is placed in solution and the size of the cell increases, the concentration of solution is said to be",
                    options: ["Isotonic", "Dilute", "Hypotonic", "Hypertonic"],

                    ans: C,
                },
                {
                    id:17,
                    question: "A red cell placed in distilled water undergoes haemolysis because",
                    options: ["Exosmosis", "Endo-osmosis", "Diffusion", "Capillarity"],

                    ans: B,
                },
                {
                    id:18,
                    question: "Which of the folloeing can cause shrinkage of living cells?",
                    options: ["Deionized water", "Hypotonic solution", "Isotonic solution", "Hypertonic solution"],

                    ans: D,
                },
        ]
    },

    {
        topic: "Evolution Among Viruses Monera, Protista And Fungi",
        questions: [
            {
                id:1,
                question: "Euglena may be classified as a plant because it",
                options: ["Has chloroplast", "Has a gullet", "Lives in a pond", "Possesses a flagellum", "Has a pellicle"],
                ans: A
            },
            {
                id:2,
                question: "Rhizopus (or mucor) obtains its food from dead organic matter extracellularly. It is said to be",
                options: ["A faculatative parasite", "A saprophyte", "An obligate parasite", "A commensal", "An autotroph"],
                ans: B
            },
            {
                id:3,
                question: "Which one of the following options is not true for Mucor or Rhizopus?",
                options: ["Grows on moist dead organic matter", "Is a plant", "Has cellulose cell wall", "Reproduces asexually by producing spore"],
                ans: C
            },
            {
                id:4,
                question: "Which of the following statements is not true of paramecium?",
                options: ["It is slipper-shaped", "The anterior end is blunt", "The gullet is lined with cilia", "It has an anal pore", "Its food vacuole is not stationary"],
                ans: C
            },
            {
                id:5,
                question: "One of the following statements is not true of viruses",
                options: ["They are microrganisms", "They are smaller than bacteria", "They can be seen with an ordinary light microscope", "They cause obacco disease"],
                ans: C
            },
            {
                id:6,
                question: "In Nucor or Rhizopus carbohydrate is absorbed in the form of",
                options: ["Starch", "Sucrose", "Glucose", "Glycogen", "Arabinose"],
                ans: C
            },
            {
                id:7,
                question: "In rhizopus, carbohydrate is stored in the form of",
                options: ["Glucose", "Paramylum", "Glycogen", "Starch", "Oil"],
                ans: C
            },
            {
                id:8,
                question: "In which of the following groups of animals are flagella and cilia found?",
                options: ["Flatworms", "Annelids", "Coelenterates", "Protozoa", "Nematodes"],
                ans: D
            },
            {
                id:9,
                question: "Which of the following is NOT true of Mucor? It",
                options: ["Contains chlorophyll", "Grows saprophytically", "Bears spores in sporangium", "Consists of hyphae", "Reproduces by conjugation"],
                ans: A
            },
            {
                id:10,
                question: "Viruses are regarded as non-living because they",
                options: ["Can neither reproduce asexually not sexually", "Cannot survive in their respective environments", "Do not possess characteristics that can be transmited from one generation to the next", "Can neither respire nor"],
                ans: D
            },
            {
                id:11,
                question: "Which of the following features of Euglena is found only in animals?",
                options: ["Paramylon granules", "Flagellum", "Pellicle", "Pyrenoid"],
                ans: C
            },
            {
                id:12,
                question: "The hypha of Rhizopus is said to be coenocytic because it",
                options: ["Does not contain chlorophyll", "Has no cross wall", "Is vacuolated", "Stores oil globules"],
                ans: B
            },
            {
                id:13,
                question: "Spirogyra, Euglena and chlamydomonas share many characeristic EXCEPT",
                options: ["Nutrition", "Reproduction", "Mobility", "Irritability"],
                ans: C
            },
            {
                id:14,
                question: "What is the function of trichocyst in paramecium?",
                options: ["Movement", "Defence", "Excretion", "Reproduction"],
                ans: B
            },
            {
                id:15,
                question: "When a virus is placed in a non-living medium it",
                options: ["Becomes dehydrated", "Forms spores", "Form flagella", "Becomes crystallized"],
                ans: D
            },
            {
                id:16,
                question: "A multinucleate body without internal cell boundaries is characteristic of",
                options: ["Bryophytes", "Fungi", "Algae", "Gymnosperms"],
                ans: B
            },
            {
                id:17,
                question: "Viruses are considered to be living organisms because they",
                options: ["Possess tranmittable characters", "Move from one place to another", "Respond to one stimulation", "Ingest food materials"],
                ans: A
            },
            {
                id:18,
                question: "Which of the following characteristics is common to Amoeba and paramecium?",
                options: ["Oral groove", "Trichocyst", "Contractile vacuole", "Cilia"],
                ans: C
            },
            {
                id:19,
                question: "Which of the following are non-green plants?",
                options: ["Euglena", "Fungi", "Spirogyra", "Angiosperms"],
                ans: C
            },
            {
                id:20,
                question: "One of the features which adapts paramecium to its environment is the possession of",
                options: ["A regular shape", "Two nuclei", "Cilia", "A pellicle"],
                ans: C
            },
            {
                id:21,
                question: "In which of the following organisms does a single cell prforms all the functions of movement, nutrition, growth, excretion and photosynthesis?",
                options: ["Paramecium", "Euglena", "Amoeba", "Spirogyra"],
                ans: B
            },
            {
                id:22,
                question: "The spores of mucor are dispersed by",
                options: ["Water", "Wind", "Insects", "Explosive mechanism"],
                ans: B
            },
            {
                id:23,
                question: "Members of the phylum protozoa use the contractile vacuole",
                options: ["To remove excess food", "For movement", "To remove excess water"],
                ans: D
            },
            {
                id:24,
                question: "Which of the followin is TRUE of the process of conjugation in paramecium?",
                options: ["Miao-nucleus disintegrates", "Each ex-conjugant divides only once", "Each micronucleus divides twice"],
                ans: D
            },
            {
                id:25,
                question: "Virus differ from all forms of life because they",
                options: ["Have a thick cell wall", "Feed on waste products of other organisms cause infectious diseases", "Require other living cells to multiply"],
                ans: D
            },
            {
                id:26,
                question: "The procaryotic cell type is characterized by a",
                options: ["Complex cytoplasm which different regions are poorly defined", "Localization of differ regions of the cell into tissue", "Collection of organelles and macromolecular complexes", "Simple cytoplasm with welldefined region"],
                ans: A
            },
            {
                id:27,
                question: "The most recently evolved structure in animals is the",
                options: ["Hair", "Cillium", "Scale", "Feather"],
                ans: A
            },
            {
                id:28,
                question: "The order in which organic evolution as progressed in plants is",
                options: ["Thallophyta, Schizophyta", "Schizophyta, Thallophyta, Bryophyta, Periodophya and Spermatophyta", "Ptridophyta, Spermatophyta, Thallophyta, Schizophyta and Bryophyta", "Bryophyta, pteridophyta, Spermatophyta, Thallophyta and schizophyta"],
                ans: B
            },
            {
                id:29,
                question: "Which of the following groups is the most advanced?",
                options: ["Pteridophytes", "Bryophytes", "Thallophytes", "Gymnosperms"],
                ans: D
            },
            {
                id:30,
                question: "The animals that move by means of flagella include",
                options: ["Chlamydomonas and Euglena", "Planaria and Amoeba", "Amoeba and hydra", "Paramecium and planaria"],
                ans: A
            },
            {
                id:31,
                question: "The umbrella-shape fruiting body of a fully developed mushroom is the",
                options: ["Pileus", "Mycelium", "Basidium", "Stipe"],
                ans: A
            },
            {
                id:32,
                question: "The similarity among organisms belonging to the same group will be least within each",
                options: ["Family", "Order", "Kingdom", "Species"],
                ans: C
            },
            {
                id:33,
                question: "The cell component that is present in prokaryotic cell is the",
                options: ["Chloroplast", "Ribosome", "Mitochondrion", "Nuclear envelop"],
                ans: B
            },
            {
                id:34,
                question: "A plant-like feature in Euglena is the",
                options: ["Pellicle", "Pigment spot", "Large spot", "Gullet"],
                ans: B
            },
            {
                id:35,
                question: "The most common charateristics of the fungal hyphae is the possession of",
                options: ["Cell-like compartments with one nucleus each", "Cell walls that are both rigid and chitinous", "A multicellular mycelium in the subtrate", "Cell-like partitions formed by cross-walls"],
                ans: B
            },
            {
                id:36,
                question: "The hyphal wall of fungi is rigid owing to the presece of",
                options: ["Cell wall", "lignin", "Cellulose", "Chitin"],
                ans: D
            },
            {
                id:37,
                question: "the chromosomes of members of the kingdom Monera within the",
                options: ["Nucleoplasm", "Cytoplasm", "Nucleus", "Nucleolus"],
                ans: B
            },
            {
                id:38,
                question: "In terms of the number of individuals, which of the following taxa is most inclusive?",
                options: ["Order", "Family", "Class", "Species"],
                ans: C
            },
            {
                id:39,
                question: "A blue green alga is not a protopythte because",
                options: ["It is aquatic", "Its cells are prokaryotic", "It cannot move", "It is not a green plant"],
                ans: B
            },
            {
                id:40,
                question: "Which of the following is the groups of cells is devoid of true nuclei?",
                options: ["Algae", "Monera", "Fungi", "Genus"],
                ans: B
            },
            {
                id:41,
                question: "The fungi are a distinct group of eukaryotes mainly because they have",
                options: ["Spores", "No chlorophyll", "Many fruiting bodies", "Sexual and sexual reproduction"],
                ans: C
            },
            {
                id:42,
                question: "The organ which is sensitive to light in Euglena is",
                options: ["Flagellum", "Chloroplast", "Eyespot", "Gullet"],
                ans: C
            },
            {
                id:43,
                question: "Which of the following is the simplest living organism?",
                options: ["Virus", "Amoeba", "Chlamydromonas", "Pramecium"],
                ans: A
            },
            {
                id:44,
                question: "Fungi are referred to as heterotrophs because they",
                options: ["Lack chlorophyll", "Have mycelium", "Lack roots", "Are filamentous"],
                ans: A
            },
            {
                id:45,
                question: "In Mucor or Rhizopus, carbohydrate is absorbed in form of",
                options: ["Starch", "Sucrose", "Glucose", "Glycogen"],
                ans: C
            },
            {
                id:46,
                question: "The ype asexual reprodution that is common to boh paramecium and protist is",
                options: ["Fragmentation", "Budding", "Sporulaion", "fission"],
                ans: D
            },
            {
                id:47,
                question: "The simplest form of reproduction is",
                options: ["Conjugation", "Budding", "Spore formation", "Binary fission"],
                ans: D
            },
            {
                id:48,
                question: "What is the function of trichocyst in paramecium?",
                options: ["Movement", "Defence", "Excretion", "Resproduction"],
                ans: B
            },
            {
                id:49,
                question: "An organism which exhibits extra-cellular digestion is",
                options: ["Spirogyra", "Paramecium", "Amoeba", "Rhizopus"],
                ans: D
            },
            {
                id:50,
                question: "The shape of a Bacillus is",
                options: ["Cocci", "Vibrio", "Rod", "Spirochetes"],
                ans: C
            },
            {
                id:51,
                question: "The type of reproduction that is common to both hydra and yeast is",
                options: ["Grafting", "Budding", "Conjugation", "Binary fission"],
                ans: B
            },
            {
                id:52,
                question: "Blue-green algea belongs to what kingdom?",
                options: ["Plantae", "Fungi", "Moneran", "Protista"],
                ans: C
            },
            {
                id:53,
                question: "The soil type that has highest capillarity is",
                options: ["Clay", "Loam", "Humus", "Sand"],
                ans:B
            },

        ]
    },

    {
        topic: "Evolution among plants",
        questions:[
            {
                id:1,
                question: "The following events take place during conjugation in spirogyra 1. The protoplasm in each of the conjugating cells separated from the call wall to form a gamete; the gamate of one filament passes through the conjugation tube to meet the gamete of the other filament 2. The zygote soon become surrounded by a thick brown wall to become zygospore which Bursts after a short rest and germinates to produce a new filament 3. The nucei of the gametes fuse to form a zygote 4. The protuberances meet and where they touch the cell-wall disappears so that a conjugation tube joining the two cells is formed 5. Protuberances appear on the walls of cells of two filaments of anoher. Now, what is the correct sequence in which the above events occur?",
                options: ["1,2,3,4,5", "1,2,4,5,3", "3,4,5,2,1", '5,4,1,3,2,', "5,4,3,1,2"],
                ans: D
            },
            {
                id:2,
                question: "One of the following statements is NOT true of spirogyra",
                options: ["It is a simple multicellular plant", "During conjugation, its gametes, which are structurally and physiologically similar, fuse to form zygote", "It possesses spiral chloroplast which enables the plant to photosynthesize", "Its cells are protected externally by a layer of mucilage", "There are pyrenoids along the chloroplast"],
                ans: B
            },
            {
                id:3,
                question: "One of the common feature of the fungi, algae, mosses and ferns is that they",
                options: ["Are photosynthetic", "Show alternation of generation", "Reproduce by means of conjugation", "Can survive dry conditionns", "Have no seeds"],
                ans: E
            },
            {
                id:4,
                question: "Which of the following represents the evolutionary sequence in these plants? 1. Flowering plants 2. Ferns, 3. Mosses, 4. Algae, 5. Conifers",
                options: ["2->1->4->3->5", "5->4->3->2->1", "2->4->5->1->3","3->2->4->5->1", "4->3->2->5->1"],
                ans: E
            },
            {
                id:5,
                question: "Mosses, liverworts and ferns can be grouped together because they",
                options: ["Are all aquatic plants", "All growing deserts", "Are seedless plants", "Have undifferentiated plants bodies", "All produce colourless flowers"],
                ans: C
            },
            {
                id:6,
                question: "Spirogyra and Mucor can be grouped together as Thallophyta because",
                options: ["They are unicellular organism", "Their spores could be dispersed by wind", "They are capable of living independent lives", "They reproduce sexually only", "Their bodies are made up of thallus and filaments alternatively"],
                ans: E
            },
            {
                id:7,
                question: "Which of the following is INCORRECT the prothallus of a fern",
                options: ["Is a flattened heart-shape suture", "Is green because its cells contain chloroplasts", "The dominat plant", "Bears the sexual organs", "Is attached to the ground by numerous rhizoids"],
                ans: C
            },
            {
                id:8,
                question: "In spirogyra, the pyrenoid",
                options: ["Excrete waste products", "Is suspended by cytoplasmic strands", "The dominate plant", "Bears the sexual organs", "Is attached to the ground by numerous rhizoids"],
                ans: D
            },
            {
                id:9,
                question: "Byrophytes are different from flowing plants because they",
                options: ["live in moist habitats", "Are small plants", "Have small leaves", "Have no vascular tissues"],
                ans: C
            },
            {
                id:10,
                question: "In lower plants like mosses, the structure which prforms the functions of roots of higher plants is called",
                options: ["Root hairs", "Rootles", "Hyphae", "Rhizoids", "Thalli"],
                ans: D
            },
            {
                id:11,
                question: "Which of the following is NOT true of spirogyra?",
                options: ["Reproduces by conjugation", "Reproduces by fragmentation", "Consists of branched filaments", "Consists of unbranched filaments"],
                ans: C
            },
            {
                id:12,
                question: "In a plant exhibiting alternation d generations, the diploid multicellular stage is knows as",
                options: ["Gametophyte", "Spermatophyte", "Holophyte", "Sporophyte"],
                ans: D
            },
            {
                id:13,
                question: "A characteristic that distinguishesbryophytes from flowering plants is the",
                options: ["Possession of true stems and leaves", "Ability to reproduce asexually", "Absence of vascular tissues", "Ability to grows in moist habitats"],
                ans: C
            },
            {
                id:14,
                question: "In most true ferns sporangia are grouped into",
                options: ["Indusium", "Fronds", "Prothalli", "Sori"],
                ans: D
            },
            {
                id:15,
                question: "In the reproduction of mosses, waer is essential because",
                options: ["They live in moist habitats", "They cannot reproduce without water", "The male gametes must swim to fertilize the ovum", "They produce spores"],
                ans: C
            },
            {
                id:16,
                question: "The term Thallophyta refers to",
                options: ["Ferns and mosses", "Algae and fungi", "Mosses and liverworts", "Fungi and ferns"],
                ans: B
            },
            {
                id:17,
                question: "The prothallus of a fern is equivalent to the gametophyte generation of moss because it",
                options: ["Is inconspicuous", "Has rhizoids", "Bears sexual organs", "Is multicellular"],
                ans: C
            },
            {
                id:18,
                question: "The algae, bryophytes and pteridophytes are similar in that they",
                options: ["Are sea weeds", "Have no vascular tissues", "Require moisture for fertilization", "Are microscopic plants"],
                ans: C
            },
            {
                id:19,
                question: "The spores of ferns are dispersed by",
                options: ["Wind", "Water", "Insect", "Explosive mechanism"],
                ans: A
            },
            {
                id:20,
                question: "In bryophytes, sex organs are produced in the",
                options: ["Gametphyte", "Rhizoid", "Protonema", "Sporophyte"],
                ans: A
            },
            {
                id:21,
                question: "Which of the following are differntiated into true roots, stems and leaves?",
                options: ["Algae", "Schizophyta", "Pteridophyta", "Bryophyta"],
                ans: C
            },
            {
                id:22,
                question: "The annulus of fern sporangium helps in",
                options: ["Spore dispersal", "Conduction of minerals salt", "Trapping or light energy", "Water retention"],
                ans: A
            },
            {
                id:23,
                question: "Which of the following cerrectly summarizes the life cycle of a fern plant?",
                options: ["Spore->prothallus->thallus->sporangium", "Male and female->gametangia->zygospore->sporangium->spores", "Spore->thallus->spermatozoa->ovum->sporangium", "prothallus->spermatozoid->egg->cell->leafy plant->sporangiospore"],
                ans: A
            },
            {
                id:24,
                question: "in which of these features do bryophytes differ from peridophytes?",
                options: ["Absence of flower", "Aiternation of generation", "Dependence on water for reproduction", "presence of a vascular system"],
                ans: D
            },
            {
                id:25,
                question: "Which of the following organs or cell components are common to both the sporophyte and the gametophyte of a fern?",
                options: ["Rhizoids", "Roots", "Chloroplasts", "Leaves"],
                ans: C
            },
            {
                id:26,
                question: "Which is the correct order in an evolutionary sequence for the following plants groups?",
                options: ["Bacteria->fern->algae->mosses->seed plant", "Bateria->ferns->mosses->algae->seed plant", "Bacteria->algae->mosses->fern->seed plant", "Bacteria->mosses->algae->ferns->seed plant"],
                ans: C
            },
            {
                id:27,
                question: "One commoon characteristic of fungi algae, mosses and ferns is that they",
                options: ["show alternation of generations", "reproduce sexually by conjugation", "produce spores hat are dispersed", "possess chlorophyll in their tissue"],
                ans: C
            },
            {
                id:28,
                question: "Which of the following perform similar functions?",
                options: ["Ascospores and ascocarp", "antherozoids and rhizoid", "Sorus and indusium", "Srobili and inflorescene"],
                ans: C
            },
            {
                id:29,
                question: "In ferns, the sporophyte",
                options: ["Develop from a haploid zygote", "Reproduce sexually to produce spores", "Is haploid and dependent on the gametophyte", "Diploid and independent of the gametophyte"],
                ans: D
            },
            {
                id:30,
                question: "In which of the following organism does each cell combine the function of nutrition, reproduction and growth",
                options: ["Rhizopus", "Dryopteris", "Brachymenium", "Spirogyra"],
                ans: D
            },
            {
                id:31,
                question: "One distinctive feature in the life history of liverworts is that they exhibit",
                options: ["Alternation of generation", "Vegetative reproduction", "Asexual reproduction", "Sexual reproduction"],
                ans: A
            },
            {
                id:32,
                question: "The absence of special food and water-conducting system restricts the body size in",
                options: ["Algae, liveworts and mosses", "liverworts, mosses and fern", "The bryophytes and the pteridophytes"],
                ans: A
            },
            {
                id:33,
                question: "The dominant phase in life cycle of a bryophyte is the",
                options: ["Gametangium", "Sporophyte", "Gametophyte", "Prothallus"],
                ans: c
            },
            {
                id:34,
                question: "A water medium is necessary for fertilization in",
                options: ["Fungi", "Conifers", "Ferns", "Angiosperms"],
                ans: C
            },
            {
                id:35,
                question: "Alternation of asexual and sexual modes of reproduction is found in",
                options: ["Blue-green algae", "Euglena", "Fern", "Maize"],
                ans: C
            },
            {
                id:36,
                question: "The dominant phase in the life cycle of a fern is the",
                options: ["Prothallus", "Sporophyte", "Antheridium", "Gametophyte"],
                ans: B
            },
            {
                id:37,
                question: "In bryophytes, sex organs are produced in the",
                options: ["Phizoidrotonema", "Sporophyte", "Gametophyte", "Rhizoid"],
                ans: C
            },
            {
                id:38,
                question: "seed plants are divided into",
                options: ["monocotyledons and cotyledons", "thallophytes and bryophytes", "tracheophytes and ferns", "anglosperms and gymnosperms"],
                ans: D
            },
            {
                id:39,
                question: "Alternation of generation is a feature shown in",
                options: ["mosses", "fungi", "grasses", "conifers"],
                ans: A
            },
            {
                id:40,
                question: "The spores of ferns are disperse by",
                options: ["wind", "water", "insecs", "explosive mechanism"],
                ans: A
            },
            {
                id:41,
                question: "which of the following is the most advace plant?",
                options: ["merchantia", "dryopteris", "chamydomona", "spirogyra"],
                ans: B
            },
            {
                id:42,
                question: "Double fertilization is a unique feature of",
                options: ["angiosperm", "bryophytes", "pteridophytes", "algae"],
                ans: A
            },
            {
                id:43,
                question: "Asexual reproduction in spirogya is by",
                options: ["fragmentation", "binary fission", "conjugation", "budding"],
                ans: A
            },
            {
                id:44,
                question: "The annulus of fern sporangium helps in",
                options: ["spore disperseal", "conduction of mineral salt", "trapping of light energy", "water retention"],
                ans: A
            },
            {
                id:45,
                question: "Which of the generation is in which of these?",
                options: ["ferns", "fungi", "coelenterate", "moneran"],
                ans: A
            },
            {
                id:46,
                question: "Which of the following are thallophytes?",
                options: ["mosses and ferns", "mosses and liverworts", "fungi and algae".charAt, "fungi and ferns"],
                ans: A
            },

        ]
    },

    {
        topic: "Higher Plants",
        questions: [
            {
                id:1,
                question: "one of the signficant between roots and stem is that",
                options: ["branch root originate in the pericycle while branch stems do not", "stems are always above the ground while roots are always below the ground", "stem are positive geotropic while roots are negative geotropic", "stem are sometimes used in storage and roots are never so used", "stem grow in both length and circumference while root grow only in length"],
                ans: A
            },
            {
                id:2,
                question: "roots hair are developed from the",
                options: ["root apex", "epidermis", "vascuar bundles", "endodermis"],
                ans: B
            },
            {
                id:3,
                question: "in a dicot leaf, guard cells differ from other epidermal cells because they",
                options: ["have no definite shape", "lack nuclei", "are snaler", "contain chloreplast", "lack vacuole"],
                ans: D
            },
            {
                id:5,
                question: "herbs differ from shrubs because they",
                options: ["do not produce fruis", "are useful to herbalists", "do not become woody", "are only annuals", "are only perennials"],
                ans: C
            },
            {
                id:6,
                question: "which of the following is not a characteristic of monocot plants?",
                options: ["occurrence of secondary thickening", "parallel venation", "scattered vascular bundles", "flora parts arranged in threes", "perianth is usually insignificant"],
                ans: A
            },
            {
                id:6,
                question: "which of the following statements is NOT not true of he piliferous layer of a root?",
                options: ["it has a very thin cuticle", "is the outermost layer of the cortex", "may bear root hairs", "breaks down as the roots ages", "is replaced by cork in old roots"],
                ans: A
            },
            {
                id:7,
                question: "which of the following is seed bearing?",
                options: ["mosses", "whisting pine", "algal filaments", "liverwort", "fern fronds"],
                ans: A
            },
            {
                id:8,
                question: "in an angiosperm leaf, the xylem is",
                options: ["beside the phloem", "surrounded by the phloem", "above the phloem", "around the phloem", "in separate bundles from phloem"],
                ans: C
            },
            {
                id:9,
                question: "which of the following pals are fully adapted to terrestrial life?",
                options: ["ferns and algae", "fern and mosses", "cryophyte and flowering plants", "flowering plans and conifers"],
                ans: D
            },
            {
                id:10,
                question: "which of the following is common to a dicotylendonous stem and a monocotyledonous root?",
                options: ["medulary rays", "central pith", "wide cortex", "narrow cortex", "pericyclic fibres"],
                ans: B
            },
            {
                id:11,
                question: "the stem differs from the root in having the xylem and phloem strands",
                options: ["on the same radii", "scattered", "on alternated radii", "towards the pith"],
                ans: A
            },
            {
                id:12,
                question: "the correct sequence of tissue in the anatomy of a young dicotyledonoes stem from inside to outside is",
                options: ["pith, phloem, cambium, xylem, parenchyma, collenchyma and epidermis", "xylem, phloem, cambium, cortex, endodermis, collenchyma and epidermis", "pith, xylem, cambium, phloem, collenchyma, parenchyma and epidermis", "phloem, xylem, cambium, cortex, encodermis, collenchyma and epidermis"],
                ans: C
            },
            {
                id:13,
                question: "secondary thickening is initiated in a dicotyledonous stem by the",
                options: ["xylem parenchyma", "secondary phloem", "endodermis", "cambium"],
                ans: D
            },
            {
                id:14,
                question: "which of the following statement gives the BEST description of bark?",
                options: ["tissues outside the vascular cambium", "cork like tissues found in stems", "brown tissues never found in primary growth", "cork-like tissues of old trees"],
                ans: B
            },
            {
                id:15,
                question: "in the transverves section of the leaf of maize vascular bundles are arranged in",
                options: ["arrow", 'one circle', "alternate positions", "two circles"],
                ans: B
            },
            {
                id:16,
                question: "Double fertilization is unique feature of",
                options: ["angiosperms", "bryophytes", "pteridophytes", "algae"],
                ans: B
            },
            {
                id:17,
                question: "anglosperms and gymnosperms belong to the plant group knows as",
                options: ["schizophyta", "bryophyta", 'pteridophyta', "spermatophyta"],
                ans: D
            },
            {
                id:18,
                question: "To faciliate gaseous exchange, breathing roots have",
                options: ["stomata", "mictochondria", "cuticle", "lenticles"],
                ans: D
            },
            {
                id:19,
                question: "A wide pith with a ring of condoctin tissue is characeristic of roots of",
                options: ["maize", "sunflower", "bean", "okra"],
                ans: B
            },
            {
                id:20,
                question: "Stomata pores open when there is",
                options: ["an increase in the sugar content of guard cells", "a decrease in the osmotic concenration of guard cells", "a decrease in the sugar conten of mesopyhll cells", "an increase in he sugar content of mesophyll cells"],
                ans: A
            },
            {
                id:21,
                question: "which of the following structures is capable of producing more tissues in the stem of a herbaceous flowing plant?",
                options: ["epidermis", "pericycle", "xylem", "cambium"],
                ans: c
            },
            {
                id:22,
                question: "which of the following features are all associated with monocots?",
                options: ["fibrous roots aystem, branched network of veins and one seed leaf", "fibrous roots system, two seed leaves and flora parts in threes", "one seed leaf, petals in threes or groups or hrees and parallel venation of leaves", "one seed leaf, one-veied leaves and petals in three or multiple of three"],
                ans: C
            },
            {
                id:23,
                question: "Peripherial arrangement iof vascular tissues in dicots is a characteristic of the internal structure of the",
                options: ["leaf", "petiole", "stem", "roots"],
                ans: C
            },
            {
                id:24,
                question: "mos monocots are easily recognized by their",
                options: ["short leaves with petioles", "long and sword-like leaves", "long and palm-like leavves", "short leaves with many veinlets"],
                ans: B
            },
            {
                id:25,
                question: "in the internal structure of plants, a wide pith in the centre is coomon to",
                options: ["dicot stems and monocot stem", "dicot stems and monocot roots", "dicot roots and monocot roots", "dicot roots and monocot stems"],
                ans: B
            },
            {
                id:27,
                question: "Angiosperms and gymnosperms belong to the class",
                options: ["schizophyta", "spermatophyta", "pteridophyta", "bryophyta"],
                ans: B
            },
            {
                id:28,
                question: "In the traverse section of a dicot sterm the region lying between the endodermis and vascular bundle is the",
                options: ["parenchyma", "pericycle", "phloem", "hypodermis"],
                ans: B
            },
            {
                id:29,
                question: "Monocot stems differ from dicot stems in tha monoots have",
                options: ["no cambium", "no pith", "fewer vascular bundles", "phloems with parenchyma"],
                ans: A
            },
            {
                id:30,
                question: "The opening and dosing of the stoma are regulated by",
                options: ["transpiration", "respiration", "diffusion", "osmosis"],
                ans: D
            },
            {
                id:31,
                question: "In  dicotylendons stem, the zone between the epidermis and the pericycle is the",
                options: ["cortex", "stele", "phloem", "xylem"],
                ans: A
            },
            {
                id:31,
                question: "Which of the following is true of the transverse section of a dicot stem?",
                options: ["the xylem is more interiorlyy located than the phloem", "the cambium lies beween the cortex and vascular bundles", "vascular bundles are randomly scattered within the cortex", "the epidermis completely encircled by the cortex"],
                ans: A
            },
            {
                id:32,
                question: "Seed plants are divided into ",
                options: ["monocotyledons and dicotyledons", "tracheophytes and ferns", "tracheophytes and bryophytes", "angiosperms and gymonosperms"],
                ans: D
            },
            {
                id:33,
                question: "Plants that shows secondary growth are usually found among the",
                options: ["halophye", "pteridophye", "monocotyledons", "dicotyledons"],
                ans: D
            },
            {
                id:34,
                question: "Which of the following plants structures lacks a waterproof cuticle?",
                options: ["leaf", "stem", "root", "shoot"],
                ans: C
            },
            {
                id:35,
                question: "Which of the following plant secondary thickening in plants?",
                options: ["colenchyma and xylem cells", "vascular cambium and colenchyma cells", "vascular cambium and cork canbium", "cork cambium and cork sclerenchyma"],
                ans: C
            },
            {
                id:36,
                question: "Seed plants are the most dominant vegatation on land because of",
                options: ["their motile gametes", "their ability to photosythesize", "efficient seed dispersal", "availability of water"],
                ans: C
            },
            {
                id:37,
                question: "In the transverse section of the leaf maize vascular bundles are arranged in",
                options: ["row", "one circle", "alternate positions", "two circle"],
                ans: B
            },
            {
                id:38,
                question: "The layer of dicot stem impermeable to liquids and gases is the?",
                options: ["cambium", "cortex", "cuticle", "endodermis"],
                ans: D
            },
        ]
    },
    
    {
        topic: "Evolution Among Invertebrates",
        questions : [
            {
                id:1,
                question: "Which of the following animal is NEVER a secondary host of tapeworms?",
                options: ["cow", "fish", "pig", "man", "dog"],
                ans: D
            },
            {
                id:2,
                question: "The two types of human tapeworms can be distinguished by the presence or absence of",
                options: ["scolex", "hook", "head", "sucker", "proglottis"],
                ans: B
            },
            {
                id:3,
                question: "A tapeworm has no alimentary canal because",
                options: ["it is autotrophic", "it does not feed", "it has no enzymes", "is body absorbs digested food", "the suckers on the scolex suck blood"],
                ans: D
            },
            {
                id:4,
                question: "Flatworms and roundworms are said to be invertebraes because",
                options: ["they are small animals", "they can live inside the vertebrates of some of them are unicellular", "they have backbones", "they are parasitic"],
                ans: D
            },
            {
                id:5,
                question: "Which of these worms is beneficial to man?",
                options: ["hookworm", "tapeworm", "pundworm", "earthworm", "guinea worm"],
                ans: D
            },
            {
                id:6,
                question: "Exoskeleton is NOT found in the",
                options: ["maggot", "mosquito larva", "earthworm", "caterpillar", "termite"],
                ans: C
            },
            {
                id:7,
                question: "The part used by tapeworm to fasten itself to host's intensine are the",
                options: ["neck and sucker", "hooks and suckers", "rostellum and suckers", "young proglottis and neck", "rostellum, hooks and suckers"],
                ans: B
            },
            {
                id:8,
                question: "Which of the animals is radically symmetrical?",
                options: ["squid", "hydra", "snail", 'cockroach'],
                ans: B
            },
            {
                id:9,
                question: "Which of the following lack chaetae, tentacles and antennae",
                options: ["snail", "crab", "millipede", "earthworm"],
                ans: B
            },
            {
                id:10,
                question: "A good example of diploblatic organism is",
                options: ["amoeba", "hydra", "earthworm", "roundworm"],
                ans: B
            },
            {
                id:11,
                question: "The function of the clitellum in the earthworm is to",
                options: ["aid digestion", "prevent desication", "assit locomotion", "secret cocoon"],
                ans: D
            },
            {
                id:12,
                question: "In tapeworm, the two structure that run through the length or the body are the",
                options: ["nerves cord and excretory duct", "sperm duct and nerve cord", "genital pore and excretory duct", "sperm duct and genital pore"],
                ans: A
            },
            {
                id:13,
                question: "Which of the following NOT charateristics of snail?",
                options: ["bilateral symmetry", "chitinous exoskeleton", "muscular foot", "soft unsegmented body in mantle"],
                ans: B
            },
            {
                id:14,
                question: "The following organisms are hermaphrodites EXCEPT",
                options: ["snail", "taenia", "schistosoma", "earthworm"],
                ans: C
            },
            {
                id:15,
                question: "Parasitic forms are NOT found among",
                options: ["platyhelminithes", "nematodes", "mollusccs", "annelids"],
                ans: c
            },
            {
                id:16,
                question: "Which of the following set of organism represent the current trend from simple to complex structural oraganization? 1. mollusca 2. platyhelminthes 3. nematoda 4. prtozoa",
                options: ["4123", "4321", '4213', "4231"],
                ans: D
            },
            {
                id:17,
                question: "A charateristic of the phylum coelenterate is that",
                options: ["most of then marine", "they posses a gut with a single opening", "they posses numerous pores on the body", "they are bilateral symmetrical"],
                ans: B
            },
            {
                id:18,
                question: "Which of the following phyla have members with both internal and external sergmentation?",
                options: ["platyhelminthes", "nematoda", "algae", "mollusca"],
                ans: C
            },
            {
                id:19,
                question: "The body of snail is divided into head",
                options: ["thorax and abodmen", "visceral mass and abodmen", "thorax and foot", "visceral mass and foot"],
                ans: D
            },
            {
                id:20,
                question: "Hydra removes undigested food by",
                options: ["paasing it through annus", "means of a contractile vacuole", "passing it through the mouth", "degesting it through the body surface"],
                ans: B
            },
            {
                id:21,
                question: "Which of the following group of invertebrates reproduce by budding?",
                options: ["Arthropoda", "annelida", "mollusca", "coelenterata"],
                ans: D
            },
            {
                id:22,
                question: "In the tapeworm, the suckers on the scolex are used for",
                options: ["sucking the blood of the host", "holding fast to the host", "reproduction", "locomotion"],
                ans: B
            },
            {
                id:23,
                question: "Sting cells noramlly found in",
                options: ["flatworm", "hydra", "snails", "paramecium"],
                ans: B
            },
            {
                id:24,
                question: "In earthworm, the cocoon is secreted by the",
                options: ["chaeta", "protomium", "peristomium", "clitellum"],
                ans: D
            },
            {
                id:25,
                question: "The respiration organ in the land snail is the",
                options: ["tentancle", "foot", "mantle"],
                ans: B
            },
            {
                id:26,
                question: "A major difference between platyhelminthes and coelenteraes is that platyhelminthes",
                options: ["are multicelluar", "have develop a mesoderm", "reproduce sexually", "reproduce asexually"],
                ans: B
            },
            {
                id:27,
                question: "The essential structural difference between hydra and tapeworm is that while hydra,",
                options: ["has tentacles, tapeworm is parasitic", "is diploblasic, tapeworm is triploblastic", "has a mouth, tapeworm feeds by suckers", "has mesoderm, tapeworm has mesogloea"],
                ans: B
            },
            {
                id:28,
                question: "The soil swallowed the eartworm to form the worm cast is ground up in the",
                options: ["clitellum", "prostomium", "mouth", "gizzard"],
                ans: D
            },
            {
                id:29,
                question: "The cnidoblas cells found in hydra are use for",
                options: ["reproduction", "offence and defence", "locomtion and nurtition", "food collection"],
                ans: B
            },
            {
                id:30,
                question: "Annelids differ from nematodes in that they",
                options: ["exhibit bilateral symmetry", "are triplibastic", "are matamerically segmented", "posses complete digestive system"],
                ans: C
            },
            {
                id:31,
                question: "In snails, the hard calcareous shell are secreted by the",
                options: ["radula", "ctenidium", "pneumostome", "mantle"],
                ans: c
            },
            {
                id:32,
                question: "The habitat of cysticercus of taenia solium is",
                options: ["alimentary canal of cattle", "muscles of pig", "alimentary canal or pig", "muscles of casttle"],
                ans: B
            },
            {
                id:33,
                question: "The division of a body into two equal halves along a longitudinal plane is called",
                options: ["a bilateral symmentary", "traverse section", "radial symmetary", "longitudinal section"],
                ans: A
            },
            {
                id:34,
                question: "Coelom is absent in the class of animals ermed",
                options: ["mollusca", "reptila", "arthropoda", "coelenterata"],
                ans: D
            },
            {
                id:35,
                question: "An example of a radially symmetrical organism is",
                options: ["planaria", "hydra", "tapeworm", "roundworm"],
                ans: B
            },
            {
                id:36,
                question: "The leech and earthworm belong to the",
                options: ["molluscs", "crustaceans", "arachnids", "annelids"],
                ans: B
            },
            {
                id:37,
                question: "One primitive feature of the coelenterates is the possession of",
                options: ["a dorsal mouth", "radial symmetry", "bilateral symmetry", "a false foot"],
                ans: B
            },
            {
                id:38,
                question: "Radial symmetry is a feature common to the",
                options: ["platyhelminthes", "nematodes", "coelenterates", "arthropods"],
                ans: C
            },
            {
                id:39,
                question: "Which of the following is the most advanced in the evolutionary trend of animals?",
                options: ["liver fluke", "earhworm", "snail", "cockroach"],
                ans: D
            },
            {
                id:40,
                question: "An animal body that can be cut along its axis in any plane to give two identical part is said to be",
                options: ["radically symmetrical", "bilateral symmetrical", "asymmetrical", "symmetry"],
                ans: A
            },
            {
                id:41,
                question: "Tanenia solium can be found in",
                options: ["goat", "dog", "pig", "cow"],
                ans: C
            },
            {
                id:43,
                question: "The nephiridium is used in which of the following organisms ",
                options: ["roundworms", "flatworms", "earthworms", "insects"],
                ans: C
            },
            {
                id:44,
                question: "The flame cell excretory prgan of",
                options: ["arthropoda", "crutaceans", "fatworms", "molluscs"],
                ans: C
            },
        ]
    }

]
    