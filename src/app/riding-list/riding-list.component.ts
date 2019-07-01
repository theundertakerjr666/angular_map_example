import { Component, OnInit } from '@angular/core';
import { IRide } from '../shared/ride.model';
import { RidingService } from '../services/ride.service';

@Component({
  selector: 'app-ride-list',
  templateUrl: './riding-list.component.html',
  styleUrls: ['./riding-list.component.css']
})
export class RideListComponent implements OnInit {

  rides: IRide[];
  totalRides: number
  totalDistance: number
  firstDate: Date

  constructor(private _ridingService: RidingService) { }

  ngOnInit() {
    this.rides = this._ridingService.getRides();
    this.totalRides = this._ridingService.getTotalRides(this.rides);
    this.totalDistance = this._ridingService.getTotalDistance(this.rides);
    this.firstDate = this._ridingService.getFirstDate(this.rides);
  }

}
