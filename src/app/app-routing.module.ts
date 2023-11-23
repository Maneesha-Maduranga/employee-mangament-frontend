import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';

const routes: Routes = [
  { path: 'home', component: EmployeeListComponent },
  { path: 'add', component: EmployeeAddComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
