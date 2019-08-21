import { MatProgressSpinnerModule,
        MatNativeDateModule, MatToolbarModule, MatButtonModule, MatInputModule,
        MatCardModule, MatFormFieldModule, MatCheckboxModule, MatDatepickerModule,
        MatRadioModule, MatSelectModule, MatSnackBarModule, MatSidenavModule, MatListModule} from '@angular/material';

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
        MatNativeDateModule,
        MatProgressSpinnerModule
    ], exports: [
        MatButtonModule,
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
        MatSidenavModule,
        MatListModule
    ]
})
export class MaterialModule {}
