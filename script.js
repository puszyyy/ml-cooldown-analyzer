const categoriesDiv = document.getElementById("categories");
const heroesDiv = document.getElementById("heroes");
const lineupDiv = document.getElementById("lineup");
const modal = document.getElementById("spellModal");
const spellOptionsDiv = document.getElementById("spellOptions");

// ===== ULTIMATE COOLDOWN DATABASE =====
const ultDatabase = {
  "Miya": { name: "Turbo Stealth", levels: [30, 25, 20], color: "#8E44AD", label: "cooldown onlick" },
  "Balmond": { name: "Lethal Counter", levels: [34, 29, 24], color: "#C0392B", label: "cooldown onlick" },
  "Saber": { name: "Triple Sweep", levels: [44, 40, 36], color: "#3498DB", label: "cooldown onlick" },
  "Alice": { name: "Blood Ode", levels: [65, 60, 55], color: "#8B0000", label: "cooldown onlick" },
  "Nana": { name: "Molina Blitz", levels: [36, 32, 28], color: "#FF69B4", label: "cooldown onlick" },
  "Tigreal": { name: "Implosion", levels: [55, 50, 45], color: "#F1C40F", label: "cooldown onlick" },
  "Alucard": { name: "Fission Wave", levels: [40, 35, 30], color: "#B22222", label: "cooldown onlick" },
  "Karina": { name: "Shadow Assault", levels: [34, 30, 26], color: "#4B0082", label: "cooldown onlick" },
  "Akai": { name: "Heavy Spin", levels: [55, 50, 45], color: "#27AE60", label: "cooldown onlick" },
  "Franco": { name: "Bloody Hunt", levels: [62, 55, 48], color: "#5DADE2", label: "cooldown onlick" },
  "Bane": { name: "Deadly Catch", levels: [40, 35, 30], color: "#16A085", label: "cooldown onlick" },
  "Bruno": { name: "Wave of the World", levels: [38, 33, 28], color: "#E67E22", label: "cooldown onlick" },
  "Clint": { name: "Grenade Bombardment", levels: [30, 24, 18], color: "#8E6E53", label: "cooldown onlick" },
  "Rafaela": { name: "Holy Baptism", levels: [38, 34, 30], color: "#F7DC6F", label: "cooldown onlick" },
  "Eudora": { name: "Thunder's Wrath", levels: [32, 29, 26], color: "#1F78FF", label: "cooldown onlick" },
  "Zilong": { name: "Supreme Warrior", levels: [35, 31, 27], color: "#BDC3C7", label: "cooldown onlick" },
  "Fanny": { name: "Cut Throat", levels: [35, 30, 25], color: "#1ABC9C", label: "cooldown onlick" },
  "Layla": { name: "Destruction Rush", levels: [37, 32, 27], color: "#9B59B6", label: "cooldown onlick" },
  "Minotaur": { name: "Minoan Fury", levels: [60, 55, 50], color: "#922B21", label: "cooldown after ult end" },
  "Lolita": { name: "Noumenon Blast", levels: [55, 50, 45], color: "#48C9B0", label: "cooldown onlick" },
  "Hayabusa": { name: "Ougi: Shadow Kill", levels: [40, 40, 40], color: "#000000", label: "cooldown onlick" },
  "Freya": { name: "Valkyrie Descent", levels: [34, 20, 26], color: "#85C1E9", label: "cooldown onlick" },
  "Gord": { name: "Mystic Gush", levels: [44, 40, 36], color: "#BB8FCE", label: "cooldown onlick" },
  "Natalia": { name: "The Hunt", levels: [0, 0, 0], color: "#2C3E50", label: "cooldown onlick" },
  "Kagura": { 
    ults: [
      { name: "Close Range", levels: [36, 33, 30], color: "#C71585", label: "cooldown onlick" },
      { name: "Long Range", levels: [36, 33, 30], color: "#5B2C6F", label: "cooldown onlick" }
    ]
  },
  "Chou": { name: "The Way of Dragon", levels: [34, 34, 34], color: "#F4D03F", label: "cooldown after ult end" },
  "Sun": { name: "Clone Techniques", levels: [36, 32, 28], color: "#F39C12", label: "cooldown onlick" },
  "Alpha": { name: "Spear of Alpha", levels: [20, 18, 16], color: "#7F8C8D", label: "cooldown onlick" },
  "Ruby": { name: "I'm Offended!", levels: [26, 23, 20], color: "#922B21", label: "cooldown onlick" },
  "Yi Sun-shin": { name: "Mountain Shocker", levels: [60, 60, 60], color: "#2E4053", label: "cooldown onlick" },
  "Moskov": { name: "Spear of Destruction", levels: [55, 50, 45], color: "#5B2C6F", label: "cooldown after ult end" },
  "Johnson": { name: "Full Throttle", levels: [36, 33, 30], color: "#34495E", label: "cooldown onlick" },
  "Cyclops": { name: "Star Power Lockdown", levels: [26, 22, 18], color: "#2980B9", label: "cooldown onlick" },
  "Estes": { name: "Blessing of Moon Goddess", levels: [55, 50, 45], color: "#82E0AA", label: "cooldown onlick" },
  "Hilda": { name: "Power of Wildness", levels: [32, 28, 24], color: "#7D6608", label: "cooldown onlick" },
  "Aurora": { name: "Cold Destruction", levels: [50, 45, 40], color: "#AED6F1", label: "cooldown onlick" },
  "Lapu-Lapu": { name: "Bravest Fighter", levels: [30, 27, 24], color: "#A97142", label: "cooldown after ult end" },
  "Vexana": { name: "Eternal Guard", levels: [60, 53, 46], color: "#6C3483", label: "cooldown onlick" },
  "Roger": { name: "Restore Human Form", levels: [0, 0, 0], color: "#5D4037", label: "cooldown onlick" },
  "Karrie": { name: "Speedy Lightwheel", levels: [35, 32, 29], color: "#00BFFF", label: "cooldown onlick" },
  "Gatotkaca": { name: "Avatar of Guardian", levels: [54, 50, 46], color: "#D4AC0D", label: "cooldown onlick" },
  "Harley": { name: "Deadly Magic", levels: [36, 33, 30], color: "#E74C3C", label: "cooldown onlick" },
  "Irithel": { name: "Heavy Crossbow", levels: [30, 27, 24], color: "#1E8449", label: "cooldown onlick" },
  "Grock": { name: "Wild Charge", levels: [55, 50, 45], color: "#707B7C", label: "cooldown onlick" },
  "Argus": { name: "Eternal Evil", levels: [60, 55, 50], color: "#B7950B", label: "cooldown onlick" },
  "Odette": { name: "Swan Song", levels: [50, 45, 40], color: "#F5B7B1", label: "cooldown onlick" },
  "Lancelot": { name: "Phantom Execution", levels: [36, 32, 28], color: "#FF6F91", label: "cooldown onlick" },
  "Diggie": { name: "Time Journey", levels: [76, 70, 64], color: "#F7DC6F", label: "cooldown onlick" },
  "Hylos": { name: "Glorious Pathway", levels: [40, 36, 32], color: "#117A65", label: "cooldown onlick" },
  "Zhask": { name: "Dominator's Descent", levels: [48, 44, 40], color: "#512E5F", label: "cooldown onlick" },
  "Helcurt": { name: "Dark Night Falls", levels: [60, 55, 50], color: "#1C1C1C", label: "cooldown onlick" },
  "Pharsa": { name: "Feathered Air Strike", levels: [36, 33, 30], color: "#2E86C1", label: "cooldown onlick" },
  "Lesley": { name: "Ultimate Snipe", levels: [40, 40, 40], color: "#566573", label: "cooldown onlick" },
  "Jawhead": { name: "Unstoppable Force", levels: [35, 30, 25], color: "#D35400", label: "cooldown onlick" },
  "Angela": { name: "Heartguard", levels: [60, 60, 60], color: "#FADBD8", label: "cooldown onlick" },
  "Gusion": { name: "Incandescence", levels: [24, 20, 16], color: "#5DADE2", label: "cooldown onlick" },
  "Valir": { name: "Vengeance Flame", levels: [36, 33, 30], color: "#FF4500", label: "cooldown onlick" },
  "Martis": { name: "Decimation", levels: [36, 32, 28], color: "#7B241C", label: "cooldown onlick" },
  "Uranus": { name: "Consecration", levels: [42, 39, 36], color: "#1A5276", label: "cooldown onlick" },
  "Hanabi": { name: "Higanbana", levels: [40, 35, 30], color: "#A93226", label: "cooldown onlick" },
  "Chang'e": { name: "Meteor Shower", levels: [24, 22, 20], color: "#F9E79F", label: "cooldown onlick" },
  "Kaja": { name: "Divine Judgment", levels: [60, 60, 60], color: "#F1C40F", label: "cooldown onlick" },
  "Selena": { name: "Primal Darkness", levels: [0, 0, 0], color: "#4A235A", label: "cooldown onlick" },
  "Aldous": { name: "Chase Fate", levels: [60, 55, 50], color: "#1B4F72", label: "cooldown onlick" },
  "Claude": { name: "Blazing Duet", levels: [50, 45, 40], color: "#F39C12", label: "cooldown onlick" },
  "Vale": { name: "Windstorm", levels: [36, 33, 30], color: "#85C1E9", label: "cooldown onlick" },
  "Leomord": { name: "Phantom Steed", levels: [30, 25, 20], color: "#424949", label: "cooldown after ult end" },
  "Lunox": { 
    ults: [
      { name: "Brilliance", levels: [30, 26, 32], color: "#FDEBD0", label: "cooldown onlick" },
      { name: "Darkening", levels: [30, 26, 32], color: "#6C3483", label: "cooldown onlick" }
    ]
  },
  "Hanzo": { name: "Kinjutsu: Pinnacle Ninja", levels: [24, 20, 16], color: "#641E16", label: "cooldown onlick" },
  "Belerick": { name: "Nature's Wrath", levels: [50, 46, 42], color: "#196F3D", label: "cooldown onlick" },
  "Kimmy": { name: "Maximum Charge", levels: [50, 45, 40], color: "#EB984E", label: "cooldown onlick" },
  "Thamuz": { name: "Inferno", levels: [38, 34, 30], color: "#922B21", label: "cooldown onlick" },
  "Harith": { name: "Zaman Force", levels: [40, 35, 30], color: "#AED6F1", label: "cooldown onlick" },
  "Minsitthar": { name: "King's Calling", levels: [55, 50, 45], color: "#D4AC0D", label: "cooldown onlick" },
  "Kadita": { name: "Rough Waves", levels: [40, 36, 32], color: "#1F618D", label: "cooldown onlick" },
  "Faramis": { name: "Cult Altar", levels: [90, 80, 70], color: "#145A32", label: "cooldown onlick" },
  "Badang": { name: "Fist Crack", levels: [45, 40, 35], color: "#F4D03F", label: "cooldown onlick" },
  "Khufra": { name: "Tyrant's Rage", levels: [50, 45, 40], color: "#9C640C", label: "cooldown onlick" },
  "Granger": { name: "Death Sonata", levels: [0, 0, 0], color: "#7B241C", label: "cooldown onlick" },
  "Guinevere": { name: "Violet Requiem", levels: [52, 46, 40], color: "#F1948A", label: "cooldown onlick" },
  "Esmeralda": { name: "Falling Starmoon", levels: [30, 25, 20], color: "#7D3C98", label: "cooldown onlick" },
  "Terizla": { name: "Penalty Zone", levels: [50, 43, 36], color: "#424949", label: "cooldown onlick" },
  "X.Borg": { name: "Last Insanity", levels: [30, 27, 24], color: "#D35400", label: "cooldown onlick" },
  "Ling": { name: "Tempest of Blades", levels: [52, 49, 46], color: "#ECF0F1", label: "cooldown onlick" },
  "Dyrroth": { name: "Abysm Strike", levels: [36, 32, 28], color: "#943126", label: "cooldown onlick" },
  "Lylia": { name: "Black Shoes", levels: [45, 40, 35], color: "#C0392B", label: "cooldown onlick" },
  "Baxia": { name: "Tortoise's Puissance", levels: [40, 35, 30], color: "#1E8449", label: "cooldown after ult end" },
  "Masha": { name: "Thunderclap", levels: [35, 35, 35], color: "#E67E22", label: "cooldown onlick" },
  "Wanwan": { name: "Crossbow of Tang", levels: [50, 46, 42], color: "#58D68D", label: "cooldown onlick" },
  "Silvanna": { name: "Imperial Justice", levels: [52, 48, 44], color: "#F1C40F", label: "cooldown onlick" },
  "Cecilion": { name: "Bats Feast", levels: [44, 41, 38], color: "#6C3483", label: "cooldown onlick" },
  "Carmilla": { name: "Curse of Blood", levels: [60, 52, 44], color: "#922B21", label: "cooldown onlick" },
  "Atlas": { name: "Fatal Links", levels: [55, 50, 45], color: "#154360", label: "cooldown onlick" },
  "Popol and Kupa": { name: "Popol's Surprise", levels: [38, 35, 32], color: "#8E6E53", label: "cooldown onlick" },
  "Yu Zhong": { name: "Black Dragon Form", levels: [85, 35, 65], color: "#4A235A", label: "cooldown onlick" },
  "Luo Yi": { name: "Diversion", levels: [60, 60, 60], color: "#566573", label: "cooldown onlick" },
  "Benedetta": { name: "Alecto: Final Blow", levels: [45, 40, 35], color: "#2C3E50", label: "cooldown onlick" },
  "Khaleed": { name: "Raging Sandstorm", levels: [46, 42, 38], color: "#D4AC0D", label: "cooldown onlick" },
  "Barats": { name: "Detona's Welcome", levels: [50, 45, 40], color: "#229954", label: "cooldown onlick" },
  "Brody": { name: "Torn-Apart Memory", levels: [32, 28, 24], color: "#512E5F", label: "cooldown onlick" },
  "Yve": { name: "Real World Manipulation", levels: [60, 60, 60], color: "#1A5276", label: "cooldown after ult end" },
  "Mathilda": { name: "Circling Eagle", levels: [65, 65, 65], color: "#5DADE2", label: "cooldown onlick" },
  "Paquito": { name: "Knockout Strike", levels: [15, 13.5, 12], color: "#C0392B", label: "cooldown onlick" },
  "Gloo": { name: "Split, Split", levels: [50, 50, 50], color: "#27AE60", label: "cooldown after ult end" },
  "Beatrix": { 
    ults: [
      { name: "Nibirus", levels: [40, 35, 30], color: "#4A235A", label: "cooldown onlick" },
      { name: "Renner", levels: [32, 28, 24], color: "#34495E", label: "cooldown onlick" },
      { name: "Bennett", levels: [40, 35, 30], color: "#FF5733", label: "cooldown onlick" },
      { name: "Wesker", levels: [20, 16, 12], color: "#7B241C", label: "cooldown onlick" }
    ]
  },
  "Phoveus": { name: "Demonic Force", levels: [0, 0, 0], color: "#4A235A", label: "cooldown onlick" },
  "Natan": { name: "Entropy?", levels: [24, 20, 16], color: "#5DADE2", label: "cooldown onlick" },
  "Aulus": { name: "Undying Fury", levels: [50, 45, 40], color: "#922B21", label: "cooldown onlick" },
  "Aamon": { name: "Endless Shards", levels: [50, 45, 40], color: "#AF7AC5", label: "cooldown onlick" },
  "Valentina": { name: "I Am You", levels: [0, 0, 0], color: "#000000", label: "cooldown onlick" },
  "Edith": { name: "Primal Wrath", levels: [40, 37, 34], color: "#7F8C8D", label: "cooldown onlick" },
  "Floryn": { name: "Bloom", levels: [70, 70, 70], color: "#FADBD8", label: "cooldown onlick" },
  "Yin": { name: "My Turn", levels: [52, 48, 44], color: "#C0392B", label: "cooldown onlick" },
  "Melissa": { name: "Go Away!", levels: [50, 45, 40], color: "#FF69B4", label: "cooldown onlick" },
  "Xavier": { name: "Dawning Light", levels: [56, 56, 56], color: "#AED6F1", label: "cooldown onlick" },
  "Julian": { name: "Order & Chaos", levels: [0, 0, 0], color: "#2E4053", label: "cooldown onlick" },
  "Fredrinn": { name: "Appraiser's Wrath", levels: [30, 27, 24], color: "#6E2C00", label: "cooldown onlick" },
  "Joy": { name: "Ha, Electrifying Beats!", levels: [28, 28, 28], color: "#F7DC6F", label: "cooldown onlick" },
  "Novaria": { name: "Astral Echo", levels: [48, 48, 48], color: "#2E86C1", label: "cooldown onlick" },
  "Arlott": { name: "Final Slash", levels: [24, 21, 18], color: "#922B21", label: "cooldown onlick" },
  "Ixia": { name: "Full Barrage", levels: [42, 36, 30], color: "#E67E22", label: "cooldown onlick" },
  "Nolan": { name: "Fracture", levels: [21, 18, 15], color: "#1A5276", label: "cooldown onlick" },
  "Cici": { name: "Blazing Duet", levels: [40, 36, 32], color: "#FF6F91", label: "cooldown onlick" },
  "Chip": { name: "Shortcut", levels: [70, 60, 50], color: "#F4D03F", label: "cooldown onlick" },
  "Zhuxin": { name: "Crimson Beacon", levels: [60, 55, 50], color: "#A93226", label: "cooldown onlick" },
  "Suyou": { name: "Evil Quiler", levels: [8.5, 7.8, 7], color: "#58D68D", label: "cooldown onlick" },
  "Lukas": { name: "Unleash the beast", levels: [0, 0, 0], color: "#717D7E", label: "cooldown onlick" },
  "Kalea": { name: "Tsunami Slam", levels: [56, 52, 48], color: "#1ABC9C", label: "cooldown onlick" },
  "Zetian": { name: "Fury of the Phoenix", levels: [90, 80, 70], color: "#D4AC0D", label: "cooldown onlick" },
  "Obsidia": { name: "Hunt of Bone", levels: [40, 35, 30], color: "#1C1C1C", label: "cooldown onlick" },
  "Sora": { 
    ults: [
      { name: "Thunder", levels: [24, 20, 16], color: "#5B2C6F", label: "cooldown onlick" },
      { name: "Torrent", levels: [32, 28, 24], color: "#87CEEB", label: "cooldown onlick" }
    ]
  },
  "Marcel": { name: "Golden Hour", levels: [74, 68, 62], color: "#6C3483", label: "cooldown onlick" }
};

