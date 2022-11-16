import _ from "lodash";
import types from "typescript-is";
import db from "utils/database";
import type { NextApiRequest, NextApiResponse } from "next";
import type { CreateRoomParams, Game, User } from "models";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const params = types.assertType<CreateRoomParams>(req.body);

  // Check if the name is available
  // ...

  const newUser: User = {
    name: params.name,
    cards: [],
    one_card_left: false,
  };

  const newGame: Game = {
    game_password: params.password,
    users: [newUser],
    turn_index: 0,
    winner: null,
  };

  // const room_id = await db.createRoom(newGame);

  res.status(200).send({
    status: "ok",
    // room_id: roomId,
  });
}
