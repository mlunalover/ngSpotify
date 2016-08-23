import { Component } from '@angular/core';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {SearchComponent} from "./components/search/search.component";
import {AboutComponent} from "./components/about/about.component";
import {HTTP_PROVIDERS} from "@angular/http";
import {SpotifyService} from "./services/spotify.service";
import {AlbumComponent} from "./components/album/album.component";
import {ArtistComponent} from "./components/artist/artist.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [NavbarComponent, ROUTER_DIRECTIVES, AlbumComponent, ArtistComponent],
  precompile: [SearchComponent, AboutComponent],
  providers: [HTTP_PROVIDERS, SpotifyService]
})
export class AppComponent {
  // title = 'app works!';
}
