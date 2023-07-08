import { Component } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  repos$ = this.gitSVC.getAllRepositories();

  constructor(private gitSVC:GithubService){

  }
}