function getUltData(heroName) {
  return ultDatabase[heroName] || null;
}

function getHeroUltBaseCD(heroName, level = 3, ultIndex = 0) {
  const ultData = getUltData(heroName);
  if (!ultData) return 40;
  if (ultData.ults) {
    const selectedUlt = ultData.ults[ultIndex] || ultData.ults[0];
    return selectedUlt.levels[level - 1] || 40;
  }
  return ultData.levels[level - 1] || 40;
}

// Emblem Modal
const emblemModal = document.createElement("div");
emblemModal.id = "emblemModal";
emblemModal.className = "modal hidden";
emblemModal.innerHTML = `
  <div class="modal-content" style="max-width: 400px; background: #1e293b; border: 1px solid #334155; border-radius: 16px; padding: 20px;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
      <h3 style="margin:0; color: #00ff88;">⚜️ Select Emblem & Talent</h3>
      <button id="closeEmblemModalBtn" style="background: none; border: none; color: #94a3b8; font-size: 24px; cursor: pointer;">✕</button>
    </div>
    <div id="emblemOptions"></div>
    <div id="talentOptions" style="margin-top:20px;"></div>
    <button id="confirmEmblemBtn" style="width:100%; padding:14px; margin-top:20px; background: #0ea5e9; color:white; border:none; border-radius:10px; font-weight:bold; font-size:16px; cursor:pointer;">✅ Confirm Selection</button>
  </div>
`;
document.body.appendChild(emblemModal);

