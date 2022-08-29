import { CardType } from "../@types/type";

export enum ShapeType {
  SQUARE = "SQUARE",
  TRIANGLE = "TRIANGLE",
  CIRCLE = "CIRCLE",
}

export const content: CardType[] = [
  {
    id: 0,
    type: ShapeType.CIRCLE,
    isOpen: false,
    isOut: false,
    src: "images/circle.png",
  },
  {
    id: 1,
    type: ShapeType.SQUARE,
    isOpen: false,
    isOut: false,
    src: "images/square.png",
  },
  {
    id: 2,
    type: ShapeType.TRIANGLE,
    isOpen: false,
    isOut: false,
    src: "images/triangle.png",
  },
  {
    id: 3,
    type: ShapeType.SQUARE,
    isOpen: false,
    isOut: false,
    src: "images/square.png",
  },
  {
    id: 4,
    type: ShapeType.TRIANGLE,
    isOpen: false,
    isOut: false,
    src: "images/triangle.png",
  },
  {
    id: 5,
    type: ShapeType.CIRCLE,
    isOpen: false,
    isOut: false,
    src: "images/circle.png",
  },
];
