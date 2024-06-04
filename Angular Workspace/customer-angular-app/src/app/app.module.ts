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
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
