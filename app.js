const stations = [
  {
    id: "notation",
    title: "Nuclide Notation and Atomic Structure",
    short: "Atoms",
    code: "LAB",
    intro: "Decode mass number, atomic number and particle numbers. This station mirrors the classic exam start.",
    visual: "atom",
    hint: "Mass number A = protons + neutrons. Atomic number Z = protons. A neutral atom has the same number of electrons as protons.",
    tasks: [
      {
        type: "inputs",
        prompt: "For 31P with atomic number 15, enter the particle numbers.",
        fields: [
          ["Protons", "15"],
          ["Electrons", "15"],
          ["Neutrons", "16"]
        ]
      },
      {
        type: "choice",
        prompt: "Which statement about the number written on the upper left of an element symbol is correct?",
        answer: "It is the mass number; it gives the total number of protons and neutrons.",
        options: [
          "It is the mass number; it gives the total number of protons and neutrons.",
          "It is the atomic number; it gives only the number of electrons.",
          "It is the charge number; it gives the number of valence electrons."
        ]
      },
      {
        type: "choice",
        prompt: "Which two meanings can the lower-left number have in a neutral atom?",
        answer: "Atomic number and nuclear charge number; it equals protons and electrons.",
        options: [
          "Atomic number and nuclear charge number; it equals protons and electrons.",
          "Mass number and neutron number; it equals protons plus neutrons.",
          "Group number and period number; it equals valence shells."
        ]
      }
    ]
  },
  {
    id: "isotopes",
    title: "Isotopes, Nuclides and Atomic Mass",
    short: "Isotopes",
    code: "SAFETY",
    intro: "Use oxygen and chlorine examples to distinguish isotope, nuclide and relative atomic mass.",
    visual: "atom",
    hint: "Isotopes belong to the same element: same proton number, different neutron number. Atomic masses in the PSE are average values.",
    tasks: [
      {
        type: "match",
        prompt: "Complete the oxygen isotope table.",
        pairs: [
          ["16O: protons / neutrons / electrons", "8 / 8 / 8"],
          ["17O: protons / neutrons / electrons", "8 / 9 / 8"],
          ["18O: protons / neutrons / electrons", "8 / 10 / 8"]
        ],
        choices: ["8 / 8 / 8", "8 / 9 / 8", "8 / 10 / 8", "16 / 8 / 8"]
      },
      {
        type: "choice",
        prompt: "Best definition of isotope:",
        answer: "Atoms with the same proton number but different neutron numbers.",
        options: [
          "Atoms with the same proton number but different neutron numbers.",
          "Atoms with different proton numbers but the same electron shell.",
          "Molecules with identical chemical bonds."
        ]
      },
      {
        type: "choice",
        prompt: "What is one atomic mass unit u?",
        answer: "One twelfth of the mass of a carbon-12 atom.",
        options: [
          "One twelfth of the mass of a carbon-12 atom.",
          "The exact mass of one electron.",
          "The mass of one mole of hydrogen gas."
        ]
      }
    ]
  },
  {
    id: "models",
    title: "Rutherford, Bohr and Orbital Model",
    short: "Models",
    code: "FIRST",
    intro: "Compare model statements instead of only naming models. The lock opens when the scientific idea is precise.",
    visual: "models",
    hint: "Rutherford discovered the small positive nucleus and empty space. Bohr added fixed energy levels. The orbital model uses probability regions.",
    tasks: [
      {
        type: "match",
        prompt: "Match the model to the key statement.",
        pairs: [
          ["Rutherford model", "small positive nucleus; atom is mostly empty space"],
          ["Bohr model", "electrons of equal energy move at the same distance from the nucleus"],
          ["Orbital model", "electrons occupy probability regions, not exact circular paths"],
          ["Nucleus-shell idea", "nucleons in the nucleus; electrons in the shell"]
        ],
        choices: [
          "small positive nucleus; atom is mostly empty space",
          "electrons of equal energy move at the same distance from the nucleus",
          "electrons occupy probability regions, not exact circular paths",
          "nucleons in the nucleus; electrons in the shell"
        ]
      },
      {
        type: "choice",
        prompt: "Which electron configuration is correct for sodium?",
        answer: "1s2 2s2 2p6 3s1",
        options: [
          "1s2 2s2 2p6 3s1",
          "1s2 2s2 2p5 3s2",
          "1s2 2s2 2p6 3s2 3p5"
        ]
      },
      {
        type: "choice",
        prompt: "Which electron configuration is correct for chlorine?",
        answer: "1s2 2s2 2p6 3s2 3p5",
        options: [
          "1s2 2s2 2p6 3s2 3p5",
          "1s2 2s2 2p6 3s1",
          "1s2 2s2 2p6 3s2"
        ]
      }
    ]
  },
  {
    id: "pse",
    title: "Periodic Table: Groups, Periods and Trends",
    short: "Periodic Table",
    code: "UNLOCK",
    intro: "Use the periodic table as a map: groups, periods, valence electrons and property trends.",
    visual: "transfer",
    hint: "Periods show the main energy level or shell. Main groups show typical valence electron numbers.",
    tasks: [
      {
        type: "match",
        prompt: "Match the main group to its German group name.",
        pairs: [
          ["I. main group", "alkali metals"],
          ["II. main group", "alkaline earth metals"],
          ["VI. main group", "oxygen group"],
          ["VII. main group", "halogens"],
          ["VIII. main group", "noble gases"]
        ],
        choices: ["alkali metals", "alkaline earth metals", "oxygen group", "halogens", "noble gases"]
      },
      {
        type: "choice",
        prompt: "What information can be read from a period?",
        answer: "The main energy level or electron shell.",
        options: [
          "The main energy level or electron shell.",
          "The exact neutron number of every isotope.",
          "The colour of the element in the gas state."
        ]
      },
      {
        type: "match",
        prompt: "Choose the correct trend in the PSE.",
        pairs: [
          ["Metallic character from top to bottom", "increases"],
          ["Atomic volume from left to right", "decreases"],
          ["Ionisation energy from left to right", "increases"],
          ["Electronegativity from top to bottom", "decreases"]
        ],
        choices: ["increases", "decreases"]
      }
    ]
  },
  {
    id: "ions",
    title: "Ions, Noble Gas Configuration and Salt Formulas",
    short: "Ions",
    code: "THE",
    intro: "Derive ions and formulas from main-group positions and charge balance.",
    visual: "bonding",
    hint: "A formula must be electrically neutral. Group I forms +1, group II +2, group III +3, group VI -2 and group VII -1.",
    tasks: [
      {
        type: "match",
        prompt: "Match the atom or group to the usual ion.",
        pairs: [
          ["Na", "Na+"],
          ["Mg", "Mg2+"],
          ["Al", "Al3+"],
          ["O", "O2-"],
          ["Cl", "Cl-"]
        ],
        choices: ["Na+", "Mg2+", "Al3+", "O2-", "Cl-"]
      },
      {
        type: "inputs",
        prompt: "Build the correct binary salt formulas. No answer bank: balance the ion charges yourself.",
        fields: [
          ["magnesium chloride", "MgCl2"],
          ["aluminium oxide", "Al2O3"],
          ["calcium fluoride", "CaF2"],
          ["sodium sulfide", "Na2S"],
          ["iron(II) chloride", "FeCl2"],
          ["iron(III) oxide", "Fe2O3"]
        ]
      },
      {
        type: "choice",
        prompt: "Which ion does NOT have the same electron configuration as neon?",
        answer: "S2-",
        options: ["Al3+", "O2-", "Mg2+", "F-", "S2-"]
      }
    ]
  },
  {
    id: "bonding",
    title: "Covalent, Ionic and Metallic Bonding",
    short: "Bonding",
    code: "YEAR",
    intro: "Classify bonds by particles, electronegativity difference and material properties.",
    visual: "bonding",
    hint: "Delta EN = 0 gives an ideal non-polar covalent bond. Above about 1.8, the ionic model becomes suitable.",
    tasks: [
      {
        type: "match",
        prompt: "Classify the substance or particle model.",
        pairs: [
          ["H2", "non-polar covalent bond"],
          ["HCl", "polar covalent bond"],
          ["NaCl", "ionic bond"],
          ["Cu", "metallic bond"]
        ],
        choices: ["non-polar covalent bond", "polar covalent bond", "ionic bond", "metallic bond"]
      },
      {
        type: "choice",
        prompt: "What does electronegativity describe?",
        answer: "The ability of an atom to attract the shared electron pair in a bond.",
        options: [
          "The ability of an atom to attract the shared electron pair in a bond.",
          "The number of neutrons in the nucleus.",
          "The mass of one mole of an element."
        ]
      },
      {
        type: "choice",
        prompt: "Why do metals conduct electricity?",
        answer: "They contain delocalised valence electrons that can move through the lattice.",
        options: [
          "They contain delocalised valence electrons that can move through the lattice.",
          "They contain separate molecules that rotate quickly.",
          "They contain only noble gas atoms."
        ]
      }
    ]
  },
  {
    id: "molecules",
    title: "Molecules and Molecular Substances",
    short: "Molecules",
    code: "REPORT",
    intro: "Focus only on molecules: what they are, which gases are molecular and how molecular substances behave.",
    visual: "models",
    hint: "A molecule is the smallest particle that still shows the properties of a chemical compound. Noble gases consist of single atoms, not molecules.",
    tasks: [
      {
        type: "choice",
        prompt: "Which particle still shows the chemical properties of a chemical compound?",
        answer: "molecule",
        options: ["proton", "isotope", "atom", "molecule", "element"]
      },
      {
        type: "choice",
        prompt: "Which gas contains no molecules under normal school-level classification?",
        answer: "helium",
        options: ["hydrogen", "fluorine", "helium", "carbon dioxide", "ethane"]
      },
      {
        type: "match",
        prompt: "Classify the molecular substance or particle.",
        pairs: [
          ["H2", "diatomic molecule"],
          ["CO2", "molecular compound"],
          ["S8", "molecular substance"],
          ["He", "single noble gas atoms"]
        ],
        choices: ["diatomic molecule", "molecular compound", "molecular substance", "single noble gas atoms"]
      },
      {
        type: "choice",
        prompt: "Why do many small molecular substances have low melting and boiling points?",
        answer: "The atoms inside a molecule are strongly bonded, but the attraction between separate molecules is comparatively weak.",
        options: [
          "The atoms inside a molecule are strongly bonded, but the attraction between separate molecules is comparatively weak.",
          "Every molecule contains freely moving ions.",
          "Molecular substances always have metallic bonding."
        ]
      }
    ]
  },
  {
    id: "intermolecular",
    title: "Intermolecular Forces",
    short: "Forces",
    code: "WITH",
    intro: "Now look between the molecules: van der Waals forces, dipole interactions, hydrogen bonds, cohesion and adhesion.",
    visual: "bonding",
    hint: "The rough strength order from your notes is covalent bond : hydrogen bond : van der Waals forces = 100 : 10 : 1.",
    tasks: [
      {
        type: "match",
        prompt: "Match the interaction to the correct description.",
        pairs: [
          ["van der Waals forces", "induced dipoles; possible in almost all particles"],
          ["permanent dipole interactions", "attraction between polar molecules"],
          ["hydrogen bonds", "strong interaction via polarised H atoms with O, N or F"],
          ["cohesion", "attraction between particles of the same substance"],
          ["adhesion", "attraction between particles of different substances"]
        ],
        choices: [
          "induced dipoles; possible in almost all particles",
          "attraction between polar molecules",
          "strong interaction via polarised H atoms with O, N or F",
          "attraction between particles of the same substance",
          "attraction between particles of different substances"
        ]
      },
      {
        type: "choice",
        prompt: "Which substance is especially influenced by hydrogen bonds?",
        answer: "water, because H is bonded to strongly electronegative oxygen.",
        options: [
          "water, because H is bonded to strongly electronegative oxygen.",
          "helium, because it has a complete outer shell.",
          "sodium chloride, because it forms an ionic lattice."
        ]
      },
      {
        type: "choice",
        prompt: "Which explanation fits the high surface tension and high heat capacity of water?",
        answer: "Energy is needed to separate many hydrogen bonds between water molecules.",
        options: [
          "Energy is needed to separate many hydrogen bonds between water molecules.",
          "Water contains metallic bonds and free electrons.",
          "Water molecules have no attraction between them."
        ]
      }
    ]
  },
  {
    id: "safety",
    title: "Laboratory Safety and Emergency Decisions",
    short: "Safety",
    code: "SAFE",
    intro: "Connect personal protective equipment, safety facilities and sign categories to realistic lab decisions.",
    visual: "safety",
    hint: "Protect people first. Use eye shower, emergency shower, fire extinguisher or emergency stop depending on the hazard.",
    tasks: [
      {
        type: "match",
        prompt: "Classify the safety equipment.",
        pairs: [
          ["safety goggles", "personal protective equipment"],
          ["face shield", "personal protective equipment"],
          ["eye wash station", "laboratory safety facility"],
          ["emergency shower", "laboratory safety facility"],
          ["fire extinguisher", "laboratory safety facility"]
        ],
        choices: ["personal protective equipment", "laboratory safety facility"]
      },
      {
        type: "match",
        prompt: "Match the sign category to its purpose.",
        pairs: [
          ["warning sign", "alerts you to a hazard"],
          ["prohibition sign", "tells you what is not allowed"],
          ["mandatory sign", "tells you what you must do"],
          ["rescue sign", "shows emergency help or escape routes"]
        ],
        choices: [
          "alerts you to a hazard",
          "tells you what is not allowed",
          "tells you what you must do",
          "shows emergency help or escape routes"
        ]
      },
      {
        type: "choice",
        prompt: "A chemical splashes into an eye. What is the best first response?",
        answer: "Use the eye wash station immediately and inform the teacher.",
        options: [
          "Use the eye wash station immediately and inform the teacher.",
          "Rub the eye and continue working.",
          "Wait until the end of the experiment."
        ]
      }
    ]
  },
  {
    id: "glassware",
    title: "Glassware, Accuracy and Final Lab Decision",
    short: "Glassware",
    code: "METHODS",
    intro: "Choose glassware by accuracy and combine the full year topic set in one final decision.",
    visual: "glassware",
    hint: "Beakers are useful for mixing, not exact measurement. Volumetric glassware is chosen for exact volumes.",
    tasks: [
      {
        type: "match",
        prompt: "Choose the best glassware for each task.",
        pairs: [
          ["prepare exactly 250 ml solution", "volumetric flask"],
          ["measure exactly 25.00 ml", "volumetric pipette"],
          ["heat a small sample", "test tube"],
          ["roughly mix 100 ml", "beaker"],
          ["transfer liquid into a narrow opening", "funnel"]
        ],
        choices: ["volumetric flask", "volumetric pipette", "test tube", "beaker", "funnel", "watch glass"]
      },
      {
        type: "choice",
        prompt: "A white solid dissolves in water and the solution conducts electricity. Which report sentence is strongest?",
        answer: "The solid likely forms ions in solution, so mobile charge carriers are present.",
        options: [
          "The solid likely forms ions in solution, so mobile charge carriers are present.",
          "The solid must be a metal because all solids conduct electricity.",
          "The solution is safe because it is colourless."
        ]
      },
      {
        type: "choice",
        prompt: "Which final protocol step is scientifically and safely correct?",
        answer: "Wear eye protection, choose calibrated glassware for exact volumes, and explain observations using particles and bonding.",
        options: [
          "Wear eye protection, choose calibrated glassware for exact volumes, and explain observations using particles and bonding.",
          "Estimate all volumes in a beaker and identify unknowns by smell.",
          "Heat closed vessels and record only the colour."
        ]
      }
    ]
  }
];

