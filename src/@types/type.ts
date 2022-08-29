export type CardType = {
  id: number;
  type: "CIRCLE" | "TRIANGLE" | "SQUARE";
  isOpen: boolean;
  src: string;
  isOut: boolean;
};
