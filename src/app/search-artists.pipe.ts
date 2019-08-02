import { Pipe, PipeTransform } from "@angular/core";
import { artist } from "./model/artist";

@Pipe({
  name: "searchArtists"
})
export class SearchArtistsPipe implements PipeTransform {
  transform(value: Array<artist>, args?: string): any {
    if (!args) {
      return value;
    }
    args = args.toLowerCase();
    return value.filter(artist => {
      return artist.name.toLowerCase().includes(args);
    });
  }
}
