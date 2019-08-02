import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ArtistsComponent } from "./artists/artists.component";
import { SearchArtistsPipe } from "./search-artists.pipe";
import { AddComponent } from './artists/add/add.component';
import { UpdateComponent } from './artists/update/update.component';

@NgModule({
  declarations: [AppComponent, ArtistsComponent, SearchArtistsPipe, AddComponent, UpdateComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
