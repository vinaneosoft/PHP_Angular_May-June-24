import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { CustomercardComponent } from './customercard/customercard.component';
import { CustomersComponent } from './customers/customers.component';
import { PipesComponent } from './pipes/pipes.component';
import { OrderbyPipe } from './custompipes/orderby.pipe';
import { MypipePipe } from './custompipes/mypipe.pipe';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import { VegFoodsComponent } from './veg-foods/veg-foods.component';
import { NonvegFoodsComponent } from './nonveg-foods/nonveg-foods.component';
import { CounterService } from './myservices/counter.service';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    DatabindingComponent,
    DirectivesComponent,
    CustomercardComponent,
    CustomersComponent,
    PipesComponent,
    OrderbyPipe,
    MypipePipe,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ViewNotFoundComponent,
    VegFoodsComponent,
    NonvegFoodsComponent
  ],
  imports: [
    BrowserModule, MatButtonModule, MatIconModule, MatDividerModule,MatTooltipModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule, MatSlideToggleModule
  ],
  providers: [CounterService, provideHttpClient(), provideAnimationsAsync()], // do not put name of built in service
  bootstrap: [AppComponent]
})
export class AppModule { }
