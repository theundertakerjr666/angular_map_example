import { IRide } from './ride.model';

export const SAVED_RIDES: IRide[] = [
{
  "id" : 1,
  "name" : "Main Bike Trails",
  "date" : new Date('01/06/2019'),
  "distance" : 16.2,
  "comments" : "Nice day, cool temps",
  "gpxData": '../../assets/gpx/1.gpx'
},
{
   "id": 2,
   "name": 'City Center',
   "date": new Date('02/06/2019'),
   "gpxData": '../../assets/gpx/1.gpx',
   "distance": 1.2,
   "comments": 'Low traffic.'
 },
 {
   "id": 3,
   "name": 'Forest Route',
   "date": new Date('06/06/2017'),
   "gpxData": '../../assets/gpx/2.gpx',
   "distance": 3.2,
   "comments": 'Sunny Evening ride.'
 },
 {
   "id": 4,
   "name": 'Lakeside',
   "date": new Date('07/06/2017'),
   "gpxData": '../../assets/gpx/4.gpx',
   "distance": 8.4,
   "comments": 'Cool and windy by the lake.'
 }
]
