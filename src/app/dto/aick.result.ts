/**
 * 接口返回盒子
 */
export class ApiResult {
  private _code: string;
  private _msg: string;

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get msg(): string {
    return this._msg;
  }

  set msg(value: string) {
    this._msg = value;
  }
}
