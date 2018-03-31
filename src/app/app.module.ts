import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SchoolComponent } from './school/school.component';
import { routing } from './app.routing';
import { WorkComponent } from './work/work.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataserviceService } from './dataservice.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SchoolComponent,
    WorkComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule,routing,
    FormsModule,
    ReactiveFormsModule,
   
  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
