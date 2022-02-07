import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  etherscanToken: string;

  constructor() { 
    this.etherscanToken = '67R2W9Y7UNXE83XJ9KY38SBED8MSXR9B4V';
  }

  getEtherscanToken(){
    return this.etherscanToken;
  }
}