const stationOrder = [
  "models",
  "notation",
  "isotopes",
  "pse",
  "bonding",
  "ions",
  "molecules",
  "intermolecular",
  "safety",
  "glassware"
];

const orderedCodeWords = [
  "LAB",
  "SAFETY",
  "FIRST",
  "UNLOCK",
  "THE",
  "YEAR",
  "REPORT",
  "WITH",
  "SAFE",
  "METHODS"
];

stations.sort((a, b) => stationOrder.indexOf(a.id) - stationOrder.indexOf(b.id));
stations.forEach((station, index) => {
  station.code = orderedCodeWords[index];
});

const state = {
  started: false,
  current: 0,
  team: "",
  solved: {},
  answers: {},
  timerStartedAt: null
};

const storageKey = "chemEscapeAdvancedStateV2";
const teacherPin = "P10";

function save() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function load() {
  const raw = localStorage.getItem(storageKey);
  if (!raw) return;
  try {
    Object.assign(state, JSON.parse(raw));
  } catch {
    localStorage.removeItem(storageKey);
  }
}

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (key === "class") node.className = value;
    else if (key === "text") node.textContent = value;
    else if (key.startsWith("on")) node.addEventListener(key.slice(2), value);
    else node.setAttribute(key, value);
  }
  for (const child of children) node.append(child);
  return node;
}

