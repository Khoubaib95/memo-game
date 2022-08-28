import "./index.scss";

function Card({
  card,
  setLastSelected,
  lastSelected,
  setCards,
  setCurrentCard,
  cards,
}: any) {
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
      <div className="image">
        <img src={card.src} alt="circle" style={{ width: "100%" }} />
      </div>
    </div>
  );
}

export default Card;
