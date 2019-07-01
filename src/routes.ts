import { Routes } from "@angular/router"
import { RideListComponent } from "./app/riding-list/riding-list.component"
import { MapComponent } from "./app/map/map.component"

export const appRoutes: Routes = [
  { path: "rides", component: RideListComponent },
  { path: "ride/:id", component: MapComponent },
  { path: "", redirectTo: "/rides", pathMatch: 'full' }
]
