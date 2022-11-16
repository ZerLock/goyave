import { User } from ".";

export interface Game {
  game_password: string; // useful for private games
  users: Array<User>;
  turn_index: number; // To know who play: turn_index % users.length
  winner: User["name"] | null;
}
