import { User, Game } from ".";

export interface CreateRoomParams {
  name: User["name"];
  password: string;
  number_of_players: number;
}

export interface JoinRoomParams {
  name: User["name"];
  room_id: Game["id"];
  password: string;
}
