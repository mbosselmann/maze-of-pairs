export type Card = {
  pairId: number;
  cardId: number;
  flower: string;
  matched: boolean;
  flipped: boolean;
};

// Flower types for matching pairs
export const flowerTypes = [
  "rose",
  "tulip",
  "daisy",
  "lily",
  "orchid",
  "peony",
  "dahlia",
  "lotus",
  "iris",
  "magnolia",
  "cherry",
  "poppy",
  "sunflower",
  "lavender",
] as const;

export type FlowerType = (typeof flowerTypes)[number];

export const initialCards: Card[] = [
  { pairId: 1, cardId: 1, flower: "rose", matched: false, flipped: false },
  { pairId: 1, cardId: 2, flower: "rose", matched: false, flipped: false },
  { pairId: 2, cardId: 3, flower: "tulip", matched: false, flipped: false },
  { pairId: 2, cardId: 4, flower: "tulip", matched: false, flipped: false },
  { pairId: 3, cardId: 5, flower: "daisy", matched: false, flipped: false },
  { pairId: 3, cardId: 6, flower: "daisy", matched: false, flipped: false },
  { pairId: 4, cardId: 7, flower: "lily", matched: false, flipped: false },
  { pairId: 4, cardId: 8, flower: "lily", matched: false, flipped: false },
  { pairId: 5, cardId: 9, flower: "orchid", matched: false, flipped: false },
  { pairId: 5, cardId: 10, flower: "orchid", matched: false, flipped: false },
  { pairId: 6, cardId: 11, flower: "peony", matched: false, flipped: false },
  { pairId: 6, cardId: 12, flower: "peony", matched: false, flipped: false },
  { pairId: 7, cardId: 13, flower: "dahlia", matched: false, flipped: false },
  { pairId: 7, cardId: 14, flower: "dahlia", matched: false, flipped: false },
  { pairId: 8, cardId: 15, flower: "lotus", matched: false, flipped: false },
  { pairId: 8, cardId: 16, flower: "lotus", matched: false, flipped: false },
  { pairId: 9, cardId: 17, flower: "iris", matched: false, flipped: false },
  { pairId: 9, cardId: 18, flower: "iris", matched: false, flipped: false },
  { pairId: 10, cardId: 19, flower: "magnolia", matched: false, flipped: false },
  { pairId: 10, cardId: 20, flower: "magnolia", matched: false, flipped: false },
  { pairId: 11, cardId: 21, flower: "cherry", matched: false, flipped: false },
  { pairId: 11, cardId: 22, flower: "cherry", matched: false, flipped: false },
  { pairId: 12, cardId: 23, flower: "poppy", matched: false, flipped: false },
  { pairId: 12, cardId: 24, flower: "poppy", matched: false, flipped: false },
  { pairId: 13, cardId: 25, flower: "sunflower", matched: false, flipped: false },
  { pairId: 13, cardId: 26, flower: "sunflower", matched: false, flipped: false },
  { pairId: 14, cardId: 27, flower: "lavender", matched: false, flipped: false },
  { pairId: 14, cardId: 28, flower: "lavender", matched: false, flipped: false },
];
