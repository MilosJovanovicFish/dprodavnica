import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { FinishedOrdersComponent } from './cart/finished-orders/finished-orders.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { UserService } from './services/user.service';
import { ProductService } from './services/products.service';
import { FinishedOrdersService } from './services/finished-orders.service';
import { VoteComponent } from './cart/finished-orders/vote/vote.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    FinishedOrdersComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProfileComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [UserService, ProductService, FinishedOrdersService], 
  bootstrap: [AppComponent],
  entryComponents: [ProfileComponent , VoteComponent]
})
export class AppModule { }
