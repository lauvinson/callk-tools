import { Component } from '@angular/core';
import { AickService } from './service/aick.service';
import { BindParams } from './dto/aick.dto';
import {ApiResult} from './dto/aick.result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  constructor(public aickService: AickService) {
  }

  bindParams: BindParams =  new BindParams();

  bind(){
    let bindStatus: boolean =  false;
    this.aickService.bind(this.bindParams).subscribe(data => {
      let result: ApiResult = JSON.parse(JSON.stringify(data));
      bindStatus =  ('0' == result.code);
      if (bindStatus) {
        alert('绑定成功!');
        this.bindParams.clear();
      } else {
        alert(result.msg);
      }
    }, error => {
      alert(JSON.stringify(error))
    });
  }
}
