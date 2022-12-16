import { IHttp, IRequestOption } from "./interfaces/IHttp";

class Http implements IHttp {
  constructor(readonly fetch: typeof globalThis.$fetch) {}

  async request(requestOption: IRequestOption): Promise<any> {
    const option: RequestInit = { method: requestOption.method };

    if (requestOption?.headers)
      option.headers = new Headers(requestOption.headers);
    if (requestOption?.body) option.body = JSON.stringify(requestOption.body);

    try {
      const res = await fetch(requestOption.url, option);
      return await res.json();
    } catch (error) {
      return console.log(error);
    }
  }
}

export default Http;
