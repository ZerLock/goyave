import { User } from ".";

export interface Game {
  has_started: boolean;
  id: string; // Game id (use for firestore save)
  game_password: string; // useful for private games
  users: Array<User>;
  turn_index: number; // To know who play: turn_index % users.length
  winner: User["name"] | null;
}
