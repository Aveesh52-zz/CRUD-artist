import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArtistsComponent } from "./artists/artists.component";
import { AddComponent } from "./artists/add/add.component";
import { UpdateComponent } from "./artists/update/update.component";

const routes: Routes = [
  {
    path: "",
    component: ArtistsComponent
  },
  {
    path: "add",
    component: AddComponent
  },
  {
    path: "update/:id",
    component: UpdateComponent
  },
  {
    path: "**",
    component: ArtistsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
