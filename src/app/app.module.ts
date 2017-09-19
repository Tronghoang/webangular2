import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { ProductCategoryComponent } from './main/product-category/product-category.component';
import { ProductComponent } from './main/product/product.component';
import { UserComponent } from './main/user/user.component';
import { FunctionComponent } from './main/function/function.component';
import { RoleComponent } from './main/role/role.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    HomeComponent,
    ProductCategoryComponent,
    ProductComponent,
    UserComponent,
    FunctionComponent,
    RoleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
