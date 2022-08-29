import "./index.scss";

function Moves({ moves }: { moves: number }) {
  /* ******************************** RENDERING ******************************* */
  return <span className="moves">Moves : {moves}</span>;
}

export default Moves;
