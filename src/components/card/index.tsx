import Shape from "../shape";
import { CardType } from "../../@types/type";
import "./index.scss";

function Card({
  card,
  setLastSelected,
  lastSelected,
  setCards,
  setCurrentCard,
  cards,
}:
  | { card: CardType; setLastSelected: any; setCards: any; setCurrentCard: any }
  | any) {
  /* ******************************** RENDERING ******************************* */
  return (
    <div
      className="card"
      onClick={() => {
        if (!card.isOpen) {
          cards[card.id].isOpen = true;
          setCards(cards);
          setCurrentCard(card);
          !lastSelected && setLastSelected(card);
        }
      }}
    >
      <div className="cover" style={{ zIndex: card.isOpen ? 0 : 1 }}></div>
      <Shape src={card.src} alt={card.type} />
    </div>
  );
}

export default Card;
