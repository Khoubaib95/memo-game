import React, { useState, useEffect } from "react";
import Card from "../card";
import Modal from "../modal";

import { CardType } from "../../@types/type";
import { content } from "../../page/data";
import "./index.scss";

let timeout: any;

function Board({
  cards,
  setCards,
  setMoves,
  moves,
  hours,
  minutes,
  seconds,
  isGameOver,
  setStartTimer,
  setIsGameOver,
  restartGame,
}: any) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [lastSelected, setLastSelected] = useState<CardType | null>(null);
  const [currentCard, setCurrentCard] = useState<CardType | null>(null);

  useEffect(() => {
    if (lastSelected !== null && !isGameOver) {
      if (lastSelected.id !== currentCard?.id) {
        setMoves();
        if (
          !(cards.findIndex((card: CardType) => card.isOpen === false) > -1)
        ) {
          setIsGameOver(true);
          setOpenModal(true);
          setStartTimer(false);
        }
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
  }, [lastSelected, currentCard, isGameOver]);

  /* ******************************** RENDERING ******************************* */
  return (
    <>
      <Modal
        className="game-over-modal"
        isOpen={openModal}
        setIsOpen={setOpenModal}
      >
        <div className="content">
          <h1>Game Over</h1>
          <h3>Total Moves : {moves} </h3>
          <h3>
            Total Time : {hours < 10 ? `0${hours}` : hours}:
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}{" "}
          </h3>

          <button
            onClick={() => {
              restartGame();
              setOpenModal(false);
            }}
          >
            Play Again
          </button>
        </div>
      </Modal>

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