emblemModal.querySelector("#closeEmblemModalBtn").onclick = () => {
  emblemModal.classList.add("hidden");
  pendingHero = null;
  pendingSpell = null;
};

emblemModal.addEventListener("click", (e) => {
  if (e.target === emblemModal) {
    emblemModal.classList.add("hidden");
    pendingHero = null;
    pendingSpell = null;
  }
});

let pendingHero = null;
let pendingSpell = null;
let selectedHeroes = [];

// SPELL LIST
const spells = [
  { name: "Flicker", cd: 120 },
  { name: "Sprint", cd: 100 },
  { name: "Purify", cd: 90 },
  { name: "Execute", cd: 90 },
  { name: "Aegis", cd: 75 },
  { name: "Petrify", cd: 75 },
  { name: "Arrival", cd: 75 },
  { name: "Vengeance", cd: 75 },
  { name: "Revitalize", cd: 75 },
  { name: "Inspire", cd: 75 },
  { name: "Flameshot", cd: 50 },
  { name: "Retribution", cd: 35 }
];

// ITEMS passive
const passiveItems = [
  { name: "Rose Gold Meteor", cd: 60 },
  { name: "Flask of the Oasis", cd: 60 },
  { name: "Immortality", cd: 210 },
  { name: "Queen's Wings", cd: 90 },
  { name: "Chastise Pauldron", cd: 60 }
];

// ITEMS active
const activeItems = [
  { name: "Wind of Nature", cd: 90 },
  { name: "Winter Crown", cd: 100 },
  { name: "Conceal Roam", cd: 80 }
];

//items CDR
const cdrItems = {
  Physical: [
    { name: "Greatspear", cdr: 0.10 },
    { name: "Hunter Strike", cdr: 0.10 },
    { name: "Endless Battle", cdr: 0.10 },
    { name: "War Axe", cdr: 0.10 }
  ],
  Magic: [
    { name: "Wishing Lantern", cdr: 0.10 },
    { name: "Flask of the Oasis", cdr: 0.10 },
    { name: "Lightning Truncheon", cdr: 0.10 },
    { name: "Starlium Scythe", cdr: 0.10 },
    { name: "Clock of Destiny", cdr: 0.10 },
    { name: "Feather of Heavens", cdr: 0.05 },
    { name: "Enchanted Talisman", cdr: 0.15 }
  ],
  Adaptive: [
    { name: "Winter Crown", cdr: 0.05 },
    { name: "Fleeting Time", cdr: 0.15 }
  ],
  Boots: [
    { name: "Magic Boots", cdr: 0.10 }
  ],
  Defense: [
    { name: "Brute Force", cdr: 0.10 },
    { name: "Oracle", cdr: 0.10 },
    { name: "Queen's Wings", cdr: 0.10 }
  ]
};

// HERO DATA
const data = {
  Tanks: ["Akai","Alice","Atlas","Barats","Baxia","Belerick","Edith","Franco","Gatotkaca","Gloo","Grock","Hylos","Johnson","Khufra","Minotaur","Tigreal","Uranus"],
  Fighters: ["Aldous","Alpha","Alucard","Arlott","Aulus","Badang","Balmond","Bane","Cici","Chou","Dyrroth","Fredrinn","Freya","Guinevere","Hilda","Jawhead","Julian","Kaja","Khaleed","Lapu-Lapu","Leomord","Lukas","Martis","Masha","Minsitthar","Paquito","Phoveus","Roger","Ruby","Silvanna","Sora","Sun","Suyou","Terizla","Thamuz","X.Borg","Yin","Yu Zhong","Zilong"],
  Assassins: ["Aamon","Benedetta","Fanny","Gusion","Hanzo","Hayabusa","Helcurt","Joy","Karina","Lancelot","Ling","Natalia","Nolan","Saber","Selena"],
  Mages: ["Aurora","Cecilion","Chang'e","Cyclops","Esmeralda","Eudora","Faramis","Gord","Harith","Harley","Kadita","Kagura","Lunox","Luo Yi","Lylia","Nana","Novaria","Odette","Pharsa","Vale","Valentina","Valir","Vexana","Xavier","Yve","Zetian","Zhask","Zhuxin"],
  Marksmen: ["Beatrix","Brody","Bruno","Claude","Clint","Granger","Hanabi","Irithel","Ixia","Karrie","Kimmy","Layla","Lesley","Melissa","Miya","Moskov","Natan","Obsidia","Popol and Kupa","Wanwan","Yi Sun-shin"],
  Supports: ["Angela","Carmilla","Chip","Diggie","Estes","Floryn","Kalea","Marcel","Mathilda","Rafaela"]
};

// CREATE CATEGORY
const allCategories = ["All", ...Object.keys(data)];
allCategories.forEach(cat => {
  const btn = document.createElement("button");
  btn.textContent = cat;
  btn.onclick = () => {
    if (cat === "All") {
      showAllHeroes();
    } else {
      showHeroes(cat);
    }
  };
  categoriesDiv.appendChild(btn);
});

// SEARCH BAR SETUP
const searchContainer = document.createElement("div");
searchContainer.style.margin = "10px 0";
searchContainer.style.display = "flex";
searchContainer.style.gap = "10px";

const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.placeholder = "🔍 Search hero...";
searchInput.style.flex = "1";
searchInput.style.padding = "10px";
searchInput.style.borderRadius = "8px";
searchInput.style.border = "1px solid #334155";
searchInput.style.background = "#1e293b";
searchInput.style.color = "white";
searchInput.style.fontSize = "14px";

const clearBtn = document.createElement("button");
clearBtn.textContent = "✕";
clearBtn.style.padding = "10px 15px";
clearBtn.style.background = "#334155";
clearBtn.style.border = "none";
clearBtn.style.borderRadius = "8px";
clearBtn.style.color = "white";
clearBtn.style.cursor = "pointer";
clearBtn.onclick = () => {
  searchInput.value = "";
  showAllHeroes();
};

searchContainer.appendChild(searchInput);
searchContainer.appendChild(clearBtn);
heroesDiv.parentNode.insertBefore(searchContainer, heroesDiv);

