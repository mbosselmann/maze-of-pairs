"use client";

import { useEffect, useState } from "react";
import { Card, initialCards, FlowerType } from "./cards";
import { FlowerIcon } from "./components/FlowerIcon";
import { CardBack } from "./components/CardBack";

function shuffleCards(cards: Card[]): Card[] {
  return [...cards].sort(() => Math.random() - 0.5);
}

export default function Home() {
  const [cards, setCards] = useState<Card[]>(initialCards);
  const [isChecking, setIsChecking] = useState(false);

  const flipCard = (cardId: number) => {
    if (isChecking) return;

    const clickedCard = cards.find((card) => card.cardId === cardId);
    if (clickedCard?.flipped || clickedCard?.matched) return;

    const flippedCards = cards.filter((card) => card.flipped && !card.matched);

    if (flippedCards.length >= 2) return;

    setCards((prevCards) =>
      prevCards.map((card) =>
        card.cardId === cardId ? { ...card, flipped: true } : card
      )
    );

    if (flippedCards.length === 1) {
      setIsChecking(true);
      setTimeout(() => {
        setCards((prevCards) => {
          const newFlippedCards = prevCards.filter(
            (card) => card.flipped && !card.matched
          );
          if (
            newFlippedCards.length === 2 &&
            newFlippedCards[0].pairId === newFlippedCards[1].pairId
          ) {
            return prevCards.map((card) =>
              card.flipped && !card.matched ? { ...card, matched: true } : card
            );
          } else {
            return prevCards.map((card) =>
              card.flipped && !card.matched ? { ...card, flipped: false } : card
            );
          }
        });
        setIsChecking(false);
      }, 1000);
    }
  };

  const resetGame = () => {
    setCards(shuffleCards(initialCards.map((card) => ({ ...card, flipped: false, matched: false }))));
  };

  useEffect(() => {
    setCards(shuffleCards(initialCards));
  }, []);

  const matchedPairs = cards.filter((card) => card.matched).length / 2;
  const totalPairs = cards.length / 2;
  const isComplete = matchedPairs === totalPairs;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 opacity-10">
          <FlowerIcon flower="rose" className="w-full h-full" />
        </div>
        <div className="absolute top-20 right-20 w-24 h-24 opacity-10">
          <FlowerIcon flower="lotus" className="w-full h-full" />
        </div>
        <div className="absolute bottom-20 left-20 w-28 h-28 opacity-10">
          <FlowerIcon flower="dahlia" className="w-full h-full" />
        </div>
        <div className="absolute bottom-10 right-10 w-36 h-36 opacity-10">
          <FlowerIcon flower="peony" className="w-full h-full" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-center mb-2 font-serif text-4xl md:text-5xl tracking-wide text-[var(--foreground)]">
          Maze of Pairs
        </h1>
        <p className="text-[var(--muted-foreground)] mb-6 text-sm tracking-widest uppercase">
          Match the flowers
        </p>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--secondary)] border border-[var(--border)]">
            <span className="text-[var(--muted-foreground)] text-sm">Pairs Found</span>
            <span className="text-[var(--primary)] font-semibold">
              {matchedPairs} / {totalPairs}
            </span>
          </div>
        </div>

        {isComplete && (
          <div className="mb-6 px-6 py-3 rounded-lg bg-[var(--primary)]/20 border border-[var(--primary)]/40">
            <p className="text-[var(--primary)] text-center font-serif text-lg">
              Congratulations! You found all pairs!
            </p>
          </div>
        )}

        {cards?.length > 0 && (
          <>
            <ul className="grid grid-cols-4 md:grid-cols-7 gap-3 md:gap-4 mb-8">
              {cards.map((card) => (
                <li key={card.cardId}>
                  <button
                    onClick={() => flipCard(card.cardId)}
                    disabled={card.matched || isChecking}
                    className={`
                      relative flex items-center justify-center 
                      w-16 h-20 md:w-20 md:h-24 
                      rounded-xl shadow-lg 
                      transition-all duration-300 ease-out
                      ${
                        card.flipped || card.matched
                          ? "bg-[var(--card)] border-2 border-[var(--primary)]/60 shadow-[0_0_20px_rgba(249,168,212,0.3)]"
                          : "bg-[var(--secondary)] border-2 border-[var(--border)] hover:border-[var(--primary)]/40 hover:shadow-[0_0_15px_rgba(249,168,212,0.2)]"
                      }
                      ${card.matched ? "opacity-80" : ""}
                      ${!card.flipped && !card.matched ? "cursor-pointer hover:scale-105" : ""}
                      ${card.matched ? "scale-95" : ""}
                    `}
                  >
                    <div
                      className={`transition-all duration-300 ${
                        card.flipped || card.matched
                          ? "opacity-100 scale-100"
                          : "opacity-100 scale-100"
                      }`}
                    >
                      {card.flipped || card.matched ? (
                        <FlowerIcon flower={card.flower as FlowerType} />
                      ) : (
                        <CardBack />
                      )}
                    </div>
                    {card.matched && (
                      <div className="absolute inset-0 rounded-xl bg-[var(--primary)]/10 pointer-events-none" />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={resetGame}
              className="
                px-8 py-3 
                bg-[var(--secondary)] 
                text-[var(--foreground)] 
                border border-[var(--border)]
                rounded-full 
                shadow-lg 
                font-serif text-lg tracking-wide
                transition-all duration-300 ease-out
                hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)]
                hover:border-[var(--primary)]
                hover:shadow-[0_0_20px_rgba(249,168,212,0.4)]
                active:scale-95
              "
            >
              New Garden
            </button>
          </>
        )}
      </div>
    </main>
  );
}
