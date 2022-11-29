export type CardType =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "draw_two"
  | "reverse"
  | "skip"
  | "wild"
  | "wild_draw_four";

export type CardColor =
  | "red"
  | "green"
  | "blue"
  | "yellow";

export interface Card {
  type: CardType;
  color: CardColor;
  used: boolean;
}