let currentCategory = "All";
let currentHeroes = getAllHeroes();

function getAllHeroes() {
  const all = [];
  Object.keys(data).forEach(cat => {
    data[cat].forEach(hero => {
      all.push({ name: hero, category: cat });
    });
  });
  return all;
}

function renderHeroCards(heroes) {
  heroesDiv.innerHTML = "";
  if (heroes.length === 0) {
    heroesDiv.innerHTML = "<p style='grid-column:1/-1;text-align:center;color:#94a3b8;'>No heroes found</p>";
    return;
  }
  heroes.forEach(hero => {
    const div = document.createElement("div");
    div.className = "hero";
    const img = document.createElement("img");
    const heroLower = hero.name.toLowerCase();
    const jpgHeroes = ["helcurt", "ling"];
    const ext = jpgHeroes.includes(heroLower) ? ".jpg" : ".png";
    let filename = heroLower;
    
    img.src = `Heroesimage/${filename}${ext}`;
    img.alt = hero.name;
    img.onerror = () => {
      img.src = `https://via.placeholder.com/200x260/1e293b/white?text=${hero.name}`;
    };
    const name = document.createElement("p");
    name.textContent = hero.name;
    div.appendChild(img);
    div.appendChild(name);
    div.onclick = () => openSpell(hero.name);
    heroesDiv.appendChild(div);
  });
}

function showHeroes(category) {
  currentCategory = category;
  const heroes = data[category].map(name => ({ name, category }));
  renderHeroCards(heroes);
}

function showAllHeroes() {
  currentCategory = "All";
  renderHeroCards(currentHeroes);
}

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase().trim();
  let heroesToSearch = [];
  if (currentCategory === "All") {
    heroesToSearch = currentHeroes;
  } else {
    heroesToSearch = data[currentCategory].map(name => ({ name, category: currentCategory }));
  }
  if (query === "") {
    renderHeroCards(heroesToSearch);
    return;
  }
  const filtered = heroesToSearch.filter(hero => hero.name.toLowerCase().includes(query));
  renderHeroCards(filtered);
});

showAllHeroes();

// SPELL PICK
function openSpell(hero) {
  if (selectedHeroes.length >= 5) return alert("Max 5 heroes");
  if (selectedHeroes.find(h => h.name === hero)) return alert("Already selected");

  spellOptionsDiv.innerHTML = "";
  spells.forEach(spell => {
    const btn = document.createElement("button");
    btn.style.display = "flex";
    btn.style.flexDirection = "column";
    btn.style.alignItems = "center";
    btn.style.gap = "4px";
    btn.style.padding = "8px";
    btn.style.background = "#1e293b";
    btn.style.border = "none";
    btn.style.borderRadius = "6px";
    btn.style.color = "white";
    btn.style.cursor = "pointer";

    const img = document.createElement("img");
    img.src = `spellimage/${spell.name}.webp`;
    img.style.width = "40px";
    img.style.height = "40px";

    const text = document.createElement("span");
    text.textContent = spell.name;
    text.style.fontSize = "12px";

    btn.appendChild(img);
    btn.appendChild(text);
    btn.onclick = () => {
      pendingHero = hero;
      pendingSpell = spell;
      modal.classList.add("hidden");
      openEmblemSelection();
    };
    spellOptionsDiv.appendChild(btn);
  });

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "✕ Close";
  closeBtn.className = "close-btn";
  closeBtn.onclick = () => modal.classList.add("hidden");
  spellOptionsDiv.appendChild(closeBtn);

  modal.classList.remove("hidden");
}

// EMBLEM SELECTION
function openEmblemSelection() {
  const emblemOptionsDiv = document.getElementById("emblemOptions");
  const talentOptionsDiv = document.getElementById("talentOptions");
  
  const emblems = [
    { name: "None", cdr: 0, icon: "❌", color: "#64748b" },
    { name: "Support", cdr: 0.10, icon: "🛡️", color: "#10b981" },
    { name: "Mage", cdr: 0.05, icon: "🔮", color: "#8b5cf6" }
  ];
  
  emblemOptionsDiv.innerHTML = "<p style='margin:15px 0 10px; color:#94a3b8; font-weight:bold;'>🎯 CHOOSE EMBLEM:</p>";
  
  let selectedEmblem = emblems[0];
  
  emblems.forEach((emblem, index) => {
    const btn = document.createElement("button");
    btn.style.display = "flex";
    btn.style.alignItems = "center";
    btn.style.width = "100%";
    btn.style.padding = "14px 16px";
    btn.style.margin = "8px 0";
    btn.style.background = index === 0 ? emblem.color : "#1e293b";
    btn.style.border = index === 0 ? `2px solid ${emblem.color}` : "1px solid #475569";
    btn.style.borderRadius = "12px";
    btn.style.color = "white";
    btn.style.cursor = "pointer";
    btn.style.fontSize = "15px";
    btn.style.fontWeight = "bold";
    btn.style.boxShadow = index === 0 ? "0 4px 8px rgba(0,0,0,0.3)" : "none";
    
    const iconSpan = document.createElement("span");
    iconSpan.style.fontSize = "28px";
    iconSpan.style.marginRight = "15px";
    iconSpan.textContent = emblem.icon;
    
    const textSpan = document.createElement("span");
    textSpan.style.flex = "1";
    textSpan.style.textAlign = "left";
    textSpan.innerHTML = `${emblem.name} ${emblem.cdr > 0 ? '<span style="color:#00ff88; font-size:13px; margin-left:8px;">+' + (emblem.cdr * 100) + '% CDR</span>' : ''}`;
    
    btn.appendChild(iconSpan);
    btn.appendChild(textSpan);
    
    btn.onclick = () => {
      document.querySelectorAll("#emblemOptions button").forEach(b => {
        b.style.background = "#1e293b";
        b.style.border = "1px solid #475569";
        b.style.boxShadow = "none";
      });
      btn.style.background = emblem.color;
      btn.style.border = `2px solid ${emblem.color}`;
      btn.style.boxShadow = "0 4px 12px rgba(0,0,0,0.4)";
      selectedEmblem = emblem;
    };
    
    emblemOptionsDiv.appendChild(btn);
  });
  
  talentOptionsDiv.innerHTML = `
    <p style='margin:20px 0 10px; color:#94a3b8; font-weight:bold;'>✨ TALENTS (Check all that apply):</p>
    
    <label style="display:flex; align-items:center; gap:15px; padding:14px; margin-bottom:8px; background:#1e293b; border:1px solid #334155; border-radius:12px; cursor:pointer;">
      <input type="checkbox" id="inspireCheckbox" style="width:20px; height:20px; accent-color:#fbbf24;">
      <span style="display:flex; align-items:center; gap:10px;">
        <span style="font-size:24px;">✨</span>
        <div>
          <div style="font-weight:bold; font-size:14px;">Inspire</div>
          <div style="color:#00ff88; font-size:12px;">+5% Cooldown Reduction (All Skills)</div>
        </div>
      </span>
    </label>
    
    <label style="display:flex; align-items:center; gap:15px; padding:14px; background:#1e293b; border:1px solid #334155; border-radius:12px; cursor:pointer;">
      <input type="checkbox" id="pytCheckbox" style="width:20px; height:20px; accent-color:#10b981;">
      <span style="display:flex; align-items:center; gap:10px;">
        <span style="font-size:24px;">🤝</span>
        <div>
          <div style="font-weight:bold; font-size:14px;">Pull Yourself Together</div>
          <div style="color:#10b981; font-size:12px;">20% CDR (Spell & Active Items only)</div>
        </div>
      </span>
    </label>
  `;
  
  const confirmBtn = document.getElementById("confirmEmblemBtn");
  confirmBtn.onclick = () => {
    const inspireChecked = document.getElementById("inspireCheckbox").checked;
    const pytChecked = document.getElementById("pytCheckbox").checked;
    addHeroWithEmblem(pendingHero, pendingSpell, selectedEmblem, inspireChecked, pytChecked);
    emblemModal.classList.add("hidden");
    pendingHero = null;
    pendingSpell = null;
  };
  
  emblemModal.classList.remove("hidden");
}

function addHeroWithEmblem(hero, spell, emblem, inspire, pyt) {
  const ultData = getUltData(hero);
  let ults = [];
  
  if (!ultData) {
    ults = [{
      name: "Not Available",
      levels: [0, 0, 0],
      color: "#64748b",
      label: "cooldown onlick",
      index: 0,
      state: { timer: null, time: 0, label: null }
    }];
  } else if (ultData.ults) {
    ults = ultData.ults.map((u, idx) => ({
      ...u,
      index: idx,
      state: { timer: null, time: 0, label: null }
    }));
  } else {
    ults = [{
      ...ultData,
      index: 0,
      state: { timer: null, time: 0, label: null }
    }];
  }
  
  selectedHeroes.push({
    name: hero,
    spell: spell,
    emblem: emblem,
    inspire: inspire,
    pyt: pyt,
    items: [],
    activeSelected: [],
    passiveSelected: [],
    ultLevel: 3,
    selectedUltIndex: 0,
    ults: ults,
    hasCopiedUlt: false,
    copiedUlt: null,
    spellState: { timer: null, time: 0, label: null },
    activeStates: {}
  });
  render();
  window.scrollTo(0, document.body.scrollHeight);
}

