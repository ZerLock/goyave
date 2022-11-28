import db from "./database";
import { Game } from "models";

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
};

export default rules;
