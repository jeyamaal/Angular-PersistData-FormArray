import {Routes} from "@angular/router";
import { RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { SchoolComponent } from "./school/school.component";
import { WorkComponent } from "./work/work.component";
import { DataserviceService } from "./dataservice.service";

// Define the APP routes
const APP_ROUTES:Routes = [
    {path:'home',component:HomeComponent},
    {path:'school',component:SchoolComponent},
    {path:'work',component:WorkComponent}
];

// Export the Routes
export const routing=RouterModule.forRoot(APP_ROUTES);