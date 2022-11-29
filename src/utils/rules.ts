import db from "./database";
import _ from "lodash";
import type { Card, Game, CardType, CardColor } from "models";
import { CARDS, CARD_COLORS } from "./consts";

const rules = {
  isGameExists: async function (id: Game["id"]) {
    const room = await db.getRoom(id);
    return room === null ? false : true;
  },

  getId: async function (): Promise<Game["id"]> {
    let generatedId: string;
    do {
      generatedId = (Math.random() + 1).toString(36);
    } while ((await this.isGameExists(generatedId)) === true);
    return generatedId;
  },

  isUserExists: async function (
    id: Game["id"],
    name: string
  ): Promise<boolean> {
    const game = (await db.getRoom(id)) as Game;
    for (const user of game.users) {
      if (user.name === name) {
        return true;
      }
    }
    return false;
  },

  randomInArray: function <T>(array: Array<any>): T {
    return _.sample(array as any);
  },

  dispatchCards: async function (): Promise<Card[]> {
    const globalConfig = await db.getGlobalConfig();
    const cards: Card[] = [];

    for (let i = 0; i < globalConfig.start_cards_number; i++) {
      const card: Card = {
        type: this.randomInArray<CardType>(CARDS),
        color: this.randomInArray<CardColor>(CARD_COLORS),
        used: false,
      }
      cards.push(card);
    }

    return cards;
  },
};

export default rules;
