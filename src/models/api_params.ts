import { User } from ".";

export interface CreateRoomParams {
  name: User["name"];
  password: string;
  number_of_players: number;
}
