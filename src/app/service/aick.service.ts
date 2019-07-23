import {Injectable} from '@angular/core';
import {BindParams} from '../dto/aick.dto';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AickService {

  constructor(private http: HttpClient) {}

  bind(bindParams: BindParams): Observable<Object> {
    return this.http.post('/account/bind?merchantAccount=' + bindParams.merchantAccount + '&companyId=' + bindParams.companyId + '&merchantName=' + bindParams.merchantName,
      null, {headers: {'Content-type': 'application/x-www-form-urlencoded'}});
  }

}
