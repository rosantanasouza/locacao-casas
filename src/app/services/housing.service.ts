import { Injectable } from "@angular/core";
import { HousingLocation } from "src/app/types/housing-location";

@Injectable({
  providedIn: "root"
})
export class HousingService {

  url = 'http://localhost:3000/locations/';

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return data.json() ?? [];
  }

  async getHousingLocationById(id: Number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }
}