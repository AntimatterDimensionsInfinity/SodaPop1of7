// Soda Pop 1: Impossible Mixes Mod
// Author: Joe
// Description: Adds 10 forbidden soda flavors via custom reactions
// Version: 1.0
// Date: 2025-09-12

// Flavor #1: Grape Soda
elements.grape_soda = {
  color: "#800080",
  behavior: behaviors.LIQUID,
  category: "glyphic",
  state: "liquid"
};
elements.grape_juice.reactions = {
  ...elements.grape_juice.reactions,
  "soda": { elem1: null, elem2: "grape_soda" }
};
elements.soda.reactions["grape_juice"] = { elem1: null, elem2: "grape_soda" };

// Flavor #2: Lime Soda
elements.lime_soda = {
  color: "#aaff00",
  behavior: behaviors.LIQUID,
  category: "glyph
