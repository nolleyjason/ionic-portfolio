import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }


getPosts() {
    return this.httpClient
    .get('https://gitconnected.com/v1/portfolio/nolleyjason')
  }
}