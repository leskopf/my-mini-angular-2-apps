import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HomeComponent } from './components/pages/home.component';
import { AboutComponent } from './components/pages/about.component';
import { ProfileComponent } from './components/profile/profile.component';

import { GitHubService } from './services/github/github.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'about', component: AboutComponent },
  { path: 'home',      component: HomeComponent },
  { path: 'profile',      component: ProfileComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    JumbotronComponent,
    AboutComponent,
    HomeComponent,
    ProfileComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpModule,
    FormsModule ,
  ],
  providers: [GitHubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
