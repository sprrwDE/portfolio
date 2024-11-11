import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ImprintComponent } from './legal/imprint/imprint.component';
import { DataProtectionComponent } from './legal/data-protection/data-protection.component';

export const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'imprint', component: ImprintComponent},
    {path: 'data-protection', component: DataProtectionComponent}
];
