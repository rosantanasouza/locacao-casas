import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { HousingLocation } from 'src/app/types/housing-location';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

  housingLocation: HousingLocation | undefined;

  //injeção de dependencia
  constructor(private route: ActivatedRoute, private service: HousingService) { }

  ngOnInit(): void {
    const housingLocationId: Number = Number(this.route.snapshot.params['idHouse']);

    this.service.getHousingLocationById(housingLocationId).then(
      (housingLocation: HousingLocation | undefined) => {
        this.housingLocation = housingLocation;
      });
  }
}
