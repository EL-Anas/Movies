import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListFilmComponent } from './list-film/list-film.component';
import { FilmItemComponent } from './film-item/film-item.component';
import { FilmServiceService } from './Services/film-service.service';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const appRoutes:Routes=[
  {path:'',component:ListFilmComponent},
  {path:'home',component:ListFilmComponent},
  {path:'details/:id',component:FilmDetailsComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    ListFilmComponent,
    FilmItemComponent,
    FilmDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)  ],
  providers: [FilmServiceService],
  bootstrap: [AppComponent]
})

export class AppModule {
  
 }