function removeHero(i) {
  selectedHeroes.splice(i, 1);
  render();
}

function getUltCD(heroName, heroData, ultIndex = 0) {
  let base;
  if (heroData.hasCopiedUlt && heroData.copiedUlt) {
    base = heroData.copiedUlt.levels[heroData.ultLevel - 1] || 40;
  } else {
    base = getHeroUltBaseCD(heroName, heroData.ultLevel || 3, ultIndex);
  }
  const reduction = getTotalCDR(heroData);
  return Math.round(base * (1 - reduction));
}

// RENDER
function render() {
  lineupDiv.innerHTML = "";
  const isFull = selectedHeroes.length >= 5;

  if (isFull) {
    heroesDiv.innerHTML = "<h3 style='grid-column:1/-1;text-align:center;padding:20px;'>Dashboard Mode (Max 5 Heroes Reached)</h3>";
    categoriesDiv.style.pointerEvents = "none";
    categoriesDiv.style.opacity = "0.4";
    searchInput.disabled = true;
    searchInput.style.opacity = "0.5";
    clearBtn.disabled = true;
    clearBtn.style.opacity = "0.5";
  } else {
    categoriesDiv.style.pointerEvents = "auto";
    categoriesDiv.style.opacity = "1";
    searchInput.disabled = false;
    searchInput.style.opacity = "1";
    clearBtn.disabled = false;
    clearBtn.style.opacity = "1";
    if (currentCategory === "All") {
      showAllHeroes();
    } else {
      showHeroes(currentCategory);
    }
  }

  selectedHeroes.forEach((h, i) => {
    const box = document.createElement("div");
    box.className = "enemy";

    const heroLower = h.name.toLowerCase();
    const jpgHeroes = ["helcurt", "ling"];
    const ext = jpgHeroes.includes(heroLower) ? ".jpg" : ".png";
    let filename = heroLower;
    
    box.style.backgroundImage = `url('Heroesimage/${filename}${ext}')`;
    box.style.backgroundSize = "cover";
    box.style.backgroundPosition = "center";
    box.style.backgroundRepeat = "no-repeat";
    box.style.position = "relative";
    box.style.isolation = "isolate";
    
    const overlay = document.createElement("div");
    overlay.className = "enemy-overlay"; // ← idagdag ito
    overlay.style.position = "absolute";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(15, 23, 42, 0.85)";
    overlay.style.zIndex = "1";
    overlay.style.borderRadius = "10px";
    box.appendChild(overlay);

    // TITLE ROW
    const titleRow = document.createElement("div");
    titleRow.style.display = "flex";
    titleRow.style.justifyContent = "space-between";
    titleRow.style.alignItems = "center";
    titleRow.style.position = "relative";
    titleRow.style.zIndex = "2";
    titleRow.style.marginBottom = "5px";

    const title = document.createElement("h3");
    title.style.margin = "0";
    title.style.flex = "1";
    let emblemText = "";
    if (h.emblem && h.emblem.name !== "None") {
      emblemText = ` | ${h.emblem.name} ${h.emblem.cdr > 0 ? '(' + (h.emblem.cdr * 100) + '%)' : ''}`;
    }
    if (h.inspire) {
      emblemText += ` | ✨ Inspire (5%)`;
    }
    if (h.pyt) {
      emblemText += ` | 🤝 PYT (20% Spell/Active)`;
    }
    const totalCDR = getTotalCDR(h);
    const cdrPercent = Math.round(totalCDR * 100);
    const cdrDisplay = totalCDR > 0 ? ` | 🔄 CDR: ${cdrPercent}%` : '';
    title.textContent = `${h.name} (${h.spell.name})${emblemText}${cdrDisplay}`;

    const btnContainer = document.createElement("div");
    btnContainer.style.display = "flex";
    btnContainer.style.gap = "8px";
    btnContainer.style.alignItems = "center";

    // Remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "✕";
    removeBtn.title = "Remove Hero";
    removeBtn.style.background = "#dc2626";
    removeBtn.style.color = "white";
    removeBtn.style.border = "none";
    removeBtn.style.borderRadius = "6px";
    removeBtn.style.padding = "6px 10px";
    removeBtn.style.cursor = "pointer";
    removeBtn.style.fontSize = "16px";
    removeBtn.style.fontWeight = "bold";
    removeBtn.onclick = () => {
      selectedHeroes.splice(i, 1);
      render();
    };
    
    btnContainer.appendChild(removeBtn);
    titleRow.appendChild(title);
    titleRow.appendChild(btnContainer);
    box.appendChild(titleRow);

    // ===== VALENTINA COPY ULT DROPDOWN =====
    if (h.name === "Valentina") {
      const copyRow = document.createElement("div");
      copyRow.style.position = "relative";
      copyRow.style.zIndex = "9999";
      copyRow.style.marginTop = "8px";
      copyRow.style.display = "flex";
      copyRow.style.gap = "8px";
      copyRow.style.alignItems = "center";
      copyRow.style.overflow = "visible";
      
      const copyLabel = document.createElement("span");
      copyLabel.textContent = "📋 Copy ULT:";
      copyLabel.style.color = "#fbbf24";
      copyLabel.style.fontWeight = "bold";
      copyLabel.style.fontSize = "13px";
      copyLabel.style.whiteSpace = "nowrap";
      copyRow.appendChild(copyLabel);
      
      const dropdownContainer = document.createElement("div");
      dropdownContainer.style.position = "relative";
      dropdownContainer.style.flex = "1";
      dropdownContainer.style.zIndex = "9999";
      dropdownContainer.style.overflow = "visible";
      
      const valSearchInput = document.createElement("input");
      valSearchInput.type = "text";
      valSearchInput.placeholder = "🔍 Search hero to copy...";
      valSearchInput.style.width = "100%";
      valSearchInput.style.padding = "8px";
      valSearchInput.style.background = "#0f172a";
      valSearchInput.style.border = "1px solid #334155";
      valSearchInput.style.borderRadius = "6px";
      valSearchInput.style.color = "white";
      valSearchInput.style.fontSize = "12px";
      valSearchInput.style.boxSizing = "border-box";
      
      const currentUlt = h.ults[0];
      if (currentUlt && currentUlt.state.timer && currentUlt.state.time > 0) {
        valSearchInput.disabled = true;
        valSearchInput.style.opacity = "0.5";
        valSearchInput.placeholder = "⏳ ULT on cooldown...";
      }
      
      const dropdownList = document.createElement("div");
        dropdownList.style.position = "absolute";
        dropdownList.style.top = "100%";
        dropdownList.style.left = "0";
        dropdownList.style.width = "100%";
        dropdownList.style.maxHeight = "250px";
        dropdownList.style.overflowY = "auto";
        dropdownList.style.background = "#1e293b";
        dropdownList.style.border = "2px solid #fbbf24";
        dropdownList.style.borderRadius = "0 0 8px 8px";
        dropdownList.style.display = "none";
        dropdownList.style.zIndex = "9999";
        dropdownList.style.boxShadow = "0 10px 25px rgba(0,0,0,0.8)";
      
      function populateDropdown(filter = "") {
        dropdownList.innerHTML = "";
        const allHeroes = getAllHeroes().filter(hero => hero.name !== "Valentina");
        const filtered = filter ? allHeroes.filter(h => h.name.toLowerCase().includes(filter.toLowerCase())) : allHeroes;
        
        if (filtered.length === 0) {
          const noResult = document.createElement("div");
          noResult.style.padding = "10px";
          noResult.style.color = "#94a3b8";
          noResult.style.textAlign = "center";
          noResult.style.fontSize = "12px";
          noResult.textContent = "No heroes found";
          dropdownList.appendChild(noResult);
        } else {
          filtered.forEach(hero => {
            const ultData = getUltData(hero.name);
            if (!ultData || (ultData.levels && ultData.levels[0] === 0 && !ultData.ults)) return;
            
            const item = document.createElement("div");
            item.style.display = "flex";
            item.style.alignItems = "center";
            item.style.padding = "8px 10px";
            item.style.cursor = "pointer";
            item.style.borderBottom = "1px solid #1e293b";
            item.style.fontSize = "12px";
            
            item.onmouseenter = () => { item.style.background = "#2d3e50"; };
            item.onmouseleave = () => { item.style.background = "transparent"; };
            
            const img = document.createElement("img");
            const heroLower = hero.name.toLowerCase();
            const jpgHeroes = ["helcurt", "ling"];
            const ext = jpgHeroes.includes(heroLower) ? ".jpg" : ".png";
            let filename = heroLower;
            if (heroLower === "popol and kupa") filename = "popol and kupa";
            img.src = `Heroesimage/${filename}${ext}`;
            img.style.width = "25px";
            img.style.height = "25px";
            img.style.borderRadius = "50%";
            img.style.marginRight = "8px";
            img.onerror = () => { img.style.display = "none"; };
            
            const info = document.createElement("div");
            info.style.flex = "1";
            
            const nameDiv = document.createElement("div");
            nameDiv.style.fontWeight = "bold";
            
            let ultName = ultData.name || "Unknown";
            let cdLevels = ultData.levels || [0, 0, 0];
            if (ultData.ults) {
              ultName = ultData.ults.map(u => u.name).join(" / ");
              cdLevels = ultData.ults[0].levels;
            }
            nameDiv.textContent = `${hero.name} - ${ultName}`;
            
            const cdDiv = document.createElement("div");
            cdDiv.style.fontSize = "10px";
            cdDiv.style.color = "#94a3b8";
            cdDiv.textContent = `CD: ${cdLevels[0]}/${cdLevels[1]}/${cdLevels[2]}s`;
            
            info.appendChild(nameDiv);
            info.appendChild(cdDiv);
            item.appendChild(img);
            item.appendChild(info);
            
            item.onclick = () => {
              if (ultData.ults) {
                h.copiedUlt = {
                  name: ultData.ults[0].name,
                  levels: ultData.ults[0].levels,
                  color: ultData.ults[0].color,
                  copiedFrom: hero.name
                };
              } else {
                h.copiedUlt = {
                  name: ultData.name,
                  levels: ultData.levels,
                  color: ultData.color,
                  copiedFrom: hero.name
                };
              }
              h.ults = [{
                name: h.copiedUlt.name,
                levels: h.copiedUlt.levels,
                color: h.copiedUlt.color,
                label: "cooldown onlick",
                index: 0,
                state: { timer: null, time: 0, label: null }
              }];
              h.selectedUltIndex = 0;
              h.hasCopiedUlt = true;
              dropdownList.style.display = "none";
              valSearchInput.value = hero.name;
              render();
            };
            
            dropdownList.appendChild(item);
          });
        }
      }
      
      populateDropdown();
      
      valSearchInput.addEventListener("input", () => {
        dropdownList.style.display = "block";
        populateDropdown(valSearchInput.value);
      });
      
      valSearchInput.addEventListener("focus", () => {
        dropdownList.style.display = "block";
        populateDropdown(valSearchInput.value);
      });
      
      valSearchInput.addEventListener("blur", () => {
        setTimeout(() => {
          dropdownList.style.display = "none";
        }, 200);
      });
      
      dropdownContainer.appendChild(valSearchInput);
      dropdownContainer.appendChild(dropdownList);
      copyRow.appendChild(dropdownContainer);
      box.appendChild(copyRow);
    }

    // Copied ULT info + Reset button
    if (h.hasCopiedUlt && h.copiedUlt) {
      const copiedRow = document.createElement("div");
      copiedRow.style.display = "flex";
      copiedRow.style.alignItems = "center";
      copiedRow.style.gap = "10px";
      copiedRow.style.position = "relative";
      copiedRow.style.zIndex = "2";
      copiedRow.style.marginBottom = "8px";
      
      const copiedText = document.createElement("span");
      copiedText.style.color = "#fbbf24";
      copiedText.style.fontSize = "13px";
      copiedText.style.fontWeight = "bold";
      copiedText.textContent = `📋 Copied: ${h.copiedUlt.copiedFrom} - ${h.copiedUlt.name}`;
      
      const resetBtn = document.createElement("button");
      resetBtn.textContent = "🔄 Reset";
      resetBtn.style.background = "#475569";
      resetBtn.style.color = "white";
      resetBtn.style.border = "none";
      resetBtn.style.borderRadius = "4px";
      resetBtn.style.padding = "4px 8px";
      resetBtn.style.cursor = "pointer";
      resetBtn.style.fontSize = "11px";
      resetBtn.onclick = () => {
        h.hasCopiedUlt = false;
        h.copiedUlt = null;
        h.ults = [{
          name: "I Am You",
          levels: [0, 0, 0],
          color: "#000000",
          label: "cooldown onlick",
          index: 0,
          state: { timer: null, time: 0, label: null }
        }];
        render();
      };
      
      copiedRow.appendChild(copiedText);
      copiedRow.appendChild(resetBtn);
      box.appendChild(copiedRow);
    }

    // ULT LEVEL SELECTOR
    const levelRow = document.createElement("div");
    levelRow.style.position = "relative";
    levelRow.style.zIndex = "2";
    levelRow.style.marginTop = "8px";
    levelRow.style.display = "flex";
    levelRow.style.gap = "5px";
    levelRow.style.alignItems = "center";

    const levelLabel = document.createElement("span");
    levelLabel.textContent = "Ult Level: ";
    levelLabel.style.color = "#94a3b8";
    levelRow.appendChild(levelLabel);

    [1, 2, 3].forEach(level => {
      const btn = document.createElement("button");
      btn.textContent = level;
      btn.style.padding = "4px 12px";
      btn.style.background = h.ultLevel === level ? "#0ea5e9" : "#334155";
      btn.style.border = "none";
      btn.style.borderRadius = "4px";
      btn.style.color = "white";
      btn.style.cursor = "pointer";
      btn.onclick = () => {
        h.ultLevel = level;
        render();
      };
      levelRow.appendChild(btn);
    });

    const hasFleetingTime = h.items && h.items.some(item => item.name === "Fleeting Time");

    if (hasFleetingTime && h.ults && h.ults.length > 1) {
      const selectSpan = document.createElement("span");
      selectSpan.style.marginLeft = "10px";
      selectSpan.style.color = "#fbbf24";
      selectSpan.textContent = "🎯 Kill Target: ";
      levelRow.appendChild(selectSpan);
      
      const select = document.createElement("select");
      select.style.padding = "4px 8px";
      select.style.background = "#1e293b";
      select.style.color = "white";
      select.style.border = "1px solid #fbbf24";
      select.style.borderRadius = "4px";
      
      h.ults.forEach((ult, idx) => {
        const option = document.createElement("option");
        option.value = idx;
        option.textContent = ult.name;
        option.selected = h.selectedUltIndex === idx;
        select.appendChild(option);
      });
      
      select.onchange = (e) => {
        h.selectedUltIndex = parseInt(e.target.value);
        render();
      };
      
      levelRow.appendChild(select);
    }

    box.appendChild(levelRow);

    // ULT SKILLS
    h.ults.forEach((ult, idx) => {
      const baseCD = getUltCD(h.name, h, idx);
      const ultSkill = createSkill(box, ult.name, baseCD, null, ult.state, ult.color);
      ult.skillRef = ultSkill;
    });

    // SPELL SKILL
    let spellCD = h.spell.cd;
    if (h.pyt) {
      spellCD = Math.round(h.spell.cd * 0.8);
    }
    createSkill(box, h.spell.name, spellCD, null, h.spellState);

    // Kill trigger button
    const selectedUlt = h.ults[h.selectedUltIndex] || h.ults[0];
    if (selectedUlt && hasFleetingTime) {
      const killBtn = document.createElement("button");
      killBtn.textContent = `💀 Kill Trigger (-30%) [${selectedUlt.name}]`;
      killBtn.className = "kill-btn";
      killBtn.style.position = "relative";
      killBtn.style.zIndex = "2";
      killBtn.style.marginTop = "10px";
      killBtn.onclick = () => {
        if (!selectedUlt.state.timer || selectedUlt.state.time <= 0) return;
        const reduced = Math.max(0, Math.floor(selectedUlt.state.time * 0.7));
        clearInterval(selectedUlt.state.timer);
        if (reduced <= 0) {
          selectedUlt.state.timer = null;
          selectedUlt.state.time = 0;
          selectedUlt.state.label.textContent = `${selectedUlt.name}: READY`;
          selectedUlt.state.label.className = "ready";
          selectedUlt.state.label.dataset.time = "0";
        } else {
          selectedUlt.state.timer = startCooldown(selectedUlt.state, reduced, selectedUlt.name);
        }
      };
      box.appendChild(killBtn);
    }

    // Active items display
    if (h.activeSelected && h.activeSelected.length > 0) {
      const activeHeading = document.createElement("h4");
      activeHeading.textContent = "⚡ Active Items";
      activeHeading.style.position = "relative";
      activeHeading.style.zIndex = "2";
      activeHeading.style.marginTop = "15px";
      box.appendChild(activeHeading);
      h.activeSelected.forEach(itemName => {
        const item = activeItems.find(ai => ai.name === itemName);
        if (item) createActiveItem(box, item, h);
      });
    }

    // Passive items display
    if (h.passiveSelected && h.passiveSelected.length > 0) {
      const passiveHeading = document.createElement("h4");
      passiveHeading.textContent = "🛡️ Passive Items";
      passiveHeading.style.position = "relative";
      passiveHeading.style.zIndex = "2";
      passiveHeading.style.marginTop = "15px";
      box.appendChild(passiveHeading);
      h.passiveSelected.forEach(itemName => {
        const item = passiveItems.find(pi => pi.name === itemName);
        if (item) createPassiveItem(box, item, h);
      });
    }

    createCollapsibleSelectors(h, box);

    lineupDiv.appendChild(box);
  });
}

