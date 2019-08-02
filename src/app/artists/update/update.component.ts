import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ArtistService } from "src/app/services/artist.service";
import { artist } from "src/app/model/artist";

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.css"]
})
export class UpdateComponent implements OnInit {
  selectedID: number;
  artist: artist;
  constructor(
    private activateRouter: ActivatedRoute,
    private artistService: ArtistService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activateRouter.params.subscribe(data => {
      this.selectedID = data.id;
    });
    this.getArtistById();
  }
  getArtistById() {
    this.artist = this.artistService.getArtistById(this.selectedID);
  }
  onSubmit(v) {
    this.artistService.updatArtist(v);
    this.router.navigate(["/"]);
  }
}
