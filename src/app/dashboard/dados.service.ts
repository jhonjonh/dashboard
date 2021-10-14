import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DadosService {

  readonly dados = [
    ['Junho', 23115],
    ['Julho', 14963],
    ['Agosto', 20589],
    ['Setembro', 22506]
  ];


  constructor() { }

  obterDados(): Observable<any> {
    return new Observable(observable =>{
      observable.next(this.dados);
      observable.complete();
    })
  }

}