// COLLAPSIBLE DROPDOWNS
function createCollapsibleSelectors(heroData, box) {
  const container = document.createElement("div");
  container.style.marginTop = "15px";
  container.style.borderTop = "1px solid #334155";
  container.style.paddingTop = "10px";
  container.style.position = "relative";
  container.style.zIndex = "2";

  const wrapper = document.createElement("div");
  wrapper.className = "mobile-dropdown";
  wrapper.style.marginBottom = "10px";
  wrapper.style.border = "1px solid #334155";
  wrapper.style.borderRadius = "8px";
  wrapper.style.overflow = "hidden";
  wrapper.style.background = "#0f172a";

  const header = document.createElement("button");
  header.type = "button";
  header.style.width = "100%";
  header.style.padding = "12px";
  header.style.background = "#1e293b";
  header.style.border = "none";
  header.style.color = "white";
  header.style.fontSize = "14px";
  header.style.fontWeight = "bold";
  header.style.textAlign = "left";
  header.style.cursor = "pointer";
  header.style.display = "flex";
  header.style.justifyContent = "space-between";
  header.style.alignItems = "center";
  
  const activeCount = heroData.activeSelected ? heroData.activeSelected.length : 0;
  const passiveCount = heroData.passiveSelected ? heroData.passiveSelected.length : 0;
  const cdrCount = heroData.items ? heroData.items.length : 0;
  const totalCount = activeCount + passiveCount + cdrCount;
  
  header.innerHTML = `<span>📋 Items (${totalCount} selected)</span><span style="color:#94a3b8;">▼</span>`;

  const content = document.createElement("div");
  content.style.padding = "10px";
  content.style.background = "#111827";
  content.style.display = "none";
  content.style.maxHeight = "400px";
  content.style.overflowY = "auto";

  // ACTIVE ITEMS
  const activeSection = document.createElement("div");
  activeSection.style.marginBottom = "15px";
  const activeTitle = document.createElement("div");
  activeTitle.style.fontWeight = "bold";
  activeTitle.style.color = "#00ff88";
  activeTitle.style.marginBottom = "8px";
  activeTitle.style.fontSize = "13px";
  activeTitle.textContent = "⚡ Active Items";
  activeSection.appendChild(activeTitle);

  activeItems.forEach(item => {
    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.padding = "6px 0";
    div.style.borderBottom = "1px solid #1e293b";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = heroData.activeSelected ? heroData.activeSelected.includes(item.name) : false;
    checkbox.style.marginRight = "10px";
    checkbox.style.width = "18px";
    checkbox.style.height = "18px";

    const img = document.createElement("img");
    img.src = `activeitemimage/${item.name.toLowerCase()}.webp`;
    img.style.width = "30px";
    img.style.height = "30px";
    img.style.marginRight = "10px";
    img.style.borderRadius = "4px";
    img.onerror = () => { img.style.display = "none"; };

    const label = document.createElement("span");
    label.style.flex = "1";
    label.style.fontSize = "13px";
    label.textContent = `${item.name} (${item.cd}s)`;

    checkbox.onchange = () => {
      if (!heroData.activeSelected) heroData.activeSelected = [];
      if (checkbox.checked) {
        heroData.activeSelected.push(item.name);
      } else {
        heroData.activeSelected = heroData.activeSelected.filter(name => name !== item.name);
      }
      render();
    };

    div.appendChild(checkbox);
    div.appendChild(img);
    div.appendChild(label);
    activeSection.appendChild(div);
  });
  content.appendChild(activeSection);

  // PASSIVE ITEMS
  const passiveSection = document.createElement("div");
  passiveSection.style.marginBottom = "15px";
  const passiveTitle = document.createElement("div");
  passiveTitle.style.fontWeight = "bold";
  passiveTitle.style.color = "#00ff88";
  passiveTitle.style.marginBottom = "8px";
  passiveTitle.style.fontSize = "13px";
  passiveTitle.textContent = "🛡️ Passive Items";
  passiveSection.appendChild(passiveTitle);

  passiveItems.forEach(item => {
    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.padding = "6px 0";
    div.style.borderBottom = "1px solid #1e293b";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = heroData.passiveSelected ? heroData.passiveSelected.includes(item.name) : false;
    checkbox.style.marginRight = "10px";
    checkbox.style.width = "18px";
    checkbox.style.height = "18px";

    const img = document.createElement("img");
    img.src = `passiveitemimage/${item.name}.webp`;
    img.style.width = "30px";
    img.style.height = "30px";
    img.style.marginRight = "10px";
    img.style.borderRadius = "4px";
    img.onerror = () => { img.style.display = "none"; };

    const label = document.createElement("span");
    label.style.flex = "1";
    label.style.fontSize = "13px";
    label.textContent = `${item.name} (${item.cd}s)`;

    checkbox.onchange = () => {
      if (!heroData.passiveSelected) heroData.passiveSelected = [];
      if (checkbox.checked) {
        heroData.passiveSelected.push(item.name);
      } else {
        heroData.passiveSelected = heroData.passiveSelected.filter(name => name !== item.name);
      }
      render();
    };

    div.appendChild(checkbox);
    div.appendChild(img);
    div.appendChild(label);
    passiveSection.appendChild(div);
  });
  content.appendChild(passiveSection);

  // CDR ITEMS
  const cdrSection = document.createElement("div");
  const cdrTitle = document.createElement("div");
  cdrTitle.style.fontWeight = "bold";
  cdrTitle.style.color = "#00ff88";
  cdrTitle.style.marginBottom = "8px";
  cdrTitle.style.fontSize = "13px";
  cdrTitle.textContent = "📦 CDR Items (ULT)";
  cdrSection.appendChild(cdrTitle);

  Object.keys(cdrItems).forEach(type => {
    const groupDiv = document.createElement("div");
    groupDiv.style.marginBottom = "10px";
    groupDiv.style.marginLeft = "5px";

    const typeHeader = document.createElement("div");
    typeHeader.style.fontWeight = "bold";
    typeHeader.style.color = "#94a3b8";
    typeHeader.style.marginBottom = "5px";
    typeHeader.style.fontSize = "12px";
    typeHeader.textContent = type;
    groupDiv.appendChild(typeHeader);

    cdrItems[type].forEach(item => {
      const div = document.createElement("div");
      div.style.display = "flex";
      div.style.alignItems = "center";
      div.style.padding = "5px 0";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = heroData.items ? heroData.items.some(i => i.name === item.name) : false;
      checkbox.style.marginRight = "10px";
      checkbox.style.width = "18px";
      checkbox.style.height = "18px";

      const img = document.createElement("img");
      img.src = `cdritem/${item.name}.webp`;
      img.style.width = "30px";
      img.style.height = "30px";
      img.style.marginRight = "10px";
      img.style.borderRadius = "4px";
      img.onerror = () => { img.style.display = "none"; };

      const label = document.createElement("span");
      label.style.flex = "1";
      label.style.fontSize = "13px";
      label.textContent = `${item.name} (${item.cdr * 100}%)`;

      checkbox.onchange = () => {
        if (!heroData.items) heroData.items = [];
        if (checkbox.checked) {
          heroData.items.push(item);
        } else {
          heroData.items = heroData.items.filter(i => i.name !== item.name);
        }
        render();
      };

      div.appendChild(checkbox);
      div.appendChild(img);
      div.appendChild(label);
      groupDiv.appendChild(div);
    });
    cdrSection.appendChild(groupDiv);
  });
  content.appendChild(cdrSection);

  header.onclick = () => {
    const isHidden = content.style.display === "none";
    content.style.display = isHidden ? "block" : "none";
    const arrow = header.querySelector("span:last-child");
    arrow.textContent = isHidden ? "▲" : "▼";
  };

  wrapper.appendChild(header);
  wrapper.appendChild(content);
  container.appendChild(wrapper);
  box.appendChild(container);
}

