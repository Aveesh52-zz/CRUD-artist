import { Injectable } from "@angular/core";
import { artist } from "../model/artist";

@Injectable({
  providedIn: "root"
})
export class ArtistService {
  artist: Array<artist> = [
    {
      id: 1,
      name: "Bruno Mars",
      image:
        "https://images.sk-static.com/images/media/profile_images/artists/941964/huge_avatar",
      description:
        "Peter Gene Hernandez (born October 8, 1985), known professionally as Bruno Mars, is an American singer, songwriter, multi-instrumentalist, record producer,"
    },
    {
      id: 2,
      name: "BTS",
      image:
        "https://www.rollingstone.com/wp-content/uploads/2018/06/bts-on-lgbtq-e0250ea2-6147-4726-8433-8c47c60192ee.jpg?crop=900:600&width=440",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, "
    },
    {
      id: 3,
      name: "Bruno Mars",
      image:
        "https://images.sk-static.com/images/media/profile_images/artists/941964/huge_avatar",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, "
    },
    {
      id: 4,
      name: "BTS",
      image:
        "https://www.rollingstone.com/wp-content/uploads/2018/06/bts-on-lgbtq-e0250ea2-6147-4726-8433-8c47c60192ee.jpg?crop=900:600&width=440",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, "
    }
  ];
  constructor() {}
  getArtists(): Array<artist> {
    return this.artist;
  }
  addArtist(v: any): any {
    this.artist.push(v);
  }
  delete(id: any): any {
    this.artist.map((artist, index) => {
      if (artist.id === id) {
        this.artist.splice(index, 1);
      }
    });
  }
  getArtistById(id: number) {
    let tempArtist: artist;
    this.artist.map(a => {
      if (a.id == id) {
        tempArtist = a;
      }
    });
    return tempArtist;
  }
  updatArtist(artist: artist) {
    this.artist.map((a, index) => {
      if (a.id === artist.id) {
        a.name = artist.name;
        a.description = artist.description;
        a.image = artist.image;
      }
    });
  }
}
