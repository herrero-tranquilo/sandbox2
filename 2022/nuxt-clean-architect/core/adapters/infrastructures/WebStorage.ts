import { IStorage } from "./interfaces/IStorage";

interface Storage {
  readonly length: number;
  clear(): void;
  getItem(key: string): string | null;
  key(index: number): string | null;
  removeItem(key: string): void;

  setItem(key: string, value: string): void;
  [name: string]: any;
}

class WebStorage implements IStorage {
  private storage: Storage;

  constructor(storage: Storage) {
    this.storage = storage;
  }

  get(name: string): Promise<string | null> {
    return new Promise((resolve) => {
      resolve(this.storage.getItem(name));
    });
  }

  set(name: string, value: string): void {
    this.storage.setItem(name, value);
  }

  remove(name: string): void {
    this.storage.removeItem(name);
  }
}

export default WebStorage;
