import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AleartComponent } from './components/aleart/aleart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmployeeListComponent,
    AleartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
