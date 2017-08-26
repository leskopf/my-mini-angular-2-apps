import { Component } from '@angular/core';
import { GitHubService } from '../../services/github/github.service';

import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html',
  //styleUrls: ['navbar.component.css'],

})

export class ProfileComponent {
  user:any[];
  repos:any[];
  constructor(private _githubService:GitHubService) {
    this._githubService.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    })

    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    })
  }

}