function stationIcon(type) {
  const drawings = {
    atom: '<circle cx="44" cy="32" r="5"></circle><ellipse cx="44" cy="32" rx="34" ry="11"></ellipse><ellipse cx="44" cy="32" rx="34" ry="11" transform="rotate(60 44 32)"></ellipse><ellipse cx="44" cy="32" rx="34" ry="11" transform="rotate(120 44 32)"></ellipse>',
    models: '<circle cx="16" cy="34" r="8"></circle><circle cx="42" cy="34" r="13"></circle><circle cx="72" cy="34" r="18"></circle><path d="M34 10h18M63 10h18"></path>',
    bonding: '<circle cx="24" cy="34" r="13"></circle><circle cx="64" cy="34" r="13"></circle><path d="M37 34h14M44 24v20"></path>',
    safety: '<path d="M44 8l32 56H12z"></path><path d="M44 25v17M44 52h.1"></path>',
    glassware: '<path d="M32 8h24M38 8v22L22 58h44L50 30V8"></path><path d="M30 48h28"></path>',
    transfer: '<path d="M22 16h44v42H22z"></path><path d="M30 28h28M30 40h20"></path><circle cx="66" cy="18" r="9"></circle>'
  };
  return `<svg viewBox="0 0 88 70">${drawings[type]}</svg>`;
}

