import { Card } from ".";

export interface User {
  name: string;
  cards: Array<Card>;
  one_card_left: boolean; // useful for counters
}
