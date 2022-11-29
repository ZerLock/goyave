import bcrypt from "bcrypt";
import { expectType } from "ts-expect";
import db from "utils/database";
import type { NextApiRequest, NextApiResponse } from "next";
import type { CreateRoomParams, Game, User } from "models";
import { GAME_PASSWORD_SALT_ROUND } from "../../../src/utils/consts";
import rules from "utils/rules";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  expectType<CreateRoomParams>(req.body);

  // Password hashing
  const passwordHash = await bcrypt.hash(
    req.body.password,
    GAME_PASSWORD_SALT_ROUND
  );
  if (!passwordHash) {
    return res.status(500).send({
      status: "error",
      message: "Cannot hash game password",
    });
  }

  // Create user
  const newUser: User = {
    name: req.body.name,
    cards: await rules.dispatchCards(),
    one_card_left: false,
  };

  // Create game
  const newGame: Partial<Game> = {
    has_started: false,
    game_password: passwordHash,
    users: [newUser],
    turn_index: 0,
    winner: null,
  };

  const roomId = await db.createRoom(newGame);

  res.status(200).send({
    status: "ok",
    room_id: roomId,
  });
}