function renderNav() {
  const nav = document.getElementById("stationNav");
  nav.innerHTML = "";
  stations.forEach((station, index) => {
    const solved = Boolean(state.solved[station.id]);
    const button = el("button", {
      class: "nav-button",
      type: "button",
      "aria-current": index === state.current ? "true" : "false",
      onclick: () => {
        state.current = index;
        save();
        render();
      }
    });
    button.append(
      el("span", { class: "nav-index", text: String(index + 1) }),
      el("span", { class: "nav-title", text: station.short }),
      el("span", { class: `status-dot ${solved ? "done" : ""}` })
    );
    nav.append(button);
  });
}

function renderAppChrome() {
  document.getElementById("teamLabel").textContent = state.team || "Team";
  const solvedCount = Object.values(state.solved).filter(Boolean).length;
  document.getElementById("progressLabel").textContent = `${solvedCount} / ${stations.length}`;
  const phrase = stations.map(s => state.solved[s.id] ? s.code : "_".repeat(s.code.length)).join(" ");
  document.getElementById("finalCodePreview").textContent = phrase;
}

function getAnswer(taskKey) {
  return state.answers[taskKey] || {};
}

function setAnswer(taskKey, value) {
  state.answers[taskKey] = value;
  save();
}

function renderTask(station, task, taskIndex) {
  const taskKey = `${station.id}-${taskIndex}`;
  const card = el("article", { class: "task-card" });
  card.append(el("h3", { text: task.prompt }));

  if (task.type === "inputs") {
    const values = getAnswer(taskKey);
    const row = el("div", { class: "input-row" });
    task.fields.forEach(([label]) => {
      const input = el("input", {
        value: values[label] || "",
        placeholder: label,
        oninput: (event) => {
          const next = { ...getAnswer(taskKey), [label]: event.target.value.trim() };
          setAnswer(taskKey, next);
        }
      });
      row.append(el("label", { text: label }, [input]));
    });
    card.append(row);
  }

  if (task.type === "choice") {
    const current = getAnswer(taskKey).value;
    const grid = el("div", { class: "answer-grid" });
    task.options.forEach(option => {
      const btn = el("button", {
        type: "button",
        class: `choice ${current === option ? "selected" : ""}`,
        text: option,
        onclick: () => {
          setAnswer(taskKey, { value: option });
          renderStation();
        }
      });
      grid.append(btn);
    });
    card.append(grid);
  }

  if (task.type === "match") {
    const values = getAnswer(taskKey);
    const choices = task.choices || [...new Set(task.pairs.map(pair => pair[1]))];
    task.pairs.forEach(([left]) => {
      const row = el("div", { class: "match-row" });
      row.append(el("strong", { text: left }));
      const select = el("select", {
        onchange: (event) => {
          const next = { ...getAnswer(taskKey), [left]: event.target.value };
          setAnswer(taskKey, next);
        }
      });
      select.append(el("option", { value: "", text: "Choose..." }));
      choices.forEach(choice => {
        const option = el("option", { value: choice, text: choice });
        if (values[left] === choice) option.selected = true;
        select.append(option);
      });
      row.append(select);
      card.append(row);
    });
  }

  if (task.type === "timeline") {
    const values = getAnswer(taskKey);
    const list = el("div", { class: "timeline-list" });
    task.answer.forEach((_, index) => {
      const row = el("div", { class: "timeline-item" });
      row.append(el("strong", { text: String(index + 1) }));
      const select = el("select", {
        onchange: (event) => {
          const next = { ...getAnswer(taskKey), [index]: event.target.value };
          setAnswer(taskKey, next);
        }
      });
      select.append(el("option", { value: "", text: "Choose model..." }));
      task.options.forEach(choice => {
        const option = el("option", { value: choice, text: choice });
        if (values[index] === choice) option.selected = true;
        select.append(option);
      });
      row.append(select);
      list.append(row);
    });
    card.append(list);
  }

  return card;
}