// SKILL
function createSkill(container, name, baseCD, toggle = null, state = null, iconColor = null) {
  const row = document.createElement("div");
  row.className = "skill-row";
  row.style.position = "relative";
  row.style.zIndex = "2";

  const label = document.createElement("span");
  label.className = "ready";
  label.dataset.time = "0";

  if (!state) {
    state = { timer: null, time: 0, label: null };
  }
  state.label = label;

  if (state.timer && state.time > 0) {
    label.className = "cooldown";
    label.textContent = `${name}: ${state.time}s`;
    label.dataset.time = `${state.time}`;
  } else {
    label.className = "ready";
    label.textContent = `${name}: READY`;
    label.dataset.time = "0";
  }

  const btn = document.createElement("button");
  btn.className = "skill-btn";
  btn.style.backgroundImage = `url('spellimage/${name}.webp')`;
  btn.style.backgroundSize = "cover";
  
  if (iconColor) {
    btn.style.backgroundColor = iconColor;
  }

  const refreshBtn = document.createElement("button");
  refreshBtn.className = "refresh-btn";
  refreshBtn.textContent = "↻";

  const resetState = () => {
    if (state.timer) {
      clearInterval(state.timer);
      state.timer = null;
    }
    state.time = 0;
    if (state.label) {
      state.label.textContent = `${name}: READY`;
      state.label.className = "ready";
      state.label.dataset.time = "0";
    }
  };

  btn.onclick = () => {
    if (state.timer) clearInterval(state.timer);
    let finalCD = baseCD;
    if (toggle && toggle.checked) {
      finalCD = Math.round(baseCD * 0.8);
    }
    state.timer = startCooldown(state, finalCD, name);
  };

  refreshBtn.onclick = resetState;

  row.appendChild(btn);
  row.appendChild(label);
  row.appendChild(refreshBtn);
  container.appendChild(row);
  return { label, state };
}

