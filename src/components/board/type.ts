import { CardType } from "../../@types/type";

export type boardPropType = {
  cards: CardType[];
  moves: number;
  hours: number;
  minutes: number;
  seconds: number;
  isGameOver: boolean;
  setCards: any;
  setMoves: any;
  setStartTimer: any;
  setIsGameOver: any;
  restartGame: any;
};
