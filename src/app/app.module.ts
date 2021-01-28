import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ItemsModule } from './items/items.module';
import { MyDirectivesModule } from './my-directives/my-directives.module';
import { ServicesModule } from './services/services.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { PagesModule } from './pages/pages.module';
import { NgxFileDropModule } from 'ngx-file-drop';
import { MyAccountPageComponent } from './pages/my-account-page/my-account-page.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AppComponent,
    MyAccountPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ItemsModule,
    MyDirectivesModule,
    ServicesModule,
    PagesModule,
    NgxFileDropModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  exports:[
    TranslateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