function startCooldown(state, duration, name) {
  let time = duration;
  state.time = time;
  if (state.label) {
    state.label.className = "cooldown";
    state.label.textContent = `${name}: ${time}s`;
    state.label.dataset.time = `${time}`;
  }
  const timer = setInterval(() => {
    time--;
    state.time = time;
    if (state.label) {
      state.label.dataset.time = `${time}`;
    }
    if (time <= 0) {
      clearInterval(timer);
      state.timer = null;
      if (state.label) {
        state.label.textContent = `${name}: READY`;
        state.label.className = "ready";
      }
    } else {
      if (state.label) {
        state.label.textContent = `${name}: ${time}s`;
      }
    }
  }, 1000);
  state.timer = timer;
  return timer;
}

function createPassiveItem(container, item, heroData) {
  if (!heroData.passiveStates) heroData.passiveStates = {};
  let state = heroData.passiveStates[item.name];
  if (!state) {
    state = { timer: null, time: 0, label: null };
    heroData.passiveStates[item.name] = state;
  }

  const row = document.createElement("div");
  row.className = "skill-row items-row";
  row.style.position = "relative";
  row.style.zIndex = "2";
  row.style.display = "flex";
  row.style.justifyContent = "space-between";
  row.style.alignItems = "center";

  const btn = document.createElement("button");
  btn.className = "skill-btn";
  btn.style.backgroundImage = `url('passiveitemimage/${item.name}.webp')`;
  btn.style.backgroundSize = "cover";
  btn.style.width = "35px";
  btn.style.height = "35px";
  btn.style.borderRadius = "50%";
  btn.style.border = "none";
  btn.style.cursor = "pointer";

  const label = document.createElement("span");
  state.label = label;
  label.style.flex = "1";
  label.style.textAlign = "center";
  label.style.margin = "0 8px";
  label.style.fontSize = "13px";
  label.style.fontWeight = "bold";
  label.className = state.timer && state.time > 0 ? "cooldown" : "ready";
  label.dataset.time = `${state.time}`;
  label.textContent = state.timer && state.time > 0 ? `${item.name}: ${state.time}s` : `${item.name}: READY`;

  const refreshBtn = document.createElement("button");
  refreshBtn.className = "refresh-btn";
  refreshBtn.textContent = "↻";
  refreshBtn.style.width = "30px";
  refreshBtn.style.height = "30px";
  refreshBtn.style.borderRadius = "50%";
  refreshBtn.style.border = "none";
  refreshBtn.style.background = "#475569";
  refreshBtn.style.color = "white";
  refreshBtn.style.cursor = "pointer";

  const resetState = () => {
    if (state.timer) {
      clearInterval(state.timer);
      state.timer = null;
    }
    state.time = 0;
    if (state.label) {
      state.label.textContent = `${item.name}: READY`;
      state.label.className = "ready";
      state.label.dataset.time = "0";
    }
  };

  btn.onclick = () => {
    if (state.timer) clearInterval(state.timer);
    state.timer = startCooldown(state, item.cd, item.name);
  };

  refreshBtn.onclick = resetState;

  row.appendChild(btn);
  row.appendChild(label);
  row.appendChild(refreshBtn);
  container.appendChild(row);
}

function createActiveItem(container, item, heroData) {
  if (!heroData.activeStates) heroData.activeStates = {};
  let state = heroData.activeStates[item.name];
  if (!state) {
    state = { timer: null, time: 0, label: null };
    heroData.activeStates[item.name] = state;
  }

  const row = document.createElement("div");
  row.className = "skill-row items-row";
  row.style.position = "relative";
  row.style.zIndex = "2";
  row.style.display = "flex";
  row.style.justifyContent = "space-between";
  row.style.alignItems = "center";

  const btn = document.createElement("button");
  btn.className = "skill-btn";
  btn.style.backgroundImage = `url('activeitemimage/${item.name.toLowerCase()}.webp')`;
  btn.style.backgroundSize = "cover";
  btn.style.width = "35px";
  btn.style.height = "35px";
  btn.style.borderRadius = "50%";
  btn.style.border = "none";
  btn.style.cursor = "pointer";

  const label = document.createElement("span");
  state.label = label;
  label.style.flex = "1";
  label.style.textAlign = "center";
  label.style.margin = "0 8px";
  label.style.fontSize = "13px";
  label.style.fontWeight = "bold";
  label.className = state.timer && state.time > 0 ? "cooldown" : "ready";
  label.dataset.time = `${state.time}`;
  label.textContent = state.timer && state.time > 0 ? `${item.name}: ${state.time}s` : `${item.name}: READY`;

  const refreshBtn = document.createElement("button");
  refreshBtn.className = "refresh-btn";
  refreshBtn.textContent = "↻";
  refreshBtn.style.width = "30px";
  refreshBtn.style.height = "30px";
  refreshBtn.style.borderRadius = "50%";
  refreshBtn.style.border = "none";
  refreshBtn.style.background = "#475569";
  refreshBtn.style.color = "white";
  refreshBtn.style.cursor = "pointer";

  const resetState = () => {
    if (state.timer) {
      clearInterval(state.timer);
      state.timer = null;
    }
    state.time = 0;
    if (state.label) {
      state.label.textContent = `${item.name}: READY`;
      state.label.className = "ready";
      state.label.dataset.time = "0";
    }
  };

  btn.onclick = () => {
    if (state.timer) clearInterval(state.timer);
    let finalCD = item.cd;
    if (heroData.pyt) {
      finalCD = Math.round(item.cd * 0.8);
    }
    state.timer = startCooldown(state, finalCD, item.name);
  };

  refreshBtn.onclick = resetState;

  row.appendChild(btn);
  row.appendChild(label);
  row.appendChild(refreshBtn);
  container.appendChild(row);
}

function getTotalCDR(hero) {
  let total = 0;
  
  if (hero.items) {
    hero.items.forEach(item => {
      total += item.cdr;
    });
  }
  
  if (hero.emblem) {
    total += hero.emblem.cdr;
  }
  
  if (hero.inspire) {
    total += 0.05;
  }
  
  if (hero.spell?.name === "Fleeting Time") {
    total += 0.15;
  }
  
  const hasEnchantedTalisman = hero.items && hero.items.some(item => item.name === "Enchanted Talisman");
  const maxCDR = hasEnchantedTalisman ? 0.45 : 0.40;
  
  if (total > maxCDR) total = maxCDR;
  
  return total;
}

// ===== SCROLL TO TOP BUTTON =====
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

scrollToTopBtn.addEventListener("mouseenter", () => {
  scrollToTopBtn.style.transform = "scale(1.1)";
  scrollToTopBtn.style.boxShadow = "0 6px 16px rgba(14, 165, 233, 0.6)";
});

scrollToTopBtn.addEventListener("mouseleave", () => {
  scrollToTopBtn.style.transform = "scale(1)";
  scrollToTopBtn.style.boxShadow = "0 4px 12px rgba(14, 165, 233, 0.4)";
});