function taskIsCorrect(station, task, taskIndex) {
  const values = getAnswer(`${station.id}-${taskIndex}`);
  if (task.type === "inputs") {
    return task.fields.every(([label, answer]) => normalize(values[label]) === normalize(answer));
  }
  if (task.type === "choice") return values.value === task.answer;
  if (task.type === "match") {
    return task.pairs.every(([left, right]) => values[left] === right);
  }
  if (task.type === "timeline") {
    return task.answer.every((answer, index) => values[index] === answer);
  }
  return false;
}

function normalize(value = "") {
  return String(value).trim().toLowerCase().replace(",", ".");
}

function stationIsCorrect(station) {
  return station.tasks.every((task, index) => taskIsCorrect(station, task, index));
}

function renderStation() {
  const station = stations[state.current];
  const host = document.getElementById("stationHost");
  host.innerHTML = "";

  const header = el("div", { class: "station-header" });
  header.append(
    el("div", {}, [
      el("span", { class: "eyebrow", text: `Station ${state.current + 1}` }),
      el("h2", { text: station.title }),
      el("p", { text: station.intro })
    ]),
    el("div", { class: "station-visual" })
  );
  header.querySelector(".station-visual").innerHTML = stationIcon(station.visual);
  host.append(header);

  const grid = el("div", { class: "task-grid" });
  station.tasks.forEach((task, index) => grid.append(renderTask(station, task, index)));
  host.append(grid);

  const feedback = el("div", { class: "feedback", id: "stationFeedback" });
  const actions = el("div", { class: "station-actions" });
  actions.append(
    el("button", {
      class: "primary-button",
      type: "button",
      text: "Check lock",
      onclick: () => checkStation(station)
    }),
    el("button", {
      class: "secondary-button",
      type: "button",
      text: "Show hint",
      onclick: () => showHint(station)
    })
  );

  if (state.solved[station.id]) {
    actions.append(el("span", { class: "code-chip", text: `Code part: ${station.code}` }));
    feedback.className = "feedback good";
    feedback.textContent = "This lock is open.";
  }

  host.append(actions, feedback);
}

