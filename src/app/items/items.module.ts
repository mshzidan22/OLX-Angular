import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCardComponent } from './home-card/home-card.component';
import { MaterialModule } from '../material/material.module';
import { MyDirectivesModule } from '../my-directives/my-directives.module';
import { AdTitleComponent } from './ad-title/ad-title.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AdInfoComponent } from './ad-info/ad-info.component';
import { ServicesModule } from '../services/services.module';
import { MainCategoriesComponent } from './mainCategories/mainCategories.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddComponent } from './add/add.component';
import { FileDragComponent } from './file-drag/file-drag.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { SettingsComponent } from './settings/settings.component';
import { UserAdsComponent } from './user-ads/user-ads.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { EditAdComponent } from './edit-ad/edit-ad.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { SavedDoneDialogComponent } from './saved-done-dialog/saved-done-dialog.component';
import { UnsaveCatalogComponent } from './unsave-catalog/unsave-catalog.component';
import { FooterComponent } from './footer/footer.component';
import { TrancatePipe } from './pipes/trancate.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { AppComponent } from '../app.component';


@NgModule({
  declarations: [HomeCardComponent, AdTitleComponent, SideBarComponent, AdInfoComponent, MainCategoriesComponent, NavBarComponent, SearchComponent, AdvancedSearchComponent, LoginFormComponent, SignUpComponent, AddComponent, FileDragComponent, MyaccountComponent, SettingsComponent, UserAdsComponent, DeleteDialogComponent, EditAdComponent, FavoritesComponent, LoginDialogComponent, SavedDoneDialogComponent, UnsaveCatalogComponent, FooterComponent, TrancatePipe],
  imports: [
    CommonModule,
    MaterialModule,
    MyDirectivesModule,
    ServicesModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule,
    NgxFileDropModule,
    TranslateModule


  ],
  exports: [
    HomeCardComponent,
    AdTitleComponent,
    SideBarComponent,
    AdInfoComponent,
    MainCategoriesComponent,
    NavBarComponent,
    SearchComponent,
    AdvancedSearchComponent,
    LoginFormComponent,
    SignUpComponent,
    AddComponent,
    MyaccountComponent,
    SettingsComponent,
    UserAdsComponent,
    DeleteDialogComponent,
    EditAdComponent,
    FavoritesComponent,
    LoginDialogComponent,
    SavedDoneDialogComponent,
    UnsaveCatalogComponent,
    FooterComponent

  ]
})
export class ItemsModule { }
