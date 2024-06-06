import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import { VegFoodsComponent } from './veg-foods/veg-foods.component';
import { NonvegFoodsComponent } from './nonveg-foods/nonveg-foods.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch: 'full'},
  { path:'home', component:HomeComponent, 
    children:[
      {
        path:"vegfoods",
        component:VegFoodsComponent
      },
      { 
        path:"nonvegfoods",
        component:NonvegFoodsComponent
      }
    ]
  },
  { path:'register',  // userdefined
    component:RegisterComponent // new registration
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
  },
  // please put ** as last path
  {
    path:"**",
    component:ViewNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
