import { ISessionRepository } from "../../domains/usecases/interfaces-repository/ISession";
import { IUserDTO } from "../../domains/dto/UserDTO";
import { IHttp } from "../../adapters/infrastructures/interfaces/IHttp";
import { IStorage } from "../../adapters/infrastructures/interfaces/IStorage";

class SessionRepository implements ISessionRepository {
  constructor(
    private readonly http: IHttp,
    private readonly storage: IStorage
  ) {}

  async login(userDTO: IUserDTO): Promise<string> {
    const response = await this.http.request<{ token: string }>({
      method: "POST",
      url: "http://localhost:3000/api/login",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        id: userDTO.id,
        pw: userDTO.pw,
      },
    });

    return response.token;
  }

  getToken(): Promise<string | null> {
    return this.storage.get("token");
  }

  setToken(token: string): void {
    this.storage.set("token", token);
  }

  removeToken(): void {
    this.storage.remove("token");
  }
}

export default SessionRepository;
