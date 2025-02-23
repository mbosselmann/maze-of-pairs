export type Pair = {
  pairId: number;
  cardId: number;
  color: string;
  matched: boolean;
  flipped: boolean;
};

export const initialPairs: Pair[] = [
  { pairId: 1, cardId: 1, color: "red-500", matched: false, flipped: false },
  { pairId: 1, cardId: 2, color: "red-500", matched: false, flipped: false },
  { pairId: 2, cardId: 3, color: "blue-500", matched: false, flipped: false },
  { pairId: 2, cardId: 4, color: "blue-500", matched: false, flipped: false },
  { pairId: 3, cardId: 5, color: "green-500", matched: false, flipped: false },
  { pairId: 3, cardId: 6, color: "green-500", matched: false, flipped: false },
  { pairId: 4, cardId: 7, color: "yellow-500", matched: false, flipped: false },
  { pairId: 4, cardId: 8, color: "yellow-500", matched: false, flipped: false },
  { pairId: 5, cardId: 9, color: "purple-500", matched: false, flipped: false },
  {
    pairId: 5,
    cardId: 10,
    color: "purple-500",
    matched: false,
    flipped: false,
  },
  {
    pairId: 6,
    cardId: 11,
    color: "orange-500",
    matched: false,
    flipped: false,
  },
  {
    pairId: 6,
    cardId: 12,
    color: "orange-500",
    matched: false,
    flipped: false,
  },
  { pairId: 7, cardId: 13, color: "pink-500", matched: false, flipped: false },
  { pairId: 7, cardId: 14, color: "pink-500", matched: false, flipped: false },
  {
    pairId: 8,
    cardId: 15,
    color: "indigo-500",
    matched: false,
    flipped: false,
  },
  {
    pairId: 8,
    cardId: 16,
    color: "indigo-500",
    matched: false,
    flipped: false,
  },
  { pairId: 9, cardId: 17, color: "gray-500", matched: false, flipped: false },
  { pairId: 9, cardId: 18, color: "gray-500", matched: false, flipped: false },
  { pairId: 10, cardId: 19, color: "cyan-500", matched: false, flipped: false },
  { pairId: 10, cardId: 20, color: "cyan-500", matched: false, flipped: false },
  {
    pairId: 11,
    cardId: 21,
    color: "emerald-500",
    matched: false,
    flipped: false,
  },
  {
    pairId: 11,
    cardId: 22,
    color: "emerald-500",
    matched: false,
    flipped: false,
  },
  {
    pairId: 12,
    cardId: 23,
    color: "amber-500",
    matched: false,
    flipped: false,
  },
  {
    pairId: 12,
    cardId: 24,
    color: "amber-500",
    matched: false,
    flipped: false,
  },
  { pairId: 13, cardId: 25, color: "lime-500", matched: false, flipped: false },
  { pairId: 13, cardId: 26, color: "lime-500", matched: false, flipped: false },
  { pairId: 14, cardId: 27, color: "teal-500", matched: false, flipped: false },
  { pairId: 14, cardId: 28, color: "teal-500", matched: false, flipped: false },
];
