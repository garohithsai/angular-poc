import { MatProgressSpinnerModule,
        MatNativeDateModule, MatToolbarModule, MatButtonModule, MatInputModule,
        MatCardModule, MatFormFieldModule, MatCheckboxModule, MatDatepickerModule,
        MatRadioModule, MatSelectModule, MatSnackBarModule, MatTabsModule, MatTableModule, MatListModule,
        MatSidenavModule, MatGridListModule, MatPaginatorModule, MatSortModule} from '@angular/material';

import { NgModule, ModuleWithProviders } from '@angular/core';

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
        MatSortModule,
        MatSidenavModule,
        MatPaginatorModule
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
        MatSortModule,
        MatSidenavModule,
        MatPaginatorModule
    ]
})
export class MaterialModule {}
