import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {ResetHomeService} from './reset-to-home.service';
import {FileHandleService} from './file-handle.service';
import { SummaryComponent } from './summary/summary.component';
import {GetReportService} from './get-report.service';
import { SideBySideComponent } from './side-by-side/side-by-side.component';
import {GetMatchService} from "./get-match.service";

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'summary', component: SummaryComponent},
  {path: 'side-by-side/:id', component: SideBySideComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SummaryComponent,
    SideBySideComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ResetHomeService,
    FileHandleService,
    GetReportService,
    GetMatchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
