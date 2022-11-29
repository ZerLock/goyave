import bcrypt from "bcrypt";
import { expectType } from "ts-expect";
import db from "utils/database";
import type { NextApiRequest, NextApiResponse } from "next";
import type { CreateRoomParams, User } from "models";
import rules from "utils/rules";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  expectType<CreateRoomParams>(req.body);

  // Check if a user in the same room has the same name of the new user
  if ((await rules.isUserExists(req.body.room_id, req.body.name)) === true) {
    return res.status(401).send({
      status: "error",
      message: "User already exists",
    });
  }

  const newUser: User = {
    name: req.body.name,
    cards: await rules.dispatchCards(),
    one_card_left: false,
  };

  const game = await db.getRoom(req.body.room_id);
  if (!game) {
    return res.status(404).send({
      status: "error",
      message: "Room not found",
    });
  }
  if (game.has_started) {
    return res.status(401).send({
      status: "error",
      message: "Room has started a game",
    });
  }

  // Check if the password is the correct room password
  const match = await bcrypt.compare(req.body.password, game?.game_password);
  if (!match) {
    return res.status(401).send({
      status: "error",
      message: "Bad password",
    });
  }

  // Add the new user in the room and update it on firebase
  game.users.push(newUser);
  await db.updateRoom(req.body.room_id, game);

  res.status(200).send({
    status: "ok",
    room_id: game.id,
  });
}
