import { NgModule } from '@angular/core';
import { MatIconModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatSortModule,
  MatProgressSpinnerModule, MatTabsModule, MatDatepickerModule, MatNativeDateModule,
  MatSlideToggleModule, MatRadioModule, MatExpansionModule, MatDialogModule,
  MatButtonToggleModule, MatStepperModule, MatToolbarModule, MatMenuModule, MatSidenavModule, MatListModule} from '@angular/material';
import { MatDividerModule } from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatTableModule,
    MatSelectModule,
    MatDatepickerModule,
    MatTabsModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatIconModule,
    MatRadioModule,
    MatExpansionModule,
    MatDividerModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
  ],
  exports:[
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatIconModule,
    MatRadioModule,
    MatExpansionModule,
    MatDividerModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule
  ],
  declarations: []
})
export class MaterialModule { }
