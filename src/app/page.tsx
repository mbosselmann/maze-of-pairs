"use client";

import { useEffect, useState } from "react";
import { Card, initialCards } from "./cards";
import { colorClasses } from "./colorClasses";

function shuffleCards(cards: Card[]): Card[] {
  return [...cards].sort(() => Math.random() - 0.5);
}

export default function Home() {
  const [cards, setCards] = useState<Card[]>(initialCards);

  const flipCard = (cardId: number) => {
    const flippedPairs =
      cards?.filter((card) => card.flipped && !card.matched) ?? [];

    if (flippedPairs?.length >= 2) {
      setCards((prevCards) => {
        return prevCards.map((card) => {
          if (
            flippedPairs.every(
              (flippedPair) => flippedPair.pairId === card.pairId
            )
          ) {
            return { ...card, matched: true };
          }
          if (card.matched) return card;

          return { ...card, flipped: false };
        });
      });
    }

    setCards((prevCards) => {
      return prevCards.map((card) => {
        if (card.cardId === cardId) {
          return { ...card, flipped: !card.flipped };
        }
        return card;
      });
    });
  };

  useEffect(() => {
    setCards(shuffleCards(initialCards));
  }, []);

  return (
    <main className="flex flex-col items-center ">
      <h1 className="text-center p-3 font-[family-name:var(--font-barriecito)] text-2xl">
        Maze of Pairs
      </h1>
      {cards?.length && (
        <>
          <ul className="grid grid-cols-4 gap-3">
            {cards.map((card) => {
              const colors = colorClasses[card.color] || "";
              return (
                <li key={card.cardId}>
                  <button
                    onClick={() => flipCard(card.cardId)}
                    className={`${
                      card.flipped ? colors : colorClasses["emerald-200"]
                    } flex items-center justify-center size-16 rounded-xl shadow-lg`}
                  >
                    {card.flipped ? card.pairId : "?"}
                  </button>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={() => setCards(shuffleCards(initialCards))}
            className="py-3 px-12 mt-5 bg-purple-300 text-purple-900 rounded-lg shadow-lg"
          >
            New Maze
          </button>
        </>
      )}
    </main>
  );
}
