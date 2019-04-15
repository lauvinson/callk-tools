/**
 * 商户绑定关系参数
 */
export class BindParams {
  private _merchantAccount: string;
  private _companyId: string;
  private _merchantName: string;

  toString() {
    return String(this._merchantAccount)
  }

  clear() {
    this.merchantAccount = '';
    this.companyId = '';
    this.merchantName = '';
  }

  get merchantAccount(): string {
    return this._merchantAccount;
  }

  set merchantAccount(value: string) {
    this._merchantAccount = value;
  }

  get companyId(): string {
    return this._companyId;
  }

  set companyId(value: string) {
    this._companyId = value;
  }

  get merchantName(): string {
    return this._merchantName;
  }

  set merchantName(value: string) {
    this._merchantName = value;
  }
}
