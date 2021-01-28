import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ItemsModule } from '../items/items.module';
import { AdComponent } from './ad/ad.component';
import { RouterModule } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddingComponent } from './adding/adding.component';
import { EditComponent } from './edit/edit.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';



@NgModule({
  declarations: [HomeComponent, AdComponent, SearchPageComponent, LoginComponent, RegisterComponent, AddingComponent, EditComponent, NotAuthorizedComponent],
  imports: [
    CommonModule,
    ItemsModule,
    RouterModule
  ],
  exports:[HomeComponent,AdComponent,SearchPageComponent,RegisterComponent ,EditComponent ,NotAuthorizedComponent]
})
export class PagesModule { }
