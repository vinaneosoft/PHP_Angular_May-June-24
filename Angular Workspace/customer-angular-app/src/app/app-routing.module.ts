import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'register',  // userdefined
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'customers',
    component:CustomersComponent
  },
  {
    path:'update/:cid', // path , cid : user defined variable to hold route parameter
    component:RegisterComponent // reuse component to update the details
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
