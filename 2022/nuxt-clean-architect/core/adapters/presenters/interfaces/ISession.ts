export interface ISessionPresenter {
  login(id: string, pw: string): Promise<string>;
  getToken(): Promise<string | null>;
  setToken(token: string): void;
  removeToken(): void;
}
