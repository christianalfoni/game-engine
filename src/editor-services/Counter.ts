import { service, signal } from "impact-app";

@service()
export class Counter {
  @signal
  private _count = 0;
  get count() {
    return this._count;
  }
  async increment() {
    this._count++;
  }
}
