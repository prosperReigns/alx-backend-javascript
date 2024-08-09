export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') throw new TypeError('Code must be a string');
    this._code = code;
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    this._name = name;
  }

  set code(newCode) {
    if (typeof newCode !== 'string') throw new TypeError('Code must be a string');
    this._code = newCode;
  }

  get code() {
    return this._code;
  }

  set name(newName) {
    if (typeof newName !== 'string') throw new TypeError('Name must be a string');
    this._name = newName;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
