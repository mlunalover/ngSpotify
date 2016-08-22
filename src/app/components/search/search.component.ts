import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";
import { Artist } from '../../../Artist';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css'],
  providers: [SpotifyService]
})
export class SearchComponent implements OnInit {
  searchStr:string;
  searchRes: Artist[];
  // searchMusic() {
  //   console.log(this.searchStr);
  // }

  constructor(private _spotifyService:SpotifyService) {

  }

  searchMusic() {
    this._spotifyService.searchMusic(this.searchStr)
        .subscribe(res => {
          this.searchRes = res.artists.items;
        })
  }

  ngOnInit() {
  }

}
