import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';


















const materials = [
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatChipsModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatMenuModule,
  MatInputModule,
  MatSelectModule,
  MatButtonToggleModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatTabsModule,
  MatDialogModule,
  MatDividerModule,
  MatTooltipModule
  
  
];



@NgModule({
  imports: [materials],
  exports : [materials]
})
export class MaterialModule { }
