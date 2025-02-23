"use client";

import { useEffect, useState } from "react";
import { initialPairs, Pair } from "./pairs";

type ColorClasses = {
  [key: string]: string;
};

const colorClasses: ColorClasses = {
  "red-500": "bg-red-500 text-red-800",
  "blue-500": "bg-blue-500 text-blue-800",
  "green-500": "bg-green-500 text-green-800",
  "yellow-500": "bg-yellow-500 text-yellow-800",
  "purple-500": "bg-purple-500 text-purple-800",
  "orange-500": "bg-orange-500 text-orange-800",
  "pink-500": "bg-pink-500 text-pink-800",
  "indigo-500": "bg-indigo-500 text-indigo-800",
  "gray-500": "bg-gray-500 text-gray-800",
  "cyan-500": "bg-cyan-500 text-cyan-800",
  "emerald-500": "bg-emerald-500 text-emerald-800",
  "emerald-200": "bg-emerald-200 text-emerald-600",
  "amber-500": "bg-amber-500 text-amber-800",
  "lime-500": "bg-lime-500 text-lime-800",
  "teal-500": "bg-teal-500 text-teal-800",
};

function shufflePairs(pairs: Pair[]): Pair[] {
  return [...pairs].sort(() => Math.random() - 0.5);
}

export default function Home() {
  const [pairs, setPairs] = useState<Pair[] | null>(initialPairs);

  const flipCard = (cardId: number) => {
    const flippedPairs =
      pairs?.filter((pair) => pair.flipped && !pair.matched) ?? [];

    if (flippedPairs?.length >= 2) {
      setPairs((prevPairs) => {
        if (!prevPairs) return null;
        return prevPairs.map((pair) => {
          if (
            flippedPairs.every(
              (flippedPair) => flippedPair.pairId === pair.pairId
            )
          ) {
            return { ...pair, matched: true };
          }
          if (pair.matched) return pair;

          return { ...pair, flipped: false };
        });
      });
    }

    setPairs((prevPairs) => {
      if (!prevPairs) return null;
      return prevPairs.map((pair) => {
        if (pair.cardId === cardId) {
          return { ...pair, flipped: !pair.flipped };
        }
        return pair;
      });
    });
  };

  useEffect(() => {
    const shuffledPairs = shufflePairs(initialPairs);
    setPairs(shuffledPairs);
  }, []);

  return (
    <main className="flex flex-col items-center ">
      <h1 className="text-center p-3 font-[family-name:var(--font-barriecito)] text-2xl">
        Maze of Pairs
      </h1>
      {pairs?.length && (
        <>
          <ul className="grid grid-cols-4 gap-3">
            {pairs.map((pair) => {
              const colors = colorClasses[pair.color] || "";
              return (
                <li key={pair.cardId}>
                  <button
                    onClick={() => flipCard(pair.cardId)}
                    className={`${
                      pair.flipped ? colors : colorClasses["emerald-200"]
                    } flex items-center justify-center size-16 rounded-xl shadow-lg`}
                  >
                    {pair.flipped ? pair.pairId : "?"}
                  </button>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={() => setPairs(shufflePairs(initialPairs))}
            className="py-3 px-12 mt-5 bg-purple-300 text-purple-900 rounded-lg shadow-lg"
          >
            New Maze
          </button>
        </>
      )}
    </main>
  );
}
