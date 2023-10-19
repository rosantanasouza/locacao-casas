import { Component, OnInit } from '@angular/core';
import { HousingLocation } from 'src/app/types/housing-location';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  fullLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];

  //injeção de dependencia
  constructor(private service: HousingService) { }

  ngOnInit() {
    this.service.getAllHousingLocations().then(
      (housingLocationList: HousingLocation[]) => {
        this.fullLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
      });
  }

  filterResults(text: string) {
    if (text.length < 2) {
      this.filteredLocationList = this.fullLocationList;
    }
    else {
      this.filteredLocationList = this.fullLocationList.filter(
        location => location.city?.toLocaleLowerCase().includes(text.toLocaleLowerCase())
      );
    }
  }
}
