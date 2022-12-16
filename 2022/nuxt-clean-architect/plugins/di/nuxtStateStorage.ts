import { Ref } from "nuxt/dist/app/compat/capi";
interface Storage {
  readonly length: number;
  clear(): void;
  getItem(key: string): string | null;
  key(index: number): string | null;
  removeItem(key: string): void;

  setItem(key: string, value: string): void;
  [name: string]: any;
}

class NuxtStateStorage implements Storage {
  private storage: Ref<Map<string, any>>;

  constructor(key: string) {
    this.storage = useState(key, () => new Map());
  }

  [name: string]: any;

  // length: number;

  key(index: number): string {
    throw new Error("Method not implemented.");
  }

  getItem(key: string) {
    return this.storage.value.get(key);
  }

  setItem(key: string, value: any) {
    this.storage.value.set(key, value);
  }

  removeItem(key: string): void {
    this.storage.value.delete(key);
  }

  clear(): void {
    throw new Error("Method not implemented.");
  }

  get length() {
    return this.storage.value.size;
  }
}

export default NuxtStateStorage;
