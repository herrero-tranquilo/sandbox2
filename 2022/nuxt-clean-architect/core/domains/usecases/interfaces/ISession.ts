import { IUserDTO } from "../../../domains/dto/UserDTO";

export interface ISessionUseCase {
  login(userDTO: IUserDTO): Promise<string>;
  getToken(): Promise<string | null>;
  setToken(token: string): void;
  removeToken(): void;
}
