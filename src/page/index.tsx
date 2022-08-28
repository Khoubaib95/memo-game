import { useState } from "react";
import Moves from "../components/moves";
import Timer from "../components/timer";
import Board from "../components/board";
import Modal from "../components/modal";

import "./index.scss";

function IndexPage() {
  const [moves, setMoves] = useState<number>(0);
  const [openModal, setOpenModal] = useState<boolean>(true);
  const [startTimer, setStartTimer] = useState<boolean>(false);

  const addMove = () => {
    setMoves(moves + 1);
  };
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
          <Timer startTimer={startTimer} />
          <Moves moves={moves} />
        </header>
        <Board setMoves={addMove} />
      </main>
    </>
  );
}

export default IndexPage;
