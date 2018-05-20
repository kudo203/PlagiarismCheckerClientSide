import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {ResetHomeService} from './reset-to-home.service';
import {FileHandleService} from './file-handle.service';
import { SummaryComponent } from './summary/summary.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'summary', component: SummaryComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ResetHomeService,
    FileHandleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
