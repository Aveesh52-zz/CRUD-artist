import { Component, OnInit } from "@angular/core";
import { ArtistService } from "../services/artist.service";
import { artist } from "../model/artist";

@Component({
  selector: "app-artists",
  templateUrl: "./artists.component.html",
  styleUrls: ["./artists.component.css"]
})
export class ArtistsComponent implements OnInit {
  artistList: Array<artist>;

  constructor(private artistServices: ArtistService) {}

  ngOnInit() {
    this.getArtist();
  }

  getArtist() {
    this.artistList = this.artistServices.getArtists();
    console.log(this.artistList);
  }
  onDelete(id) {
    this.artistServices.delete(id);
  }
}
