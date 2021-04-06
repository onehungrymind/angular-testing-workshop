import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ExtraService {
  constructor(private http: HttpClient) {}

  getExtra() {
    return 'Eeeeeeeeeeeeeextra!';
  }
}