function checkStation(station) {
  const feedback = document.getElementById("stationFeedback");
  if (stationIsCorrect(station)) {
    state.solved[station.id] = true;
    save();
    feedback.className = "feedback good";
    feedback.textContent = `Correct. Code part unlocked: ${station.code}`;
    render();
    if (Object.values(state.solved).filter(Boolean).length === stations.length) {
      setTimeout(showFinal, 350);
    }
  } else {
    feedback.className = "feedback bad";
    feedback.textContent = "The lock stays closed. Check the technical details and try again.";
  }
}

function showHint(station) {
  const existing = document.querySelector(".hint-box");
  if (existing) existing.remove();
  const hint = el("div", { class: "hint-box", text: station.hint });
  document.querySelector(".station-actions").after(hint);
}

function showFinal() {
  document.getElementById("stationHost").hidden = true;
  document.getElementById("finalScreen").hidden = false;
}

function render() {
  renderNav();
  renderAppChrome();
  if (!state.started) {
    document.getElementById("introScreen").hidden = false;
    document.getElementById("topbar").hidden = true;
    document.getElementById("stationHost").hidden = true;
    document.getElementById("finalScreen").hidden = true;
    return;
  }
  document.getElementById("introScreen").hidden = true;
  document.getElementById("topbar").hidden = false;
  document.getElementById("stationHost").hidden = false;
  document.getElementById("finalScreen").hidden = true;
  renderStation();
}

