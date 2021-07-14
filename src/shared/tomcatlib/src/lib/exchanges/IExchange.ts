import { TimeEx } from '../TimeEx';

export interface IExchange {
  getServerTime(): Promise<TimeEx>;
  get CurrenTime(): TimeEx;
}
