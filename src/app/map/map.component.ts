import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service';
import { IRide } from '../shared/ride.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private _mapService: MapService,
              private _route: ActivatedRoute) { }

  ride: any;
  rideName: string;
  rideComments: string;
  rideDate: Date;
  rideDistance: number;
  gpx: any;

  ngOnInit() {

    this.ride = this._mapService.getRide(
      +this._route.snapshot.params['id']);

      this._mapService.plotRide(+this._route.snapshot.params['id']);
      this.rideName = this.ride.name;
      this.rideComments = this.ride.comments;
      this.rideDistance = this.ride.distance;
      this.rideDate = this.ride.date;
      this.gpx = this.ride.gpxData;
  }

}
