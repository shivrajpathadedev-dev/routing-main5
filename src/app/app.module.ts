import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ProductDashboardComponent } from './component/product-dashboard/product-dashboard.component';
import { HomeComponent } from './component/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { ProductComponent } from './component/product-dashboard/product/product.component';
import { ProductFormComponent } from './component/product-dashboard/product-form/product-form.component';
import { GetConfirmComponent } from './component/get-confirm/get-confirm.component';
import { PathNotFoundComponent } from './component/path-not-found/path-not-found.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { UserDetailsComponent } from './component/user-dashboard/user-details/user-details.component';
import { UserFormComponent } from './component/user-dashboard/user-form/user-form.component';
import { AuthComponent } from './component/auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { FairsDashboardComponent } from './component/fairs-dashboard/fairs-dashboard.component';
import { FairsCardComponent } from './component/fairs-dashboard/fairs-card/fairs-card.component';
import { FairsDetailsComponent } from './component/fairs-dashboard/fairs-details/fairs-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductDashboardComponent,
    HomeComponent,
    ProductComponent,
    ProductFormComponent,
    GetConfirmComponent,
    PathNotFoundComponent,
    UserDashboardComponent,
    UserDetailsComponent,
    UserFormComponent,
    AuthComponent,
    FairsDashboardComponent,
    FairsCardComponent,
    FairsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