function updateTimer() {
  if (!state.started || !state.timerStartedAt) return;
  const elapsed = Math.floor((Date.now() - state.timerStartedAt) / 1000);
  const remaining = Math.max(0, 90 * 60 - elapsed);
  const minutes = String(Math.floor(remaining / 60)).padStart(2, "0");
  const seconds = String(remaining % 60).padStart(2, "0");
  document.getElementById("timerLabel").textContent = `${minutes}:${seconds}`;
}

function renderTeacherKey() {
  const content = document.getElementById("teacherContent");
  content.innerHTML = "";
  content.append(el("p", { text: "Final phrase: LAB SAFETY FIRST UNLOCK THE YEAR REPORT WITH SAFE METHODS. Recommended lesson timing: 10 min intro, 65 min stations, 5 min final unlock, 10 min reflection." }));
  stations.forEach((station, index) => {
    content.append(el("h3", { text: `${index + 1}. ${station.title} — code ${station.code}` }));
    station.tasks.forEach((task, taskIndex) => {
      const block = el("p");
      block.append(el("strong", { text: `Task ${taskIndex + 1}: ` }));
      if (task.type === "inputs") block.append(document.createTextNode(task.fields.map(([k, v]) => `${k} = ${v}`).join("; ")));
      if (task.type === "choice") block.append(document.createTextNode(task.answer));
      if (task.type === "match") block.append(document.createTextNode(task.pairs.map(([l, r]) => `${l} -> ${r}`).join("; ")));
      if (task.type === "timeline") block.append(document.createTextNode(task.answer.join(" -> ")));
      content.append(block);
    });
  });
}

function downloadCertificate() {
  const name = state.team || "Team";
  const text = `Chemistry Escape Room Certificate\n\n${name} restored the missing safety protocol.\nFinal code: LAB SAFETY FIRST UNLOCK THE YEAR REPORT WITH SAFE METHODS\nTopics: nuclide notation, isotopes, atomic models, PSE trends, ions, bonding, molecules, intermolecular forces, lab safety and glassware\n`;
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${name.replace(/[^a-z0-9]+/gi, "_")}_certificate.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

document.getElementById("startButton").addEventListener("click", () => {
  state.started = true;
  state.team = document.getElementById("teamName").value.trim() || "Lab Team";
  state.timerStartedAt = Date.now();
  save();
  render();
});

document.getElementById("resetButton").addEventListener("click", () => {
  localStorage.removeItem(storageKey);
  Object.assign(state, { started: false, current: 0, team: "", solved: {}, answers: {}, timerStartedAt: null });
  document.getElementById("teamName").value = "";
  render();
});

document.getElementById("teacherToggle").addEventListener("click", () => {
  document.getElementById("teacherPin").value = "";
  document.getElementById("pinFeedback").textContent = "";
  document.getElementById("pinFeedback").className = "feedback";
  document.getElementById("pinDialog").showModal();
});

document.getElementById("pinForm").addEventListener("submit", (event) => {
  if (event.submitter?.value === "close") {
    document.getElementById("pinDialog").close();
    return;
  }
  event.preventDefault();
  const enteredPin = document.getElementById("teacherPin").value.trim();
  const feedback = document.getElementById("pinFeedback");
  if (enteredPin.toUpperCase() !== teacherPin) {
    feedback.className = "feedback bad";
    feedback.textContent = "Wrong PIN.";
    return;
  }
  document.getElementById("pinDialog").close();
  renderTeacherKey();
  document.getElementById("teacherDialog").showModal();
});

document.getElementById("downloadCertificate").addEventListener("click", downloadCertificate);

load();
document.getElementById("teamName").value = state.team || "";
render();
updateTimer();
setInterval(updateTimer, 1000);
