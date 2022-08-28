import React, { useState, useEffect } from "react";
import Card from "../card";
import Modal from "../modal";
import "./index.scss";

type CardType = {
  id: number;
  type: "CIRCLE" | "TRIANGLE" | "SQUARE";
  isOpen: boolean;
  src: string;
  isOut: boolean;
};

const content: CardType[] = [
  {
    id: 0,
    type: "CIRCLE",
    isOpen: false,
    isOut: false,
    src: "images/circle.png",
  },
  {
    id: 1,
    type: "SQUARE",
    isOpen: false,
    isOut: false,
    src: "images/square.png",
  },
  {
    id: 2,
    type: "TRIANGLE",
    isOpen: false,
    isOut: false,
    src: "images/triangle.png",
  },
  {
    id: 3,
    type: "SQUARE",
    isOpen: false,
    isOut: false,
    src: "images/square.png",
  },
  {
    id: 4,
    type: "TRIANGLE",
    isOpen: false,
    isOut: false,
    src: "images/triangle.png",
  },
  {
    id: 5,
    type: "CIRCLE",
    isOpen: false,
    isOut: false,
    src: "images/circle.png",
  },
];

let timeout: any;
function Board({ setMoves }: any) {
  const [cards, setCards] = useState<CardType[] | []>(content);
  const [lastSelected, setLastSelected] = useState<CardType | null>(null);
  const [currentCard, setCurrentCard] = useState<CardType | null>(null);

  useEffect(() => {
    if (lastSelected !== null) {
      if (lastSelected.id !== currentCard?.id) {
        setMoves();
        if (lastSelected.type === currentCard?.type) {
        } else {
          setTimeout(() => {
            cards[currentCard ? currentCard?.id : 0].isOpen = false;
            cards[lastSelected.id].isOpen = false;
            setCards([...cards]);
          }, 1200);
        }
        setLastSelected(null);
      }
    }
    return () => clearTimeout(timeout);
  }, [lastSelected, currentCard]);

  return (
    <>
      {/***** 
        <Modal isOpen={openModal} setIsOpen={setOpenModal}>
        <input
          value={playerName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPlayerName(e.target.value);
          }}
          type="text"
        />
      </Modal>
      */}
      <div className="board">
        <div className="grid">
          {cards.map((card: CardType) => (
            <Card
              key={card.id}
              setMoves={setMoves}
              card={card}
              cards={cards}
              lastSelected={lastSelected}
              setLastSelected={setLastSelected}
              setCards={setCards}
              setCurrentCard={setCurrentCard}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Board;
