import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Github } from '../model/Github';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private readonly httpClient:HttpClient) { }

  getAllRepositories():Observable<Github[]>{
    return this.httpClient.get<Github[]>('https://api.github.com/users/marcosjrs/repos');
  }

}