import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesComponent } from './items/favorites/favorites.component';
import { MyaccountComponent } from './items/myaccount/myaccount.component';
import { SettingsComponent } from './items/settings/settings.component';
import { AdComponent } from './pages/ad/ad.component';
import { AddingComponent } from './pages/adding/adding.component';
import { EditComponent } from './pages/edit/edit.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MyAccountPageComponent } from './pages/my-account-page/my-account-page.component';
import { NotAuthorizedComponent } from './pages/not-authorized/not-authorized.component';
import { RegisterComponent } from './pages/register/register.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { AuthGuardService } from './services/auth-guard.service';
import { EditGuardService } from './services/edit-guard.service';

const routes: Routes = [
{path:'home' , component : HomeComponent},
{path:'ad/:id' , component :AdComponent},
{path:'login' , component :LoginComponent},
{path:'register' , component :RegisterComponent},
{path:'adding' , component :AddingComponent , canActivate:[AuthGuardService]},
{path:'search' ,component:SearchPageComponent},
{path:'myaccount' , component : MyAccountPageComponent,canActivate :[AuthGuardService],
 children :[ 
  {path :'myads' , component:MyaccountComponent},
  {path :'settings' , component:SettingsComponent},
  {path :'fav' , component:FavoritesComponent}
]
},



{path : 'myaccount/edit/:id' , component:EditComponent , canActivate:[EditGuardService]},
{path : 'notAllowed' , component:NotAuthorizedComponent},

{path:'**', component : HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{scrollPositionRestoration : 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
