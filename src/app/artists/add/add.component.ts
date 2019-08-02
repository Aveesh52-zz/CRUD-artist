import { Component, OnInit } from "@angular/core";
import { ArtistService } from "src/app/services/artist.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})
export class AddComponent implements OnInit {
  constructor(private artist: ArtistService, private router: Router) {}

  ngOnInit() {}
  onSubmit(v) {
    this.artist.addArtist(v);
    this.router.navigate(["/"]);
  }
}
