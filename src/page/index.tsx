import { useState, useCallback } from "react";
import Moves from "../components/moves";
import Timer from "../components/timer";
import Board from "../components/board";
import Modal from "../components/modal";

import "./index.scss";
import { CardType } from "../@types/type";
import { content } from "./data";

function IndexPage() {
  const [cards, setCards] = useState<CardType[]>([...content]);
  const [moves, setMoves] = useState<number>(0);
  const [openModal, setOpenModal] = useState<boolean>(true);
  const [startTimer, setStartTimer] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  const restartGame = useCallback(() => {
    setCards(content.map((card) => ({ ...card, isOpen: false })));
    setIsGameOver(false);
    setStartTimer(true);
    setOpenModal(false);
    setMoves(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  }, []);

  const addMove = () => {
    setMoves(moves + 1);
  };

  /* ******************************** RENDERING ******************************* */
  return (
    <>
      <Modal
        className="start-modal"
        isOpen={openModal}
        setIsOpen={setOpenModal}
      >
        <button
          onClick={() => {
            setOpenModal(false);
            setStartTimer(true);
          }}
        >
          Start The Game
        </button>
      </Modal>

      <main className="index-page">
        <header>
          <Timer
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            setSeconds={setSeconds}
            setMinutes={setMinutes}
            setHours={setHours}
            startTimer={startTimer}
          />
          <Moves moves={moves} />
        </header>
        <Board
          cards={cards}
          moves={moves}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          isGameOver={isGameOver}
          setCards={setCards}
          setMoves={addMove}
          setStartTimer={setStartTimer}
          setIsGameOver={setIsGameOver}
          restartGame={restartGame}
        />
      </main>
    </>
  );
}

export default IndexPage;
