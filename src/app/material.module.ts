import { MatProgressSpinnerModule,
        MatNativeDateModule, MatToolbarModule, MatButtonModule, MatInputModule,
        MatCardModule, MatFormFieldModule, MatCheckboxModule, MatDatepickerModule,
        MatRadioModule, MatSelectModule, MatSnackBarModule, MatTabsModule, MatTableModule, MatListModule,
        MatSidenavModule, MatGridListModule} from '@angular/material';

import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatRadioModule,
        MatSelectModule,
        MatToolbarModule,
        MatGridListModule,
        MatNativeDateModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatListModule,
        MatSidenavModule
    ], exports: [
        MatButtonModule,
        MatGridListModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatRadioModule,
        MatSelectModule ,
        MatInputModule,
        MatNativeDateModule,
        MatToolbarModule,
        MatSnackBarModule,
        MatTabsModule,
        MatTableModule,
        MatListModule,
        MatSidenavModule
    ]
})
export class MaterialModule {}
