import Transmitter from '/helpers/transmitter';
import { STORAGE_EVENTS_LIST } from '/helpers/constants';

export default class Cookie extends Transmitter {
  constructor() {
    super(STORAGE_EVENTS_LIST);
  }

  _get(key) {}
  get(key) {}
  _set(key, value, attributes) {}
  set(key, value, attributes) {}
  remove(key, attributes) {}
  clear() {}
  empty(key) {}
  has(key) {}
}
