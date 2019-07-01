import { Injectable } from '@angular/core';
import { IRide } from '../shared/ride.model';
import { SAVED_RIDES }  from '../shared/rides';

@Injectable()
export class RideService {

  constructor() { }

  getRides(): IRide[]{
    return SAVED_RIDES.slice(0);
  }

  getTotalRides(allRides: IRide[]){
    return allRides.length;
  }

  getTotalDistance(allRides: IRide[]){
    var totalDistance = 0;
    for(var i = 0; i < allRides.length; i++){
      totalDistance += allRides[i].distance;
    }
    return totalDistance;
  }

  getFirstDate(allRides: IRide[]){
    # initialise date array
    var earliestDate = new Date("01/01/9999");
    for(var i = 0; i < allRides.length; i++){
      var currentDate = allRides[i].date;
      if(currentDate < earliestDate){
        earliestDate = currentDate;
      }
    }
    return earliestDate;
  }

}
