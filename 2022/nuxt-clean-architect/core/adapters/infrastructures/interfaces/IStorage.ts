export interface IStorage {
  get(name: string): Promise<string | null>;
  set(name: string, value: string | number | object): void;
  remove(name: string): void;
}
