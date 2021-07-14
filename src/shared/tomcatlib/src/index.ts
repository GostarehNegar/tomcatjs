import _locator, { IServiceLocator } from './lib/ServiceLocator';
import { Constants as _constants } from './lib/constants';
import * as _flat from './lib/flat';
import * as _Implementaions from './lib/implementations';
import * as _Interfaces from './lib/interfaces';
export * as Interfaces from './lib/interfaces';
export * as Implementaions from './lib/implementations';

class lib {
  private locator: IServiceLocator;
  constructor() {
    this.locator = _locator;
    this.init();
  }
  public getService<T>(name: string, instance?: string) {
    return this.locator.getService<T>(name, instance);
  }
  private init() {
    const _locator = this.locator;

    _locator.register('IDataProvider', new _Implementaions.Data.Binance());
  }
}

namespace DEFAULT {
  export const Interfaces = _Interfaces;
  export const Implementaions = _Implementaions;
  export const Flat = _flat;
  export const _instance = new lib();
  export const Constants = _constants;
}

export default DEFAULT;
