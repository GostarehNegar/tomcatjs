import fetch from 'node-fetch';

import { TimeEx } from '../TimeEx';

import { IExchange } from './IExchange';

export class BinanceExchange implements IExchange {
  private _currenTime: TimeEx = null;
  get CurrenTime(): TimeEx {
    return this._currenTime;
  }
  async getServerTime(): Promise<TimeEx> {
    const response = await fetch('https://api.binance.com/api/v3/time');
    const json = await response.json();
    let result: TimeEx = null;
    if (json.serverTime) {
      result = new TimeEx(json.serverTime);
      this._currenTime = result;
    }
    return result;

  }
}
