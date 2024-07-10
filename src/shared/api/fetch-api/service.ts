import { baseFetch } from "./baseApi";

class QueueRequest {
  public queueList: Map<any, any>;
  public queueResult: Map<any, any>;

  constructor() {
    this.queueList = new Map();
    this.queueResult = new Map();
  }

  addRequest(request: any) {
    this.queueList.set(this.queueList.size, request);
    return this.queueList.size;
  }

  getResult(id: number) {

    const isHasResult = this.queueResult.has(id);

    if (isHasResult) {
      const currentResult = this.queueResult.get(id);
      this.queueResult.delete(id);
      return currentResult;
    } else {
      this.queueList.forEach((reques, key) => {
        console.log("key:", key, reques);
        baseFetch(reques)
        .then(data => this.queueResult.set(key, data))
        .catch(e => e);
      });
    }
  }
}

const queueRequest = new QueueRequest();

export class FetchService {
  public queue: QueueRequest;

  constructor() {
    this.queue = queueRequest;
  }

  public async get({
    url,
    params,
  }: {
    url: string;
    params?: Record<string, string | any>;
  }) {
    return baseFetch({ url, method: "GET", params });
  }

  public post({
    url,
    payload,
    params,
  }: {
    url: string;
    payload?: object | FormData;
    params?: Record<string, string>;
  }) {
    return baseFetch({ url, payload, method: "POST", params });
  }

  public patch({
    url,
    payload,
    params,
  }: {
    url: string;
    payload: object;
    params?: Record<string, string>;
  }) {
    return baseFetch({ url, payload, method: "PATCH", params });
  }

  public put({
    url,
    payload,
    params,
  }: {
    url: string;
    payload: object;
    params?: Record<string, string>;
  }) {
    return baseFetch({ url, payload, method: "PUT", params });
  }

  public delete({
    url,
    params,
  }: {
    url: string;
    params?: Record<string, string>;
  }) {
    return baseFetch({ url, method: "DELETE", params });
  }

  public getBlob({ query, variables }: { query: string; variables?: object }) {
    return baseFetch({ method: "POST", payload: { query, variables } });
  }

  public graphQl({ query, variables }: { query: string; variables?: object }) {
    return baseFetch({ method: "POST", payload: { query, variables } });
  }
}

export const fetchService = new FetchService();
